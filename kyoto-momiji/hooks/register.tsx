import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// Kyoto Momiji: Autumn in Kyoto: maple-red accents, temple eaves and falling leaves.
const { theme, problems } = makeColors({
  label: 'Kyoto Momiji',
  roles: { 'accent': '#b8372a', 'danger': '#a8232a', 'success': '#5a7a35', 'warning': '#b36a12', 'pro': '#7a4a7e' },
  light: {
    gray: {
      anchors: {
        'surface-0': '#f3e4d2',
        'surface-1': '#f8ecdd',
        'surface-2': '#fcf4e9',
        'text-primary': '#33201a',
        'text-secondary': '#5e4437',
        'text-muted': '#705548',
      },
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#1e1411',
        'surface-1': '#281b17',
        'surface-2': '#32231d',
        'surface-3': '#32231d',
        'text-primary': '#f6e6d4',
        'text-secondary': '#d9c1a8',
        'text-muted': '#b69c84',
      },
    },
  },
})

const SCENE = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1600 900\" preserveAspectRatio=\"xMidYMid slice\"><style>@keyframes fall{from{transform:translate(0,-80px) rotate(0deg)}to{transform:translate(160px,1000px) rotate(540deg)}}\n@keyframes sway{0%,100%{transform:translateX(0)}50%{transform:translateX(30px)}}\n.f{animation:fall linear infinite;transform-box:fill-box;transform-origin:center}</style><defs><linearGradient id=\"s\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#f7d9a8\"/><stop offset=\"0.6\" stop-color=\"#f1b57b\"/><stop offset=\"1\" stop-color=\"#d9784a\"/></linearGradient></defs>\n<rect width=\"1600\" height=\"900\" fill=\"url(#s)\"/>\n<circle cx=\"1240\" cy=\"220\" r=\"110\" fill=\"#fff0d0\" opacity=\"0.6\"/>\n<path d=\"M0 560L220 400L400 520L640 330L880 520L1120 380L1360 520L1600 420V900H0Z\" fill=\"#b8613f\" opacity=\"0.45\"/>\n<path d=\"M0 680L260 540L500 650L760 500L1020 650L1300 540L1600 660V900H0Z\" fill=\"#8f3d2c\" opacity=\"0.55\"/>\n<path d=\"M0 800L300 720L640 790L980 710L1300 790L1600 730V900H0Z\" fill=\"#5e2a22\" opacity=\"0.7\"/>\n<g transform=\"translate(640 336) scale(0.5)\"><rect x=\"-70\"  y=\"0\" width=\"140\" height=\"14\" fill=\"#7a2418\"/><rect x=\"-60\" y=\"-24\" width=\"120\" height=\"24\" fill=\"#c8321f\"/><path d=\"M-90 -24L0 -60L90 -24Z\" fill=\"#7a2418\"/></g>\n<g transform=\"translate(416,0) scale(1.51)\"><path class=\"f\" style=\"animation-duration:19.0s;animation-delay:-22.2s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#c8321f\" opacity=\"0.9\"/></g><g transform=\"translate(62,0) scale(0.93)\"><path class=\"f\" style=\"animation-duration:19.6s;animation-delay:-12.6s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#e0652a\" opacity=\"0.9\"/></g><g transform=\"translate(863,0) scale(0.79)\"><path class=\"f\" style=\"animation-duration:17.7s;animation-delay:-12.3s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#f09a2c\" opacity=\"0.9\"/></g><g transform=\"translate(324,0) scale(1.65)\"><path class=\"f\" style=\"animation-duration:23.2s;animation-delay:-22.7s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#a8241c\" opacity=\"0.9\"/></g><g transform=\"translate(80,0) scale(0.94)\"><path class=\"f\" style=\"animation-duration:19.2s;animation-delay:-17.7s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#c8321f\" opacity=\"0.9\"/></g><g transform=\"translate(1090,0) scale(1.57)\"><path class=\"f\" style=\"animation-duration:15.4s;animation-delay:-14.9s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#e0652a\" opacity=\"0.9\"/></g><g transform=\"translate(278,0) scale(0.92)\"><path class=\"f\" style=\"animation-duration:18.5s;animation-delay:-9.7s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#f09a2c\" opacity=\"0.9\"/></g><g transform=\"translate(1367,0) scale(1.49)\"><path class=\"f\" style=\"animation-duration:14.2s;animation-delay:-11.6s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#a8241c\" opacity=\"0.9\"/></g><g transform=\"translate(213,0) scale(1.07)\"><path class=\"f\" style=\"animation-duration:14.8s;animation-delay:-21.9s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#c8321f\" opacity=\"0.9\"/></g><g transform=\"translate(1377,0) scale(1.01)\"><path class=\"f\" style=\"animation-duration:21.4s;animation-delay:-12.1s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#e0652a\" opacity=\"0.9\"/></g><g transform=\"translate(1453,0) scale(1.05)\"><path class=\"f\" style=\"animation-duration:20.8s;animation-delay:-18.4s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#f09a2c\" opacity=\"0.9\"/></g><g transform=\"translate(1475,0) scale(0.81)\"><path class=\"f\" style=\"animation-duration:15.7s;animation-delay:-16.6s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#a8241c\" opacity=\"0.9\"/></g><g transform=\"translate(743,0) scale(0.82)\"><path class=\"f\" style=\"animation-duration:22.4s;animation-delay:-14.6s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#c8321f\" opacity=\"0.9\"/></g><g transform=\"translate(1564,0) scale(0.83)\"><path class=\"f\" style=\"animation-duration:16.8s;animation-delay:-16.7s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#e0652a\" opacity=\"0.9\"/></g><g transform=\"translate(471,0) scale(1.62)\"><path class=\"f\" style=\"animation-duration:20.1s;animation-delay:-20.2s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#f09a2c\" opacity=\"0.9\"/></g><g transform=\"translate(1008,0) scale(1.63)\"><path class=\"f\" style=\"animation-duration:13.5s;animation-delay:-22.4s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#a8241c\" opacity=\"0.9\"/></g><g transform=\"translate(433,0) scale(1.13)\"><path class=\"f\" style=\"animation-duration:19.4s;animation-delay:-19.0s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#c8321f\" opacity=\"0.9\"/></g><g transform=\"translate(650,0) scale(0.75)\"><path class=\"f\" style=\"animation-duration:23.3s;animation-delay:-7.1s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#e0652a\" opacity=\"0.9\"/></g><g transform=\"translate(1299,0) scale(1.58)\"><path class=\"f\" style=\"animation-duration:19.7s;animation-delay:-10.9s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#f09a2c\" opacity=\"0.9\"/></g><g transform=\"translate(529,0) scale(1.16)\"><path class=\"f\" style=\"animation-duration:16.5s;animation-delay:-10.2s\" d=\"M0 -20L5 -9L16 -14L11 -2L22 2L10 8L14 20L2 14L0 26L-2 14L-14 20L-10 8L-22 2L-11 -2L-16 -14L-5 -9Z\" fill=\"#a8241c\" opacity=\"0.9\"/></g></svg>"

const LOOK: ThemeSetArgs = { colors: theme, backdrop: { scene: 'kyoto-momiji', glass: { blur: 10, opacity: 0.6 } } }

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })

  // The animated scene behind the chat (desktop and mobile apps only).
  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if (e.surface !== 'desktop' && e.surface !== 'mobile') {
      return next(e)
    }

    const { Svg } = $.ui.resolve(e)

    return <Svg source={SCENE} alt="Maple leaves falling over Kyoto hills" isInteractive />
  })
}
