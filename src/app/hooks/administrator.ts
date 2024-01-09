import { useContext } from 'react'
import { ActiveAdministratorContext } from '../contexts/active-administrator'

const useAdministrator = () => {
  return useContext(ActiveAdministratorContext)
}

export default useAdministrator
