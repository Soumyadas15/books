"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons" // Assuming you have MoonIcon and SunIcon components

import { cn } from "@/lib/utils"

const ThemeSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, checked, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-6 w-6 rounded-full bg-background shadow-lg ring-0 transition-transform",
        checked ? "translate-x-6" : "-translate-x-1"
      )}
    >
        <div className="w-full h-full flex items-center justify-center">
            {checked ? <MoonIcon className="text-white" /> : <SunIcon className="text-black" />}
        </div>
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
))

ThemeSwitch.displayName = SwitchPrimitives.Root.displayName

export { ThemeSwitch }
