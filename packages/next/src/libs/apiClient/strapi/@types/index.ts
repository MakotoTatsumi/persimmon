/* eslint-disable */
export type Blog = {
  id: string
  articleTitle: string
  articleContent: string

  eyeCatch: {
    id: string
    name: string
    alternativeText?: string
    caption?: string
    width?: number
    height?: number
    hash: string
    ext?: string
    mime: string
    size: number
    url: string
    previewUrl?: string
    provider: string
    related?: string
    created_by?: string
    updated_by?: string
  }

  createdAt: string
  tags?: {
    id: string
    tagName?: string
    articles?: string[]
    published_at?: string
    created_by?: string
    updated_by?: string
  }[]
  published_at?: string
}

export type NewBlog = {
  articleTitle: string
  articleContent: string
  createdAt: string
  tags?: string[]
  published_at?: string
  created_by?: string
  updated_by?: string
}

export type Tags = {
  id: string
  tagName?: string
  articles?: {
    id: string
    articleTitle: string
    articleContent: string
    eyeCatch: string
    createdAt: string
    tags?: string[]
    published_at?: string
    created_by?: string
    updated_by?: string
  }[]
  published_at?: string
}

export type NewTags = {
  tagName: string
  articles: string[]
  published_at: string
  created_by: string
  updated_by: string
}

export type UsersPermissionsRole = {
  id: string
  name: string
  description?: string
  type?: string
  permissions?: {
    id: string
    type: string
    controller: string
    action: string
    enabled: boolean
    policy?: string
    role?: string
    created_by?: string
    updated_by?: string
  }[]
  users?: {
    id: string
    username: string
    email: string
    provider?: string
    password?: string
    resetPasswordToken?: string
    confirmationToken?: string
    confirmed?: boolean
    blocked?: boolean
    role?: string
    created_by?: string
    updated_by?: string
  }[]
}

export type NewUsersPermissionsRole = {
  name: string
  description?: string
  type?: string
  permissions?: string[]
  users?: string[]
  created_by?: string
  updated_by?: string
}

export type UsersPermissionsUser = {
  id: string
  username: string
  email: string
  provider?: string
  confirmed?: boolean
  blocked?: boolean

  role?: {
    id: string
    name: string
    description?: string
    type?: string
    permissions?: string[]
    users?: string[]
    created_by?: string
    updated_by?: string
  }
}

export type NewUsersPermissionsUser = {
  username: string
  email: string
  provider?: string
  password?: string
  resetPasswordToken?: string
  confirmationToken?: string
  confirmed?: boolean
  blocked?: boolean
  role?: string
  created_by?: string
  updated_by?: string
}

export type Error = {
  code: number
  message: string
}
