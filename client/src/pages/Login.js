import React from 'react';
import { useState } from 'react';
const API_BASE = 'http://localhost:3000';

const Login = () => {
	const [ email, setEmail ] = useState('');
	const [ pass, setPass ] = useState('');

	async function loginUser(event) {
		event.preventDefault();

		const data = await fetch(API_BASE + '/todo/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				pass
			})
		}).then((res) => res.json());

		// const data = await response.json();

		console.log(data);
	}
	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
				<input
					type="email"
					value={email}
					placeholder="Email"
					onChange={(event) => {
						setEmail(event.target.value);
					}}
				/>
				<br />
				<input
					type="password"
					value={pass}
					placeholder="Password"
					onChange={(event) => {
						setPass(event.target.value);
					}}
				/>
				<br />
				<input type="submit" value="Register" />
			</form>
		</div>
	);
};

export default Login;
