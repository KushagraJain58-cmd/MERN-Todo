import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Login from './pages/Login.js';
// import SignUp from './pages/Signup.js';
// import Todo from './pages/Todo.js';
import Routers from './routes/Router';

const App = () => {
	return (
		<div>
			<Routers />
		</div>
		// <Routes>
		// 	<Route path="/login" element={<Login />} />
		// 	<Route path="/todo" element={<Todo />} />
		// </Routes>
	);
};

export default App;
