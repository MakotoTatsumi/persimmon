import { GetStaticProps } from "next"
import { apiClient } from "../../../../../shared/utils/apiClient"
import { StaticProps } from "../../types"

export const getStaticProps: GetStaticProps<StaticProps, { id: string }> =
  async (context) => {
    const { params } = context

    if (!params) {
      // FIXME: adjust error message
      throw new Error("params ねえ")
    }
    // because, specification of aspida
    // eslint-disable-next-line no-underscore-dangle
    const { body: articleData } = await apiClient.blogs._id(params.id).get()

    return {
      props: {
        articleData,
        name: "パーシモン",
      },
    }
  }
