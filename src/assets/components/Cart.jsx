import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useUser } from '../../context/UserContext'; // Importa el hook useUser

export const Cart = () => {
  const { allProducts, total, deleteFromCart, cleanCart } = useCart();
  const { token } = useUser(); 
  const [successMessage, setSuccessMessage] = useState(""); // Estado para el mensaje de éxito

  console.log("Token value in Cart:", token); // Añade esto para verificar el valor

  if (!token) {
    return <p>🔒 Debes iniciar sesión para ver el carrito de compras</p>;
  }

  // Función para enviar el carrito al backend
  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Envía el token de autenticación
        },
        body: JSON.stringify({
          products: allProducts,
          total: total
        })
      });

      // Manejar la respuesta del servidor
      if (!response.ok) {
        throw new Error('Error en la compra');
      }

      const data = await response.json();
      console.log('Checkout successful:', data);
      setSuccessMessage("Compra realizada exitosamente!"); // Establece el mensaje de éxito

      // Limpiar el carrito después de la compra
      cleanCart();
    } catch (error) {
      console.error('Error during checkout:', error);
      alert("Hubo un problema al procesar tu compra.");
    }
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {allProducts.length ? (
        <>
          <div className="cart-products">
            {allProducts.map(product => (
              <div className="cart-product" key={product.id}>
                <span>{product.quantity}x {product.title} - ${product.price}</span>
                <button onClick={() => deleteFromCart(product)}>Eliminar</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${total}</h3>
            <button onClick={cleanCart}>Vaciar Carrito</button>
            <button onClick={handleCheckout}> 
              😀 Ir a pagar! 😋
            </button>
          </div>
          {successMessage && ( // Muestra el mensaje de éxito si existe
            <p className="bg-success text-light fs-5 p-3 rounded border border-success-subtle mt-3">
              {successMessage}
            </p>
          )}
        </>
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>
  );
};