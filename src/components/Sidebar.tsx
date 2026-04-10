/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search as SearchIcon, X } from "lucide-react";
import FilterGroup from "./FilterGroup";
import { FOCUS_OPTIONS, OUTPUT_OPTIONS, METHOD_OPTIONS } from "../data/projects";
import { motion } from "motion/react";

interface SidebarProps {
  search: string;
  onSearchChange: (val: string) => void;
  selectedFocus: string[];
  onFocusChange: (val: string) => void;
  selectedOutput: string[];
  onOutputChange: (val: string) => void;
  selectedMethod: string[];
  onMethodChange: (val: string) => void;
  onClearFilters: () => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export default function Sidebar({
  search,
  onSearchChange,
  selectedFocus,
  onFocusChange,
  selectedOutput,
  onOutputChange,
  selectedMethod,
  onMethodChange,
  onClearFilters,
  isMobileOpen,
  onCloseMobile,
}: SidebarProps) {
  const hasFilters =
    search !== "" ||
    selectedFocus.length > 0 ||
    selectedOutput.length > 0 ||
    selectedMethod.length > 0;

  const content = (
    <div className="flex flex-col h-full bg-surface/50 backdrop-blur-sm border border-border-lilac rounded-2xl p-6 shadow-sm overflow-y-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-display font-medium text-charcoal-deep">Filters</h2>
        {hasFilters && (
          <button
            onClick={onClearFilters}
            className="text-xs font-medium text-rose-dusty hover:text-rose-dusty/80 transition-colors uppercase tracking-widest"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Search Section */}
      <div className="mb-8">
        <div className="text-xs font-medium uppercase tracking-wider text-charcoal-deep/60 mb-3">
          Search
        </div>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-deep/30" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Project, topic, or method..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-border-lilac rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-dusty/20 focus:border-rose-dusty/50 transition-all placeholder:text-charcoal-deep/20"
          />
        </div>
      </div>

      {/* Filter Groups */}
      <div className="space-y-2">
        <FilterGroup
          title="Focus"
          options={FOCUS_OPTIONS}
          selectedOptions={selectedFocus}
          onChange={onFocusChange}
        />
        <FilterGroup
          title="Output"
          options={OUTPUT_OPTIONS}
          selectedOptions={selectedOutput}
          onChange={onOutputChange}
        />
        <FilterGroup
          title="Method"
          options={METHOD_OPTIONS}
          selectedOptions={selectedMethod}
          onChange={onMethodChange}
        />
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-80 sticky top-8 h-[calc(100vh-4rem)]">
        {content}
      </aside>

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-charcoal-deep/20 backdrop-blur-sm" onClick={onCloseMobile} />
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: isMobileOpen ? 0 : "-100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-bg-sunset p-4"
        >
          <div className="flex justify-end mb-4">
            <button onClick={onCloseMobile} className="p-2 text-charcoal-deep/40">
              <X className="w-6 h-6" />
            </button>
          </div>
          {content}
        </motion.div>
      </div>
    </>
  );
}
