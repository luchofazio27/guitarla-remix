import { Link } from "@remix-run/react" 

function Guitar({guitar}) {
    
    const { description, image, price, url, name } = guitar

  return (
    <div className="guitar">
        <img src={image.data.attributes.formats.medium.url} alt={`Imagen Guitarra ${name}`} />
      <div className="container">
        
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>

        <Link className="link" to={`/guitars/${url}`}>Ver Producto</Link>
      </div>
    </div>
  )
}

export default Guitar
