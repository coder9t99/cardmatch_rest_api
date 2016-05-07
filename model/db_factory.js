/**
 * Created by quentinlin on 7/05/2016.
 */

var mongoose = require('mongoose');
var connection_string = 'mongodb://127.0.0.1:27017/highscore';
if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    connection_string = 'mongodb://' +
        process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME ;
}

module.exports = function() { return mongoose.createConnection(connection_string); };