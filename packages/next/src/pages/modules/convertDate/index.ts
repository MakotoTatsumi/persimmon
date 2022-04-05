import { format } from "date-fns"

type ConvertDateArguments = {
  published_at: string
}

export const convertDate = (data: ConvertDateArguments) => ({
  ...data,
  published_at: data.published_at
    ? format(new Date(data.published_at), "yy.MM.dd HH:mm")
    : "",
})
