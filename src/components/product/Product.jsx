import React, { useContext, useState } from 'react'
import './Product.css'
import {  useCart } from '../../contexts/Cart';
import { Link } from 'react-router-dom';
function Product({product,dataToParent}) {
    // const Cart = useContext(CartContext)
   const { addToCart } = useCart();

    const [counter, changeCounter] = useState(0);

    function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={`full-${i}`} className="fas fa-star text-warning"></i>);
  }

  if (hasHalfStar) {
    stars.push(<i key="half" className="fas fa-star-half-alt text-warning"></i>);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<i key={`empty-${i}`} className="far fa-star text-warning"></i>);
  }

  return stars;
}


    function addCounter(){
        if(counter<product.stock){
  changeCounter((prev)=>prev+1);
  Cart.setCount((prev)=>prev+1);
        }
     
    }
    function subCounter(){
          changeCounter((prev) => Math.max(prev - 1, 0));
            Cart.setCount((prev)=>Math.max(prev - 1, 0));
    }
  return (
    <>


  <div className="col-lg-3 col-md-4 col-sm-6">
   
                     <div className="card h-100 rounded-4" >
                       <Link to={`/product/${product.id}`} className='card-link'>
  <img src={product.thumbnail} className="card-img-top mb-auto img-background rounded-top-4" alt="..."/>
  <div className="card-body flex-none ">
 <div className='d-flex justify-content-between'>
    <h5 className="card-title">{product.title}</h5>
    <p className='text-muted'>{product.price}$</p>
 </div>

<p className="card-text text-muted">
  {product.description.split(" ").slice(0, 5).join(" ")}...
</p>
    <div className="d-flex align-items-center gap-1">
  {renderStars(product.rating)} {` (${product.rating})`}
</div>
   
    {/* <div className="d-flex justify-content-between py-2">
 <button className="btn btn-primary" onClick={addCounter}>+</button>
 {counter}
  <button className="btn btn-primary" onClick={subCounter}>-</button>


    </div> */}
 

  </div>
  </Link>
     <div className='card-footer p-3 border-0 d-flex justify-content-between mt-auto '>

<button className="addToCart text-light " onClick={()=> addToCart(product) } >Add To Cart</button>
<button className="btn bg-transparent   rounded-5 border border-2" onClick={()=>dataToParent(product.title)}>Add ShortList</button>
    </div>
</div>
 
  </div>

    
    




    </>
   
  )
}

export default Product