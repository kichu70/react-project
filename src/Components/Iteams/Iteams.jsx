import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import "./Item.css";
import Product from "../Product.jsx/Product";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Iteams = () => {
  const notify = () => toast("Iteam Has been deleted");
  const navigate = useNavigate();
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

  const onhandledlete =  (id) => {
    if (window.confirm("Do you want delet ")) {
      try {
         axios
          .delete(`https://fakestoreapi.com/products/${id}`)
          .then(() => setItem(item.filter((i) => i.id !== id)));
          notify()
      } catch (err) {
        alert(err);
      }
    }
  };
  return (
    <div className="main-content">

      <div className="main">
        <h1>All Product</h1>
        <Button variant="contained">add product</Button>
      </div>
              <ToastContainer />
      <div className="gridss">
        {item.map((item) => (
          <div className="content" key={item.id}>
            <Card className="Card">
              <h4 className="title">{item.title}</h4>
              <CardMedia
                className="CardMedia"
                sx={{ width: "100%", objectFit: "contain" }}
                height="240px"
                image={item.image}
                component="img"
                title="green iguana"
              />

              <CardContent>
                <Typography
                  className="discription"
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >
                  {item.description}
                </Typography>
                <h3 className="price">₹ {item.price}</h3>
              </CardContent>
              <Button
                className="viewbtn"
                variant="contained"
                onClick={() => navigate(`/viewProduct/${item.id}`)}
              >
                View product
              </Button>
              <div className="btns">
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={() => onhandledlete(item.id)}
                >
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
