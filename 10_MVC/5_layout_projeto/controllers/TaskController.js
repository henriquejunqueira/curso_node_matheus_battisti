import Task from '../models/Task.js';

export default class TaskController {
  static createtask(req, res) {
    res.render('tasks/create');
  }

  static showTasks(req, res) {
    res.render('tasks/all');
  }
}
