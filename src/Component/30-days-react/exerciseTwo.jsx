import React from 'react'
import "../../styles/signup.css"

function SignUp() {
    return (
			<div className="signup">
				<div className="content">
					<h1>SUBSCRIBE</h1>
					<p>sing up with your email address to receive news and updates</p>
				</div>
				<div className="input">
					<input type="text" placeholder="First name" />
					<input type="text" placeholder="Last name" />
					<input type="text" placeholder="email" /> <br />
					<div className='sub-button'>
						<button>subscribe</button>
					</div>
				</div>
			</div>
		);
}

export default SignUp
