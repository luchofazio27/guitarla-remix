import { Link } from "@remix-run/react"
import { formatDate } from "~/utils/helpers"

export default function Post({post}) {
    
    const {content, image, title, url, publishedAt} = post

  return (
    <article className="post">
        <img className="image" src={image.data.attributes.formats.small.url} alt={`imagen blog ${title}`} />
        <div className="container">
            <h3>{title}</h3>
            <p className="date">{formatDate(publishedAt)}</p>
            <p className="summary">{content}</p>
            <Link className="link" to={`/posts/${url}`}>Leer Post</Link>
        </div>
    </article>
  )
}

