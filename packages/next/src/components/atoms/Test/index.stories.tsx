import { Test } from "."
import { TestProps } from "./types"

export default {
  title: "components/atoms/Test",
}

export const Default = (props: TestProps) => <Test {...props} />
