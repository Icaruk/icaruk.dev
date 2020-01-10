import React, { Component } from "react";
export default class Porfolio extends Component {
	render() {
		
		return (
			<section id="portfolio">
				<div className="row">
					<div className="twelve columns collapsed">
						<h1>Portfolio</h1>
						<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
							
							<div className="columns portfolio-item">
								<div className="item-wrap">
									<img
										src="https://camo.githubusercontent.com/71786622c76fe93585ab83ee6a6e3d459618991f/68747470733a2f2f692e6779617a6f2e636f6d2f61343536653732306539336238343861343464633032326437346239353864332e706e67"
										className="item-img"
									/>
									<div
										className="overlay"
										onClick={() => window.open("https://github.com/Icaruk/monetae-b", "_blank")}>
										
										<div className="portfolio-item-meta">
											<h5>Monetae</h5>
											<p>E-commerce web app</p>
											<br/>
											<p>MERN stack</p>
										</div>
										
									</div>
								</div>
							</div>
							
							<div className="columns portfolio-item">
								<div className="item-wrap">
									<img
										src="https://camo.githubusercontent.com/78e093720a362359eb4e970ef84aa7753c5dfb63/68747470733a2f2f692e6779617a6f2e636f6d2f35313966373162333362646539343238633366616264363630643433616131632e6a7067"
										className="item-img"
									/>
									<div
										className="overlay"
										onClick={() => window.open("https://github.com/Icaruk/viejoNetflix-b", "_blank")}>
										
										<div className="portfolio-item-meta">
											<h5>viejoNetflix</h5>
											<p>Rental web app</p>
											<br/>
											<p>MEAN stack</p>
										</div>
										
									</div>
								</div>
							</div>
							
							<div className="columns portfolio-item">
								<div className="item-wrap">
									<img
										src="https://camo.githubusercontent.com/34c1ea869b926744f896a1b765aff575bd9783df/68747470733a2f2f692e6779617a6f2e636f6d2f38623232353366373363373937653634656536393234396132323761653937662e706e67"
										className="item-img"
									/>
									<div
										className="overlay"
										onClick={() => window.open("https://github.com/Icaruk/sonidoNube", "_blank")}>
										
										<div className="portfolio-item-meta">
											<h5>sonidoNube</h5>
											<p>Soundcloud clone</p>
											<br/>
											<p>JS + CSS + HTML</p>
										</div>
										
									</div>
								</div>
							</div>
							
							
							
						</div>
					</div>
				</div>
			</section>
		);
	}
}
