import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// Sakura: Japanese cherry-blossom look: soft pink paper by day, plum lantern-light by night.
const { theme, problems } = makeColors({
  label: 'Sakura',
  roles: { 'accent': '#c2476f', 'danger': '#b3263e', 'success': '#4f7a52', 'warning': '#a8691a', 'pro': '#7b5a9c' },
  light: {
    gray: {
      anchors: {
        'surface-0': '#f7e6ea',
        'surface-1': '#fbeff1',
        'surface-2': '#fff7f8',
        'text-primary': '#3a2430',
        'text-secondary': '#6a4a58',
        'text-muted': '#7a5a68',
      },
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#2a1a22',
        'surface-1': '#33212b',
        'surface-2': '#3c2833',
        'surface-3': '#3c2833',
        'text-primary': '#fbe9ee',
        'text-secondary': '#e0c4cd',
        'text-muted': '#bd9ba8',
      },
    },
  },
})

const SCENE = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1600 900\" preserveAspectRatio=\"xMidYMid slice\"><style>@keyframes fall{from{transform:translate(0,-80px) rotate(0deg)}to{transform:translate(160px,1000px) rotate(540deg)}}\n@keyframes sway{0%,100%{transform:translateX(0)}50%{transform:translateX(30px)}}\n.f{animation:fall linear infinite;transform-box:fill-box;transform-origin:center}</style><defs><linearGradient id=\"s\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#ffe6ee\"/><stop offset=\"0.6\" stop-color=\"#ffd0dd\"/><stop offset=\"1\" stop-color=\"#f6b3c8\"/></linearGradient></defs>\n<rect width=\"1600\" height=\"900\" fill=\"url(#s)\"/>\n<circle cx=\"260\" cy=\"190\" r=\"90\" fill=\"#fff5f0\" opacity=\"0.7\"/>\n<path d=\"M0 760C200 700 380 740 560 700C760 660 900 720 1100 690C1300 660 1450 700 1600 670V900H0Z\" fill=\"#e89cb4\" opacity=\"0.5\"/>\n<path d=\"M0 820C260 770 520 810 800 780C1080 750 1320 800 1600 770V900H0Z\" fill=\"#d97c9c\" opacity=\"0.5\"/>\n<path d=\"M1600 40C1450 70 1330 140 1210 150C1130 156 1050 120 960 150M1330 140C1300 200 1240 250 1170 270M1450 90C1440 150 1400 210 1330 240\" stroke=\"#5a3a3c\" stroke-width=\"9\" stroke-linecap=\"round\" fill=\"none\"/>\n<circle cx=\"1147\" cy=\"61\" r=\"13\" fill=\"#ffb7cc\" opacity=\"0.9\"/><circle cx=\"1267\" cy=\"125\" r=\"15\" fill=\"#ff9ebb\" opacity=\"0.9\"/><circle cx=\"1237\" cy=\"290\" r=\"13\" fill=\"#ffd3e0\" opacity=\"0.9\"/><circle cx=\"1473\" cy=\"107\" r=\"12\" fill=\"#f78fb0\" opacity=\"0.9\"/><circle cx=\"1077\" cy=\"288\" r=\"23\" fill=\"#ffb7cc\" opacity=\"0.9\"/><circle cx=\"1182\" cy=\"305\" r=\"20\" fill=\"#ff9ebb\" opacity=\"0.9\"/><circle cx=\"1393\" cy=\"88\" r=\"11\" fill=\"#ffd3e0\" opacity=\"0.9\"/><circle cx=\"1217\" cy=\"157\" r=\"22\" fill=\"#f78fb0\" opacity=\"0.9\"/><circle cx=\"1287\" cy=\"179\" r=\"19\" fill=\"#ffb7cc\" opacity=\"0.9\"/><circle cx=\"1432\" cy=\"152\" r=\"12\" fill=\"#ff9ebb\" opacity=\"0.9\"/><circle cx=\"1410\" cy=\"92\" r=\"20\" fill=\"#ffd3e0\" opacity=\"0.9\"/><circle cx=\"1067\" cy=\"111\" r=\"10\" fill=\"#f78fb0\" opacity=\"0.9\"/><circle cx=\"1359\" cy=\"143\" r=\"24\" fill=\"#ffb7cc\" opacity=\"0.9\"/><circle cx=\"1385\" cy=\"201\" r=\"22\" fill=\"#ff9ebb\" opacity=\"0.9\"/><circle cx=\"1208\" cy=\"166\" r=\"22\" fill=\"#ffd3e0\" opacity=\"0.9\"/><circle cx=\"1087\" cy=\"143\" r=\"10\" fill=\"#f78fb0\" opacity=\"0.9\"/><circle cx=\"1106\" cy=\"71\" r=\"25\" fill=\"#ff9ebb\" opacity=\"0.9\"/><circle cx=\"1518\" cy=\"227\" r=\"14\" fill=\"#ffd3e0\" opacity=\"0.9\"/><circle cx=\"1412\" cy=\"111\" r=\"17\" fill=\"#f78fb0\" opacity=\"0.9\"/><circle cx=\"1020\" cy=\"247\" r=\"19\" fill=\"#ffb7cc\" opacity=\"0.9\"/><circle cx=\"1083\" cy=\"237\" r=\"15\" fill=\"#ff9ebb\" opacity=\"0.9\"/><circle cx=\"1059\" cy=\"180\" r=\"20\" fill=\"#ffd3e0\" opacity=\"0.9\"/><circle cx=\"1280\" cy=\"73\" r=\"25\" fill=\"#f78fb0\" opacity=\"0.9\"/><circle cx=\"1416\" cy=\"237\" r=\"14\" fill=\"#ffb7cc\" opacity=\"0.9\"/><circle cx=\"1022\" cy=\"267\" r=\"22\" fill=\"#ff9ebb\" opacity=\"0.9\"/><circle cx=\"1150\" cy=\"20\" r=\"15\" fill=\"#ffd3e0\" opacity=\"0.9\"/><circle cx=\"1527\" cy=\"52\" r=\"11\" fill=\"#f78fb0\" opacity=\"0.9\"/><circle cx=\"1379\" cy=\"71\" r=\"16\" fill=\"#ffb7cc\" opacity=\"0.9\"/><circle cx=\"1094\" cy=\"23\" r=\"25\" fill=\"#ff9ebb\" opacity=\"0.9\"/><circle cx=\"1476\" cy=\"126\" r=\"23\" fill=\"#ffd3e0\" opacity=\"0.9\"/><circle cx=\"1537\" cy=\"112\" r=\"17\" fill=\"#f78fb0\" opacity=\"0.9\"/><circle cx=\"1570\" cy=\"84\" r=\"18\" fill=\"#ffb7cc\" opacity=\"0.9\"/><circle cx=\"1224\" cy=\"207\" r=\"13\" fill=\"#ffd3e0\" opacity=\"0.9\"/><circle cx=\"1234\" cy=\"248\" r=\"12\" fill=\"#ffb7cc\" opacity=\"0.9\"/><circle cx=\"1428\" cy=\"149\" r=\"15\" fill=\"#ff9ebb\" opacity=\"0.9\"/><circle cx=\"1384\" cy=\"174\" r=\"13\" fill=\"#ffd3e0\" opacity=\"0.9\"/><circle cx=\"1043\" cy=\"42\" r=\"18\" fill=\"#f78fb0\" opacity=\"0.9\"/><circle cx=\"1383\" cy=\"79\" r=\"14\" fill=\"#ffb7cc\" opacity=\"0.9\"/><circle cx=\"1322\" cy=\"291\" r=\"13\" fill=\"#ff9ebb\" opacity=\"0.9\"/><circle cx=\"1216\" cy=\"50\" r=\"20\" fill=\"#ffd3e0\" opacity=\"0.9\"/><circle cx=\"1180\" cy=\"249\" r=\"15\" fill=\"#f78fb0\" opacity=\"0.9\"/><circle cx=\"1217\" cy=\"117\" r=\"11\" fill=\"#ffb7cc\" opacity=\"0.9\"/><circle cx=\"1468\" cy=\"205\" r=\"16\" fill=\"#ff9ebb\" opacity=\"0.9\"/><g transform=\"translate(382,0) scale(1.42)\"><path class=\"f\" style=\"animation-duration:18.3s;animation-delay:-18.5s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ffc2d4\" opacity=\"0.85\"/></g><g transform=\"translate(79,0) scale(1.37)\"><path class=\"f\" style=\"animation-duration:15.3s;animation-delay:-1.1s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ffd6e2\" opacity=\"0.85\"/></g><g transform=\"translate(110,0) scale(1.49)\"><path class=\"f\" style=\"animation-duration:22.7s;animation-delay:-10.6s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ff9fbb\" opacity=\"0.85\"/></g><g transform=\"translate(723,0) scale(1.09)\"><path class=\"f\" style=\"animation-duration:18.3s;animation-delay:-15.5s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ffe3ec\" opacity=\"0.85\"/></g><g transform=\"translate(1248,0) scale(0.98)\"><path class=\"f\" style=\"animation-duration:16.7s;animation-delay:-17.0s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ffc2d4\" opacity=\"0.85\"/></g><g transform=\"translate(580,0) scale(1.03)\"><path class=\"f\" style=\"animation-duration:12.1s;animation-delay:-15.0s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ffd6e2\" opacity=\"0.85\"/></g><g transform=\"translate(1335,0) scale(0.92)\"><path class=\"f\" style=\"animation-duration:13.1s;animation-delay:-19.6s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ff9fbb\" opacity=\"0.85\"/></g><g transform=\"translate(195,0) scale(1.01)\"><path class=\"f\" style=\"animation-duration:16.5s;animation-delay:-2.2s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ffe3ec\" opacity=\"0.85\"/></g><g transform=\"translate(182,0) scale(1.16)\"><path class=\"f\" style=\"animation-duration:20.3s;animation-delay:-1.7s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ffc2d4\" opacity=\"0.85\"/></g><g transform=\"translate(969,0) scale(1.43)\"><path class=\"f\" style=\"animation-duration:14.2s;animation-delay:-11.8s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ffd6e2\" opacity=\"0.85\"/></g><g transform=\"translate(564,0) scale(0.88)\"><path class=\"f\" style=\"animation-duration:17.1s;animation-delay:-14.2s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ff9fbb\" opacity=\"0.85\"/></g><g transform=\"translate(496,0) scale(0.74)\"><path class=\"f\" style=\"animation-duration:21.5s;animation-delay:-12.5s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ffe3ec\" opacity=\"0.85\"/></g><g transform=\"translate(607,0) scale(1.50)\"><path class=\"f\" style=\"animation-duration:16.8s;animation-delay:-3.6s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ffc2d4\" opacity=\"0.85\"/></g><g transform=\"translate(406,0) scale(1.43)\"><path class=\"f\" style=\"animation-duration:18.1s;animation-delay:-9.9s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ffd6e2\" opacity=\"0.85\"/></g><g transform=\"translate(280,0) scale(0.99)\"><path class=\"f\" style=\"animation-duration:13.1s;animation-delay:-0.0s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ff9fbb\" opacity=\"0.85\"/></g><g transform=\"translate(1107,0) scale(1.28)\"><path class=\"f\" style=\"animation-duration:12.7s;animation-delay:-10.9s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ffe3ec\" opacity=\"0.85\"/></g><g transform=\"translate(1187,0) scale(1.39)\"><path class=\"f\" style=\"animation-duration:15.5s;animation-delay:-8.1s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ffc2d4\" opacity=\"0.85\"/></g><g transform=\"translate(1021,0) scale(1.35)\"><path class=\"f\" style=\"animation-duration:17.0s;animation-delay:-9.6s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ffd6e2\" opacity=\"0.85\"/></g><g transform=\"translate(1257,0) scale(1.46)\"><path class=\"f\" style=\"animation-duration:14.9s;animation-delay:-17.7s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ff9fbb\" opacity=\"0.85\"/></g><g transform=\"translate(331,0) scale(0.85)\"><path class=\"f\" style=\"animation-duration:22.4s;animation-delay:-14.3s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ffe3ec\" opacity=\"0.85\"/></g><g transform=\"translate(334,0) scale(0.65)\"><path class=\"f\" style=\"animation-duration:14.5s;animation-delay:-16.5s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ffc2d4\" opacity=\"0.85\"/></g><g transform=\"translate(1216,0) scale(0.79)\"><path class=\"f\" style=\"animation-duration:17.1s;animation-delay:-15.1s\" d=\"M0 0C10 -8 22 -2 20 10C18 20 6 22 0 14C-6 22 -18 20 -20 10C-22 -2 -10 -8 0 0Z\" fill=\"#ffd6e2\" opacity=\"0.85\"/></g></svg>"

const LOOK: ThemeSetArgs = { colors: theme, backdrop: { scene: 'sakura', glass: { blur: 10, opacity: 0.6 } } }

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

    return <Svg source={SCENE} alt="Cherry blossom petals drifting down" isInteractive />
  })
}
