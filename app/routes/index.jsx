import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import { getPosts } from "~/models/posts.server";
import { getCourse } from "~/models/course.server";
import ListGuitars from "~/components/list-guitars";
import ListPosts from "~/components/list-posts";
import Course from "~/components/course";
import stylesGuitars from "~/styles/guitars.css"
import stylesPosts from "~/styles/blog.css"
import stylesCourse from "~/styles/course.css"

export function meta() {
  return [
    {title: "GuitarLA - Remix"},
    {description: "GuitarLA Remix, inicio"},
    { name: "viewport", content: "width=device-width, initial-scale=1.0" }
  ];
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitars
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCourse
    }
  ]
}

export async function loader() {
  const [guitars, posts, course] = await Promise.all([getGuitars(), getPosts(), getCourse()]);
  return {
    guitars: guitars.data,
    posts: posts.data,
    course: course.data
  };
}

function Index() {
  const { guitars, posts, course} = useLoaderData();

  return (
    <>
      <main className="container">
        <ListGuitars guitars={guitars} />
      </main>

      <Course course={course.attributes}/>

      <main className="container">
        <ListPosts posts={posts}/>
      </main>
    </>
  );
}

export default Index;
