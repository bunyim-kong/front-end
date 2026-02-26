// composables/useAuth.ts

export const useAuth = () => {
  const user = useState('auth_user', () => null)

  const authToken = useCookie('auth_token', {
    maxAge: 60 * 60 * 24 * 14,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/'
  })

  const setUser = (userData, jwt) => {
    user.value = userData
    authToken.value = jwt
  }

  const logout = () => {
    user.value = null
    authToken.value = null
    navigateTo('/auth')
  }

  const isAuthenticated = computed(() => {
    return !!user.value && !!authToken.value
  })

  const getAuthHeader = () => {
    return authToken.value ? `Bearer ${authToken.value}` : ''
  }

  return {
    user,
    authToken,
    setUser,
    logout,
    isAuthenticated,
    getAuthHeader
  }
}