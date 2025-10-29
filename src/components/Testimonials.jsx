function TestimonialCard({ quote, name, role, avatar }) {
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
      <div className="flex items-center gap-4">
        <img src={avatar} alt={name} className="h-12 w-12 rounded-full object-cover" />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-neutral-700 dark:text-neutral-300">“{quote}”</p>
    </div>
  );
}

const data = [
  {
    name: 'Emma Johnson',
    role: 'Product Designer',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
    quote: 'The lessons are concise and practical. I landed a new role after completing two courses!'
  },
  {
    name: 'Marcus Lee',
    role: 'Frontend Engineer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
    quote: 'Love the hands-on projects and quizzes. The certificates looked great on my profile.'
  },
  {
    name: 'Sara Ahmed',
    role: 'Data Analyst',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop',
    quote: 'High-quality content from experts. The platform makes learning enjoyable.'
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-neutral-50 dark:bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Loved by learners worldwide</h2>
          <p className="text-neutral-600 dark:text-neutral-400">Hear what our community says</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {data.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
