/**
 * Created by quentinlin on 7/05/2016.
 */

module.exports = function(ctrl) {
    var express = require('express');
    var router = express.Router();

    var composeMessage = function (err, data) {
        var message;
        if (err) message = {"error": true, "message": "Error fetching data"};
        else    message = {"error": false, "message": data};

        return message;
    };

    router.route('/lock')
        .get(function (req, res) {
            ctrl.lock(function (err, nextLock) {
                res.json(composeMessage(err, nextLock));
            });
        });

    router.route('/locks')
        .get(function (req, res) {
            ctrl.listLocks(function (err, data) {
                res.json(composeMessage(err, data));
            });
        });

    router.route('/')
        .get(function (req, res) {
            ctrl.list(function (err, data) {
                res.json(composeMessage(err, data));
            });
        })
        .post(function (req, res) {
            var data = req.body;
            var callback = function (err) { res.json(composeMessage(err, "Data added")); };
            if (Array.isArray(data)) ctrl.addMany(data, callback);
            else                     ctrl.add(data, callback);
        });

    router.route('/from_batch/:batch_id/take/:take/skip/:skip')
        .get(function (req, res) {
            var batchTag = parseInt(req.params.batch_id);
            var take     = parseInt(req.params.take);
            var skip     = parseInt(req.params.skip);
            ctrl.listFromBatch(batchTag, take, skip, function (err, data) {
                res.json(composeMessage(err, data));
            })
        });

    return router;
};
