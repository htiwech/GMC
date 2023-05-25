const user = require("../models/user");

exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).json({ message: "Content can not be emtpy!" });
    return;
  }

  // new user
  const newuser = new user({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  // save user in the database
  newuser
    .save()
    .then(() => {
      res.status(200).json({
        message: "user added",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    });
};

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;

    user
      .findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "Not found user with id " + id });
        } else {
          res.status(200).json(data);
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Erro retrieving user with id " + id });
      });
  } else {
    user
      .find()
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        res.status(500).json({
          message:
            err.message || "Error Occurred while retriving user information",
        });
      });
  }
};

// Update a new idetified user by user id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  user
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: `Cannot Update user with ${id}. Maybe user not found!`,
        });
      } else {
        res.status(200).json(data);
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error Update user information" });
    });
};

// Delete a user with specified user id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  user
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .json({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.status(200).json({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Could not delete User with id=" + id,
      });
    });
};
