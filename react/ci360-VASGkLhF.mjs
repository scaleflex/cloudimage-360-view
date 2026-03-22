var Ei = Object.defineProperty;
var Pi = (e, t, i) => t in e ? Ei(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var ge = (e, t, i) => Pi(e, typeof t != "symbol" ? t + "" : t, i);
var Ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ti(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ke = "Expected a function", ve = NaN, Ai = "[object Symbol]", Si = /^\s+|\s+$/g, Xi = /^[-+]0x[0-9a-f]+$/i, Li = /^0b[01]+$/i, Oi = /^0o[0-7]+$/i, Yi = parseInt, Mi = typeof Ft == "object" && Ft && Ft.Object === Object && Ft, Hi = typeof self == "object" && self && self.Object === Object && self, Ri = Mi || Hi || Function("return this")(), zi = Object.prototype, Zi = zi.toString, Di = Math.max, Bi = Math.min, ie = function() {
  return Ri.Date.now();
};
function Gi(e, t, i) {
  var o, s, n, r, a, l, h = 0, c = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(Ke);
  t = ye(t) || 0, jt(i) && (c = !!i.leading, p = "maxWait" in i, n = p ? Di(ye(i.maxWait) || 0, t) : n, m = "trailing" in i ? !!i.trailing : m);
  function u(f) {
    var w = o, x = s;
    return o = s = void 0, h = f, r = e.apply(x, w), r;
  }
  function I(f) {
    return h = f, a = setTimeout(b, t), c ? u(f) : r;
  }
  function g(f) {
    var w = f - l, x = f - h, P = t - w;
    return p ? Bi(P, n - x) : P;
  }
  function v(f) {
    var w = f - l, x = f - h;
    return l === void 0 || w >= t || w < 0 || p && x >= n;
  }
  function b() {
    var f = ie();
    if (v(f))
      return k(f);
    a = setTimeout(b, g(f));
  }
  function k(f) {
    return a = void 0, m && o ? u(f) : (o = s = void 0, r);
  }
  function C() {
    a !== void 0 && clearTimeout(a), h = 0, o = l = s = a = void 0;
  }
  function y() {
    return a === void 0 ? r : k(ie());
  }
  function E() {
    var f = ie(), w = v(f);
    if (o = arguments, s = this, l = f, w) {
      if (a === void 0)
        return I(l);
      if (p)
        return a = setTimeout(b, t), u(l);
    }
    return a === void 0 && (a = setTimeout(b, t)), r;
  }
  return E.cancel = C, E.flush = y, E;
}
function _i(e, t, i) {
  var o = !0, s = !0;
  if (typeof e != "function")
    throw new TypeError(Ke);
  return jt(i) && (o = "leading" in i ? !!i.leading : o, s = "trailing" in i ? !!i.trailing : s), Gi(e, t, {
    leading: o,
    maxWait: t,
    trailing: s
  });
}
function jt(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Fi(e) {
  return !!e && typeof e == "object";
}
function Ni(e) {
  return typeof e == "symbol" || Fi(e) && Zi.call(e) == Ai;
}
function ye(e) {
  if (typeof e == "number")
    return e;
  if (Ni(e))
    return ve;
  if (jt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = jt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Si, "");
  var i = Li.test(e);
  return i || Oi.test(e) ? Yi(e.slice(2), i ? 2 : 8) : Xi.test(e) ? ve : +e;
}
var Wi = _i;
const be = /* @__PURE__ */ Ti(Wi), L = {
  SPIN_X: "spin-x",
  SPIN_Y: "spin-y",
  SPIN_XY: "spin-xy",
  SPIN_YX: "spin-yx"
}, Vi = [!1, 0, null, void 0, "false", "0", "null", "undefined"], O = {
  X: "x-axis",
  Y: "y-axis"
}, ji = [37, 39], Ui = [38, 40], $i = typeof navigator < "u" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), we = $i ? 32 : 10, Ki = 150, qi = 150, Ji = 200, Ce = 50, Qi = 50, to = 50, d = {
  folder: "/",
  apiVersion: "v7",
  filenameX: "image-{index}.jpg",
  filenameY: null,
  imageListX: null,
  imageListY: null,
  filenameGrid: null,
  imageListGrid: null,
  indexZeroBase: 0,
  amountX: 0,
  amountY: 0,
  speed: 80,
  dragSpeed: 150,
  draggable: !0,
  swipeable: !0,
  keys: !1,
  keysReverse: !1,
  autoplay: !1,
  autoplayBehavior: L.SPIN_X,
  playOnce: !1,
  autoplayReverse: !1,
  pointerZoom: 0,
  pointerZoomTrigger: "dblclick",
  fullscreen: !1,
  zoomMax: 5,
  zoomStep: 0.5,
  zoomControls: !0,
  zoomControlsPosition: "bottom-right",
  scrollHint: !0,
  bottomCircle: !1,
  bottomCircleOffset: 5,
  ciToken: null,
  ciFilters: null,
  ciTransformation: null,
  lazyload: !0,
  dragReverse: !1,
  stopAtEdges: !1,
  stopAtEdgesX: null,
  stopAtEdgesY: null,
  imageInfo: !1,
  initialIconShown: !0,
  hotspots: null,
  hotspotTrigger: "hover",
  hide360Logo: !1,
  logoSrc: null,
  inertia: !1,
  pinchZoom: !0,
  hints: !0,
  theme: null,
  markerTheme: null,
  brandColor: null,
  initOnClick: !1,
  hotspotTimelineOnClick: !0,
  aspectRatio: null,
  cropAspectRatio: null,
  cropGravity: null,
  // Event callbacks
  onReady: null,
  onLoad: null,
  onSpin: null,
  onAutoplayStart: null,
  onAutoplayStop: null,
  onFullscreenOpen: null,
  onFullscreenClose: null,
  onZoomIn: null,
  onZoomOut: null,
  onDragStart: null,
  onDragEnd: null,
  onHotspotOpen: null,
  onHotspotClose: null,
  onProductClick: null,
  onNavigate: null,
  onError: null
}, eo = (e) => ({
  folder: T(e, "folder", d.folder),
  apiVersion: T(e, "api-version", d.apiVersion),
  filenameX: T(e, "filename") || T(e, "filename-x") || d.filenameX,
  filenameY: T(e, "filename-y", d.filenameY),
  imageListX: T(e, "image-list-x", d.imageListX),
  imageListY: T(e, "image-list-y", d.imageListY),
  filenameGrid: T(e, "filename-grid", d.filenameGrid),
  imageListGrid: T(e, "image-list-grid", d.imageListGrid),
  indexZeroBase: parseInt(T(e, "index-zero-base", d.indexZeroBase), 10),
  amountX: parseInt(T(e, "amount-x", d.amountX), 10),
  amountY: parseInt(T(e, "amount-y", d.amountY), 10),
  speed: parseInt(T(e, "speed", d.speed), 10),
  dragSpeed: parseInt(T(e, "drag-speed", d.dragSpeed), 10),
  draggable: X(e, "draggable", d.draggable),
  swipeable: X(e, "swipeable", d.swipeable),
  keys: X(e, "keys", d.keys),
  keysReverse: X(e, "keys-reverse", d.keysReverse),
  autoplay: X(e, "autoplay", d.autoplay),
  autoplayBehavior: T(e, "autoplay-behavior", d.autoplayBehavior),
  playOnce: X(e, "play-once", d.playOnce),
  autoplayReverse: X(e, "autoplay-reverse", d.autoplayReverse),
  pointerZoom: parseFloat(T(e, "pointer-zoom", d.pointerZoom)),
  pointerZoomTrigger: T(e, "pointer-zoom-trigger", d.pointerZoomTrigger),
  fullscreen: X(e, "fullscreen") || X(e, "full-screen", d.fullscreen),
  magnifier: T(e, "magnifier", null) != null ? parseFloat(T(e, "magnifier", null)) : null,
  zoomMax: parseFloat(T(e, "zoom-max", d.zoomMax)),
  zoomStep: parseFloat(T(e, "zoom-step", d.zoomStep)),
  zoomControls: !It(e, "zoom-controls"),
  zoomControlsPosition: T(e, "zoom-controls-position", d.zoomControlsPosition),
  scrollHint: !It(e, "scroll-hint"),
  bottomCircleOffset: parseInt(
    T(e, "bottom-circle-offset", d.bottomCircleOffset),
    10
  ),
  ciToken: T(e, "responsive", d.ciToken),
  ciFilters: T(e, "filters", d.ciFilters),
  ciTransformation: T(e, "transformation", d.ciTransformation),
  lazyload: X(e, "lazyload", d.lazyload),
  dragReverse: X(e, "drag-reverse", d.dragReverse),
  stopAtEdges: X(e, "stop-at-edges", d.stopAtEdges),
  stopAtEdgesX: T(e, "stop-at-edges-x", null) !== null ? X(e, "stop-at-edges-x", null) : null,
  stopAtEdgesY: T(e, "stop-at-edges-y", null) !== null ? X(e, "stop-at-edges-y", null) : null,
  imageInfo: X(e, "info", d.imageInfo),
  initialIconShown: !It(e, "initial-icon"),
  bottomCircle: X(e, "bottom-circle", d.bottomCircle),
  hide360Logo: X(e, "hide-360-logo", d.hide360Logo),
  logoSrc: T(e, "logo-src", d.logoSrc),
  inertia: X(e, "inertia", d.inertia),
  pinchZoom: X(e, "pinch-zoom", d.pinchZoom),
  hints: !It(e, "hints"),
  theme: T(e, "theme", d.theme),
  markerTheme: T(e, "marker-theme", d.markerTheme),
  brandColor: T(e, "brand-color", d.brandColor),
  initOnClick: X(e, "init-on-click", d.initOnClick),
  hotspotTrigger: T(e, "hotspot-trigger", d.hotspotTrigger),
  hotspotTimelineOnClick: !It(e, "hotspot-timeline-on-click"),
  aspectRatio: T(e, "aspect-ratio", d.aspectRatio),
  cropAspectRatio: T(e, "crop-aspect-ratio", d.cropAspectRatio),
  cropGravity: T(e, "crop-gravity", d.cropGravity)
}), io = (e) => {
  const t = [];
  e.amountX !== void 0 && e.amountX < 0 && t.push("amountX should be a positive number"), e.amountY !== void 0 && e.amountY < 0 && t.push("amountY should be a positive number"), e.speed !== void 0 && e.speed <= 0 && t.push("speed should be a positive number"), e.dragSpeed !== void 0 && e.dragSpeed <= 0 && t.push("dragSpeed should be a positive number"), e.pointerZoom !== void 0 && e.pointerZoom !== 0 && (e.pointerZoom < 1 || e.pointerZoom > 5) && t.push("pointerZoom should be between 1 and 5 (or 0 to disable)"), e.magnifier !== void 0 && e.magnifier !== null && e.magnifier !== 0 && t.push("magnifier option is deprecated and will be ignored. Use zoomMax instead."), e.pointerZoomTrigger === "click" && t.push('pointerZoomTrigger: "click" is deprecated. Zoom is now always triggered by double-click. Use dblclick trigger or the new zoom controls.');
  const i = !!(e.filenameGrid || e.imageListGrid);
  if (!i && !e.folder && !e.imageListX && !e.imageListY && t.push("Either folder or imageListX/imageListY is required"), !i && e.folder && !e.amountX && !e.imageListX && t.push("amountX is required when using folder (unless imageListX is provided)"), e.filenameGrid && (!e.amountX || e.amountX <= 0 || !e.amountY || e.amountY <= 0) && t.push("filenameGrid requires both amountX > 0 and amountY > 0"), e.imageListGrid) {
    (!e.amountX || e.amountX <= 0 || !e.amountY || e.amountY <= 0) && t.push("imageListGrid requires both amountX > 0 and amountY > 0");
    const s = Array.isArray(e.imageListGrid) ? e.imageListGrid.flat() : [];
    s.length && e.amountX && e.amountY && s.length !== e.amountX * e.amountY && t.push(`imageListGrid length (${s.length}) does not match amountX * amountY (${e.amountX * e.amountY})`);
  }
  const o = ["spin-x", "spin-y", "spin-xy", "spin-yx"];
  return e.autoplayBehavior && !o.includes(e.autoplayBehavior) && t.push(`autoplayBehavior should be one of: ${o.join(", ")}`), t.forEach((s) => {
    console.warn(`CloudImage 360: ${s}`);
  }), t.length === 0;
}, oo = (e) => (io(e), {
  folder: e.folder || d.folder,
  apiVersion: e.apiVersion || d.apiVersion,
  filenameX: e.filenameX || e.filename || d.filenameX,
  filenameY: e.filenameY || d.filenameY,
  imageListX: e.imageListX || d.imageListX,
  imageListY: e.imageListY || d.imageListY,
  filenameGrid: e.filenameGrid || d.filenameGrid,
  imageListGrid: e.imageListGrid || d.imageListGrid,
  indexZeroBase: parseInt(e.indexZeroBase ?? d.indexZeroBase, 10),
  amountX: parseInt(e.amountX ?? d.amountX, 10),
  amountY: parseInt(e.amountY ?? d.amountY, 10),
  speed: parseInt(e.speed ?? d.speed, 10),
  draggable: e.draggable ?? d.draggable,
  swipeable: e.swipeable ?? d.swipeable,
  dragSpeed: parseInt(e.dragSpeed ?? d.dragSpeed, 10),
  keys: e.keys ?? d.keys,
  keysReverse: e.keysReverse ?? d.keysReverse,
  autoplay: e.autoplay ?? d.autoplay,
  autoplayBehavior: e.autoplayBehavior || d.autoplayBehavior,
  playOnce: e.playOnce ?? d.playOnce,
  autoplayReverse: e.autoplayReverse ?? d.autoplayReverse,
  pointerZoom: parseFloat(e.pointerZoom ?? d.pointerZoom),
  pointerZoomTrigger: e.pointerZoomTrigger || d.pointerZoomTrigger,
  fullscreen: e.fullscreen ?? d.fullscreen,
  magnifier: e.magnifier != null ? parseFloat(e.magnifier) : null,
  zoomMax: parseFloat(e.zoomMax ?? d.zoomMax),
  zoomStep: parseFloat(e.zoomStep ?? d.zoomStep),
  zoomControls: e.zoomControls ?? d.zoomControls,
  zoomControlsPosition: e.zoomControlsPosition || d.zoomControlsPosition,
  scrollHint: e.scrollHint ?? d.scrollHint,
  bottomCircleOffset: parseInt(e.bottomCircleOffset ?? d.bottomCircleOffset, 10),
  ciToken: e.ciToken || d.ciToken,
  ciFilters: e.ciFilters || d.ciFilters,
  ciTransformation: e.ciTransformation || d.ciTransformation,
  lazyload: e.lazyload ?? d.lazyload,
  dragReverse: e.dragReverse ?? d.dragReverse,
  stopAtEdges: e.stopAtEdges ?? d.stopAtEdges,
  stopAtEdgesX: e.stopAtEdgesX ?? d.stopAtEdgesX,
  stopAtEdgesY: e.stopAtEdgesY ?? d.stopAtEdgesY,
  imageInfo: e.imageInfo ?? d.imageInfo,
  initialIconShown: e.initialIconShown ?? d.initialIconShown,
  bottomCircle: e.bottomCircle ?? d.bottomCircle,
  hotspots: e.hotspots ?? d.hotspots,
  hotspotTrigger: e.hotspotTrigger || d.hotspotTrigger,
  hide360Logo: e.hide360Logo ?? d.hide360Logo,
  logoSrc: e.logoSrc || d.logoSrc,
  inertia: e.inertia ?? d.inertia,
  pinchZoom: e.pinchZoom ?? d.pinchZoom,
  hints: e.hints ?? d.hints,
  theme: e.theme || d.theme,
  markerTheme: e.markerTheme || d.markerTheme,
  brandColor: e.brandColor || d.brandColor,
  initOnClick: e.initOnClick ?? d.initOnClick,
  hotspotTimelineOnClick: e.hotspotTimelineOnClick ?? d.hotspotTimelineOnClick,
  aspectRatio: e.aspectRatio || d.aspectRatio,
  cropAspectRatio: e.cropAspectRatio || d.cropAspectRatio,
  cropGravity: e.cropGravity || d.cropGravity,
  // Event callbacks
  onReady: e.onReady ?? d.onReady,
  onLoad: e.onLoad ?? d.onLoad,
  onSpin: e.onSpin ?? d.onSpin,
  onAutoplayStart: e.onAutoplayStart ?? d.onAutoplayStart,
  onAutoplayStop: e.onAutoplayStop ?? d.onAutoplayStop,
  onFullscreenOpen: e.onFullscreenOpen ?? d.onFullscreenOpen,
  onFullscreenClose: e.onFullscreenClose ?? d.onFullscreenClose,
  onZoomIn: e.onZoomIn ?? d.onZoomIn,
  onZoomOut: e.onZoomOut ?? d.onZoomOut,
  onDragStart: e.onDragStart ?? d.onDragStart,
  onDragEnd: e.onDragEnd ?? d.onDragEnd,
  onHotspotOpen: e.onHotspotOpen ?? d.onHotspotOpen,
  onHotspotClose: e.onHotspotClose ?? d.onHotspotClose,
  onProductClick: e.onProductClick ?? d.onProductClick,
  onNavigate: e.onNavigate ?? d.onNavigate,
  onError: e.onError ?? d.onError
}), T = (e, t, i) => e.getAttribute(t) || e.getAttribute(`data-${t}`) || i, X = (e, t, i) => {
  if (!(e.hasAttribute(t) || e.hasAttribute(`data-${t}`))) return i;
  const s = T(e, t, null);
  return s !== "false" && s !== "0";
}, It = (e, t) => T(e, t, null) === "false", so = (e = 1) => {
  const t = Math.round(window.devicePixelRatio || 1);
  return parseInt(e) * t;
}, no = (e, t, i) => {
  try {
    if (new URL(e).origin.includes("cloudimg")) return e;
  } catch {
  }
  const o = e.startsWith("/") ? e.slice(1) : e;
  return `https://${t}.cloudimg.io/${i}${o}`;
}, Ie = (e, t) => e ? `ar=${e}&gravity=${t || "auto"}` : "", ro = ({ ciTransformation: e, responsiveWidth: t, ciFilters: i }) => {
  const o = `width=${t}`, s = e || o, n = i ? `&f=${i}` : "";
  return `${s}${n}`;
}, et = (e, t) => {
  const { folder: i, apiVersion: o, filename: s = "", ciParams: n } = e, { ciToken: r, ciFilters: a, ciTransformation: l, cropAspectRatio: h, cropGravity: c } = n || {}, p = `${i}${s}`;
  if (!r || !t) {
    const C = Ie(h, c);
    if (!C) return p;
    const y = p.includes("?") ? "&" : "?";
    return `${p}${y}${C}`;
  }
  const m = Vi.includes(o) ? null : o, u = m ? `${m}/` : "", I = so(t), g = no(p, r, u), v = ro({
    ciTransformation: l,
    responsiveWidth: I,
    ciFilters: a
  }), b = Ie(h, c), k = [v, b].filter(Boolean).join("&");
  return `${g}${k ? "?" : ""}${k}`;
}, Ut = (e, t = 0) => (e += "", e.length >= t ? e : new Array(t - e.length + 1).join("0") + e), ao = (e, { amount: t = 0, indexZeroBase: i = 0 } = {}) => Array.from({ length: t }, (o, s) => e.replace("{index}", Ut(s + 1, i))), lo = (e, { amountX: t = 0, amountY: i = 0, indexZeroBase: o = 0 } = {}) => {
  const s = [];
  for (let n = 0; n < i; n++)
    for (let r = 0; r < t; r++)
      s.push(
        e.replace("{indexX}", Ut(r + 1, o)).replace("{indexY}", Ut(n + 1, o))
      );
  return s;
}, ho = typeof navigator < "u" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), co = ho ? 3 : 6, qe = ({
  imagesUrls: e,
  onFirstImageLoad: t,
  onImageLoad: i,
  onAllImagesLoad: o,
  onError: s,
  autoplayReverse: n
}) => {
  let r = 0, a = 0;
  const l = e.length, h = [], c = [];
  let p = 0, m = 0;
  const u = [], I = (f, w, x = !1) => {
    const P = {
      message: `Failed to load image: ${f}`,
      url: f,
      index: w,
      isFirstImage: x
    };
    c.push(P), a++, s == null || s({
      error: P,
      errorCount: a,
      totalImages: l,
      errors: c
    });
  }, g = () => {
    r === l && (o == null || o(h, { errorCount: a, errors: c }));
  }, v = () => {
    for (; p < co && m < u.length; ) {
      const f = u[m];
      m++, b(e[f], f);
    }
  }, b = (f, w) => {
    p++;
    const x = new Image();
    x.crossOrigin = "anonymous", x.src = f, x.onload = async () => {
      try {
        const P = await createImageBitmap(x), A = {
          src: f,
          bitmapImage: P,
          naturalWidth: x.naturalWidth,
          naturalHeight: x.naturalHeight
        };
        x.onload = null, x.onerror = null, x.src = "", r++, p--, h[w] = A, i == null || i(A, w), g(), v();
      } catch {
        x.onload = null, x.onerror = null, x.src = "", r++, p--, I(f, w), g(), v();
      }
    }, x.onerror = () => {
      x.onload = null, x.onerror = null, x.src = "", r++, p--, I(f, w), g(), v();
    };
  }, k = (f) => {
    for (let w = 0; w < e.length; w++)
      w !== f && u.push(w);
    m = 0, v();
  }, C = new Image(), y = n ? e.length - 1 : 0, E = e[y];
  C.crossOrigin = "anonymous", C.src = E, C.onload = async () => {
    try {
      const f = await createImageBitmap(C), w = {
        src: E,
        bitmapImage: f,
        naturalWidth: C.naturalWidth,
        naturalHeight: C.naturalHeight
      };
      C.onload = null, C.onerror = null, C.src = "", h[y] = w, r++, t == null || t(w), i == null || i(w, y), l === 1 ? g() : k(y);
    } catch {
      C.onload = null, C.onerror = null, C.src = "", r++, I(E, y, !0), l === 1 ? g() : k(y);
    }
  }, C.onerror = () => {
    C.onload = null, C.onerror = null, C.src = "", r++, I(E, y, !0), l === 1 ? g() : k(y);
  };
}, xe = ({
  cdnPathX: e,
  cdnPathY: t,
  configX: i,
  configY: o,
  onFirstImageLoad: s,
  onImageLoad: n,
  onAllImagesLoad: r,
  onError: a
}) => {
  let l = { x: !1, y: !1 }, h = [], c = [], p = { errorCount: 0, errors: [] }, m = { errorCount: 0, errors: [] };
  const u = e || i.imageList.length, I = t || o.imageList.length, g = () => {
    if (l.x && l.y) {
      const b = {
        errorCount: p.errorCount + m.errorCount,
        errors: [...p.errors, ...m.errors]
      };
      r == null || r(h, c, b);
    }
  }, v = ({ cdnPath: b, config: k, orientation: C, loadedImages: y, loadStats: E, onFirstImageLoad: f }) => {
    const w = C === O.X, x = k.imageList.length ? k.imageList : ao(b, k);
    qe({
      imagesUrls: x,
      onFirstImageLoad: f,
      onImageLoad: (P, A) => {
        n == null || n(P, A, C), y[A] = P;
      },
      onError: (P) => {
        a == null || a({ ...P, orientation: C });
      },
      onAllImagesLoad: (P, A) => {
        y.length = 0, P.forEach((S, M) => {
          S && (y[M] = S);
        }), E.errorCount = A.errorCount, E.errors = A.errors.map((S) => ({ ...S, orientation: C })), l[w ? "x" : "y"] = !0, g();
      },
      autoplayReverse: k.autoplayReverse
    });
  };
  u ? v({
    cdnPath: e,
    config: i,
    orientation: O.X,
    loadedImages: h,
    loadStats: p,
    onFirstImageLoad: s
  }) : l.x = !0, I ? v({
    cdnPath: t,
    config: o,
    orientation: O.Y,
    loadedImages: c,
    loadStats: m,
    onFirstImageLoad: u ? void 0 : s
  }) : l.y = !0, !u && !I && g();
}, ke = ({
  cdnPath: e,
  config: t,
  onFirstImageLoad: i,
  onImageLoad: o,
  onAllImagesLoad: s,
  onError: n
}) => {
  const r = t.imageList && t.imageList.length ? t.imageList : lo(e, t);
  qe({
    imagesUrls: r,
    onFirstImageLoad: i,
    onImageLoad: (a, l) => {
      o == null || o(a, l);
    },
    onAllImagesLoad: (a, l) => {
      s == null || s(a, l);
    },
    onError: (a) => {
      n == null || n(a);
    },
    autoplayReverse: t.autoplayReverse
  });
}, uo = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1052 156" aria-hidden="true">
  <path fill="currentColor" d="M409.9,145.6c-42.7-1.7-85.5-4.4-128.1-8.4c-21.3-2-42.6-4.3-63.8-7.1c-21.2-2.8-42.4-5.9-63.4-9.7c-21.1-3.8-42-8.2-62.7-13.7c-10.3-2.8-20.6-5.8-30.7-9.4c-10.1-3.5-20.1-7.6-29.5-12.7c-4.7-2.6-9.3-5.4-13.5-8.8c-2.1-1.7-4-3.6-5.8-5.6c-1.8-2-3.3-4.3-4.3-6.8c-1.1-2.5-1.6-5.3-1.4-8c0.2-2.7,1.1-5.4,2.4-7.7c2.7-4.8,6.7-8.5,11-11.7c8.6-6.4,18.4-10.9,28.3-15c9.9-4,20.1-7.3,30.4-10.3c-10.2,3.1-20.4,6.5-30.3,10.5c-9.8,4.1-19.6,8.7-28.1,15.1c-4.2,3.2-8.2,6.9-10.7,11.6c-1.2,2.3-2.1,4.8-2.3,7.5c-0.1,2.6,0.4,5.2,1.4,7.6c2.1,4.8,5.9,8.7,10,12.1c4.1,3.3,8.7,6.1,13.4,8.6c9.4,5,19.4,8.9,29.4,12.4c10.1,3.5,20.4,6.4,30.7,9.1c20.7,5.3,41.6,9.5,62.7,13.2c21,3.6,42.2,6.6,63.4,9.2c21.2,2.6,42.5,4.8,63.7,6.6c42.6,3.7,85.2,6,127.9,7.4L409.9,145.6z"/>
  <path fill="currentColor" d="M977.1,11.6c13.8,4.1,27.4,8.8,40.4,15.2c6.4,3.2,12.7,6.9,18.3,11.5c2.7,2.4,5.3,5,7.3,8c2,3,3.3,6.6,3.3,10.3c0,3.7-1.4,7.2-3.3,10.3c-2,3.1-4.5,5.7-7.3,8.1c-2.7,2.4-5.7,4.4-8.8,6.3c-1.6,0.9-3.1,1.9-4.7,2.7l-2.4,1.3l-2.4,1.2C1004.5,93,990.8,97.8,977,102c-6.9,2.1-13.8,4-20.8,5.8c-7,1.8-14,3.5-21,5c-14.1,3.1-28.2,5.9-42.4,8.3c-28.4,4.9-57,8.8-85.6,12c-57.3,6.4-114.8,10.2-172.4,12.2c-57.6,2-115.2,2.3-172.9,0.8l0.1-4c57.5,1.8,115.1,1.9,172.6,0.2c57.5-1.7,115-5.2,172.3-11.2c28.6-3.1,57.2-6.7,85.6-11.5c14.2-2.4,28.3-5,42.4-8.1c7-1.5,14-3.1,21-4.9c7-1.7,13.9-3.6,20.8-5.7c13.8-4.1,27.4-8.8,40.3-15.2l2.4-1.2l2.4-1.3c1.6-0.8,3.1-1.8,4.7-2.7c3-1.9,6-3.9,8.7-6.2c2.7-2.3,5.2-4.9,7.2-7.9c1.9-3,3.2-6.4,3.3-10c0-3.6-1.2-7-3.1-10c-1.9-3-4.4-5.6-7.1-8c-5.5-4.7-11.7-8.3-18.1-11.6C1004.5,20.6,990.8,15.8,977.1,11.6z"/>
  <g transform="translate(415, 136)">
    <path fill="currentColor" d="M18.1,11.2c-1.8,0-2.8-1.2-2.8-3V8c0.8-0.4,1.7-0.6,2.8-0.6c1.5,0,2.5,0.6,2.5,1.7C20.6,10.2,19.8,11.2,18.1,11.2L18.1,11.2z M18.3,5.7c-1.1,0-2,0.3-2.8,0.7c0.3-1.6,1.5-2.6,3.7-2.6c1.1,0,2.3,0.3,3.1,0.5V2.6c-0.8-0.3-1.9-0.5-3.1-0.5c-4.2,0-6.2,2.1-6.2,5.8c0,3.2,1.8,4.9,5.1,4.9c3.3,0,5-1.7,5-3.6C23,7,21.3,5.7,18.3,5.7L18.3,5.7z"/>
    <path fill="currentColor" d="M39.3,1.8c0.9,0,1.6,0.7,1.6,1.5c0,0.8-0.7,1.6-1.6,1.6c-0.8,0-1.6-0.7-1.6-1.6C37.8,2.5,38.5,1.8,39.3,1.8L39.3,1.8z M39.3,6.3c1.7,0,3.1-1.3,3.1-3c0-1.6-1.4-3-3.1-3c-1.7,0-3.1,1.3-3.1,3C36.2,5,37.6,6.3,39.3,6.3L39.3,6.3z"/>
    <path fill="currentColor" d="M30.3,3.8c2.1,0,2.9,1.4,2.9,3.6c0,2.2-0.8,3.6-2.9,3.6c-2.1,0-2.9-1.5-2.9-3.6C27.4,5.3,28.1,3.8,30.3,3.8L30.3,3.8z M30.2,12.8c3.9,0,5.2-2.6,5.2-5.4c0-2.8-1.3-5.3-5.2-5.3c-3.9,0-5.3,2.6-5.3,5.4C25,10.3,26.3,12.8,30.2,12.8L30.2,12.8z"/>
    <path fill="currentColor" d="M10.9,9.7c0-1.1-0.8-2-2.5-2.5c1.3-0.5,1.9-1.3,1.9-2.3c0-1.7-1.7-2.8-4.6-2.8c-1.5,0-2.7,0.3-3.6,0.8v1.7c0.9-0.4,2.3-0.7,3.4-0.7C7,3.9,8,4.4,8,5.1c0,0.8-0.7,1.3-2.4,1.3H4.3v1.6h1.3c2,0,2.9,0.8,2.9,1.6c0,0.8-1,1.5-2.8,1.5c-1.5,0-2.8-0.3-3.7-0.6v1.7c0.9,0.3,2.1,0.6,3.8,0.6C9.2,12.8,10.9,11.4,10.9,9.7"/>
  </g>
</svg>
`, po = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = uo, t.style.bottom = `${e}%`, t.className = "cloudimage-360-view-360-circle", t;
}, mo = `
<svg width="150" height="87" viewBox="0 0 150 87" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_751_188)">
    <g filter="url(#filter0_d_751_188)">
    <path d="M112.566 15.2227C112.598 15.706 112.529 16.1906 112.364 16.6458C112.198 17.101 111.94 17.5167 111.605 17.8665C111.27 18.2163 110.866 18.4925 110.418 18.6775C109.971 18.8626 109.489 18.9524 109.005 18.9412C108.532 18.955 108.06 18.871 107.621 18.6944C107.181 18.5178 106.782 18.2524 106.45 17.9148C106.117 17.5772 105.858 17.1747 105.688 16.7323C105.518 16.29 105.442 15.8174 105.463 15.344C105.437 14.8591 105.511 14.374 105.68 13.9188C105.849 13.4635 106.109 13.0477 106.445 12.697C106.781 12.3463 107.186 12.0681 107.633 11.8797C108.081 11.6912 108.562 11.5965 109.048 11.6013C111.213 11.5952 112.566 13.1299 112.566 15.2227ZM106.961 15.2895C106.961 16.7574 107.913 17.825 109.03 17.825C110.146 17.825 111.08 16.8059 111.08 15.2652C111.08 14.1551 110.473 12.7053 109.005 12.7053C107.537 12.7053 106.961 14.0884 106.961 15.2895Z" fill="currentColor"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M110.164 12.3811C110.552 12.5859 110.861 12.8886 111.093 13.2348C111.506 13.8535 111.681 14.6156 111.681 15.2652C111.681 16.5122 111.13 17.5742 110.261 18.0908C110.603 17.9385 110.912 17.7212 111.171 17.4507C111.448 17.1612 111.662 16.8172 111.799 16.4404C111.936 16.0637 111.993 15.6626 111.966 15.2626L111.965 15.2427V15.2227C111.965 14.3058 111.67 13.5543 111.182 13.0378C110.913 12.7532 110.573 12.5262 110.164 12.3811ZM108.002 18.1944C107.011 17.7212 106.36 16.5793 106.36 15.2895C106.36 14.6064 106.522 13.8357 106.931 13.2157C107.06 13.021 107.212 12.8427 107.389 12.6885C107.204 12.81 107.033 12.9523 106.88 13.1128C106.6 13.4042 106.384 13.7497 106.244 14.128C106.103 14.5062 106.042 14.9093 106.063 15.3122L106.065 15.3415L106.063 15.3708C106.046 15.7615 106.109 16.1517 106.25 16.5168C106.39 16.882 106.604 17.2143 106.878 17.493C107.153 17.7717 107.482 17.9908 107.845 18.1366C107.897 18.1574 107.949 18.1767 108.002 18.1944ZM109.05 11.0002C108.483 10.9951 107.922 11.1058 107.4 11.3256C106.877 11.5459 106.404 11.8711 106.011 12.2811C105.619 12.6912 105.314 13.1773 105.116 13.7096C104.922 14.2327 104.835 14.7894 104.861 15.3466C104.841 15.8928 104.931 16.4375 105.127 16.9478C105.327 17.4673 105.631 17.9401 106.022 18.3366C106.412 18.7331 106.88 19.0448 107.397 19.2522C107.908 19.4577 108.456 19.5564 109.007 19.5425C109.569 19.5533 110.128 19.448 110.648 19.2331C111.173 19.0162 111.646 18.6924 112.039 18.2823C112.432 17.8722 112.735 17.3848 112.929 16.8512C113.121 16.3239 113.202 15.7628 113.167 15.203C113.163 14.035 112.782 12.9803 112.056 12.2121C111.323 11.4362 110.28 10.9976 109.05 11.0002ZM107.934 13.8783C107.689 14.2501 107.562 14.7714 107.562 15.2895C107.562 16.5291 108.34 17.2239 109.03 17.2239C109.716 17.2239 110.479 16.5808 110.479 15.2652C110.479 14.8047 110.35 14.2869 110.093 13.9031C109.851 13.5403 109.507 13.3065 109.005 13.3065C108.495 13.3065 108.163 13.5319 107.934 13.8783Z" fill="currentColor"/>
    <path d="M94.3617 40.718H95.5396C99.9046 40.718 103.369 37.1844 103.369 32.8193V19.5164C103.369 15.1514 99.8353 11.6871 95.5396 11.6871H94.3617C89.9967 11.6871 86.5324 15.2207 86.5324 19.5164V32.8193C86.4631 37.1844 90.0659 40.718 94.3617 40.718ZM91.1052 19.5164C91.1052 17.715 92.5602 16.26 94.3617 16.26H95.5396C97.341 16.26 98.796 17.715 98.796 19.5164V32.8193C98.796 34.6208 97.341 36.0758 95.5396 36.0758H94.3617C92.5602 36.0758 91.1052 34.6208 91.1052 32.8193V19.5164Z" fill="currentColor"/>
    <path d="M74.6152 40.7179C79.2574 40.7179 82.9988 36.9765 82.9988 32.3343C82.9988 27.6922 79.2574 23.9507 74.6152 23.9507C73.9916 23.9507 73.2988 24.02 72.7445 24.1586C73.9223 21.4564 75.7931 18.685 78.7724 16.4678C79.8117 15.7749 80.0195 14.3199 79.2574 13.2806C78.5645 12.2413 77.1095 12.0335 76.0702 12.7956C67.8944 18.8928 66.578 28.0386 66.3701 31.2258C66.3701 31.2258 66.3701 31.2257 66.3701 31.295C66.3009 31.6415 66.3009 31.9879 66.3009 32.4036C66.2316 36.9072 70.0423 40.7179 74.6152 40.7179ZM74.6152 28.4543C76.6938 28.4543 78.3566 30.1865 78.3566 32.1958C78.3566 34.2051 76.6245 35.9372 74.6152 35.9372C72.6752 35.9372 71.0123 34.3436 70.8737 32.4729C70.8737 32.4036 70.943 32.265 70.943 32.1265C70.943 32.1265 70.943 31.9186 71.0123 31.5722C71.2202 29.84 72.8138 28.4543 74.6152 28.4543Z" fill="currentColor"/>
    <path d="M54.3143 36.0758C52.2358 36.0758 50.5729 34.3436 50.5729 32.3343C50.5729 31.0179 49.5336 30.0479 48.2864 30.0479C46.97 30.0479 46 31.0872 46 32.3343C46 36.9765 49.7414 40.718 54.3836 40.718C59.0258 40.718 62.7672 36.9765 62.7672 32.1958C62.7672 29.84 61.7279 27.6229 60.0651 26.0986C61.7279 24.505 62.7672 22.4264 62.7672 20.0014C62.7672 15.3592 59.0258 11.6178 54.3836 11.6178C49.7414 11.6178 46 15.3592 46 20.0014C46 21.3178 47.0393 22.2879 48.2864 22.2879C49.6029 22.2879 50.5729 21.2486 50.5729 20.0014C50.5729 17.9228 52.305 16.26 54.3143 16.26C56.3236 16.26 58.0558 17.9921 58.0558 20.0014C58.0558 22.0107 56.3236 23.7429 54.3143 23.7429C52.9979 23.7429 52.0279 24.7822 52.0279 26.0293C52.0279 27.3458 53.0672 28.3157 54.3143 28.3157C56.3929 28.3157 58.0558 30.0479 58.0558 32.0572C58.1251 34.3436 56.4622 36.0758 54.3143 36.0758Z" fill="currentColor"/>
    </g>
    <g filter="url(#filter1_d_751_188)">
    <path d="M26.8762 25.5149C27.5172 25.2883 28.1927 25.7659 28.1927 26.4458V33.5925C28.1927 34.0014 27.9493 34.3677 27.5768 34.5364C23.692 36.2966 3.80303 46.5259 37.3945 58.1537C37.3945 58.1537 57.0291 63.5205 76.923 63.6974C77.4752 63.7023 77.9231 63.2541 77.9231 62.7018V57.8317C77.9231 57.0995 78.6841 56.6156 79.3472 56.9261L103.851 68.4011C104.598 68.7507 104.624 69.8027 103.897 70.1897L79.3926 83.2187C78.7265 83.5728 77.9231 83.0901 77.9231 82.3357V75.7982C77.9231 75.2459 77.5039 74.797 76.9517 74.7892C68.3815 74.6673 6 72.8926 6 47.0574C6 47.0574 6 32.8966 26.8762 25.5149Z" fill="currentColor"/>
    <path d="M111.768 58.2062C110.979 57.639 111.335 56.0078 112.271 55.7479C118.431 54.037 131.443 49.0118 131.443 41.6445C131.443 34.2279 126.608 31.5583 124.732 30.8016C124.308 30.6306 124 30.2281 124 29.7708V26.2189C124 25.5882 124.573 25.1253 125.18 25.2967C129.233 26.4408 142.336 31.2278 142.336 45.2982C142.336 45.2982 142.336 58.9459 122.524 65.4395C122.224 65.5379 121.887 65.4876 121.63 65.3031L111.768 58.2062Z" fill="currentColor"/>
    </g>
    </g>
    <defs>
    <filter id="filter0_d_751_188" x="38" y="3" width="83.1749" height="45.718" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="4"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.133333 0 0 0 0 0.145098 0 0 0 0 0.160784 0 0 0 0.4 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_751_188"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_751_188" result="shape"/>
    </filter>
    <filter id="filter1_d_751_188" x="4" y="25.2607" width="140.336" height="63.0764" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="3"/>
    <feGaussianBlur stdDeviation="1"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.301961 0 0 0 0 0.360784 0 0 0 0 0.454902 0 0 0 0.4 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_751_188"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_751_188" result="shape"/>
    </filter>
    <clipPath id="clip0_751_188">
    <rect width="150" height="87" fill="white"/>
    </clipPath>
    </defs>
</svg>
`, Je = (e) => {
  const t = document.createElement("div");
  return t.className = "cloudimage-initial-icon", t.setAttribute("aria-label", "360 degree view - drag to rotate"), e ? (t.style.backgroundImage = `url('${e}')`, t.style.backgroundPosition = "50% 50%", t.style.backgroundSize = "contain", t.style.backgroundRepeat = "no-repeat") : t.innerHTML = mo, t;
}, fo = (e) => {
  const t = document.createElement("div");
  t.className = "cloudimage-360-click-overlay";
  const i = Je(e);
  i.classList.add("cloudimage-360-click-overlay-icon");
  const o = document.createElement("span");
  return o.className = "cloudimage-360-click-overlay-label", o.textContent = "Click to load 360° view", t.appendChild(i), t.appendChild(o), t;
}, go = (e, t) => {
  const { width: i, height: o } = t, s = document.createElement("canvas");
  return s.width = i, s.height = o, s.style.width = "100%", s.style.height = "auto", e.appendChild(s), s;
}, Qe = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/></svg>', vo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" x2="21" y1="10" y2="3"/><line x1="3" x2="10" y1="21" y2="14"/></svg>', yo = () => {
  const e = document.createElement("button");
  return e.className = "cloudimage-360-button cloudimage-360-fullscreen-button", e.setAttribute("aria-label", "View fullscreen"), e.setAttribute("type", "button"), e.innerHTML = Qe, e;
}, bo = (e, t) => {
  e && (e.innerHTML = t ? vo : Qe, e.setAttribute("aria-label", t ? "Exit fullscreen" : "View fullscreen"));
}, Ee = (e) => {
  const t = document.createElement("div");
  return t.className = "cloudimage-360-icons-container", e.appendChild(t), t;
}, wo = (e) => {
  const t = document.createElement("div");
  return t.className = "cloudimage-360-inner-box", t.setAttribute("role", "img"), t.setAttribute("aria-label", "360 degree product view. Use mouse drag or arrow keys to rotate."), e.appendChild(t), t;
}, Co = (e) => {
  const t = document.createElement("div");
  t.className = "cloudimage-360-loader";
  const i = document.createElement("span");
  return i.className = "percentage", i.innerText = "0%", t.appendChild(i), e.appendChild(t), t;
}, Pt = (e, t) => {
  const i = e.querySelector(t);
  i && i.parentNode.removeChild(i);
}, Io = () => {
  const e = document.createElement("div");
  return e.className = "cloudimage-loading-spinner", e;
}, xo = (e) => {
  const t = document.createElement("div");
  return t.className = "cloudimage-360-hotspot-container", e.appendChild(t), t;
}, ko = (e) => {
  const t = document.createElement("div");
  return t.className = "cloudimage-360-sr-only", t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), e.appendChild(t), t;
}, Eo = (e, t) => {
  e && (e.textContent = "", setTimeout(() => {
    e.textContent = t;
  }, 50));
}, ti = {
  drag: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>',
  swipe: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="M8 12h8"/></svg>',
  click: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 9 5 12 1.8-5.2L21 14Z"/><path d="M7.2 2.2 8 5.1"/><path d="m5.1 8-2.9-.8"/><path d="M14 4.1 12 6"/><path d="m6 12-1.9 2"/></svg>',
  dblclick: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 9 5 12 1.8-5.2L21 14Z"/><path d="M7.2 2.2 8 5.1"/><path d="m5.1 8-2.9-.8"/><path d="M14 4.1 12 6"/><path d="m6 12-1.9 2"/><text x="1" y="22" font-size="8" font-weight="bold" fill="currentColor" stroke="none" font-family="sans-serif">2×</text></svg>',
  pinch: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6l4 4"/><path d="M18 6l-4 4"/><path d="M6 18l4-4"/><path d="M18 18l-4-4"/><circle cx="12" cy="12" r="2"/></svg>',
  keys: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m9 10 3 3 3-3"/></svg>',
  fullscreen: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/></svg>'
}, Po = {
  drag: "Drag to rotate",
  swipe: "Swipe to rotate",
  click: "Click to zoom",
  dblclick: "Double-click to zoom",
  pinch: "Pinch to zoom",
  keys: "Use arrow keys",
  fullscreen: "Click for fullscreen"
}, To = (e) => {
  const t = document.createElement("div");
  t.className = "cloudimage-360-hint-item";
  const i = Po[e];
  return t.innerHTML = `
    ${ti[e]}
    <span>${i}</span>
  `, t;
}, Pe = (e, t = []) => {
  if (!t || t.length === 0) return null;
  const i = document.createElement("div");
  i.className = "cloudimage-360-hints-overlay", i.setAttribute("role", "tooltip"), i.setAttribute("aria-label", "Interaction hints");
  const o = document.createElement("div");
  return o.className = "cloudimage-360-hints-container", t.forEach((s) => {
    ti[s] && o.appendChild(To(s));
  }), i.appendChild(o), e.appendChild(i), i;
}, Te = (e, t) => t ? ["swipe", "pinch"] : ["drag", "dblclick"], Ae = (e) => {
  e && e.classList.add("visible");
}, Ao = (e) => {
  e && (e.classList.remove("visible"), e.classList.add("hiding"), setTimeout(() => {
    e.classList.remove("hiding");
  }, 300));
}, So = (e) => {
  if (!e || typeof e != "object") return null;
  const t = Object.keys(e).map((o) => parseInt(o, 10)).filter((o) => !isNaN(o)).sort((o, s) => o - s);
  if (t.length === 0) return null;
  const i = Math.floor(t.length / 2);
  return t[i];
}, Xo = (e) => {
  const t = [];
  return !e || !Array.isArray(e) || e.forEach((i, o) => {
    const s = So(i.positions);
    s !== null && t.push({
      id: i.id || `hotspot-${o}`,
      frame: s,
      label: i.label || null
    });
  }), t;
}, Lo = 400, Oo = (e, t, i, o) => {
  const s = document.createElement("button");
  s.className = "cloudimage-360-hotspot-timeline-dot", s.setAttribute("type", "button"), s.setAttribute("aria-label", o || `Go to hotspot at frame ${t + 1}`), s.setAttribute("data-frame", t.toString()), s.setAttribute("data-hotspot-id", e);
  const n = i > 1 ? t / (i - 1) * 100 : 0;
  if (s.style.left = `${n}%`, o) {
    const r = document.createElement("span");
    r.className = "cloudimage-360-hotspot-timeline-tooltip", r.textContent = o, s.appendChild(r);
    let a = null;
    s.addEventListener("mouseenter", () => {
      a = setTimeout(() => {
        r.classList.add("visible");
      }, Lo);
    }), s.addEventListener("mouseleave", () => {
      a && (clearTimeout(a), a = null), r.classList.remove("visible");
    }), s.addEventListener("click", () => {
      a && (clearTimeout(a), a = null), r.classList.remove("visible");
    });
  }
  return s;
}, Yo = (e, t, i) => {
  const o = Xo(i);
  if (o.length === 0) return null;
  const s = document.createElement("div");
  s.className = "cloudimage-360-hotspot-timeline", s.setAttribute("role", "navigation"), s.setAttribute("aria-label", "Hotspot timeline navigation");
  const n = document.createElement("div");
  n.className = "cloudimage-360-hotspot-timeline-track";
  const r = document.createElement("div");
  return r.className = "cloudimage-360-hotspot-timeline-indicator", o.forEach(({ id: a, frame: l, label: h }) => {
    const c = Oo(a, l, t, h);
    n.appendChild(c);
  }), n.appendChild(r), s.appendChild(n), e.appendChild(s), {
    element: s,
    indicator: r,
    hotspotFrames: o
  };
}, Se = (e, t, i) => {
  if (!e) return;
  const o = i > 1 ? t / (i - 1) * 100 : 0;
  e.style.left = `${o}%`;
}, Mo = (e) => {
  e && e.classList.add("visible");
}, Ho = (e) => {
  e && e.classList.remove("visible");
}, Wt = (e, t = []) => {
  if (!e) return t;
  if (Array.isArray(e)) return e;
  try {
    return JSON.parse(e);
  } catch (i) {
    return console.warn("CloudImage 360: Failed to parse JSON:", i.message), t;
  }
}, Ro = (e, t) => {
  const [i, o] = e.split("?");
  if (!o) return e;
  const s = new RegExp(`^${t}=|&${t}=`), n = o.split("&").filter((r) => !s.test(r)).join("&");
  return n ? `${i}?${n}` : i;
}, zo = (e) => {
  const t = Ro(e, "width"), i = t.includes("?") ? "&" : "?";
  return `${t}${i}width=${150 * devicePixelRatio}`;
}, Zo = (e) => {
  const t = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  }, i = (s) => {
    const n = s.getAttribute("data-src");
    n && (s.src = n);
  };
  new IntersectionObserver((s, n) => {
    s.forEach((r) => {
      r.isIntersecting && (i(r.target), n.unobserve(r.target));
    });
  }, t).observe(e);
}, ei = (e, t) => {
  const i = Ut(1, t);
  return e.replace("{index}", i).replace("{indexX}", i).replace("{indexY}", i);
}, Do = (e, t) => {
  const [i] = e, o = /(https?):\/\//i.test(i);
  return et({
    ...t,
    folder: o ? "" : t.folder,
    filename: i
  });
}, Bo = (e, t) => {
  const { imageList: i, indexZeroBase: o } = t;
  if (i.length) {
    const s = Wt(i, null);
    if (s)
      return Do(s, t);
  }
  return ei(e, o);
}, Xe = (e, t, i) => {
  const o = new Image();
  return o.setAttribute(t ? "data-src" : "src", e), o.className = i, o.style.cssText = `
    position: ${t ? "absolute" : "static"};
    width: 100%;
    inset: 0;
    height: 100%;
    object-fit: contain;
    object-position: center;
    filter: blur(10px);
  `, o;
}, oe = (e, t, i) => {
  const { innerBox: o, imageList: s, lazyload: n } = t || {}, [r] = s, a = r || Bo(e, t), l = zo(a), h = Xe(l, n, "cloudimage-lazy"), c = Xe(l, !1, "cloudimage-360-placeholder"), p = (m) => {
    Pt(o, ".cloudimage-lazy"), i && i({
      event: m,
      width: h.width,
      height: h.height,
      naturalWidth: h.naturalWidth,
      naturalHeight: h.naturalHeight,
      src: l
    });
  };
  h.onload = p, o.appendChild(h), o.appendChild(c), Zo(h);
}, Go = (e, t, i) => {
  const o = e / i, s = t / i;
  return { zoomedWidth: o, zoomedHeight: s };
}, _o = ({
  pointerX: e,
  pointerY: t,
  imageData: i,
  zoomedWidth: o,
  zoomedHeight: s,
  drawWidth: n,
  drawHeight: r
}) => {
  const { naturalWidth: a, naturalHeight: l } = i;
  let h = e / n * a - o / 2, c = t / r * l - s / 2;
  const p = Math.max(0, a - o), m = Math.max(0, l - s);
  return h = Math.max(0, Math.min(h, p)), c = Math.max(0, Math.min(c, m)), { zoomOffsetX: h, zoomOffsetY: c };
}, Le = (e, { bottom: t, top: i }) => {
  e ? t() : i();
}, Oe = (e, { left: t, right: i }) => {
  e ? t() : i();
}, Fo = ({ autoplayBehavior: e, spinY: t, reversed: i, loopTriggers: o }) => {
  switch (e) {
    case L.SPIN_XY:
    case L.SPIN_YX:
      t ? Le(i, o) : Oe(i, o);
      break;
    case L.SPIN_Y:
      Le(i, o);
      break;
    case L.SPIN_X:
    default:
      Oe(i, o);
  }
}, No = ({
  autoplayBehavior: e,
  activeImageX: t,
  activeImageY: i,
  amountX: o,
  amountY: s,
  autoplayReverse: n,
  isGridMode: r = !1
}) => {
  const a = (l, h) => {
    const c = h - 1;
    return n ? l === 0 : l === c;
  };
  if (r)
    switch (e) {
      case L.SPIN_X:
        return a(t, o);
      case L.SPIN_Y:
        return a(i, s);
      case L.SPIN_XY:
      case L.SPIN_YX:
      default:
        return a(t, o) && a(i, s);
    }
  switch (e) {
    case L.SPIN_XY:
    case L.SPIN_Y:
      return a(i, s);
    case L.SPIN_X:
    case L.SPIN_YX:
    default:
      return a(t, o);
  }
}, Wo = ({
  autoplayBehavior: e,
  activeImageX: t,
  activeImageY: i,
  amountX: o,
  amountY: s,
  autoplayReverse: n,
  spinDirection: r,
  isGridMode: a = !1
}) => {
  if (a) return !1;
  const l = t === (n ? 0 : o - 1), h = i === (n ? 0 : s - 1);
  return e === L.SPIN_XY || e === L.SPIN_YX ? r === "x" && l || r === "y" && h : !1;
}, Vo = (e, t, i) => {
  if (!i) return "x";
  if (!t) return "y";
  switch (e) {
    case L.SPIN_XY:
      return "x";
    case L.SPIN_YX:
      return "y";
    case L.SPIN_Y:
      return "y";
    case L.SPIN_X:
    default:
      return "x";
  }
}, jo = (e) => e === "x" ? "y" : "x", Ye = (e, t) => {
  const i = [...ji];
  return t ? [...i, ...Ui].includes(e) : i.includes(e);
}, Me = ({ deltaX: e, deltaY: t, reversed: i, allowSpinX: o, allowSpinY: s, threshold: n = 0 }) => {
  const r = o && !s || s && !o ? 0 : n, a = Math.abs(e), l = Math.abs(t);
  return o && a - r > l ? i ? e > 0 ? "left" : "right" : e > 0 ? "right" : "left" : s && l - r > a ? i ? t > 0 ? "up" : "down" : t > 0 ? "down" : "up" : null;
}, Uo = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, $o = (e, t = 150) => {
  let i;
  return function(...o) {
    clearTimeout(i), i = setTimeout(() => {
      e.apply(this, o);
    }, t);
  };
}, Ko = () => document.fullscreenEnabled || document.webkitFullscreenEnabled, se = () => document.fullscreenElement || document.webkitFullscreenElement, qo = (e) => e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : Promise.reject(new Error("Fullscreen API not supported")), He = () => document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : Promise.reject(new Error("Fullscreen API not supported")), F = 1;
class Jo {
  constructor(t, {
    zoomMax: i = 5,
    zoomStep: o = 0.5,
    onZoomChange: s
  } = {}) {
    this.container = t, this.zoomMax = i, this.zoomStep = o, this.onZoomChange = s, this.zoom = 1, this.panX = 0, this.panY = 0, this.drawWidth = 0, this.drawHeight = 0, this.isPanning = !1, this.panStartX = 0, this.panStartY = 0, this._onWheel = this._onWheel.bind(this), this._onDblClick = this._onDblClick.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this._onMouseUp = this._onMouseUp.bind(this), this._onGestureStart = this._onGestureStart.bind(this), this._onGestureChange = this._onGestureChange.bind(this), this._onGestureEnd = this._onGestureEnd.bind(this), this._gestureBaseZoom = 1, this._attach();
  }
  setDrawSize(t, i, o = !1) {
    const s = this.drawWidth, n = this.drawHeight;
    this.drawWidth = t, this.drawHeight = i, o && s && n ? (this.panX = this.panX / s * t, this.panY = this.panY / n * i, this._clampPan()) : (this.panX = t / 2, this.panY = i / 2);
  }
  _attach() {
    this.container.addEventListener("wheel", this._onWheel, { passive: !1 }), this.container.addEventListener("dblclick", this._onDblClick), typeof GestureEvent < "u" && (this.container.addEventListener("gesturestart", this._onGestureStart), this.container.addEventListener("gesturechange", this._onGestureChange), this.container.addEventListener("gestureend", this._onGestureEnd));
  }
  destroy() {
    this.container.removeEventListener("wheel", this._onWheel), this.container.removeEventListener("dblclick", this._onDblClick), this._stopPanListeners(), typeof GestureEvent < "u" && (this.container.removeEventListener("gesturestart", this._onGestureStart), this.container.removeEventListener("gesturechange", this._onGestureChange), this.container.removeEventListener("gestureend", this._onGestureEnd));
  }
  // --- Public API ---
  zoomIn() {
    this._applyZoom(this.zoom + this.zoomStep);
  }
  zoomOut() {
    this._applyZoom(this.zoom - this.zoomStep);
  }
  resetZoom() {
    this._applyZoom(F);
  }
  setZoom(t) {
    this._applyZoom(t);
  }
  zoomTowardPoint(t, i, o) {
    this._zoomTowardPoint(t, i, o);
  }
  getZoom() {
    return this.zoom;
  }
  isZoomed() {
    return this.zoom > F;
  }
  // --- Mouse pan management ---
  startPan(t, i) {
    return this.zoom <= F ? !1 : (this.isPanning = !0, this.panStartX = t, this.panStartY = i, document.addEventListener("mousemove", this._onMouseMove), document.addEventListener("mouseup", this._onMouseUp), !0);
  }
  _stopPanListeners() {
    document.removeEventListener("mousemove", this._onMouseMove), document.removeEventListener("mouseup", this._onMouseUp);
  }
  _onMouseMove(t) {
    if (!this.isPanning) return;
    const i = t.pageX - this.panStartX, o = t.pageY - this.panStartY;
    this.panStartX = t.pageX, this.panStartY = t.pageY, this._applyPan(this.panX - i, this.panY - o);
  }
  _onMouseUp() {
    this.isPanning = !1, this._stopPanListeners();
  }
  // --- Ctrl+Scroll zoom ---
  _onWheel(t) {
    if (!t.ctrlKey && !t.metaKey) return;
    t.preventDefault();
    let i = -t.deltaY;
    t.deltaMode === 1 && (i *= 40), t.deltaMode === 2 && (i *= 800);
    const o = Math.pow(2, i / 300), s = this.zoom * o;
    this._zoomTowardPoint(s, t.clientX, t.clientY);
  }
  // --- Double-click toggle ---
  _onDblClick(t) {
    t.target && t.target.closest && (t.target.closest(".cloudimage-360-button") || t.target.closest(".cloudimage-360-hotspot-timeline") || t.target.closest(".cloudimage-360-hotspot") || t.target.closest(".cloudimage-360-zoom-controls")) || (this.zoom > F ? this._applyZoom(F) : this._zoomTowardPoint(2, t.clientX, t.clientY));
  }
  // --- Safari GestureEvent (trackpad pinch) ---
  _onGestureStart(t) {
    t.preventDefault(), this._gestureBaseZoom = this.zoom;
  }
  _onGestureChange(t) {
    t.preventDefault();
    const i = this._gestureBaseZoom * t.scale;
    this._zoomTowardPoint(i, t.clientX, t.clientY);
  }
  _onGestureEnd(t) {
    t.preventDefault();
  }
  // --- Keyboard ---
  handleKeyZoom(t) {
    return t === 187 || t === 107 ? (this.zoomIn(), !0) : t === 189 || t === 109 ? (this.zoomOut(), !0) : t === 48 || t === 96 ? (this.resetZoom(), !0) : !1;
  }
  handleKeyPan(t, i = 50) {
    if (this.zoom <= F) return !1;
    let o = 0, s = 0;
    switch (t) {
      case 37:
        o = -i;
        break;
      case 39:
        o = i;
        break;
      case 38:
        s = -i;
        break;
      case 40:
        s = i;
        break;
      default:
        return !1;
    }
    return this._applyPan(this.panX + o, this.panY + s), !0;
  }
  // --- Touch pan (called by GestureRecognizer) ---
  applyTouchPan(t, i) {
    this.zoom <= F || this._applyPan(this.panX - t, this.panY - i);
  }
  applyTouchZoom(t) {
    this._applyZoom(t);
  }
  // --- Internal ---
  _zoomTowardPoint(t, i, o) {
    var r;
    const s = Math.max(F, Math.min(t, this.zoomMax));
    if (s === this.zoom) return;
    const n = (r = this.container.querySelector("canvas")) == null ? void 0 : r.getBoundingClientRect();
    if (n) {
      const a = (i - n.left) / n.width * this.drawWidth, l = (o - n.top) / n.height * this.drawHeight, h = s / this.zoom;
      this.panX = a + (this.panX - a) * h, this.panY = l + (this.panY - l) * h;
    }
    this.zoom = s, this._clampPan(), this._emit();
  }
  _applyZoom(t) {
    const i = Math.max(F, Math.min(t, this.zoomMax));
    i !== this.zoom && (this.zoom = i, this.zoom <= F && (this.panX = this.drawWidth / 2, this.panY = this.drawHeight / 2), this._clampPan(), this._emit());
  }
  _applyPan(t, i) {
    this.panX = t, this.panY = i, this._clampPan(), this._emit();
  }
  _clampPan() {
    if (this.zoom <= F || !this.drawWidth || !this.drawHeight) return;
    const t = this.drawWidth / (2 * this.zoom), i = this.drawHeight / (2 * this.zoom);
    this.panX = Math.max(t, Math.min(this.panX, this.drawWidth - t)), this.panY = Math.max(i, Math.min(this.panY, this.drawHeight - i));
  }
  _emit() {
    typeof this.onZoomChange == "function" && this.onZoomChange(this.zoom, this.panX, this.panY);
  }
}
class Qo {
  constructor(t, {
    onPinchZoom: i,
    onPan: o,
    onDoubleTap: s,
    getZoom: n,
    zoomMax: r = 5
  } = {}) {
    this.container = t, this.onPinchZoom = i, this.onPan = o, this.onDoubleTap = s, this.getZoom = n, this.zoomMax = r, this.isPinching = !1, this.initialPinchDistance = 0, this.pinchBaseZoom = 1, this.lastTouchX = 0, this.lastTouchY = 0, this.lastTapTime = 0, this.lastTapX = 0, this.lastTapY = 0, this._onTouchStart = this._onTouchStart.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._attach();
  }
  _attach() {
    this.container.addEventListener("touchstart", this._onTouchStart, { passive: !1 }), this.container.addEventListener("touchmove", this._onTouchMove, { passive: !1 }), this.container.addEventListener("touchend", this._onTouchEnd, { passive: !1 });
  }
  destroy() {
    this.container.removeEventListener("touchstart", this._onTouchStart), this.container.removeEventListener("touchmove", this._onTouchMove), this.container.removeEventListener("touchend", this._onTouchEnd);
  }
  _getPinchDistance(t, i) {
    const o = t.pageX - i.pageX, s = t.pageY - i.pageY;
    return Math.sqrt(o * o + s * s);
  }
  _onTouchStart(t) {
    if (t.touches) {
      if (t.touches.length === 2) {
        t.preventDefault(), this.isPinching = !0, this.initialPinchDistance = this._getPinchDistance(t.touches[0], t.touches[1]), this.pinchBaseZoom = typeof this.getZoom == "function" ? this.getZoom() : 1;
        return;
      }
      if (t.touches.length === 1) {
        const i = t.touches[0];
        this.lastTouchX = i.pageX, this.lastTouchY = i.pageY;
        const o = Date.now(), s = o - this.lastTapTime, n = Math.abs(i.pageX - this.lastTapX), r = Math.abs(i.pageY - this.lastTapY);
        if (s < 300 && n < 30 && r < 30) {
          t.preventDefault(), t.stopPropagation(), this.lastTapTime = 0, typeof this.onDoubleTap == "function" && this.onDoubleTap(i.clientX, i.clientY);
          return;
        }
        this.lastTapTime = o, this.lastTapX = i.pageX, this.lastTapY = i.pageY;
      }
    }
  }
  _onTouchMove(t) {
    if (t.touches) {
      if (this.isPinching && t.touches.length === 2) {
        t.preventDefault();
        const i = this._getPinchDistance(t.touches[0], t.touches[1]);
        if (this.initialPinchDistance === 0) {
          this.initialPinchDistance = i;
          return;
        }
        const o = i / this.initialPinchDistance, s = Math.max(1, Math.min(this.pinchBaseZoom * o, this.zoomMax)), n = (t.touches[0].clientX + t.touches[1].clientX) / 2, r = (t.touches[0].clientY + t.touches[1].clientY) / 2;
        typeof this.onPinchZoom == "function" && this.onPinchZoom(s, n, r);
        return;
      }
      if (t.touches.length === 1) {
        if ((typeof this.getZoom == "function" ? this.getZoom() : 1) <= 1) return;
        t.preventDefault();
        const o = t.touches[0], s = o.pageX - this.lastTouchX, n = o.pageY - this.lastTouchY;
        this.lastTouchX = o.pageX, this.lastTouchY = o.pageY, typeof this.onPan == "function" && this.onPan(s, n);
      }
    }
  }
  _onTouchEnd(t) {
    this.isPinching && (!t.touches || t.touches.length < 2) && (this.isPinching = !1, this.initialPinchDistance = 0, t.touches && t.touches.length === 1 && (this.lastTouchX = t.touches[0].pageX, this.lastTouchY = t.touches[0].pageY));
  }
}
const ts = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/></svg>', es = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="8" x2="14" y1="11" y2="11"/></svg>', is = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>', os = (e, {
  position: t = "bottom-right",
  onZoomIn: i,
  onZoomOut: o,
  onReset: s,
  zoomMax: n = 5
} = {}) => {
  const r = document.createElement("div");
  r.className = "cloudimage-360-zoom-controls", r.setAttribute("data-position", t), r.setAttribute("role", "toolbar"), r.setAttribute("aria-label", "Zoom controls");
  const a = document.createElement("button");
  a.className = "cloudimage-360-zoom-btn cloudimage-360-zoom-btn-in", a.setAttribute("aria-label", "Zoom in"), a.innerHTML = ts, a.addEventListener("click", (p) => {
    p.stopPropagation(), typeof i == "function" && i();
  });
  const l = document.createElement("button");
  l.className = "cloudimage-360-zoom-btn cloudimage-360-zoom-btn-out", l.setAttribute("aria-label", "Zoom out"), l.innerHTML = es, l.disabled = !0, l.addEventListener("click", (p) => {
    p.stopPropagation(), typeof o == "function" && o();
  });
  const h = document.createElement("button");
  h.className = "cloudimage-360-zoom-btn cloudimage-360-zoom-btn-reset", h.setAttribute("aria-label", "Reset zoom"), h.innerHTML = is, h.disabled = !0, h.addEventListener("click", (p) => {
    p.stopPropagation(), typeof s == "function" && s();
  });
  const c = document.createElement("span");
  return c.className = "cloudimage-360-zoom-separator", r.appendChild(a), r.appendChild(l), r.appendChild(c), r.appendChild(h), e.appendChild(r), {
    element: r,
    updateState(p) {
      a.disabled = p >= n, l.disabled = p <= 1, h.disabled = p <= 1;
    },
    show() {
      r.classList.add("visible");
    },
    hide() {
      r.classList.remove("visible");
    },
    destroy() {
      r.parentNode && r.parentNode.removeChild(r);
    }
  };
}, ii = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IHY9KHQsYSxlKT0+e2NvbnN0IHM9dC9lLG49YS9lO3JldHVybnt6b29tZWRXaWR0aDpzLHpvb21lZEhlaWdodDpufX0sej0oe3BvaW50ZXJYOnQscG9pbnRlclk6YSxpbWFnZURhdGE6ZSx6b29tZWRXaWR0aDpzLHpvb21lZEhlaWdodDpuLGRyYXdXaWR0aDppLGRyYXdIZWlnaHQ6Y30pPT57Y29uc3R7bmF0dXJhbFdpZHRoOmcsbmF0dXJhbEhlaWdodDp1fT1lO2xldCBmPXQvaSpnLXMvMixtPWEvYyp1LW4vMjtjb25zdCB4PU1hdGgubWF4KDAsZy1zKSxPPU1hdGgubWF4KDAsdS1uKTtyZXR1cm4gZj1NYXRoLm1heCgwLE1hdGgubWluKGYseCkpLG09TWF0aC5tYXgoMCxNYXRoLm1pbihtLE8pKSx7em9vbU9mZnNldFg6Zix6b29tT2Zmc2V0WTptfX07bGV0IG8saCxyLGQsbCx3O3NlbGYub25tZXNzYWdlPWFzeW5jIHQ9Pntjb25zdHthY3Rpb246YSxvZmZzY3JlZW46ZSxkZXZpY2VQaXhlbFJhdGlvOnMsaW1hZ2VEYXRhOm4sem9vbVNjYWxlOmkscG9pbnRlclg6Yyxwb2ludGVyWTpnLGltYWdlQXNwZWN0UmF0aW86dSxjb250YWluZXJXaWR0aDpmLGNvbnRhaW5lckhlaWdodDptfT10LmRhdGE7c3dpdGNoKGEpe2Nhc2UiaW5pdENhbnZhcyI6QyhlLHMpO2JyZWFrO2Nhc2UiYWRhcHRDYW52YXNTaXplIjpwKHUsZixtKTticmVhaztjYXNlImRyYXdJbWFnZU9uQ2FudmFzIjpJKG4saSxjLGcpO2JyZWFrfX07Y29uc3QgQz0odCxhKT0+e289dCxoPW8uZ2V0Q29udGV4dCgiMmQiKSxyPWF9LHA9KHQsYSxlKT0+e2NvbnN0IHM9YS9lO3c9dD5zLG8ud2lkdGg9YSpyLG8uaGVpZ2h0PWUqcixoLnNjYWxlKHIsciksdz8oZD1hLGw9YS90KToobD1lLGQ9ZSp0KSxoLmltYWdlU21vb3RoaW5nRW5hYmxlZD0hMCxoLmltYWdlU21vb3RoaW5nUXVhbGl0eT0iaGlnaCJ9LEk9KHQ9e30sYT0xLGU9MCxzPTApPT57Y29uc3R7Yml0bWFwSW1hZ2U6bn09dDtpZighb3x8IW4pcmV0dXJuO2xldCBpLGM7aWYodz8oaT0wLGM9KG8uaGVpZ2h0L3ItbCkvMik6KGk9KG8ud2lkdGgvci1kKS8yLGM9MCksaC5jbGVhclJlY3QoMCwwLG8ud2lkdGgsby5oZWlnaHQpLGEhPT0xKXtjb25zdHtuYXR1cmFsV2lkdGg6ZyxuYXR1cmFsSGVpZ2h0OnV9PXQse3pvb21lZFdpZHRoOmYsem9vbWVkSGVpZ2h0Om19PXYoZyx1LGEpLHt6b29tT2Zmc2V0WDp4LHpvb21PZmZzZXRZOk99PXooe3BvaW50ZXJYOmUscG9pbnRlclk6cyxpbWFnZURhdGE6dCx6b29tZWRXaWR0aDpmLHpvb21lZEhlaWdodDptLGRyYXdXaWR0aDpkLGRyYXdIZWlnaHQ6bH0pO2guZHJhd0ltYWdlKG4seCxPLGYsbSxpLGMsZCxsKX1lbHNlIGguZHJhd0ltYWdlKG4saSxjLGQsbCl9fSkoKTsKLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FudmFzLndvcmtlci1DZzBma3BEMS5qcy5tYXAK", ss = (e) => Uint8Array.from(atob(e), (t) => t.charCodeAt(0)), Re = typeof self < "u" && self.Blob && new Blob([ss(ii)], { type: "text/javascript;charset=utf-8" });
function ns(e) {
  let t;
  try {
    if (t = Re && (self.URL || self.webkitURL).createObjectURL(Re), !t) throw "";
    const i = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return i.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), i;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + ii,
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
class rs {
  constructor() {
    this.canvas = null, this.ctx = null, this.dpr = 1, this.drawWidth = 0, this.drawHeight = 0, this.wideImage = !1;
  }
  /**
   * Mimics worker.postMessage() interface
   */
  postMessage(t) {
    const {
      action: i,
      offscreen: o,
      // Will be a regular canvas on main thread
      devicePixelRatio: s,
      imageData: n,
      zoomScale: r,
      pointerX: a,
      pointerY: l,
      imageAspectRatio: h,
      containerWidth: c,
      containerHeight: p
    } = t;
    switch (i) {
      case "initCanvas":
        this.initCanvas(o, s);
        break;
      case "adaptCanvasSize":
        this.adaptCanvasSize(h, c, p);
        break;
      case "drawImageOnCanvas":
        this.drawImageOnCanvas(n, r, a, l);
        break;
    }
  }
  /**
   * Mimics worker.terminate() - cleans up resources
   */
  terminate() {
    var t, i;
    this.ctx && this.ctx.clearRect(0, 0, ((t = this.canvas) == null ? void 0 : t.width) || 0, ((i = this.canvas) == null ? void 0 : i.height) || 0), this.canvas = null, this.ctx = null;
  }
  initCanvas(t, i) {
    this.canvas = t, this.ctx = t.getContext("2d"), this.dpr = i;
  }
  adaptCanvasSize(t, i, o) {
    if (!this.canvas || !this.ctx) return;
    const s = i / o;
    this.wideImage = t > s, this.canvas.width = i * this.dpr, this.canvas.height = o * this.dpr, this.ctx.scale(this.dpr, this.dpr), this.wideImage ? (this.drawWidth = i, this.drawHeight = i / t) : (this.drawHeight = o, this.drawWidth = o * t), this.ctx.imageSmoothingEnabled = !0, this.ctx.imageSmoothingQuality = "high";
  }
  drawImageOnCanvas(t = {}, i = 1, o = 0, s = 0) {
    const { bitmapImage: n } = t;
    if (!this.canvas || !this.ctx || !n) return;
    let r, a;
    if (this.wideImage ? (r = 0, a = (this.canvas.height / this.dpr - this.drawHeight) / 2) : (r = (this.canvas.width / this.dpr - this.drawWidth) / 2, a = 0), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), i !== 1) {
      const { naturalWidth: l, naturalHeight: h } = t, { zoomedWidth: c, zoomedHeight: p } = Go(l, h, i), { zoomOffsetX: m, zoomOffsetY: u } = _o({
        pointerX: o,
        pointerY: s,
        imageData: t,
        zoomedWidth: c,
        zoomedHeight: p,
        drawWidth: this.drawWidth,
        drawHeight: this.drawHeight
      });
      this.ctx.drawImage(
        n,
        m,
        u,
        c,
        p,
        r,
        a,
        this.drawWidth,
        this.drawHeight
      );
    } else
      this.ctx.drawImage(n, r, a, this.drawWidth, this.drawHeight);
  }
}
const as = /* @__PURE__ */ new Set([
  // Basic HTML
  "p",
  "span",
  "div",
  "br",
  "hr",
  "strong",
  "em",
  "b",
  "i",
  "u",
  "s",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "ul",
  "ol",
  "li",
  "a",
  "img",
  "button",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "blockquote",
  "pre",
  "code",
  "label",
  "input",
  "select",
  "option",
  "textarea",
  // SVG elements
  "svg",
  "path",
  "circle",
  "rect",
  "line",
  "polyline",
  "polygon",
  "ellipse",
  "g",
  "text",
  "tspan",
  "defs",
  "use",
  "symbol",
  "clippath",
  "mask",
  "lineargradient",
  "radialgradient",
  "stop"
]), ze = {
  a: ["href", "title", "target", "rel"],
  img: ["src", "alt", "title", "width", "height"],
  button: ["type", "disabled", "name", "value"],
  input: ["type", "name", "value", "placeholder", "disabled", "readonly", "checked", "min", "max", "step"],
  select: ["name", "disabled", "multiple"],
  option: ["value", "disabled", "selected"],
  textarea: ["name", "placeholder", "disabled", "readonly", "rows", "cols"],
  label: ["for"],
  // SVG attributes
  svg: ["viewbox", "width", "height", "fill", "stroke", "xmlns", "preserveaspectratio"],
  path: ["d", "fill", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin", "transform"],
  circle: ["cx", "cy", "r", "fill", "stroke", "stroke-width"],
  rect: ["x", "y", "width", "height", "rx", "ry", "fill", "stroke", "stroke-width"],
  line: ["x1", "y1", "x2", "y2", "stroke", "stroke-width"],
  polyline: ["points", "fill", "stroke", "stroke-width"],
  polygon: ["points", "fill", "stroke", "stroke-width"],
  ellipse: ["cx", "cy", "rx", "ry", "fill", "stroke", "stroke-width"],
  g: ["transform", "fill", "stroke"],
  text: ["x", "y", "dx", "dy", "text-anchor", "fill", "font-size", "font-family", "font-weight"],
  tspan: ["x", "y", "dx", "dy"],
  use: ["href", "xlink:href", "x", "y", "width", "height"],
  lineargradient: ["id", "x1", "y1", "x2", "y2", "gradientunits"],
  radialgradient: ["id", "cx", "cy", "r", "fx", "fy", "gradientunits"],
  stop: ["offset", "stop-color", "stop-opacity"],
  clippath: ["id"],
  mask: ["id"],
  "*": ["class", "id", "style"]
}, ls = [
  /javascript:/i,
  /vbscript:/i,
  /on\w+\s*=/i
], hs = (e) => {
  if (typeof e != "string")
    return "";
  const t = document.createElement("template");
  t.innerHTML = e;
  const i = (o) => {
    if (Array.from(o.childNodes).forEach(i), o.nodeType === Node.ELEMENT_NODE) {
      const n = o.tagName.toLowerCase();
      if (!as.has(n)) {
        if (n === "script" || n === "style") {
          o.remove();
          return;
        }
        const l = document.createTextNode(o.textContent);
        o.parentNode.replaceChild(l, o);
        return;
      }
      const r = [
        ...ze[n] || [],
        ...ze["*"] || []
      ];
      if (Array.from(o.attributes).forEach((l) => {
        const h = l.name.toLowerCase();
        if (h.startsWith("on")) {
          o.removeAttribute(l.name);
          return;
        }
        if (!r.includes(h)) {
          o.removeAttribute(l.name);
          return;
        }
        let c = l.value;
        ls.forEach((p) => {
          p.test(c) && o.removeAttribute(l.name);
        });
      }), n === "a") {
        const l = o.getAttribute("href");
        l && (/^(https?:|mailto:|tel:|#|\/)/i.test(l.trim()) || o.removeAttribute("href")), o.getAttribute("target") === "_blank" && o.setAttribute("rel", "noopener noreferrer");
      }
      if (n === "img") {
        const l = o.getAttribute("src");
        l && (/^(https?:|\/|data:image\/)/i.test(l.trim()) || o.removeAttribute("src"));
      }
    }
  };
  return i(t.content), t.innerHTML;
}, cs = (e) => e === "y" ? O.Y : O.X, ds = (e, t, i) => e.filter((o) => t in o.positions ? i === "grid" ? !0 : cs(o.orientation) === i : !1), us = (e, t, i) => {
  const o = document.createElement("button");
  if (o.id = e, o.className = "cloudimage-360-hotspot cloudimage-360-hotspot--pulse", o.dataset.hotspotId = e, o.setAttribute("type", "button"), o.setAttribute("aria-label", t || `Hotspot ${e}`), o.setAttribute("aria-haspopup", "true"), o.setAttribute("aria-expanded", "false"), i === "dot-label" && t) {
    o.classList.add("cloudimage-360-hotspot--dot-label");
    const s = document.createElement("span");
    s.className = "cloudimage-360-hotspot-label", s.textContent = t, o.appendChild(s);
  }
  return o;
}, ps = (e) => {
  const t = Object.entries(e).sort(([n], [r]) => Number(n) - Number(r));
  let i = null, o = null;
  const s = {};
  for (const [n, r] of t)
    if (!r)
      s[n] = { x: i, y: o };
    else {
      const { x: a, y: l } = r;
      a != null && (i = a), l != null && (o = l), s[n] = {
        x: a ?? i,
        y: l ?? o
      };
    }
  return s;
}, ms = (e) => ({
  placement: "top",
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, 10]
      }
    },
    {
      name: "preventOverflow",
      options: {
        boundary: e
      }
    },
    {
      name: "flip",
      options: {
        boundary: e,
        fallbackPlacements: ["bottom", "right", "left"]
      }
    }
  ]
}), fs = (e, t, i) => {
  const o = document.createElement("div");
  return o.className = "cloudimage-360-popper", o.id = `cloudimage-360-popper-${t}`, o.dataset.popperId = t, o.setAttribute("role", "tooltip"), o.setAttribute("aria-hidden", "false"), typeof e == "string" && /<\/?[a-z][\s\S]*>/i.test(e) ? o.innerHTML = hs(e) : o.textContent = e, (i || document.body).appendChild(o), o;
}, gs = (e) => e.map((t) => {
  const i = { ...ps(t.positions) };
  return { ...t, initialPositions: i, positions: i };
}), vs = ({
  newWidth: e,
  newHeight: t,
  initialContainerSize: i,
  imageAspectRatio: o,
  hotspotsConfig: s
}) => {
  const [n, r] = i;
  let a = e, l = t, h = 0, c = 0;
  const p = e / t;
  o > p ? (l = e / o, c = (t - l) / 2) : (a = t * o, h = (e - a) / 2);
  const u = a / n, I = l / r;
  return s.map((g) => {
    const v = {};
    return Object.entries(g.initialPositions).forEach(([b, k]) => {
      v[b] = {
        x: k.x * u + h,
        y: k.y * I + c
      };
    }), { ...g, positions: v };
  });
};
function ys(e) {
  const t = [];
  e.image && t.push(
    `<div class="ci360-popper-image-wrapper"><img class="ci360-popper-image" src="${kt(e.image)}" alt="${kt(e.title || "")}"></div>`
  );
  const i = [];
  if (e.title && i.push(`<h3 class="ci360-popper-title">${pt(e.title)}</h3>`), e.originalPrice || e.price) {
    let o = "";
    e.originalPrice && (o += `<span class="ci360-popper-original-price">${pt(e.originalPrice)}</span>`), e.price && (o += `<span class="ci360-popper-price">${pt(e.price)}</span>`), i.push(`<div class="ci360-popper-price-row">${o}</div>`);
  }
  if (e.description && i.push(`<p class="ci360-popper-description">${pt(e.description)}</p>`), e.url && bs(e.url)) {
    const o = e.ctaText || "View details", s = e.id ? ` data-product-id="${kt(e.id)}"` : "";
    i.push(
      `<a class="ci360-popper-cta" href="${kt(e.url)}" target="_top"${s}>${pt(String(o))}</a>`
    );
  } else if (e.id) {
    const o = e.ctaText || "View details";
    i.push(
      `<button class="ci360-popper-cta" data-product-id="${kt(e.id)}">${pt(String(o))}</button>`
    );
  }
  return i.length > 0 && t.push(`<div class="ci360-popper-body">${i.join("")}</div>`), t.join("");
}
function xt(e) {
  return e.content ? e.content : e.data ? ys(e.data) : "";
}
function pt(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function kt(e) {
  return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function bs(e) {
  const t = e.replace(/[\s\x00-\x1f]/g, "");
  return /^https?:\/\//i.test(t) || /^\/(?!\/)/.test(t) || /^#/.test(t);
}
var R = "top", G = "bottom", _ = "right", z = "left", ae = "auto", Lt = [R, G, _, z], mt = "start", St = "end", ws = "clippingParents", oi = "viewport", Et = "popper", Cs = "reference", Ze = /* @__PURE__ */ Lt.reduce(function(e, t) {
  return e.concat([t + "-" + mt, t + "-" + St]);
}, []), si = /* @__PURE__ */ [].concat(Lt, [ae]).reduce(function(e, t) {
  return e.concat([t, t + "-" + mt, t + "-" + St]);
}, []), Is = "beforeRead", xs = "read", ks = "afterRead", Es = "beforeMain", Ps = "main", Ts = "afterMain", As = "beforeWrite", Ss = "write", Xs = "afterWrite", Ls = [Is, xs, ks, Es, Ps, Ts, As, Ss, Xs];
function V(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function D(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function rt(e) {
  var t = D(e).Element;
  return e instanceof t || e instanceof Element;
}
function B(e) {
  var t = D(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function le(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = D(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Os(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(i) {
    var o = t.styles[i] || {}, s = t.attributes[i] || {}, n = t.elements[i];
    !B(n) || !V(n) || (Object.assign(n.style, o), Object.keys(s).forEach(function(r) {
      var a = s[r];
      a === !1 ? n.removeAttribute(r) : n.setAttribute(r, a === !0 ? "" : a);
    }));
  });
}
function Ys(e) {
  var t = e.state, i = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var s = t.elements[o], n = t.attributes[o] || {}, r = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : i[o]), a = r.reduce(function(l, h) {
        return l[h] = "", l;
      }, {});
      !B(s) || !V(s) || (Object.assign(s.style, a), Object.keys(n).forEach(function(l) {
        s.removeAttribute(l);
      }));
    });
  };
}
const Ms = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Os,
  effect: Ys,
  requires: ["computeStyles"]
};
function W(e) {
  return e.split("-")[0];
}
var nt = Math.max, $t = Math.min, ft = Math.round;
function ne() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ni() {
  return !/^((?!chrome|android).)*safari/i.test(ne());
}
function gt(e, t, i) {
  t === void 0 && (t = !1), i === void 0 && (i = !1);
  var o = e.getBoundingClientRect(), s = 1, n = 1;
  t && B(e) && (s = e.offsetWidth > 0 && ft(o.width) / e.offsetWidth || 1, n = e.offsetHeight > 0 && ft(o.height) / e.offsetHeight || 1);
  var r = rt(e) ? D(e) : window, a = r.visualViewport, l = !ni() && i, h = (o.left + (l && a ? a.offsetLeft : 0)) / s, c = (o.top + (l && a ? a.offsetTop : 0)) / n, p = o.width / s, m = o.height / n;
  return {
    width: p,
    height: m,
    top: c,
    right: h + p,
    bottom: c + m,
    left: h,
    x: h,
    y: c
  };
}
function he(e) {
  var t = gt(e), i = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - i) <= 1 && (i = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: i,
    height: o
  };
}
function ri(e, t) {
  var i = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (i && le(i)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function J(e) {
  return D(e).getComputedStyle(e);
}
function Hs(e) {
  return ["table", "td", "th"].indexOf(V(e)) >= 0;
}
function it(e) {
  return ((rt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Kt(e) {
  return V(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (le(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    it(e)
  );
}
function De(e) {
  return !B(e) || // https://github.com/popperjs/popper-core/issues/837
  J(e).position === "fixed" ? null : e.offsetParent;
}
function Rs(e) {
  var t = /firefox/i.test(ne()), i = /Trident/i.test(ne());
  if (i && B(e)) {
    var o = J(e);
    if (o.position === "fixed")
      return null;
  }
  var s = Kt(e);
  for (le(s) && (s = s.host); B(s) && ["html", "body"].indexOf(V(s)) < 0; ) {
    var n = J(s);
    if (n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].indexOf(n.willChange) !== -1 || t && n.willChange === "filter" || t && n.filter && n.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Ot(e) {
  for (var t = D(e), i = De(e); i && Hs(i) && J(i).position === "static"; )
    i = De(i);
  return i && (V(i) === "html" || V(i) === "body" && J(i).position === "static") ? t : i || Rs(e) || t;
}
function ce(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Tt(e, t, i) {
  return nt(e, $t(t, i));
}
function zs(e, t, i) {
  var o = Tt(e, t, i);
  return o > i ? i : o;
}
function ai() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function li(e) {
  return Object.assign({}, ai(), e);
}
function hi(e, t) {
  return t.reduce(function(i, o) {
    return i[o] = e, i;
  }, {});
}
var Zs = function(t, i) {
  return t = typeof t == "function" ? t(Object.assign({}, i.rects, {
    placement: i.placement
  })) : t, li(typeof t != "number" ? t : hi(t, Lt));
};
function Ds(e) {
  var t, i = e.state, o = e.name, s = e.options, n = i.elements.arrow, r = i.modifiersData.popperOffsets, a = W(i.placement), l = ce(a), h = [z, _].indexOf(a) >= 0, c = h ? "height" : "width";
  if (!(!n || !r)) {
    var p = Zs(s.padding, i), m = he(n), u = l === "y" ? R : z, I = l === "y" ? G : _, g = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c], v = r[l] - i.rects.reference[l], b = Ot(n), k = b ? l === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, C = g / 2 - v / 2, y = p[u], E = k - m[c] - p[I], f = k / 2 - m[c] / 2 + C, w = Tt(y, f, E), x = l;
    i.modifiersData[o] = (t = {}, t[x] = w, t.centerOffset = w - f, t);
  }
}
function Bs(e) {
  var t = e.state, i = e.options, o = i.element, s = o === void 0 ? "[data-popper-arrow]" : o;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || ri(t.elements.popper, s) && (t.elements.arrow = s));
}
const Gs = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Ds,
  effect: Bs,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function vt(e) {
  return e.split("-")[1];
}
var _s = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Fs(e, t) {
  var i = e.x, o = e.y, s = t.devicePixelRatio || 1;
  return {
    x: ft(i * s) / s || 0,
    y: ft(o * s) / s || 0
  };
}
function Be(e) {
  var t, i = e.popper, o = e.popperRect, s = e.placement, n = e.variation, r = e.offsets, a = e.position, l = e.gpuAcceleration, h = e.adaptive, c = e.roundOffsets, p = e.isFixed, m = r.x, u = m === void 0 ? 0 : m, I = r.y, g = I === void 0 ? 0 : I, v = typeof c == "function" ? c({
    x: u,
    y: g
  }) : {
    x: u,
    y: g
  };
  u = v.x, g = v.y;
  var b = r.hasOwnProperty("x"), k = r.hasOwnProperty("y"), C = z, y = R, E = window;
  if (h) {
    var f = Ot(i), w = "clientHeight", x = "clientWidth";
    if (f === D(i) && (f = it(i), J(f).position !== "static" && a === "absolute" && (w = "scrollHeight", x = "scrollWidth")), f = f, s === R || (s === z || s === _) && n === St) {
      y = G;
      var P = p && f === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        f[w]
      );
      g -= P - o.height, g *= l ? 1 : -1;
    }
    if (s === z || (s === R || s === G) && n === St) {
      C = _;
      var A = p && f === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        f[x]
      );
      u -= A - o.width, u *= l ? 1 : -1;
    }
  }
  var S = Object.assign({
    position: a
  }, h && _s), M = c === !0 ? Fs({
    x: u,
    y: g
  }, D(i)) : {
    x: u,
    y: g
  };
  if (u = M.x, g = M.y, l) {
    var Y;
    return Object.assign({}, S, (Y = {}, Y[y] = k ? "0" : "", Y[C] = b ? "0" : "", Y.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + u + "px, " + g + "px)" : "translate3d(" + u + "px, " + g + "px, 0)", Y));
  }
  return Object.assign({}, S, (t = {}, t[y] = k ? g + "px" : "", t[C] = b ? u + "px" : "", t.transform = "", t));
}
function Ns(e) {
  var t = e.state, i = e.options, o = i.gpuAcceleration, s = o === void 0 ? !0 : o, n = i.adaptive, r = n === void 0 ? !0 : n, a = i.roundOffsets, l = a === void 0 ? !0 : a, h = {
    placement: W(t.placement),
    variation: vt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Be(Object.assign({}, h, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: r,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Be(Object.assign({}, h, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Ws = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ns,
  data: {}
};
var Nt = {
  passive: !0
};
function Vs(e) {
  var t = e.state, i = e.instance, o = e.options, s = o.scroll, n = s === void 0 ? !0 : s, r = o.resize, a = r === void 0 ? !0 : r, l = D(t.elements.popper), h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return n && h.forEach(function(c) {
    c.addEventListener("scroll", i.update, Nt);
  }), a && l.addEventListener("resize", i.update, Nt), function() {
    n && h.forEach(function(c) {
      c.removeEventListener("scroll", i.update, Nt);
    }), a && l.removeEventListener("resize", i.update, Nt);
  };
}
const js = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Vs,
  data: {}
};
var Us = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Vt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Us[t];
  });
}
var $s = {
  start: "end",
  end: "start"
};
function Ge(e) {
  return e.replace(/start|end/g, function(t) {
    return $s[t];
  });
}
function de(e) {
  var t = D(e), i = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: i,
    scrollTop: o
  };
}
function ue(e) {
  return gt(it(e)).left + de(e).scrollLeft;
}
function Ks(e, t) {
  var i = D(e), o = it(e), s = i.visualViewport, n = o.clientWidth, r = o.clientHeight, a = 0, l = 0;
  if (s) {
    n = s.width, r = s.height;
    var h = ni();
    (h || !h && t === "fixed") && (a = s.offsetLeft, l = s.offsetTop);
  }
  return {
    width: n,
    height: r,
    x: a + ue(e),
    y: l
  };
}
function qs(e) {
  var t, i = it(e), o = de(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, n = nt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = nt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -o.scrollLeft + ue(e), l = -o.scrollTop;
  return J(s || i).direction === "rtl" && (a += nt(i.clientWidth, s ? s.clientWidth : 0) - n), {
    width: n,
    height: r,
    x: a,
    y: l
  };
}
function pe(e) {
  var t = J(e), i = t.overflow, o = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(i + s + o);
}
function ci(e) {
  return ["html", "body", "#document"].indexOf(V(e)) >= 0 ? e.ownerDocument.body : B(e) && pe(e) ? e : ci(Kt(e));
}
function At(e, t) {
  var i;
  t === void 0 && (t = []);
  var o = ci(e), s = o === ((i = e.ownerDocument) == null ? void 0 : i.body), n = D(o), r = s ? [n].concat(n.visualViewport || [], pe(o) ? o : []) : o, a = t.concat(r);
  return s ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(At(Kt(r)))
  );
}
function re(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Js(e, t) {
  var i = gt(e, !1, t === "fixed");
  return i.top = i.top + e.clientTop, i.left = i.left + e.clientLeft, i.bottom = i.top + e.clientHeight, i.right = i.left + e.clientWidth, i.width = e.clientWidth, i.height = e.clientHeight, i.x = i.left, i.y = i.top, i;
}
function _e(e, t, i) {
  return t === oi ? re(Ks(e, i)) : rt(t) ? Js(t, i) : re(qs(it(e)));
}
function Qs(e) {
  var t = At(Kt(e)), i = ["absolute", "fixed"].indexOf(J(e).position) >= 0, o = i && B(e) ? Ot(e) : e;
  return rt(o) ? t.filter(function(s) {
    return rt(s) && ri(s, o) && V(s) !== "body";
  }) : [];
}
function tn(e, t, i, o) {
  var s = t === "clippingParents" ? Qs(e) : [].concat(t), n = [].concat(s, [i]), r = n[0], a = n.reduce(function(l, h) {
    var c = _e(e, h, o);
    return l.top = nt(c.top, l.top), l.right = $t(c.right, l.right), l.bottom = $t(c.bottom, l.bottom), l.left = nt(c.left, l.left), l;
  }, _e(e, r, o));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function di(e) {
  var t = e.reference, i = e.element, o = e.placement, s = o ? W(o) : null, n = o ? vt(o) : null, r = t.x + t.width / 2 - i.width / 2, a = t.y + t.height / 2 - i.height / 2, l;
  switch (s) {
    case R:
      l = {
        x: r,
        y: t.y - i.height
      };
      break;
    case G:
      l = {
        x: r,
        y: t.y + t.height
      };
      break;
    case _:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case z:
      l = {
        x: t.x - i.width,
        y: a
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var h = s ? ce(s) : null;
  if (h != null) {
    var c = h === "y" ? "height" : "width";
    switch (n) {
      case mt:
        l[h] = l[h] - (t[c] / 2 - i[c] / 2);
        break;
      case St:
        l[h] = l[h] + (t[c] / 2 - i[c] / 2);
        break;
    }
  }
  return l;
}
function Xt(e, t) {
  t === void 0 && (t = {});
  var i = t, o = i.placement, s = o === void 0 ? e.placement : o, n = i.strategy, r = n === void 0 ? e.strategy : n, a = i.boundary, l = a === void 0 ? ws : a, h = i.rootBoundary, c = h === void 0 ? oi : h, p = i.elementContext, m = p === void 0 ? Et : p, u = i.altBoundary, I = u === void 0 ? !1 : u, g = i.padding, v = g === void 0 ? 0 : g, b = li(typeof v != "number" ? v : hi(v, Lt)), k = m === Et ? Cs : Et, C = e.rects.popper, y = e.elements[I ? k : m], E = tn(rt(y) ? y : y.contextElement || it(e.elements.popper), l, c, r), f = gt(e.elements.reference), w = di({
    reference: f,
    element: C,
    placement: s
  }), x = re(Object.assign({}, C, w)), P = m === Et ? x : f, A = {
    top: E.top - P.top + b.top,
    bottom: P.bottom - E.bottom + b.bottom,
    left: E.left - P.left + b.left,
    right: P.right - E.right + b.right
  }, S = e.modifiersData.offset;
  if (m === Et && S) {
    var M = S[s];
    Object.keys(A).forEach(function(Y) {
      var j = [_, G].indexOf(Y) >= 0 ? 1 : -1, U = [R, G].indexOf(Y) >= 0 ? "y" : "x";
      A[Y] += M[U] * j;
    });
  }
  return A;
}
function en(e, t) {
  t === void 0 && (t = {});
  var i = t, o = i.placement, s = i.boundary, n = i.rootBoundary, r = i.padding, a = i.flipVariations, l = i.allowedAutoPlacements, h = l === void 0 ? si : l, c = vt(o), p = c ? a ? Ze : Ze.filter(function(I) {
    return vt(I) === c;
  }) : Lt, m = p.filter(function(I) {
    return h.indexOf(I) >= 0;
  });
  m.length === 0 && (m = p);
  var u = m.reduce(function(I, g) {
    return I[g] = Xt(e, {
      placement: g,
      boundary: s,
      rootBoundary: n,
      padding: r
    })[W(g)], I;
  }, {});
  return Object.keys(u).sort(function(I, g) {
    return u[I] - u[g];
  });
}
function on(e) {
  if (W(e) === ae)
    return [];
  var t = Vt(e);
  return [Ge(e), t, Ge(t)];
}
function sn(e) {
  var t = e.state, i = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var s = i.mainAxis, n = s === void 0 ? !0 : s, r = i.altAxis, a = r === void 0 ? !0 : r, l = i.fallbackPlacements, h = i.padding, c = i.boundary, p = i.rootBoundary, m = i.altBoundary, u = i.flipVariations, I = u === void 0 ? !0 : u, g = i.allowedAutoPlacements, v = t.options.placement, b = W(v), k = b === v, C = l || (k || !I ? [Vt(v)] : on(v)), y = [v].concat(C).reduce(function(tt, N) {
      return tt.concat(W(N) === ae ? en(t, {
        placement: N,
        boundary: c,
        rootBoundary: p,
        padding: h,
        flipVariations: I,
        allowedAutoPlacements: g
      }) : N);
    }, []), E = t.rects.reference, f = t.rects.popper, w = /* @__PURE__ */ new Map(), x = !0, P = y[0], A = 0; A < y.length; A++) {
      var S = y[A], M = W(S), Y = vt(S) === mt, j = [R, G].indexOf(M) >= 0, U = j ? "width" : "height", H = Xt(t, {
        placement: S,
        boundary: c,
        rootBoundary: p,
        altBoundary: m,
        padding: h
      }), Z = j ? Y ? _ : z : Y ? G : R;
      E[U] > f[U] && (Z = Vt(Z));
      var at = Vt(Z), $ = [];
      if (n && $.push(H[M] <= 0), a && $.push(H[Z] <= 0, H[at] <= 0), $.every(function(tt) {
        return tt;
      })) {
        P = S, x = !1;
        break;
      }
      w.set(S, $);
    }
    if (x)
      for (var lt = I ? 3 : 1, ht = function(N) {
        var st = y.find(function(ct) {
          var K = w.get(ct);
          if (K)
            return K.slice(0, N).every(function(yt) {
              return yt;
            });
        });
        if (st)
          return P = st, "break";
      }, ot = lt; ot > 0; ot--) {
        var Q = ht(ot);
        if (Q === "break") break;
      }
    t.placement !== P && (t.modifiersData[o]._skip = !0, t.placement = P, t.reset = !0);
  }
}
const nn = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: sn,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Fe(e, t, i) {
  return i === void 0 && (i = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - i.y,
    right: e.right - t.width + i.x,
    bottom: e.bottom - t.height + i.y,
    left: e.left - t.width - i.x
  };
}
function Ne(e) {
  return [R, _, G, z].some(function(t) {
    return e[t] >= 0;
  });
}
function rn(e) {
  var t = e.state, i = e.name, o = t.rects.reference, s = t.rects.popper, n = t.modifiersData.preventOverflow, r = Xt(t, {
    elementContext: "reference"
  }), a = Xt(t, {
    altBoundary: !0
  }), l = Fe(r, o), h = Fe(a, s, n), c = Ne(l), p = Ne(h);
  t.modifiersData[i] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: h,
    isReferenceHidden: c,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": p
  });
}
const an = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: rn
};
function ln(e, t, i) {
  var o = W(e), s = [z, R].indexOf(o) >= 0 ? -1 : 1, n = typeof i == "function" ? i(Object.assign({}, t, {
    placement: e
  })) : i, r = n[0], a = n[1];
  return r = r || 0, a = (a || 0) * s, [z, _].indexOf(o) >= 0 ? {
    x: a,
    y: r
  } : {
    x: r,
    y: a
  };
}
function hn(e) {
  var t = e.state, i = e.options, o = e.name, s = i.offset, n = s === void 0 ? [0, 0] : s, r = si.reduce(function(c, p) {
    return c[p] = ln(p, t.rects, n), c;
  }, {}), a = r[t.placement], l = a.x, h = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += h), t.modifiersData[o] = r;
}
const cn = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: hn
};
function dn(e) {
  var t = e.state, i = e.name;
  t.modifiersData[i] = di({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const un = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: dn,
  data: {}
};
function pn(e) {
  return e === "x" ? "y" : "x";
}
function mn(e) {
  var t = e.state, i = e.options, o = e.name, s = i.mainAxis, n = s === void 0 ? !0 : s, r = i.altAxis, a = r === void 0 ? !1 : r, l = i.boundary, h = i.rootBoundary, c = i.altBoundary, p = i.padding, m = i.tether, u = m === void 0 ? !0 : m, I = i.tetherOffset, g = I === void 0 ? 0 : I, v = Xt(t, {
    boundary: l,
    rootBoundary: h,
    padding: p,
    altBoundary: c
  }), b = W(t.placement), k = vt(t.placement), C = !k, y = ce(b), E = pn(y), f = t.modifiersData.popperOffsets, w = t.rects.reference, x = t.rects.popper, P = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, A = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), S = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, M = {
    x: 0,
    y: 0
  };
  if (f) {
    if (n) {
      var Y, j = y === "y" ? R : z, U = y === "y" ? G : _, H = y === "y" ? "height" : "width", Z = f[y], at = Z + v[j], $ = Z - v[U], lt = u ? -x[H] / 2 : 0, ht = k === mt ? w[H] : x[H], ot = k === mt ? -x[H] : -w[H], Q = t.elements.arrow, tt = u && Q ? he(Q) : {
        width: 0,
        height: 0
      }, N = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ai(), st = N[j], ct = N[U], K = Tt(0, w[H], tt[H]), yt = C ? w[H] / 2 - lt - K - st - A.mainAxis : ht - K - st - A.mainAxis, qt = C ? -w[H] / 2 + lt + K + ct + A.mainAxis : ot + K + ct + A.mainAxis, bt = t.elements.arrow && Ot(t.elements.arrow), Jt = bt ? y === "y" ? bt.clientTop || 0 : bt.clientLeft || 0 : 0, Yt = (Y = S == null ? void 0 : S[y]) != null ? Y : 0, Qt = Z + yt - Yt - Jt, te = Z + qt - Yt, Mt = Tt(u ? $t(at, Qt) : at, Z, u ? nt($, te) : $);
      f[y] = Mt, M[y] = Mt - Z;
    }
    if (a) {
      var wt, Ht = y === "x" ? R : z, Rt = y === "x" ? G : _, q = f[E], dt = E === "y" ? "height" : "width", zt = q + v[Ht], Zt = q - v[Rt], Ct = [R, z].indexOf(b) !== -1, Dt = (wt = S == null ? void 0 : S[E]) != null ? wt : 0, Bt = Ct ? zt : q - w[dt] - x[dt] - Dt + A.altAxis, Gt = Ct ? q + w[dt] + x[dt] - Dt - A.altAxis : Zt, _t = u && Ct ? zs(Bt, q, Gt) : Tt(u ? Bt : zt, q, u ? Gt : Zt);
      f[E] = _t, M[E] = _t - q;
    }
    t.modifiersData[o] = M;
  }
}
const fn = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: mn,
  requiresIfExists: ["offset"]
};
function gn(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function vn(e) {
  return e === D(e) || !B(e) ? de(e) : gn(e);
}
function yn(e) {
  var t = e.getBoundingClientRect(), i = ft(t.width) / e.offsetWidth || 1, o = ft(t.height) / e.offsetHeight || 1;
  return i !== 1 || o !== 1;
}
function bn(e, t, i) {
  i === void 0 && (i = !1);
  var o = B(t), s = B(t) && yn(t), n = it(t), r = gt(e, s, i), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (o || !o && !i) && ((V(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  pe(n)) && (a = vn(t)), B(t) ? (l = gt(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : n && (l.x = ue(n))), {
    x: r.left + a.scrollLeft - l.x,
    y: r.top + a.scrollTop - l.y,
    width: r.width,
    height: r.height
  };
}
function wn(e) {
  var t = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(n) {
    t.set(n.name, n);
  });
  function s(n) {
    i.add(n.name);
    var r = [].concat(n.requires || [], n.requiresIfExists || []);
    r.forEach(function(a) {
      if (!i.has(a)) {
        var l = t.get(a);
        l && s(l);
      }
    }), o.push(n);
  }
  return e.forEach(function(n) {
    i.has(n.name) || s(n);
  }), o;
}
function Cn(e) {
  var t = wn(e);
  return Ls.reduce(function(i, o) {
    return i.concat(t.filter(function(s) {
      return s.phase === o;
    }));
  }, []);
}
function In(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(i) {
      Promise.resolve().then(function() {
        t = void 0, i(e());
      });
    })), t;
  };
}
function xn(e) {
  var t = e.reduce(function(i, o) {
    var s = i[o.name];
    return i[o.name] = s ? Object.assign({}, s, o, {
      options: Object.assign({}, s.options, o.options),
      data: Object.assign({}, s.data, o.data)
    }) : o, i;
  }, {});
  return Object.keys(t).map(function(i) {
    return t[i];
  });
}
var We = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ve() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function kn(e) {
  e === void 0 && (e = {});
  var t = e, i = t.defaultModifiers, o = i === void 0 ? [] : i, s = t.defaultOptions, n = s === void 0 ? We : s;
  return function(a, l, h) {
    h === void 0 && (h = n);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, We, n),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, p = [], m = !1, u = {
      state: c,
      setOptions: function(b) {
        var k = typeof b == "function" ? b(c.options) : b;
        g(), c.options = Object.assign({}, n, c.options, k), c.scrollParents = {
          reference: rt(a) ? At(a) : a.contextElement ? At(a.contextElement) : [],
          popper: At(l)
        };
        var C = Cn(xn([].concat(o, c.options.modifiers)));
        return c.orderedModifiers = C.filter(function(y) {
          return y.enabled;
        }), I(), u.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!m) {
          var b = c.elements, k = b.reference, C = b.popper;
          if (Ve(k, C)) {
            c.rects = {
              reference: bn(k, Ot(C), c.options.strategy === "fixed"),
              popper: he(C)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(A) {
              return c.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var y = 0; y < c.orderedModifiers.length; y++) {
              if (c.reset === !0) {
                c.reset = !1, y = -1;
                continue;
              }
              var E = c.orderedModifiers[y], f = E.fn, w = E.options, x = w === void 0 ? {} : w, P = E.name;
              typeof f == "function" && (c = f({
                state: c,
                options: x,
                name: P,
                instance: u
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: In(function() {
        return new Promise(function(v) {
          u.forceUpdate(), v(c);
        });
      }),
      destroy: function() {
        g(), m = !0;
      }
    };
    if (!Ve(a, l))
      return u;
    u.setOptions(h).then(function(v) {
      !m && h.onFirstUpdate && h.onFirstUpdate(v);
    });
    function I() {
      c.orderedModifiers.forEach(function(v) {
        var b = v.name, k = v.options, C = k === void 0 ? {} : k, y = v.effect;
        if (typeof y == "function") {
          var E = y({
            state: c,
            name: b,
            instance: u,
            options: C
          }), f = function() {
          };
          p.push(E || f);
        }
      });
    }
    function g() {
      p.forEach(function(v) {
        return v();
      }), p = [];
    }
    return u;
  };
}
var En = [js, un, Ws, Ms, cn, nn, fn, Gs, an], Pn = /* @__PURE__ */ kn({
  defaultModifiers: En
});
const Tn = '<svg class="ci360-navigate-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';
class An {
  /**
   * @param {Array} hotspotsConfig - Hotspot configuration array
   * @param {HTMLElement} container - Container element
   * @param {number} imageAspectRatio - Image aspect ratio
   * @param {Object} options - Additional options
   * @param {string} options.trigger - 'hover' or 'click' (default: 'hover')
   */
  constructor(t, i, o, s = {}) {
    ge(this, "updateHotspotPosition", (t, i) => {
      this.currentActiveIndex = t, this.currentOrientation = i;
      const o = ds(this.hotspotsConfig, t, i);
      this.hideHotspots(), o.forEach((s) => this.updateAndShowHotspot(s, t));
    });
    this.container = i, this.popper = null, this.popperInstance = null, this.hotspotsContainer = xo(this.container), this.hotspotsConfig = gs(t), this.shouldHidePopper = !0, this.hidePopper = this.hidePopper.bind(this), this.forceHidePopper = this.forceHidePopper.bind(this), this.imageAspectRatio = o, this.popperListeners = [], this.trigger = s.trigger || "hover", this.onOpen = s.onOpen || null, this.onClose = s.onClose || null, this.onProductClick = s.onProductClick || null, this.onNavigate = s.onNavigate || null;
    const { containerSize: n } = t[0];
    this.initialContainerSize = n || [i.offsetWidth, i.offsetHeight], this.initHotspots(), this.updateHotspotsForResize(i.offsetWidth, i.offsetHeight), this.observeContainerResize();
  }
  observeContainerResize() {
    this.resizeObserver = new ResizeObserver(() => {
      const t = this.container.offsetWidth, i = this.container.offsetHeight;
      this.updateHotspotsForResize(t, i);
    }), this.resizeObserver.observe(this.container);
  }
  updateHotspotsForResize(t, i) {
    this.hotspotsConfig = vs({
      newWidth: t,
      newHeight: i,
      initialContainerSize: this.initialContainerSize,
      imageAspectRatio: this.imageAspectRatio,
      hotspotsConfig: this.hotspotsConfig
    }), this.updateHotspotPosition(this.currentActiveIndex, this.currentOrientation);
  }
  cleanupPopperListeners() {
    this.popperListeners.forEach(({ element: t, event: i, handler: o }) => {
      t.removeEventListener(i, o);
    }), this.popperListeners = [];
  }
  showPopper({ hotspotElement: t, content: i, id: o, keepOpen: s }) {
    var p;
    this.popperInstance && this.hidePopper();
    const n = ms(this.container);
    this.popper = fs(i, o, this.container.parentElement), this.currentHotspotElement = t, t.setAttribute("aria-expanded", "true"), t.setAttribute("aria-describedby", `cloudimage-360-popper-${o}`);
    const r = () => {
      this.shouldHidePopper = !1;
    }, a = () => {
      this.shouldHidePopper = !0, this.checkAndHidePopper();
    }, l = () => {
      this.shouldHidePopper = !0, this.checkAndHidePopper();
    }, h = () => {
      this.shouldHidePopper = !1, this.hidePopperTimeout && clearTimeout(this.hidePopperTimeout);
    };
    if (this.popper.addEventListener("mouseenter", r), this.popper.addEventListener("mouseleave", a), t.addEventListener("mouseleave", l), t.addEventListener("mouseenter", h), this.popperListeners.push(
      { element: this.popper, event: "mouseenter", handler: r },
      { element: this.popper, event: "mouseleave", handler: a },
      { element: t, event: "mouseleave", handler: l },
      { element: t, event: "mouseenter", handler: h }
    ), this.onProductClick) {
      const m = this.onProductClick, u = (I) => {
        const g = I.target.closest(".ci360-popper-cta");
        g && m(g.dataset.productId ?? "", o);
      };
      this.popper.addEventListener("click", u), this.popperListeners.push(
        { element: this.popper, event: "click", handler: u }
      );
    }
    const c = Pn(t, this.popper, n);
    c.forceUpdate(), this.popper.setAttribute("data-show", ""), this.shouldHidePopper = !1, this.popperInstance = {
      ...c,
      keepOpen: s,
      instanceId: o
    };
    try {
      (p = this.onOpen) == null || p.call(this, o);
    } catch (m) {
      console.warn("onHotspotOpen callback error:", m);
    }
  }
  checkAndHidePopper() {
    var t;
    this.shouldHidePopper && !((t = this.popperInstance) != null && t.keepOpen) && (this.hidePopperTimeout && clearTimeout(this.hidePopperTimeout), this.hidePopperTimeout = setTimeout(() => {
      this.shouldHidePopper && this.hidePopper();
    }, qi));
  }
  hidePopper() {
    var o, s;
    this.hidePopperTimeout && (clearTimeout(this.hidePopperTimeout), this.hidePopperTimeout = null);
    const t = (o = this.popperInstance) == null ? void 0 : o.instanceId;
    this.cleanupPopperListeners(), this.currentHotspotElement && (this.currentHotspotElement.setAttribute("aria-expanded", "false"), this.currentHotspotElement.removeAttribute("aria-describedby"), this.currentHotspotElement = null);
    const i = this.popperInstance;
    if (this.popperInstance = null, t != null)
      try {
        (s = this.onClose) == null || s.call(this, t);
      } catch (n) {
        console.warn("onHotspotClose callback error:", n);
      }
    if (this.popper) {
      this.popper.removeAttribute("data-show"), this.popper.setAttribute("aria-hidden", "true");
      const n = this.popper;
      this.popper = null, setTimeout(() => {
        i == null || i.destroy(), n.remove();
      }, Ji);
    } else
      i == null || i.destroy();
    this.shouldHidePopper = !0;
  }
  /**
   * Force hide the popper immediately, ignoring keepOpen and shouldHidePopper flags
   * Use this when the user starts dragging or other interactions that should close the modal
   */
  forceHidePopper() {
    this.shouldHidePopper = !0, this.popperInstance && (this.popperInstance.keepOpen = !1), this.hidePopper();
  }
  createHotspot(t) {
    const { id: i, keepOpen: o, onClick: s, label: n, markerStyle: r, markerTheme: a, className: l, navigateTo: h, arrowDirection: c } = t, p = typeof h == "string" ? h.trim() : void 0, m = xt(t), u = us(i, n, r);
    if (l && u.classList.add(...l.split(/\s+/).filter(Boolean)), a === "inverted" ? u.classList.add("ci360-hotspot-marker--theme-inverted") : a === "brand" && u.classList.add("ci360-hotspot-marker--theme-brand"), p) {
      if (u.classList.add("cloudimage-360-hotspot--navigate"), u.innerHTML = Tn, c != null && Number.isFinite(c)) {
        const b = u.querySelector(".ci360-navigate-icon");
        b && (b.style.transform = `rotate(${c}deg)`);
      }
      const I = n || p;
      u.setAttribute("role", "button"), u.setAttribute("aria-label", `Navigate to ${I}`), u.setAttribute("aria-roledescription", "navigation hotspot"), u.style.cursor = "pointer";
      const g = m || (n ? xt({ data: { title: n } }) : "");
      g ? (u.setAttribute("aria-haspopup", "true"), u.addEventListener(
        "mouseenter",
        () => this.showPopper({ hotspotElement: u, content: g, id: i, keepOpen: !1 })
      ), u.addEventListener("mouseleave", () => {
        this.shouldHidePopper = !0, this.checkAndHidePopper();
      }), u.addEventListener(
        "focus",
        () => this.showPopper({ hotspotElement: u, content: g, id: i, keepOpen: !1 })
      ), u.addEventListener("blur", () => {
        this.shouldHidePopper = !0, this.checkAndHidePopper();
      })) : (u.removeAttribute("aria-haspopup"), u.removeAttribute("aria-expanded"));
      const v = () => {
        this.hidePopper(), this.onNavigate ? this.onNavigate(p) : console.warn(`[ci360] navigateTo hotspot "${i}" clicked but no onNavigate callback is configured.`);
      };
      u.onclick = (b) => {
        b.stopPropagation(), v();
      }, u.addEventListener("keydown", (b) => {
        (b.key === "Enter" || b.key === " ") && (b.preventDefault(), v());
      }), this.hotspotsContainer.appendChild(u);
      return;
    }
    (s || m && this.trigger === "click") && (u.style.cursor = "pointer"), u.onclick = (I) => {
      var g;
      I.stopPropagation(), m && this.trigger === "click" && (((g = this.popperInstance) == null ? void 0 : g.instanceId) === i ? this.hidePopper() : this.showPopper({ hotspotElement: u, content: m, id: i, keepOpen: o })), s == null || s(I, this.popperInstance, i);
    }, m && this.trigger === "hover" && (u.addEventListener(
      "mouseenter",
      () => this.showPopper({ hotspotElement: u, content: m, id: i, keepOpen: o })
    ), u.addEventListener("mouseleave", () => {
      this.shouldHidePopper = !0, this.checkAndHidePopper();
    }), u.addEventListener(
      "focus",
      () => this.showPopper({ hotspotElement: u, content: m, id: i, keepOpen: o })
    ), u.addEventListener("blur", () => {
      this.shouldHidePopper = !0, this.checkAndHidePopper();
    })), this.hotspotsContainer.appendChild(u);
  }
  hideHotspots() {
    this.hotspotsContainer.querySelectorAll(".cloudimage-360-hotspot").forEach((t) => {
      t.style.opacity = 0, t.style.pointerEvents = "none";
    });
  }
  updateAndShowHotspot(t, i) {
    const { positions: o, id: s } = t, { x: n, y: r } = o[i] ?? {}, a = this.hotspotsContainer.querySelector(`[data-hotspot-id="${s}"]`);
    a && (a.style.translate = `${n}px ${r}px`, a.style.opacity = 1, a.style.pointerEvents = "all");
  }
  /**
   * Shows the popper for a specific hotspot by ID
   * @param {string} hotspotId - The ID of the hotspot to show
   */
  showHotspotById(t) {
    const i = this.hotspotsConfig.find((r) => r.id === t);
    if (!i) return;
    const o = typeof i.navigateTo == "string" && i.navigateTo.trim(), s = o ? xt(i) || (i.label ? xt({ data: { title: i.label } }) : "") : xt(i);
    if (!s) return;
    const n = this.hotspotsContainer.querySelector(`[data-hotspot-id="${t}"]`);
    n && n.style.opacity === "1" && this.showPopper({
      hotspotElement: n,
      content: s,
      id: t,
      keepOpen: o ? !1 : i.keepOpen
    });
  }
  createAllHotspots() {
    this.hotspotsConfig.forEach((t) => this.createHotspot(t));
  }
  initHotspots() {
    this.createAllHotspots();
  }
  destroy() {
    this.hidePopperTimeout && clearTimeout(this.hidePopperTimeout), this.resizeObserver.disconnect(), this.hidePopper(), this.hotspotsContainer.innerHTML = "";
  }
}
const je = typeof navigator < "u" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
class Ue {
  constructor(t, i) {
    this.container = t, this.isClicked = !1, this.imagesX = [], this.imagesY = [], this.imagesGrid = [], this.isGridMode = !1;
    const o = Math.round(window.devicePixelRatio || 1);
    this.devicePixelRatio = je ? Math.min(o, 2) : o, this.id = t.id, this.movementStart = { x: 0, y: 0 }, this.draggingDirection = null, this.isReady = !1, this.velocityX = 0, this.velocityY = 0, this.lastDragTime = 0, this.lastDragX = 0, this.lastDragY = 0, this.inertiaAnimationId = null, this.hasInteracted = !1, this.touchDevice = Uo(), this.dragJustEnded = !1, this.zoomPan = null, this.gestureRecognizer = null, this.zoomControlsUI = null, this.scrollHintUI = null, this.highResLoaded = !1, this.useMainThreadCanvas = je, this.canvasWorker = this.useMainThreadCanvas ? new rs() : new ns(), this.hotspotTimeline = null, this.hotspotTimelineIndicator = null, this.isAnimatingToFrame = !1, this.onMoveHandler = this.onMoveHandler.bind(this), this.destroy = this.destroy.bind(this), this.init(this.container, i);
  }
  /**
   * Close ImageBitmap objects to free GPU memory
   * @param {Array} images - Array of image objects with bitmapImage property
   */
  closeImageBitmaps(t) {
    !t || !Array.isArray(t) || t.forEach((i) => {
      var o;
      (o = i == null ? void 0 : i.bitmapImage) != null && o.close && i.bitmapImage.close();
    });
  }
  emit(t, i = {}) {
    const o = this[t];
    typeof o == "function" && o({ ...i, viewerId: this.id });
  }
  announce(t) {
    Eo(this.ariaLiveRegion, t);
  }
  mouseDown(t) {
    if (!this.isReady) return;
    const i = t.target;
    if (i && i.closest && (i.closest(".cloudimage-360-button") || i.closest(".cloudimage-360-hotspot-timeline") || i.closest(".cloudimage-360-hotspot") || i.closest(".cloudimage-360-zoom-controls")))
      return;
    const { pageX: o, pageY: s } = t;
    if (this.hideHints(), this.hideHotspotPopper(), this.inertiaAnimationId && (cancelAnimationFrame(this.inertiaAnimationId), this.inertiaAnimationId = null), this.autoplayJustStopped = !1, (this.autoplay || this.loopTimeoutId) && (this.stopAutoplay(), this.autoplay = !1, this.autoplayJustStopped = !0), this.isZoomed && this.zoomPan) {
      this.zoomPan.startPan(o, s);
      return;
    }
    this.movementStart = { x: o, y: s }, this.isClicked = !0, this.isDragging = !1, this.inertia && (this.velocityX = 0, this.velocityY = 0, this.lastDragTime = performance.now(), this.lastDragX = o, this.lastDragY = s);
  }
  mouseUp() {
    this.isReady && (!this.isZoomed && !this.autoplayJustStopped && this.showAllIcons(), this.inertia && this.isDragging && (Math.abs(this.velocityX) > 0.1 || Math.abs(this.velocityY) > 0.1) && this.startInertia(), this.isDragging && (this.emit("onDragEnd"), this.dragJustEnded = !0), this.movementStart = { x: 0, y: 0 }, this.isClicked = !1, this.isDragging = !1, this.innerBox.style.cursor = "grab");
  }
  startInertia() {
    const o = this.dragSpeed / Ce, s = o * (this.amountX / this.container.offsetWidth), n = o * (this.amountY / this.container.offsetHeight), r = () => {
      if (this.velocityX *= 0.95, this.velocityY *= 0.95, Math.abs(this.velocityX) < 0.01 && Math.abs(this.velocityY) < 0.01) {
        this.inertiaAnimationId = null;
        return;
      }
      const a = this.velocityX * 16, l = this.velocityY * 16, h = Me({
        deltaX: a,
        deltaY: l,
        reversed: this.dragReverse,
        allowSpinX: this.allowSpinX,
        allowSpinY: this.allowSpinY
      });
      if (h) {
        const c = this.allowSpinX ? Math.max(1, Math.abs(Math.round(a * s))) : 0, p = this.allowSpinY ? Math.max(1, Math.abs(Math.round(l * n))) : 0;
        (c > 0 || p > 0) && this.onMoveHandler(h, c, p);
      }
      this.inertiaAnimationId = requestAnimationFrame(r);
    };
    this.inertiaAnimationId = requestAnimationFrame(r);
  }
  drag(t, i) {
    if (!this.isReady || !this.isClicked) return;
    const o = t - this.movementStart.x, s = i - this.movementStart.y;
    if (this.inertia) {
      const p = performance.now(), m = p - this.lastDragTime;
      m > 0 && m < 100 && (this.velocityX = (t - this.lastDragX) / m, this.velocityY = (i - this.lastDragY) / m), this.lastDragTime = p, this.lastDragX = t, this.lastDragY = i;
    }
    this.draggingDirection = Me({
      deltaX: o,
      deltaY: s,
      reversed: this.dragReverse,
      allowSpinX: this.allowSpinX,
      allowSpinY: this.allowSpinY
    }) || this.draggingDirection;
    const n = this.dragSpeed / Ce, r = n * (this.amountX / this.container.offsetWidth), a = n * (this.amountY / this.container.offsetHeight), l = this.allowSpinX ? Math.abs(Math.round(o * r)) : 0, h = this.allowSpinY ? Math.abs(Math.round(s * a)) : 0;
    (this.allowSpinX && l !== 0 || this.allowSpinY && h !== 0) && (this.hasInteracted = !0, this.hideHotspotPopper(), this.onMoveHandler(this.draggingDirection, l, h), this.movementStart = { x: t, y: i }, setTimeout(() => {
      this.isDragging || (this.isDragging = !0, this.emit("onDragStart"));
    }, Ki));
  }
  mouseMove(t) {
    !this.isReady || !this.isClicked || this.isZoomed || (this.hideAllIcons(), this.drag(t.pageX, t.pageY));
  }
  mouseClick() {
    this.dragJustEnded = !1, this.autoplayJustStopped = !1;
  }
  loadHigherQualityImages(t, i) {
    if (this.isGridMode) {
      const n = et(this.srcGridConfig, t);
      ke({
        cdnPath: n,
        config: this.srcGridConfig,
        onAllImagesLoad: (r) => {
          this.closeImageBitmaps(this.imagesGrid), this.imagesGrid = r, i();
        },
        onError: (r) => this.emit("onError", r)
      });
      return;
    }
    const o = et(this.srcXConfig, t), s = this.allowSpinY ? et(this.srcYConfig, t) : null;
    xe({
      cdnPathX: o,
      cdnPathY: s,
      configX: this.srcXConfig,
      configY: this.srcYConfig,
      onAllImagesLoad: (n, r) => {
        this.closeImageBitmaps(this.imagesX), this.closeImageBitmaps(this.imagesY), this.imagesX = n, this.imagesY = r, i();
      },
      onError: (n) => this.emit("onError", n)
    });
  }
  hideHotspots() {
    this.hotspotsInstance && this.hotspotsInstance.hideHotspots();
  }
  hideHotspotPopper() {
    this.hotspotsInstance && this.hotspotsInstance.forceHidePopper();
  }
  /**
   * Compute the actual image draw dimensions (CSS pixels) matching the renderer.
   * For wide images, drawWidth = containerWidth. For tall/portrait images,
   * drawWidth = containerHeight * imageAspectRatio (centered within the canvas).
   */
  getDrawDimensions() {
    if (!this.canvas || !this.imageAspectRatio) return null;
    const t = this.canvas.clientWidth, i = t / this.imageAspectRatio, o = t / i;
    return this.imageAspectRatio > o ? { drawWidth: t, drawHeight: t / this.imageAspectRatio } : { drawWidth: i * this.imageAspectRatio, drawHeight: i };
  }
  initZoom() {
    const t = this.zoomMax || 5, i = this.zoomStep || 0.5;
    this.zoomPan = new Jo(this.innerBox, {
      zoomMax: t,
      zoomStep: i,
      onZoomChange: (s, n, r) => this.onZoomChange(s, n, r)
    });
    const o = this.getDrawDimensions();
    o && this.zoomPan.setDrawSize(o.drawWidth, o.drawHeight), this.touchDevice && this.pinchZoom !== !1 && (this.gestureRecognizer = new Qo(this.innerBox, {
      zoomMax: t,
      getZoom: () => this.zoomPan ? this.zoomPan.getZoom() : 1,
      onPinchZoom: (s, n, r) => {
        this.zoomPan && (n !== void 0 ? this.zoomPan.zoomTowardPoint(s, n, r) : this.zoomPan.applyTouchZoom(s));
      },
      onPan: (s, n) => {
        this.zoomPan && this.zoomPan.applyTouchPan(s, n);
      },
      onDoubleTap: (s, n) => {
        this.zoomPan && (this.zoomPan.isZoomed() ? this.zoomPan.resetZoom() : this.zoomPan.zoomTowardPoint(2, s, n));
      }
    })), this.zoomControls && !this.touchDevice && (this.zoomControlsUI = os(this.innerBox, {
      position: this.zoomControlsPosition || "bottom-left",
      zoomMax: t,
      onZoomIn: () => this.zoomPan && this.zoomPan.zoomIn(),
      onZoomOut: () => this.zoomPan && this.zoomPan.zoomOut(),
      onReset: () => this.zoomPan && this.zoomPan.resetZoom()
    }));
  }
  onZoomChange(t, i, o) {
    this.inertiaAnimationId && (cancelAnimationFrame(this.inertiaAnimationId), this.inertiaAnimationId = null);
    const s = this.isZoomed;
    if (this.isZoomed = t > 1, this.isZoomed && !s) {
      if (this.hideAllIcons(), this.hideHotspots(), this.zoomControlsUI && this.zoomControlsUI.show(), !this.highResLoaded) {
        this.highResLoaded = !0;
        const n = document.body.offsetWidth;
        this.loadHigherQualityImages(n, () => {
          this.zoomPan && this.updateView(this.zoomPan.getZoom(), this.zoomPan.panX, this.zoomPan.panY);
        });
      }
      this.emit("onZoomIn", { zoomLevel: t }), this.announce("Zoomed in. Use mouse drag or arrow keys to pan. Double-click or press 0 to reset.");
    }
    !this.isZoomed && s && (this.showAllIcons(), this.emit("onZoomOut"), this.announce("Zoomed out")), this.zoomControlsUI && this.zoomControlsUI.updateState(t), this.updateView(t, i, o);
  }
  removeZoom() {
    this.zoomPan && this.zoomPan.resetZoom();
  }
  toggleZoom() {
    this.zoomPan && (this.isZoomed ? this.zoomPan.resetZoom() : this.zoomPan.setZoom(2));
  }
  touchStart(t) {
    if (!this.isReady || !t.touches || !t.touches.length) return;
    const i = t.target;
    if (i && i.closest && (i.closest(".cloudimage-360-button") || i.closest(".cloudimage-360-hotspot-timeline") || i.closest(".cloudimage-360-hotspot") || i.closest(".cloudimage-360-zoom-controls")))
      return;
    if (this.hideHints(), t.touches.length > 1) {
      this.isClicked = !1;
      return;
    }
    if (this.isZoomed) return;
    const { pageX: o, pageY: s } = t.touches[0];
    this.inertiaAnimationId && (cancelAnimationFrame(this.inertiaAnimationId), this.inertiaAnimationId = null), (this.autoplay || this.loopTimeoutId) && (this.stopAutoplay(), this.autoplay = !1), this.hideAllIcons(), this.hideHotspotPopper(), this.movementStart = { x: o, y: s }, this.isClicked = !0, this.isDragging = !1, this.inertia && (this.velocityX = 0, this.velocityY = 0, this.lastDragTime = performance.now(), this.lastDragX = o, this.lastDragY = s);
  }
  touchEnd(t) {
    this.isReady && (this.isZoomed || this.showAllIcons(), this.inertia && this.isDragging && (Math.abs(this.velocityX) > 0.1 || Math.abs(this.velocityY) > 0.1) && this.startInertia(), this.movementStart = { x: 0, y: 0 }, this.isClicked = !1, this.isDragging = !1);
  }
  touchMove(t) {
    if (!this.isReady || this.isZoomed || t.touches && t.touches.length > 1 || !this.isClicked || !t.touches || !t.touches[0]) return;
    const { pageX: i, pageY: o } = t.touches[0];
    t.preventDefault(), this.drag(i, o);
  }
  keyDown(t) {
    if (!this.isReady) return;
    const i = t.target && t.target.tagName;
    if (i === "INPUT" || i === "TEXTAREA" || t.target && t.target.isContentEditable) return;
    const { keyCode: o } = t, s = this.keysReverse;
    if (this.autoplay && this.stopAutoplay(), this.zoomPan && this.zoomPan.handleKeyZoom(o)) {
      t.preventDefault(), this.hideHints();
      return;
    }
    if (this.isZoomed && this.zoomPan && this.zoomPan.handleKeyPan(o, to)) {
      t.preventDefault();
      return;
    }
    switch (Ye(o, this.allowSpinY) && (this.hasInteracted = !0, this.hideAllIcons(), this.hideHints()), o) {
      case 37:
        s ? this.moveLeft() : this.moveRight();
        break;
      case 39:
        s ? this.moveRight() : this.moveLeft();
        break;
      case 38:
        this.allowSpinY && (t.preventDefault(), s ? this.moveTop() : this.moveBottom());
        break;
      case 40:
        this.allowSpinY && (t.preventDefault(), s ? this.moveBottom() : this.moveTop());
        break;
    }
  }
  keyUp(t) {
    const { keyCode: i } = t;
    Ye(i, this.allowSpinY) && this.showAllIcons();
  }
  moveActiveXIndexUp(t) {
    this.isGridMode || (this.orientation = O.X), this.activeImageX = (this.activeImageX + t) % this.amountX;
  }
  moveActiveXIndexDown(t) {
    this.isGridMode || (this.orientation = O.X), this.activeImageX = (this.activeImageX - t + this.amountX) % this.amountX;
  }
  moveActiveYIndexUp(t) {
    this.isGridMode || (this.orientation = O.Y), this.activeImageY = (this.activeImageY + t) % this.amountY;
  }
  moveActiveYIndexDown(t) {
    this.isGridMode || (this.orientation = O.Y), this.activeImageY = (this.activeImageY - t + this.amountY) % this.amountY;
  }
  moveRight(t, i = 1) {
    const o = this.isGridMode ? this.amountX - 1 : this.imagesX.length - 1;
    t && this.activeImageX >= o || (this.moveActiveXIndexUp(i), this.isZoomed || this.updateView());
  }
  moveLeft(t, i = 1) {
    t && this.activeImageX <= 0 || (this.moveActiveXIndexDown(i), this.isZoomed || this.updateView());
  }
  moveTop(t, i = 1) {
    const o = this.isGridMode ? this.amountY - 1 : this.imagesY.length - 1;
    t && this.activeImageY >= o || (this.moveActiveYIndexUp(i), this.isZoomed || this.updateView());
  }
  moveBottom(t, i = 1) {
    t && this.activeImageY <= 0 || (this.moveActiveYIndexDown(i), this.isZoomed || this.updateView());
  }
  onMoveHandler(t, i = 1, o = 1) {
    t === "right" ? this.moveRight(this.stopAtEdgesX, i) : t === "left" ? this.moveLeft(this.stopAtEdgesX, i) : t === "up" ? this.moveTop(this.stopAtEdgesY, o) : t === "down" && this.moveBottom(this.stopAtEdgesY, o), this.emit("onSpin", {
      direction: t,
      activeImageX: this.activeImageX,
      activeImageY: this.activeImageY,
      amountX: this.amountX,
      amountY: this.amountY,
      isGridMode: this.isGridMode
    });
  }
  updateView(t, i, o) {
    let s;
    if (this.isGridMode) {
      const r = this.activeImageY * this.amountX + this.activeImageX;
      s = this.imagesGrid[r];
    } else
      s = this.orientation === O.X ? this.imagesX[this.activeImageX] : this.imagesY[this.activeImageY];
    const n = this.isGridMode ? this.activeImageY * this.amountX + this.activeImageX : this.orientation === O.X ? this.activeImageX : this.activeImageY;
    this.hotspotsInstance && !this.isZoomed && !this.autoplay && this.hotspotsInstance.updateHotspotPosition(n, this.isGridMode ? "grid" : this.orientation), this.hotspotTimelineIndicator && (this.isGridMode || this.orientation === O.X) && this.updateHotspotTimelinePosition(), this.drawImageOnCanvas(s, t, i, o);
  }
  updatePercentageInLoader(t = 0) {
    this.loader && (this.loader.innerText = t + "%");
  }
  adaptCanvasSize(t) {
    const { naturalWidth: i, naturalHeight: o } = t;
    this.imageAspectRatio = i / o;
    const s = this.canvas.clientWidth, n = s / this.imageAspectRatio;
    this.canvasWorker.postMessage({
      action: "adaptCanvasSize",
      devicePixelRatio: this.devicePixelRatio,
      imageAspectRatio: this.imageAspectRatio,
      containerWidth: s,
      containerHeight: n
    });
  }
  drawImageOnCanvas(t, i = 1, o = 0, s = 0) {
    this.pendingDrawData = { imageData: t, zoomScale: i, pointerX: o, pointerY: s }, this.drawFrameRequested || (this.drawFrameRequested = !0, requestAnimationFrame(() => {
      if (this.drawFrameRequested = !1, this.pendingDrawData) {
        const { imageData: n, zoomScale: r, pointerX: a, pointerY: l } = this.pendingDrawData;
        this.canvasWorker.postMessage({
          action: "drawImageOnCanvas",
          imageData: n,
          zoomScale: r,
          pointerX: a,
          pointerY: l
        });
      }
    }));
  }
  pushImageToSet(t, i, o) {
    o === "grid" ? this.imagesGrid[i] = t : o === O.X ? this.imagesX[i] = t : this.imagesY[i] = t;
  }
  calculatePercentage() {
    if (this.isGridMode) {
      const o = this.amountX * this.amountY, s = this.imagesGrid.filter(Boolean).length;
      return Math.round(s / o * 100);
    }
    const t = this.amountX + this.amountY, i = this.imagesX.filter(Boolean).length + this.imagesY.filter(Boolean).length;
    return Math.round(i / t * 100);
  }
  onImageLoad(t, i, o) {
    this.pushImageToSet(t, i, o), this.updatePercentageInLoader(this.calculatePercentage());
  }
  onFirstImageLoaded(t, i) {
    this.createContainers(t), this.adaptCanvasSize(i), this.drawImageOnCanvas(i), this.setupResizeObserver();
  }
  setupResizeObserver() {
    if (this.resizeObserver || !this.container) return;
    let t = this.container.offsetWidth;
    this.resizeObserver = new ResizeObserver((i) => {
      const o = i[0];
      if (!o) return;
      const s = Math.round(o.contentRect.width);
      s === t || s === 0 || (t = s, requestAnimationFrame(() => {
        let n;
        if (this.isGridMode ? n = this.imagesGrid[this.activeImageY * this.amountX + this.activeImageX] : this.orientation === O.Y && this.imagesY.length > 0 ? n = this.imagesY[this.activeImageY] : n = this.imagesX[this.activeImageX], n) {
          if (this.adaptCanvasSize(n), this.zoomPan) {
            const r = this.getDrawDimensions();
            r && this.zoomPan.setDrawSize(r.drawWidth, r.drawHeight, !0);
          }
          this.updateView();
        }
      }));
    }), this.resizeObserver.observe(this.container);
  }
  onAllImagesLoaded() {
    if (this.addAllIcons(), this.isReady = !0, this.isGridMode || (this.amountX = this.imagesX.length, this.amountY = this.imagesY.length), this.activeImageX = this.autoplayReverse ? this.amountX - 1 : 0, this.activeImageY = this.autoplayReverse ? this.amountY - 1 : 0, this.hotspots)
      if (this.hotspotsInstance = new An(this.hotspots, this.innerBox, this.imageAspectRatio, {
        trigger: this.hotspotTrigger,
        onOpen: this.onHotspotOpen,
        onClose: this.onHotspotClose,
        onProductClick: this.onProductClick,
        onNavigate: this.onNavigate
      }), this.addHotspotTimeline(), this.autoplay)
        this.hotspotsInstance.hideHotspots(), this.hideHotspotTimeline();
      else {
        const t = this.isGridMode ? this.activeImageY * this.amountX + this.activeImageX : this.activeImageX, i = this.isGridMode ? "grid" : this.orientation;
        this.hotspotsInstance.updateHotspotPosition(t, i), this.showHotspotTimeline();
      }
    if (this.emit("onLoad", {
      imagesX: this.isGridMode ? this.amountX : this.imagesX.length,
      imagesY: this.isGridMode ? this.amountY : this.imagesY.length,
      ...this.isGridMode && { imagesGrid: this.imagesGrid.filter(Boolean).length }
    }), this.emit("onReady"), this.announce("360 degree view loaded. Use mouse drag or arrow keys to rotate."), this.hints !== !1 && !this.autoplay) {
      const t = this.hints === !0 || this.hints === void 0 ? Te(this.viewerConfig, this.touchDevice) : this.hints;
      t && t.length > 0 && (this.hintsOverlay = Pe(this.innerBox, t), Ae(this.hintsOverlay));
    }
    this.autoplay && (this.hideAllIcons(), $o(this.play.bind(this))());
  }
  toggleFullscreen(t) {
    t.stopPropagation(), this.hideHotspotPopper(), se() ? He() : qo(this.container);
  }
  onFullscreenChange() {
    const t = se() === this.container, i = this.container.classList.contains("cloudimage-360--fullscreen");
    t !== i && (this.container.classList.toggle("cloudimage-360--fullscreen", t), bo(this.fullscreenIcon, t), t ? (this.emit("onFullscreenOpen"), this.announce("Opened fullscreen mode. Press Escape to exit.")) : (this.emit("onFullscreenClose"), this.announce("Exited fullscreen mode")));
  }
  play() {
    if (this.isClicked) return;
    this.hide360ViewCircleIcon(), this.emit("onAutoplayStart");
    let t;
    if (this.isGridMode) {
      const s = this.autoplayBehavior;
      s === "spin-x" ? t = this.amountX : s === "spin-y" ? t = this.amountY : t = Math.max(this.amountX, this.amountY);
    } else
      t = this.amountX + this.amountY;
    const i = this.speed * 36 / t, o = {
      left: this.moveLeft.bind(this),
      right: this.moveRight.bind(this),
      top: this.moveTop.bind(this),
      bottom: this.moveBottom.bind(this)
    };
    this.loopTimeoutId = window.setInterval(() => {
      if (this.playOnce && No({
        autoplayBehavior: this.autoplayBehavior,
        activeImageX: this.activeImageX,
        activeImageY: this.activeImageY,
        amountX: this.amountX,
        amountY: this.amountY,
        autoplayReverse: this.autoplayReverse,
        isGridMode: this.isGridMode
      })) {
        this.stopAutoplay();
        return;
      }
      if (this.isGridMode) {
        this.gridAutoplayTick(o);
        return;
      }
      Wo({
        autoplayBehavior: this.autoplayBehavior,
        activeImageX: this.activeImageX,
        activeImageY: this.activeImageY,
        amountX: this.amountX,
        amountY: this.amountY,
        autoplayReverse: this.autoplayReverse,
        spinDirection: this.spinDirection
      }) && (this.spinDirection = jo(this.spinDirection));
      const r = this.spinDirection === "y";
      Fo({
        autoplayBehavior: this.autoplayBehavior,
        spinY: r,
        reversed: this.autoplayReverse,
        loopTriggers: o
      });
    }, i);
  }
  gridAutoplayTick(t) {
    const i = this.autoplayReverse, o = this.autoplayBehavior;
    if (o === "spin-x") {
      i ? t.left() : t.right();
      return;
    }
    if (o === "spin-y") {
      i ? t.bottom() : t.top();
      return;
    }
    if (o === "spin-xy") {
      const s = i ? 0 : this.amountX - 1, n = this.activeImageX === s;
      i ? this.activeImageX = (this.activeImageX - 1 + this.amountX) % this.amountX : this.activeImageX = (this.activeImageX + 1) % this.amountX, n && (i ? this.activeImageY = (this.activeImageY - 1 + this.amountY) % this.amountY : this.activeImageY = (this.activeImageY + 1) % this.amountY), this.isZoomed || this.updateView(), this.emit("onSpin", {
        direction: i ? "left" : "right",
        activeImageX: this.activeImageX,
        activeImageY: this.activeImageY,
        amountX: this.amountX,
        amountY: this.amountY,
        isGridMode: !0
      });
      return;
    }
    if (o === "spin-yx") {
      const s = i ? 0 : this.amountY - 1, n = this.activeImageY === s;
      i ? this.activeImageY = (this.activeImageY - 1 + this.amountY) % this.amountY : this.activeImageY = (this.activeImageY + 1) % this.amountY, n && (i ? this.activeImageX = (this.activeImageX - 1 + this.amountX) % this.amountX : this.activeImageX = (this.activeImageX + 1) % this.amountX), this.isZoomed || this.updateView(), this.emit("onSpin", {
        direction: i ? "down" : "up",
        activeImageX: this.activeImageX,
        activeImageY: this.activeImageY,
        amountX: this.amountX,
        amountY: this.amountY,
        isGridMode: !0
      });
    }
  }
  stopAutoplay() {
    if (this.showAllIcons(), this.autoplay = !1, window.clearInterval(this.loopTimeoutId), this.loopTimeoutId = null, this.emit("onAutoplayStop"), this.hotspotsInstance) {
      const t = this.isGridMode ? this.activeImageY * this.amountX + this.activeImageX : this.activeImageX, i = this.isGridMode ? "grid" : this.orientation;
      this.hotspotsInstance.updateHotspotPosition(t, i), this.showHotspotTimeline();
    }
    if (this.hints !== !1 && !this.hintsOverlay && !this.hintsHidden) {
      const t = this.hints === !0 ? Te(this.viewerConfig, this.touchDevice) : this.hints;
      t && t.length > 0 && (this.hintsOverlay = Pe(this.innerBox, t), Ae(this.hintsOverlay));
    }
  }
  destroy() {
    this.stopAutoplay(), this.inertiaAnimationId && (cancelAnimationFrame(this.inertiaAnimationId), this.inertiaAnimationId = null), this.clickOverlay && (this.clickOverlay.removeEventListener("click", this.clickOverlayHandler), this.clickOverlay = null, this.clickOverlayHandler = null), this.removeEvents(), this.zoomPan && (this.zoomPan.destroy(), this.zoomPan = null), this.gestureRecognizer && (this.gestureRecognizer.destroy(), this.gestureRecognizer = null), this.zoomControlsUI && (this.zoomControlsUI.destroy(), this.zoomControlsUI = null), this.scrollHintUI && (this.scrollHintUI.destroy(), this.scrollHintUI = null), this.closeImageBitmaps(this.imagesX), this.closeImageBitmaps(this.imagesY), this.closeImageBitmaps(this.imagesGrid), this.imagesX = [], this.imagesY = [], this.imagesGrid = [], this.isGridMode = !1, this.isReady = !1, this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null), this.canvasWorker && (this.canvasWorker.terminate(), this.canvasWorker = null), this.hotspotsInstance && this.hotspotsInstance.destroy(), this.hintsOverlay && this.hintsOverlay.parentNode && (this.hintsOverlay.parentNode.removeChild(this.hintsOverlay), this.hintsOverlay = null), this.hotspotTimeline && this.hotspotTimeline.parentNode && (this.hotspotTimeline.parentNode.removeChild(this.hotspotTimeline), this.hotspotTimeline = null, this.hotspotTimelineIndicator = null), this.innerBox && this.innerBox.classList.remove("has-hotspot-timeline"), se() === this.container && He(), this.container && (this.container.classList.remove("ci360-theme-dark", "ci360-hotspot-marker-inverted", "ci360-hotspot-marker-brand", "cloudimage-360--fullscreen"), this.container.style.removeProperty("--ci360-hotspot-brand-color"), this.container.innerHTML = "");
  }
  /**
   * Release memory by closing ImageBitmap objects without destroying the viewer.
   * Useful for freeing memory when the viewer scrolls off-screen on mobile.
   * Call reloadImages() to restore the images when the viewer becomes visible again.
   */
  releaseMemory() {
    this.stopAutoplay(), this.closeImageBitmaps(this.imagesX), this.closeImageBitmaps(this.imagesY), this.closeImageBitmaps(this.imagesGrid), this.imagesX = [], this.imagesY = [], this.imagesGrid = [], this.isMemoryReleased = !0;
  }
  /**
   * Reload images after memory was released.
   * Call this when the viewer becomes visible again after releaseMemory() was called.
   */
  reloadImages() {
    if (!this.isMemoryReleased) return;
    this.isMemoryReleased = !1;
    const t = this.container.offsetWidth;
    this.loadHigherQualityImages(t, () => {
      this.updateView();
    });
  }
  addInitialIcon() {
    this.initialIcon || this.hide360Logo || (this.initialIcon = Je(this.logoSrc), this.innerBox.appendChild(this.initialIcon));
  }
  showInitialIcon() {
    !this.initialIcon || this.hasInteracted || (this.initialIcon.style.opacity = 1, this.initialIcon.style.pointerEvents = "auto");
  }
  hideInitialIcon() {
    this.initialIcon && (this.initialIcon.style.opacity = 0, this.initialIcon.style.pointerEvents = "none");
  }
  addFullscreenIcon() {
    !this.fullscreen || !Ko() || (this.fullscreenIcon = yo(), this.fullscreenIcon.onclick = this.toggleFullscreen.bind(this), this.iconsContainer.appendChild(this.fullscreenIcon));
  }
  showFullscreenIcon() {
    this.fullscreenIcon && (this.fullscreenIcon.style.opacity = 1);
  }
  hideFullscreenIcon() {
    this.fullscreenIcon && (this.fullscreenIcon.style.opacity = 0);
  }
  add360ViewCircleIcon() {
    this.view360CircleIcon || (this.view360CircleIcon = po(this.bottomCircleOffset), this.innerBox.appendChild(this.view360CircleIcon));
  }
  show360ViewCircleIcon() {
    this.view360CircleIcon && (this.view360CircleIcon.style.opacity = 1);
  }
  hide360ViewCircleIcon() {
    this.view360CircleIcon && (this.view360CircleIcon.style.opacity = 0);
  }
  addLoadingSpinner() {
    this.loadingSpinner = Io(), this.innerBox.appendChild(this.loadingSpinner);
  }
  showLoadingSpinner() {
    this.loadingSpinner && (this.hideAllIcons(), this.loadingSpinner.style.opacity = 1);
  }
  hideLoadingSpinner() {
    this.loadingSpinner && (this.loadingSpinner.style.opacity = 0);
  }
  hideHints() {
    !this.hintsOverlay || this.hintsHidden || (this.hintsHidden = !0, Ao(this.hintsOverlay));
  }
  addHotspotTimeline() {
    if (!this.hotspots || this.hotspotTimeline) return;
    const t = this.isGridMode ? this.amountX * this.amountY : this.amountX, i = Yo(this.innerBox, t, this.hotspots);
    if (!i) return;
    this.hotspotTimeline = i.element, this.hotspotTimelineIndicator = i.indicator, this.innerBox.classList.add("has-hotspot-timeline"), this.hotspotTimeline.querySelectorAll(".cloudimage-360-hotspot-timeline-dot").forEach((s) => {
      s.addEventListener("click", (n) => {
        n.stopPropagation(), this.hideAllIcons(), this.hideHints();
        const r = parseInt(s.getAttribute("data-frame"), 10), a = s.getAttribute("data-hotspot-id");
        isNaN(r) || this.animateToFrame(r, a);
      });
    }), this.updateHotspotTimelinePosition();
  }
  showHotspotTimeline() {
    Mo(this.hotspotTimeline);
  }
  hideHotspotTimeline() {
    Ho(this.hotspotTimeline);
  }
  updateHotspotTimelinePosition() {
    if (this.isGridMode) {
      const t = this.activeImageY * this.amountX + this.activeImageX;
      Se(this.hotspotTimelineIndicator, t, this.amountX * this.amountY);
    } else
      Se(this.hotspotTimelineIndicator, this.activeImageX, this.amountX);
  }
  /**
   * Animates the viewer to a target frame, optionally showing a hotspot popup on arrival
   * @param {number} targetFrame - The frame to animate to
   * @param {string} [hotspotId] - Optional hotspot ID to show popup for after animation
   */
  animateToFrame(t, i) {
    this.hotspotsInstance && this.hotspotsInstance.hidePopper();
    const o = this.isGridMode ? this.activeImageY * this.amountX + this.activeImageX : this.activeImageX;
    if (this.isAnimatingToFrame || t === o) {
      t === o && i && this.hotspotsInstance && this.hotspotTimelineOnClick && this.hotspotsInstance.showHotspotById(i);
      return;
    }
    if (this.isAnimatingToFrame = !0, this.hasInteracted = !0, (this.autoplay || this.loopTimeoutId) && (this.stopAutoplay(), this.autoplay = !1), this.inertiaAnimationId && (cancelAnimationFrame(this.inertiaAnimationId), this.inertiaAnimationId = null), this.isGridMode) {
      const m = this.amountX * this.amountY, u = Math.max(0, Math.min(t, m - 1));
      this.activeImageY = Math.floor(u / this.amountX), this.activeImageX = u % this.amountX, this.isZoomed || this.updateView(), this.emit("onSpin", {
        direction: u > o ? "right" : "left",
        activeImageX: this.activeImageX,
        activeImageY: this.activeImageY,
        amountX: this.amountX,
        amountY: this.amountY,
        isGridMode: !0
      }), this.isAnimatingToFrame = !1, i && this.hotspotsInstance && this.hotspotTimelineOnClick && setTimeout(() => {
        this.hotspotsInstance.showHotspotById(i);
      }, 50);
      return;
    }
    const s = this.activeImageX, n = (t - s + this.amountX) % this.amountX, r = (s - t + this.amountX) % this.amountX, a = n <= r, l = a ? n : r;
    if (l === 0) {
      this.isAnimatingToFrame = !1;
      return;
    }
    const h = 30;
    let c = l;
    const p = () => {
      if (c <= 0) {
        this.isAnimatingToFrame = !1, i && this.hotspotsInstance && this.hotspotTimelineOnClick && setTimeout(() => {
          this.hotspotsInstance.showHotspotById(i);
        }, 50);
        return;
      }
      a ? this.moveRight() : this.moveLeft(), c--, c > 0 ? setTimeout(p, h) : (this.isAnimatingToFrame = !1, i && this.hotspotsInstance && this.hotspotTimelineOnClick && setTimeout(() => {
        this.hotspotsInstance.showHotspotById(i);
      }, 50));
    };
    p();
  }
  remove360ViewCircleIcon() {
    this.view360CircleIcon && (this.innerBox.removeChild(this.view360CircleIcon), this.view360CircleIcon = null);
  }
  addAllIcons() {
    this.removeLoader(), this.iconsContainer && (this.innerBox.style.cursor = "grab", this.addLoadingSpinner(), this.addFullscreenIcon(), this.initialIconShown && this.addInitialIcon(), this.bottomCircle && this.add360ViewCircleIcon(), this.initZoom());
  }
  showAllIcons() {
    this.showInitialIcon(), this.show360ViewCircleIcon(), this.showFullscreenIcon(), this.showHotspotTimeline(), this.zoomControlsUI && this.zoomControlsUI.show();
  }
  hideAllIcons() {
    this.hideInitialIcon(), this.hide360ViewCircleIcon(), this.hideFullscreenIcon(), this.zoomControlsUI && this.zoomControlsUI.hide();
  }
  removeLoader() {
    this.loader && (this.innerBox.removeChild(this.loader), this.loader = null);
  }
  attachEvents(t, i, o) {
    t && this.addMouseEvents(), i && this.addTouchEvents(), o && this.addKeyboardEvents(), this.addEscKeyHandler(), this.addFullscreenChangeHandler();
  }
  removeEvents() {
    this.removeMouseEvents(), this.removeTouchEvents(), this.removeKeyboardEvents(), this.removeEscKeyHandler(), this.removeFullscreenChangeHandler();
  }
  addMouseEvents() {
    this.boundMouseClick = this.mouseClick.bind(this), this.boundMouseDown = this.mouseDown.bind(this), this.boundMouseMove = be(this.mouseMove.bind(this), we), this.boundMouseUp = this.mouseUp.bind(this), this.innerBox.addEventListener("click", this.boundMouseClick), this.innerBox.addEventListener("mousedown", this.boundMouseDown), document.addEventListener("mousemove", this.boundMouseMove), document.addEventListener("mouseup", this.boundMouseUp);
  }
  addTouchEvents() {
    this.boundTouchStart = this.touchStart.bind(this), this.boundTouchEnd = this.touchEnd.bind(this), this.boundTouchMove = be(this.touchMove.bind(this), we), this.container.addEventListener("touchstart", this.boundTouchStart, { passive: !1 }), this.container.addEventListener("touchend", this.boundTouchEnd), this.container.addEventListener("touchmove", this.boundTouchMove, { passive: !1 });
  }
  addKeyboardEvents() {
    this.boundKeyDown = this.keyDown.bind(this), this.boundKeyUp = this.keyUp.bind(this), document.addEventListener("keydown", this.boundKeyDown), document.addEventListener("keyup", this.boundKeyUp);
  }
  addEscKeyHandler() {
    this.boundEscHandler = (t) => {
      t.keyCode === 27 && this.isZoomed && this.removeZoom();
    }, document.addEventListener("keydown", this.boundEscHandler);
  }
  removeEscKeyHandler() {
    document.removeEventListener("keydown", this.boundEscHandler);
  }
  addFullscreenChangeHandler() {
    this.boundFullscreenChange = this.onFullscreenChange.bind(this), document.addEventListener("fullscreenchange", this.boundFullscreenChange), document.addEventListener("webkitfullscreenchange", this.boundFullscreenChange);
  }
  removeFullscreenChangeHandler() {
    document.removeEventListener("fullscreenchange", this.boundFullscreenChange), document.removeEventListener("webkitfullscreenchange", this.boundFullscreenChange);
  }
  removeMouseEvents() {
    this.innerBox.removeEventListener("click", this.boundMouseClick), this.innerBox.removeEventListener("mousedown", this.boundMouseDown), document.removeEventListener("mousemove", this.boundMouseMove), document.removeEventListener("mouseup", this.boundMouseUp);
  }
  removeTouchEvents() {
    this.container.removeEventListener("touchstart", this.boundTouchStart), this.container.removeEventListener("touchend", this.boundTouchEnd), this.container.removeEventListener("touchmove", this.boundTouchMove);
  }
  removeKeyboardEvents() {
    document.removeEventListener("keydown", this.boundKeyDown), document.removeEventListener("keyup", this.boundKeyUp);
  }
  createContainers(t) {
    if (this.iconsContainer = Ee(this.innerBox), this.canvas = go(this.innerBox, t), this.loader = Co(this.innerBox), this.ariaLiveRegion = ko(this.innerBox), this.useMainThreadCanvas)
      this.canvasWorker.postMessage({
        action: "initCanvas",
        offscreen: this.canvas,
        devicePixelRatio: this.devicePixelRatio
      });
    else {
      const i = this.canvas.transferControlToOffscreen();
      this.canvasWorker.postMessage(
        {
          action: "initCanvas",
          offscreen: i,
          devicePixelRatio: this.devicePixelRatio
        },
        [i]
      );
    }
    Pt(this.innerBox, ".cloudimage-360-placeholder");
  }
  update(t) {
    this.isReady && (this.stopAutoplay(), this.zoomPan && (this.zoomPan.destroy(), this.zoomPan = null), this.gestureRecognizer && (this.gestureRecognizer.destroy(), this.gestureRecognizer = null), this.zoomControlsUI && (this.zoomControlsUI.destroy(), this.zoomControlsUI = null), this.scrollHintUI && (this.scrollHintUI.destroy(), this.scrollHintUI = null), this.isZoomed = !1, this.highResLoaded = !1, this.hotspotsInstance && (this.hotspotsInstance.destroy(), this.hotspotsInstance = null), this.hotspotTimeline && this.hotspotTimeline.parentNode && (this.hotspotTimeline.parentNode.removeChild(this.hotspotTimeline), this.hotspotTimeline = null, this.hotspotTimelineIndicator = null), this.innerBox && this.innerBox.classList.remove("has-hotspot-timeline"), this.hintsOverlay && this.hintsOverlay.parentNode && (this.hintsOverlay.parentNode.removeChild(this.hintsOverlay), this.hintsOverlay = null), this.hintsHidden = !1, Pt(this.innerBox, ".cloudimage-360-icons-container"), this.init(this.container, t, !0), this.iconsContainer = Ee(this.innerBox), this.onAllImagesLoaded());
  }
  init(t, i, o) {
    const s = i ? oo(i) : eo(t), {
      folder: n,
      apiVersion: r,
      filenameX: a,
      filenameY: l,
      filenameGrid: h,
      imageListX: c,
      imageListY: p,
      imageListGrid: m,
      indexZeroBase: u,
      amountX: I,
      amountY: g,
      draggable: v = !0,
      swipeable: b = !0,
      keys: k,
      keysReverse: C,
      bottomCircleOffset: y,
      autoplay: E,
      autoplayBehavior: f,
      playOnce: w,
      speed: x,
      autoplayReverse: P,
      fullscreen: A,
      magnifier: S,
      pointerZoom: M,
      zoomMax: Y,
      zoomStep: j,
      zoomControls: U,
      zoomControlsPosition: H,
      scrollHint: Z,
      ciToken: at,
      ciFilters: $,
      ciTransformation: lt,
      lazyload: ht,
      dragSpeed: ot,
      stopAtEdges: Q,
      stopAtEdgesX: tt,
      stopAtEdgesY: N,
      imageInfo: st = "black",
      initialIconShown: ct,
      bottomCircle: K,
      hotspots: yt,
      hotspotTrigger: qt = "hover",
      dragReverse: bt,
      hide360Logo: Jt,
      logoSrc: Yt,
      inertia: Qt,
      pinchZoom: te,
      hints: Mt,
      theme: wt,
      markerTheme: Ht,
      brandColor: Rt,
      initOnClick: q,
      hotspotTimelineOnClick: dt = !0,
      aspectRatio: zt,
      cropAspectRatio: Zt,
      cropGravity: Ct,
      // Event callbacks
      onReady: Dt,
      onLoad: Bt,
      onSpin: Gt,
      onAutoplayStart: _t,
      onAutoplayStop: ui,
      onFullscreenOpen: pi,
      onFullscreenClose: mi,
      onZoomIn: fi,
      onZoomOut: gi,
      onDragStart: vi,
      onDragEnd: yi,
      onHotspotOpen: bi,
      onHotspotClose: wi,
      onProductClick: Ci,
      onNavigate: Ii,
      onError: xi
    } = s, ee = { ciToken: at, ciFilters: $, ciTransformation: lt, cropAspectRatio: Zt, cropGravity: Ct }, me = Wt(c, []), fe = Wt(p, []);
    let ut = Wt(m, []);
    ut.length && Array.isArray(ut[0]) && (ut = ut.flat()), this.isGridMode = !!(h || ut.length);
    const ki = s.zoomMax === 5 && M > 1 ? Math.min(M, 5) : Y || 5;
    if (this.viewerConfig = s, this.amountX = me.length || I, this.amountY = fe.length || g, this.allowSpinX = !!this.amountX, this.allowSpinY = !!this.amountY, this.isGridMode && (this.allowSpinX = !0, this.allowSpinY = !0), this.orientation = this.allowSpinX ? O.X : O.Y, this.activeImageX = P ? this.amountX - 1 : 0, this.activeImageY = P ? this.amountY - 1 : 0, this.bottomCircleOffset = y, this.autoplay = E, this.autoplayBehavior = f, this.playOnce = w, this.speed = x, this.autoplayReverse = P, this.fullscreen = A, this.zoomMax = ki, this.zoomStep = j || 0.5, this.zoomControls = U ?? !0, this.zoomControlsPosition = H || "bottom-left", this.scrollHint = Z ?? !0, this.dragSpeed = Math.max(ot, Qi), this.stopAtEdges = Q, this.stopAtEdgesX = tt ?? Q, this.stopAtEdgesY = N ?? Q, this.ciParams = ee, this.apiVersion = r, this.keysReverse = C, this.info = st, this.keys = k, this.innerBox = this.innerBox ?? wo(this.container), this.container.style.aspectRatio = zt || "", this.initialIconShown = ct, this.bottomCircle = K, this.spinDirection = Vo(this.autoplayBehavior, this.allowSpinX, this.allowSpinY), this.dragReverse = bt, this.hotspots = yt, this.hotspotTrigger = qt, this.onHotspotOpen = bi, this.onHotspotClose = wi, this.onProductClick = Ci, this.onNavigate = Ii, this.hide360Logo = Jt, this.logoSrc = Yt, this.inertia = Qt, this.pinchZoom = te, this.hints = Mt, this.hotspotTimelineOnClick = dt, wt === "dark" ? this.container.classList.add("ci360-theme-dark") : wt === "light" && this.container.classList.remove("ci360-theme-dark"), this.container.classList.remove("ci360-hotspot-marker-inverted", "ci360-hotspot-marker-brand"), Ht === "inverted" ? this.container.classList.add("ci360-hotspot-marker-inverted") : Ht === "brand" && this.container.classList.add("ci360-hotspot-marker-brand"), Rt ? this.container.style.setProperty("--ci360-hotspot-brand-color", Rt) : this.container.style.removeProperty("--ci360-hotspot-brand-color"), this.onReady = Dt, this.onLoad = Bt, this.onSpin = Gt, this.onAutoplayStart = _t, this.onAutoplayStop = ui, this.onFullscreenOpen = pi, this.onFullscreenClose = mi, this.onZoomIn = fi, this.onZoomOut = gi, this.onDragStart = vi, this.onDragEnd = yi, this.onError = xi, this.srcXConfig = {
      folder: n,
      filename: a,
      imageList: me,
      container: t,
      innerBox: this.innerBox,
      apiVersion: r,
      ciParams: ee,
      lazyload: ht,
      amount: this.amountX,
      indexZeroBase: u,
      autoplayReverse: P,
      orientation: O.X
    }, this.srcYConfig = {
      ...this.srcXConfig,
      filename: l,
      imageList: fe,
      orientation: O.Y,
      amount: this.amountY
    }, this.srcGridConfig = {
      folder: n,
      filename: h,
      imageList: ut,
      container: t,
      innerBox: this.innerBox,
      apiVersion: r,
      ciParams: ee,
      lazyload: ht,
      amount: this.amountX * this.amountY,
      amountX: this.amountX,
      amountY: this.amountY,
      indexZeroBase: u,
      autoplayReverse: P
    }, o && this.removeEvents(), o) {
      this.attachEvents(v, b, k);
      return;
    }
    if (q) {
      this.showInitOnClickPreview(v, b, k);
      return;
    }
    this.attachEvents(v, b, k), this.startLoadingImages();
  }
  showInitOnClickPreview(t, i, o) {
    const s = this.isGridMode ? this.srcGridConfig : this.allowSpinX ? this.srcXConfig : this.srcYConfig, n = this.container.offsetWidth, r = s.imageList.length ? null : et(s, n), [a] = s.imageList, l = a || (r ? ei(r, s.indexZeroBase) : null);
    if (!l) return;
    const h = new Image();
    h.className = "cloudimage-360-init-preview", h.alt = "360° view preview — click to load", h.style.cssText = `
      display: block;
      width: 100%;
      object-fit: contain;
      object-position: center;
    `, h.src = l, this.innerBox.appendChild(h), this.clickOverlay = fo(this.logoSrc), this.innerBox.appendChild(this.clickOverlay), this.clickOverlayHandler = () => {
      this.clickOverlay.removeEventListener("click", this.clickOverlayHandler), Pt(this.innerBox, ".cloudimage-360-click-overlay"), Pt(this.innerBox, ".cloudimage-360-init-preview"), this.clickOverlay = null, this.clickOverlayHandler = null, this.attachEvents(t, i, o), this.startLoadingImages();
    }, this.clickOverlay.addEventListener("click", this.clickOverlayHandler);
  }
  startLoadingImages() {
    const t = this.container.offsetWidth;
    if (this.isGridMode) {
      const i = this.srcGridConfig.imageList.length ? null : et(this.srcGridConfig, t), o = (s) => {
        ke({
          cdnPath: i,
          config: this.srcGridConfig,
          onImageLoad: (n, r) => {
            this.pushImageToSet(n, r, "grid"), this.updatePercentageInLoader(this.calculatePercentage());
          },
          onFirstImageLoad: (n) => this.onFirstImageLoaded(s, n),
          onAllImagesLoad: (n, r) => {
            this.imagesGrid = n, r && r.errorCount > 0 && this.emit("onError", { errorCount: r.errorCount, errors: r.errors, totalImages: this.amountX * this.amountY }), this.onAllImagesLoaded();
          },
          onError: (n) => this.emit("onError", n)
        });
      };
      oe(i, this.srcGridConfig, o);
    } else {
      const i = this.allowSpinX && !this.srcXConfig.imageList.length ? et(this.srcXConfig, t) : null, o = this.allowSpinY && !this.srcYConfig.imageList.length ? et(this.srcYConfig, t) : null, s = (n) => {
        xe({
          cdnPathX: i,
          cdnPathY: o,
          configX: this.srcXConfig,
          configY: this.srcYConfig,
          onImageLoad: (r, a, l) => this.onImageLoad(r, a, l),
          onFirstImageLoad: (r) => this.onFirstImageLoaded(n, r),
          onAllImagesLoad: this.onAllImagesLoaded.bind(this),
          onError: (r) => this.emit("onError", r)
        });
      };
      this.allowSpinX ? oe(i, this.srcXConfig, s) : this.allowSpinY && oe(o, this.srcYConfig, s);
    }
  }
}
const $e = typeof navigator < "u" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
class Xn {
  constructor() {
    this.views = /* @__PURE__ */ new Map(), this.initAll = this.initAll.bind(this), this.getViews = this.getViews.bind(this), this.memoryObserver = null, this.memoryManagementAutoEnabled = !1;
  }
  generateId() {
    return `ci360-${Math.random().toString(36).slice(2, 11)}`;
  }
  init(t, i) {
    if (!t) return;
    const o = t.id || this.generateId();
    t.id || (t.id = o);
    const s = new Ue(t, i);
    return this.views.set(o, s), $e && !this.memoryManagementAutoEnabled && (this.memoryManagementAutoEnabled = !0, setTimeout(() => this.enableMemoryManagement(), 100)), s;
  }
  initAll(t = "cloudimage-360") {
    [...document.querySelectorAll(`.${t}`)].filter(Boolean).forEach((o) => {
      const s = o.id || this.generateId();
      o.id || (o.id = s);
      const n = new Ue(o);
      this.views.set(s, n);
    }), $e && !this.memoryManagementAutoEnabled && this.views.size > 0 && (this.memoryManagementAutoEnabled = !0, setTimeout(() => this.enableMemoryManagement(), 100));
  }
  destroy(t) {
    const i = this.getViewById(t);
    i && (i.destroy(), this.views.delete(t));
  }
  destroyAll() {
    this.views.forEach((t) => {
      t.destroy();
    }), this.views.clear();
  }
  getViewById(t) {
    return this.views.get(t);
  }
  getViews() {
    return Array.from(this.views.values());
  }
  updateView(t, i) {
    const o = this.getViewById(t);
    if (!o) return null;
    const s = { ...o.viewerConfig, ...i };
    o.destroy();
    const n = document.getElementById(t);
    return this.init(n, s);
  }
  /**
   * Enable automatic memory management for mobile devices.
   * Releases memory for off-screen viewers and reloads when they become visible.
   * Also releases memory when the page is backgrounded (visibilitychange).
   * Call this after initializing all viewers.
   * @param {Object} options - Configuration options
   * @param {string} options.rootMargin - IntersectionObserver rootMargin (default: '200px')
   */
  enableMemoryManagement(t = {}) {
    this.memoryObserver && this.memoryObserver.disconnect();
    const i = t.rootMargin || "200px";
    this.memoryObserver = new IntersectionObserver(
      (o) => {
        o.forEach((s) => {
          const n = this.getViewById(s.target.id);
          n && (s.isIntersecting ? n.isMemoryReleased && n.reloadImages() : !n.isMemoryReleased && n.isReady && n.releaseMemory());
        });
      },
      { rootMargin: i }
    ), this.views.forEach((o, s) => {
      const n = document.getElementById(s);
      n && this.memoryObserver.observe(n);
    }), this.boundVisibilityHandler = () => {
      document.hidden ? this.views.forEach((o) => {
        !o.isMemoryReleased && o.isReady && o.releaseMemory();
      }) : this.views.forEach((o, s) => {
        if (o.isMemoryReleased) {
          const n = document.getElementById(s);
          if (n) {
            const r = n.getBoundingClientRect();
            r.top < window.innerHeight && r.bottom > 0 && o.reloadImages();
          }
        }
      });
    }, document.addEventListener("visibilitychange", this.boundVisibilityHandler);
  }
  /**
   * Disable automatic memory management
   */
  disableMemoryManagement() {
    this.memoryObserver && (this.memoryObserver.disconnect(), this.memoryObserver = null), this.boundVisibilityHandler && (document.removeEventListener("visibilitychange", this.boundVisibilityHandler), this.boundVisibilityHandler = null);
  }
}
export {
  Xn as default
};
//# sourceMappingURL=ci360-VASGkLhF.mjs.map
