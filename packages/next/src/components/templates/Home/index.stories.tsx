import { Home } from "."
import { HomeProps } from "./types"

export default {
  title: "components/templates/Home",
}

export const Default = (props: HomeProps) => <Home {...props} />
