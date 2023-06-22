import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import ListGuitars from "~/components/list-guitars";
import styles from "~/styles/guitars.css";

export function meta() {
  return [
    {title: "GuitarLA - Tienda de Guitarras"},
    {description: "GuitarLA - Nuestra colección de guitarras"},
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export async function loader() {
  const guitars = await getGuitars();
  return guitars.data;
}

function Store() {
  const guitars = useLoaderData();
  return (
    <main className="container">
      <ListGuitars guitars={guitars} />
    </main>
  );
}

export default Store;
