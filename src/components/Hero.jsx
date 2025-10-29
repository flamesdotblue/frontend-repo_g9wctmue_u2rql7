import { PlayCircle } from 'lucide-react';

function CategoryPills({ categories, selected, onSelect }) {
  return (
    <div className="mt-8 flex flex-wrap gap-2">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onSelect?.(c)}
          className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
            selected === c
              ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900'
              : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800'
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

export default function Hero({ categories = [], selectedCategory = 'All', onSelectCategory }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-70 dark:opacity-100 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-violet-400/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Learn anything. Build your future.
            </h1>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
              Join thousands of learners mastering new skills with expert-led video courses, quizzes, and certificates.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#courses"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium"
              >
                Browse Courses
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 font-medium"
              >
                <PlayCircle className="w-5 h-5 mr-2" /> Watch Demo
              </a>
            </div>
            <CategoryPills categories={categories} selected={selectedCategory} onSelect={onSelectCategory} />

            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold">1M+</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Learners</p>
              </div>
              <div>
                <p className="text-3xl font-bold">10k+</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Courses</p>
              </div>
              <div>
                <p className="text-3xl font-bold">4.8/5</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Average Rating</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1470&auto=format&fit=crop"
                alt="Learning preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
