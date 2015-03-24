//dbserver.js
//
var url = require('url');
//var qs = require('querystring');
var DBManager = require('./mongodbmanager');
//
module.export.process = function(req, res, next) {
    var args = url.parse(req.url, true);
    var spath = args.pathname;
    var pp = spath.split('/');
    var bProc = false;
    var n = pp.length;
    if ((n > 1) && (pp[0] == 'api')) {
        bProc = true;
        var collectionName = pp[1];
        var id = null;
        if (n > 2) {
            id = pp[2];
        }
        if (req.method == 'GET') {
            var query = args.query;
            var bcount = false;
            var skip = 0;
            var limit = 0;
            var ppp = {};
            for (var k in query) {
                var v = query[k];
                if (k == '$count') {
                    bcount = true;
                }
                else if (k == '$limit') {
                    limit = v;
                }
                else if (k == '$skip') {
                    skip = v;
                }
                else {
                    ppp[k] = v;
                }
            } //
            if (bcount) {
                DBManager.get_count(collectionName, ppp).then(function(results) {
                    res.json({
                        count: results
                    });
                }).catch(function(err) {
                    next(err);
                });
            }
            else {
                DBManager.get_all(collectionName, ppp, skip, limit).then(function(results) {
                    res.json(results);
                }).catch(function(err) {
                    next(err);
                });
            }
        }
        else if (req.method == 'DELETE') {
            DBManager.remove_one(collectionName, id).then(function(result) {
                res.json((result == 1) ? {
                    msg: 'success'
                } : {
                    msg: 'error'
                });
            }).catch(function(err) {
                next(err);
            });
        }
        else if (req.method == 'POST') {
            var body = '';
            req.on('data', function(data) {
                body += data;
                // Too much POST data, kill the connection!
                // if (body.length > 1e6)
                //   request.connection.destroy();
            });
            req.on('end', function() {
                var post = JSON.parse(body);
                DBManager.insert_one(collectionName, post).then(function(results) {
                    res.json(results);
                }).catch(function(err) {
                    next(err);
                });
            });
        }
        else if (req.method == 'PUT') {
            var body = '';
            req.on('data', function(data) {
                body += data;
                // Too much POST data, kill the connection!
                // if (body.length > 1e6)
                //   request.connection.destroy();
            });
            req.on('end', function() {
                var post = JSON.parse(body);
                DBManager.update_one(collectionName, id, post).then(function(result) {
                    res.json((result == 1) ? {
                        msg: 'success'
                    } : {
                        msg: 'error'
                    });
                }).catch(function(err) {
                    next(err);
                });
            });
        }
    }
    return bProc;
};