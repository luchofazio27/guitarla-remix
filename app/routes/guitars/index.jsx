import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import ListGuitars from "~/components/list-guitars";

export function meta() {
  return [
    {title: "GuitarLA - Tienda de Guitarras"},
    {description: "GuitarLA - Nuestra colección de guitarras"},
  ];
}

export async function loader() {
  const guitars = await getGuitars();
  return guitars.data;
}

function Store() {
  const guitars = useLoaderData();
  return (
      <ListGuitars guitars={guitars} />
  );
}

export default Store;