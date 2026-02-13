import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCategories, clearFilters } from '../features/products/productsSlice';

const Products = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories);

    useEffect(() => {
        dispatch(clearFilters());
    }, [dispatch]);

    return (
        <div className="products-page">
            {/* Page Header */}
            <section className="bg-dark py-20 text-white text-center">
                <div className="container">
                    <h1 className="text-5xl font-bold mb-4">Our Products</h1>
                    <p className="text-gray-400 max-width-600 mx-auto">
                        Discover our extensive range of industrial and electronic solutions tailored for your business needs.
                    </p>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-3 gap-10">
                        {categories.map((category) => (
                            <div key={category.id} className="category-card hover-lift shadow-lg">
                                <div className="category-image" style={{ height: '300px' }}>
                                    <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                                    <div className="category-overlay">
                                        <Link to={`/products/${category.id}`} className="btn btn-primary">Browse Category</Link>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="mb-4">{category.name}</h3>
                                    <p className="text-secondary mb-6">{category.description}</p>
                                    <Link to={`/products/${category.id}`} className="text-primary font-bold flex items-center gap-2">
                                        View Details <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
