
import React from "react";

import "./bar.css";

import Fade from 'react-reveal/Fade';



class Bar extends React.Component {
	
	render() {
		return(
			<Fade bottom>
				<div className="boxBar">
					
					<p className="textBar">{this.props.name}</p>
					
					<div className="backgroundBar">
						<div className="bar" style={{width: this.props.percentage + '%'}}>&nbsp;</div>
					</div>
					
				</div>
			</Fade>
		);
	};
	
	
};


export default Bar;