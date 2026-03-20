import { jsx as ke } from "react/jsx-runtime";
import { useState as Pe, useRef as I, useId as Xe, useEffect as Ye, useCallback as be, forwardRef as Ee, useMemo as Fe, useImperativeHandle as Ge } from "react";
let w = null;
function xe(d, t) {
  const [C, f] = Pe(!1), a = I(null), i = I(null), m = Xe();
  Ye(() => {
    if (typeof window > "u" || !d.current || t.autoInit === !1) return;
    let l = !0;
    const n = d.current;
    return (async () => {
      try {
        if (w || (w = (await import("./ci360-BFobl9uu.mjs")).default), !n || !l) return;
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
  const y = be(() => a.current, []);
  return {
    viewer: a.current,
    isReady: C,
    getViewer: y
  };
}
const Be = (d, t) => {
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
    autoplay: S,
    autoplayBehavior: T,
    playOnce: Z,
    speed: A,
    autoplayReverse: O,
    dragSpeed: k,
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
    // Container
    aspectRatio: pe,
    // Event callbacks
    onReady: ce,
    onLoad: de,
    onSpin: fe,
    onAutoplayStart: ye,
    onAutoplayStop: Ce,
    onFullscreenOpen: ve,
    onFullscreenClose: we,
    onZoomIn: Ie,
    onZoomOut: Re,
    onDragStart: he,
    onDragEnd: ze,
    onHotspotOpen: ge,
    onHotspotClose: Le,
    onProductClick: Ve,
    onNavigate: Se,
    onError: Te,
    ...Ae
  } = d, Ze = I(null), Oe = Fe(
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
      autoplay: S,
      autoplayBehavior: T,
      playOnce: Z,
      speed: A,
      autoplayReverse: O,
      dragSpeed: k,
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
      // Container
      aspectRatio: pe,
      // Event callbacks
      onReady: ce,
      onLoad: de,
      onSpin: fe,
      onAutoplayStart: ye,
      onAutoplayStop: Ce,
      onFullscreenOpen: ve,
      onFullscreenClose: we,
      onZoomIn: Ie,
      onZoomOut: Re,
      onDragStart: he,
      onDragEnd: ze,
      onHotspotOpen: ge,
      onHotspotClose: Le,
      onProductClick: Ve,
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
      S,
      T,
      Z,
      A,
      O,
      k,
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
      // Container
      pe,
      // Event callbacks
      ce,
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
      Se,
      Te
    ]
  ), { getViewer: r } = xe(Ze, Oe);
  return Ge(
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
  ), /* @__PURE__ */ ke(
    "div",
    {
      ref: Ze,
      id: C,
      className: f,
      style: a,
      ...Ae
    }
  );
}, De = Ee(Be);
De.displayName = "CI360Viewer";
export {
  De as CI360Viewer,
  De as CI360ViewerDefault,
  xe as useCI360,
  xe as useCI360Default
};
//# sourceMappingURL=index.js.map
