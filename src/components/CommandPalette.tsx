import { motion, AnimatePresence } from 'framer-motion';
import { navigate } from 'gatsby';
import { useEffect, useMemo, useRef, useState } from 'react';

import { projects } from '../data/projects';
import { githubLink, linkedInLink } from './PageLayout';
import { applyTheme, ThemeName } from '../utils/theme';

import './CommandPalette.scss';

interface PaletteAction {
  id: string;
  label: string;
  section: string;
  keywords?: string;
  run: () => void;
}

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const actions: PaletteAction[] = useMemo(
    () => [
      { id: 'home', label: 'Go to Home', section: 'Navigate', run: () => navigate('/') },
      { id: 'about', label: 'Go to About', section: 'Navigate', run: () => navigate('/about') },
      { id: 'career', label: 'Go to Career', section: 'Navigate', run: () => navigate('/jobs') },
      { id: 'work', label: 'Go to Work', section: 'Navigate', run: () => navigate('/work') },
      ...projects.map((p) => ({
        id: `project-${p.id}`,
        label: `Open ${p.name}`,
        section: 'Projects',
        keywords: p.stack.join(' '),
        run: () => navigate(`/work?project=${p.id}`),
      })),
      {
        id: 'contact',
        label: 'Start contact wizard',
        section: 'Contact',
        run: () => {
          setOpen(false);
          window.dispatchEvent(new CustomEvent('kao-dev:open-contact'));
        },
      },
      {
        id: 'form',
        label: 'Open contact form',
        section: 'Contact',
        run: () => {
          setOpen(false);
          window.dispatchEvent(new CustomEvent('kao-dev:open-contact-form'));
        },
      },
      {
        id: 'resume',
        label: 'Download resume',
        section: 'Contact',
        run: () => window.open('/resume.pdf', '_blank'),
      },
      {
        id: 'linkedin',
        label: 'Open LinkedIn',
        section: 'Social',
        run: () => window.open(linkedInLink, '_blank'),
      },
      {
        id: 'github',
        label: 'Open GitHub',
        section: 'Social',
        run: () => window.open(githubLink, '_blank'),
      },
      ...(['cyan', 'green', 'amber'] as ThemeName[]).map((theme) => ({
        id: `theme-${theme}`,
        label: `Theme: ${theme}`,
        section: 'Theme',
        run: () => applyTheme(theme),
      })),
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return actions;
    return actions.filter(
      (a) =>
        a.label.toLowerCase().includes(q) ||
        a.section.toLowerCase().includes(q) ||
        a.keywords?.toLowerCase().includes(q)
    );
  }, [actions, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
        setQuery('');
        setActiveIndex(0);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const runActive = () => {
    const action = filtered[activeIndex];
    if (action) {
      action.run();
      setOpen(false);
      setQuery('');
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      runActive();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="cmdk__overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="cmdk"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className="cmdk__header">
              <span className="cmdk__prompt">➜</span>
              <input
                ref={inputRef}
                className="cmdk__input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="search commands..."
                spellCheck={false}
              />
              <kbd className="cmdk__kbd">esc</kbd>
            </div>
            <ul className="cmdk__list">
              {filtered.length === 0 && (
                <li className="cmdk__empty">no commands found</li>
              )}
              {filtered.map((action, index) => (
                <li
                  key={action.id}
                  className={`cmdk__item ${index === activeIndex ? 'cmdk__item--active' : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => {
                    action.run();
                    setOpen(false);
                    setQuery('');
                  }}
                >
                  <span className="cmdk__item-label">{action.label}</span>
                  <span className="cmdk__item-section">{action.section}</span>
                </li>
              ))}
            </ul>
            <div className="cmdk__footer">
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span>⌘K toggle</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
