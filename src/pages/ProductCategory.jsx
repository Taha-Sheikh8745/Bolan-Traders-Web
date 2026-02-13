import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectFilteredProducts,
    selectCategories,
    setSelectedCategory,
    selectSelectedCategory
} from '../features/products/productsSlice';
import './ProductCategory.css';

const ProductCategory = () => {
    const { category: categoryId } = useParams();
    const dispatch = useDispatch();
    const products = useSelector(selectFilteredProducts);
    const categories = useSelector(selectCategories);
    const selectedCategory = categories.find(c => c.id === categoryId);

    useEffect(() => {
        dispatch(setSelectedCategory(categoryId));
    }, [categoryId, dispatch]);

    if (!selectedCategory) {
        return <div className="section text-center"><h2>Category not found</h2></div>;
    }

    return (
        <div className="category-page">
            {/* Category Banner */}
            <section className="category-banner bg-dark text-white py-20">
                <div className="container">
                    <div className="flex flex-col items-center text-center">
                        <h5 className="text-secondary uppercase tracking-widest mb-4">Products</h5>
                        <h1 className="text-5xl font-bold mb-4">{selectedCategory.name}</h1>
                        <p className="text-gray-400 max-w-2xl">{selectedCategory.description}</p>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="section bg-secondary">
                <div className="container">
                    {products.length === 0 ? (
                        <div className="text-center py-20">
                            <h3>No products found in this category.</h3>
                            <Link to="/products" className="btn btn-primary mt-8">Back to All Categories</Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 gap-8">
                            {products.map((product) => (
                                <div key={product.id} className="product-card bg-white rounded-lg shadow-md overflow-hidden hover-lift">
                                    <div className="product-image" style={{ height: '250px', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {/* Placeholder for actual product image */}
                                        <div className="text-gray-400 font-bold text-xl">{product.name}</div>
                                    </div>
                                    <div className="p-6">
                                        <span className="text-xs text-primary font-bold uppercase tracking-wider">{product.category.replace('-', ' ')}</span>
                                        <h3 className="mt-2 mb-4 text-xl">{product.name}</h3>
                                        <p className="text-gray-600 text-sm mb-6 line-clamp-2">{product.description}</p>

                                        <div className="product-features mb-6">
                                            <h5 className="text-xs font-bold uppercase mb-2">Key Features:</h5>
                                            <ul className="text-xs text-gray-500 list-disc pl-4">
                                                {product.features.slice(0, 3).map((feature, idx) => (
                                                    <li key={idx}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <Link to={`/contact`} className="btn btn-primary btn-sm" style={{ padding: '8px 15px', fontSize: '12px' }}>Request Quote</Link>
                                            <button className="text-primary font-bold text-sm">Details →</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Related Categories Sidebar-like section */}
            <section className="section bg-white border-t">
                <div className="container">
                    <h4 className="mb-8">Other Categories</h4>
                    <div className="flex flex-wrap gap-4">
                        {categories.filter(c => c.id !== categoryId).map(c => (
                            <Link key={c.id} to={`/products/${c.id}`} className="bg-gray-100 hover:bg-primary hover:text-white px-6 py-3 rounded-full transition-all text-sm font-semibold">
                                {c.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductCategory;
