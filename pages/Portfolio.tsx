/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { projects } from "../data/projects";
import Sidebar from "../components/Sidebar";
import ProjectCard from "../components/ProjectCard";
import ProfileSection from "../components/ProfileSection";
import { motion, AnimatePresence } from "motion/react";
import { Filter } from "lucide-react";

export default function Portfolio() {
  const [search, setSearch] = useState("");
  const [selectedFocus, setSelectedFocus] = useState<string[]>([]);
  const [selectedOutput, setSelectedOutput] = useState<string[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<string[]>([]);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleFilter = (list: string[], setList: (val: string[]) => void, option: string) => {
    if (list.includes(option)) {
      setList(list.filter((i) => i !== option));
    } else {
      setList([...list, option]);
    }
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedFocus([]);
    setSelectedOutput([]);
    setSelectedMethod([]);
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Search matching
      const searchLower = search.toLowerCase();
      const matchesSearch =
        search === "" ||
        project.title.toLowerCase().includes(searchLower) ||
        project.summary.toLowerCase().includes(searchLower) ||
        project.keywords.some((k) => k.toLowerCase().includes(searchLower)) ||
        project.visibleTags.some((t) => t.toLowerCase().includes(searchLower));

      if (!matchesSearch) return false;

      // Filter matching: OR within group, AND across groups
      const matchesFocus =
        selectedFocus.length === 0 || project.focus.some((f) => selectedFocus.includes(f));
      const matchesOutput =
        selectedOutput.length === 0 || project.output.some((o) => selectedOutput.includes(o));
      const matchesMethod =
        selectedMethod.length === 0 || project.method.some((m) => selectedMethod.includes(m));

      return matchesFocus && matchesOutput && matchesMethod;
    });
  }, [search, selectedFocus, selectedOutput, selectedMethod]);

  return (
    <div className="min-h-screen max-w-[1600px] mx-auto px-6 py-8 lg:py-12">
      <ProfileSection />

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Mobile Filter Trigger */}
        <button
          onClick={() => setIsMobileSidebarOpen(true)}
          className="lg:hidden flex items-center justify-center gap-2 w-full py-4 bg-surface border border-border-lilac rounded-2xl text-sm font-medium text-charcoal-deep shadow-sm"
        >
          <Filter className="w-4 h-4" />
          Filter Projects
        </button>

        <Sidebar
          search={search}
          onSearchChange={setSearch}
          selectedFocus={selectedFocus}
          onFocusChange={(opt) => toggleFilter(selectedFocus, setSelectedFocus, opt)}
          selectedOutput={selectedOutput}
          onOutputChange={(opt) => toggleFilter(selectedOutput, setSelectedOutput, opt)}
          selectedMethod={selectedMethod}
          onMethodChange={(opt) => toggleFilter(selectedMethod, setSelectedMethod, opt)}
          onClearFilters={clearFilters}
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        <main className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-charcoal-deep/30">
              Projects
            </h3>
            <span className="text-sm font-medium text-charcoal-deep/40 uppercase tracking-widest">
              {filteredProjects.length} {filteredProjects.length === 1 ? "Project" : "Projects"}
            </span>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <p className="text-lg text-charcoal-deep/40 font-light">
                No projects found matching your selection.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 text-rose-dusty font-medium hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}
