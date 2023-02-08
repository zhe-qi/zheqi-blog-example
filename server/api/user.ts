export interface User {
  login: string
  id: number
  node_id: string
  name: string
  avatar_url: string
  bio: string
  location: string
  company: string
  email: string
  blog: string
  url: string
  html_url: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

const baseUrl = 'https://api.github.com'
const user = 'zhe-qi'
const url = `${baseUrl}/users/${user}`

export default defineEventHandler(async () => {
  const user: User = await $fetch(url)
  return user
})
