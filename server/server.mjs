import express from 'express';
import bp from 'body-parser';
import morgan from 'morgan';

const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(morgan('dev'));

let id = 0;
const db = [];

app.post('/todo', (req, res) => {
    const newTodo = {
        id: ++id,
        text: req.body.text,
    }

    db.push(newTodo);

    res.status(201);
    res.json(newTodo);
});

app.get('/todos', (req, res) => {
    res.json(db);
});

app.get('/todo/:id', (req, res) => {
    const todo = db.find((t) => t.id === (+req.params.id));
    res.json({ data: todo });
});

app.listen(8000, () => {
    console.log('Listening on port 8000');
});