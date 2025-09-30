import React, { useState } from 'react'
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
// const axios = require('axios');
import axios from "axios";
const Product = () => {
      const { id } = useParams(); // get product ID from URL
      console.log(id , 'idgeted')
      const [product,setProduct]=useState([])
      useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => setProduct(response.data));
      console.log(product)
      },[])


    
  return (
    <div>
              <Card className="Card">
        <h4 className="title">{product.title}</h4>
        <CardMedia
          className="CardMedia"
          sx={{ width: "100%", objectFit: "contain" }}
          height="240px"
            image={product.image}
          component="img"
          title="green iguana"
        />

        <CardContent>
          <Typography className="discription" variant="body2" sx={{ color: "text.secondary"}}>
            
            {product.description}
          </Typography>
          <h3 className="price">
          ₹ {product.price}
          </h3>
        </CardContent>

        <div className="btns">
          <Button variant="contained" color="error" size="small">
            delet
          </Button>
          <Button variant="contained" color="success" size="small">
            edit
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default Product
