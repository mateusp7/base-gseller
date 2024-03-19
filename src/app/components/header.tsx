'use client'

import useAdministrator from '@/app/hooks/administrator'
import useChannel from '@/app/hooks/channel'
import { Header } from '@gseller-monorepo/header'
import Image from 'next/image'

const HeaderComponent = () => {
  const { data: activeAdministrator } = useAdministrator()
  const { handleSelectChannel, channelSelected, isLoadingActiveChannel } =
    useChannel()

  const rolesIds = activeAdministrator?.user.roles.flatMap(role =>
    role.channels.map(channel => channel.id)
  )

  const channels = activeAdministrator?.user.roles
    .flatMap(role => role.channels)
    .filter(({ id }, index) => !rolesIds?.includes(id, index + 1))

  return (
    <Header
      defaultLink="/dashboard"
      channelSelected={channelSelected}
      handleSelectChannel={handleSelectChannel}
      isLoading={isLoadingActiveChannel}
      channels={channels}
    >
      <Image
        src="/gseller_logo_full.png"
        alt="Logo do site"
        className="hidden md:flex"
        width={150}
        height={150}
      />
    </Header>
  )
}

export default HeaderComponent
