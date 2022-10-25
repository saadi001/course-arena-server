const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require('./data/categories.json')
const courses = require('./data/Course.json')

app.get('/', (req, res) => {
     res.send('api is running');
})

app.get('/categories', (req, res) => {
     res.send(categories)
})

app.get('/categories/:id', (req, res) => {
     const id = req.params.id;
     if (id == '06') {
          res.send(courses);
     }
     else {
          const categoryId = categories.filter(c => c.id == id);
          res.send(categoryId);
     }
})

app.get('/courses', (req, res) => {
     res.send(courses);
})

app.get('/courses/:id', (req, res) => {
     const id = req.params.id;
     const selectedCourse = courses.find(c => c.id == id);

     res.send(selectedCourse);
})

app.listen(port, () => {
     console.log('server is running at port ', port)
})