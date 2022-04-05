import { convertDate } from "./index"

describe("convertDate", () => {
  it("hasDate", () => {
    const data: Parameters<typeof convertDate>[0] = {
      published_at: "2021-10-22T07:33:00.397Z",
    }

    const result: ReturnType<typeof convertDate> = {
      published_at: "21.10.22 16:33",
    }

    expect(convertDate(data)).toEqual(result)
  })

  it("isEmpty", () => {
    const data: Parameters<typeof convertDate>[0] = {
      published_at: "",
    }

    const result: ReturnType<typeof convertDate> = {
      published_at: "",
    }

    expect(convertDate(data)).toEqual(result)
  })
})
