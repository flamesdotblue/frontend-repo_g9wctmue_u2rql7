import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, Search } from 'lucide-react';

export default function Navbar({ searchValue, onSearchChange }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stored = localStorage.getItem('theme');
    const shouldDark = stored ? stored === 'dark' : prefersDark;
    setDark(shouldDark);
  }, []);

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
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 dark:bg-neutral-900/80 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              <Menu className="w-5 h-5" />
            </button>
            <a href="#" className="flex items-center gap-2 font-semibold text-lg">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white">E</span>
              <span className="hidden sm:block">EduClone</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Home</a>
            <a href="#courses" className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Courses</a>
            <a href="#testimonials" className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Testimonials</a>
            <a href="#" className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Dashboard</a>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800">
              <Search className="w-4 h-4 text-neutral-500" />
              <input
                aria-label="Search"
                placeholder="Search courses"
                className="bg-transparent outline-none text-sm placeholder:text-neutral-500 w-48"
                value={searchValue}
                onChange={(e) => onSearchChange?.(e.target.value)}
              />
            </div>
            <button
              onClick={() => setDark(v => !v)}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href="#" className="hidden sm:inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
              Sign in
            </a>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800">
              <Search className="w-4 h-4 text-neutral-500" />
              <input aria-label="Search" placeholder="Search courses" className="bg-transparent outline-none text-sm placeholder:text-neutral-500 w-full" value={searchValue} onChange={(e) => onSearchChange?.(e.target.value)} />
            </div>
            <nav className="grid gap-1">
              <a href="#" className="px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800">Home</a>
              <a href="#courses" className="px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800">Courses</a>
              <a href="#testimonials" className="px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800">Testimonials</a>
              <a href="#" className="px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800">Dashboard</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
