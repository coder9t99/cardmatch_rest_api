/**
 * Created by quentinlin on 7/05/2016.
 */

var mongoose = require('mongoose');
var Model = null;
var modelName = 'highscore';
var modelSchema = new mongoose.Schema({
    'name': String,
    'score': Number,
    'batch_tag': Number
});

module.exports = function(db) {
    if (db && Model === null) {
        Model = db.model(modelName, modelSchema);
    }
    return Model;
};