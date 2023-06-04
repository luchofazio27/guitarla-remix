import image from "../../public/img/nosotros.jpg";
import styles from "~/styles/we.css";

export function meta() {
  return [
    { title: "GuitarLA - Sobre Nosotros" },
    { description: "Venta de guitarras, bloq de música" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: image,
      as: "image",
    },
  ];
}

function We() {
  return (
    <main className="container we">
      <h2 className="heading">Nosotros</h2>

      <div className="container">
        <img src={image} alt="imagen sobre nosotros" />

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
            neque ipsum. Praesent pretium eleifend placerat. Phasellus convallis
            rhoncus posuere. Duis sed egestas nisl. Vivamus sed nisl in augue
            elementum sodales ac ac enim. Nulla vitae magna finibus, vulputate
            orci nec, molestie urna. Proin at accumsan risus, at auctor arcu.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
            neque ipsum. Praesent pretium eleifend placerat. Phasellus convallis
            rhoncus posuere. Duis sed egestas nisl. Vivamus sed nisl in augue
            elementum sodales ac ac enim. Nulla vitae magna finibus, vulputate
            orci nec, molestie urna. Proin at accumsan risus, at auctor arcu.
          </p>
        </div>
      </div>
    </main>
  );
}

export default We;
