import React, { useMemo, useRef, useState } from "react";

function NnhUseMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  const NnhHandelSubmit = () => {
    if (!name.trim()) {
      alert("Tên không được để trống!");
      return;
    }
    if (!price || isNaN(price) || price <= 0) {
      alert("Giá phải là số lớn hơn 0!");
      return;
    }

    setProducts([
      ...products,
      {
        name: name,
        price: +price,
      },
    ]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };

  const total = useMemo(() => {
    console.log("Tính toán lại...");
    return products.reduce((result, prod) => result + prod.price, 0);
  }, [products]);

  return (
    <div className="alert alert-info">
      <input
        type="text"
        ref={nameRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nhập Name"
      />
      <br />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Nhập Price"
        min="1"
      />
      <br />
      <button className="btn btn-primary my-2" onClick={NnhHandelSubmit}>
        Add
      </button>
      <h3>Total: {total}</h3>
      <ul>
        {products.map((prod, index) => (
          <li key={index}>
            {prod.name} - {prod.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NnhUseMemo;
