import { useContext } from 'react'
import { ChannelContext } from '../contexts/channel'

const useChannel = () => {
  return useContext(ChannelContext)
}

export default useChannel
