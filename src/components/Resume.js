
import React, { Component } from "react";


export default class Resume extends Component {
	
	render() {
		
		let resumeData = this.props.resumeData;
		
		
		return (
			
			<section id="resume">
				<div className="row education">
					<div className="three columns header-col">
						<h1>
							<span>Estudios</span>
						</h1>
					</div>
					
					<div className="nine columns main-col">
						
						<div className="row item">
							<div className="twelve columns">
								<h3>GeeksHubs</h3>
								<p className="info">
									Bootcamp Full Stack Developer
									<span>&bull;</span>{" "}
									<em className="date">Ago 2019 - Feb 2020</em>
								</p>
							</div>
						</div>
						
						<div className="row item">
							<div className="twelve columns">
								<h3>Juan Comenius</h3>
								<p className="info">
									Técnico superior en Sonido para Audiovisuales y Espectáculos
									<span>&bull;</span>{" "}
									<em className="date">2016 - 2018</em>
								</p>
							</div>
						</div>
						
						<div className="row item">
							<div className="twelve columns">
								<h3>Colegio Sagrada Familia</h3>
								<p className="info">
									Técnico en Video Disc-Jockey y Sonido
									<span>&bull;</span>{" "}
									<em className="date">2014 - 2016</em>
								</p>
							</div>
						</div>
						
					</div>
				</div>
				
				
				
				<div className="row work">
					<div className="three columns header-col">
						<h1>
							<span>Experiencia</span>
						</h1>
					</div>
					
					<div className="nine columns main-col">
						
						<div className="row item">
							<div className="twelve columns">
								
								<h3>Empresa</h3>
								<p className="info">
									Full Stack Developer
									<span>&bull;</span>{" "}
									<em className="date">
										Ene 2018 - Ene 2019
									</em>
								</p>
								<p>Logros o proyectos</p>
								
							</div>
						</div>
						
						
					</div>
				</div>
				
				
				
				<div className="row skill">
					<div className="three columns header-col">
						<h1>
							<span>Skills</span>
						</h1>
					</div>
					
					<div className="nine columns main-col">
						<p>Frontend</p>
						
						<div className="bars">
							<ul className="skills">
								{resumeData.skills &&
									resumeData.skills.map(item => {
										return (
											<li>
												<span className={`bar-expand ${item.skillname.toLowerCase()}`}></span>
												<em>{item.skillname}</em>
											</li>
										);
									})}
							</ul>
						</div>
					</div>
					
					
					
					<div className="nine columns main-col">
						<p>Backend</p>
						
						<div className="bars">
							<ul className="skills">
								{resumeData.skills &&
									resumeData.skills.map(item => {
										return (
											<li>
												<span className={`bar-expand ${item.skillname.toLowerCase()}`}></span>
												<em>{item.skillname}</em>
											</li>
										);
									})}
							</ul>
						</div>
					</div>
					
					
				</div>
				
				
				
				<div className="row skill">
					<div className="three columns header-col">
						<h1>
							<span>Idiomas</span>
						</h1>
					</div>
					
					<div className="nine columns main-col">
						
						<div className="bars">
							<ul className="skills">
								
								<div className="row item">
									<div className="twelve columns">
										<h3>Español</h3>
										<p className="info">
											Nativo
										</p>
									</div>
								</div>
								
								<div className="row item">
									<div className="twelve columns">
										<h3>Francés</h3>
										<pre className="info">
											Hablado: alto <br/>
											Escrito: bajo <br/>
											Leído: bajo-medio
										</pre>
									</div>
								</div>
								
								<div className="row item">
									<div className="twelve columns">
										<h3>Inglés</h3>
										<p className="info">
											Hablado: bajo-medio <br/>
											Escrito: medio <br/>
											Leído: alto
										</p>
									</div>
								</div>
								
							</ul>
						</div>
					</div>
				</div>
			
			
			
			</section>
		);
	}
}
