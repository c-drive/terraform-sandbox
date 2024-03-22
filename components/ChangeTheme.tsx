"use client"
import * as React from "react"

import { Sun, Moon , Monitor } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useTheme } from "next-themes"

export function ChangeTheme() {

    const { theme , setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)
   

    React.useEffect(() => {
      setMounted(true)
    }, [])
  
   
    if (!mounted) {
      return null
    }
  

 

  return (
    <Select onValueChange={setTheme}>
        <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent onChange={(e) => console.log(e.target)}>
            <SelectItem value="light"> { /**<Sun className="inline mx-auto"  />*/} Light</SelectItem>
            <SelectItem value="dark" >{/**<Moon className="inline" /> */}Dark</SelectItem>
            <SelectItem value="system">{/**<Monitor className="inline" /> */}System</SelectItem>
        </SelectContent>
    </Select>

  )
}


