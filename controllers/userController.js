const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
  async getUsers(req, res) {
    try {
      const userData = await User.find();
      return res.status(200).json(userData);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const userData = await User.findOne({ _id: req.params.userId });
      return res.status(200).json(userData);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const newUser = User.create(req.body);
      res.status(200).json(newUser);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findOneAndRemove({ _id: req.params.userId });

      await Thought.deleteMany({ username: deletedUser.username });

      res.status(200).json(deletedUser);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      const newFriend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      res.status(200).json(newFriend);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  async deleteFriend(req, res) {
    try {
      const deletedFriend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      res.status(200).json(deletedFriend);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
