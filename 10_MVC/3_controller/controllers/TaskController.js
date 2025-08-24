const Task = require('../models/');

module.exports = class TaskController {
  static createTask(req, res) {
    res.render('tasks/create');
  }
};
