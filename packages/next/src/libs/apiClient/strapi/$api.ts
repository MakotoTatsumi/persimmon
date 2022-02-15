/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './auth/_provider@string/callback'
// prettier-ignore
import { Methods as Methods1 } from './auth/email-confirmation'
// prettier-ignore
import { Methods as Methods2 } from './auth/forgot-password'
// prettier-ignore
import { Methods as Methods3 } from './auth/local'
// prettier-ignore
import { Methods as Methods4 } from './auth/local/register'
// prettier-ignore
import { Methods as Methods5 } from './auth/reset-password'
// prettier-ignore
import { Methods as Methods6 } from './auth/send-email-confirmation'
// prettier-ignore
import { Methods as Methods7 } from './blogs'
// prettier-ignore
import { Methods as Methods8 } from './blogs/_id@string'
// prettier-ignore
import { Methods as Methods9 } from './blogs/count'
// prettier-ignore
import { Methods as Methods10 } from './connect/_any'
// prettier-ignore
import { Methods as Methods11 } from './email'
// prettier-ignore
import { Methods as Methods12 } from './email/settings'
// prettier-ignore
import { Methods as Methods13 } from './email/test'
// prettier-ignore
import { Methods as Methods14 } from './tags'
// prettier-ignore
import { Methods as Methods15 } from './tags/_id@string'
// prettier-ignore
import { Methods as Methods16 } from './tags/count'
// prettier-ignore
import { Methods as Methods17 } from './upload'
// prettier-ignore
import { Methods as Methods18 } from './upload/files'
// prettier-ignore
import { Methods as Methods19 } from './upload/files/_id@string'
// prettier-ignore
import { Methods as Methods20 } from './upload/files/count'
// prettier-ignore
import { Methods as Methods21 } from './upload/search/_id@string'
// prettier-ignore
import { Methods as Methods22 } from './users'
// prettier-ignore
import { Methods as Methods23 } from './users/_id@string'
// prettier-ignore
import { Methods as Methods24 } from './users/me'
// prettier-ignore
import { Methods as Methods25 } from './users-permissions/roles'
// prettier-ignore
import { Methods as Methods26 } from './users-permissions/roles/_id@string'
// prettier-ignore
import { Methods as Methods27 } from './users-permissions/roles/_role@string'
// prettier-ignore
import { Methods as Methods28 } from './users-permissions/search/_id@string'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1337' : baseURL).replace(/\/$/, '')
  const PATH0 = '/auth'
  const PATH1 = '/callback'
  const PATH2 = '/auth/email-confirmation'
  const PATH3 = '/auth/forgot-password'
  const PATH4 = '/auth/local'
  const PATH5 = '/auth/local/register'
  const PATH6 = '/auth/reset-password'
  const PATH7 = '/auth/send-email-confirmation'
  const PATH8 = '/blogs'
  const PATH9 = '/blogs/count'
  const PATH10 = '/connect'
  const PATH11 = '/email'
  const PATH12 = '/email/settings'
  const PATH13 = '/email/test'
  const PATH14 = '/tags'
  const PATH15 = '/tags/count'
  const PATH16 = '/upload'
  const PATH17 = '/upload/files'
  const PATH18 = '/upload/files/count'
  const PATH19 = '/upload/search'
  const PATH20 = '/users'
  const PATH21 = '/users/me'
  const PATH22 = '/users-permissions/roles'
  const PATH23 = '/users-permissions/search'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    auth: {
      _provider: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          callback: {
            /**
             * Successfull redirection after approving a provider
             * @returns response
             */
            get: (option?: { config?: T }) =>
              fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
            /**
             * Successfull redirection after approving a provider
             * @returns response
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH1}`
          }
        }
      },
      email_confirmation: {
        /**
         * Validate a user account
         * @returns response
         */
        get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH2, GET, option).json(),
        /**
         * Validate a user account
         * @returns response
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH2}`
      },
      forgot_password: {
        /**
         * Send the reset password email link
         * @returns response
         */
        post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
          fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH3, POST, option).json(),
        /**
         * Send the reset password email link
         * @returns response
         */
        $post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
          fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH3}`
      },
      local: {
        register: {
          /**
           * Register a new user with the default role
           * @returns response
           */
          post: (option: { body: Methods4['post']['reqBody'], config?: T }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH5, POST, option).json(),
          /**
           * Register a new user with the default role
           * @returns response
           */
          $post: (option: { body: Methods4['post']['reqBody'], config?: T }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH5}`
        },
        /**
         * Login a user using the identifiers email and password
         * @returns response
         */
        post: (option: { body: Methods3['post']['reqBody'], config?: T }) =>
          fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH4, POST, option).json(),
        /**
         * Login a user using the identifiers email and password
         * @returns response
         */
        $post: (option: { body: Methods3['post']['reqBody'], config?: T }) =>
          fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH4}`
      },
      reset_password: {
        /**
         * Reset user password with a code (resetToken)
         * @returns response
         */
        post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
          fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH6, POST, option).json(),
        /**
         * Reset user password with a code (resetToken)
         * @returns response
         */
        $post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
          fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH6, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH6}`
      },
      send_email_confirmation: {
        /**
         * Send a confirmation email to user
         * @returns response
         */
        post: (option: { body: Methods6['post']['reqBody'], config?: T }) =>
          fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH7, POST, option).json(),
        /**
         * Send a confirmation email to user
         * @returns response
         */
        $post: (option: { body: Methods6['post']['reqBody'], config?: T }) =>
          fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH7, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH7}`
      }
    },
    blogs: {
      _id: (val1: string) => {
        const prefix1 = `${PATH8}/${val1}`

        return {
          /**
           * @returns response
           */
          get: (option?: { config?: T }) =>
            fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns response
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Update a record
           * @returns response
           */
          put: (option: { body: Methods8['put']['reqBody'], config?: T }) =>
            fetch<Methods8['put']['resBody'], BasicHeaders, Methods8['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update a record
           * @returns response
           */
          $put: (option: { body: Methods8['put']['reqBody'], config?: T }) =>
            fetch<Methods8['put']['resBody'], BasicHeaders, Methods8['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * Delete a record
           * @returns deletes a single record based on the ID supplied
           */
          delete: (option?: { config?: T }) =>
            fetch<Methods8['delete']['resBody'], BasicHeaders, Methods8['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete a record
           * @returns deletes a single record based on the ID supplied
           */
          $delete: (option?: { config?: T }) =>
            fetch<Methods8['delete']['resBody'], BasicHeaders, Methods8['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      count: {
        /**
         * @returns response
         */
        get: (option?: { config?: T }) =>
          fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH9, GET, option).json(),
        /**
         * @returns response
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH9}`
      },
      get: (option?: { query?: Methods7['get']['query'], config?: T }) =>
        fetch(prefix, PATH8, GET, option).send(),
      $get: (option?: { query?: Methods7['get']['query'], config?: T }) =>
        fetch(prefix, PATH8, GET, option).send().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods7['get']['query'] }) =>
        `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    connect: {
      _any: (val1: number | string) => {
        const prefix1 = `${PATH10}/${val1}`

        return {
          /**
           * Connect a provider
           * @returns response
           */
          get: (option?: { config?: T }) =>
            fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Connect a provider
           * @returns response
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    email: {
      settings: {
        /**
         * Get the email settings
         * @returns response
         */
        get: (option?: { config?: T }) =>
          fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, PATH12, GET, option).json(),
        /**
         * Get the email settings
         * @returns response
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, PATH12, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH12}`
      },
      test: {
        /**
         * Send an test email
         * @returns response
         */
        post: (option: { body: Methods13['post']['reqBody'], config?: T }) =>
          fetch<Methods13['post']['resBody'], BasicHeaders, Methods13['post']['status']>(prefix, PATH13, POST, option).json(),
        /**
         * Send an test email
         * @returns response
         */
        $post: (option: { body: Methods13['post']['reqBody'], config?: T }) =>
          fetch<Methods13['post']['resBody'], BasicHeaders, Methods13['post']['status']>(prefix, PATH13, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH13}`
      },
      /**
       * Send an email
       * @returns response
       */
      post: (option: { body: Methods11['post']['reqBody'], config?: T }) =>
        fetch<Methods11['post']['resBody'], BasicHeaders, Methods11['post']['status']>(prefix, PATH11, POST, option).json(),
      /**
       * Send an email
       * @returns response
       */
      $post: (option: { body: Methods11['post']['reqBody'], config?: T }) =>
        fetch<Methods11['post']['resBody'], BasicHeaders, Methods11['post']['status']>(prefix, PATH11, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH11}`
    },
    tags: {
      _id: (val1: string) => {
        const prefix1 = `${PATH14}/${val1}`

        return {
          /**
           * Find one tags record
           * @returns Retrieve tags document(s)
           */
          get: (option?: { config?: T }) =>
            fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Find one tags record
           * @returns Retrieve tags document(s)
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Update a single tags record
           * @returns Retrieve tags document(s)
           */
          put: (option: { body: Methods15['put']['reqBody'], config?: T }) =>
            fetch<Methods15['put']['resBody'], BasicHeaders, Methods15['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update a single tags record
           * @returns Retrieve tags document(s)
           */
          $put: (option: { body: Methods15['put']['reqBody'], config?: T }) =>
            fetch<Methods15['put']['resBody'], BasicHeaders, Methods15['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * Delete a single tags record
           * @returns deletes a single tags based on the ID supplied
           */
          delete: (option?: { config?: T }) =>
            fetch<Methods15['delete']['resBody'], BasicHeaders, Methods15['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete a single tags record
           * @returns deletes a single tags based on the ID supplied
           */
          $delete: (option?: { config?: T }) =>
            fetch<Methods15['delete']['resBody'], BasicHeaders, Methods15['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      count: {
        /**
         * Retrieve the number of tags documents
         * @returns Retrieve tags document(s)
         */
        get: (option?: { config?: T }) =>
          fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH15, GET, option).json(),
        /**
         * Retrieve the number of tags documents
         * @returns Retrieve tags document(s)
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH15, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH15}`
      },
      /**
       * Find all the tags's records
       */
      get: (option?: { query?: Methods14['get']['query'], config?: T }) =>
        fetch(prefix, PATH14, GET, option).send(),
      /**
       * Find all the tags's records
       */
      $get: (option?: { query?: Methods14['get']['query'], config?: T }) =>
        fetch(prefix, PATH14, GET, option).send().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods14['get']['query'] }) =>
        `${prefix}${PATH14}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    upload: {
      files: {
        _id: (val2: string) => {
          const prefix2 = `${PATH17}/${val2}`

          return {
            /**
             * Retrieve a single file depending on its id
             * @returns response
             */
            get: (option?: { config?: T }) =>
              fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Retrieve a single file depending on its id
             * @returns response
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * Delete an uploaded file
             * @returns response
             */
            delete: (option?: { config?: T }) =>
              fetch<Methods19['delete']['resBody'], BasicHeaders, Methods19['delete']['status']>(prefix, prefix2, DELETE, option).json(),
            /**
             * Delete an uploaded file
             * @returns response
             */
            $delete: (option?: { config?: T }) =>
              fetch<Methods19['delete']['resBody'], BasicHeaders, Methods19['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        count: {
          /**
           * Retrieve the total number of uploaded files
           * @returns response
           */
          get: (option?: { config?: T }) =>
            fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, PATH18, GET, option).json(),
          /**
           * Retrieve the total number of uploaded files
           * @returns response
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, PATH18, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH18}`
        },
        /**
         * Retrieve all file documents
         * @returns response
         */
        get: (option?: { config?: T }) =>
          fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, PATH17, GET, option).json(),
        /**
         * Retrieve all file documents
         * @returns response
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, PATH17, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH17}`
      },
      search: {
        _id: (val2: string) => {
          const prefix2 = `${PATH19}/${val2}`

          return {
            /**
             * Search for an uploaded file
             * @returns response
             */
            get: (option?: { config?: T }) =>
              fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Search for an uploaded file
             * @returns response
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        }
      },
      /**
       * Upload a file
       * @returns response
       */
      post: (option: { body: Methods17['post']['reqBody'], config?: T }) =>
        fetch<Methods17['post']['resBody'], BasicHeaders, Methods17['post']['status']>(prefix, PATH16, POST, option).json(),
      /**
       * Upload a file
       * @returns response
       */
      $post: (option: { body: Methods17['post']['reqBody'], config?: T }) =>
        fetch<Methods17['post']['resBody'], BasicHeaders, Methods17['post']['status']>(prefix, PATH16, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH16}`
    },
    users: {
      _id: (val1: string) => {
        const prefix1 = `${PATH20}/${val1}`

        return {
          /**
           * Retrieve a single user depending on his id
           * @returns response
           */
          get: (option?: { config?: T }) =>
            fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Retrieve a single user depending on his id
           * @returns response
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Update an existing user
           * @returns response
           */
          put: (option: { body: Methods23['put']['reqBody'], config?: T }) =>
            fetch<Methods23['put']['resBody'], BasicHeaders, Methods23['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update an existing user
           * @returns response
           */
          $put: (option: { body: Methods23['put']['reqBody'], config?: T }) =>
            fetch<Methods23['put']['resBody'], BasicHeaders, Methods23['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * Delete an existing user
           * @returns response
           */
          delete: (option?: { config?: T }) =>
            fetch<Methods23['delete']['resBody'], BasicHeaders, Methods23['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete an existing user
           * @returns response
           */
          $delete: (option?: { config?: T }) =>
            fetch<Methods23['delete']['resBody'], BasicHeaders, Methods23['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      me: {
        /**
         * Retrieve the logged in user information
         * @returns response
         */
        get: (option?: { config?: T }) =>
          fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, PATH21, GET, option).json(),
        /**
         * Retrieve the logged in user information
         * @returns response
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, PATH21, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH21}`
      },
      /**
       * Retrieve all user documents
       */
      get: (option?: { query?: Methods22['get']['query'], config?: T }) =>
        fetch(prefix, PATH20, GET, option).send(),
      /**
       * Retrieve all user documents
       */
      $get: (option?: { query?: Methods22['get']['query'], config?: T }) =>
        fetch(prefix, PATH20, GET, option).send().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods22['get']['query'] }) =>
        `${prefix}${PATH20}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    users_permissions: {
      roles: {
        _id: (val2: string) => {
          const prefix2 = `${PATH22}/${val2}`

          return {
            /**
             * Retrieve a role depending on its id
             * @returns response
             */
            get: (option?: { config?: T }) =>
              fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Retrieve a role depending on its id
             * @returns response
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        _role: (val2: string) => {
          const prefix2 = `${PATH22}/${val2}`

          return {
            /**
             * Update a role
             * @returns response
             */
            put: (option: { body: Methods27['put']['reqBody'], config?: T }) =>
              fetch<Methods27['put']['resBody'], BasicHeaders, Methods27['put']['status']>(prefix, prefix2, PUT, option).json(),
            /**
             * Update a role
             * @returns response
             */
            $put: (option: { body: Methods27['put']['reqBody'], config?: T }) =>
              fetch<Methods27['put']['resBody'], BasicHeaders, Methods27['put']['status']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            /**
             * Delete a role
             * @returns response
             */
            delete: (option?: { config?: T }) =>
              fetch<Methods27['delete']['resBody'], BasicHeaders, Methods27['delete']['status']>(prefix, prefix2, DELETE, option).json(),
            /**
             * Delete a role
             * @returns response
             */
            $delete: (option?: { config?: T }) =>
              fetch<Methods27['delete']['resBody'], BasicHeaders, Methods27['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        /**
         * Retrieve all role documents
         */
        get: (option?: { query?: Methods25['get']['query'], config?: T }) =>
          fetch(prefix, PATH22, GET, option).send(),
        /**
         * Retrieve all role documents
         */
        $get: (option?: { query?: Methods25['get']['query'], config?: T }) =>
          fetch(prefix, PATH22, GET, option).send().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods25['get']['query'] }) =>
          `${prefix}${PATH22}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      search: {
        _id: (val2: string) => {
          const prefix2 = `${PATH23}/${val2}`

          return {
            /**
             * Search for users
             */
            get: (option?: { query?: Methods28['get']['query'], config?: T }) =>
              fetch(prefix, prefix2, GET, option).send(),
            /**
             * Search for users
             */
            $get: (option?: { query?: Methods28['get']['query'], config?: T }) =>
              fetch(prefix, prefix2, GET, option).send().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods28['get']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
