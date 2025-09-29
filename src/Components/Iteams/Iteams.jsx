import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import "./Item.css";
import React, { useState } from "react";
import axios from "axios";

const Iteams = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    try {
      axios("https://fakestoreapi.com/products").then((response) =>
        setItem(response.data)
      );
    } catch (error) {
      alert(error);
      console.error(error);
    }
  }, []);
  console.log(item, "-----------");

  return (
    <div className="main-content">
      <div className="main">
        <h1>All Product</h1>
        <Button variant="contained">add product</Button>
      </div>
      <div className="gridss">
      {item.map((item,index)=>(
      
      <div className="content">
      <Card className="Card">
        <h4>{item.title}</h4>
        <CardMedia
          className="CardMedia"
          sx={{ width: "100%", objectFit: "contain" }}
          height="240px"
            image={item.image}
          component="img"
          title="green iguana"
        />

        <CardContent>
          <Typography className="discription" variant="body2" sx={{ color: "text.secondary"}}>
            
            {item.description}
          </Typography>
          {item.price}
        </CardContent>
        <Button className="viewbtn" variant="contained">
          View product
        </Button>
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


      ))}
</div>

    </div>
  );
};

export default Iteams;
