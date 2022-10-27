const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Custom API Running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const categoryCourses = courses.filter(course => course.category_id === id);
    res.send(categoryCourses);
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log('Server running on port: ', port);
});