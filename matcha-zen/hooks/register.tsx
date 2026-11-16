import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// Matcha Zen: A quiet zen garden: matcha green, bamboo and ripples on still water.
const { theme, problems } = makeColors({
  label: 'Matcha Zen',
  roles: { 'accent': '#4f7a3a', 'danger': '#a8392f', 'success': '#3f7a4a', 'warning': '#a8741a', 'pro': '#6a5a8c' },
  light: {
    gray: {
      anchors: {
        'surface-0': '#e4ead6',
        'surface-1': '#edf2e2',
        'surface-2': '#f5f8ee',
        'text-primary': '#25301f',
        'text-secondary': '#4a5a40',
        'text-muted': '#5a6a50',
      },
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#151b13',
        'surface-1': '#1d251a',
        'surface-2': '#252e21',
        'surface-3': '#252e21',
        'text-primary': '#e8f0dc',
        'text-secondary': '#c3d0b2',
        'text-muted': '#9cab8a',
      },
    },
  },
})

const SCENE = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1600 900\" preserveAspectRatio=\"xMidYMid slice\"><style>@keyframes rip{from{transform:scale(.2);opacity:.6}to{transform:scale(1.6);opacity:0}}\n@keyframes mist{0%,100%{transform:translateX(-40px)}50%{transform:translateX(60px)}}\n.rp{fill:none;stroke:#fff;stroke-width:3;transform-box:fill-box;transform-origin:center;animation:rip 7s ease-out infinite}\n.m{animation:mist ease-in-out infinite}</style><defs><linearGradient id=\"s\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#eef3dc\"/><stop offset=\"0.65\" stop-color=\"#cfdcb4\"/><stop offset=\"1\" stop-color=\"#a5bd86\"/></linearGradient></defs>\n<rect width=\"1600\" height=\"900\" fill=\"url(#s)\"/>\n<circle cx=\"800\" cy=\"170\" r=\"70\" fill=\"#fffdf0\" opacity=\"0.8\"/>\n<ellipse class=\"m\" style=\"animation-duration:40s;animation-delay:0s\" cx=\"200\" cy=\"520\" rx=\"260\" ry=\"40\" fill=\"#f4f8ec\" opacity=\"0.35\"/><ellipse class=\"m\" style=\"animation-duration:52s;animation-delay:-9s\" cx=\"500\" cy=\"560\" rx=\"280\" ry=\"40\" fill=\"#f4f8ec\" opacity=\"0.35\"/><ellipse class=\"m\" style=\"animation-duration:64s;animation-delay:-18s\" cx=\"800\" cy=\"600\" rx=\"300\" ry=\"40\" fill=\"#f4f8ec\" opacity=\"0.35\"/><ellipse class=\"m\" style=\"animation-duration:76s;animation-delay:-27s\" cx=\"1100\" cy=\"640\" rx=\"320\" ry=\"40\" fill=\"#f4f8ec\" opacity=\"0.35\"/><ellipse class=\"m\" style=\"animation-duration:88s;animation-delay:-36s\" cx=\"1400\" cy=\"680\" rx=\"340\" ry=\"40\" fill=\"#f4f8ec\" opacity=\"0.35\"/>\n<ellipse cx=\"800\" cy=\"760\" rx=\"420\" ry=\"70\" fill=\"#8fb0a0\" opacity=\"0.5\"/>\n<ellipse class=\"rp\" cx=\"800\" cy=\"760\" rx=\"300\" ry=\"50\" style=\"animation-delay:0s\"/><ellipse class=\"rp\" cx=\"800\" cy=\"760\" rx=\"300\" ry=\"50\" style=\"animation-delay:-2.3s\"/><ellipse class=\"rp\" cx=\"800\" cy=\"760\" rx=\"300\" ry=\"50\" style=\"animation-delay:-4.6s\"/>\n<rect x=\"60\" y=\"0\" width=\"18\" height=\"900\" fill=\"#7fa86a\" opacity=\"0.85\"/><rect x=\"57\" y=\"80\" width=\"24\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"57\" y=\"230\" width=\"24\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"57\" y=\"380\" width=\"24\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"57\" y=\"530\" width=\"24\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"57\" y=\"680\" width=\"24\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"57\" y=\"830\" width=\"24\" height=\"6\" fill=\"#4f7a3f\"/><path d=\"M78 220q90 -20 150 40M78 520q80 -10 130 50\" stroke=\"#5e8c4a\" stroke-width=\"5\" fill=\"none\" /><rect x=\"130\" y=\"0\" width=\"22\" height=\"900\" fill=\"#7fa86a\" opacity=\"0.85\"/><rect x=\"127\" y=\"80\" width=\"28\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"127\" y=\"230\" width=\"28\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"127\" y=\"380\" width=\"28\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"127\" y=\"530\" width=\"28\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"127\" y=\"680\" width=\"28\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"127\" y=\"830\" width=\"28\" height=\"6\" fill=\"#4f7a3f\"/><path d=\"M152 220q90 -20 150 40M152 520q80 -10 130 50\" stroke=\"#5e8c4a\" stroke-width=\"5\" fill=\"none\" /><rect x=\"1470\" y=\"0\" width=\"18\" height=\"900\" fill=\"#6f9a5b\" opacity=\"0.85\"/><rect x=\"1467\" y=\"80\" width=\"24\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"1467\" y=\"230\" width=\"24\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"1467\" y=\"380\" width=\"24\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"1467\" y=\"530\" width=\"24\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"1467\" y=\"680\" width=\"24\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"1467\" y=\"830\" width=\"24\" height=\"6\" fill=\"#4f7a3f\"/><path d=\"M1488 220q90 -20 150 40M1488 520q80 -10 130 50\" stroke=\"#5e8c4a\" stroke-width=\"5\" fill=\"none\" transform=\"scale(-1 1) translate(-2958 0)\"/><rect x=\"1540\" y=\"0\" width=\"22\" height=\"900\" fill=\"#6f9a5b\" opacity=\"0.85\"/><rect x=\"1537\" y=\"80\" width=\"28\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"1537\" y=\"230\" width=\"28\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"1537\" y=\"380\" width=\"28\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"1537\" y=\"530\" width=\"28\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"1537\" y=\"680\" width=\"28\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"1537\" y=\"830\" width=\"28\" height=\"6\" fill=\"#4f7a3f\"/><path d=\"M1562 220q90 -20 150 40M1562 520q80 -10 130 50\" stroke=\"#5e8c4a\" stroke-width=\"5\" fill=\"none\" transform=\"scale(-1 1) translate(-3102 0)\"/><rect x=\"1410\" y=\"0\" width=\"18\" height=\"900\" fill=\"#6f9a5b\" opacity=\"0.85\"/><rect x=\"1407\" y=\"80\" width=\"24\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"1407\" y=\"230\" width=\"24\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"1407\" y=\"380\" width=\"24\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"1407\" y=\"530\" width=\"24\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"1407\" y=\"680\" width=\"24\" height=\"6\" fill=\"#4f7a3f\"/><rect x=\"1407\" y=\"830\" width=\"24\" height=\"6\" fill=\"#4f7a3f\"/><path d=\"M1428 220q90 -20 150 40M1428 520q80 -10 130 50\" stroke=\"#5e8c4a\" stroke-width=\"5\" fill=\"none\" transform=\"scale(-1 1) translate(-2838 0)\"/></svg>"

const LOOK: ThemeSetArgs = { colors: theme, backdrop: { scene: 'matcha-zen', glass: { blur: 10, opacity: 0.6 } } }

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

    return <Svg source={SCENE} alt="Bamboo and ripples on still water" isInteractive />
  })
}
