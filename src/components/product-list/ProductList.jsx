import React, { useEffect, useState } from 'react'
import Product from '../product/Product'
import axios from 'axios'
import Loader from '../../shared/Loader/Loader';


export default function ProductList() {

const[products,setProducts]=useState(null);
const [allProducts, setAllProducts] = useState(null);

useEffect(()=>{
  axios.get(`https://dummyjson.com/products`).then((res)=>{
    setProducts(res.data.products);
    setAllProducts(res.data.products);
    // console.log(res);
    
  })
},[])

// const [products]=useState([
//   {
//     id: 1,
//     title: "Wireless Headphones",
//     description: "High quality wireless headphones with noise cancellation.",
//     image:
//       "https://i5.walmartimages.com/seo/VILINICE-Noise-Cancelling-Headphones-Wireless-Bluetooth-Over-Ear-Headphones-with-Microphone-Black-Q8_b994b99c-835f-42fc-8094-9f6be0f9273b.be59955399cdbd1c25011d4a4251ba9b.jpeg",
//     stock: 5,
//   },
//   {
//     id: 2,
//     title: "Smartwatch",
//     description: "Track your fitness and receive notifications on the go.",
//     image: "https://m.media-amazon.com/images/I/71JU-bUt-sL._AC_SL1500_.jpg",
//     stock: 3,
//   },
//   {
//     id: 3,
//     title: "Bluetooth Speaker",
//     description: "Portable speaker with rich bass and long battery life.",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSLcy_LkXyYp7ebOZ6-QkZusWfS0M2NG_2pQ&s",
//     stock: 8,
//   },
//   {
//     id: 4,
//     title: "Gaming Mouse",
//     description: "Ergonomic mouse with customizable buttons.",
//     image:
//       "https://hardwaremarket.net/wp-content/uploads/2024/10/T2-Wireless-Gaming-Mouse-Silent-Clicks-1600-DPI-4.webp",
//     stock: 10,
//   },
//   {
//     id: 5,
//     title: "4K Monitor",
//     description: "Ultra HD monitor with vibrant colors and slim bezels.",
//     image: "https://m.media-amazon.com/images/I/A1byMeOyjdL._AC_SL1500_.jpg",
//     stock: 2,
//   },
//   {
//     id: 6,
//     title: "Mechanical Keyboard",
//     description: "RGB backlit keyboard with tactile feedback.",
//     image: "https://m.media-amazon.com/images/I/71fRP7KY9hL._AC_SL1500_.jpg",
//     stock: 4,
//   },
// ])

function getData(e){
  const value = e.target.value.toLowerCase();
  console.log(e.target.value);
   setProducts(
    allProducts.filter((p) =>
      p.title.toLowerCase().includes(value)
    )
  );


}

function getDataFromChild(data,){
    alert(data);
}

  return (
   <>

 <section className='my-3'>

    <div className="container">
      <input type="search" onChange={getData} className='form-control my-3' placeholder='search for products' />
             <div className="row d-flex gy-3">
 

 {(products?.length===0||!products) ? <Loader/> :products.map((p) => (
      <Product key={p.id} product={p} dataToParent={getDataFromChild}/>
    ))}
   </div>
             </div>
         
  
</section>
 


   </>
  )
}