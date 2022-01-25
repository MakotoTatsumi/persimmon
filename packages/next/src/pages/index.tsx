import type { NextPage } from "next"
import {apiClient} from "../shared/utils/apiClient";

const Home: NextPage = (props: any) => {
  const { articleData } = props
  console.log(articleData)

  return <div>success: {props.name}</div>
}

export default Home

export async function getStaticProps() {
  const articleData = await apiClient.blogs.get()
  console.log(articleData.body)

  return {
    props: {
      name: "パーシモン",
      articleData: articleData.body
    },
  }
}
