import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login.js';
import SignUp from '../pages/Signup.js';
// import SignUp from './pages/Signup.js';
import Todo from '../pages/Todo.js';

const Routers = () => {
	return (
		// <div>
		// 	<Login />
		// 	<SignUp />
		// 	<Todo />
		// </div>
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<SignUp />} />
			<Route path="/todo" element={<Todo />} />
		</Routes>
	);
};

export default Routers;
