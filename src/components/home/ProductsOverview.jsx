import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCategories } from '../../features/products/productsSlice';
import './ProductsOverview.css';

const ProductsOverview = () => {
    const categories = useSelector(selectCategories);

    return (
        <section className="products-overview section-light">
            <div className="container">
                <div className="section-header text-center mb-12">
                    <h5 className="text-primary font-bold uppercase tracking-widest">Our Products</h5>
                    <h2>Electronic & Industrial <span className="text-secondary">Solutions</span></h2>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <div key={category.id} className="category-card hover-lift">
                            <div className="category-image">
                                <img src={category.image} alt={category.name} />
                                <div className="category-overlay">
                                    <Link to={`/products/${category.id}`} className="view-btn">View Products</Link>
                                </div>
                            </div>
                            <div className="category-content p-6">
                                <h4 className="mb-2">{category.name}</h4>
                                <p className="text-secondary text-sm mb-4">{category.description}</p>
                                <Link to={`/products/${category.id}`} className="learn-more">
                                    Learn More <span className="arrow">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/products" className="btn btn-primary">View All Categories</Link>
                </div>
            </div>
        </section>
    );
};

export default ProductsOverview;
