import { Star, Users, DollarSign, CheckCircle2 } from 'lucide-react';

function Rating({ value }) {
  const rounded = Math.round(value);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rounded ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300 dark:text-neutral-700'}`} />
      ))}
      <span className="ml-1 text-sm font-medium">{value.toFixed(1)}</span>
    </div>
  );
}

function CourseCard({ course, enrolled, onEnroll }) {
  return (
    <div className="group rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900 hover:shadow-xl transition-shadow">
      <div className="relative">
        <img src={course.img} alt={course.title} className="h-44 w-full object-cover" />
        <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-md bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800">
          {course.tag}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold leading-snug line-clamp-2 group-hover:text-neutral-900 dark:group-hover:text-white">
          {course.title}
        </h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{course.instructor} • <span className="text-neutral-500">{course.category}</span></p>
        <div className="mt-3 flex items-center justify-between">
          <Rating value={course.rating} />
          <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
            <Users className="w-4 h-4 mr-1" /> {course.students.toLocaleString()}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1 font-semibold">
            <DollarSign className="w-4 h-4" /> {course.price.toFixed(2)}
          </div>
          {enrolled ? (
            <span className="inline-flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-md bg-emerald-600 text-white"><CheckCircle2 className="w-4 h-4" /> Enrolled</span>
          ) : (
            <button onClick={() => onEnroll?.(course.id)} className="text-sm font-medium px-3 py-1.5 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
              Enroll
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FeaturedCourses({ courses = [], enrolledIds = new Set(), onEnroll }) {
  return (
    <section id="courses" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Courses</h2>
            <p className="text-neutral-600 dark:text-neutral-400">Curated picks to kickstart your learning</p>
          </div>
          <div className="hidden sm:block">
            <a href="#courses" className="text-sm font-medium px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
              {courses.length} course{courses.length !== 1 ? 's' : ''}
            </a>
          </div>
        </div>

        {courses.length === 0 ? (
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 text-center text-neutral-600 dark:text-neutral-400">
            No courses match your filters.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c) => (
              <CourseCard key={c.id} course={c} enrolled={enrolledIds.has(c.id)} onEnroll={onEnroll} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
