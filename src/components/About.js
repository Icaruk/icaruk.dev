
import React, { Component } from "react";



export default class About extends Component {
	
	render() {
		
		return (
			<section id="about">
				<div className="row">
					<div className="three columns">
						<img className="profile-pic" src="images/colores.png" alt="" />
					</div>
					
					<div className="nine columns main-col">
						
						<h2>Sobre mi</h2>
						<p>
							Estudié sonido mientras aprendía a programar a cabezazos en un lenguage que nadie conoce.
							Trabajé como técnico de sonido (y de audiovisuales en general) mientras desarrollaba un videojuego.
							Para hacer un cambio en mi vida hice el bootcamp de Full Stack Developer de GeeksHubs y desde entonces no paro de aprender.
						</p>
						
						<div className="row">
							<div className="columns contact-details">
								<h2>Contacto</h2>
								<p className="address">
									<span>Adrián Tortajada Del Hoyo</span>
									<br></br>
									<span>Valencia, España</span>
									<br></br>
									<a
										href="mailto:adrian.tdh@hotmail.com?subject=¡Hola!"
									> adrian.tdh@hotmail.com</a>
								</p>
							</div>
						</div>
						
					</div>
					
				</div>
			</section>
		);
	}
}
