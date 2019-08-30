import React from 'react';
import './sign-in-up.styles.scss';
import SignIn from '../sign-in/sign-in';
import SignUp from '../sign-up/sign-up';

const SignInUp = () => (
	<div>
		<h1 className='welcome'> Welcome to Bookstore CMS</h1>
		<div className='sign-in-up'>
			<SignIn />
			<SignUp />
		</div>
	</div>
)

export default SignInUp; 