import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    updateFormField,
    setValidationErrors,
    submitFormStart,
    submitFormSuccess,
    submitFormFailure,
    selectFormData,
    selectSubmitting,
    selectSubmitted,
    selectValidationErrors,
    resetForm
} from '../../features/contact/contactSlice';
import './QuoteForm.css';

const QuoteForm = () => {
    const dispatch = useDispatch();
    const formData = useSelector(selectFormData);
    const submitting = useSelector(selectSubmitting);
    const submitted = useSelector(selectSubmitted);
    const errors = useSelector(selectValidationErrors);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateFormField({ field: name, value }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone) newErrors.phone = 'Phone is required';
        if (!formData.productService) newErrors.productService = 'Please select a product or service';

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            dispatch(setValidationErrors(validationErrors));
            return;
        }

        dispatch(submitFormStart());

        // Simulate API call
        setTimeout(() => {
            dispatch(submitFormSuccess());
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="quote-success text-center p-12 bg-white rounded-lg shadow-md">
                <div className="success-icon mb-6">✓</div>
                <h3 className="mb-4">Quote Request Sent!</h3>
                <p className="text-gray-600 mb-8">Thank you for your interest. Our team will get back to you within 24 hours.</p>
                <button className="btn btn-primary" onClick={() => dispatch(resetForm())}>Send Another Request</button>
            </div>
        );
    }

    return (
        <form className="quote-form bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <h3 className="mb-8 text-center">Request a <span className="text-secondary">Quote</span></h3>

            <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="form-group">
                    <label>Full Name *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label>Email Address *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 300 1234567"
                        className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-msg">{errors.phone}</span>}
                </div>
                <div className="form-group">
                    <label>Company Name</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                    />
                </div>
            </div>

            <div className="form-group mb-6">
                <label>Interested In *</label>
                <select
                    name="productService"
                    value={formData.productService}
                    onChange={handleChange}
                    className={errors.productService ? 'error' : ''}
                >
                    <option value="">Select an Option</option>
                    <option value="consumer-electronics">Consumer Electronics</option>
                    <option value="home-appliances">Home Appliances</option>
                    <option value="industrial-equipment">Industrial Equipment</option>
                    <option value="power-solutions">Power Solutions</option>
                    <option value="lighting-solutions">Lighting Solutions</option>
                    <option value="security-systems">Security Systems</option>
                    <option value="installation">Installation Services</option>
                    <option value="maintenance">Maintenance Services</option>
                </select>
                {errors.productService && <span className="error-msg">{errors.productService}</span>}
            </div>

            <div className="form-group mb-8">
                <label>Message</label>
                <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Detailed description of your requirement..."
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full py-4" disabled={submitting}>
                {submitting ? 'Sending Request...' : 'Send Quote Request'}
            </button>
        </form>
    );
};

export default QuoteForm;
