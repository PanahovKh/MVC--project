const Model = require('./js/Model.js');
const View = require('./js/View.js');
const Controller = require('./js/Controller.js');

function initProject() {
    const model = new Model();
    const view = new View();
    const controller = new Controller(model, view);
}

initProject()