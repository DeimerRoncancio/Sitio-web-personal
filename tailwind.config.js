/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '30rem',
        '2xs': '380px',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      /* Theme tokens exposed to Tailwind so components stop hardcoding hex values.
         Every one of these flips automatically under `html.light`. */
      colors: {
        surface: 'var(--theme-surface)',
        'surface-soft': 'var(--theme-surface-soft)',
        'surface-muted': 'var(--theme-surface-muted)',
        line: 'var(--theme-border)',
        'line-strong': 'var(--theme-border-strong)',
        ink: 'var(--theme-text)',
        'ink-soft': 'var(--theme-text-soft)',
        'ink-muted': 'var(--theme-text-muted)',
        accent: 'var(--theme-accent)',
        'accent-bright': 'var(--theme-accent-bright)',
        'accent-soft': 'var(--theme-accent-soft)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        'elev-1': 'var(--elev-1)',
        'elev-2': 'var(--elev-2)',
        'elev-3': 'var(--elev-3)',
      },
    },
  },
  plugins: [],
}
