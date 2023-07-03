import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatDate } from "~/utils/helpers";
import { useRouteError } from "@remix-run/react";
import { isRouteErrorResponse } from "@remix-run/react";
import { Link } from "@remix-run/react";
import styles from "~/styles/blog.css";

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
      { title: `GuitarLA - Entrada no encontrada` },
      { descripcion: "Guitarras, venta de guitarras, entrada no encontrada" },
    ];
  }
  return [
    { title: `GuitarLA - ${data.data[0].attributes.title}` },
    {
      description: `Guitarras, venta de guitarras, entrada ${data.data[0].attributes.title}`,
    },
  ];
}

export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada",
    });
  }
  return post;
}

export default function Post() {
  const post = useLoaderData();
  const { content, image, title, url, publishedAt } = post?.data[0]?.attributes;
  return (
    <article className={`${styles.post} ${styles['mt-3']}`}>
      <img
        className="image"
        src={image?.data?.attributes?.url}
        alt={`imagen blog ${title}`}
      />
      <div className="content">
        <h3>{title}</h3>
        <p className="date">{formatDate(publishedAt)}</p>
        <p className="text">{content}</p>
      </div>
    </article>
  );
}
