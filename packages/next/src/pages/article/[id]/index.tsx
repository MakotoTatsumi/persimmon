import {GetStaticPaths, GetStaticProps} from "next";

const ArticleDetail = (props: any) => {
  console.log(props)
  return <div>ArticleDetail</div>
}

export default ArticleDetail

export const getStaticProps: GetStaticProps<{ name: string, articleData: [] },{ id: string }> = async (context) => {
  const { params } = context

  const articleData = await fetch(`http://localhost:1337/blogs/${params?.id}`).then(res => res.json())

  return {
    props: {
      name: "パーシモン",
      articleData
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articleData = await fetch("http://localhost:1337/blogs").then(res => res.json()) as { id: string }[]
  const paths = articleData.map(article => `/article/${article.id}`)

  return {
    paths,
    fallback: false,
   }
}
