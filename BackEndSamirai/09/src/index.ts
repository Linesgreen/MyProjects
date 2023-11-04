import express, {response} from 'express'

const app = express();
const port = 3000
const jsonBodyMiddlevare = express.json();
app.use(jsonBodyMiddlevare)
const db = {
    courses: [
        {id:1, title : 'Front - end'},
        {id:2, title : 'Back - end'},
        {id:3, title : 'qa'},
        {id:4, title : 'devOPS'},
    ]
}

const HTTP_STATUSES = {
    OK_200 : 200,
    CREATED_201: 201,
    NO_CONTENT: 204,

    NOT_FOUND_404: 404,
    BAD_REQUEST_400: 400

}

app.get('/', (req, res) => {
    res.json('BIBOS');
});
app.get('/courses', (req, res) => {
    let foundCourses = db.courses;
    if (req.query.title) {
        foundCourses = foundCourses
            .filter(c => c.title.indexOf(req.query.title as string) > -1)
    }

    res.json(foundCourses)
});
app.get('/courses/:id', (req, res) => { // Исправлено здесь
    let foundCourses = db.courses.find(c => c.id === +req.params.id);
    if (!foundCourses) {
        response.sendStatus(HTTP_STATUSES.NOT_FOUND_404)
        return;
    }

    res.json( foundCourses)
});
app.post('/courses', (req, res) => {
    if(!req.body.title) {
        res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400)
        return;
    }

    const newCourse = {
        id: +(new Date()),
        title: req.body.title
    };

    db.courses.push(newCourse)
    console.log(newCourse)
    res.status(HTTP_STATUSES.CREATED_201).json(newCourse)
})
app.delete('/courses/:id', (req, res) => { // Исправлено здесь
    db.courses = db.courses.filter(c => c.id !== +req.params.id);
    res.sendStatus(HTTP_STATUSES.NO_CONTENT)
});
app.put('/courses/:id', (req, res) => { // Исправлено здесь
    if (!req.body.title) {
        response.sendStatus(HTTP_STATUSES.BAD_REQUEST_400)
        return;
    }

    let foundCourses = db.courses.find(c => c.id === +req.params.id);

    if (!foundCourses) {
        response.sendStatus(HTTP_STATUSES.BAD_REQUEST_400)
        return;
    }

    foundCourses.title = req.body.title;
    res.sendStatus(HTTP_STATUSES.NO_CONTENT)
});
app.listen(port, () => {
    console.log(`Example ap listening on port ${port}`)
})