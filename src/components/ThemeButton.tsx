import { useState, useEffect } from "react"

export default function ThemeButton(){
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
           (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <div className="grid grid-cols-2 font-mono text-sm">
      <p className="text-zinc-500 dark:text-zinc-400">{!dark ? 'light' : 'dark'}</p>
      
      <label className="relative inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          checked={dark}
          onChange={() => setDark(!dark)} 
        />
        
        <div className="w-11 h-6 bg-zinc-300 rounded-full peer 
          dark:bg-blue-600 
          peer-checked:after:translate-x-full 
          after:content-[''] after:absolute after:top-0.5 after:left-[2px] 
          after:bg-white after:border-gray-300 after:border after:rounded-full 
          after:h-5 after:w-5 after:transition-all">
        </div>
      </label>

    </div>
  )
}