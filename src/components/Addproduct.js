import React, { useState } from 'react';
import axiosInstance from './axiosInstance';
import { Button, Form,FormGroup,Input,Label} from 'reactstrap';
const ProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    rent: 0,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
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
    
    <div className="App">
    <h2>Add Product</h2>
    <Form className="form" onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" value={productData.name} onChange={handleChange} placeholder="example@example.com"/>
      </FormGroup>
      <br/>
      <FormGroup>
        <Label for="rent">Rent</Label>
        <Input type="text" name="rent" id="rent" value={productData.price} onChange={handleChange}/>
      </FormGroup>
      <br/>
      <FormGroup>
        <Label for="description">Description</Label>
        <textarea name="description" id="description" value={productData.description} onChange={handleChange}/>
      </FormGroup>
      <br/>
      <FormGroup>
        <Label for="image">Image</Label>
        <Input type="file" name="image" id="image" onChange={handleChange}/>
      </FormGroup> <br/>
     <Button type="submit" className="form-submit">Add Product</Button>
  </Form>
</div>


  );
};

export default ProductForm;