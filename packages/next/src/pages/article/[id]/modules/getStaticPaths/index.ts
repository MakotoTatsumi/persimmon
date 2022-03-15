import { GetStaticPaths } from "next"

export const getStaticPaths: GetStaticPaths = async () => {
  const articleData = (await fetch("http://localhost:1337/blogs").then((res) =>
    res.json(),
  )) as { id: string }[]
  const paths = articleData.map((article) => `/article/${article.id}`)

  return {
    fallback: false,
    paths,
  }
}
