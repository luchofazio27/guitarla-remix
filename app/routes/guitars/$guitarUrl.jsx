import { useLoaderData } from "@remix-run/react";
import { getGuitar } from "~/models/guitars.server";
import { useRouteError } from "@remix-run/react";
import { isRouteErrorResponse } from "@remix-run/react";
import { Link } from "@remix-run/react";
import styles from "~/styles/guitars.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

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
  const guitar = useLoaderData();
  const { name, description, image, price } = guitar.data[0].attributes;

  return (
    <main className="container guitar">
      <img
        className="image"
        src={image.data.attributes.url}
        alt={`Imagen de la guitarra ${name}`}
      />

      <div className="container">
        <h3>{name}</h3>
        <p className="text">{description}</p>
        <p className="price">{price}</p>
      </div>
    </main>
  );
}

export default Guitar;
