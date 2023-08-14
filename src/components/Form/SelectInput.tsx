'use client'
import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

export function SelectInput() {
  return (
    <Select.Root>
      <Select.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <Select.Value className="text-black" placeholder="Select a country" />
        <Select.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
          sideOffset={8}
        >
          <Select.Viewport>
            <Select.Item
              value="BR"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <Select.ItemText className="text-black">Brazil</Select.ItemText>
              <Select.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
