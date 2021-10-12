const express = require('express'); //This is a funtion that allows the application to run
const fortunes = require('./data/fortunes.json');

// const port = 3000; 

const app = express();

app.get('/fortunes', (req, res) => {
    res.json(fortunes);
});

// app.get('fortunes/random', (req, res) => {
//     console.log('Requesting Random Fortune');
// });

// app.get('/fortunes/random', (req, res) => {
//     console.log('Requesting Random Fortune');

//     const random_index = Math.floor(Math.random() * fortunes.length);

//     const r_fortune = fortunes[random_index];

//     res.json(r_fortune);
// });

app.get('/fortunes/random', (req, res) => {
    // console.log('Requesting Random Fortune');

    res.json(fortunes[Math.floor(Math.random() * fortunes.length)]);
});

app.get('/fortunes/:id', (req, res) => {
    // console.log(req.params);

    res.json(fortunes.find(f => f.id == req.params.id));
});

module.exports = app;


// app.listen(port, () => console.log(`Listening on port ${port}`));