import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../shared/Loader/Loader';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      });
  }, [id]);

  if (!product) return (<Loader/>) ;

  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* Product Image */}
        <div className="col-md-5">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid rounded shadow-sm"
          />
          <div className="mt-3 d-flex flex-wrap gap-2">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Preview ${index}`}
                className="img-thumbnail"
                style={{ width: '70px', height: '70px', objectFit: 'cover' }}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="col-md-7">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.brand}</p>
          <span className={`badge ${product.availabilityStatus === 'In Stock' ? 'bg-success' : 'bg-danger'}`}>
            {product.availabilityStatus || 'Availability Unknown'}
          </span>
          <p className="mt-3">{product.description}</p>

          {/* Price and Discount */}
          <h4 className="text-danger">
            ${product.price.toFixed(2)}{" "}
            <small className="text-muted text-decoration-line-through">
              ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
            </small>
            <span className="badge bg-warning text-dark ms-2">
              {product.discountPercentage.toFixed(0)}% OFF
            </span>
          </h4>

          {/* Quick Info */}
          <ul className="list-group list-group-flush mt-4">
            <li className="list-group-item">SKU: {product.sku}</li>
            <li className="list-group-item">Category: {product.category}</li>
            <li className="list-group-item">Tags: {product.tags?.join(', ')}</li>
            <li className="list-group-item">Rating: ⭐ {product.rating}</li>
            <li className="list-group-item">Stock: {product.stock}</li>
            <li className="list-group-item">Minimum Order: {product.minimumOrderQuantity}</li>
          </ul>

         

        

  

          <button className="btn btn-primary mt-3">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
