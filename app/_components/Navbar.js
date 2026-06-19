"use client";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navElements=[
  { path: '/', label: 'Home'},
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'about',},
  { path: '/contact', label: 'contact'},
  { path: '/resume', label: 'resume'},
  
]

export default function Navbar() {
      const [ theme, setTheme ] = useState("light");
      const pathname=usePathname()
      const [open, setOpen] = useState(false)

      useEffect(()=>{
        const savedTheme=localStorage.getItem("theme");
        if(savedTheme){
          // eslint-disable-next-line react-hooks/set-state-in-effect
            setTheme(savedTheme)
        }else{
          const systemTheme=window.matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"
            setTheme(systemTheme)
        }
      },[])

      useEffect(()=>{
        if(theme==="dark"){
          document.documentElement.classList.add("dark")
        }else{
          document.documentElement.classList.remove("dark")
        }
        localStorage.setItem("theme",theme)
      },[theme])


  

  return (
    <nav className="max-w-6xl mx-auto px-4 py-2 ">
      
        <div className="flex items-start  justify-between relative">
          
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div >
                {/* <img src="/my.jpg" alt="my picture" className="w-24 h-24 rounded-4xl md:w-32 md:h-32 object-cover" /> */}
            </div>
            <span className="font-bold lg:text-xl select-none dark:text-gray-100 text-sm text-gray-800">Mohammad Asif <br /> Mohammadi</span>
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden sm:flex items-center gap-8 mt-4">
            {navElements.map((item) => (
              <li key={item.label}>
              <Link 
                key={item.path} 
                href={item.path}
                className={`text-text-light dark:text-text-dark hover:text-blue-500  transition-colors uppercase font-bold text-sm ${pathname===item.path?"border-b-2 border-blue-500":""}`}
              >
                {item.label}
              </Link>
              </li>
              
            ))}
            
            {/* Theme Toggle */}
            <li>
            <button 
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="text-2xl p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center justify-center"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button></li>
            
          </ul>
          
          {/* Mobile Menu Button */}
          <button className="sm:hidden dark:text-gray-100 cursor-pointer absolute right-2 top-2" onClick={()=>setOpen(true)}>
            {!open&&<FaBars />}
          </button>

        <div   className={`
    fixed top-0 right-0 h-screen w-32
    bg-white dark:bg-gray-900
    shadow-xl
    transform transition-transform duration-300
    z-50
    flex flex-col gap-6 p-6
    ${open ? "translate-x-0" : "translate-x-full"}
  `}>
              <button className="sm:hidden dark:text-gray-100 cursor-pointer absolute right-2 top-2" onClick={()=>setOpen(false)}>
            {open&&<RxCross2 />}
          </button>
            {navElements.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`text-text-light dark:text-text-dark hover:text-blue-500  transition-colors uppercase font-bold text-sm mx-auto ${pathname===item.path?"border-b-2 border-blue-500":""}`}
              >
                {item.label}
              </Link>
              
            ))}

               {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="text-2xl p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center justify-center"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            
          </div>
          
        </div>
      
    </nav>
  )
}

