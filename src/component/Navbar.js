import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Navbar = () => {
  let demo = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let name = demo.reduce((def, item) => def + item.price * item.quantity, 0);

  return (
    <div
      style={{
        textAlign: "center",
        fontSize: 22,
        gap: 15,
        display: "flex",
        justifyContent: "center",
        fontWeight: 600,
        marginTop: 15,
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        HOME
      </Link>
      <Link to="cart" style={{ textDecoration: "none" }}>
        CART
      </Link>

      <span>Total cart Item:{demo.length}</span>
      <span>Total cart Price:{name}</span>
    </div>
  );
};

export default Navbar;
