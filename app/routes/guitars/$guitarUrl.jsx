import { useState } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitar } from "~/models/guitars.server";
import { useRouteError } from "@remix-run/react";
import { isRouteErrorResponse } from "@remix-run/react";
import { Link } from "@remix-run/react";

/** Manejo de errores */
export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <p className="error">
          {error.status} {error.statusText}
        </p>
        <Link className="error-link" to="/">
          Tal vez quieras volver a la página principal
        </Link>
      </>
    );
  }
}

export function meta({ data }) {
  if (!data) {
    return [
      { title: `GuitarLA - guitarra no encontrada` },
      { descripcion: "Guitarras, venta de guitarras, guitarra no encontrada" },
    ];
  }
  return [
    { title: `GuitarLA - ${data.data[0].attributes.name}` },
    {
      description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.name}`,
    },
  ];
}

export async function loader({ request, params }) {
  const { guitarUrl } = params;
  const guitar = await getGuitar(guitarUrl);
  if (guitar.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada",
    });
  }
  return guitar;
}

function Guitar() {
  const {addCart} = useOutletContext()
  const [amount, setAmount] = useState(0);
  const guitar = useLoaderData();
  const { name, description, image, price } = guitar.data[0].attributes;

  const handleSubmit = e => {
    e.preventDefault();

    if(amount < 1) {
      alert('Debes seleccionar una cantidad')
      return
    }

    const selectedGuitar = {
      id: guitar.data[0].id,
      image: image.data.attributes.url,
      name,
      price,
      amount
    }

    addCart(selectedGuitar)
  }

  return (
    <div className="guitar">
      <img
        className="image"
        src={image.data.attributes.url}
        alt={`Imagen de la guitarra ${name}`}
      />

      <div className="container">
        <h3>{name}</h3>
        <p className="text">{description}</p>
        <p className="price">{price}</p>

        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="amount">Cantidad</label>

          <select onChange={(e) => setAmount(+e.target.value)} id="amount">
            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit" value="Agregar al carrito" />
        </form>
      </div>
    </div>
  );
}

export default Guitar;
