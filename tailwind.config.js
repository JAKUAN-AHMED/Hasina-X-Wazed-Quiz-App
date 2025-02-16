/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius, 0.5rem)",
        md: "calc(var(--radius, 0.5rem) - 2px)",
        sm: "calc(var(--radius, 0.5rem) - 4px)",
      },
      colors: {
        background: "hsl(var(--background, 0, 0%, 100%))",
        foreground: "hsl(var(--foreground, 222.2, 84%, 4.9%))",
        card: {
          DEFAULT: "hsl(var(--card, 0, 0%, 100%))",
          foreground: "hsl(var(--card-foreground, 222.2, 84%, 4.9%))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover, 0, 0%, 100%))",
          foreground: "hsl(var(--popover-foreground, 222.2, 84%, 4.9%))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary, 240, 100%, 50%))",
          foreground: "hsl(var(--primary-foreground, 0, 0%, 100%))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary, 240, 50%, 60%))",
          foreground: "hsl(var(--secondary-foreground, 0, 0%, 100%))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted, 210, 40%, 96%))",
          foreground: "hsl(var(--muted-foreground, 215.4, 16.3%, 46.9%))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent, 210, 40%, 96%))",
          foreground: "hsl(var(--accent-foreground, 215.4, 16.3%, 46.9%))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive, 0, 84%, 60%))",
          foreground: "hsl(var(--destructive-foreground, 0, 0%, 100%))",
        },
        border: "hsl(var(--border, 240, 5%, 84%))",
        input: "hsl(var(--input, 240, 5%, 84%))",
        ring: "hsl(var(--ring, 240, 100%, 50%))",
        chart: {
          1: "hsl(var(--chart-1, 0, 100%, 50%))",
          2: "hsl(var(--chart-2, 30, 100%, 50%))",
          3: "hsl(var(--chart-3, 60, 100%, 50%))",
          4: "hsl(var(--chart-4, 120, 100%, 50%))",
          5: "hsl(var(--chart-5, 180, 100%, 50%))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
