import React from 'react';
import { useState } from 'react';
const API_BASE = 'http://localhost:3000';

const SignUp = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ pass, setPass ] = useState('');

	async function registerUser(event) {
		event.preventDefault();

		const data = await fetch(API_BASE + '/todo/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				pass
			})
		}).then((res) => res.json());

		// const data = await response.json();

		console.log(data);
	}
	return (
		<div>
			<h1>Register</h1>
			<form onSubmit={registerUser}>
				<input
					type="text"
					value={name}
					placeholder="Name"
					onChange={(event) => {
						setName(event.target.value);
					}}
				/>
				<br />
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

export default SignUp;
