import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import Testimonials from './components/Testimonials';

const ALL_COURSES = [
  {
    id: 1,
    title: 'React 18 + TypeScript: The Complete Guide',
    instructor: 'Sarah Mitchell',
    rating: 4.8,
    ratingsCount: 12543,
    students: 45210,
    price: 19.99,
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop',
    tag: 'Bestseller',
    category: 'Development',
  },
  {
    id: 2,
    title: 'UI/UX Design with Figma — Zero to Hero',
    instructor: 'Daniel Kim',
    rating: 4.7,
    ratingsCount: 8421,
    students: 31200,
    price: 14.99,
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1470&auto=format&fit=crop',
    tag: 'Featured',
    category: 'Design',
  },
  {
    id: 3,
    title: 'Python for Data Science & Machine Learning',
    instructor: 'Aisha Khan',
    rating: 4.9,
    ratingsCount: 19870,
    students: 60123,
    price: 24.99,
    img: 'https://images.unsplash.com/photo-1551281044-8e8e3a10a399?q=80&w=1470&auto=format&fit=crop',
    tag: 'New',
    category: 'Data Science',
  },
  {
    id: 4,
    title: 'Digital Marketing Masterclass',
    instructor: 'Luis Fernandez',
    rating: 4.6,
    ratingsCount: 5260,
    students: 20950,
    price: 12.99,
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop',
    tag: 'Popular',
    category: 'Marketing',
  },
];

function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [enrolled, setEnrolled] = useState(() => new Set());

  const categories = useMemo(() => ['All', 'Development', 'Design', 'Data Science', 'Marketing'], []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_COURSES.filter((c) => {
      const inCategory = category === 'All' || c.category === category;
      const inQuery = !q || c.title.toLowerCase().includes(q) || c.instructor.toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [query, category]);

  const handleEnroll = (id) => {
    setEnrolled((prev) => new Set(prev).add(id));
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar searchValue={query} onSearchChange={setQuery} />
      <main>
        <Hero
          categories={categories}
          selectedCategory={category}
          onSelectCategory={setCategory}
        />
        <FeaturedCourses
          courses={filtered}
          enrolledIds={enrolled}
          onEnroll={handleEnroll}
        />
        <Testimonials />
      </main>
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} EduClone. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
