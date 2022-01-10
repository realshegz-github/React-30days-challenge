import React from 'react'
import nwMe from "../../images/nwMe.jpeg"
import "../../styles/profile.css"
import { FcApproval } from 'react-icons/fc';
const topImage = {
    width: 200,
    height: 200,
    borderRadius: 500
}

function Profile() {
    return (
			<div className="ProfileImage">
				<img src={nwMe} alt="profileImage" style={topImage} />
				<p>
					<strong>ABIODUN AKINTUNDE</strong>
				</p>
				<p className="role">
					Junior Developer, Nigeria <FcApproval/>
				</p>
				<div className="skill">
					<p>
						<strong>SKILLS</strong>
					</p>
					<input className="styled-skill" type="button" value="HTML" />
					<input className="styled-skill" type="button" value="CSS" />
					<input className="styled-skill" type="button" value="JS" />
					<input className="styled-skill" type="button" value="Node" />
					<input className="styled-skill" type="button" value="React" />
					<input className="styled-skill" type="button" value="Sass" />
					<input className="styled-skill" type="button" value="Git" />
					<input className="styled-skill" type="button" value="MYSQL" />
					<input className="styled-skill" type="button" value="DOM" />
					<input className="styled-skill" type="button" value="Wordpress" />
				</div>
				<footer>
					<small>joined on Jan 10, 2022</small>
				</footer>
			</div>
		);
}

export default Profile;
