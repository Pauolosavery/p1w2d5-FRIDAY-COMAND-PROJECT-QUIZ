const Controller = require("./Controller");
const Model = require("./Model");
const QuizViewer = require("./View");

const model = new Model('./topics');
const view = new QuizViewer();
const controller = new Controller(model, view);

controller.run();