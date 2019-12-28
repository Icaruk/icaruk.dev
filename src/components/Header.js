import React, { Component } from "react";



export default class Header extends Component {
	
	render() {
		
		return (
			<React.Fragment>
				<header id="home">
					<nav id="nav-wrap">
						<a className="mobile-btn" href="#nav-wrap" title="Show navigation">
							Mostrar navegación
						</a>
						<a className="mobile-btn" href="#" title="Hide navigation">
							Ocultar navegación
						</a>
						<ul id="nav" className="nav">
							<li className="current">
								<a className="smoothscroll" href="#home">
									Home
								</a>
							</li>
							<li>
								<a className="smoothscroll" href="#about">
									Sobre mi
								</a>
							</li>
							<li>
								<a className="smoothscroll" href="#resume">
									Skills
								</a>
							</li>
							<li>
								<a className="smoothscroll" href="#portfolio">
									Experiencia
								</a>
							</li>
							<li>
								<a className="smoothscroll" href="#contact">
									Contacto
								</a>
							</li>
						</ul>
					</nav>
					
					<div className="row banner">
						<div className="banner-text">
							<h1 className="responsive-headline">Soy Adrián "Icaruk"</h1>
							<h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
								Soy Full Stack Developer.<br/>Me gusta crear y construir, prefiero seguir aprendiendo nuevas tecnologías y no quedarme estancado. Me encantan los videojuegos, pero sobretodo crearlos.
							</h3>
							<hr />
							<ul className="social">
								
								<li>
									<a href="https://www.linkedin.com/in/adrián-t-60a5b3183/" target="_blank" rel="noopener noreferrer">
										<i className="fa fa-linkedin"></i>
									</a>
								</li>
								<li>
									<a href="https://www.github.com/icaruk" target="_blank" rel="noopener noreferrer">
										<i className="fa fa-github"></i>
									</a>
								</li>
								
							</ul>
						</div>
					</div>
					
					
					
					<p className="scrolldown">
						<a className="smoothscroll" href="#about">
							<i className="icon-down-circle"></i>
						</a>
					</p>
					
				</header>
				
			</React.Fragment>
		);
	}
}
