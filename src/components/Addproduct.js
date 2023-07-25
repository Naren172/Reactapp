import React, { useState } from 'react';
import axiosInstance from './axiosInstance';
const ProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    rent: 0,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // Handle file input separately
    if (type === 'file') {
      setProductData((prevData) => ({ ...prevData, [name]: e.target.files[0] }));
    } else {
      setProductData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('description', productData.description);
    formData.append('rent', productData.rent);
    formData.append('image', productData.image);

    try {
      await axiosInstance.post('/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product created successfully');
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={productData.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea name="description" value={productData.description} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="rent">Rent:</label>
        <input type="number" name="rent" value={productData.price} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input type="file" name="image" onChange={handleChange} />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;