import React, { startTransition } from "react";
import { Link } from "react-router-dom";
import star from "../../img/star.jpg";
import "../../styles/navbar.css";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="imagen" src={star} />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">

					<div class="btn-group">
						<button type="button" className="btn btn-primary dropdown-toggle boton" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>

					</div>

				</Link>
			</div>
		</nav>
	);
};
