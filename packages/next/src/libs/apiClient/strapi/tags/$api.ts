/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'
// prettier-ignore
import { Methods as Methods1 } from './_id@string'
// prettier-ignore
import { Methods as Methods2 } from './count'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '')
  const PATH0 = '/tags'
  const PATH1 = '/tags/count'
  const GET = 'GET'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * Find one tags record
         * @returns Retrieve tags document(s)
         */
        get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * Find one tags record
         * @returns Retrieve tags document(s)
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * Update a single tags record
         * @returns Retrieve tags document(s)
         */
        put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option).json(),
        /**
         * Update a single tags record
         * @returns Retrieve tags document(s)
         */
        $put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option).json().then(r => r.body),
        /**
         * Delete a single tags record
         * @returns deletes a single tags based on the ID supplied
         */
        delete: (option?: { config?: T }) =>
          fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).json(),
        /**
         * Delete a single tags record
         * @returns deletes a single tags based on the ID supplied
         */
        $delete: (option?: { config?: T }) =>
          fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    count: {
      /**
       * Retrieve the number of tags documents
       * @returns Retrieve tags document(s)
       */
      get: (option?: { config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * Retrieve the number of tags documents
       * @returns Retrieve tags document(s)
       */
      $get: (option?: { config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    /**
     * Find all the tags's records
     */
    get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
      fetch(prefix, PATH0, GET, option).send(),
    /**
     * Find all the tags's records
     */
    $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
      fetch(prefix, PATH0, GET, option).send().then(r => r.body),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
