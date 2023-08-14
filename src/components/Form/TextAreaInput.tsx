import { ComponentProps } from 'react'

export type TextAreaInputProps = ComponentProps<'textarea'>

export function TextAreaInput(props: TextAreaInputProps) {
  return (
    <textarea
      className="min-h-[120px] w-full resize-y rounded-md border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
