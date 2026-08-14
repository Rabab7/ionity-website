"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [585], {
        25585: function(n, t, e) {
            e.d(t, {
                Z: function() {
                    return u
                }
            });
            var r = e(67294),
                o = e(61689);

            function i(n) {
                return n.concat().sort(function(n, t) {
                    return n.name > t.name ? 1 : -1
                }).map(function(n) {
                    return n.options
                })
            }

            function u(n, t) {
                void 0 === n && (n = {}), void 0 === t && (t = []);
                var e = (0, r.useRef)(o.Z.optionsHandler()),
                    c = (0, r.useRef)(n),
                    a = (0, r.useRef)(t),
                    s = (0, r.useState)(),
                    f = s[0],
                    d = s[1],
                    l = (0, r.useState)(),
                    p = l[0],
                    v = l[1],
                    m = (0, r.useCallback)(function() {
                        f && f.reInit(c.current, a.current)
                    }, [f]);
                return (0, r.useEffect)(function() {
                    if ("undefined" != typeof window && window.document && window.document.createElement && p) {
                        o.Z.globalOptions = u.globalOptions;
                        var n = (0, o.Z)(p, c.current, a.current);
                        return d(n),
                            function() {
                                return n.destroy()
                            }
                    }
                    d(void 0)
                }, [p, d]), (0, r.useEffect)(function() {
                    e.current.areEqual(c.current, n) || (c.current = n, m())
                }, [n, m]), (0, r.useEffect)(function() {
                    ! function(n, t) {
                        if (n.length !== t.length) return !1;
                        var e = o.Z.optionsHandler().areEqual,
                            r = i(n),
                            u = i(t);
                        return r.every(function(n, t) {
                            return e(n, u[t])
                        })
                    }(a.current, t) && (a.current = t, m())
                }, [t, m]), [v, f]
            }
            u.globalOptions = void 0
        },
        61689: function(n, t, e) {
            function r(n) {
                return "number" == typeof n
            }

            function o(n) {
                return "[object Object]" === Object.prototype.toString.call(n)
            }

            function i(n) {
                var t;
                return o(n) || Array.isArray(n)
            }

            function u(n) {
                return Math.abs(n)
            }

            function c(n) {
                return n ? n / u(n) : 0
            }

            function a(n) {
                return d(n).map(Number)
            }

            function s(n) {
                return n[f(n)]
            }

            function f(n) {
                return Math.max(0, n.length - 1)
            }

            function d(n) {
                return Object.keys(n)
            }

            function l(n, t) {
                var e = u(n - t);

                function r(t) {
                    return t < n
                }

                function o(n) {
                    return n > t
                }

                function i(e) {
                    var r, o;
                    return e < n || e > t
                }
                return {
                    length: e,
                    max: t,
                    min: n,
                    constrain: function(e) {
                        var r;
                        return i(e) ? e < n ? n : t : e
                    },
                    reachedAny: i,
                    reachedMax: o,
                    reachedMin: r,
                    removeOffset: function(n) {
                        return e ? n - e * Math.ceil((n - t) / e) : n
                    }
                }
            }

            function p() {
                var n = [],
                    t = {
                        add: function(e, r, o, i) {
                            return void 0 === i && (i = !1), e.addEventListener(r, o, i), n.push(function() {
                                return e.removeEventListener(r, o, i)
                            }), t
                        },
                        removeAll: function() {
                            return n = n.filter(function(n) {
                                return n()
                            }), t
                        }
                    };
                return t
            }

            function v(n) {
                var t = n;

                function e() {
                    return t
                }

                function o(n) {
                    return t /= n, u
                }

                function i(n) {
                    return r(n) ? n : n.get()
                }
                var u = {
                    add: function(n) {
                        return t += i(n), u
                    },
                    divide: o,
                    get: e,
                    multiply: function(n) {
                        return t *= n, u
                    },
                    normalize: function() {
                        return 0 !== t && o(t), u
                    },
                    set: function(n) {
                        return t = i(n), u
                    },
                    subtract: function(n) {
                        return t -= i(n), u
                    }
                };
                return u
            }

            function m(n, t, e) {
                var r = "x" === n.scroll ? function(n) {
                        return "translate3d(".concat(n, "px,0px,0px)")
                    } : function(n) {
                        return "translate3d(0px,".concat(n, "px,0px)")
                    },
                    o = e.style,
                    i = !1;

                function u(n) {
                    i = !n
                }
                return {
                    clear: function() {
                        i || (o.transform = "", e.getAttribute("style") || e.removeAttribute("style"))
                    },
                    to: function(n) {
                        i || (o.transform = r(t.apply(n.get())))
                    },
                    toggleActive: u
                }
            }
            e.d(t, {
                Z: function() {
                    return h
                }
            });
            var g = {
                align: "center",
                axis: "x",
                containScroll: "",
                direction: "ltr",
                slidesToScroll: 1,
                breakpoints: {},
                dragFree: !1,
                draggable: !0,
                inViewThreshold: 0,
                loop: !1,
                skipSnaps: !1,
                speed: 10,
                startIndex: 0,
                active: !0
            };

            function x() {
                function n(n, t) {
                    return function n(t, e) {
                        return [t, e].reduce(function(t, e) {
                            return d(e).forEach(function(r) {
                                var i = t[r],
                                    u = e[r],
                                    c = o(i) && o(u);
                                t[r] = c ? n(i, u) : u
                            }), t
                        }, {})
                    }(n, t || {})
                }
                return {
                    merge: n,
                    areEqual: function(n, t) {
                        var e = JSON.stringify(d(n.breakpoints || {})),
                            r = JSON.stringify(d(t.breakpoints || {}));
                        return e === r && function n(t, e) {
                            var r = d(t),
                                o = d(e);
                            return r.length === o.length && r.every(function(r) {
                                var o = t[r],
                                    u = e[r];
                                return "function" == typeof o ? "".concat(o) === "".concat(u) : i(o) && i(u) ? n(o, u) : o === u
                            })
                        }(n, t)
                    },
                    atMedia: function(t) {
                        var e = t.breakpoints || {},
                            r = d(e).filter(function(n) {
                                return window.matchMedia(n).matches
                            }).map(function(n) {
                                return e[n]
                            }).reduce(function(t, e) {
                                return n(t, e)
                            }, {});
                        return n(t, r)
                    }
                }
            }

            function h(n, t, e) {
                var o, i, d, y, S, b = p(),
                    w = x(),
                    E = function() {
                        var n = x(),
                            t = n.atMedia,
                            e = n.areEqual,
                            r = [],
                            o = [];

                        function i(n) {
                            var r = t(n.options);
                            return function() {
                                return !e(r, t(n.options))
                            }
                        }
                        return {
                            init: function(n, e) {
                                return o = n.map(i), (r = n.filter(function(n) {
                                    return t(n.options).active
                                })).forEach(function(n) {
                                    return n.init(e)
                                }), n.reduce(function(n, t) {
                                    var e;
                                    return Object.assign(n, ((e = {})[t.name] = t, e))
                                }, {})
                            },
                            destroy: function() {
                                r = r.filter(function(n) {
                                    return n.destroy()
                                })
                            },
                            haveChanged: function() {
                                return o.some(function(n) {
                                    return n()
                                })
                            }
                        }
                    }(),
                    A = function() {
                        var n = {};

                        function t(t) {
                            return n[t] || []
                        }
                        var e = {
                            emit: function(n) {
                                return t(n).forEach(function(t) {
                                    return t(n)
                                }), e
                            },
                            off: function(r, o) {
                                return n[r] = t(r).filter(function(n) {
                                    return n !== o
                                }), e
                            },
                            on: function(r, o) {
                                return n[r] = t(r).concat([o]), e
                            }
                        };
                        return e
                    }(),
                    M = A.on,
                    k = A.off,
                    O = !1,
                    B = w.merge(g, h.globalOptions),
                    I = w.merge(B),
                    P = [],
                    T = 0;

                function N(t, e) {
                    if (!O) {
                        var g, x, h, b, M, k, z, D, L, R, H, V, q, Z, j, U, _, G, J, W, X, Y, K, Q, $, nn, nt, ne, nr, no, ni, nu, nc, na, ns, nf, nd, nl, np, nv, nm, ng, nx, nh, ny, nS, nb, nw, nE, nA, nM, nk, nO, nB, nI, nP, nT, nN, nz, nC, nD, nL, nR, nH, nV, nq, nZ, nj, nF, nU, n_, nG, nJ, nW, nX, nY, nK, nQ, n$, n0, n1, n5, n6, n2, n8, n3, n7, n9, n4, tn, tt, te, tr, to, ti, tu, tc, ta, ts, tf, td, tl, tp, tv, tm, tg, tx, th, ty, tS;
                        if (g = "container" in n && n.container, x = "slides" in n && n.slides, d = "root" in n ? n.root : n, y = g || d.children[0], S = x || [].slice.call(y.children), B = w.merge(B, t), I = w.atMedia(B), h = d, b = y, M = S, D = (k = I).align, L = k.axis, R = k.direction, H = k.startIndex, V = k.inViewThreshold, q = k.loop, Z = k.speed, j = k.dragFree, U = k.slidesToScroll, _ = k.skipSnaps, G = k.containScroll, J = b.getBoundingClientRect(), W = M.map(function(n) {
                                return n.getBoundingClientRect()
                            }), X = function(n) {
                                var t = "rtl" === n ? -1 : 1;

                                function e(n) {
                                    return n * t
                                }
                                return {
                                    apply: e
                                }
                            }(R), $ = "y" == (Q = "y" === L ? "y" : "x") ? "top" : "rtl" === R ? "right" : "left", nn = "y" === Q ? "bottom" : "rtl" === R ? "left" : "right", ne = (nt = {
                                scroll: Q,
                                cross: "y" === L ? "x" : "y",
                                startEdge: $,
                                endEdge: nn,
                                measureSize: function(n) {
                                    var t = n.width,
                                        e = n.height;
                                    return "x" === Q ? t : e
                                }
                            }).measureSize(J), no = {
                                measure: function(n) {
                                    return ne * (n / 100)
                                }
                            }, ni = function(n, t) {
                                var e = {
                                    start: o,
                                    center: function(n) {
                                        var e;
                                        return e = n, (t - e) / 2
                                    },
                                    end: i
                                };

                                function o() {
                                    return 0
                                }

                                function i(n) {
                                    return t - n
                                }
                                return {
                                    measure: function(o) {
                                        return r(n) ? t * Number(n) : e[n](o)
                                    }
                                }
                            }(D, ne), nu = !q && "" !== G, nd = q || "" !== G, nl = nt.measureSize, np = nt.startEdge, nv = nt.endEdge, nm = function() {
                                if (!nd) return 0;
                                var n = W[0];
                                return u(J[np] - n[np])
                            }(), ng = function() {
                                if (!nd) return 0;
                                var n = window.getComputedStyle(s(M));
                                return parseFloat(n.getPropertyValue("margin-".concat(nv)))
                            }(), nx = W.map(nl), nh = W.map(function(n, t, e) {
                                var r = t === f(e);
                                return t ? r ? nx[t] + ng : e[t + 1][np] - n[np] : nx[t] + nm
                            }).map(u), nS = (ny = {
                                slideSizes: nx,
                                slideSizesWithGaps: nh
                            }).slideSizes, nb = ny.slideSizesWithGaps, nM = r(U), nk = {
                                groupSlides: function(n) {
                                    var t, e, r;
                                    return nM ? a(n).filter(function(n) {
                                        return n % U == 0
                                    }).map(function(t) {
                                        return n.slice(t, t + U)
                                    }) : a(n).reduce(function(n, t) {
                                        var e = nb.slice(s(n), t + 1).reduce(function(n, t) {
                                            return n + t
                                        }, 0);
                                        return !t || e > ne ? n.concat(t) : n
                                    }, []).map(function(t, e, r) {
                                        return n.slice(t, r[e + 1])
                                    })
                                }
                            }, nC = nt.startEdge, nD = nt.endEdge, nR = (nL = nk.groupSlides)(W).map(function(n) {
                                return s(n)[nD] - n[0][nC]
                            }).map(u).map(ni.measure), nH = W.map(function(n) {
                                return J[nC] - n[nC]
                            }).map(function(n) {
                                return -u(n)
                            }), th = s(nH) - s(nb), nV = nL(nH).map(function(n) {
                                return n[0]
                            }).map(function(n, t, e) {
                                var r = t === f(e);
                                return nu && !t ? 0 : nu && r ? th : n + nR[t]
                            }), nZ = (nq = {
                                snaps: nH,
                                snapsAligned: nV
                            }).snaps, nj = nq.snapsAligned, nF = -s(nZ) + s(nb), nK = (nW = l(-nF + ne, nj[0]), nX = nj.map(nW.constrain), {
                                snapsContained: nY = function() {
                                    if (nF <= ne) return [nW.max];
                                    if ("keepSnaps" === G) return nX;
                                    var n, t, e, r, o = (n = nX[0], t = s(nX), e = nX.lastIndexOf(n), r = nX.indexOf(t) + 1, l(e, r)),
                                        i = o.min,
                                        u = o.max;
                                    return nX.slice(i, u)
                                }()
                            }).snapsContained, n6 = (ty = (nQ = nu ? nK : nj)[0], tS = s(nQ), {
                                limit: n5 = l(q ? ty - nF : tS, ty)
                            }).limit, n8 = (n2 = function n(t, e, r) {
                                var o = l(0, t),
                                    i = o.min,
                                    c = o.constrain,
                                    a = t + 1,
                                    s = f(e);

                                function f(n) {
                                    return r ? u((a + n) % a) : c(n)
                                }

                                function d() {
                                    return s
                                }

                                function p(n) {
                                    return s = f(n), v
                                }
                                var v = {
                                    add: function(n) {
                                        return p(s + n)
                                    },
                                    clone: function() {
                                        return n(t, s, r)
                                    },
                                    get: d,
                                    set: p,
                                    min: i,
                                    max: t
                                };
                                return v
                            }(f(nQ), H, q)).clone(), n3 = a(M), n7 = function(n) {
                                var t = 0;

                                function e(n, e) {
                                    return function() {
                                        !!t === n && e()
                                    }
                                }

                                function r() {
                                    t = window.requestAnimationFrame(n)
                                }
                                return {
                                    proceed: e(!0, r),
                                    start: e(!1, r),
                                    stop: e(!0, function() {
                                        window.cancelAnimationFrame(t), t = 0
                                    })
                                }
                            }(function() {
                                q || tx.scrollBounds.constrain(tx.dragHandler.pointerDown()), tx.scrollBody.seek(tn).update();
                                var n = tx.scrollBody.settle(tn);
                                n && !tx.dragHandler.pointerDown() && (tx.animation.stop(), A.emit("settle")), n || A.emit("scroll"), q && (tx.scrollLooper.loop(tx.scrollBody.direction()), tx.slideLooper.loop()), tx.translate.to(n4), tx.animation.proceed()
                            }), n4 = v(n9 = nQ[n2.get()]), tn = v(n9), tt = function(n, t, e) {
                                var r, o = v(0),
                                    i = v(0),
                                    u = v(0),
                                    a = 0,
                                    s = t,
                                    f = e;

                                function d() {
                                    return a
                                }

                                function l(n) {
                                    return s = n, m
                                }

                                function p(n) {
                                    return f = n, m
                                }
                                var m = {
                                    direction: d,
                                    seek: function(t) {
                                        u.set(t).subtract(n);
                                        var e, r, d, l, p, v = (e = u.get(), 0 + ((l = s) - 0) * ((e - 0) / 100));
                                        return a = c(u.get()), u.normalize().multiply(v).subtract(o), u.divide(f), i.add(u), m
                                    },
                                    settle: function(t) {
                                        var e, r = (e = t.get() - n.get(), !(Math.round(100 * e) / 100));
                                        return r && n.set(t), r
                                    },
                                    update: function() {
                                        o.add(i), n.add(o), i.multiply(0)
                                    },
                                    useBaseMass: function() {
                                        return p(e)
                                    },
                                    useBaseSpeed: function() {
                                        return l(t)
                                    },
                                    useMass: p,
                                    useSpeed: l
                                };
                                return m
                            }(n4, Z, 1), te = function(n, t, e, r, o) {
                                var i = r.reachedAny,
                                    a = r.removeOffset,
                                    s = r.constrain;

                                function f(n) {
                                    return n.concat().sort(function(n, t) {
                                        return u(n) - u(t)
                                    })[0]
                                }

                                function d(t, r) {
                                    var o = [t, t + e, t - e];
                                    if (!n) return o[0];
                                    if (!r) return f(o);
                                    var i = o.filter(function(n) {
                                        return c(n) === r
                                    });
                                    return f(i)
                                }
                                return {
                                    byDistance: function(e, r) {
                                        var c, f, l = o.get() + e,
                                            p = (f = n ? a(l) : s(l), {
                                                index: t.map(function(n) {
                                                    return n - f
                                                }).map(function(n) {
                                                    return d(n, 0)
                                                }).map(function(n, t) {
                                                    return {
                                                        diff: n,
                                                        index: t
                                                    }
                                                }).sort(function(n, t) {
                                                    return u(n.diff) - u(t.diff)
                                                })[0].index,
                                                distance: f
                                            }),
                                            v = p.index,
                                            m = p.distance,
                                            g = !n && i(l);
                                        if (!r || g) return {
                                            index: v,
                                            distance: e
                                        };
                                        var x = e + d(t[v] - m, 0);
                                        return {
                                            index: v,
                                            distance: x
                                        }
                                    },
                                    byIndex: function(n, e) {
                                        var r = d(t[n] - o.get(), e);
                                        return {
                                            index: n,
                                            distance: r
                                        }
                                    },
                                    shortcut: d
                                }
                            }(q, nQ, nF, n6, tn), tr = function(n, t, e, r, o, i) {
                                function u(r) {
                                    var u = r.distance,
                                        c = r.index !== t.get();
                                    u && (n.start(), o.add(u)), c && (e.set(t.get()), t.set(r.index), i.emit("select"))
                                }
                                return {
                                    distance: function(n, t) {
                                        u(r.byDistance(n, t))
                                    },
                                    index: function(n, e) {
                                        var o = t.clone().set(n);
                                        u(r.byIndex(o.get(), e))
                                    }
                                }
                            }(n7, n2, n8, te, tn, A), to = function(n, t, e, r, o, i, u) {
                                var c = o.removeOffset,
                                    a = o.constrain,
                                    s = i ? [0, t, -t] : [0],
                                    f = d(s, u);

                                function d(t, o) {
                                    var i, u, c = (u = o || 0, e.map(function(n) {
                                        return l(.5, n - .5).constrain(n * u)
                                    }));
                                    return (t || s).reduce(function(t, o) {
                                        var i = r.map(function(t, r) {
                                            return {
                                                start: t - e[r] + c[r] + o,
                                                end: t + n - c[r] + o,
                                                index: r
                                            }
                                        });
                                        return t.concat(i)
                                    }, [])
                                }
                                return {
                                    check: function(n, t) {
                                        var e = i ? c(n) : a(n);
                                        return (t || f).reduce(function(n, t) {
                                            var r, o = t.index,
                                                i = t.start,
                                                u = t.end;
                                            return !(-1 !== n.indexOf(o)) && i < e && u > e ? n.concat([o]) : n
                                        }, [])
                                    },
                                    findSlideBounds: d
                                }
                            }(ne, nF, nS, nZ, n6, q, V), ti = function(n, t, e, r, o, i, a, s, f, d, l, m, g, x, h, y) {
                                var S = n.cross,
                                    b = ["INPUT", "SELECT", "TEXTAREA"],
                                    w = v(0),
                                    E = p(),
                                    A = p(),
                                    M = g.measure(20),
                                    k = {
                                        mouse: 300,
                                        touch: 400
                                    },
                                    O = {
                                        mouse: 500,
                                        touch: 600
                                    },
                                    B = h ? 5 : 16,
                                    I = 0,
                                    P = 0,
                                    T = !1,
                                    N = !1,
                                    z = !1,
                                    C = !1;

                                function D(n) {
                                    if (!(C = "mousedown" === n.type) || 0 === n.button) {
                                        var t, c, a, s, d, l = (t = r.get(), u(t - (c = i.get())) >= 2),
                                            p = C || !l,
                                            v = (s = (a = n.target).nodeName || "", !(b.indexOf(s) > -1)),
                                            g = l || C && v;
                                        T = !0, o.pointerDown(n), w.set(r), r.set(i), f.useBaseMass().useSpeed(80), d = C ? document : e, A.add(d, "touchmove", L).add(d, "touchend", R).add(d, "mousemove", L).add(d, "mouseup", R), I = o.readPoint(n), P = o.readPoint(n, S), m.emit("pointerDown"), p && (z = !1), g && n.preventDefault()
                                    }
                                }

                                function L(n) {
                                    if (!N && !C) {
                                        if (!n.cancelable) return R(n);
                                        var e, i, c, s, f = o.readPoint(n),
                                            d = o.readPoint(n, S),
                                            l = (i = I, u(f - i)),
                                            p = (s = P, u(d - s));
                                        if (!(N = l > p) && !z) return R(n)
                                    }
                                    var v = o.pointerMove(n);
                                    !z && v && (z = !0), a.start(), r.add(t.apply(v)), n.preventDefault()
                                }

                                function R(n) {
                                    var e, i, a, p, v, g, S, b = d.byDistance(0, !1).index !== l.get(),
                                        E = o.pointerUp(n) * (h ? O : k)[C ? "mouse" : "touch"],
                                        I = (e = t.apply(E), p = (a = l.clone().add(-1 * c(e))).get() === l.min || a.get() === l.max, v = d.byDistance(e, !h).distance, h || u(e) < M ? v : !x && p ? .4 * v : y && b ? .5 * v : d.byIndex(a.get(), 0).distance),
                                        P = function(n, t) {
                                            if (0 === n || 0 === t || u(n) <= u(t)) return 0;
                                            var e, r, o = (e = u(n), r = u(t), u(e - r));
                                            return u(o / n)
                                        }(E, I),
                                        D = (g = r.get(), u(g - (S = w.get())) >= .5),
                                        L = b && P > .75,
                                        R = u(E) < M;
                                    D && !C && (z = !0), N = !1, T = !1, A.removeAll(), f.useSpeed(R ? 9 : L ? 10 : B).useMass(L ? 1 + 2.5 * P : 1), s.distance(I, !h), C = !1, m.emit("pointerUp")
                                }

                                function H(n) {
                                    z && n.preventDefault()
                                }

                                function V() {
                                    return !z
                                }

                                function q() {
                                    return T
                                }
                                return {
                                    addActivationEvents: function() {
                                        E.add(e, "touchmove", function() {}).add(e, "touchend", function() {}).add(e, "touchstart", D).add(e, "mousedown", D).add(e, "touchcancel", R).add(e, "contextmenu", R).add(e, "click", H)
                                    },
                                    clickAllowed: V,
                                    pointerDown: q,
                                    removeAllEvents: function() {
                                        E.removeAll(), A.removeAll()
                                    }
                                }
                            }(nt, X, h, tn, function(n) {
                                var t, e;

                                function r(n) {
                                    return "undefined" != typeof TouchEvent && n instanceof TouchEvent
                                }

                                function o(n) {
                                    return n.timeStamp
                                }

                                function i(t, e) {
                                    var o = e || n.scroll,
                                        i = "client".concat("x" === o ? "X" : "Y");
                                    return (r(t) ? t.touches[0] : t)[i]
                                }
                                return {
                                    isTouchEvent: r,
                                    pointerDown: function(n) {
                                        return t = n, e = n, i(n)
                                    },
                                    pointerMove: function(n) {
                                        var r = i(n) - i(e),
                                            u = o(n) - o(t) > 170;
                                        return e = n, u && (t = n), r
                                    },
                                    pointerUp: function(n) {
                                        if (!t || !e) return 0;
                                        var r = i(e) - i(t),
                                            c = o(n) - o(t),
                                            a = o(n) - o(e) > 170,
                                            s = r / c;
                                        return c && !a && u(s) > .1 ? s : 0
                                    },
                                    readPoint: i
                                }
                            }(nt), n4, n7, tr, tt, te, n2, A, no, q, j, _), T = (o = tx = {
                                containerRect: J,
                                slideRects: W,
                                animation: n7,
                                axis: nt,
                                direction: X,
                                dragHandler: ti,
                                eventStore: p(),
                                percentOfView: no,
                                index: n2,
                                indexPrevious: n8,
                                limit: n6,
                                location: n4,
                                options: k,
                                scrollBody: tt,
                                scrollBounds: function(n, t, e, r, o) {
                                    var i = o.measure(10),
                                        c = o.measure(50),
                                        a = !1;

                                    function s(n) {
                                        a = !n
                                    }
                                    return {
                                        constrain: function(o) {
                                            if (!a && n.reachedAny(e.get()) && n.reachedAny(t.get())) {
                                                var s = u(n[n.reachedMin(t.get()) ? "min" : "max"] - t.get()),
                                                    f = e.get() - t.get();
                                                e.subtract(f * Math.min(s / c, .85)), !o && u(f) < i && (e.set(n.constrain(e.get())), r.useSpeed(10).useMass(3))
                                            }
                                        },
                                        toggleActive: s
                                    }
                                }(n6, n4, tn, tt, no),
                                scrollLooper: (ta = n4, ts = [n4, tn], tl = (td = l(tf = n6.min + .1, n6.max + .1)).reachedMin, tp = td.reachedMax, {
                                    loop: function(n) {
                                        var t;
                                        if (1 === n ? !!tp(ta.get()) : !!(-1 === n && tl(ta.get()))) {
                                            var e = nF * (-1 * n);
                                            ts.forEach(function(n) {
                                                return n.add(e)
                                            })
                                        }
                                    }
                                }),
                                scrollProgress: (tm = n6.max, tg = n6.length, {
                                    get: function(n) {
                                        return -((n - tm) / tg)
                                    }
                                }),
                                scrollSnaps: nQ,
                                scrollTarget: te,
                                scrollTo: tr,
                                slideLooper: function(n, t, e, r, o, i, u, c, s) {
                                    var f, d, l = a(o),
                                        p = a(o).reverse(),
                                        g = (f = h(p, i[0] - 1), y(f, "end")).concat((d = h(l, e - i[0] - 1), y(d, "start")));

                                    function x(n, t) {
                                        return n.reduce(function(n, t) {
                                            return n - o[t]
                                        }, t)
                                    }

                                    function h(n, t) {
                                        return n.reduce(function(n, e) {
                                            return x(n, t) > 0 ? n.concat([e]) : n
                                        }, [])
                                    }

                                    function y(e, o) {
                                        var i = "start" === o,
                                            a = u.findSlideBounds([i ? -r : r]);
                                        return e.map(function(e) {
                                            var o = i ? 0 : -r,
                                                u = i ? r : 0,
                                                f = a.filter(function(n) {
                                                    return n.index === e
                                                })[0][i ? "end" : "start"],
                                                d = v(-1),
                                                l = v(-1),
                                                p = m(n, t, s[e]);
                                            return {
                                                index: e,
                                                location: l,
                                                translate: p,
                                                target: function() {
                                                    return d.set(c.get() > f ? o : u)
                                                }
                                            }
                                        })
                                    }
                                    return {
                                        canLoop: function() {
                                            return g.every(function(n) {
                                                var t = n.index;
                                                return .1 >= x(l.filter(function(n) {
                                                    return n !== t
                                                }), e)
                                            })
                                        },
                                        clear: function() {
                                            g.forEach(function(n) {
                                                return n.translate.clear()
                                            })
                                        },
                                        loop: function() {
                                            g.forEach(function(n) {
                                                var t = n.target,
                                                    e = n.translate,
                                                    r = n.location,
                                                    o = t();
                                                o.get() !== r.get() && (0 === o.get() ? e.clear() : e.to(o), r.set(o))
                                            })
                                        },
                                        loopPoints: g
                                    }
                                }(nt, X, ne, nF, nb, nQ, to, n4, M),
                                slidesToScroll: nk,
                                slidesInView: to,
                                slideIndexes: n3,
                                target: tn,
                                translate: m(nt, X, b)
                            }).axis.measureSize(d.getBoundingClientRect()), !I.active) return C();
                        if (o.translate.to(o.location), P = e || P, i = E.init(P, F), I.loop) {
                            if (!o.slideLooper.canLoop()) return C(), N({
                                loop: !1
                            }, e);
                            o.slideLooper.loop()
                        }
                        I.draggable && y.offsetParent && S.length && o.dragHandler.addActivationEvents()
                    }
                }

                function z(n, t) {
                    var e = R();
                    C(), N(w.merge({
                        startIndex: e
                    }, n), t), A.emit("reInit")
                }

                function C() {
                    o.dragHandler.removeAllEvents(), o.animation.stop(), o.eventStore.removeAll(), o.translate.clear(), o.slideLooper.clear(), E.destroy()
                }

                function D(n) {
                    var t = o[n ? "target" : "location"].get(),
                        e = I.loop ? "removeOffset" : "constrain";
                    return o.slidesInView.check(o.limit[e](t))
                }

                function L(n, t, e) {
                    I.active && !O && (o.scrollBody.useBaseMass().useSpeed(t ? 100 : I.speed), o.scrollTo.index(n, e || 0))
                }

                function R() {
                    return o.index.get()
                }

                function H() {
                    return i
                }

                function V() {
                    return o
                }

                function q() {
                    return d
                }

                function Z() {
                    return y
                }

                function j() {
                    return S
                }
                var F = {
                    canScrollNext: function() {
                        return o.index.clone().add(1).get() !== R()
                    },
                    canScrollPrev: function() {
                        return o.index.clone().add(-1).get() !== R()
                    },
                    clickAllowed: function() {
                        return o.dragHandler.clickAllowed()
                    },
                    containerNode: Z,
                    internalEngine: V,
                    destroy: function() {
                        O || (O = !0, b.removeAll(), C(), A.emit("destroy"))
                    },
                    off: k,
                    on: M,
                    plugins: H,
                    previousScrollSnap: function() {
                        return o.indexPrevious.get()
                    },
                    reInit: z,
                    rootNode: q,
                    scrollNext: function(n) {
                        L(o.index.clone().add(1).get(), !0 === n, -1)
                    },
                    scrollPrev: function(n) {
                        L(o.index.clone().add(-1).get(), !0 === n, 1)
                    },
                    scrollProgress: function() {
                        return o.scrollProgress.get(o.location.get())
                    },
                    scrollSnapList: function() {
                        return o.scrollSnaps.map(o.scrollProgress.get)
                    },
                    scrollTo: L,
                    selectedScrollSnap: R,
                    slideNodes: j,
                    slidesInView: D,
                    slidesNotInView: function(n) {
                        var t = D(n);
                        return o.slideIndexes.filter(function(n) {
                            return -1 === t.indexOf(n)
                        })
                    }
                };
                return N(t, e), b.add(window, "resize", function() {
                    var n = w.atMedia(B),
                        t = !w.areEqual(n, I),
                        e = T !== o.axis.measureSize(d.getBoundingClientRect()),
                        r = E.haveChanged();
                    (e || t || r) && z(), A.emit("resize")
                }), setTimeout(function() {
                    return A.emit("init")
                }, 0), F
            }
            h.globalOptions = void 0, h.optionsHandler = x
        }
    }
]);