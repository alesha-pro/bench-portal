import segments from './flight.json' with { type: 'json' };
export const W = 1600,
  H = 900,
  TAU = 2 * Math.PI;
export const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
export function rng(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let n = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    n = (n + Math.imul(n ^ (n >>> 7), 61 | n)) ^ n;
    return ((n ^ (n >>> 14)) >>> 0) / 4294967296;
  };
}
export function ridge(i, x) {
  const s = Math.sin;
  switch (i) {
    case 0:
      return 409 + 24 * s(x * 0.006 - 1) + 20 * s(x * 0.014) + 8 * s(x * 0.034) + 3 * s(x * 0.083);
    case 1:
      return 452 + 39 * s(x * 0.006 + 0.3) + 21 * s(x * 0.012 - 1) + 6 * s(x * 0.024);
    case 2:
      return 511 + 50 * s(x * 0.0051 - 0.8) + 12 * s(x * 0.014);
    case 3:
      return 621 + 38 * s(x * 0.0044 + 1) + 24 * s(x * 0.0101 - 0.2);
    default:
      return 726 + 45 * s(x * 0.005 - 0.5) + 22 * s(x * 0.0109 + 1.7);
  }
}
export const water = (x) => ridge(3, x) + 33 + 12 * Math.sin(x * 0.008 - 1);
export const colors = [
  {
    sky: ['#518eaa', '#a4c6c4', '#fbe6be'],
    mount: ['#86a5a8', '#728f97', '#607f87'],
    hill: ['#88a59b', '#789983', '#78a076', '#91a96d', '#426e55'],
    shade: ['#638c90', '#537f77', '#548463', '#688856', '#345d4f'],
    light: ['#bbccad', '#a4b99b', '#b6c687', '#c7c583', '#7b965e'],
    water: '#73a5ac',
    foam: '#d7e2c7',
    pine: ['#375e5b', '#537869', '#789376'],
    trunk: '#5e6451',
    leaf: ['#466e5a', '#749061', '#98a56b'],
    ink: '#3a5450',
  },
  {
    sky: ['#f3bb64', '#f9d686', '#ffe8ad'],
    mount: ['#bdc4ab', '#aac2b4', '#9bb8ac'],
    hill: ['#90b7a4', '#73aa95', '#94b477', '#bbca7e', '#588865'],
    shade: ['#68998e', '#589c86', '#749f6d', '#91ad68', '#406f58'],
    light: ['#b6ccb0', '#91bda2', '#c5d692', '#e0de89', '#84a673'],
    water: '#8dcac4',
    foam: '#eff3c4',
    pine: ['#244d4d', '#387160', '#6c9670'],
    trunk: '#35483f',
    leaf: ['#315b50', '#57866a', '#89aa7e'],
    ink: '#293d38',
  },
  {
    sky: ['#121434', '#342553', '#a65078'],
    mount: ['#7e477e', '#653669', '#483365'],
    hill: ['#493864', '#37365f', '#28395c', '#193952', '#172c46'],
    shade: ['#2e2c53', '#252747', '#172942', '#142b45', '#101e35'],
    light: ['#ba76b2', '#9371ad', '#57a6b1', '#44b8b9', '#5fafae'],
    water: '#3374a2',
    foam: '#79f9fa',
    pine: ['#192843', '#28464f', '#51a9a7'],
    trunk: '#34566b',
    leaf: ['#1a324a', '#326173', '#75c1b3'],
    ink: '#58fff2',
  },
  {
    sky: ['#85a8b6', '#e6c49c', '#ffdda3'],
    mount: ['#b5a6a3', '#aa9a96', '#9a8e83'],
    hill: ['#a7ab97', '#9ca37c', '#aaa96f', '#b5a565', '#7a864d'],
    shade: ['#737e7a', '#616e58', '#68774d', '#796c43', '#41583e'],
    light: ['#d5c79a', '#d5c189', '#e4ca80', '#ebcf85', '#c4ba79'],
    water: '#93b8ad',
    foam: '#f4dfaf',
    pine: ['#494f40', '#747953', '#a7a069'],
    trunk: '#6c5744',
    leaf: ['#737348', '#929257', '#c5b572'],
    ink: '#665e44',
  },
];
export const clouds = [
  [96, 297, 1.06, 48, 2],
  [326, 212, 0.57, 171, 1],
  [494, 332, 0.81, 68, 1],
  [758, 237, 1.13, 52, 2],
  [895, 302, 0.61, 17, 0],
  [1154, 294, 1.08, 71, 2],
  [1448, 225, 1.33, 33, 2],
  [1662, 351, 0.65, 17, 0],
  [-100, 197, 0.85, 33, 1],
];
// Lists are ordered rear to front for the ink and gouache painters. The same
// normalized ellipsoids define the signed-distance cloud volumes in WebGL.
export function cloudLobes(seed) {
  const random = rng(seed),
    lobes = [];
  for (let i = 0; i < 12; i++) {
    const u = i / 11,
      top = Math.sin(u * Math.PI);
    lobes.push([
      (u - 0.5) * 215 + (random() - 0.5) * 13,
      8 - top * (28 + random() * 27) + random() * 9,
      20 + random() * 16 + top * 12,
      16 + random() * 13 + top * 18,
      (random() - 0.5) * 18,
    ]);
  }
  for (let i = 0; i < 13; i++) {
    const u = i / 12,
      mid = Math.sin(u * Math.PI);
    lobes.push([
      (u - 0.5) * 227 + (random() - 0.5) * 9,
      13 + mid * 8 + (random() - 0.5) * 9,
      14 + random() * 11 + mid * 10,
      10 + random() * 6 + mid * 7,
      10 + random() * 16,
    ]);
  }
  return lobes;
}
export function flight(t) {
  let time = (((t + 3.1) % 30) + 30) % 30;
  for (const [dt, a, b, c, d] of segments) {
    if (time <= dt + 1e-9) {
      const u = time / dt,
        v = 1 - u;
      const at = (k) =>
        v * v * v * a[k] + 3 * v * v * u * b[k] + 3 * v * u * u * c[k] + u * u * u * d[k];
      const vel = (k) =>
        (3 * (v * v * (b[k] - a[k]) + 2 * u * v * (c[k] - b[k]) + u * u * (d[k] - c[k]))) / dt;
      const dx = vel(0),
        dy = vel(1);
      return { x: at(0), y: at(1), angle: Math.atan2(dy, dx), speed: Math.hypot(dx, dy) };
    }
    time -= dt;
  }
  return { x: 1674, y: 300, angle: 0, speed: 30 };
}
export const trees = (() => {
  const random = rng(44320),
    items = [];
  for (let l = 0; l < 5; l++) {
    const rows = [610, 420, 232, 87, 18],
      sizes = [4.5, 7, 12, 18, 28];
    for (let i = 0; i < rows[l]; i++) {
      const x = random() * W,
        v = random(),
        h = sizes[l] * (0.46 + random() * 1.17);
      if (Math.sin(x * 0.028 + l) + Math.sin(x * 0.071 + l * 4) < -0.57) continue;
      if (l >= 2 && [256, 1192, 1430].some((a) => Math.abs(x - a) < 52)) continue;
      if (l === 4 && x > 125 && x < 1510) continue;
      const y = ridge(l, x) + v * [29, 42, 48, 28, 85][l];
      items.push({
        x,
        y,
        h,
        l,
        seed: Math.floor(random() * 20000),
        round: random() < (l < 2 ? 0.22 : 0.38),
      });
    }
  }
  return items.sort((a, b) => a.l - b.l || a.y - b.y);
})();
export const mill = { x: 1177, y: ridge(2, 1177) + 22 };
export const cottages = [
  [254, ridge(2, 254) + 23, 1.08],
  [1429, ridge(2, 1429) + 40, 1.22],
  [1371, ridge(2, 1371) + 24, 0.57],
  [300, ridge(2, 300) + 13, 0.49],
];
