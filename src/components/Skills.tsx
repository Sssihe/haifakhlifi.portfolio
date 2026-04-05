import { motion } from 'motion/react';
import { ICONS, IMAGES } from '../constants';

export default function Skills() {
  return (
    <div className="space-y-32 pb-32">
      {/* Skills Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <span className="font-label text-secondary tracking-[0.2em] uppercase text-xs mb-4 block">Skills & Expertise</span>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight text-on-surface mb-8">
            Tools, <span className="italic text-primary">skills</span> & strengths
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed font-body max-w-xl">
            A versatile professional profile combining pedagogical expertise, digital proficiency, 
            and high-level interpersonal skills — all transferable to recruitment and talent consulting.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 relative"
        >
          <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-high relative z-10">
            <img 
              className="w-full h-full object-cover" 
              src={IMAGES.skillsPen}
              alt="Professional skills"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl -z-10" />
        </motion.div>
      </section>

      {/* Competencies Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Core Skills */}
          <div className="space-y-12">
            <h2 className="text-4xl font-bold mb-10">Core Competencies</h2>
            {[
              { label: "IELTS Preparation", level: "Expert Level", width: "95%", desc: "15+ years preparing students for Academic and General Training IELTS — consistent Band 7+ results." },
              { label: "Curriculum & Assessment Design", level: "Advanced", width: "92%", desc: "Data-driven lesson planning, progress reports, and personalised learning pathways for diverse learners." },
              { label: "Recruitment & Profile Screening", level: "In Transition", width: "70%", desc: "Applying assessment and communication skills to candidate sourcing, screening, and stakeholder management." },
              { label: "Digital Tools & Platforms", level: "Advanced", width: "88%", desc: "MS Office, Google Workspace, Power BI, Google Classroom, Kahoot, Padlet, video editing tools." }
            ].map((skill, i) => (
              <div key={i} className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="font-label font-bold text-on-surface uppercase tracking-wider">{skill.label}</span>
                  <span className="font-headline italic text-primary">{skill.level}</span>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                    className="h-full bg-primary rounded-full" 
                  />
                </div>
                <p className="text-sm text-on-surface-variant font-body">{skill.desc}</p>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="grid grid-cols-1 gap-6">
            <h2 className="text-4xl font-bold mb-4">Human-Centred Skills</h2>
            {[
              { 
                icon: ICONS.MessageSquare, 
                title: "Persuasion & Negotiation", 
                desc: "Proven ability to engage, influence, and align diverse stakeholders — from school management to student families — through clear, empathetic communication.", 
                color: "bg-secondary-container text-on-secondary-container" 
              },
              { 
                icon: ICONS.BrainCircuit, 
                title: "Adaptability & Cross-Cultural Intelligence", 
                desc: "Thrives in multicultural environments. Multilingual, flexible, and proactive — comfortable pivoting methods and contexts rapidly.", 
                color: "bg-primary-container text-on-primary-container" 
              },
              { 
                icon: ICONS.Briefcase, 
                title: "Relationship Building & Client Orientation", 
                desc: "Builds trust with individuals from all backgrounds. Excellent at nurturing long-term professional and personal relationships.", 
                color: "bg-tertiary-container text-on-tertiary-container" 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_20px_50px_rgba(123,85,86,0.03)] flex flex-col justify-center"
              >
                <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mb-6`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-on-surface-variant font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Skills Badges */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="font-label text-sm uppercase tracking-[0.2em] text-secondary mb-4 block">Digital Proficiency</span>
            <h2 className="text-4xl font-headline font-bold text-on-background">Tools & Technologies</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "Microsoft Office Suite", level: "Advanced" },
              { name: "Google Workspace", level: "Advanced" },
              { name: "Power BI (PL-300)", level: "Intermediate" },
              { name: "Google Classroom", level: "Advanced" },
              { name: "Kahoot & Padlet", level: "Advanced" },
              { name: "Video Editing", level: "Intermediate" },
              { name: "Graphic Design", level: "Intermediate" },
              { name: "Data Visualisation", level: "Intermediate" },
            ].map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-surface-container-lowest px-6 py-4 rounded-full border border-outline-variant/20 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <span className="font-label text-sm font-bold text-on-surface">{tool.name}</span>
                <span className="ml-3 text-xs text-secondary font-label uppercase tracking-wider">{tool.level}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-secondary-container/30 -z-10" />
        <div className="absolute -top-64 -right-64 w-[800px] h-[800px] bg-secondary-container/40 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold leading-tight mb-8">
              Let's start a <span className="italic text-secondary">conversation</span>.
            </h2>
            <p className="text-lg text-on-secondary-container font-body leading-relaxed mb-12 max-w-md">
              Whether you're looking for an experienced educator, a motivated trainee recruiter, 
              or a multilingual professional for your team — I'd love to connect.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                  <ICONS.Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Email</span>
                  <a href="mailto:haifakhelifi13@gmail.com" className="text-xl font-headline font-bold hover:text-primary transition-colors">
                    haifakhelifi13@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                  <ICONS.Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Phone</span>
                  <a href="tel:+21620965021" className="text-xl font-headline font-bold hover:text-primary transition-colors">
                    +216 20 965 021
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                  <ICONS.MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Location</span>
                  <span className="text-xl font-headline font-bold">Gabès, Tunisia → Prague, CZ</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-surface-container-lowest p-12 rounded-xl shadow-[0_40px_80px_rgba(90,94,115,0.08)]"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-2">Full Name</label>
                <input 
                  className="w-full bg-surface-container-highest border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-primary-container transition-all outline-none font-body" 
                  placeholder="Your name" 
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-2">Email Address</label>
                <input 
                  className="w-full bg-surface-container-highest border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-primary-container transition-all outline-none font-body" 
                  placeholder="email@example.com" 
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-2">Your Message</label>
                <textarea 
                  className="w-full bg-surface-container-highest border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-primary-container transition-all outline-none font-body resize-none" 
                  placeholder="How can I help you?" 
                  rows={5}
                />
              </div>
              <button className="w-full bg-gradient-to-r from-primary to-primary-dim text-on-primary py-5 rounded-full font-label font-bold text-sm tracking-[0.2em] uppercase hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}