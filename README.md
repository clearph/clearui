# ClearUI

A clean, minimal component system built with React and Tailwind CSS. Dark by default. Glass-finish surfaces. Zero runtime dependencies.

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project structure

```
src/
  components/
    FeatureCard.tsx   # Light-surface info card
    GlowOrb.tsx       # Decorative radial gradient blob
    TerminalWindow.tsx # macOS-style code/terminal panel
    Toggle.tsx        # Animated on/off toggle switch
  App.tsx             # Main demo page
  main.tsx            # React entry point
  index.css           # Tailwind directives
index.html
tailwind.config.js
vite.config.ts
```

## Stack

- [Vite](https://vitejs.dev/) — build tool
- [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS v3](https://tailwindcss.com/) — utility-first styling
