import React, { useState } from "react";
import { Link } from "react-router-dom";
import strings from "../Constants/StringConstants";
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
  const [productArr, setProductArr] = useState([
    {
      id: 1,
      productname: "chiaSeedType1",
      imagepath: productImage1,
      price: "Rs.400",
    },
    {
      id: 2,
      productname: "chiaSeedType2",
      imagepath: productImage2,
      price: "Rs.330",
    },
    {
      id: 3,
      productname: "chiaSeedType3",
      imagepath: productImage3,
      price: "Rs.210",
    },
    {
      id: 4,
      productname: "chiaSeedType4",
      imagepath: productImage4,
      price: "Rs.640",
    },
    {
      id: 5,
      productname: "chiaSeedType5",
      imagepath: productImage5,
      price: "Rs.420",
    },
    {
      id: 6,
      productname: "chiaSeedType6",
      imagepath: productImage6,
      price: "Rs.400",
    },
    {
      id: 7,
      productname: "chiaSeedType7",
      imagepath: productImage7,
      price: "Rs.413",
    },
    {
      id: 8,
      productname: "chiaSeedType8",
      imagepath: productImage8,
      price: "Rs.319",
    },
    {
      id: 9,
      productname: "chiaSeedType9",
      imagepath: productImage9,
      price: "Rs.599",
    },
    {
      id: 10,
      productname: "chiaSeedType10",
      imagepath: productImage10,
      price: "Rs.499",
    },
    {
      id: 11,
      productname: "chiaSeedType11",
      imagepath: productImage11,
      price: "Rs.555",
    },
    {
      id: 12,
      productname: "chiaSeedType12",
      imagepath: productImage12,
      price: "Rs.435",
    },
    {
      id: 13,
      productname: "chiaSeedType13",
      imagepath: productImage13,
      price: "Rs.695",
    },
  ]);

  const renderProducts = (item) => {
    return (
      <div style={{ display: "inline-block", margin: "30px" }}>
        <img src={item.imagepath} style={{ width: "150px" }} />
        <p>{item.productname}</p>
        <p>{item.price}</p>
        <div>
          <button>Add to Cart</button>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        alignContent: "center",
        // backgroundColor: "red",
        justifyContent: "center",
        marginLeft: "150px",
        marginRight: "150px",
      }}
    >
      <h3>{strings.homeText}</h3>
      {productArr.map((item) => {
        return renderProducts(item);
      })}
      <Link to="/">{strings.goToText} login</Link>
    </div>
  );
};

export default Home;
