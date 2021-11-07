const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;
const path = require('path')
const db = require('./db/db.json')


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/notes', (req,res) => {
res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.get('/api/notes', (req,res) =>{
    return res.json(db)
})

app.post('/api/notes', (req,res) =>{
    console.log(req.body);
    res.send('this works')
})

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
    });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });