/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    /** response */
    resBody: Types.Blog
  }

  /** Update a record */
  put: {
    status: 200
    /** response */
    resBody: Types.Blog
    reqBody: Types.NewBlog
  }

  /** Delete a record */
  delete: {
    status: 200
    /** deletes a single record based on the ID supplied */
    resBody: number
  }
}
