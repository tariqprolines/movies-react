import React from 'react';

const Header = (props) =>{
 return (
 	<nav className="navbar bg-dark" style={{height:'100px'}}>
 		<div className="container">
 		  <div className="row m-auto">
 		     <i className="fa fa-film fa-3x text-white mr-3"></i>
 		     <div className="h3 text-light my-auto">{props.title}</div>
 		  </div>
 		</div>
 	</nav>
 	);
}
export default Header;