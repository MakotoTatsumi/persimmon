import type { NextPage } from "next"
import { apiClient } from "../shared/utils/apiClient"
import { HomePagesProps } from "./types"
import { Home } from "../components/templates/Home"
import { Methods } from "../libs/apiClient/strapi/blogs"

export type BlogsGetResult = {
  body: Methods["get"]["resBody"]
}

const HomePage: NextPage<HomePagesProps> = (props) => <Home {...props} />

export default HomePage

export async function getStaticProps() {
  // openapi2aspida での定義がおかしいっぽい
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const articleData = await (apiClient.blogs.get() as Promise<BlogsGetResult>)
  console.log(articleData)

  return {
    props: {
      articleData: {},
    },
  }
}
