import { motion } from 'motion/react';
import { ICONS, IMAGES } from '../constants';

const experiences = [
  {
    school: "High School of the Republic Avenue",
    location: "Gabès, Tunisia",
    period: "09/2022 – Present",
    role: "English Language Teacher",
    highlights: [
      "Identified individual learner needs through data-driven analysis, increasing student engagement by 30%.",
      "Prepared comprehensive progress reports and curriculum documents for school management and families.",
      "Organised and conducted structured follow-up interviews with students and parents.",
      "Maintained regular communication with administration to build long-term trust-based relationships."
    ],
    color: "border-primary-container"
  },
  {
    school: "High School of Farhat Hached",
    location: "Gabès, Tunisia",
    period: "09/2021 – 09/2022",
    role: "English Language Teacher",
    highlights: [
      "Improved student comprehension by 20% through interactive methods and digital tools.",
      "Designed collaborative projects and delivered one-to-one support for diverse learner needs.",
      "Created digital learning materials resulting in a 40% increase in English competency scores."
    ],
    color: "border-secondary-container"
  },
  {
    school: "High School of Imam Mouslim",
    location: "Tunis, Tunisia",
    period: "09/2013 – 09/2021",
    role: "English Language Teacher",
    highlights: [
      "Led dynamic classroom discussions promoting critical thinking and active participation.",
      "Reduced classroom management issues by 40% through engaging digital tools.",
      "Conducted regular assessments and provided personalised feedback to accelerate learner progress."
    ],
    color: "border-tertiary-container"
  },
  {
    school: "High School of Bougatfa",
    location: "Tunis, Tunisia",
    period: "10/2011 – 09/2013",
    role: "English Language Teacher",
    highlights: [
      "Increased comprehension scores by 22% through differentiated instruction.",
      "Built a collaborative classroom culture through interactive projects and teamwork activities."
    ],
    color: "border-primary-container"
  },
  {
    school: "High School of OASIS",
    location: "Gabès, Tunisia",
    period: "09/2007 – 09/2011",
    role: "English Language Teacher",
    highlights: [
      "Designed and delivered English lessons aligned with national curriculum standards.",
      "Adapted teaching methods to support ESL and special-needs students, ensuring full inclusion."
    ],
    color: "border-secondary-container"
  }
];

export default function Experience() {
  return (
    <div className="space-y-32 pb-32">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <span className="font-label text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-6 block">Professional Journey</span>
          <h1 className="font-headline text-5xl md:text-7xl leading-tight text-on-surface mb-8 italic">
            15 Years of Teaching Across Tunisia.
          </h1>
          <p className="font-body text-xl text-on-surface-variant leading-relaxed max-w-lg mb-10">
            From designing personalised curricula to conducting structured assessments — a career defined 
            by results, relationships, and continuous professional growth.
          </p>
          <div className="w-24 h-1 bg-primary-container rounded-full" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2 relative"
        >
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              className="w-full h-full object-cover" 
              src={IMAGES.experienceDesk}
              alt="Professional teaching environment"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-8 rounded-lg shadow-xl hidden lg:block">
            <div className="text-primary font-headline text-4xl font-bold">15+</div>
            <div className="font-label text-xs tracking-widest uppercase text-secondary">Years in Education</div>
          </div>
        </motion.div>
      </section>

      {/* Key Achievements */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7 bg-surface-container-lowest rounded-xl p-12 border-l-8 border-primary-container relative overflow-hidden flex flex-col justify-between min-h-[400px] shadow-[0_20px_50px_rgba(123,85,86,0.05)]">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary-container/30 rounded-full flex items-center justify-center mb-8">
                <ICONS.GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-headline text-3xl mb-4 text-on-surface">Curriculum Design & Innovation</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg max-w-md">
                Designed data-driven, personalised learning pathways across multiple institutions — 
                consistently improving student outcomes through digital tools, differentiated instruction, 
                and structured assessment frameworks.
              </p>
            </div>
            <div className="mt-8 flex gap-4 flex-wrap">
              {["Personalised Learning", "IELTS Prep", "Digital Tools", "Inclusive Education"].map(tag => (
                <span key={tag} className="px-4 py-2 bg-surface-container-low rounded-full font-label text-xs text-secondary uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 -mr-20 -mt-20 rounded-full blur-3xl" />
          </div>

          <div className="md:col-span-5 bg-surface-container-lowest rounded-xl p-12 border-l-8 border-secondary-container relative overflow-hidden flex flex-col justify-between min-h-[400px] shadow-[0_20px_50px_rgba(123,85,86,0.05)]">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-secondary-container/30 rounded-full flex items-center justify-center mb-8">
                <ICONS.TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-headline text-3xl mb-4 text-on-surface">Measurable Impact</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">+30%</div>
                  <div className="text-xs font-label uppercase tracking-wider text-secondary">Engagement</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-1">+40%</div>
                  <div className="text-xs font-label uppercase tracking-wider text-secondary">Competency</div>
                </div>
              </div>
              <p className="text-on-surface-variant leading-relaxed">
                Consistent, quantifiable improvements across every placement — from engagement to exam scores.
              </p>
            </div>
            <div className="mt-8">
              <div className="h-1.5 w-full bg-secondary-container/20 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-secondary rounded-full" 
                />
              </div>
              <p className="font-label text-[10px] uppercase tracking-widest mt-2 text-secondary">Overall Student Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="font-label text-sm uppercase tracking-[0.2em] text-secondary mb-4 block">Career Timeline</span>
          <h2 className="text-4xl font-headline font-bold text-on-background">Work Experience</h2>
        </div>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-outline-variant/20 hidden md:block" />
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative md:pl-20 bg-surface-container-lowest rounded-xl p-8 md:p-10 border-l-4 ${exp.color} shadow-[0_10px_40px_rgba(123,85,86,0.04)]`}
              >
                <div className="hidden md:flex absolute left-3.5 top-10 w-5 h-5 rounded-full bg-primary-container border-2 border-primary items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-headline text-xl font-bold text-on-surface">{exp.role}</h3>
                    <p className="text-primary font-semibold">{exp.school}</p>
                    <p className="text-on-surface-variant text-sm flex items-center gap-2 mt-1">
                      <ICONS.MapPin className="w-3 h-3" /> {exp.location}
                    </p>
                  </div>
                  <span className="font-label text-xs uppercase tracking-widest text-secondary bg-surface-container px-4 py-2 rounded-full whitespace-nowrap self-start">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-3 text-on-surface-variant text-sm leading-relaxed">
                      <ICONS.CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="relative pl-16 py-8">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container rounded-full" />
          <blockquote className="font-headline text-4xl md:text-5xl leading-tight text-on-surface italic max-w-4xl">
            "The most powerful skill a recruiter or an educator can have is the ability to truly listen — 
            and then ask the right question."
          </blockquote>
          <cite className="mt-8 block font-label text-sm font-bold tracking-[0.2em] text-secondary uppercase">— Haifa Khelifi</cite>
        </div>
      </section>
    </div>
  );
}