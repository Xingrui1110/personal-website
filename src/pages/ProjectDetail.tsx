/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "motion/react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) {
      navigate("/");
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-bg-sunset"
    >
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-bg-sunset/80 backdrop-blur-md border-b border-border-lilac">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-charcoal-deep/60 hover:text-charcoal-deep transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-semibold text-charcoal-deep/30">
            <span>Portfolio</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-charcoal-deep/60">{project.title}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[80vh] overflow-hidden bg-charcoal-deep">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={project.coverImage}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-12 lg:pb-24 w-full">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="flex flex-wrap gap-3 mb-6">
                {project.visibleTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-widest font-bold bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl lg:text-7xl font-display font-light text-white mb-6">
                {project.title}
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 max-w-3xl font-light leading-relaxed">
                {project.summary}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <main className="max-w-4xl mx-auto px-6 py-20 lg:py-32">
        <div className="space-y-24">
          {project.detailSections.map((section, idx) => (
            <motion.section
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-2xl lg:text-3xl font-display font-medium text-charcoal-deep">
                {section.title}
              </h2>
              <div className="prose prose-lg max-w-none text-charcoal-deep/70 font-light leading-relaxed whitespace-pre-line">
                {section.text}
              </div>
              {section.image && (
                <div className="rounded-2xl overflow-hidden border border-border-lilac shadow-sm">
                  <img
                    src={section.image}
                    alt={section.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto"
                  />
                </div>
              )}
            </motion.section>
          ))}

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <section className="space-y-12">
              <h2 className="text-2xl lg:text-3xl font-display font-medium text-charcoal-deep">
                Gallery
              </h2>
              <div className="grid grid-cols-1 gap-8">
                {project.gallery.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="rounded-2xl overflow-hidden border border-border-lilac shadow-sm bg-white"
                  >
                    <img
                      src={img}
                      alt={`${project.title} gallery ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="block w-full h-auto transition-transform duration-700 hover:scale-[1.01]"
                    />
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="border-t border-border-lilac py-20 bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-charcoal-deep/40 mb-8 uppercase tracking-widest font-medium">
            Ready to see more?
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-2xl lg:text-4xl font-display font-light text-charcoal-deep hover:text-rose-dusty transition-colors group"
          >
            Back to all projects
            <ArrowLeft className="w-8 h-8 rotate-180 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </footer>
    </motion.div>
  );
}
