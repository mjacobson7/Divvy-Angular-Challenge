const controller = require('./controller');

module.exports = app => {
    app.get('/getItemId', controller.getItemId);
}