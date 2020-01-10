
import React, { Component } from "react";

import Bar from "../components/atomic/bar/bar";

export default class Resume extends Component {
	
	render() {
		
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
				
				
				{/* <div className="row work">
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
				</div> */}
				
				
				<div className="row skill">
					<div className="three columns header-col">
						<h1>
							<span>Skills</span>
						</h1>
					</div>
					
					
					<div className="nine columns main-col float-right asd">
						
						
						<div className="bars">
							<p>Languages</p>
							<ul className="skills">
							
								<Bar name={"Javascript + ES6"} percentage={70}/>
								<Bar name={"PHP"} percentage={40}/>
								<Bar name={"SQF"} percentage={99}/>
							
								
							</ul>
						</div>
						
						<div className="bars">
							<p>Frontend</p>
							<ul className="skills">
							
								<Bar name={"React.js 16"} percentage={60}/>
								<Bar name={"Angular 8"} percentage={60}/>
								<Bar name={"HTML5"} percentage={55}/>
								<Bar name={"CSS3 + SCSS"} percentage={40}/>
							
								
							</ul>
						</div>
						
						<div className="bars">
							<p>Backend</p>
							<ul className="skills">
								
								<Bar name={"Express"} percentage={80}/>
								<Bar name={"Laravel"} percentage={10}/>
								<Bar name={"Mongoose"} percentage={50}/>
								<Bar name={"Sequelize"} percentage={20}/>
								
							</ul>
						</div>

						<div className="bars">
							<p>DB</p>
							<ul className="skills">
								
								<Bar name={"MongoDB"} percentage={80}/>
								<Bar name={"MySQL"} percentage={70}/>
								
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
