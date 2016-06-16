A Pen created at CodePen.io. You can find this one at http://codepen.io/neiltron/pen/EyadLp.

 Dot filled loading screen. This wouldn't actually be a great loading screen as-is because the sequence takes ~6 seconds and nobody has time for that.

It's also mouse/touch reactive, so move around a bit and try to catch some dots.

For a more freeflowing version, change `Math.tan` in `_getYPos` to `Math.cos` and increase the `visibleDuration` value to ~10000.