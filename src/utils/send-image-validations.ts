interface ValidyExtensionProps {
  target: EventTarget & HTMLInputElement
  allowedExtensions: string[]
}

interface FilteredAssets {
  allowedAssets: File[]
  dontAllowedAssets: File[]
}

export const validyExtension = ({
  target,
  allowedExtensions
}: ValidyExtensionProps): FilteredAssets => {
  if (!target.files) return { allowedAssets: [], dontAllowedAssets: [] }

  const files = Array.from(target.files)
  const allowedAssets: File[] = []
  const dontAllowedAssets: File[] = []

  files.forEach(file => {
    if (allowedExtensions.includes(file.type)) {
      allowedAssets.push(file)
    } else {
      dontAllowedAssets.push(file)
    }
  })

  return { allowedAssets, dontAllowedAssets }
}

export const checkFileKb = (file: File) => {
  if (!file) return 0

  const fileKB = Math.round(file.size / 1024)

  return fileKB
}

export const validyFilesKb = (files: File[], limitKb: number) => {
  if (!files) return

  const allowedAssets: File[] = []
  const dontAllowedAssets: File[] = []

  files.forEach(file => {
    if (checkFileKb(file) > limitKb) {
      dontAllowedAssets.push(file)
    } else {
      allowedAssets.push(file)
    }
  })

  return { allowedAssets, dontAllowedAssets }
}
