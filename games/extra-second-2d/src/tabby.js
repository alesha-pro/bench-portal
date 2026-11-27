import { ellipse, path, smooth } from './draw.js';

const fur = '#c18755',
  outline = '#514f41',
  cream = '#eed3a2';

// Feet follow the top of the trunk, then the platform. World time stops with one paw raised.
export function tabby(c, s) {
  const w = s.world;
  const off = smooth(1.1, 2.3, w),
    patrol = smooth(2.3, 5.2, w);
  const follow = smooth(6.4, 11.1, w),
    turn = smooth(11.3, 12, w);
  const home = smooth(12, 16.6, w),
    onto = smooth(16.7, 17.8, w);
  const x = 1377 - 61 * off - 49 * patrol - 122 * follow + 173 * home + 59 * onto;
  const arc = Math.sin(Math.PI * off) + Math.sin(Math.PI * onto);
  const y = 715 + 30 * (off - onto) - arc * 39;
  const gait = Math.sin(s.phase * 19);
  const walking = Math.sin(Math.PI * patrol) + Math.sin(Math.PI * follow) + Math.sin(Math.PI * home);
  const curious = smooth(4.25, 5.98, w) - smooth(6.18, 7.55, w);
  const face = 1 - 2 * turn + 2 * smooth(18.1, 18.8, w);
  const ears = Math.sin(s.phase * 7 + 0.4),
    tail = Math.sin(s.phase * 3 - 0.8);
  const ink = '#775c42';
  ellipse(c, x + 2, 715 + 30 * (off - onto) + 1, 27 - arc * 7, 4.2, '#39493940');
  c.save();
  c.translate(x, y);
  c.scale(face >= 0 ? 0.68 + 0.32 * Math.abs(face) : -0.68 - 0.32 * Math.abs(face), 1);
  c.translate(0, -2 * Math.abs(gait) * walking);
  // The tail is a single ink gesture, brushed over twice to leave its dark edge.
  const tailD = `M16 -18 C34 -15 ${39 + tail * 6} ${-36 + 8 * tail} ${35 + tail * 6} ${-43 + tail * 7} Q${31 + tail * 5} ${-51 + tail * 5} ${27 + tail * 4} ${-47 + tail * 6}`;
  path(c, tailD, null, outline, 8.2);
  path(c, tailD, null, fur, 5.5);
  path(
    c,
    `M${35 + tail * 6} ${-43 + tail * 7} Q${31 + tail * 5} ${-51 + tail * 5} ${27 + tail * 4} ${-47 + tail * 6}`,
    null,
    '#795c45',
    5.5,
  );
  for (const [hip, dir, near] of [
    [12, -1, false],
    [-14, 1, false],
    [15, 1, true],
    [-16, -1, true],
  ]) {
    const dx = gait * dir * walking * 8 - (hip < 0 ? 10 : -6) * arc;
    const lift =
      (hip < 0 && near ? curious * 15 : 0) +
      Math.max(0, dir * Math.cos(s.phase * 19)) * walking * 4 +
      arc * 4;
    path(
      c,
      `M${hip - 4} -18 Q${hip - 4} -13 ${hip + dx - 2} ${-5 - lift} q-6 0 -5 4 q1 3 10 1 l2 -4 1 -12Z`,
      near ? fur : '#93724e',
      outline,
      1.15,
    );
    if (near) ellipse(c, hip + dx - 2, -1 - lift, 4.5, 2, cream);
  }
  c.save();
  c.translate(12, -15);
  c.rotate(curious * 0.25 + arc * 0.1);
  c.translate(-12, 15);
  path(
    c,
    'M-21 -33 Q-11 -29 0 -31 Q16 -36 22 -25 Q29 -13 19 -9 Q14 -8 9 -15 Q-6 -7 -20 -14 Q-29 -21 -21 -33Z',
    fur,
    outline,
    1.7,
  );
  path(c, 'M-18 -25 Q-11 -17 5 -15 Q-11 -9 -19 -15Z', cream, null);
  path(
    c,
    'M2 -31 q1 8 -4 12 q7 -4 8 -12Z M11 -32 q2 7 -2 11 q7 -2 6 -10Z M17 -28 q3 4 0 9 q5 -1 5 -5Z',
    '#8f6546',
    null,
  );
  c.translate(-20, -30);
  const look = 0.16 + 0.28 * curious + 0.18 * Math.sin(s.phase * 2);
  c.rotate(look);
  path(
    c,
    `M-11 -8 L-12 ${-21 + ears * 1.6} L-3 -16 Q3 -18 8 -14 L16 ${-19 - ears * 1.5} L13 -4 Q13 7 3 12 Q-7 15 -15 6 L-19 2 L-14 -3Z`,
    fur,
    outline,
    1.6,
  );
  path(c, 'M-10 -17 l6 4 -6 3Z M10 -12 l4 -3 -2 7Z', '#bc806d', null);
  path(c, 'M-17 1 Q-10 3 -8 0 Q-4 9 4 6 Q3 15 -6 14 L-14 9Z', cream, null);
  path(c, 'M-4 -14 l2 7 2 -8 M2 -14 l1 6 3 -6', '#8d694c', null);
  const blink = Math.max(0.12, 1 - Math.max(0, Math.cos(5 * s.phase + 0.8)) ** 100);
  ellipse(c, -9, -4, 3.4, 2.65 * blink, '#f5dd93', outline, 0.85);
  ellipse(c, -10, -4, 1.15, 2.3 * blink, '#344a43');
  path(c, 'M-17 0 l4 .6 -2 2.7Z', '#81594c', null);
  path(c, 'M-15 4 q1 3 5 2 M-14 5 l-11 -1 M-13 7 l-12 2 M-4 5 l11 -2 M-3 7 l9 1', null, '#756d54', 0.7);
  path(c, 'M-7 12 q6 3 13 -2', null, '#48807a', 3);
  ellipse(c, -4, 15, 2.6, 3, '#e2be71', ink, 0.75);
  c.restore();
  c.restore();
}
