import React, { useEffect, useRef, useState } from 'react'
import "./Edititem.css"
import axios from 'axios'
import { Button, TextField } from '@mui/material'
import { useParams } from 'react-router-dom'

const Edititem = ({open, onClose, id}) => {
  const editboxRef = useRef()
  const [product, setProduct] = useState([])

  // const { id } = useParams(); 
  console.log(id)

  // useEffect(() => {
  //   if (!id || !open) return; //to double check is it is true ...
  //   axios.get(`https://fakestoreapi.com/products/${id}`)
  //     .then((response) => setProduct(response.data));
  //   console.log(product);
  //   const handleClickOutside = (event) => {
  //           if (editboxRef.current && !editboxRef.current.contains(event.target)) {
  //       onClose();
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [id]);

  useEffect(() => {
    if (!id || !open) return;
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(response.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchData()

    const handleClickOutside = (event) => {
      if (editboxRef.current && !editboxRef.current.contains(event.target)) {
        onClose()
        setProduct({})
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [onClose, open, id])

  if (!open) return null;

  const UpdateProduct = ({}) => {
  }

  return (
    <div className='main-edit' ref={editboxRef}>
      <Button variant='contained' className='closebtn' onClick={onClose}>X</Button>
      <div className="edit">
        <h1>Edit Product</h1>
        <div className="items">
          <TextField
            onChange={(e) => setProduct({...product, title: e.target.value})}
            value={product.title}
            className='textEditField'
            label="title"
            variant="filled"
            focused
          />
          <TextField
            onChange={(e) => setProduct({...product, price: e.target.value})}
            value={product.price}
            className='textEditField'
            label="price"
            variant="filled"
            focused
          />
          <TextField
            onChange={(e) => setProduct({...product, category: e.target.value})}
            value={product.category}
            className='textEditField'
            label="Category"
            variant="filled"
            focused
          />
          <TextField
            onChange={(e) => setProduct({...product, image: e.target.value})}
            value={product.image}
            className='textEditField'
            label="Image URL"
            variant="filled"
            focused
          />
          <TextField
            onChange={(e) => setProduct({...product, description: e.target.value})}
            value={product.description}
            className='textEditField'
            label="Description"
            variant="filled"
            focused
          />
          <Button variant='contained'>update Product</Button>
        </div>
      </div>
    </div>
  )
}

export default Edititem
