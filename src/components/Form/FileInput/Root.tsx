'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

export type RootProps = ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextType)
export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function handleFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((oldFiles) => [...oldFiles, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected: handleFilesSelected }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export function useFileInput() {
  return useContext(FileInputContext)
}
