const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughtData = await Thought.find();
      return res.status(200).json(thoughtData);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thoughtData = await Thought.findOne({ _id: req.params.id });
      return res.status(200).json(thoughtData);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
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
  async deleteThought(req, res) {
    try {
      const deletedThought = await Thought.findOneAndRemove({ _id: req.params.id });
      return res.status(200).json(deletedThought);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
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
