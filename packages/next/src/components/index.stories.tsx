import userEvent from "@testing-library/user-event"
import { screen } from "@testing-library/react"

import { CheckBox } from "./sample.";

export default {
  title: "Checkbox",
  component: CheckBox,
}

export const Default = {}

const sleep = async (callback: () => void) => {
  return new Promise(resolve => setTimeout(() => {
    resolve(setTimeout(callback))
  }, 3000))
}

export const Checked = {
  play: async () => {
    await sleep(() => console.log("sleep"))
    await userEvent.click(screen.getByText("Check"))
  }
}

