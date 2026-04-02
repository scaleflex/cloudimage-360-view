import { jsx as Pe } from "react/jsx-runtime";
import { useState as Xe, useRef as I, useId as Ye, useEffect as be, useCallback as Ee, forwardRef as Fe, useMemo as Ge, useImperativeHandle as xe } from "react";
let w = null;
function Be(d, t) {
  const [C, f] = Xe(!1), a = I(null), i = I(null), m = Ye();
  be(() => {
    if (typeof window > "u" || !d.current || t.autoInit === !1) return;
    let l = !0;
    const n = d.current;
    return (async () => {
      try {
        if (w || (w = (await import("./ci360-w1B4zAH5.mjs")).default), !n || !l) return;
        n.id || (n.id = `ci360-${m.replace(/:/g, "")}`);
        const s = {
          ...t,
          onReady: (u) => {
            var p;
            l && (f(!0), (p = t.onReady) == null || p.call(t, u));
          }
        };
        i.current = new w(), a.current = i.current.init(n, s);
      } catch (s) {
        console.error("Failed to initialize CI360 viewer:", s);
      }
    })(), () => {
      if (l = !1, a.current) {
        try {
          a.current.destroy();
        } catch {
        }
        a.current = null;
      }
      i.current = null, f(!1);
    };
  }, [
    t.folder,
    t.filenameX,
    t.filenameY,
    t.filenameGrid,
    t.imageListX,
    t.imageListY,
    t.imageListGrid,
    t.amountX,
    t.amountY,
    t.hotspots,
    t.theme,
    t.aspectRatio,
    t.cropAspectRatio,
    t.cropGravity,
    m
  ]);
  const y = Ee(() => a.current, []);
  return {
    viewer: a.current,
    isReady: C,
    getViewer: y
  };
}
const De = (d, t) => {
  const {
    // Container props
    id: C,
    className: f,
    style: a,
    // Image source
    folder: i,
    apiVersion: m,
    filenameX: y,
    filenameY: l,
    filenameGrid: n,
    imageListX: v,
    imageListY: s,
    imageListGrid: u,
    indexZeroBase: p,
    amountX: R,
    amountY: h,
    // Behavior
    draggable: z,
    swipeable: g,
    keys: L,
    keysReverse: V,
    autoplay: O,
    autoplayBehavior: S,
    playOnce: T,
    speed: Z,
    autoplayReverse: k,
    dragSpeed: A,
    dragReverse: P,
    stopAtEdges: X,
    stopAtEdgesX: Y,
    stopAtEdgesY: b,
    inertia: E,
    // UI Features
    fullscreen: F,
    magnifier: G,
    pointerZoom: x,
    pinchZoom: B,
    zoomMax: D,
    zoomStep: H,
    zoomControls: M,
    zoomControlsPosition: N,
    scrollHint: j,
    bottomCircle: q,
    bottomCircleOffset: $,
    initialIconShown: J,
    hide360Logo: K,
    logoSrc: Q,
    imageInfo: U,
    hints: W,
    theme: _,
    markerTheme: ee,
    brandColor: oe,
    // Cloudimage CDN
    ciToken: te,
    ciFilters: re,
    ciTransformation: ae,
    cropAspectRatio: ne,
    cropGravity: se,
    // Loading
    lazyload: ie,
    // Hotspots
    hotspots: le,
    hotspotTrigger: me,
    hotspotTimelineOnClick: ue,
    initOnClick: pe,
    // Container
    aspectRatio: ce,
    // Event callbacks
    onReady: de,
    onLoad: fe,
    onSpin: ye,
    onAutoplayStart: Ce,
    onAutoplayStop: ve,
    onFullscreenOpen: we,
    onFullscreenClose: Ie,
    onZoomIn: Re,
    onZoomOut: he,
    onDragStart: ze,
    onDragEnd: ge,
    onHotspotOpen: Le,
    onHotspotClose: Ve,
    onProductClick: Oe,
    onNavigate: Se,
    onError: Te,
    ...ke
  } = d, Ze = I(null), Ae = Ge(
    () => ({
      // Image source
      folder: i,
      apiVersion: m,
      filenameX: y,
      filenameY: l,
      filenameGrid: n,
      imageListX: v,
      imageListY: s,
      imageListGrid: u,
      indexZeroBase: p,
      amountX: R,
      amountY: h,
      // Behavior
      draggable: z,
      swipeable: g,
      keys: L,
      keysReverse: V,
      autoplay: O,
      autoplayBehavior: S,
      playOnce: T,
      speed: Z,
      autoplayReverse: k,
      dragSpeed: A,
      dragReverse: P,
      stopAtEdges: X,
      stopAtEdgesX: Y,
      stopAtEdgesY: b,
      inertia: E,
      // UI Features
      fullscreen: F,
      magnifier: G,
      pointerZoom: x,
      pinchZoom: B,
      zoomMax: D,
      zoomStep: H,
      zoomControls: M,
      zoomControlsPosition: N,
      scrollHint: j,
      bottomCircle: q,
      bottomCircleOffset: $,
      initialIconShown: J,
      hide360Logo: K,
      logoSrc: Q,
      imageInfo: U,
      hints: W,
      theme: _,
      markerTheme: ee,
      brandColor: oe,
      // Cloudimage CDN
      ciToken: te,
      ciFilters: re,
      ciTransformation: ae,
      cropAspectRatio: ne,
      cropGravity: se,
      // Loading
      lazyload: ie,
      // Hotspots
      hotspots: le,
      hotspotTrigger: me,
      hotspotTimelineOnClick: ue,
      initOnClick: pe,
      // Container
      aspectRatio: ce,
      // Event callbacks
      onReady: de,
      onLoad: fe,
      onSpin: ye,
      onAutoplayStart: Ce,
      onAutoplayStop: ve,
      onFullscreenOpen: we,
      onFullscreenClose: Ie,
      onZoomIn: Re,
      onZoomOut: he,
      onDragStart: ze,
      onDragEnd: ge,
      onHotspotOpen: Le,
      onHotspotClose: Ve,
      onProductClick: Oe,
      onNavigate: Se,
      onError: Te
    }),
    [
      // Image source
      i,
      m,
      y,
      l,
      n,
      v,
      s,
      u,
      p,
      R,
      h,
      // Behavior
      z,
      g,
      L,
      V,
      O,
      S,
      T,
      Z,
      k,
      A,
      P,
      X,
      Y,
      b,
      E,
      // UI Features
      F,
      G,
      x,
      B,
      D,
      H,
      M,
      N,
      j,
      q,
      $,
      J,
      K,
      Q,
      U,
      W,
      _,
      ee,
      oe,
      // Cloudimage CDN
      te,
      re,
      ae,
      ne,
      se,
      // Loading
      ie,
      // Hotspots
      le,
      me,
      ue,
      pe,
      // Container
      ce,
      // Event callbacks
      de,
      fe,
      ye,
      Ce,
      ve,
      we,
      Ie,
      Re,
      he,
      ze,
      ge,
      Le,
      Ve,
      Oe,
      Se,
      Te
    ]
  ), { getViewer: r } = Be(Ze, Ae);
  return xe(
    t,
    () => ({
      moveLeft: (e = 1) => {
        var o;
        return (o = r()) == null ? void 0 : o.moveLeft(!1, e);
      },
      moveRight: (e = 1) => {
        var o;
        return (o = r()) == null ? void 0 : o.moveRight(!1, e);
      },
      moveTop: (e = 1) => {
        var o;
        return (o = r()) == null ? void 0 : o.moveTop(!1, e);
      },
      moveBottom: (e = 1) => {
        var o;
        return (o = r()) == null ? void 0 : o.moveBottom(!1, e);
      },
      play: () => {
        var e;
        return (e = r()) == null ? void 0 : e.play();
      },
      stop: () => {
        var e;
        return (e = r()) == null ? void 0 : e.stopAutoplay();
      },
      zoomIn: () => {
        var e, o;
        return (o = (e = r()) == null ? void 0 : e.zoomPan) == null ? void 0 : o.zoomIn();
      },
      zoomOut: () => {
        var e, o;
        return (o = (e = r()) == null ? void 0 : e.zoomPan) == null ? void 0 : o.zoomOut();
      },
      resetZoom: () => {
        var e, o;
        return (o = (e = r()) == null ? void 0 : e.zoomPan) == null ? void 0 : o.resetZoom();
      },
      setZoom: (e) => {
        var o, c;
        return (c = (o = r()) == null ? void 0 : o.zoomPan) == null ? void 0 : c.setZoom(e);
      },
      goToFrame: (e, o) => {
        var c;
        return (c = r()) == null ? void 0 : c.animateToFrame(e, o);
      },
      getViewer: () => r()
    }),
    [r]
  ), /* @__PURE__ */ Pe(
    "div",
    {
      ref: Ze,
      id: C,
      className: f,
      style: a,
      ...ke
    }
  );
}, He = Fe(De);
He.displayName = "CI360Viewer";
export {
  He as CI360Viewer,
  He as CI360ViewerDefault,
  Be as useCI360,
  Be as useCI360Default
};
//# sourceMappingURL=index.js.map
