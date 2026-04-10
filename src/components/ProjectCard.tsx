/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/project/${project.slug}`} className="group block">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="bg-surface border border-border-lilac rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500"
      >
        {/* Thumbnail */}
        <div className="aspect-[4/3] overflow-hidden bg-bg-sunset">
          <img
            src={project.thumbnail}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.visibleTags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-widest font-semibold text-lilac-muted bg-lilac-muted/5 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-lg font-medium text-charcoal-deep mb-2 group-hover:text-rose-dusty transition-colors">
            {project.title}
          </h3>
          
          <p className="text-sm text-charcoal-deep/60 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
