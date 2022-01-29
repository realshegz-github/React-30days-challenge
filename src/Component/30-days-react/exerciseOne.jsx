import React from 'react'
import html from '../../images/html.png'
import css from '../../images/css.png'
import javascript from '../../images/javascript.jpeg'
import react from '../../images/react.png'
import '../../styles/skills.css'


function Skills() {
    return (
			<div className="header">
					<h3>Front End Technology</h3>
				<div className="images">
					<img src={html} alt="html" />
					<img src={css} alt="css" />
					<img src={javascript} alt="javasript" />
					<img src={react} alt="react" />
				</div>
			</div>
		);
}

export default Skills;
