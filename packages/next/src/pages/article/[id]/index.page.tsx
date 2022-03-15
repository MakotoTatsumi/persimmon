import { StaticProps } from "./types"

export { getStaticPaths } from "./modules/getStaticPaths"
export { getStaticProps } from "./modules/getStaticProps"

const ArticleDetail = (props: StaticProps) => {
  const { name, articleData } = props
  return (
    <div>
      {name}
      {JSON.stringify(articleData)}
    </div>
  )
}

export default ArticleDetail
