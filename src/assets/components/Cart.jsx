import React, { useState } from 'react';

export const Cart = ({ allProducts, countProducts, total, onAddProduct, onDeleteProduct, onCleanCart }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {allProducts.map(product => (
          <li key={product.id}>
            {product.name} - {product.quantity} x ${product.price}
            <button onClick={() => onDeleteProduct(product)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <p>Productos en el carrito: {countProducts}</p>
      <button onClick={onCleanCart}>Limpiar Carrito</button>
    </div>
  );
};

const CartContainer = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [countProducts, setCountProducts] = useState(0);
  const [total, setTotal] = useState(0);

  const onAddProduct = (product) => {
    const exists = allProducts.find(item => item.id === product.id);
    if (exists) {
      const updatedProducts = allProducts.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setAllProducts(updatedProducts);
    } else {
      setAllProducts([...allProducts, { ...product, quantity: 1 }]);
    }
    setTotal(total + product.price);
    setCountProducts(countProducts + 1);
  };

  const onDeleteProduct = (product) => {
    const filteredProducts = allProducts.filter(item => item.id !== product.id);
    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(filteredProducts);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <Cart
      allProducts={allProducts}
      countProducts={countProducts}
      total={total}
      onAddProduct={onAddProduct}
      onDeleteProduct={onDeleteProduct}
      onCleanCart={onCleanCart}
    />
  );
};