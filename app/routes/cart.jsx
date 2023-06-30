import styles from '~/styles/cart.css'

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export function meta() {
    return [
      { title: "GuitarLA - Carrito de Compras" },
      { description: "Venta de guitarras, música, blog, carrito de compras, tienda" },
    ];
  }

function Cart() {
  return (
    <main className="container">
      <h1 className="heading">Carrito de compras</h1>

      <div className="container">
        <div className="cart">
          <h2>Articulos</h2>
        </div>

        <aside className="summary">
          <h3>Resumen del Pedido</h3>
          <p>Total a pagar: $</p>
        </aside>
      </div>
    </main>
  );
}

export default Cart;
