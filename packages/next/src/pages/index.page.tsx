import type { NextPage } from "next"
import { format } from "date-fns"
import { apiClient } from "../shared/utils/apiClient"
import { HomePagesProps } from "./types"
import { Home } from "../components/templates/Home"
import { Methods } from "../libs/apiClient/strapi/blogs"

type BlogsGetResult = {
  body: Methods["get"]["resBody"]
}

const HomePage: NextPage<HomePagesProps> = (props) => <Home {...props} />

export default HomePage

export async function getStaticProps() {
  // openapi2aspida での定義がおかしいっぽい
  const articleData = await (apiClient.blogs.get() as Promise<BlogsGetResult>)

  const dateConvertedData = articleData.body.map((data) => ({
    ...data,
    publishedAt: data.published_at
      ? format(new Date(data.published_at), "yy.MM.dd HH:mm")
      : "",
  }))

  return {
    props: {
      articleData: dateConvertedData,
    },
  }
}
