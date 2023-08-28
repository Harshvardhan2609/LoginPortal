import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import strings from "../Constants/StringConstants";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import {
  productImage1,
  productImage2,
  productImage3,
  productImage4,
  productImage5,
  productImage6,
  productImage7,
  productImage8,
  productImage9,
  productImage10,
  productImage11,
  productImage12,
  productImage13,
} from "../assests/assets";

const Home = () => {
  const navigate = useNavigate();
  const RedirectHome = () => {
    navigate("/");
  };
  const [productArr, setProductArr] = useState([
    {
      id: 1,
      productname: "Flax Seed",
      imagepath: productImage1,
      price: "Rs.400",
    },
    {
      id: 2,
      productname: "Sunflower Seed",
      imagepath: productImage2,
      price: "Rs.330",
    },
    {
      id: 3,
      productname: "Pumpkin Seed",
      imagepath: productImage3,
      price: "Rs.210",
    },
    {
      id: 4,
      productname: "Sesame Seed",
      imagepath: productImage4,
      price: "Rs.640",
    },
    {
      id: 5,
      productname: "Poppy Seed",
      imagepath: productImage5,
      price: "Rs.420",
    },
    {
      id: 6,
      productname: "Psyllium Seed",
      imagepath: productImage6,
      price: "Rs.400",
    },
    {
      id: 7,
      productname: "Hemp Seed",
      imagepath: productImage7,
      price: "Rs.413",
    },
    {
      id: 8,
      productname: "Pine Nuts",
      imagepath: productImage8,
      price: "Rs.319",
    },
    {
      id: 9,
      productname: "Basil Seed",
      imagepath: productImage9,
      price: "Rs.599",
    },
    {
      id: 10,
      productname: "Roasted Basil Seed",
      imagepath: productImage10,
      price: "Rs.499",
    },
    {
      id: 11,
      productname: "Quinoa Seed",
      imagepath: productImage11,
      price: "Rs.555",
    },
    {
      id: 12,
      productname: "Caraway Seed",
      imagepath: productImage12,
      price: "Rs.435",
    },
    // {
    //   id: 13,
    //   productname: "Wild Rice",
    //   imagepath: productImage13,
    //   price: "Rs.695",
    // },
  ]);
  const [cartItemsArr, setCartItemsArr] = useState([]);
  let arr = [];
  const navigateToCart = (id) => {
    alert("Item added to cart successfully");
    cartItemsArr.push(id);
    console.log(cartItemsArr);
    localStorage.setItem("productIdsArr", JSON.stringify(cartItemsArr));
  };

  useEffect(() => {
    let ids = JSON.parse(localStorage.getItem("productIdsArr"));
    if (cartItemsArr) {
      setCartItemsArr([]);
    } else {
      setCartItemsArr(ids);
    }
  }, []);

  const renderProducts = (p) => {
    return (
      <div class="card col-3" style={{ width: "18rem" }}>
        <img class="card-img-top" src={p.imagepath} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{p.productname}</h5>
          <p class="card-text">{p.price}</p>
          <button class="btn btn-primary" onClick={() => navigateToCart(p.id)}>
            Add to cart
          </button>
        </div>
      </div>
      // <div style={{ display: "inline-block", margin: "30px" }}>
      //   <img src={item.imagepath} style={{ width: "150px" }} />
      //   <p>{item.productname}</p>
      //   <p>{item.price}</p>
      //   <div>
      //     <button onClick={() => navigateToCart(item.id)}>Add to Cart</button>
      //   </div>
      // </div>
    );
  };

  const onClickCartIcon = () => {
    navigate("/Cart");
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand text-decoration-none mx-3" href="#">
          WelCome To Cart
        </a>
        <button className="btn btn-success" onClick={() => onClickCartIcon()}>
          GO to Cart
        </button> 
        <Link
          to="/"
          className="btn btn-secondary text-decoration-none mt-3 mb-3 mx-2"
          style={{ float: "right" }}
        >
          {strings.goToText} login
        </Link>
       
      </nav>
      <div
        style={{
          // marginTop: "100px",
          // alignContent: "center",
          // justifyContent: "center",
          marginLeft: "150px",
          marginRight: "150px",
          // display: "flex",
          height: "200vh",
          // flexGrow: "inherit",
        }}
      >
        <div className="container myDiv mt-3">
          {productArr.map((item) => {
            return renderProducts(item);
          })}
        </div>

      </div>
    </>
  );
};

export default Home;
