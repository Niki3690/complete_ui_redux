import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove, incr, decr } from "../store/Cartslice";

const Cart = () => {
  let name = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let REMOVE = (itemId) => {
    dispatch(remove(itemId));
  };

  let Increment = (itemId) => {
    dispatch(incr(itemId));
  };

  let decrement = (itemId) => {
    dispatch(decr(itemId));
  };
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          gap: 15,
          marginTop: 85,
        }}
      >
        {name.map((item) => {
          let update = item.price * item.quantity;
          return (
            <div
              style={{
                display: "flex",
                gap: 45,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <div style={{ width: 100 }}>
                <h1>{item.id}</h1>
              </div>

              <div style={{ marginTop: 10 }}>
                <img src={item.thumbnail} style={{ height: 50, width: 50 }} />
              </div>

              <div style={{ width: 100 }}>
                <h2>{item.title}</h2>
              </div>
              <div style={{ width: 100 }}>
                <h2>{update}</h2>
              </div>
              <div style={{ width: 50 }}>
                <h3>{item.quantity}</h3>
              </div>

              <div style={{ marginTop: 18 }}>
                <button
                  onClick={() => Increment(item.id)}
                  style={{ marginRight: 15 }}
                >
                  +
                </button>
                <button onClick={() => decrement(item.id)}>-</button>
              </div>
              <br />
              <br />
              <div style={{ marginTop: 18, width: 100 }}>
                <button onClick={() => REMOVE(item.id)}>RemovetoCart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
