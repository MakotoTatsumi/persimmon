import type { NextPage } from "next"
import { apiClient } from "../shared/utils/apiClient";
import { format } from 'date-fns'
import { Methods } from "../libs/apiClient/strapi/blogs";

type BlogsGetResult = {
  status: number
  body: Methods["get"]["resBody"]
}

const Home: NextPage = (props: any) => {
  const { articleData } = props
  console.log(articleData)

  return <div>success: {props.name}</div>
}

export default Home

const getDisplayDate = (targetOriginData?: string): string => {
  return targetOriginData || ""
}

export async function getStaticProps() {
  // openapi2aspida での定義がおかしいっぽい
  // @ts-ignore
  const articleData = await (apiClient.blogs.get() as Promise<BlogsGetResult>)

  const dateConvertedData = articleData.body.map(data => {
    return {
      ...data,
      publishedAt: data.published_at ? format(new Date(data.published_at), "yy.MM.dd HH:mm") : ""
    }
  })

  return {
    props: {
      name: "パーシモン",
      articleData: dateConvertedData
    },
  }
}
