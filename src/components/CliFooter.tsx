import { navigate } from 'gatsby';
import { useCallback, useEffect, useRef, useState } from 'react';

import { careerData } from '../data/career';
import { projects } from '../data/projects';
import { FORMSPREE_URL } from '../utils/config';
import {
  CONTACT_FORM_EVENT,
  CONTACT_OPEN_EVENT,
  MATRIX_EVENT,
} from '../utils/contactEvents';
import { applyTheme, ThemeName } from '../utils/theme';
import { githubLink, linkedInLink } from './PageLayout';

import './CliFooter.scss';

interface HistoryEntry {
  command: string;
  output: string[];
}

type ContactStep = 'name' | 'email' | 'message' | 'confirm';

interface ContactDraft {
  name: string;
  email: string;
  message: string;
}

const ALL_COMMANDS = [
  'help',
  'contact',
  'form',
  'whoami',
  'resume',
  'skills',
  'projects',
  'open',
  'career',
  'uptime',
  'ping',
  'echo',
  'date',
  'theme',
  'matrix',
  'linkedin',
  'github',
  'clear',
  'sudo',
];

const HELP_OUTPUT = [
  '── contact ──',
  '  contact        start conversational contact wizard',
  '  form           open contact form modal',
  '── explore ──',
  '  whoami         about Eric',
  '  resume         download resume.pdf',
  '  skills         skill bar chart',
  '  projects       list project modules',
  '  open <id>      open project deep-dive',
  '  career         condensed career log',
  '  uptime         years since 2013',
  '  linkedin       open LinkedIn',
  '  github         open GitHub',
  '── fun ──',
  '  theme <cyan|green|amber>   swap accent color',
  '  matrix         intensify code rain',
  '  sudo hire_eric easter egg',
  '  ping / echo / date / clear',
];

const SKILLS_OUTPUT = [
  'agentic AI     ██████████ 95%',
  'full-stack     █████████░ 90%',
  'backend/auto   ████████░░ 85%',
  'React/TS       █████████░ 92%',
  'LangChain      ████████░░ 88%',
  'system design  ████████░░ 85%',
];

const CliFooter = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: 'init contact_session',
      output: [
        'channel open — type `help` for commands, `contact` to reach out, or `form` for a classic form.',
      ],
    },
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [tabIndex, setTabIndex] = useState(0);

  const [contactMode, setContactMode] = useState(false);
  const contactModeRef = useRef(false);
  const [contactStep, setContactStep] = useState<ContactStep>('name');
  const contactStepRef = useRef<ContactStep>('name');
  const contactDraftRef = useRef<ContactDraft>({ name: '', email: '', message: '' });

  const syncContactDraft = (draft: ContactDraft) => {
    contactDraftRef.current = draft;
  };

  const syncContactStep = (step: ContactStep) => {
    contactStepRef.current = step;
    setContactStep(step);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const appendOutput = useCallback((command: string, output: string[]) => {
    setHistory((prev) => [...prev, { command, output }]);
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history, contactMode, contactStep]);

  useEffect(() => {
    const onContact = () => startContactWizard();
    window.addEventListener(CONTACT_OPEN_EVENT, onContact);
    return () => window.removeEventListener(CONTACT_OPEN_EVENT, onContact);
  }, []);

  const setContactActive = (active: boolean) => {
    contactModeRef.current = active;
    setContactMode(active);
  };

  const startContactWizard = () => {
    setContactActive(true);
    syncContactStep('name');
    syncContactDraft({ name: '', email: '', message: '' });
    appendOutput('contact', ['starting contact wizard...', 'name:']);
  };

  const submitContact = async (draft: ContactDraft) => {
    appendOutput('send', ['transmitting message...']);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(draft),
      });
      if (res.ok) {
        appendOutput('send', ['✓ message transmitted successfully. I\'ll get back to you soon.']);
      } else {
        appendOutput('send', ['✗ transmission failed — verify Formspree ID in .env']);
      }
    } catch {
      appendOutput('send', ['✗ network error — try the `form` command instead']);
    }
    setContactActive(false);
  };

  const handleContactInput = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    const step = contactStepRef.current;

    if (step === 'name') {
      const draft = { ...contactDraftRef.current, name: trimmed };
      syncContactDraft(draft);
      appendOutput(trimmed, ['email:']);
      syncContactStep('email');
    } else if (step === 'email') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        appendOutput(trimmed, ['invalid email format — try again:', 'email:']);
        return;
      }
      const draft = { ...contactDraftRef.current, email: trimmed };
      syncContactDraft(draft);
      appendOutput(trimmed, ['message:']);
      syncContactStep('message');
    } else if (step === 'message') {
      const draft = { ...contactDraftRef.current, message: trimmed };
      syncContactDraft(draft);
      appendOutput(trimmed, [
        `── preview ──`,
        `  name:    ${draft.name}`,
        `  email:   ${draft.email}`,
        `  message: ${draft.message.slice(0, 80)}${draft.message.length > 80 ? '...' : ''}`,
        'send? [y/n]:',
      ]);
      syncContactStep('confirm');
    } else if (step === 'confirm') {
      const answer = trimmed.toLowerCase();
      if (answer === 'y' || answer === 'yes') {
        submitContact(contactDraftRef.current);
      } else {
        appendOutput(trimmed, ['contact cancelled.']);
        setContactActive(false);
      }
    }
  };

  const runCommand = useCallback(
    (raw: string) => {
      const trimmed = raw.trim();
      if (!trimmed) return;

      if (contactModeRef.current) {
        handleContactInput(trimmed);
        return;
      }

      const parts = trimmed.split(/\s+/);
      const cmd = parts[0].toLowerCase();
      const arg = parts.slice(1).join(' ');

      setCmdHistory((prev) => [...prev.filter((c) => c !== trimmed), trimmed]);
      setHistoryIndex(-1);

      if (cmd === 'clear') {
        setHistory([]);
        return;
      }

      if (cmd === 'contact') {
        startContactWizard();
        return;
      }

      if (cmd === 'form') {
        appendOutput(trimmed, ['opening contact form...']);
        window.dispatchEvent(new CustomEvent(CONTACT_FORM_EVENT));
        return;
      }

      if (cmd === 'help') {
        appendOutput(trimmed, HELP_OUTPUT);
        return;
      }

      if (cmd === 'whoami') {
        appendOutput(trimmed, [
          'Eric Kao — agentic AI engineer & full-stack software engineer',
          'Bay Area · building AI systems that automate real-world workflows',
        ]);
        return;
      }

      if (cmd === 'resume') {
        appendOutput(trimmed, ['opening → /resume.pdf']);
        setTimeout(() => window.open('/resume.pdf', '_blank'), 300);
        return;
      }

      if (cmd === 'skills') {
        appendOutput(trimmed, SKILLS_OUTPUT);
        return;
      }

      if (cmd === 'projects') {
        appendOutput(trimmed, [
          'loaded modules:',
          ...projects.map((p) => `  ${p.id.padEnd(14)} — ${p.name}`),
          'use: open <id>',
        ]);
        return;
      }

      if (cmd === 'open') {
        const project = projects.find((p) => p.id === arg);
        if (!project) {
          appendOutput(trimmed, [`module not found: ${arg}`, 'type `projects` for list']);
          return;
        }
        appendOutput(trimmed, [`navigating → /work?project=${arg}`]);
        setTimeout(() => navigate(`/work?project=${arg}`), 300);
        return;
      }

      if (cmd === 'career') {
        appendOutput(trimmed, [
          'career log:',
          ...careerData.slice(0, 5).map((c) => `  ${c.period}  ${c.position} @ ${c.name}`),
          `  ... +${careerData.length - 5} more — visit /jobs`,
        ]);
        return;
      }

      if (cmd === 'uptime') {
        const years = new Date().getFullYear() - 2013;
        appendOutput(trimmed, [`uptime: ${years}+ years in software engineering`]);
        return;
      }

      if (cmd === 'ping') {
        appendOutput(trimmed, ['PONG ericskao.com — 12ms']);
        return;
      }

      if (cmd === 'echo') {
        appendOutput(trimmed, [arg || '']);
        return;
      }

      if (cmd === 'date') {
        appendOutput(trimmed, [new Date().toString()]);
        return;
      }

      if (cmd === 'theme') {
        const theme = arg as ThemeName;
        if (!theme || !['cyan', 'green', 'amber'].includes(theme)) {
          appendOutput(trimmed, ['usage: theme <cyan|green|amber>']);
          return;
        }
        applyTheme(theme);
        appendOutput(trimmed, [`theme switched → ${theme}`]);
        return;
      }

      if (cmd === 'matrix') {
        appendOutput(trimmed, ['entering matrix mode for 8 seconds...']);
        window.dispatchEvent(new CustomEvent(MATRIX_EVENT));
        return;
      }

      if (cmd === 'linkedin') {
        appendOutput(trimmed, [`opening → ${linkedInLink}`]);
        setTimeout(() => window.open(linkedInLink, '_blank'), 300);
        return;
      }

      if (cmd === 'github') {
        appendOutput(trimmed, [`opening → ${githubLink}`]);
        setTimeout(() => window.open(githubLink, '_blank'), 300);
        return;
      }

      if (cmd === 'sudo' && arg === 'hire_eric') {
        appendOutput(trimmed, [
          'permission granted ✓',
          'opening contact wizard...',
        ]);
        setTimeout(() => startContactWizard(), 500);
        return;
      }

      appendOutput(trimmed, [
        `command not found: ${cmd}`,
        'type `help` for available commands',
      ]);
    },
    [appendOutput]
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(input);
    setInput('');
    setTabIndex(0);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (contactMode && e.key === 'Escape') {
      appendOutput('^C', ['contact wizard aborted.']);
      setContactActive(false);
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const newIndex =
        historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(cmdHistory[newIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const newIndex = historyIndex + 1;
      if (newIndex >= cmdHistory.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (contactMode) return;
      const q = input.toLowerCase();
      const matches = ALL_COMMANDS.filter((c) => c.startsWith(q));
      if (matches.length > 0) {
        const next = matches[tabIndex % matches.length];
        setInput(next);
        setTabIndex((i) => i + 1);
      }
    }
  };

  const promptLabel = contactMode
    ? contactStep === 'name'
      ? 'name:'
      : contactStep === 'email'
        ? 'email:'
        : contactStep === 'message'
          ? 'message:'
          : 'send? [y/n]:'
    : 'eric@kao-dev ~ %';

  return (
    <footer className="cli" onClick={() => inputRef.current?.focus()}>
      <div className="cli__chrome">
        <span className="cli__chrome-title">contact — interactive session</span>
        <span className="cli__chrome-status">● LIVE</span>
      </div>
      <div className="cli__body" ref={bodyRef}>
        {history.map((entry, index) => (
          <div key={index}>
            <div className="cli__line cli__line--cmd">
              <span className="cli__prompt">{promptLabel}</span> {entry.command}
            </div>
            {entry.output.map((line, lineIndex) => (
              <div className="cli__line" key={lineIndex}>
                {line}
              </div>
            ))}
          </div>
        ))}
        <form className="cli__input-row" onSubmit={onSubmit}>
          <span className="cli__prompt">{promptLabel}</span>
          <input
            ref={inputRef}
            className="cli__input"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setTabIndex(0);
            }}
            onKeyDown={onKeyDown}
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal command input"
            placeholder={contactMode ? 'type your response...' : 'type `contact` or `help`...'}
          />
        </form>
      </div>
      <div className="cli__shortcuts">
        <button className="cli__shortcut" onClick={() => runCommand('contact')}>
          $ contact
        </button>
        <button className="cli__shortcut" onClick={() => runCommand('form')}>
          $ form
        </button>
        <button className="cli__shortcut" onClick={() => runCommand('help')}>
          $ help
        </button>
        <button className="cli__shortcut" onClick={() => runCommand('projects')}>
          $ projects
        </button>
        <button
          className="cli__shortcut cli__shortcut--muted"
          onClick={() => window.dispatchEvent(new CustomEvent(CONTACT_FORM_EVENT))}
        >
          [ prefer a form? ]
        </button>
      </div>
    </footer>
  );
};

export default CliFooter;
