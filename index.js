const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require('./data/categories.json')
const courses = require('./data/Course.json')

app.get('/', (req, res) =>{
     res.send('api is running');
})

app.get('/categories', (req, res) =>{
     res.send(categories)
})

app.get('/courses', (req, res) =>{
     res.send(courses);
})

app.listen(port, () =>{
     console.log('server is running at port ', port)
})