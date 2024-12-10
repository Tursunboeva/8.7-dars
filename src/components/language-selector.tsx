import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
  export function LanguageSelector() {
    return (
      <Select defaultValue="uz">
        <SelectTrigger className="w-20">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="uz">Uz</SelectItem>
          <SelectItem value="ru">Ru</SelectItem>
          <SelectItem value="en">En</SelectItem>
        </SelectContent>
      </Select>
    )
  }
  
  