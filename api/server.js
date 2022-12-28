const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json()); //allow us to use content type json
app.use(cors()); // stop any cross origin errors that we get

mongoose.set('strictQuery', true);
mongoose //creates a database
	.connect('mongodb://127.0.0.1:27017/mern-todo', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('Connected to DB'))
	.catch(console.error);

const Todo = require('./models/Todo');
const { findByIdAndDelete } = require('./models/Todo');
const User = require('./models/User');

app.get('/todos', async (req, res) => {
	const todos = await Todo.find();
	res.json(todos); //store our todos in there
});

app.post('/todo/new', (req, res) => {
	//create new todo in our mongodb database
	const todo = new Todo({
		text: req.body.text
	});

	todo.save(); //saves todo in our actual collection
	res.json(todo);
});

app.delete('/todo/delete/:id', async (req, res) => {
	const result = await Todo.findByIdAndDelete(req.params.id); //built in func to mongoose
	res.json(result);
});

//PUT
app.get('/todo/complete/:id', async (req, res) => {
	const todo = await Todo.findById(req.params.id);
	todo.complete = !todo.complete;
	todo.save();
	res.json(todo);
});

//POST register USER
app.post('/todo/register', async (req, res) => {
	console.log(req.body);
	try {
		const user = await User.create({
			name: req.body.name,
			email: req.body.email,
			pass: req.body.pass
		});
		user.save();
		res.json({ status: 'ok' });
	} catch (err) {
		console.log(err);
		res.json({ status: 'err', error: 'Duplicate email' });
	}
});

//GET USER
app.get('/todo/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
		pass: req.body.pass
	});
	// const user = await User.find();
	// res.json(user);
	if (user) {
		return res.json({ status: 'ok', user: true });
	} else {
		return res.json({ status: 'err', user: false });
	}
});

app.listen(3000, () => console.log('Server started on port 3000'));
