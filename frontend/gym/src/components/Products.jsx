import React, { useState } from 'react';
import productData from '../data/productData';

// Import all images
import ce1 from '../assets/CE1.webp';
import ce2 from '../assets/CE2.webp';
import ce3 from '../assets/CE3.webp';
import fishOil from '../assets/FISH OIL.webp';
import proteinBar from '../assets/PROTEIN BAR.webp';
import equ1 from '../assets/Equ1.jpeg';
import equ2 from '../assets/Equ2.jpeg';
import equ3 from '../assets/Equ3.jpeg';
import equ4 from '../assets/Equ4.jpeg';
import equ5 from '../assets/Equ5.jpeg';

// Image mapping object
const imageMap = {
  '/src/assets/CE1.webp': ce1,
  '/src/assets/CE2.webp': ce2,
  '/src/assets/CE3.webp': ce3,
  '/src/assets/FISH OIL.webp': fishOil,
  '/src/assets/PROTEIN BAR.webp': proteinBar,
  '/src/assets/Equ1.jpeg': equ1,
  '/src/assets/Equ2.jpeg': equ2,
  '/src/assets/Equ3.jpeg': equ3,
  '/src/assets/Equ4.jpeg': equ4,
  '/src/assets/Equ5.jpeg': equ5,
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get unique categories
  const categories = ['all', ...new Set(productData.map(product => product.category))];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all'
    ? productData
    : productData.filter(product => product.category === selectedCategory);

  return <>
    <div className="container-fluid py-5 bg-light">
      {/* Header Section */}
      <div className="container mb-5">
        <h1 className="text-center mb-5 fw-bold">Our Supplements & Products</h1>
        
        {/* Category Filter */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
          {categories.map(category => (
            <button
              key={category}
              className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="col">
              <div className="card h-100 shadow-sm position-relative">
                <div className="position-absolute top-0 end-0 m-3">
                  <span className="badge bg-danger">
                    {((product.originalPrice - product.price) / product.originalPrice * 100).toFixed(0)}% OFF
                  </span>
                </div>
                
                <div className="text-center bg-light p-3" style={{ height: '200px' }}>
                  <img
                    src={imageMap[product.image] || product.image}
                    alt={product.productName}
                    className="h-100 object-fit-contain"
                  />
                </div>
                
                <div className="card-body">
                  <h5 className="card-title fw-bold">{product.productName}</h5>
                  <p className="text-muted small mb-2">{product.brand}</p>
                  
                  <div className="mb-2">
                    <div className="text-warning mb-1">
                      {[...Array(5)].map((_, index) => (
                        <i
                          key={index}
                          className={`fas fa-star ${index < Math.floor(product.rating) ? 'text-warning' : 'text-muted'}`}
                        ></i>
                      ))}
                    </div>
                    <small className="text-muted">({product.reviews} reviews)</small>
                  </div>
                  
                  <p className="card-text small">{product.description}</p>
                  
                  <div className="mb-3">
                    <span className="fs-4 fw-bold me-2">₹{product.price}</span>
                    <span className="text-muted text-decoration-line-through">₹{product.originalPrice}</span>
                  </div>

                  <div className="mb-3">
                    <h6 className="fw-bold">Key Features:</h6>
                    <ul className="list-unstyled">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="small">
                          <i className="fas fa-circle text-primary me-2" style={{ fontSize: '0.4rem' }}></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-3">
                    {product.inStock ? (
                      <div className="text-success">
                        <i className="fas fa-check-circle me-1"></i> In Stock
                      </div>
                    ) : (
                      <div className="text-danger">
                        <i className="fas fa-times-circle me-1"></i> Out of Stock
                      </div>
                    )}
                  </div>

                  <div className="d-grid">
                    <div className="alert alert-warning mb-0 text-center">
                      <i className="fas fa-clock me-2"></i> Coming Soon
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
}

export default Products;