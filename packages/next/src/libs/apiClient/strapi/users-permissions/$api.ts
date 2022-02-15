/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './roles'
// prettier-ignore
import { Methods as Methods1 } from './roles/_id@string'
// prettier-ignore
import { Methods as Methods2 } from './roles/_role@string'
// prettier-ignore
import { Methods as Methods3 } from './search/_id@string'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '')
  const PATH0 = '/users-permissions/roles'
  const PATH1 = '/users-permissions/search'
  const GET = 'GET'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    roles: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          /**
           * Retrieve a role depending on its id
           * @returns response
           */
          get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Retrieve a role depending on its id
           * @returns response
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      _role: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          /**
           * Update a role
           * @returns response
           */
          put: (option: { body: Methods2['put']['reqBody'], config?: T }) =>
            fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update a role
           * @returns response
           */
          $put: (option: { body: Methods2['put']['reqBody'], config?: T }) =>
            fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * Delete a role
           * @returns response
           */
          delete: (option?: { config?: T }) =>
            fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete a role
           * @returns response
           */
          $delete: (option?: { config?: T }) =>
            fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * Retrieve all role documents
       */
      get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
        fetch(prefix, PATH0, GET, option).send(),
      /**
       * Retrieve all role documents
       */
      $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
        fetch(prefix, PATH0, GET, option).send().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    search: {
      _id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          /**
           * Search for users
           */
          get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
            fetch(prefix, prefix1, GET, option).send(),
          /**
           * Search for users
           */
          $get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
            fetch(prefix, prefix1, GET, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
