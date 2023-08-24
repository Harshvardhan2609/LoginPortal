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

export default function Cart() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/Home");
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
    {
      id: 13,
      productname: "Wild Rice",
      imagepath: productImage13,
      price: "Rs.695",
    },
  ]);
  const [cartArr, setCartArr] = useState([]);
  var newArr = [];

  // let tempArr = [];
  // tempArr = productArr.map((item) => {
  //   // ids.map((id) => {
  //   if (item.id == 1) {
  //     tempArr.push(item);
  //   }
  //   // });
  // });
  useEffect(() => {
    let ids = JSON.parse(localStorage.getItem("productIdsArr"));
    // [1,3]
    //alert(ids.length);
    var newArr = productArr.filter((item) => ids.includes(item.id));
    setCartArr(newArr);
  });
  const renderProducts = (item) => {
    console.log("item is : " + item);
    return (
      <div style={{ display: "inline-block", margin: "30px" }}>
        <img src={item.imagepath} style={{ width: "150px" }} />
        <p>{item.productname}</p>
        <p>{item.price}</p>
        <div>
          {/* <button onClick={() => navigateToCart(item.id)}>Add to Cart</button> */}
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* <p>cart screen</p> */}
      {cartArr?.map((item) => {
        return renderProducts(item);
      })}
    </div>
  );
}
