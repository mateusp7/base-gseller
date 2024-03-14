import { ImageIcon } from 'lucide-react'

export const MessagesWithoutPhotos = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-2 py-10 rounded-lg bg-background-light-photo-view dark:bg-black-photo-view">
      <div className="flex p-2 rounded-lg bg-gray dark:bg-black w-fit">
        <ImageIcon className="size-6" />
      </div>

      <span className="text-center text-black-80 dark:text-black-30">
        Selecione uma imagem ou video <br /> no botão abaixo
      </span>
    </div>
  )
}
