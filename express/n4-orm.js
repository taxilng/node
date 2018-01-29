"use strict";

const express = require('express');
const orm = require('orm');
const app = express();

app.use(orm.express("mysql://root:@127.0.0.1/taxilng", {
    define: function (db, models, next) {
        models.user = db.define("users", {
            uid: {type: 'serial', key: true},
            uname: String,
            uage: Number,
            uqq: String
        });
        next();
    }
}));
app.listen(8090);

app.get("/users", function (req, res) {
    req.models.user.find({}, (err, users) => {
        if(err) throw err
        res.send(users)
    });
});

app.get("/users/:id", function (req, res) {
    const id = req.params.id
    req.models.user.find({uid: id}, (err, users) => {
        if(err) throw err
        res.send(users[0])
    });
});

app.get("/users/delete/:id", function (req, res) {
    const id = req.params.id
    req.models.user.get(id, (err, user) => {
        user.remove((err) => {
            if(err) throw err
            res.send({code: 1, msg: "删除成功"})
        })
    }) //根据主键

});