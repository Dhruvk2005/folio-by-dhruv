## Dhruv Portfolio

Modern portfolio built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**, featuring motion-heavy UI and WebGL effects (Three.js / React Three Fiber).

### Tech stack
- **Framework**: Next.js
- **UI**: React + Tailwind CSS
- **Animation**: Framer Motion
- **WebGL**: Three.js + `@react-three/fiber` + `@react-three/drei`

### Getting started
Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

### Notes / improvements
- Replace `metadataBase` in `app/layout.tsx` with your real domain (Vercel/custom domain) for correct OpenGraph/Twitter URLs.
- Keep images in `/public` and prefer Next `Image` for best performance.

