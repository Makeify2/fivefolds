# FiveFolds

Portfolio site for FiveFolds, two developers working remotely together: makeify and yuk1n0w.

Built with Vite, React and plain CSS.

```sh
npm install
npm run dev      # local dev server
npm run build    # static output in dist/
npm run preview  # serve the built output
```

- `index.html` — document shell, fonts and meta tags
- `src/App.jsx` — page markup
- `src/styles.css` — styles
- `src/hooks/useSmoothScroll.js` — Lenis smooth scrolling wired into GSAP
- `src/components/` — React Bits components (SplitText, AnimatedContent)

## Animation stack

- **GSAP** — hero mark entrance, scroll parallax, plugin registration for SplitText/ScrollTrigger
- **Lenis** — inertial page scrolling, synced to GSAP's ticker and ScrollTrigger
- **React Bits** — vendored components, plain-JS/CSS flavor. Add more with:

```sh
npx jsrepo@latest add https://reactbits.dev/r/SplitText-JS-CSS
```

All motion is skipped when the visitor prefers reduced motion.

Projects: [Mochi](https://git.yuk1n0w.dev/yuk1n0w/Mochi), [Ancord](https://git.yuk1n0w.dev/yuk1n0w/Ancord), GoFiveChat.
