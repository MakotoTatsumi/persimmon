import { VFC } from "react"
import { useTest } from './modules'
import { TestProps } from './types'

export const Test: VFC<TestProps> = (props) => {
  const dependencies = useTest(props)
  return <div>Test</div>
}
