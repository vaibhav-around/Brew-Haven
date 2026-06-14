'use client'

import { useRef, useState } from 'react'
import {Search} from "lucide-react"

const SearchBar = ({searchTerm, classes }: {searchTerm: string, classes?: string}) => {
    const[search,setSearch] = useState<string | null>("");
    const inputRef = useRef<HTMLInputElement | null>(null);
    const handleClickIcon = () => {
        inputRef.current?.focus();
    }
  return (
    <div className={`w-20 md:w-40  flex flex-row items-center justify-start gap-2 p-2 border rounded-md focus-within:outline focus-within:outline-green-400 ${classes} overflow-hidden`} >
        <Search size="20" className='shrink-0 ' absoluteStrokeWidth onClick={handleClickIcon} />
        <input ref={inputRef || undefined} type="text" className='outline-none placeholder:text-sm placeholder:text-primary md:placeholder:text-md w-20' placeholder={searchTerm} value={search || ""} onChange={e => setSearch(e.target.value)}/>
    </div>
  )
}

export default SearchBar