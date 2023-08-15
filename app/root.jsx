import { useState, useEffect } from "react";
import { Meta, Links, Outlet, Scripts, LiveReload } from "@remix-run/react";
import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "~/components/footer";

export const meta = () => {
  return [
    { charset: "utf-8" },
    { title: "GuitarLA - Remix" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function App() {

  const cartLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart")) ?? []
      : null;
  const [cart, setCart] = useState(cartLS);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  const addCart = (guitar) => {
    if (cart.some((guitarState) => guitarState.id === guitar.id)) {
      //Iterar sobre el arreglo, e identificar el elemento duplicado
      const updatedCart = cart.map((guitarState) => {
        if (guitarState.id === guitar.id) {
          //Reescribir la cantidad
          guitarState.amount = guitar.amount;
        }
        return guitarState;
      });
      //Añadir al carrito
      setCart(updatedCart);
    } else {
      //Registro nuevo, agregar al carrito
      setCart([...cart, guitar]);
    }
  };

  const updateAmount = (guitar) => {
    const updatedCart = cart.map((guitarState) => {
      if (guitarState.id === guitar.id) {
        guitarState.amount = guitar.amount;
      }
      return guitarState;
    });
    setCart(updatedCart);
  };

  const deleteGuitar = (id) => {
    const updatedCart = cart.filter((guitarState) => guitarState.id !== id);
    setCart(updatedCart);
  };

  return (
    <Document>
      <Outlet
        context={{
          addCart,
          cart,
          updateAmount,
          deleteGuitar,
        }}
      />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
