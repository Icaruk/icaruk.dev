import React, { Component } from "react";
export default class Footer extends Component {
	render() {
		let resumeData = this.props.resumeData;
		return (
			<footer>
				
				<section id="contactme"></section>
				
				<div className="row">
					<div className="twelve columns">
						<ul className="social-links">
							
							<a
								className="socialIcon"
								href="https://www.github.com/icaruk"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa fa-github"></i>
							</a>
							
							<a
								className="socialIcon"
								href="https://www.linkedin.com/in/adrián-t-60a5b3183/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa fa-linkedin"></i>
							</a>
							
							<a
								className="socialIcon"
								href="mailto:adrian.tdh@hotmail.com?subject=¡Hola!"
							>
								<i className="fa fa-envelope"></i>
							</a>
							
						</ul>
					</div>
					<div id="go-top">
						<a className="smoothscroll" title="Back to Top" href="#home">
							<i className="icon-up-open" />
						</a>
					</div>
				</div>
			</footer>
		);
	}
}
