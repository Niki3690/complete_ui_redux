import React from "react";
import { useParams } from "react-router-dom";
import { Detail } from "./Detail";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add } from "../store/Cartslice";

const SinglePage = () => {
  let { id } = useParams();
  let name = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let item = Detail.find((p) => p.id == id);

  let Add = (item) => {
    let names = name.some((Cart) => Cart.id == item.id);
    if (!names) {
      dispatch(add(item));
    }
  };
  return (
    <div>
      <div
        style={{
          display: "grid",

          justifyContent: "center",
          gap: 15,
          gridTemplateColumns: "650px",
          marginTop: 85,
        }}
      >
        <div
          style={{
            border: "1px solid gray",
            paddingBottom: 20,
            borderRadius: 9,
            paddingLeft: 5,
          }}
        >
          <h2 style={{ textAlign: "center" }}>{item.id}</h2>
          <hr />

          <img
            src={item.thumbnail}
            style={{ height: 200, width: 295, marginLeft: 200 }}
          />
          <p>
            <b>Title: </b> {item.title}
          </p>
          <p>
            <b>Price: </b> {item.price}
          </p>
          <p>
            <b>Description: </b> {item.description}
          </p>
          <p>
            <b>DiscountPercentage: </b>
            {item.discountPercentage}%{" "}
          </p>
          <p>
            <b>Rating: </b>
            {item.rating}
          </p>
          <p>
            <b>Stock: </b> {item.stock}
          </p>
          <p>
            <b>Brand: </b> {item.brand}
          </p>
          <p>
            <b>Category: </b> {item.category}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <button
              onClick={() => Add(item)}
              style={{
                padding: "10px 30px",
                border: "2px solid gray",
                borderRadius: 15,
              }}
            >
              AddtoCart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
