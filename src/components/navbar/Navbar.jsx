import React, { useContext } from 'react'
// import { CartContext } from '../../contexts/Cart'
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/Cart';

export default function Navbar() {
  const { cartItems } = useCart();
  // console.log([...artItems]+ " from nav");
  const user = JSON.parse(localStorage.getItem("user")) ;

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" rel="stylesheet" to="/">Home</Link>
        </li>
        {user ?  <li className="nav-item">
          <Link className="nav-link active" rel="stylesheet" to="/cart">Cart : {cartItems.length}</Link>
        </li>: ''}
       
           <li className="nav-item">
          <Link className="nav-link active" rel="stylesheet" to="/login">Login</Link>
        </li>
           <li className="nav-item">
          <Link className="nav-link active" rel="stylesheet" to="/register">Register</Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">WishList </a>
        </li> */}

      </ul>
    </div>
  </div>
</nav>
</>
  )
}
