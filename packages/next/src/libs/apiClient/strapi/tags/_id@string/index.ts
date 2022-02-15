/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Find one tags record */
  get: {
    status: 200
    /** Retrieve tags document(s) */
    resBody: Types.Tags
  }

  /** Update a single tags record */
  put: {
    status: 200
    /** Retrieve tags document(s) */
    resBody: Types.Tags
    reqBody: Types.NewTags
  }

  /** Delete a single tags record */
  delete: {
    status: 200
    /** deletes a single tags based on the ID supplied */
    resBody: number
  }
}
