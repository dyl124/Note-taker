const http = require('http');

const hostname = 'localhost';
const port = 3000;
const express = require("express");
const fs = require('fs');


const app = express();
const server = http.createServer((req, res) => {
    app.get('/api/notes', (req, res, next) => {
        fs.readfile(`../db/db.json`, 'utf-8', (err,data) => {
            console.log(result)
            res.send('hello world')
        
        
            res.status.json(500);
            return res.json(`error reading file`);
        })
        res.status(200);
        return res.send(data);
        })
        
        
        app.post('http://localhost:3000/api/notes', (req, res) => {
            console.log("http post request recieved");
        })
        app.put('http://localhost:3000/api/notes', (req, res) => {
            console.log("http put request recieved");
        })
        app.delete('http://localhost:3000/api/notes', (req, res) => {
            console.log("http delete request recieved");
        })
        app.listen(3000, () => {
            console.log('app is now running and working 3000')
        })
});
