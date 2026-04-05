import { motion } from 'motion/react';
import { ICONS, IMAGES } from '../constants';

export default function Home() {
  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-20 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-container/30 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl opacity-50" />
        
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <span className="font-label text-secondary tracking-[0.2em] uppercase text-xs mb-6 block font-bold">
              English Teacher · Trainee Recruiter · Multilingual Professional
            </span>
            <h1 className="font-headline text-5xl lg:text-7xl text-on-background leading-[1.1] mb-8 -tracking-[0.02em]">
              Haifa <span className="italic text-primary">Khelifi</span>
            </h1>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-[2px] bg-primary-container rounded-full" />
              <p className="font-body text-secondary text-lg lg:text-xl font-medium">
                TEFL Level 5 · IELTS Instructor · 15+ Years in Education
              </p>
            </div>
            <p className="font-body text-on-surface-variant text-lg leading-relaxed max-w-xl mb-10">
              Dynamic educator and results-driven professional with over 15 years shaping English 
              language learners across Tunisia. Now channelling deep expertise in assessment, 
              communication, and relationship-building into a new career in recruitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="mailto:haifakhelifi13@gmail.com"
                className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-10 py-5 rounded-full text-lg font-semibold shadow-2xl hover:shadow-primary/20 transition-all transform hover:-translate-y-1"
              >
                Get in Touch
              </a>
              <button className="group flex items-center gap-3 text-primary font-bold text-lg py-5 px-4 hover:opacity-80 transition-opacity">
                View Experience
                <ICONS.ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            
            <div className="mt-16 flex items-center gap-8 grayscale opacity-60">
              <span className="text-sm font-label uppercase tracking-widest text-outline">Certified by</span>
              <div className="flex gap-6 items-center">
                <ICONS.GraduationCap className="w-8 h-8" />
                <ICONS.ShieldCheck className="w-8 h-8" />
                <ICONS.Award className="w-8 h-8" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 aspect-[4/5] bg-surface-container-high">
              <img 
                alt="Haifa Khelifi — English Teacher" 
                className="w-full h-full object-cover object-top" 
                src={IMAGES.hero}
                onError={(e) => { e.currentTarget.src = IMAGES.books; }}
              />
            </div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -left-10 z-20 bg-surface-container-lowest/90 backdrop-blur-md p-8 rounded-xl shadow-xl max-w-[240px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-primary-container p-2 rounded-full">
                  <ICONS.Star className="w-6 h-6 text-primary fill-primary" />
                </div>
                <span className="font-headline text-2xl font-bold text-on-surface">15+</span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Years of teaching excellence across 5 Tunisian high schools.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="font-label text-secondary tracking-[0.2em] uppercase text-xs mb-4 block font-bold text-center lg:text-left">
            Core Strengths
          </span>
          <h2 className="font-headline text-4xl lg:text-5xl text-on-background text-center lg:text-left">
            What I Bring to the Table
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-surface-container-low rounded-xl p-12 flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
            <div className="relative z-10">
              <ICONS.BookOpen className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-headline text-3xl mb-6">Education & Assessment Expertise</h3>
              <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
                Over 15 years designing personalised learning pathways, conducting assessments, 
                and delivering targeted interventions — increasing student engagement by up to 30% 
                and IELTS scores consistently above Band 7.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-bl-full transform translate-x-12 -translate-y-12 transition-transform group-hover:scale-110" />
          </div>
          
          <div className="bg-secondary-container/30 rounded-xl p-10 flex flex-col items-start">
            <div className="bg-surface-container-lowest p-4 rounded-lg mb-8 shadow-sm">
              <ICONS.NotebookPen className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-headline text-2xl mb-4">Profile Screening & Recruitment</h3>
            <p className="text-on-surface-variant">
              Transitioning into recruitment with sharp analytical skills honed through years of 
              assessing learner profiles, conducting structured interviews, and preparing professional documentation.
            </p>
          </div>

          <div className="bg-tertiary-container/30 rounded-xl p-10 flex flex-col items-start">
            <div className="bg-surface-container-lowest p-4 rounded-lg mb-8 shadow-sm">
              <ICONS.Languages className="w-6 h-6 text-tertiary" />
            </div>
            <h3 className="font-headline text-2xl mb-4">Multilingual Communication</h3>
            <p className="text-on-surface-variant">
              Native Arabic (C2), advanced French & English (C1), intermediate German (B1) — 
              bridging communication across cultures with confidence and precision.
            </p>
          </div>

          <div className="md:col-span-2 flex items-center py-12 px-8">
            <div className="w-1.5 h-32 bg-primary-container rounded-full mr-12" />
            <div>
              <p className="font-headline text-3xl italic text-primary leading-snug mb-4">
                "Helping people find their voice — whether in a language, a career, or a new country."
              </p>
              <cite className="font-label text-sm uppercase tracking-widest text-secondary not-italic">
                — Haifa Khelifi
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-container-low py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="aspect-square bg-surface-container-lowest rounded-xl shadow-lg overflow-hidden">
                <img 
                  alt="Teaching environment" 
                  className="w-full h-full object-cover" 
                  src={IMAGES.books}
                />
              </div>
              <div className="p-8 bg-surface-container-lowest rounded-xl shadow-lg">
                <div className="text-primary text-4xl font-headline font-bold mb-2">5</div>
                <div className="text-sm font-label uppercase tracking-wider text-outline">Schools Taught</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-8 bg-primary-container/20 rounded-xl">
                <div className="text-primary text-4xl font-headline font-bold mb-2">6+</div>
                <div className="text-sm font-label uppercase tracking-wider text-outline">Certifications</div>
              </div>
              <div className="aspect-[3/4] bg-surface-container-lowest rounded-xl shadow-lg overflow-hidden">
                <img 
                  alt="Professional development" 
                  className="w-full h-full object-cover" 
                  src={IMAGES.writing}
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <span className="font-label text-secondary tracking-[0.2em] uppercase text-xs mb-4 block font-bold">
              Professional Background
            </span>
            <h2 className="font-headline text-4xl lg:text-5xl text-on-background mb-8 leading-tight">
              15 Years of Academic & Pedagogical Excellence
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              A TEFL Level 5 certified educator with deep expertise in English language instruction, 
              IELTS preparation, and curriculum design. Now leveraging transferable skills — 
              assessment, stakeholder communication, and persuasion — to transition into recruitment consulting.
            </p>
            <ul className="space-y-6">
              {[
                "TEFL Level 5 & IELTS Instructor Certified (iTTi, 2025)",
                "U.S. Certified Instructor in Online Teaching (AIPS, 2024–2029)",
                "Available for immediate relocation to Prague, Czech Republic"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <ICONS.CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-on-surface">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <a 
                href="mailto:haifakhelifi13@gmail.com" 
                className="inline-block border-b-2 border-primary pb-1 text-primary font-bold text-lg hover:opacity-70 transition-opacity"
              >
                Contact Haifa →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}