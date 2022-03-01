import userEvent from "@testing-library/user-event"
import { screen } from "@testing-library/react"

import { CheckBox } from "./sample.";
import { StoryObj } from "@storybook/react";

export default {
  title: "Checkbox",
  component: CheckBox,

}

export const Default: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: "iphonex", // storybook で定義されている値
    },
    screenshot: {
      viewport: "iPhone X",
    }
  }
}

const sleep = async (callback: () => void) => {
  return new Promise(resolve => setTimeout(() => {
    resolve(setTimeout(callback))
  }, 3000))
}

export const Checked = {
  play: async () => {
    await sleep(() => console.log("sleep"))
    await userEvent.click(screen.getByText("Checked!!!!!"))
  }
}

