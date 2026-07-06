export type ThemeName = 'cyan' | 'green' | 'amber';

export const THEMES: Record<ThemeName, { accent: string; glow: string; label: string }> = {
  cyan: { accent: '#00e5ff', glow: 'rgba(0, 229, 255, 0.12)', label: 'electric cyan' },
  green: { accent: '#00ff9c', glow: 'rgba(0, 255, 156, 0.12)', label: 'matrix green' },
  amber: { accent: '#ffb020', glow: 'rgba(255, 176, 32, 0.12)', label: 'amber' },
};

const STORAGE_KEY = 'kao-dev-theme';

export const applyTheme = (theme: ThemeName) => {
  if (typeof document === 'undefined') return;
  document.body.setAttribute('data-theme', theme);
  const { accent, glow } = THEMES[theme];
  document.documentElement.style.setProperty('--accent', accent);
  document.documentElement.style.setProperty('--accent-glow', glow);
  document.documentElement.style.setProperty('--accent-light', `${accent}59`);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent('themechange', { detail: theme }));
};

export const loadTheme = (): ThemeName => {
  if (typeof window === 'undefined') return 'cyan';
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeName | null;
    if (stored && THEMES[stored]) return stored;
  } catch {
    /* ignore */
  }
  return 'cyan';
};

export const initTheme = () => {
  applyTheme(loadTheme());
};
