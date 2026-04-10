/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FilterGroupProps {
  title: string;
  options: string[];
  selectedOptions: string[];
  onChange: (option: string) => void;
  defaultOpen?: boolean;
}

export default function FilterGroup({
  title,
  options,
  selectedOptions,
  onChange,
  defaultOpen = true,
}: FilterGroupProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border-lilac last:border-0 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left group"
      >
        <span className="text-sm font-medium uppercase tracking-wider text-charcoal-deep/60 group-hover:text-charcoal-deep transition-colors">
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-charcoal-deep/40" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-2">
              {options.map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-3 cursor-pointer group"
                >
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(option)}
                      onChange={() => onChange(option)}
                      className="peer appearance-none w-5 h-5 border border-border-lilac rounded-md bg-surface checked:bg-rose-dusty checked:border-rose-dusty transition-all duration-200"
                    />
                    <motion.div
                      initial={false}
                      animate={{ scale: selectedOptions.includes(option) ? 1 : 0 }}
                      className="absolute pointer-events-none"
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={4}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                  </div>
                  <span className="text-sm text-charcoal-deep/80 group-hover:text-charcoal-deep transition-colors">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
