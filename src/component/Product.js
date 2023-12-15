import React from "react";
import { Detail } from "./Detail";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add } from "../store/Cartslice";
import { Link } from "react-router-dom";

const Product = () => {
  let name = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let Add = (item) => {
    dispatch(add(item));
  };
  return (
    <div
      style={{
        display: "grid",
        textAlign: "center",
        justifyContent: "center",
        gap: 15,
        gridTemplateColumns: "300px 300px 300px",
        marginTop: 25,
      }}
    >
      {Detail.map((item) => {
        return (
          <div
            style={{
              border: "3px solid gray",
              paddingBottom: 20,
              borderRadius: 9,
            }}
          >
            <h1>{item.id}</h1>
            <Link to={`item/${item.id}`}>
              <img src={item.thumbnail} style={{ height: 200, width: 295 }} />
            </Link>
            <h2>{item.title}</h2>
            <h2>{item.price}</h2>
            <h3>{item.quantity}</h3>
            <button onClick={() => Add(item)}>AddtoCart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
