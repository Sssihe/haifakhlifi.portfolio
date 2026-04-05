import { motion } from 'motion/react';
import { ICONS, IMAGES, CERTIFICATIONS } from '../constants';

export default function About() {
  return (
    <div className="space-y-32 pb-32">
      {/* Meet Haifa */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="font-label text-sm uppercase tracking-[0.2em] text-secondary mb-6 block">About Me</span>
            <h1 className="text-6xl md:text-7xl font-bold text-on-background mb-10 leading-[1.1] tracking-tight">
              Haifa <span className="italic text-primary">Khelifi</span>
            </h1>
            <div className="space-y-8 text-lg leading-relaxed text-on-surface-variant font-light max-w-2xl">
              <p>
                With over 15 years of experience teaching English across prestigious high schools in Tunisia, 
                I have built a career defined by precision, adaptability, and genuine passion for human development. 
                My approach goes beyond grammar — I design bespoke learning experiences that empower students 
                to communicate with confidence and clarity.
              </p>
              <p>
                Today, I am channelling this expertise into a new professional chapter: recruitment consulting. 
                The skills that made me an effective educator — assessing profiles, building trust, crafting 
                compelling communication, and managing multiple stakeholders — translate directly and powerfully 
                into talent acquisition and candidate management.
              </p>
              <p>
                Fluent in Arabic, French, English, and with working knowledge of German, I am well-positioned 
                to operate across multicultural, international environments — including my upcoming relocation 
                to Prague, Czech Republic.
              </p>
            </div>
            
            <div className="mt-16 relative pl-12">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container rounded-full" />
              <blockquote className="text-3xl font-headline italic text-on-surface leading-snug max-w-xl">
                "Every student, every candidate, every professional has a story worth telling well. 
                My job is to help them tell it."
              </blockquote>
              <cite className="mt-4 block font-label text-sm uppercase tracking-widest text-secondary not-italic">
                — Haifa Khelifi
              </cite>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] bg-surface-container-high rounded-xl overflow-hidden shadow-2xl relative z-10">
              <img 
                className="w-full h-full object-cover object-top" 
                src={IMAGES.about}
                alt="Haifa Khelifi"
                onError={(e) => { e.currentTarget.src = IMAGES.writing; }}
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-container/30 rounded-xl -z-0 backdrop-blur-3xl" />

            {/* Quick facts card */}
            <div className="absolute -bottom-6 right-4 z-20 bg-surface-container-lowest/95 backdrop-blur-md p-6 rounded-xl shadow-xl">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm">
                  <ICONS.MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-on-surface-variant">Gabès, Tunisia → Prague, CZ</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <ICONS.Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-on-surface-variant">haifakhelifi13@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <ICONS.Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-on-surface-variant">+216 20 965 021</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <span className="font-label text-sm uppercase tracking-[0.2em] text-secondary mb-4 block">Qualifications</span>
            <h2 className="text-4xl font-headline font-bold text-on-background">Education & Credentials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ICONS.ShieldCheck,
                title: "TEFL Level 5",
                desc: "Highest-level TEFL certification from iTTi (2025), covering advanced linguistics, course design, and professional pedagogy for diverse learners.",
                color: "bg-primary-container text-primary"
              },
              {
                icon: ICONS.GraduationCap,
                title: "IELTS Instructor International",
                desc: "Accredited IELTS preparation specialist (iTTi, 2025) with 15+ years supporting students to achieve Band 7+ across Academic and General modules.",
                color: "bg-secondary-container text-secondary"
              },
              {
                icon: ICONS.BookOpen,
                title: "BA English Language & Literature",
                desc: "Bachelor's degree from the University of Gabès (2002–2004) — providing a rich literary and linguistic foundation for exceptional English instruction.",
                color: "bg-tertiary-container text-tertiary"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-surface-container-lowest p-12 rounded-xl flex flex-col items-center text-center hover:shadow-[0_30px_60px_rgba(123,85,86,0.08)] transition-all duration-500"
              >
                <div className={`w-20 h-20 rounded-full ${item.color} flex items-center justify-center mb-8`}>
                  <item.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-headline font-bold mb-4">{item.title}</h3>
                <p className="text-on-surface-variant font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="font-label text-sm uppercase tracking-[0.2em] text-secondary mb-4 block">Professional Development</span>
          <h2 className="text-4xl font-headline font-bold text-on-background">Certifications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 hover:shadow-[0_20px_50px_rgba(123,85,86,0.07)] transition-all duration-500 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-primary-container/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <ICONS.Award className="w-5 h-5 text-primary" />
                </div>
                <span className="font-label text-xs uppercase tracking-widest text-primary bg-primary-container/30 px-3 py-1 rounded-full">
                  {cert.year}
                </span>
              </div>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-2">{cert.title}</h3>
              <p className="font-label text-xs uppercase tracking-wider text-secondary mb-4">{cert.issuer}</p>
              <p className="text-on-surface-variant text-sm leading-relaxed flex-1">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <span className="font-label text-sm uppercase tracking-[0.2em] text-secondary mb-4 block">Languages</span>
            <h2 className="text-4xl font-headline font-bold text-on-background">Multilingual Communicator</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { lang: "Arabic", level: "C2 — Native", width: "100%", color: "bg-primary" },
              { lang: "French", level: "C1 — Advanced", width: "85%", color: "bg-secondary" },
              { lang: "English", level: "C1 — Advanced", width: "85%", color: "bg-primary" },
              { lang: "German", level: "B1 — Intermediate", width: "55%", color: "bg-tertiary" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-surface-container-lowest p-8 rounded-xl"
              >
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">{item.lang}</h3>
                <p className="font-label text-xs uppercase tracking-widest text-secondary mb-6">{item.level}</p>
                <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1 }}
                    className={`h-full ${item.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}