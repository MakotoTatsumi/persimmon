import {Methods} from "../../libs/apiClient/strapi/blogs";

export type BlogsGetResult = {
  status: number
  body: Methods["get"]["resBody"]
}

export type HomePagesProps = {
  articleData: BlogsGetResult & {
    publishedAt: string
  }
}
