import type { NextPage } from "next"

const Home: NextPage = (props: any) => {
  const { articleData } = props
  console.log(articleData)

  return <div>success: {props.name}</div>
}

export default Home

export async function getStaticProps() {
  const articleData = await fetch("http://localhost:1337/blogs").then(res => res.json())

  return {
    props: {
      name: "パーシモン",
      articleData
    },
  }
}
