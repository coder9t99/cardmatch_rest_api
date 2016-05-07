/**
 * Created by quentinlin on 7/05/2016.
 */

var highscore = function(mongooseDb) {
    this.Lock      = require('../model/highscore_lock')(mongooseDb);
    this.Highscore = require('../model/highscore')(mongooseDb);
};

highscore.prototype.lock = function(callback) {
    var Lock = this.Lock;
    Lock.findOne().sort({lock:-1}).exec(function(err, data) {
        if (err) {
            calllback(err,{lock:-1});
            return;
        }
        var nextLock = (data && data.lock > 0 ? data.lock : 0) + 1;
        var newLock = new Lock();
        newLock.lock = nextLock;

        newLock.save(function(errIn) {
            callback(errIn, newLock);
        });

    });
};

highscore.prototype.listLocks = function(callback) {
    this.Lock.find().exec(callback);
};

highscore.prototype.list = function(callback) {
    this.Highscore.find().exec(callback);
};

highscore.prototype.listFromBatch = function(batchTag, take, skip, callback) {
    var HighScore = this.Highscore;
    HighScore
        .where('batch_tag').gte(batchTag)
        .skip(skip)
        .limit(take)
        .exec(function(err, data) {
            if (err)
                callback(err, data);
            else
                HighScore.count(function(err, count) {
                    callback(err, { scores : data, totalCount : count, skip: skip });
                });
        });
}

highscore.prototype.add = function(highscore, callback) {
    var model = new this.Highscore(highscore);
    model.save(callback);
};

highscore.prototype.addMany = function(highscores, callback) {
    this.Highscore.insertMany(highscores, callback);
};

module.exports = highscore;
