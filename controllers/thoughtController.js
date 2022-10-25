const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
  // Method to get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughtData = await Thought.find();
      return res.status(200).json(thoughtData);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  // Method to get a single thought
  async getSingleThought(req, res) {
    try {
      const thoughtData = await Thought.findOne({ _id: req.params.id });
      return res.status(200).json(thoughtData);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  // Method to create a new thought
  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);

      await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: newThought._id } },
        { runValidators: true, new: true }
      );

      return res.status(200).json(newThought);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  // Method to update an existing thought
  async updateThought(req, res) {
    try {
      const updateThought = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      return res.status(200).json(updateThought);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  // Method to delete a thought
  async deleteThought(req, res) {
    try {
      const deletedThought = await Thought.findOneAndRemove({ _id: req.params.id });
      return res.status(200).json(deletedThought);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  // Method to add a reaction to a thought
  async addReaction(req, res) {
    try {
      const newReaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      res.status(200).json(newReaction);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  // Method to delete a reaction from a thought
  async deleteReaction(req, res) {
    try {
      const deletedReaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      res.status(200).json(deletedReaction);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
