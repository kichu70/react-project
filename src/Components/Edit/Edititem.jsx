import React, { useEffect, useRef, useState } from 'react'
import "./Edititem.css"
import axios from 'axios'
import { Button, TextField } from '@mui/material'
import { useParams } from 'react-router-dom'

const Edititem = ({open, onClose, id,onUpdate,productData}) => {
  const editboxRef = useRef()
  const [product, setProduct] = useState([])

  // const { id } = useParams(); 
  console.log(id)

  useEffect(() => {
    // if (!id || !open) return;
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    //     setProduct(response.data)
    //   } catch(err) {
    //     console.log(err)
    //   }
    // }
    // fetchData()     it is used to api update only 


    if(open || productData){
      setProduct(productData)
    }

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

  const UpdateProduct = async () => {
   try{
    // const response = await axios.put( `https://fakestoreapi.com/products/${id}`,
    //     product)
        // onUpdate(response.data);
        setProduct(product)
        onUpdate(product)

        onClose()
   } 
   
   catch(err){
    alert(err)
   }
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
            type='text'
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
            type='number'
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
          <Button onClick={UpdateProduct} variant='contained'>update Product</Button>
        </div>
      </div>
    </div>
  )
}

export default Edititem
