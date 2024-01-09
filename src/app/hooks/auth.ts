import { useContext } from 'react'
import { AuthContext } from '../contexts/auth-context'

export const useAuthContext = () => {
  return useContext(AuthContext)
}
