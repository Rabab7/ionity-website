(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [87], {
        13882: function(A, e, t) {
            "use strict";

            function n(A, e) {
                if (e.length < A) throw TypeError(A + " argument" + (A > 1 ? "s" : "") + " required, but only " + e.length + " present")
            }
            t.d(e, {
                Z: function() {
                    return n
                }
            })
        },
        91857: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return a
                }
            });
            var n = t(19013),
                i = t(13882);

            function a(A, e) {
                (0, i.Z)(2, arguments);
                var t = (0, n.default)(A),
                    a = (0, n.default)(e);
                return t.getFullYear() - a.getFullYear()
            }
        },
        64525: function(A, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return r
                }
            });
            var n = t(19013),
                i = t(91857),
                a = t(13882);

            function s(A, e) {
                (0, a.Z)(2, arguments);
                var t = (0, n.default)(A),
                    i = (0, n.default)(e),
                    s = t.getTime() - i.getTime();
                return s < 0 ? -1 : s > 0 ? 1 : s
            }

            function r(A, e) {
                (0, a.Z)(2, arguments);
                var t = (0, n.default)(A),
                    r = (0, n.default)(e),
                    o = s(t, r),
                    C = Math.abs((0, i.default)(t, r));
                t.setFullYear(1584), r.setFullYear(1584);
                var l = s(t, r) === -o,
                    c = o * (C - Number(l));
                return 0 === c ? 0 : c
            }
        },
        19013: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return a
                }
            });
            var n = t(13882);

            function i(A) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                    return typeof A
                } : function(A) {
                    return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
                })(A)
            }

            function a(A) {
                (0, n.Z)(1, arguments);
                var e = Object.prototype.toString.call(A);
                return A instanceof Date || "object" === i(A) && "[object Date]" === e ? new Date(A.getTime()) : "number" == typeof A || "[object Number]" === e ? new Date(A) : (("string" == typeof A || "[object String]" === e) && "undefined" != typeof console && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(Error().stack)), new Date(NaN))
            }
        },
        55793: function(A, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/studio", function() {
                return t(37459)
            }])
        },
        37459: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return Am
                }
            });
            var n = t(85893),
                i = t(62468),
                a = t(16782),
                s = t(24250),
                r = t(67294),
                o = t(4480),
                C = t(7297),
                l = t(61608),
                c = t.n(l),
                d = t(14141),
                u = {
                    src: "/_next/static/media/quote-left.14d99ecb.svg",
                    height: 79,
                    width: 80
                },
                p = {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1,
                        transition: {
                            duration: .1,
                            when: "beforeChildren",
                            staggerChildren: .2,
                            ease: [.6, -.05, .01, .99]
                        }
                    }
                },
                g = {
                    initial: {
                        y: -20,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: .3,
                            ease: [.6, -.05, .01, .99]
                        }
                    }
                },
                x = {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1,
                        transition: {
                            duration: .1,
                            when: "beforeChildren",
                            staggerChildren: .3,
                            ease: [.6, -.05, .01, .99]
                        }
                    }
                },
                L = {
                    initial: {
                        x: -20,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: .5,
                            ease: [.6, -.05, .01, .99]
                        }
                    }
                },
                h = {
                    initial: {
                        y: -20,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: .5,
                            ease: [.6, -.05, .01, .99]
                        }
                    }
                },
                f = {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1,
                        transition: {
                            staggerChildren: .3,
                            duration: .1,
                            ease: [.6, -.05, .01, .99]
                        }
                    }
                },
                m = {
                    initial: {
                        y: -40,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 1,
                            ease: [.6, -.05, .01, .99]
                        }
                    }
                },
                E = [{
                    pic: {
                        src: "/_next/static/media/1-1-min.0959b871.jpg",
                        height: 806,
                        width: 605,
                        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAIYL/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIDBBEAEhVikf/aAAgBAQABPwC0tiC3xs4DikhjXYcdsn3X/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAx/9oACAECAQE/ADC//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEx/9oACAEDAQE/AHT/2Q==",
                        blurWidth: 6,
                        blurHeight: 8
                    },
                    alt: "1-1"
                }, {
                    pic: {
                        src: "/_next/static/media/1-2-min.19a02e1f.jpg",
                        height: 743,
                        width: 605,
                        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJ8Vf//EAB4QAAIBBAMBAAAAAAAAAAAAAAECAwQFESIAEhNR/9oACAEBAAE/AKaZrrbKdYPQNDrIqsCc/cDbrz//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIR/9oACAECAQE/AJlYj//EABURAQEAAAAAAAAAAAAAAAAAAAAx/9oACAEDAQE/AK//2Q==",
                        blurWidth: 7,
                        blurHeight: 8
                    },
                    alt: "1-2"
                }, {
                    pic: {
                        src: "/_next/static/media/1-3-min.beb2415e.jpg",
                        height: 828,
                        width: 605,
                        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAgQP/xAAcEAADAAIDAQAAAAAAAAAAAAABAgMEEgAFESL/2gAIAQEAAT8Ajj4PZUnNqGHgq5qJmhb6Gq6qRz//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwCv/8QAFREBAQAAAAAAAAAAAAAAAAAAEQD/2gAIAQMBAT8AG//Z",
                        blurWidth: 6,
                        blurHeight: 8
                    },
                    alt: "1-3"
                }, {
                    pic: {
                        src: "/_next/static/media/1-4-min.827d8486.jpg",
                        height: 515,
                        width: 605,
                        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAJFP/8QAHBAAAQQDAQAAAAAAAAAAAAAAAwIEBRIAAQYT/9oACAEBAAE/AI7jnzwXmKTCJGqLXQOf/8QAGBEAAwEBAAAAAAAAAAAAAAAAAQIRACH/2gAIAQIBAT8ApXimb//EABcRAAMBAAAAAAAAAAAAAAAAAAABIQL/2gAIAQMBAT8A1XT/2Q==",
                        blurWidth: 8,
                        blurHeight: 7
                    },
                    alt: "1-4"
                }, {
                    pic: {
                        src: "/_next/static/media/2-1-min.f18db332.jpg",
                        height: 607,
                        width: 606,
                        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAgwX/AP/EABwQAAICAgMAAAAAAAAAAAAAAAECAxEEUQASQf/aAAgBAQABPwCSPPRWlaJxkRMrVQ7ISNarzn//xAAXEQEAAwAAAAAAAAAAAAAAAAABABEx/9oACAECAQE/ACkyf//EABcRAQADAAAAAAAAAAAAAAAAAAEAITH/2gAIAQMBAT8AsxZ//9k=",
                        blurWidth: 8,
                        blurHeight: 8
                    },
                    alt: "2-1"
                }, {
                    pic: {
                        src: "/_next/static/media/2-2-min.dce20333.jpg",
                        height: 607,
                        width: 606,
                        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAQX/2gAMAwEAAhADEAAAAKAo/wD/xAAcEAEAAgEFAAAAAAAAAAAAAAADARIEAAUREzL/2gAIAQEAAT8ADCTccDtJkFGjlIKPd4rNra//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8AwQv/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8AXW//2Q==",
                        blurWidth: 8,
                        blurHeight: 8
                    },
                    alt: "2-2"
                }, {
                    pic: {
                        src: "/_next/static/media/2-3-min.766e86b4.jpg",
                        height: 799,
                        width: 606,
                        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAJsCn//EAB0QAAICAQUAAAAAAAAAAAAAAAIDARIEABEUIXH/2gAIAQEAAT8AevGx08NqGi4W3k9hvWY6HzX/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPwAW/8QAGREBAAIDAAAAAAAAAAAAAAAAAQACESFR/9oACAEDAQE/ALBlOan/2Q==",
                        blurWidth: 6,
                        blurHeight: 8
                    },
                    alt: "2-3"
                }, {
                    pic: {
                        src: "/_next/static/media/2-4-min.081e0976.jpg",
                        height: 875,
                        width: 606,
                        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAI8Ff//EAB0QAAEEAgMAAAAAAAAAAAAAAAMBBBESAgUAIVH/2gAIAQEAAT8AdA2L1Aa5uhCmbY5WosrSept5bn//xAAWEQADAAAAAAAAAAAAAAAAAAAAARL/2gAIAQIBAT8Apn//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwCP/9k=",
                        blurWidth: 6,
                        blurHeight: 8
                    },
                    alt: "2-4"
                }, {
                    pic: {
                        src: "/_next/static/media/3-1-min.b0fb3915.jpg",
                        height: 973,
                        width: 605,
                        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAmIH/xAAdEAEAAQMFAAAAAAAAAAAAAAACAwEEEQATISQx/9oACAEBAAE/ALtOKK068BFYsFnncx6q6//EABcRAAMBAAAAAAAAAAAAAAAAAAABAiH/2gAIAQIBAT8Al4f/xAAYEQACAwAAAAAAAAAAAAAAAAABAgASgf/aAAgBAwEBPwB1FsE//9k=",
                        blurWidth: 5,
                        blurHeight: 8
                    },
                    alt: "3-1"
                }, {
                    pic: {
                        src: "/_next/static/media/3-2-min.790e330c.jpg",
                        height: 533,
                        width: 605,
                        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJANf//EAB0QAAIBBAMAAAAAAAAAAAAAAAECAwAEERIFE0H/2gAIAQEAAT8AHNq8920t66pNJ2ZQMr741wSPAK//xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPwAC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAC/9oACAEDAQE/AHbf/9k=",
                        blurWidth: 8,
                        blurHeight: 7
                    },
                    alt: "3-2"
                }, {
                    pic: {
                        src: "/_next/static/media/3-3-min.82dfd356.jpg",
                        height: 772,
                        width: 605,
                        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAIwOn//EAB4QAAIBAwUAAAAAAAAAAAAAAAECAwQFEgAREyJB/9oACAEBAAE/AFkr0t61TW4Tcs2CSN2AWMYldvDr/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAITYf/aAAgBAgEBPwCa6f/EABgRAAIDAAAAAAAAAAAAAAAAAAACEmGR/9oACAEDAQE/AJtWH//Z",
                        blurWidth: 6,
                        blurHeight: 8
                    },
                    alt: "3-3"
                }, {
                    pic: {
                        src: "/_next/static/media/3-4-min.b36af180.jpg",
                        height: 610,
                        width: 605,
                        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJwUP//EAB0QAAEEAgMAAAAAAAAAAAAAAAIBAwQSBTEAMnL/2gAIAQEAAT8AiPYwhQyxUdl5G+tqJbQqJb9c/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQBRof/aAAgBAgEBPwAW8J//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIx/9oACAEDAQE/AHMvUf/Z",
                        blurWidth: 8,
                        blurHeight: 8
                    },
                    alt: "3-4"
                }];

            function M() {
                var A = (0, C.Z)(["\n    background: linear-gradient(\n        343deg,\n        #06ce9f 0%,\n        #15afdd 25%,\n        #026eef 51%,\n        #683ca6 65%,\n        #de0352 100%\n    );\n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    letter-spacing: 0.6em;\n    text-transform: uppercase;\n    font-weight: bold;\n"]);
                return M = function() {
                    return A
                }, A
            }

            function j() {
                var A = (0, C.Z)(["\n    background: linear-gradient(\n        330deg,\n        #06ce9f 0%,\n        #15afdd 25%,\n        #026eef 51%,\n        #683ca6 65%,\n        #de0352 100%\n    );\n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n"]);
                return j = function() {
                    return A
                }, A
            }

            function v() {
                var A = (0, C.Z)(["\n    &::after {\n        content: '';\n        width: 100%;\n        height: 40px;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        background: #000000;\n    }\n    img {\n        filter: grayscale(1);\n        transition: filter 0.3s ease-in-out;\n        :hover {\n            filter: grayscale(0);\n        }\n    }\n"]);
                return v = function() {
                    return A
                }, A
            }
            var w = d.ZP.span.withConfig({
                    componentId: "sc-645f876b-0"
                })(M()),
                Q = d.ZP.span.withConfig({
                    componentId: "sc-645f876b-1"
                })(j()),
                Z = d.ZP.div.withConfig({
                    componentId: "sc-645f876b-2"
                })(v()),
                b = function() {
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("section", {
                            className: "bg-white text-black py-[12.5rem] px-2",
                            children: (0, n.jsx)(s.E.div, {
                                className: "relative",
                                variants: p,
                                initial: "initial",
                                whileInView: "animate",
                                viewport: {
                                    once: !0,
                                    amount: .2
                                },
                                children: (0, n.jsxs)("div", {
                                    className: "text-center max-w-[740px] mx-auto text-lg relative",
                                    children: [(0, n.jsx)(s.E.div, {
                                        className: "text-[5rem] font-bold lg:text-[3.6rem] md:text-[3rem]",
                                        variants: g,
                                        children: "Une \xe9quipe soud\xe9e & innovante"
                                    }), (0, n.jsx)(s.E.div, {
                                        variants: g,
                                        className: "mt-1",
                                        children: (0, n.jsx)(w, {
                                            children: "dream team"
                                        })
                                    }), (0, n.jsxs)(s.E.div, {
                                        className: "mt-2 md:text-base",
                                        variants: g,
                                        children: ["Chacun de nos collaborateur est", " ", (0, n.jsx)("strong", {
                                            children: "un expert passionn\xe9 dans sa sp\xe9cialit\xe9."
                                        }), " ", "Au-del\xe0 de notre veille passive sur les technologies, nous d\xe9dions r\xe9guli\xe8rement des p\xe9riodes de R&D \xe0 la r\xe9alisation de projets challengeant les nouvelles technologies."]
                                    })]
                                })
                            })
                        }), (0, n.jsxs)("section", {
                            className: "bg-black text-white",
                            children: [(0, n.jsx)(s.E.div, {
                                className: "py-[12.5rem] relative px-2",
                                variants: x,
                                initial: "initial",
                                whileInView: "animate",
                                viewport: {
                                    once: !0,
                                    amount: .6
                                },
                                children: (0, n.jsxs)("div", {
                                    className: "max-w-[900px] mx-auto relative",
                                    children: [(0, n.jsx)(s.E.div, {
                                        variants: h,
                                        children: (0, n.jsx)(c(), {
                                            src: u,
                                            alt: "quote",
                                            className: "block h-auto mx-auto"
                                        })
                                    }), (0, n.jsxs)(s.E.div, {
                                        className: "text-[5rem] font-bold text-center lg:text-[3.6rem] md:text-[3rem]",
                                        variants: h,
                                        children: ["L’humain au centre de notre", " ", (0, n.jsx)(Q, {
                                            children: "fonctionnement"
                                        })]
                                    }), (0, n.jsx)(s.E.div, {
                                        className: "mt-2 leading-normal text-lg text-center md:text-base",
                                        variants: h,
                                        children: (0, n.jsx)("p", {
                                            children: "Il nous faut simplement des personnes capables de d\xe9sapprendre et apprendre \xe0 nouveau, dans la modestie la plus compl\xe8te. Mon conseil le plus pr\xe9cieux : \xeatre passionn\xe9 et proactif. Dans ce milieu, tout avance tr\xe8s vite. On ne peut pas \xeatre \xe0 la page si on se contente de ce que l’on nous donne. Il faut avoir l’envie d’aller chercher. Dans l’\xe9quipe, nous aimons les profils qui ont des projets, que ce soit du b\xe9n\xe9volat ou des petits business. C’est ce qui fait selon nous la diff\xe9rence entre un bon et un tr\xe8s bon."
                                        })
                                    }), (0, n.jsxs)(s.E.div, {
                                        className: "text-sm uppercase mt-3 text-center",
                                        variants: L,
                                        children: [(0, n.jsx)("span", {
                                            className: "font-bold text-[#15AFDD]",
                                            children: "Renaud Feigenbaum"
                                        }), (0, n.jsx)("span", {
                                            className: "ml-1 opacity-50",
                                            children: "fondateur"
                                        })]
                                    })]
                                })
                            }), (0, n.jsx)("section", {
                                className: "py-2 relative px-2 bg-black",
                                children: (0, n.jsx)(Z, {
                                    className: "relative columns-3 gap-2 -mb-[40px]",
                                    initial: "initial",
                                    whileInView: "animate",
                                    variants: f,
                                    as: s.E.div,
                                    children: E.map(function(A) {
                                        return (0, n.jsx)(s.E.div, {
                                            className: "relative rounded-lg mb-2",
                                            initial: "initial",
                                            whileInView: "animate",
                                            variants: m,
                                            children: (0, n.jsx)(c(), {
                                                src: A.pic,
                                                alt: A.alt,
                                                className: "w-full h-auto rounded-lg",
                                                quality: 90
                                            })
                                        }, A.alt)
                                    })
                                })
                            })]
                        })]
                    })
                },
                B = t(22452),
                I = {
                    initial: {
                        y: -20,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: .25,
                        transition: {
                            duration: .7,
                            ease: [.6, -.05, .01, .99]
                        }
                    }
                },
                y = {
                    animate: {
                        transition: {
                            staggerChildren: .15
                        }
                    }
                },
                V = {
                    initial: {
                        y: -20,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: .7,
                            ease: [.6, -.05, .01, .99]
                        }
                    }
                },
                D = {
                    animate: {
                        transition: {
                            staggerChildren: .2
                        }
                    }
                },
                F = {
                    initial: {
                        y: 20,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: .7,
                            ease: [.6, -.05, .01, .99]
                        }
                    }
                };

            function k() {
                var A = (0, C.Z)(["\n    0% {\n        background-position: -20% -20%;\n    }\n    25% {\n        background-position: 30% 80%;\n    }\n    50% {\n        background-position: 110% 110%;\n    }\n    75% {\n        background-position: 80% 30%;\n    }\n    100% {\n        background-position: -20% -20%;\n    }\n"]);
                return k = function() {
                    return A
                }, A
            }

            function H() {
                var A = (0, C.Z)(["\n    --mx: 0;\n    --my: 0;\n    height: 280px;\n    width: 100%;\n    position: relative;\n    z-index: 1;\n    border-radius: 6px;\n    transition: transform 0.2s ease-in-out;\n    transform-style: preserve-3d;\n    /* background: radial-gradient(\n        circle at 50% 0%,\n        rgba(206, 248, 255, 0.18) 0,\n        rgba(161, 252, 70, 0) 80%\n    ); */\n    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);\n    &:hover {\n        transition: transform 0s ease-in-out;\n    }\n    img:first-of-type {\n        transition: all 0.15s ease-in-out;\n        filter: grayscale(1);\n        opacity: 0.1;\n    }\n    img:last-of-type {\n        transition: all 0.15s ease-in-out;\n        filter: grayscale(1);\n        opacity: 1;\n    }\n"]);
                return H = function() {
                    return A
                }, A
            }

            function P() {
                var A = (0, C.Z)(["\n    position: absolute;\n    inset: 0;\n    background: radial-gradient(\n        #06ce9f 0%,\n        #15afdd 25%,\n        #026eef 50%,\n        #683ca6 75%,\n        #de0352 100%\n    );\n    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n    mask-composite: exclude;\n    -webkit-mask-composite: xor;\n    padding: 1px;\n    border-radius: 6px;\n    animation: ", " 10s linear infinite;\n    background-size: 300% 300%;\n    will-change: background-position;\n    transition: opacity 0.15s ease-in-out;\n    opacity: 0.5;\n"]);
                return P = function() {
                    return A
                }, A
            }

            function U() {
                var A = (0, C.Z)(["\n    position: absolute;\n    inset: 0;\n    content: '';\n    background: conic-gradient(\n        from 90deg at calc(var(--mx) * 100%) calc(var(--my) * 100%),\n        #06ce9f 0deg,\n        #15afdd 106.12deg,\n        #026eef 194.25deg,\n        #683ca6 267.37deg,\n        #de0352 360deg\n    );\n    filter: blur(100px);\n    opacity: var(--o);\n    mix-blend-mode: overlay;\n    transition: opacity 0.2s ease-in-out;\n    z-index: 2;\n    border-radius: 6px;\n    mask-image: radial-gradient(\n        farthest-corner circle at calc(var(--mx) * 100%) calc(var(--my) * 100%),\n        black 0%,\n        rgba(0, 0, 0, 0) 75%\n    );\n"]);
                return U = function() {
                    return A
                }, A
            }
            var _ = (0, d.F4)(k()),
                S = d.ZP.div.withConfig({
                    componentId: "sc-694ac781-0"
                })(H()),
                N = d.ZP.div.withConfig({
                    componentId: "sc-694ac781-1"
                })(P(), _),
                T = d.ZP.div.withConfig({
                    componentId: "sc-694ac781-2"
                })(U()),
                R = {
                    animate: {
                        transition: {
                            staggerChildren: .2
                        }
                    }
                },
                G = {
                    initial: {
                        y: 20,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: .7,
                            ease: [.6, -.05, .01, .99]
                        }
                    }
                },
                K = function(A) {
                    var e = A.item,
                        t = A.variant,
                        i = A.placementIcon,
                        a = (0, r.useRef)(null),
                        o = function(A) {
                            if (a.current) {
                                var e = a.current.getBoundingClientRect(),
                                    t = e.x,
                                    n = e.y,
                                    i = e.width,
                                    s = e.height,
                                    r = (A.clientX - t) / i,
                                    o = (A.clientY - n) / s;
                                a.current.style.setProperty("--mx", "".concat(r)), a.current.style.setProperty("--my", "".concat(o)), a.current.style.setProperty("--o", "0.4")
                            }
                        },
                        C = function() {
                            a.current && a.current.style.setProperty("--o", "0")
                        };
                    return (0, r.useEffect)(function() {
                        C()
                    }, []), (0, n.jsxs)(S, {
                        onMouseMove: o,
                        onMouseLeave: C,
                        ref: a,
                        className: "flex justify-center ".concat("top" == t ? "items-start" : "items-end", " p-5 pb-3 overflow-hidden"),
                        children: [(0, n.jsx)(N, {}), (0, n.jsx)(T, {}), (0, n.jsxs)(s.E.div, {
                            className: "text-center uppercase max-w-[170px]",
                            initial: "initial",
                            animate: "animate",
                            variants: R,
                            children: [(0, n.jsx)("div", {
                                className: "absolute left-1/2 -translate-x-1/2 ".concat(i),
                                children: e.icon
                            }), (0, n.jsx)(s.E.div, {
                                className: "font-bold text-[46px]",
                                variants: G,
                                children: e.value
                            }), (0, n.jsx)(s.E.div, {
                                className: "text-base text-[#808080] h-5",
                                variants: G,
                                children: e.desc
                            })]
                        })]
                    })
                },
                Y = {
                    hidden: {
                        opacity: 0
                    },
                    visible: {
                        opacity: 1,
                        transition: {
                            delay: 1,
                            duration: 1
                        }
                    }
                },
                O = function() {
                    return (0, n.jsxs)("svg", {
                        width: "213",
                        height: "176",
                        viewBox: "0 0 213 176",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsxs)("g", {
                            filter: "url(#filter0_b_3507_26591)",
                            children: [(0, n.jsx)("mask", {
                                id: "path-1-inside-1_3507_26591",
                                fill: "white",
                                children: (0, n.jsx)(s.E.path, {
                                    d: "M200.098 62.1449V52.3191C200.098 40.6749 195.805 30.5964 187.34 22.3733C178.93 14.1995 168.597 10.0571 156.629 10.0571C147.19 10.0571 138.719 12.7139 131.357 17.9597C124.007 12.8372 115.597 10.2482 106.293 10.2482C96.9894 10.2482 88.5858 12.831 81.248 17.935C73.9103 12.831 65.5067 10.2482 56.2028 10.2482C44.2712 10.2482 33.9689 14.3166 25.5715 22.3424C18.6992 28.9197 14.5771 36.7359 13.2602 45.6494L12.5312 52.1157V111.693V123.75L13.2602 131.067C14.5771 139.981 18.7053 147.803 25.5776 154.38C33.9689 162.4 44.2773 166.468 56.2089 166.468C65.5067 166.468 73.9103 163.886 81.2542 158.782C88.592 163.886 96.9955 166.468 106.299 166.468C115.683 166.468 124.154 163.836 131.541 158.64C138.891 163.842 147.313 166.468 156.635 166.468C168.609 166.468 178.942 162.326 187.346 154.152C195.811 145.923 200.104 135.931 200.104 124.465V109.455C200.104 97.8112 195.798 87.7265 187.303 79.4911C178.875 71.3296 168.511 67.1934 156.506 67.1934H156.163C154.442 67.0701 153.033 66.4229 151.735 65.1654C150.198 63.6736 150.002 62.4038 150.002 61.4607V52.3376C150.002 50.852 150.51 49.761 151.692 48.7007C153.082 47.4617 154.65 46.8823 156.629 46.8823C158.754 46.8823 160.457 47.4802 161.823 48.6946C163.017 49.7671 163.526 50.852 163.526 52.3376V62.1634H200.098V62.1449ZM24.5119 57.7005V51.9061C24.5915 43.757 27.8193 36.8222 33.8219 31.071C39.9163 25.2458 47.444 22.2931 56.2028 22.2931C64.2511 22.2931 71.3622 24.9191 77.3403 30.1032L81.248 33.4874L85.1558 30.0971C91.1277 24.9191 98.2389 22.2931 106.293 22.2931C112.143 22.2931 117.496 23.6863 122.286 26.4355C122.249 26.4787 122.218 26.5218 122.182 26.565C121.924 26.8793 121.679 27.1937 121.434 27.5142C121.361 27.6067 121.294 27.6992 121.22 27.7916C120.944 28.1553 120.675 28.5252 120.411 28.895C120.375 28.9505 120.332 29.006 120.295 29.0676C120.069 29.3943 119.848 29.721 119.634 30.0539C119.566 30.1525 119.499 30.2573 119.438 30.356C119.193 30.732 118.96 31.1142 118.733 31.4963C118.703 31.5457 118.678 31.595 118.647 31.6443C118.445 31.9895 118.249 32.3347 118.053 32.686C117.992 32.7908 117.937 32.9018 117.882 33.0066C117.674 33.4011 117.465 33.7956 117.269 34.1901C117.251 34.2209 117.239 34.2579 117.22 34.2887C117.037 34.6586 116.865 35.0346 116.694 35.4168C116.645 35.5278 116.596 35.6325 116.547 35.7435C116.369 36.1503 116.191 36.5633 116.026 36.9763C116.026 36.9763 116.026 36.9763 116.026 36.9825C113.123 35.2442 109.821 34.3442 106.299 34.3442C101.161 34.3442 96.5912 36.138 93.0816 39.5407C89.5229 42.9926 87.6425 47.4124 87.6425 52.313V111.687H75.1475V52.313C75.1475 47.3692 73.1752 42.9187 69.4328 39.4482C65.8252 36.1072 61.3049 34.3442 56.3498 34.3442C51.2231 34.3442 46.6049 36.1072 42.9788 39.4544C39.2548 42.9187 37.2887 47.3631 37.2887 52.313V111.687H24.5241V57.7005H24.5119ZM126.132 91.1661C126.549 91.5668 126.978 91.9552 127.406 92.3373C127.437 92.362 127.468 92.3928 127.498 92.4175C130.677 95.2345 134.089 97.5215 137.721 99.2598V111.693H124.962V90.0073C125.005 90.0504 125.048 90.0936 125.091 90.1367C125.428 90.4819 125.777 90.8271 126.132 91.1661ZM156.776 103.451H157.364C159.03 103.569 160.42 104.234 161.719 105.529C163.311 107.138 163.532 108.414 163.532 109.449V124.194C163.532 125.686 163.023 126.777 161.829 127.843C160.457 129.064 158.76 129.662 156.629 129.662C154.65 129.662 152.776 129.082 151.392 127.849C150.204 126.783 149.695 125.692 149.695 124.2V111.705V102.934C151.992 103.273 154.35 103.451 156.776 103.451ZM112.982 123.75V124.391C112.982 125.982 112.418 127.221 111.144 128.41C109.766 129.705 108.223 130.303 106.293 130.303C104.229 130.303 102.667 129.723 101.387 128.484C100.156 127.295 99.6109 126.031 99.6109 124.391V123.75V111.693V52.3191C99.6109 50.6794 100.156 49.4158 101.381 48.2261C102.667 46.9809 104.229 46.4015 106.293 46.4015C108.223 46.4015 109.766 47.0056 111.144 48.2939C112.412 49.4836 112.982 50.7226 112.982 52.313V111.687V123.75ZM63.1547 123.75V124.391C63.1547 125.969 62.585 127.202 61.3049 128.386C59.89 129.699 58.3098 130.303 56.3314 130.303C54.1692 130.303 52.4971 129.693 51.0884 128.392C49.8144 127.208 49.2447 125.976 49.2447 124.391V123.75V111.693V52.3191C49.2447 50.7349 49.8144 49.5021 51.0761 48.3309C52.4971 47.0179 54.1631 46.4076 56.3314 46.4076C58.3098 46.4076 59.89 47.0179 61.2988 48.3247C62.5789 49.5144 63.1547 50.7472 63.1547 52.3253V111.699V123.75ZM156.629 34.8065C151.759 34.8065 147.3 36.4894 143.736 39.6701C139.999 43.0173 138.021 47.3939 138.021 52.3191V61.4422C138.021 66.1085 139.883 70.3865 143.405 73.8138C146.786 77.1055 151.024 78.9794 155.661 79.2198L156.494 79.226C165.296 79.226 172.866 82.228 178.979 88.1518C185.122 94.1126 188.111 101.072 188.111 109.437V124.447C188.111 132.633 185.135 139.512 179.01 145.467C172.915 151.397 165.381 154.399 156.623 154.399C148.574 154.399 141.463 151.724 135.485 146.441L131.547 142.958L127.596 146.428C121.575 151.717 114.409 154.399 106.287 154.399C98.2389 154.399 91.1277 151.773 85.1497 146.595L81.2419 143.205L77.3341 146.589C71.3561 151.773 64.2449 154.399 56.1966 154.399C47.4378 154.399 39.9102 151.446 33.8157 145.627C27.8071 139.876 24.8426 133.12 24.7691 124.965L24.7569 123.738H37.2703V124.379C37.2703 129.329 39.2364 133.773 42.9727 137.244C46.5804 140.579 51.1986 142.348 56.3314 142.348C61.2865 142.348 65.8068 140.585 69.4206 137.238C73.1568 133.767 75.1353 129.323 75.1353 124.379V123.738H87.6303V124.379C87.6303 129.28 89.5107 133.699 93.0754 137.157C96.5851 140.554 101.154 142.348 106.293 142.348C111.23 142.348 115.726 140.572 119.309 137.219C123.009 133.755 124.962 129.31 124.962 124.379V123.738H138.027V124.182C138.027 129.119 140.005 133.496 143.748 136.843C147.306 140.024 151.759 141.701 156.635 141.701C161.682 141.701 166.227 140.024 169.785 136.843C173.534 133.496 175.512 129.119 175.512 124.182V109.437C175.512 104.734 173.724 100.548 170.177 96.979C166.753 93.564 162.49 91.6284 157.842 91.3942L157.688 91.388H156.776C153.236 91.388 149.885 90.8702 146.737 89.8655L145.726 89.5018C142.86 88.4785 140.165 87.0299 137.672 85.1868C137.506 85.0635 137.347 84.9403 137.182 84.817C136.961 84.6505 136.747 84.4779 136.533 84.3053C136.232 84.0588 135.932 83.8122 135.638 83.5595C135.571 83.504 135.51 83.4485 135.448 83.3869C135.093 83.0725 134.738 82.752 134.395 82.4191C128.178 76.4706 125.158 69.5173 125.158 61.1586V52.3068C125.158 49.6932 125.452 47.2213 126.047 44.8727C127.351 39.7009 130.107 35.1394 134.364 31.0525C134.401 31.0155 134.444 30.9785 134.481 30.9416C134.585 30.8491 134.72 30.732 134.854 30.621C135.038 30.4607 135.228 30.3066 135.412 30.1402L136.6 29.0861C142.327 24.4506 149.058 22.102 156.641 22.102C165.4 22.102 172.934 25.1102 179.028 31.034C184.602 36.4462 187.566 42.6968 188.056 50.0815H175.378C174.869 46.0686 172.964 42.4933 169.785 39.6516C166.214 36.4894 161.67 34.8065 156.629 34.8065Z"
                                })
                            }), (0, n.jsx)(s.E.path, {
                                d: "M200.098 62.1449V52.3191C200.098 40.6749 195.805 30.5964 187.34 22.3733C178.93 14.1995 168.597 10.0571 156.629 10.0571C147.19 10.0571 138.719 12.7139 131.357 17.9597C124.007 12.8372 115.597 10.2482 106.293 10.2482C96.9894 10.2482 88.5858 12.831 81.248 17.935C73.9103 12.831 65.5067 10.2482 56.2028 10.2482C44.2712 10.2482 33.9689 14.3166 25.5715 22.3424C18.6992 28.9197 14.5771 36.7359 13.2602 45.6494L12.5312 52.1157V111.693V123.75L13.2602 131.067C14.5771 139.981 18.7053 147.803 25.5776 154.38C33.9689 162.4 44.2773 166.468 56.2089 166.468C65.5067 166.468 73.9103 163.886 81.2542 158.782C88.592 163.886 96.9955 166.468 106.299 166.468C115.683 166.468 124.154 163.836 131.541 158.64C138.891 163.842 147.313 166.468 156.635 166.468C168.609 166.468 178.942 162.326 187.346 154.152C195.811 145.923 200.104 135.931 200.104 124.465V109.455C200.104 97.8112 195.798 87.7265 187.303 79.4911C178.875 71.3296 168.511 67.1934 156.506 67.1934H156.163C154.442 67.0701 153.033 66.4229 151.735 65.1654C150.198 63.6736 150.002 62.4038 150.002 61.4607V52.3376C150.002 50.852 150.51 49.761 151.692 48.7007C153.082 47.4617 154.65 46.8823 156.629 46.8823C158.754 46.8823 160.457 47.4802 161.823 48.6946C163.017 49.7671 163.526 50.852 163.526 52.3376V62.1634H200.098V62.1449ZM24.5119 57.7005V51.9061C24.5915 43.757 27.8193 36.8222 33.8219 31.071C39.9163 25.2458 47.444 22.2931 56.2028 22.2931C64.2511 22.2931 71.3622 24.9191 77.3403 30.1032L81.248 33.4874L85.1558 30.0971C91.1277 24.9191 98.2389 22.2931 106.293 22.2931C112.143 22.2931 117.496 23.6863 122.286 26.4355C122.249 26.4787 122.218 26.5218 122.182 26.565C121.924 26.8793 121.679 27.1937 121.434 27.5142C121.361 27.6067 121.294 27.6992 121.22 27.7916C120.944 28.1553 120.675 28.5252 120.411 28.895C120.375 28.9505 120.332 29.006 120.295 29.0676C120.069 29.3943 119.848 29.721 119.634 30.0539C119.566 30.1525 119.499 30.2573 119.438 30.356C119.193 30.732 118.96 31.1142 118.733 31.4963C118.703 31.5457 118.678 31.595 118.647 31.6443C118.445 31.9895 118.249 32.3347 118.053 32.686C117.992 32.7908 117.937 32.9018 117.882 33.0066C117.674 33.4011 117.465 33.7956 117.269 34.1901C117.251 34.2209 117.239 34.2579 117.22 34.2887C117.037 34.6586 116.865 35.0346 116.694 35.4168C116.645 35.5278 116.596 35.6325 116.547 35.7435C116.369 36.1503 116.191 36.5633 116.026 36.9763C116.026 36.9763 116.026 36.9763 116.026 36.9825C113.123 35.2442 109.821 34.3442 106.299 34.3442C101.161 34.3442 96.5912 36.138 93.0816 39.5407C89.5229 42.9926 87.6425 47.4124 87.6425 52.313V111.687H75.1475V52.313C75.1475 47.3692 73.1752 42.9187 69.4328 39.4482C65.8252 36.1072 61.3049 34.3442 56.3498 34.3442C51.2231 34.3442 46.6049 36.1072 42.9788 39.4544C39.2548 42.9187 37.2887 47.3631 37.2887 52.313V111.687H24.5241V57.7005H24.5119ZM126.132 91.1661C126.549 91.5668 126.978 91.9552 127.406 92.3373C127.437 92.362 127.468 92.3928 127.498 92.4175C130.677 95.2345 134.089 97.5215 137.721 99.2598V111.693H124.962V90.0073C125.005 90.0504 125.048 90.0936 125.091 90.1367C125.428 90.4819 125.777 90.8271 126.132 91.1661ZM156.776 103.451H157.364C159.03 103.569 160.42 104.234 161.719 105.529C163.311 107.138 163.532 108.414 163.532 109.449V124.194C163.532 125.686 163.023 126.777 161.829 127.843C160.457 129.064 158.76 129.662 156.629 129.662C154.65 129.662 152.776 129.082 151.392 127.849C150.204 126.783 149.695 125.692 149.695 124.2V111.705V102.934C151.992 103.273 154.35 103.451 156.776 103.451ZM112.982 123.75V124.391C112.982 125.982 112.418 127.221 111.144 128.41C109.766 129.705 108.223 130.303 106.293 130.303C104.229 130.303 102.667 129.723 101.387 128.484C100.156 127.295 99.6109 126.031 99.6109 124.391V123.75V111.693V52.3191C99.6109 50.6794 100.156 49.4158 101.381 48.2261C102.667 46.9809 104.229 46.4015 106.293 46.4015C108.223 46.4015 109.766 47.0056 111.144 48.2939C112.412 49.4836 112.982 50.7226 112.982 52.313V111.687V123.75ZM63.1547 123.75V124.391C63.1547 125.969 62.585 127.202 61.3049 128.386C59.89 129.699 58.3098 130.303 56.3314 130.303C54.1692 130.303 52.4971 129.693 51.0884 128.392C49.8144 127.208 49.2447 125.976 49.2447 124.391V123.75V111.693V52.3191C49.2447 50.7349 49.8144 49.5021 51.0761 48.3309C52.4971 47.0179 54.1631 46.4076 56.3314 46.4076C58.3098 46.4076 59.89 47.0179 61.2988 48.3247C62.5789 49.5144 63.1547 50.7472 63.1547 52.3253V111.699V123.75ZM156.629 34.8065C151.759 34.8065 147.3 36.4894 143.736 39.6701C139.999 43.0173 138.021 47.3939 138.021 52.3191V61.4422C138.021 66.1085 139.883 70.3865 143.405 73.8138C146.786 77.1055 151.024 78.9794 155.661 79.2198L156.494 79.226C165.296 79.226 172.866 82.228 178.979 88.1518C185.122 94.1126 188.111 101.072 188.111 109.437V124.447C188.111 132.633 185.135 139.512 179.01 145.467C172.915 151.397 165.381 154.399 156.623 154.399C148.574 154.399 141.463 151.724 135.485 146.441L131.547 142.958L127.596 146.428C121.575 151.717 114.409 154.399 106.287 154.399C98.2389 154.399 91.1277 151.773 85.1497 146.595L81.2419 143.205L77.3341 146.589C71.3561 151.773 64.2449 154.399 56.1966 154.399C47.4378 154.399 39.9102 151.446 33.8157 145.627C27.8071 139.876 24.8426 133.12 24.7691 124.965L24.7569 123.738H37.2703V124.379C37.2703 129.329 39.2364 133.773 42.9727 137.244C46.5804 140.579 51.1986 142.348 56.3314 142.348C61.2865 142.348 65.8068 140.585 69.4206 137.238C73.1568 133.767 75.1353 129.323 75.1353 124.379V123.738H87.6303V124.379C87.6303 129.28 89.5107 133.699 93.0754 137.157C96.5851 140.554 101.154 142.348 106.293 142.348C111.23 142.348 115.726 140.572 119.309 137.219C123.009 133.755 124.962 129.31 124.962 124.379V123.738H138.027V124.182C138.027 129.119 140.005 133.496 143.748 136.843C147.306 140.024 151.759 141.701 156.635 141.701C161.682 141.701 166.227 140.024 169.785 136.843C173.534 133.496 175.512 129.119 175.512 124.182V109.437C175.512 104.734 173.724 100.548 170.177 96.979C166.753 93.564 162.49 91.6284 157.842 91.3942L157.688 91.388H156.776C153.236 91.388 149.885 90.8702 146.737 89.8655L145.726 89.5018C142.86 88.4785 140.165 87.0299 137.672 85.1868C137.506 85.0635 137.347 84.9403 137.182 84.817C136.961 84.6505 136.747 84.4779 136.533 84.3053C136.232 84.0588 135.932 83.8122 135.638 83.5595C135.571 83.504 135.51 83.4485 135.448 83.3869C135.093 83.0725 134.738 82.752 134.395 82.4191C128.178 76.4706 125.158 69.5173 125.158 61.1586V52.3068C125.158 49.6932 125.452 47.2213 126.047 44.8727C127.351 39.7009 130.107 35.1394 134.364 31.0525C134.401 31.0155 134.444 30.9785 134.481 30.9416C134.585 30.8491 134.72 30.732 134.854 30.621C135.038 30.4607 135.228 30.3066 135.412 30.1402L136.6 29.0861C142.327 24.4506 149.058 22.102 156.641 22.102C165.4 22.102 172.934 25.1102 179.028 31.034C184.602 36.4462 187.566 42.6968 188.056 50.0815H175.378C174.869 46.0686 172.964 42.4933 169.785 39.6516C166.214 36.4894 161.67 34.8065 156.629 34.8065Z",
                                fill: "url(#paint0_radial_3507_26591)",
                                fillOpacity: "0.05",
                                variants: Y,
                                initial: "hidden",
                                animate: "visible"
                            }), (0, n.jsx)("path", {
                                d: "M200.098 62.1449V52.3191C200.098 40.6749 195.805 30.5964 187.34 22.3733C178.93 14.1995 168.597 10.0571 156.629 10.0571C147.19 10.0571 138.719 12.7139 131.357 17.9597C124.007 12.8372 115.597 10.2482 106.293 10.2482C96.9894 10.2482 88.5858 12.831 81.248 17.935C73.9103 12.831 65.5067 10.2482 56.2028 10.2482C44.2712 10.2482 33.9689 14.3166 25.5715 22.3424C18.6992 28.9197 14.5771 36.7359 13.2602 45.6494L12.5312 52.1157V111.693V123.75L13.2602 131.067C14.5771 139.981 18.7053 147.803 25.5776 154.38C33.9689 162.4 44.2773 166.468 56.2089 166.468C65.5067 166.468 73.9103 163.886 81.2542 158.782C88.592 163.886 96.9955 166.468 106.299 166.468C115.683 166.468 124.154 163.836 131.541 158.64C138.891 163.842 147.313 166.468 156.635 166.468C168.609 166.468 178.942 162.326 187.346 154.152C195.811 145.923 200.104 135.931 200.104 124.465V109.455C200.104 97.8112 195.798 87.7265 187.303 79.4911C178.875 71.3296 168.511 67.1934 156.506 67.1934H156.163C154.442 67.0701 153.033 66.4229 151.735 65.1654C150.198 63.6736 150.002 62.4038 150.002 61.4607V52.3376C150.002 50.852 150.51 49.761 151.692 48.7007C153.082 47.4617 154.65 46.8823 156.629 46.8823C158.754 46.8823 160.457 47.4802 161.823 48.6946C163.017 49.7671 163.526 50.852 163.526 52.3376V62.1634H200.098V62.1449ZM24.5119 57.7005V51.9061C24.5915 43.757 27.8193 36.8222 33.8219 31.071C39.9163 25.2458 47.444 22.2931 56.2028 22.2931C64.2511 22.2931 71.3622 24.9191 77.3403 30.1032L81.248 33.4874L85.1558 30.0971C91.1277 24.9191 98.2389 22.2931 106.293 22.2931C112.143 22.2931 117.496 23.6863 122.286 26.4355C122.249 26.4787 122.218 26.5218 122.182 26.565C121.924 26.8793 121.679 27.1937 121.434 27.5142C121.361 27.6067 121.294 27.6992 121.22 27.7916C120.944 28.1553 120.675 28.5252 120.411 28.895C120.375 28.9505 120.332 29.006 120.295 29.0676C120.069 29.3943 119.848 29.721 119.634 30.0539C119.566 30.1525 119.499 30.2573 119.438 30.356C119.193 30.732 118.96 31.1142 118.733 31.4963C118.703 31.5457 118.678 31.595 118.647 31.6443C118.445 31.9895 118.249 32.3347 118.053 32.686C117.992 32.7908 117.937 32.9018 117.882 33.0066C117.674 33.4011 117.465 33.7956 117.269 34.1901C117.251 34.2209 117.239 34.2579 117.22 34.2887C117.037 34.6586 116.865 35.0346 116.694 35.4168C116.645 35.5278 116.596 35.6325 116.547 35.7435C116.369 36.1503 116.191 36.5633 116.026 36.9763C116.026 36.9763 116.026 36.9763 116.026 36.9825C113.123 35.2442 109.821 34.3442 106.299 34.3442C101.161 34.3442 96.5912 36.138 93.0816 39.5407C89.5229 42.9926 87.6425 47.4124 87.6425 52.313V111.687H75.1475V52.313C75.1475 47.3692 73.1752 42.9187 69.4328 39.4482C65.8252 36.1072 61.3049 34.3442 56.3498 34.3442C51.2231 34.3442 46.6049 36.1072 42.9788 39.4544C39.2548 42.9187 37.2887 47.3631 37.2887 52.313V111.687H24.5241V57.7005H24.5119ZM126.132 91.1661C126.549 91.5668 126.978 91.9552 127.406 92.3373C127.437 92.362 127.468 92.3928 127.498 92.4175C130.677 95.2345 134.089 97.5215 137.721 99.2598V111.693H124.962V90.0073C125.005 90.0504 125.048 90.0936 125.091 90.1367C125.428 90.4819 125.777 90.8271 126.132 91.1661ZM156.776 103.451H157.364C159.03 103.569 160.42 104.234 161.719 105.529C163.311 107.138 163.532 108.414 163.532 109.449V124.194C163.532 125.686 163.023 126.777 161.829 127.843C160.457 129.064 158.76 129.662 156.629 129.662C154.65 129.662 152.776 129.082 151.392 127.849C150.204 126.783 149.695 125.692 149.695 124.2V111.705V102.934C151.992 103.273 154.35 103.451 156.776 103.451ZM112.982 123.75V124.391C112.982 125.982 112.418 127.221 111.144 128.41C109.766 129.705 108.223 130.303 106.293 130.303C104.229 130.303 102.667 129.723 101.387 128.484C100.156 127.295 99.6109 126.031 99.6109 124.391V123.75V111.693V52.3191C99.6109 50.6794 100.156 49.4158 101.381 48.2261C102.667 46.9809 104.229 46.4015 106.293 46.4015C108.223 46.4015 109.766 47.0056 111.144 48.2939C112.412 49.4836 112.982 50.7226 112.982 52.313V111.687V123.75ZM63.1547 123.75V124.391C63.1547 125.969 62.585 127.202 61.3049 128.386C59.89 129.699 58.3098 130.303 56.3314 130.303C54.1692 130.303 52.4971 129.693 51.0884 128.392C49.8144 127.208 49.2447 125.976 49.2447 124.391V123.75V111.693V52.3191C49.2447 50.7349 49.8144 49.5021 51.0761 48.3309C52.4971 47.0179 54.1631 46.4076 56.3314 46.4076C58.3098 46.4076 59.89 47.0179 61.2988 48.3247C62.5789 49.5144 63.1547 50.7472 63.1547 52.3253V111.699V123.75ZM156.629 34.8065C151.759 34.8065 147.3 36.4894 143.736 39.6701C139.999 43.0173 138.021 47.3939 138.021 52.3191V61.4422C138.021 66.1085 139.883 70.3865 143.405 73.8138C146.786 77.1055 151.024 78.9794 155.661 79.2198L156.494 79.226C165.296 79.226 172.866 82.228 178.979 88.1518C185.122 94.1126 188.111 101.072 188.111 109.437V124.447C188.111 132.633 185.135 139.512 179.01 145.467C172.915 151.397 165.381 154.399 156.623 154.399C148.574 154.399 141.463 151.724 135.485 146.441L131.547 142.958L127.596 146.428C121.575 151.717 114.409 154.399 106.287 154.399C98.2389 154.399 91.1277 151.773 85.1497 146.595L81.2419 143.205L77.3341 146.589C71.3561 151.773 64.2449 154.399 56.1966 154.399C47.4378 154.399 39.9102 151.446 33.8157 145.627C27.8071 139.876 24.8426 133.12 24.7691 124.965L24.7569 123.738H37.2703V124.379C37.2703 129.329 39.2364 133.773 42.9727 137.244C46.5804 140.579 51.1986 142.348 56.3314 142.348C61.2865 142.348 65.8068 140.585 69.4206 137.238C73.1568 133.767 75.1353 129.323 75.1353 124.379V123.738H87.6303V124.379C87.6303 129.28 89.5107 133.699 93.0754 137.157C96.5851 140.554 101.154 142.348 106.293 142.348C111.23 142.348 115.726 140.572 119.309 137.219C123.009 133.755 124.962 129.31 124.962 124.379V123.738H138.027V124.182C138.027 129.119 140.005 133.496 143.748 136.843C147.306 140.024 151.759 141.701 156.635 141.701C161.682 141.701 166.227 140.024 169.785 136.843C173.534 133.496 175.512 129.119 175.512 124.182V109.437C175.512 104.734 173.724 100.548 170.177 96.979C166.753 93.564 162.49 91.6284 157.842 91.3942L157.688 91.388H156.776C153.236 91.388 149.885 90.8702 146.737 89.8655L145.726 89.5018C142.86 88.4785 140.165 87.0299 137.672 85.1868C137.506 85.0635 137.347 84.9403 137.182 84.817C136.961 84.6505 136.747 84.4779 136.533 84.3053C136.232 84.0588 135.932 83.8122 135.638 83.5595C135.571 83.504 135.51 83.4485 135.448 83.3869C135.093 83.0725 134.738 82.752 134.395 82.4191C128.178 76.4706 125.158 69.5173 125.158 61.1586V52.3068C125.158 49.6932 125.452 47.2213 126.047 44.8727C127.351 39.7009 130.107 35.1394 134.364 31.0525C134.401 31.0155 134.444 30.9785 134.481 30.9416C134.585 30.8491 134.72 30.732 134.854 30.621C135.038 30.4607 135.228 30.3066 135.412 30.1402L136.6 29.0861C142.327 24.4506 149.058 22.102 156.641 22.102C165.4 22.102 172.934 25.1102 179.028 31.034C184.602 36.4462 187.566 42.6968 188.056 50.0815H175.378C174.869 46.0686 172.964 42.4933 169.785 39.6516C166.214 36.4894 161.67 34.8065 156.629 34.8065Z",
                                stroke: "url(#paint1_radial_3507_26591)",
                                strokeOpacity: "0.5",
                                strokeWidth: "2",
                                mask: "url(#path-1-inside-1_3507_26591)"
                            })]
                        }), (0, n.jsxs)("defs", {
                            children: [(0, n.jsxs)("filter", {
                                id: "filter0_b_3507_26591",
                                x: "1.53125",
                                y: "-0.942871",
                                width: "209.57",
                                height: "178.411",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: [(0, n.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, n.jsx)("feGaussianBlur", { in: "BackgroundImageFix",
                                    stdDeviation: "5.5"
                                }), (0, n.jsx)("feComposite", {
                                    in2: "SourceAlpha",
                                    operator: "in",
                                    result: "effect1_backgroundBlur_3507_26591"
                                }), (0, n.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_backgroundBlur_3507_26591",
                                    result: "shape"
                                })]
                            }), (0, n.jsxs)("radialGradient", {
                                id: "paint0_radial_3507_26591",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(199.465 136.769) rotate(-152.763) scale(196.462 1.84871e+06)",
                                children: [(0, n.jsx)("stop", {
                                    stopColor: "#06CE9F"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.270833",
                                    stopColor: "#15AFDD"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.505208",
                                    stopColor: "#026EEF"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.734375",
                                    stopColor: "#683CA6"
                                }), (0, n.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#DE0352"
                                })]
                            }), (0, n.jsxs)(s.E.radialGradient, {
                                id: "paint1_radial_3507_26591",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(199.465 136.769) rotate(-152.763) scale(196.462 1.84871e+06)",
                                initial: {
                                    r: 0
                                },
                                animate: {
                                    r: 1
                                },
                                transition: {
                                    ease: "easeInOut",
                                    duration: 2
                                },
                                children: [(0, n.jsx)("stop", {
                                    offset: "0.0239582",
                                    stopColor: "#06CE9F",
                                    stopOpacity: "0"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.154167",
                                    stopColor: "#06CE9F"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.270833",
                                    stopColor: "#15AFDD"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.505208",
                                    stopColor: "#026EEF"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.734375",
                                    stopColor: "#683CA6"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.852083",
                                    stopColor: "#DE0352"
                                }), (0, n.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#DE0352",
                                    stopOpacity: "0"
                                })]
                            })]
                        })]
                    })
                },
                J = {
                    hidden: {
                        pathLength: 0
                    },
                    visible: {
                        pathLength: 1,
                        transition: {
                            ease: [.6, -.05, .01, .99],
                            duration: 5
                        }
                    }
                },
                W = {
                    hidden: {
                        opacity: 0
                    },
                    visible: {
                        opacity: 1,
                        transition: {
                            delay: 1,
                            duration: 1
                        }
                    }
                },
                z = function() {
                    return (0, n.jsxs)(s.E.svg, {
                        width: "177",
                        height: "142",
                        viewBox: "0 0 177 142",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsx)("mask", {
                            id: "path-1-inside-1_3514_26529",
                            fill: "white",
                            children: (0, n.jsx)("path", {
                                d: "M176.1 119.822C175.237 117.514 172.617 116.325 170.245 117.164L152.51 123.449L142.191 96.9452C158.244 88.8267 166.139 70.1332 159.684 52.8552C156.498 44.3319 145.174 23.3609 132.63 4.02849C130.404 0.594367 126.103 -0.851433 122.248 0.517257L105.669 6.39133C103.01 7.33345 101.874 10.4699 103.314 12.8961C104.368 14.6726 106.58 15.5359 108.527 14.8458L125.045 8.99377C130.118 16.8341 134.981 24.9609 139.181 32.3854L104.857 44.6409C103.372 45.1669 102.278 46.44 101.982 47.9869L101.962 48.0903C101.319 51.4363 104.552 54.2177 107.764 53.0776L143.785 40.3105C147.365 46.9942 150.097 52.6012 151.339 55.9196C156.371 69.3807 149.911 84.3399 136.631 89.9579C134.763 90.7491 135.491 90.4894 133.568 91.0424C121.693 94.4627 109.138 89.5396 102.614 79.6274C100.985 77.1575 97.4563 76.9209 95.5203 79.1571C94.2144 80.6646 94.0396 82.8749 95.1461 84.5327C103.468 97.0134 118.89 103.295 133.866 100.007L144.179 126.494L127.579 132.376C125.209 133.217 123.988 135.769 124.849 138.077C125.712 140.385 128.333 141.577 130.704 140.735L173.637 125.522C175.99 124.669 177.202 122.136 176.1 119.822ZM91.3901 13.5823L54.5153 0.512576C50.6598 -0.847578 46.3637 0.563247 44.1331 3.98497C31.6028 23.3422 20.254 44.0901 17.0649 52.6272C10.6098 69.8942 18.5069 88.5932 34.5577 96.7172L24.2416 123.458L6.50645 117.173C4.13617 116.334 1.51362 117.523 0.651651 119.831C-0.211148 122.14 1.01159 124.692 3.38187 125.532L46.3153 140.744C48.6856 141.585 51.3081 140.395 52.1701 138.086C53.0329 135.778 51.8107 133.226 49.4404 132.386L32.8399 126.503L43.1532 100.016C60.8416 103.905 79.2845 94.5196 85.7561 77.2223C88.9314 68.732 94.0702 45.7452 97.2372 23.1356C97.8067 18.969 95.3282 14.9841 91.3901 13.5823ZM77.1524 74.1627C72.121 87.6238 57.2995 95.0346 43.4171 91.0359C41.4893 90.4934 41.985 90.7412 40.3602 89.9426C27.0781 84.3246 20.6175 69.3709 25.6516 55.9043C26.8914 52.5859 29.6227 46.9789 33.2056 40.2952L81.6743 57.4741C80.0165 64.827 78.3916 70.858 77.1524 74.1627ZM83.569 48.6891L37.5788 32.386C41.7647 24.956 46.3913 16.8292 51.7063 8.98882L88.168 21.9129C86.8737 31.0917 85.2489 40.3723 83.569 48.6891Z"
                            })
                        }), (0, n.jsx)(s.E.path, {
                            d: "M176.1 119.822C175.237 117.514 172.617 116.325 170.245 117.164L152.51 123.449L142.191 96.9452C158.244 88.8267 166.139 70.1332 159.684 52.8552C156.498 44.3319 145.174 23.3609 132.63 4.02849C130.404 0.594367 126.103 -0.851433 122.248 0.517257L105.669 6.39133C103.01 7.33345 101.874 10.4699 103.314 12.8961C104.368 14.6726 106.58 15.5359 108.527 14.8458L125.045 8.99377C130.118 16.8341 134.981 24.9609 139.181 32.3854L104.857 44.6409C103.372 45.1669 102.278 46.44 101.982 47.9869L101.962 48.0903C101.319 51.4363 104.552 54.2177 107.764 53.0776L143.785 40.3105C147.365 46.9942 150.097 52.6012 151.339 55.9196C156.371 69.3807 149.911 84.3399 136.631 89.9579C134.763 90.7491 135.491 90.4894 133.568 91.0424C121.693 94.4627 109.138 89.5396 102.614 79.6274C100.985 77.1575 97.4563 76.9209 95.5203 79.1571C94.2144 80.6646 94.0396 82.8749 95.1461 84.5327C103.468 97.0134 118.89 103.295 133.866 100.007L144.179 126.494L127.579 132.376C125.209 133.217 123.988 135.769 124.849 138.077C125.712 140.385 128.333 141.577 130.704 140.735L173.637 125.522C175.99 124.669 177.202 122.136 176.1 119.822ZM91.3901 13.5823L54.5153 0.512576C50.6598 -0.847578 46.3637 0.563247 44.1331 3.98497C31.6028 23.3422 20.254 44.0901 17.0649 52.6272C10.6098 69.8942 18.5069 88.5932 34.5577 96.7172L24.2416 123.458L6.50645 117.173C4.13617 116.334 1.51362 117.523 0.651651 119.831C-0.211148 122.14 1.01159 124.692 3.38187 125.532L46.3153 140.744C48.6856 141.585 51.3081 140.395 52.1701 138.086C53.0329 135.778 51.8107 133.226 49.4404 132.386L32.8399 126.503L43.1532 100.016C60.8416 103.905 79.2845 94.5196 85.7561 77.2223C88.9314 68.732 94.0702 45.7452 97.2372 23.1356C97.8067 18.969 95.3282 14.9841 91.3901 13.5823ZM77.1524 74.1627C72.121 87.6238 57.2995 95.0346 43.4171 91.0359C41.4893 90.4934 41.985 90.7412 40.3602 89.9426C27.0781 84.3246 20.6175 69.3709 25.6516 55.9043C26.8914 52.5859 29.6227 46.9789 33.2056 40.2952L81.6743 57.4741C80.0165 64.827 78.3916 70.858 77.1524 74.1627ZM83.569 48.6891L37.5788 32.386C41.7647 24.956 46.3913 16.8292 51.7063 8.98882L88.168 21.9129C86.8737 31.0917 85.2489 40.3723 83.569 48.6891Z",
                            fill: "url(#paint0_radial_3514_26529)",
                            fillOpacity: "0.05",
                            variants: W,
                            initial: "hidden",
                            animate: "visible"
                        }), (0, n.jsx)(s.E.path, {
                            d: "M176.1 119.822L175.164 120.173L175.179 120.213L175.197 120.252L176.1 119.822ZM170.245 117.164L169.912 116.222L169.911 116.222L170.245 117.164ZM152.51 123.449L151.578 123.812L151.93 124.715L152.844 124.391L152.51 123.449ZM142.191 96.9452L141.74 96.0529L140.93 96.4624L141.26 97.308L142.191 96.9452ZM159.684 52.8552L160.621 52.5052L160.621 52.505L159.684 52.8552ZM132.63 4.02849L131.791 4.57246L131.791 4.5728L132.63 4.02849ZM122.248 0.517257L122.582 1.45984L122.582 1.45964L122.248 0.517257ZM105.669 6.39133L105.335 5.44875L105.335 5.44877L105.669 6.39133ZM103.314 12.8961L104.174 12.3858L104.174 12.3857L103.314 12.8961ZM108.527 14.8458L108.193 13.9032L108.193 13.9033L108.527 14.8458ZM125.045 8.99377L125.885 8.45056L125.456 7.78742L124.711 8.05118L125.045 8.99377ZM139.181 32.3854L139.517 33.3272L140.637 32.9276L140.051 31.8931L139.181 32.3854ZM104.857 44.6409L105.191 45.5834L105.193 45.5826L104.857 44.6409ZM101.982 47.9869L102.964 48.1756L102.964 48.175L101.982 47.9869ZM101.962 48.0903L100.98 47.9015L100.98 47.9016L101.962 48.0903ZM107.764 53.0776L107.43 52.1351L107.43 52.1352L107.764 53.0776ZM143.785 40.3105L144.667 39.8383L144.261 39.0809L143.451 39.368L143.785 40.3105ZM151.339 55.9196L152.276 55.5695L152.276 55.5691L151.339 55.9196ZM136.631 89.9579L136.241 89.0369L136.241 89.0371L136.631 89.9579ZM133.568 91.0424L133.292 90.0813L133.292 90.0815L133.568 91.0424ZM102.614 79.6274L103.45 79.0777L103.449 79.0769L102.614 79.6274ZM95.5203 79.1571L96.2762 79.8118L96.2764 79.8116L95.5203 79.1571ZM95.1461 84.5327L95.9781 83.9779L95.9778 83.9776L95.1461 84.5327ZM133.866 100.007L134.798 99.6441L134.487 98.8466L133.652 99.0302L133.866 100.007ZM144.179 126.494L144.513 127.437L145.485 127.092L145.111 126.131L144.179 126.494ZM127.579 132.376L127.245 131.434L127.245 131.434L127.579 132.376ZM124.849 138.077L123.912 138.427L123.912 138.427L124.849 138.077ZM130.704 140.735L130.37 139.792L130.369 139.793L130.704 140.735ZM173.637 125.522L173.971 126.465L173.978 126.462L173.637 125.522ZM91.3901 13.5823L91.7254 12.6402L91.7242 12.6398L91.3901 13.5823ZM54.5153 0.512576L54.8494 -0.429973L54.848 -0.430461L54.5153 0.512576ZM44.1331 3.98497L43.2954 3.43886L43.2936 3.44157L44.1331 3.98497ZM17.0649 52.6272L18.0016 52.9774L18.0017 52.9771L17.0649 52.6272ZM34.5577 96.7172L35.4907 97.0771L35.8162 96.2334L35.0093 95.825L34.5577 96.7172ZM24.2416 123.458L23.9076 124.4L24.8245 124.725L25.1746 123.818L24.2416 123.458ZM6.50645 117.173L6.84045 116.231L6.84037 116.231L6.50645 117.173ZM0.651651 119.831L1.5884 120.181L1.58845 120.181L0.651651 119.831ZM3.38187 125.532L3.04786 126.474L3.04789 126.474L3.38187 125.532ZM46.3153 140.744L46.6496 139.802L46.6492 139.802L46.3153 140.744ZM52.1701 138.086L51.2334 137.736L51.2333 137.737L52.1701 138.086ZM49.4404 132.386L49.7744 131.443L49.7744 131.443L49.4404 132.386ZM32.8399 126.503L31.908 126.141L31.5338 127.102L32.5059 127.446L32.8399 126.503ZM43.1532 100.016L43.3679 99.0397L42.5319 98.8559L42.2214 99.6535L43.1532 100.016ZM85.7561 77.2223L86.6927 77.5727L86.6928 77.5726L85.7561 77.2223ZM97.2372 23.1356L98.2275 23.2743L98.228 23.271L97.2372 23.1356ZM77.1524 74.1627L76.2161 73.8116L76.2157 73.8126L77.1524 74.1627ZM43.4171 91.0359L43.6938 90.0749L43.688 90.0733L43.4171 91.0359ZM40.3602 89.9426L40.8013 89.0451L40.7759 89.0326L40.7498 89.0216L40.3602 89.9426ZM25.6516 55.9043L26.5883 56.2545L26.5884 56.2543L25.6516 55.9043ZM33.2056 40.2952L33.5396 39.3527L32.73 39.0657L32.3242 39.8228L33.2056 40.2952ZM81.6743 57.4741L82.6498 57.694L82.8451 56.8281L82.0084 56.5315L81.6743 57.4741ZM83.569 48.6891L83.2349 49.6316L84.321 50.0167L84.5492 48.8871L83.569 48.6891ZM37.5788 32.386L36.7075 31.8951L36.1238 32.9312L37.2447 33.3285L37.5788 32.386ZM51.7063 8.98882L52.0404 8.04628L51.3121 7.78814L50.8786 8.42769L51.7063 8.98882ZM88.168 21.9129L89.1582 22.0525L89.2723 21.2434L88.5021 20.9703L88.168 21.9129ZM177.037 119.472C175.976 116.636 172.779 115.207 169.912 116.222L170.579 118.107C172.454 117.443 174.498 118.393 175.164 120.173L177.037 119.472ZM169.911 116.222L152.176 122.506L152.844 124.391L170.579 118.107L169.911 116.222ZM153.442 123.086L143.123 96.5824L141.26 97.308L151.578 123.812L153.442 123.086ZM142.643 97.8376C159.131 89.4987 167.262 70.2801 160.621 52.5052L158.747 53.2052C165.017 69.9863 157.357 88.1547 141.74 96.0529L142.643 97.8376ZM160.621 52.505C157.395 43.8758 146.022 22.8303 133.469 3.48417L131.791 4.5728C144.326 23.8915 155.601 44.7879 158.748 53.2054L160.621 52.505ZM133.469 3.48451C130.989 -0.340434 126.202 -1.94774 121.913 -0.425123L122.582 1.45964C126.004 0.244879 129.818 1.52917 131.791 4.57246L133.469 3.48451ZM121.914 -0.425325L105.335 5.44875L106.003 7.33392L122.582 1.45984L121.914 -0.425325ZM105.335 5.44877C102.083 6.60125 100.693 10.4382 102.454 13.4065L104.174 12.3857C103.056 10.5015 103.938 8.06564 106.003 7.3339L105.335 5.44877ZM102.454 13.4063C103.739 15.5715 106.44 16.6465 108.861 15.7884L108.193 13.9033C106.72 14.4254 104.998 13.7737 104.174 12.3858L102.454 13.4063ZM108.861 15.7884L125.379 9.93637L124.711 8.05118L108.193 13.9032L108.861 15.7884ZM124.206 9.53699C129.266 17.3585 134.119 25.4681 138.311 32.8778L140.051 31.8931C135.843 24.4538 130.97 16.3098 125.885 8.45056L124.206 9.53699ZM138.845 31.4437L104.52 43.6991L105.193 45.5826L139.517 33.3272L138.845 31.4437ZM104.523 43.6983C102.704 44.3428 101.363 45.9029 100.999 47.7987L102.964 48.175C103.193 46.9771 104.041 45.9909 105.191 45.5834L104.523 43.6983ZM101 47.7981L100.98 47.9015L102.944 48.2791L102.964 48.1756L101 47.7981ZM100.98 47.9016C100.191 52.0058 104.157 55.419 108.099 54.02L107.43 52.1352C104.947 53.0164 102.446 50.8667 102.944 48.279L100.98 47.9016ZM108.098 54.0202L144.119 41.2531L143.451 39.368L107.43 52.1351L108.098 54.0202ZM142.904 40.7827C146.483 47.4645 149.186 53.02 150.403 56.2702L152.276 55.5691C151.008 52.1824 148.248 46.524 144.667 39.8383L142.904 40.7827ZM150.403 56.2698C155.245 69.2266 149.03 83.6267 136.241 89.0369L137.02 90.8789C150.791 85.0532 157.496 69.5348 152.276 55.5695L150.403 56.2698ZM136.241 89.0371C135.265 89.4506 135.041 89.5571 134.787 89.6466C134.533 89.7365 134.3 89.7916 133.292 90.0813L133.845 92.0034C134.76 91.7402 135.124 91.6486 135.453 91.5323C135.784 91.4157 136.129 91.2564 137.021 90.8787L136.241 89.0371ZM133.292 90.0815C121.845 93.3783 109.738 88.6311 103.45 79.0777L101.779 80.1772C108.539 90.448 121.541 95.5472 133.845 92.0033L133.292 90.0815ZM103.449 79.0769C101.457 76.0559 97.1357 75.7634 94.7643 78.5025L96.2764 79.8116C97.7769 78.0784 100.514 78.2591 101.78 80.178L103.449 79.0769ZM94.7645 78.5023C93.1745 80.3378 92.949 83.0423 94.3143 85.0879L95.9778 83.9776C95.1301 82.7074 95.2544 80.9913 96.2762 79.8118L94.7645 78.5023ZM94.3141 85.0875C102.866 97.9126 118.704 104.36 134.08 100.984L133.652 99.0302C119.076 102.23 104.071 96.1142 95.9781 83.9779L94.3141 85.0875ZM132.934 100.37L143.248 126.857L145.111 126.131L134.798 99.6441L132.934 100.37ZM143.845 125.551L127.245 131.434L127.913 133.319L144.513 127.437L143.845 125.551ZM127.245 131.434C124.366 132.454 122.849 135.578 123.912 138.427L125.786 137.727C125.127 135.961 126.051 133.979 127.913 133.319L127.245 131.434ZM123.912 138.427C124.973 141.264 128.17 142.696 131.039 141.677L130.369 139.793C128.496 140.458 126.451 139.507 125.786 137.727L123.912 138.427ZM131.038 141.678L173.971 126.465L173.303 124.58L130.37 139.792L131.038 141.678ZM173.978 126.462C176.828 125.429 178.384 122.293 177.003 119.393L175.197 120.252C176.019 121.979 175.152 123.91 173.296 124.582L173.978 126.462ZM91.7242 12.6398L54.8494 -0.429972L54.1812 1.45512L91.056 14.5249L91.7242 12.6398ZM54.848 -0.430461C50.5668 -1.94079 45.7833 -0.377475 43.2954 3.43886L44.9708 4.53109C46.9442 1.50397 50.7528 0.245632 54.1826 1.45561L54.848 -0.430461ZM43.2936 3.44157C30.7581 22.8068 19.3577 43.6316 16.1282 52.2773L18.0017 52.9771C21.1502 44.5486 32.4475 23.8775 44.9725 4.52838L43.2936 3.44157ZM16.1282 52.277C9.48719 70.0412 17.62 89.2651 34.1061 97.6094L35.0093 95.825C19.3937 87.9213 11.7324 69.7471 18.0016 52.9774L16.1282 52.277ZM33.6248 96.3573L23.3086 123.098L25.1746 123.818L35.4907 97.0771L33.6248 96.3573ZM24.5756 122.515L6.84045 116.231L6.17246 118.116L23.9076 124.4L24.5756 122.515ZM6.84037 116.231C3.97412 115.215 0.774485 116.644 -0.28515 119.481L1.58845 120.181C2.25276 118.402 4.29821 117.452 6.17254 118.116L6.84037 116.231ZM-0.285095 119.481C-1.35042 122.332 0.169465 125.454 3.04786 126.474L3.71588 124.589C1.85371 123.929 0.928121 121.948 1.5884 120.181L-0.285095 119.481ZM3.04789 126.474L45.9813 141.687L46.6492 139.802L3.71586 124.589L3.04789 126.474ZM45.981 141.687C48.8478 142.704 52.0474 141.273 53.1069 138.436L51.2333 137.737C50.5688 139.516 48.5233 140.467 46.6496 139.802L45.981 141.687ZM53.1068 138.436C54.1721 135.587 52.653 132.463 49.7744 131.443L49.1064 133.328C50.9684 133.988 51.8936 135.97 51.2334 137.736L53.1068 138.436ZM49.7744 131.443L33.1738 125.561L32.5059 127.446L49.1064 133.328L49.7744 131.443ZM33.7717 126.866L44.0851 100.379L42.2214 99.6535L31.908 126.141L33.7717 126.866ZM42.9385 100.993C61.0903 104.983 80.0386 95.3576 86.6927 77.5727L84.8196 76.8719C78.5303 93.6815 60.5928 102.826 43.3679 99.0397L42.9385 100.993ZM86.6928 77.5726C89.9078 68.976 95.0582 45.9003 98.2275 23.2743L96.2468 22.9969C93.0821 45.5901 87.955 68.488 84.8195 76.872L86.6928 77.5726ZM98.228 23.271C98.8627 18.6271 96.1016 14.1979 91.7254 12.6402L91.0548 14.5244C94.5547 15.7702 96.7507 19.3108 96.2464 23.0002L98.228 23.271ZM76.2157 73.8126C71.3688 86.78 57.0789 93.9303 43.6938 90.075L43.1403 91.9968C57.5201 96.1388 72.8732 88.4676 78.0891 74.5128L76.2157 73.8126ZM43.688 90.0733C42.6401 89.7784 42.3897 89.7351 42.0885 89.6357C41.8497 89.5569 41.6404 89.4575 40.8013 89.0451L39.9191 90.84C40.7049 91.2263 41.0601 91.4023 41.4616 91.5349C41.8007 91.6468 42.2663 91.7509 43.1461 91.9985L43.688 90.0733ZM40.7498 89.0216C27.9587 83.6113 21.7427 69.2168 26.5883 56.2545L24.7149 55.5542C19.4922 69.5251 26.1975 85.0379 39.9707 90.8636L40.7498 89.0216ZM26.5884 56.2543C27.8025 53.0046 30.5052 47.4493 34.0869 40.7677L32.3242 39.8228C28.7403 46.5085 25.9803 52.1672 24.7148 55.5543L26.5884 56.2543ZM32.8715 41.2378L81.3402 58.4166L82.0084 56.5315L33.5396 39.3527L32.8715 41.2378ZM80.6988 57.2541C79.0419 64.6029 77.4294 70.5761 76.2161 73.8116L78.0887 74.5138C79.3539 71.14 80.991 65.0511 82.6498 57.694L80.6988 57.2541ZM83.9031 47.7466L37.9129 31.4435L37.2447 33.3285L83.2349 49.6316L83.9031 47.7466ZM38.45 32.8768C42.6365 25.4458 47.2449 17.3521 52.534 9.54994L50.8786 8.42769C45.5376 16.3063 40.8929 24.4661 36.7075 31.8951L38.45 32.8768ZM51.3722 9.93136L87.8339 22.8554L88.5021 20.9703L52.0404 8.04628L51.3722 9.93136ZM87.1778 21.7733C85.8865 30.9309 84.2651 40.192 82.5888 48.4911L84.5492 48.8871C86.2327 40.5526 87.8609 31.2524 89.1582 22.0525L87.1778 21.7733Z",
                            fill: "url(#paint1_radial_3514_26529)",
                            fillOpacity: "0.5",
                            mask: "url(#path-1-inside-1_3514_26529)",
                            variants: J,
                            initial: "hidden",
                            animate: "visible"
                        }), (0, n.jsxs)("defs", {
                            children: [(0, n.jsxs)("radialGradient", {
                                id: "paint0_radial_3514_26529",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(175.911 114.238) rotate(-153.701) scale(182.966 1.68054e+06)",
                                children: [(0, n.jsx)("stop", {
                                    stopColor: "#06CE9F"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.270833",
                                    stopColor: "#15AFDD"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.505208",
                                    stopColor: "#026EEF"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.734375",
                                    stopColor: "#683CA6"
                                }), (0, n.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#DE0352"
                                })]
                            }), (0, n.jsxs)(s.E.radialGradient, {
                                id: "paint1_radial_3514_26529",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(175.911 114.238) rotate(-153.701) scale(182.966 1.68054e+06)",
                                initial: {
                                    r: 0
                                },
                                animate: {
                                    r: 1
                                },
                                transition: {
                                    ease: "easeInOut",
                                    duration: 2
                                },
                                children: [(0, n.jsx)("stop", {
                                    offset: "0.0239582",
                                    stopColor: "#06CE9F",
                                    stopOpacity: "0"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.154167",
                                    stopColor: "#06CE9F"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.270833",
                                    stopColor: "#15AFDD"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.505208",
                                    stopColor: "#026EEF"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.734375",
                                    stopColor: "#683CA6"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.852083",
                                    stopColor: "#DE0352"
                                }), (0, n.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#DE0352",
                                    stopOpacity: "0"
                                })]
                            })]
                        })]
                    })
                },
                X = {
                    hidden: {
                        opacity: 0
                    },
                    visible: {
                        opacity: 1,
                        transition: {
                            delay: 1,
                            duration: 1
                        }
                    }
                },
                q = function() {
                    return (0, n.jsxs)("svg", {
                        width: "177",
                        height: "141",
                        viewBox: "0 0 177 141",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsxs)("g", {
                            filter: "url(#filter0_b_3507_26589)",
                            children: [(0, n.jsx)(s.E.path, {
                                d: "M88.4725 88.125C104.283 88.125 116.865 75.3028 116.865 59.4844C116.865 43.6659 104.049 30.8438 88.4725 30.8438C72.6623 30.8438 60.0797 43.6659 60.0797 59.4844C59.8318 75.2918 72.665 88.125 88.4725 88.125ZM88.4725 39.6562C99.4 39.6562 108.29 48.5514 108.29 59.4844C108.29 70.4174 99.3779 79.3125 88.4725 79.3125C77.567 79.3125 68.6443 70.4174 68.6443 59.4844C68.6443 48.5514 77.5395 39.6562 88.4725 39.6562ZM102.242 96.9375H74.758C53.1398 96.9375 35.625 113.378 35.625 133.647C35.625 137.723 39.1225 141 43.4461 141H133.554C137.878 141 141.375 137.723 141.375 133.647C141.375 113.378 123.86 96.9375 102.242 96.9375ZM44.4926 132.188C45.3245 117.479 58.5898 105.75 74.5377 105.75H102.242C118.429 105.75 131.681 117.479 132.287 132.188H44.4926ZM141.375 44.0625C153.542 44.0625 163.406 34.198 163.406 22.0312C163.406 9.86449 153.547 0 141.375 0C129.208 0 119.344 9.86449 119.344 22.0312C119.344 34.198 129.203 44.0625 141.375 44.0625ZM141.375 8.8125C148.665 8.8125 154.594 14.7417 154.594 22.0312C154.594 29.3208 148.673 35.25 141.375 35.25C134.077 35.25 128.156 29.3208 128.156 22.0312C128.156 14.7417 134.077 8.8125 141.375 8.8125ZM35.625 44.0625C47.7918 44.0625 57.6562 34.198 57.6562 22.0312C57.6562 9.86449 47.7973 0 35.625 0C23.4582 0 13.5938 9.86449 13.5938 22.0312C13.5938 34.198 23.4582 44.0625 35.625 44.0625ZM35.625 8.8125C42.9146 8.8125 48.8438 14.7417 48.8438 22.0312C48.8438 29.3208 42.9229 35.25 35.625 35.25C28.3271 35.25 22.4062 29.3291 22.4062 22.0312C22.4062 14.7334 28.3271 8.8125 35.625 8.8125ZM154.897 52.875H136.969C133.895 52.875 130.888 53.5635 128.027 54.9234C125.828 55.969 124.89 58.5971 125.936 60.7919C126.981 62.9868 129.62 63.9286 131.804 62.8832C133.471 62.1006 135.206 61.6875 136.969 61.6875H154.891C161.781 61.6875 167.812 67.9389 167.812 75.6498V79.3125C167.812 81.7481 169.783 83.7188 172.219 83.7188C174.654 83.7188 176.625 81.7359 176.625 79.3125V75.6498C176.625 63.092 166.876 52.875 154.897 52.875ZM45.2086 62.8717C47.3946 63.9173 50.0362 62.9749 51.0772 60.7804C52.1228 58.5858 51.1847 55.9555 48.9859 54.9118C46.1174 53.5635 43.1156 52.875 40.0312 52.875H22.1088C10.1266 52.875 0.375 63.092 0.375 75.6498V79.3125C0.375 81.7481 2.3457 83.7188 4.78125 83.7188C7.2168 83.7188 9.1875 81.7359 9.1875 79.3125V75.6498C9.1875 67.9389 14.9845 61.6875 22.1088 61.6875H40.0312C41.7938 61.6875 43.5287 62.1006 45.2086 62.8717Z",
                                fill: "url(#paint0_radial_3507_26589)",
                                fillOpacity: "0.05",
                                variants: X,
                                initial: "hidden",
                                animate: "visible"
                            }), (0, n.jsx)("path", {
                                d: "M60.5796 59.4922H60.5797V59.4844C60.5797 43.9365 72.944 31.3438 88.4725 31.3438C103.77 31.3438 116.365 43.9392 116.365 59.4844C116.365 75.0323 104.001 87.625 88.4725 87.625C72.9396 87.625 60.3362 75.0159 60.5796 59.4922ZM43.9934 132.159L43.9635 132.688H44.4926H132.287H132.808L132.787 132.167C132.168 117.152 118.658 105.25 102.242 105.25H74.5377C58.3572 105.25 44.8421 117.155 43.9934 132.159ZM131.592 62.4306L131.588 62.4323C129.656 63.3572 127.314 62.5243 126.387 60.5769C125.461 58.6326 126.291 56.3024 128.242 55.3749C131.038 54.0459 133.972 53.375 136.969 53.375H154.897C166.578 53.375 176.125 63.3457 176.125 75.6498V79.3125C176.125 81.4607 174.377 83.2188 172.219 83.2188C170.059 83.2188 168.312 81.4719 168.312 79.3125V75.6498C168.312 67.6936 162.087 61.1875 154.891 61.1875H136.969C135.126 61.1875 133.319 61.6196 131.592 62.4306ZM45.4244 62.4206L45.4244 62.4206L45.4172 62.4173C43.6795 61.6196 41.8737 61.1875 40.0312 61.1875H22.1088C14.6728 61.1875 8.6875 67.6996 8.6875 75.6498V79.3125C8.6875 81.4607 6.93977 83.2188 4.78125 83.2188C2.62184 83.2188 0.875 81.4719 0.875 79.3125V75.6498C0.875 63.3459 10.4245 53.375 22.1088 53.375H40.0312C43.0386 53.375 45.9675 54.0457 48.7718 55.3637C50.7215 56.2893 51.5521 58.6212 50.6258 60.5653L50.6254 60.5661C49.7024 62.5119 47.3594 63.3462 45.4244 62.4206ZM108.79 59.4844C108.79 48.2755 99.6764 39.1562 88.4725 39.1562C77.2633 39.1562 68.1443 48.2752 68.1443 59.4844C68.1443 70.694 77.2913 79.8125 88.4725 79.8125C99.654 79.8125 108.79 70.6936 108.79 59.4844ZM74.758 97.4375H102.242C123.615 97.4375 140.875 113.684 140.875 133.647C140.875 137.418 137.631 140.5 133.554 140.5H43.4461C39.3686 140.5 36.125 137.418 36.125 133.647C36.125 113.684 53.3855 97.4375 74.758 97.4375ZM162.906 22.0312C162.906 33.9219 153.266 43.5625 141.375 43.5625C129.479 43.5625 119.844 33.9219 119.844 22.0312C119.844 10.1406 129.484 0.5 141.375 0.5C153.271 0.5 162.906 10.1406 162.906 22.0312ZM155.094 22.0312C155.094 14.4655 148.941 8.3125 141.375 8.3125C133.801 8.3125 127.656 14.4657 127.656 22.0312C127.656 29.5968 133.801 35.75 141.375 35.75C148.949 35.75 155.094 29.5968 155.094 22.0312ZM57.1562 22.0312C57.1562 33.9219 47.5156 43.5625 35.625 43.5625C23.7344 43.5625 14.0938 33.9219 14.0938 22.0312C14.0938 10.1406 23.7344 0.5 35.625 0.5C47.521 0.5 57.1562 10.1406 57.1562 22.0312ZM49.3438 22.0312C49.3438 14.4655 43.1907 8.3125 35.625 8.3125C28.051 8.3125 21.9062 14.4573 21.9062 22.0312C21.9062 29.6052 28.051 35.75 35.625 35.75C43.1992 35.75 49.3438 29.5968 49.3438 22.0312Z",
                                stroke: "url(#paint1_radial_3507_26589)",
                                strokeOpacity: "0.5"
                            })]
                        }), (0, n.jsxs)("defs", {
                            children: [(0, n.jsxs)("radialGradient", {
                                id: "paint0_radial_3507_26589",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(176.025 114.227) rotate(-153.718) scale(183.058 1.68062e+06)",
                                children: [(0, n.jsx)("stop", {
                                    stopColor: "#06CE9F"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.270833",
                                    stopColor: "#15AFDD"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.505208",
                                    stopColor: "#026EEF"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.734375",
                                    stopColor: "#683CA6"
                                }), (0, n.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#DE0352"
                                })]
                            }), (0, n.jsxs)(s.E.radialGradient, {
                                id: "paint1_radial_3507_26589",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(176.025 114.227) rotate(-153.718) scale(183.058 1.68062e+06)",
                                initial: {
                                    r: 0
                                },
                                animate: {
                                    r: 1
                                },
                                transition: {
                                    ease: "easeInOut",
                                    duration: 2
                                },
                                children: [(0, n.jsx)("stop", {
                                    offset: "0.0239582",
                                    stopColor: "#06CE9F",
                                    stopOpacity: "0"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.154167",
                                    stopColor: "#06CE9F"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.270833",
                                    stopColor: "#15AFDD"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.505208",
                                    stopColor: "#026EEF"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.734375",
                                    stopColor: "#683CA6"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.852083",
                                    stopColor: "#DE0352"
                                }), (0, n.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#DE0352",
                                    stopOpacity: "0"
                                })]
                            })]
                        })]
                    })
                },
                $ = {
                    hidden: {
                        opacity: 0
                    },
                    visible: {
                        opacity: 1,
                        transition: {
                            delay: 1,
                            duration: 1
                        }
                    }
                },
                AA = function() {
                    return (0, n.jsxs)("svg", {
                        width: "141",
                        height: "124",
                        viewBox: "0 0 141 124",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsxs)("g", {
                            filter: "url(#filter0_b_3521_15510)",
                            children: [(0, n.jsx)(s.E.path, {
                                d: "M116.766 22.4111C116.766 31.1685 109.853 37.833 101.344 37.833C92.8341 37.833 85.9218 31.1685 85.9218 22.4111C85.9218 14.1494 92.8341 6.98921 101.344 6.98921C109.853 6.98921 116.766 14.1494 116.766 22.4111ZM101.344 29.0205C105.006 29.0205 107.953 26.3216 107.953 22.4111C107.953 18.9962 105.006 15.8017 101.344 15.8017C97.681 15.8017 94.7343 18.9962 94.7343 22.4111C94.7343 26.3216 97.681 29.0205 101.344 29.0205ZM96.0011 109.572L68.0765 123.534C66.6996 124.223 65.0748 124.14 63.7804 123.342C62.4861 122.543 61.6875 121.111 61.6875 119.596V88.0091C61.6875 81.1794 58.9886 74.6527 54.1693 69.8333C49.35 65.014 42.8232 62.3152 35.9935 62.3152H4.40622C2.8778 62.3152 1.46091 61.5165 0.65815 60.2222C-0.144723 58.9279 -0.217785 57.3031 0.465101 55.9261L14.4359 28.0015C17.4212 22.0255 23.5238 18.0048 30.2103 18.0048H57.0058C79.0095 -18.0281 112.772 -19.3497 133.261 -15.5501C136.484 -14.9567 138.962 -12.4671 139.54 -9.26709C143.341 11.2302 142.019 44.9931 105.75 66.749V93.7923C105.75 100.484 101.977 106.57 96.0011 109.572ZM67.03 72.9177C100.71 64.6284 117.124 49.6747 125 35.5747C133.124 20.8414 133.124 4.89625 131.003 -7.00338C119.106 -9.10736 103.161 -9.11287 88.4279 -1.00813C74.08 6.88457 59.3742 23.2923 51.0849 56.9726C54.4998 58.6249 57.6668 60.8556 60.3931 63.6095C63.147 66.3359 65.3777 69.5029 67.03 72.9177ZM70.5 112.464L92.063 101.448C95.0648 100.181 96.9375 97.1521 96.9375 93.7923V71.7335C89.2265 75.4513 80.2763 78.7009 69.839 81.0693C70.2796 83.4927 70.5 85.7234 70.5 88.0091V112.464ZM42.6855 54.1636C45.3017 43.7263 48.5513 34.5283 52.2691 26.8173H30.2103C26.8616 26.8173 23.8102 28.9378 22.3176 31.9396L11.5361 53.5027H35.9935C38.0314 53.5027 40.5099 53.723 42.6855 54.1636ZM45.8525 112.436C32.2207 126.068 0.13119 123.865 0.13119 123.865C0.13119 123.865 -2.06987 91.5341 11.5609 78.1501C21.0315 68.6767 36.3791 68.6767 45.8525 78.1501C55.3259 87.6236 55.3259 102.963 45.8525 112.436ZM39.6287 84.3739C33.3498 78.3429 23.8213 78.3429 17.793 84.3739C13.2325 88.9454 10.608 97.7028 9.48442 107.149C9.14569 110.04 8.96668 112.739 8.88131 115.135C11.2524 115.025 13.9733 114.86 16.8429 114.529C26.297 113.4 35.0572 110.756 39.6287 106.212C45.6597 100.181 45.6597 90.405 39.6287 84.3739Z",
                                fill: "url(#paint0_radial_3521_15510)",
                                fillOpacity: "0.05",
                                variants: $,
                                initial: "hidden",
                                animate: "visible"
                            }), (0, n.jsx)("path", {
                                d: "M 105.25 93.7923 C 105.25 100.294 101.585 106.208 95.7775 109.125 L 95.7767 109.125 L 67.8529 123.087 C 66.6321 123.698 65.1912 123.625 64.043 122.916 C 62.896 122.208 62.1875 120.937 62.1875 119.596 V 88.0091 C 62.1875 81.0472 59.4362 74.3931 54.5229 69.4798 C 49.6095 64.5664 42.9554 61.8152 35.9935 61.8152 H 4.4062 C 3.0528 61.8152 1.7957 61.1076 1.0831 59.9587 L 1.083 59.9586 C 0.3725 58.8131 0.3062 57.3724 0.9127 56.1489 C 0.9128 56.1487 0.9129 56.1485 0.913 56.1483 L 14.8831 28.2252 L 14.8832 28.225 C 17.7895 22.407 23.7257 18.5048 30.2103 18.5048 H 57.0058 H 57.2863 L 57.4325 18.2654 C 79.2847 -17.5193 112.788 -18.8382 133.17 -15.0585 L 133.171 -15.0584 C 136.189 -14.5025 138.507 -12.1728 139.048 -9.1782 L 139.049 -9.1759 C 142.829 11.2144 141.51 44.7153 105.493 66.3202 L 105.25 66.4658 V 66.749 V 93.7923 Z M 66.58 73.1355 L 66.7563 73.5 L 67.1495 73.4032 C 100.936 65.0878 117.479 50.063 125.436 35.8186 L 125.438 35.8162 C 133.636 20.9478 133.628 4.8747 131.496 -7.0911 L 131.434 -7.4349 L 131.09 -7.4957 C 119.128 -9.6113 103.055 -9.6252 88.1869 -1.4462 C 73.6899 6.5285 58.914 23.0698 50.5994 56.8531 L 50.5026 57.2463 L 50.8671 57.4227 C 54.2325 59.0511 57.3526 61.2489 60.0378 63.9613 L 60.0414 63.9648 C 62.7537 66.65 64.9516 69.7701 66.58 73.1355 Z M 70 112.464 V 113.281 L 70.7274 112.909 L 92.2746 101.902 C 95.4678 100.545 97.4375 97.3285 97.4375 93.7923 V 71.7335 V 70.9374 L 96.7203 71.2831 C 89.0435 74.9844 80.1291 78.2216 69.7284 80.5817 L 69.2614 80.6876 L 69.3471 81.1587 C 69.7831 83.5566 70 85.7571 70 88.0091 V 112.464 Z M 42.5863 54.6537 L 43.0544 54.7485 L 43.1705 54.2852 C 45.7801 43.8742 49.0192 34.7092 52.7195 27.0345 L 53.0653 26.3173 H 52.2691 H 30.2103 C 26.6489 26.3173 23.4363 28.5668 21.8699 31.717 L 11.0889 53.2791 L 10.7271 54.0027 H 11.5361 H 35.9935 C 38.0009 54.0027 40.446 54.2202 42.5863 54.6537 Z M 11.9112 78.5069 L 11.9145 78.5036 C 21.1898 69.2255 36.2207 69.2255 45.4989 78.5037 C 54.7771 87.7818 54.7771 102.805 45.4989 112.083 C 38.811 118.771 27.5319 121.615 17.821 122.766 C 12.982 123.34 8.5649 123.49 5.3572 123.496 C 3.7537 123.499 2.4536 123.467 1.5552 123.433 C 1.1562 123.418 0.8366 123.404 0.6049 123.391 C 0.5928 123.158 0.5778 122.835 0.5629 122.431 C 0.5295 121.527 0.497 120.218 0.5003 118.605 C 0.5069 115.379 0.6571 110.939 1.231 106.085 C 2.383 96.3432 5.2275 85.0696 11.9112 78.5069 Z M 39.9822 84.0204 L 39.9823 84.0203 L 39.975 84.0134 C 33.5067 77.8003 23.6668 77.7902 17.4393 84.0205 L 17.439 84.0208 C 15.085 86.3805 13.2571 89.7906 11.8774 93.7696 C 10.4959 97.7541 9.5527 102.342 8.9879 107.09 L 8.9878 107.091 C 8.6473 109.998 8.4674 112.71 8.3816 115.117 L 8.3623 115.66 L 8.9045 115.635 C 11.2806 115.524 14.0143 115.358 16.9001 115.026 L 16.9021 115.026 C 21.6543 114.458 26.2449 113.509 30.2309 112.124 C 34.2114 110.741 37.6218 108.912 39.9812 106.567 L 39.9822 106.566 C 46.2085 100.34 46.2085 90.2467 39.9822 84.0204 Z M 116.266 22.4111 C 116.266 30.8871 109.582 37.333 101.344 37.333 C 93.105 37.333 86.4218 30.8871 86.4218 22.4111 C 86.4218 14.4203 93.1155 7.4892 101.344 7.4892 C 109.572 7.4892 116.266 14.4203 116.266 22.4111 Z M 101.344 29.5205 C 105.27 29.5205 108.453 26.6101 108.453 22.4111 C 108.453 18.7322 105.295 15.3017 101.344 15.3017 C 97.3929 15.3017 94.2343 18.7322 94.2343 22.4111 C 94.2343 26.6101 97.4173 29.5205 101.344 29.5205 Z",
                                stroke: "url(#paint1_radial_3521_15510)",
                                strokeOpacity: "0.5"
                            })]
                        }), (0, n.jsxs)("defs", {
                            children: [(0, n.jsxs)("radialGradient", {
                                id: "paint0_radial_3521_15510",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(140.508 97.2272) rotate(-148.311) scale(154.301 1.59494e+06)",
                                children: [(0, n.jsx)("stop", {
                                    stopColor: "#06CE9F"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.270833",
                                    stopColor: "#15AFDD"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.505208",
                                    stopColor: "#026EEF"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.734375",
                                    stopColor: "#683CA6"
                                }), (0, n.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#DE0352"
                                })]
                            }), (0, n.jsxs)(s.E.radialGradient, {
                                id: "paint1_radial_3521_15510",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(140.508 97.2272) rotate(-148.311) scale(154.301 1.59494e+06)",
                                initial: {
                                    r: 0
                                },
                                animate: {
                                    r: 1
                                },
                                transition: {
                                    ease: "easeInOut",
                                    duration: 2
                                },
                                children: [(0, n.jsx)("stop", {
                                    offset: "0.0239582",
                                    stopColor: "#06CE9F",
                                    stopOpacity: "0"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.154167",
                                    stopColor: "#06CE9F"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.270833",
                                    stopColor: "#15AFDD"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.505208",
                                    stopColor: "#026EEF"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.734375",
                                    stopColor: "#683CA6"
                                }), (0, n.jsx)("stop", {
                                    offset: "0.852083",
                                    stopColor: "#DE0352"
                                }), (0, n.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#DE0352",
                                    stopOpacity: "0"
                                })]
                            })]
                        })]
                    })
                },
                Ae = t(79873),
                At = t(64525);

            function An() {
                var A = (0, C.Z)(["\n    background: linear-gradient(\n        330deg,\n        #06ce9f 0%,\n        #15afdd 25%,\n        #026eef 51%,\n        #683ca6 65%,\n        #de0352 100%\n    );\n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n"]);
                return An = function() {
                    return A
                }, A
            }
            var Ai = d.ZP.span.withConfig({
                    componentId: "sc-194fbfbd-0"
                })(An()),
                Aa = function() {
                    var A = (0, At.Z)(new Date, new Date(2007, 12, 1));
                    return (0, n.jsxs)(s.E.section, {
                        className: "bg-white text-black pt-[12.5rem] pb-10 px-2",
                        variants: Ae.BR,
                        initial: "initial",
                        animate: "animate",
                        children: [(0, n.jsx)(s.E.div, {
                            className: "text-center opacity-25 uppercase text-5xl tracking-[0.5em] pb-10 md:pb-5 md:text-lg",
                            variants: I,
                            initial: "initial",
                            animate: "animate",
                            children: "D\xe9couvrez le studio"
                        }), (0, n.jsxs)(s.E.div, {
                            variants: y,
                            initial: "initial",
                            whileInView: "animate",
                            className: "max-w-[800px] mx-auto text-center",
                            viewport: {
                                once: !0
                            },
                            children: [(0, n.jsxs)(s.E.h2, {
                                className: "text-[50px] mb-4 lg:text-[36px] md:text-[3rem]",
                                variants: V,
                                children: [(0, n.jsx)(Ai, {
                                    children: "Maespirit"
                                }), ", c’est quoi ?"]
                            }), (0, n.jsxs)(s.E.div, {
                                className: "text-lg leading-normal md:text-base",
                                variants: V,
                                children: [(0, n.jsxs)("p", {
                                    children: ["Un studio de cr\xe9ation digitale fond\xe9 par deux associ\xe9,", " ", (0, n.jsx)("strong", {
                                        children: "Franck Joubert (Maes)"
                                    }), " et", " ", (0, n.jsx)("strong", {
                                        children: "Renaud Feigenbaum (Spirit)"
                                    }), ", alliant la strat\xe9gie, le design & la technologie."]
                                }), (0, n.jsxs)("p", {
                                    children: ["Compos\xe9 d’une \xe9quipe talentueuse, motiv\xe9e par le challenge et passionn\xe9e par l’innovation, nous relevons les d\xe9fis digitaux de nos clients.", (0, n.jsx)("br", {}), "Nous avons le savoir-faire, les connaissances et l’exp\xe9rience requise pour les accompagner dans leur projet."]
                                })]
                            }), (0, n.jsxs)(s.E.div, {
                                className: "mt-3 space-x-2 justify-center flex sm:flex-col sm:space-x-0 sm:space-y-2 ",
                                variants: V,
                                children: [(0, n.jsx)(B.Z, {
                                    variant: "action",
                                    rightIcon: "paper-plane-top",
                                    href: "/expertises",
                                    children: "Nos services"
                                }), (0, n.jsx)(B.Z, {
                                    variant: "outline-black",
                                    href: "/contact",
                                    children: "Rejoindre l'\xe9quipe"
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: "max-w-[1140px] mx-auto mt-6",
                            children: (0, n.jsxs)(s.E.div, {
                                className: "flex md:flex-col md:space-y-2",
                                style: {
                                    perspective: "100vmin"
                                },
                                variants: D,
                                initial: "initial",
                                whileInView: "animate",
                                viewport: {
                                    once: !0
                                },
                                children: [(0, n.jsx)(s.E.div, {
                                    className: "w-1/4 px-1 md:w-full",
                                    variants: F,
                                    children: (0, n.jsx)(K, {
                                        item: {
                                            value: "".concat(A, " ans"),
                                            desc: "d'existence",
                                            icon: (0, n.jsx)(z, {})
                                        },
                                        variant: "top",
                                        placementIcon: "-bottom-2"
                                    })
                                }), (0, n.jsx)(s.E.div, {
                                    className: "w-1/4 px-1 md:w-full",
                                    variants: F,
                                    children: (0, n.jsx)(K, {
                                        item: {
                                            value: "\xc9QUIPE",
                                            desc: "\xc0 TAILLE HUMAINE",
                                            icon: (0, n.jsx)(q, {})
                                        },
                                        variant: "bottom",
                                        placementIcon: "-top-2"
                                    })
                                }), (0, n.jsx)(s.E.div, {
                                    className: "w-1/4 px-1 md:w-full",
                                    variants: F,
                                    children: (0, n.jsx)(K, {
                                        item: {
                                            value: "200 m\xb2",
                                            desc: "d'espace cr\xe9atif",
                                            icon: (0, n.jsx)(O, {})
                                        },
                                        variant: "top",
                                        placementIcon: "-bottom-4"
                                    })
                                }), (0, n.jsx)(s.E.div, {
                                    className: "w-1/4 px-1 md:w-full",
                                    variants: F,
                                    children: (0, n.jsx)(K, {
                                        item: {
                                            value: "100%",
                                            desc: "de talents",
                                            icon: (0, n.jsx)(AA, {})
                                        },
                                        variant: "bottom",
                                        placementIcon: "-top-1"
                                    })
                                })]
                            })
                        })]
                    })
                },
                As = t(68157),
                Ar = t(10188),
                Ao = {
                    initial: {
                        y: -40,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: .5,
                            ease: [.6, -.05, .01, .99]
                        }
                    }
                },
                AC = {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1,
                        transition: {
                            duration: .1,
                            when: "beforeChildren",
                            ease: [.6, -.05, .01, .99]
                        }
                    }
                },
                Al = {
                    initial: {
                        y: -20,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: .5,
                            ease: [.6, -.05, .01, .99]
                        }
                    }
                },
                Ac = {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1,
                        transition: {
                            duration: .3,
                            staggerChildren: .1,
                            ease: [.6, -.05, .01, .99]
                        }
                    }
                },
                Ad = {
                    initial: {
                        y: -10,
                        opacity: 0
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: .3,
                            ease: [.6, -.05, .01, .99]
                        }
                    }
                },
                Au = [{
                    pic: {
                        src: "/_next/static/media/01.8446eeae.svg",
                        height: 926,
                        width: 931
                    },
                    color: "#150C21",
                    title: "Responsables de notre prestation",
                    content: ["La r\xe9ussite de Maespirit ne d\xe9pend que du succ\xe8s de nos clients.", "C’est avec cette conscience que chacun de nos collaborateurs s’impliquent dans chaque projet."]
                }, {
                    pic: {
                        src: "/_next/static/media/02.a22aa973.svg",
                        height: 935,
                        width: 931
                    },
                    color: "#2C0110",
                    title: "Approche agile collaborative",
                    content: ["La structure et les m\xe9thodes de production \xe9prouv\xe9es par Maespirit au fil des ann\xe9es nous permet de proposer une prestation de qualit\xe9 sup\xe9rieure tout en garantissant une maitrise du budget de nos clients."]
                }, {
                    pic: {
                        src: "/_next/static/media/03.11a90095.svg",
                        height: 1072,
                        width: 931
                    },
                    color: "#001630",
                    title: "Relation long-terme",
                    content: ["Que ce soit avec nos clients ou nos collaborateurs, nous ne privil\xe9gions pas les coup d’une fois. Nous sommes convaincus que les collaborations durables permettent de produire les projets les plus incroyables.", "Notre collaboration active la plus ancienne date de 2009, pour laquelle nous avons r\xe9cemment sorti une toute nouvelle version du projet."]
                }, {
                    pic: {
                        src: "/_next/static/media/04.2452b796.svg",
                        height: 944,
                        width: 931
                    },
                    color: "#04232C",
                    title: "Transparence",
                    content: ["Une des cl\xe9s pour une relation saine et fructueuse.", "Travailler avec Maespirit c’est avoir une vision honn\xeate et pr\xe9cise des d\xe9lais et co\xfbts de production."]
                }];

            function Ap() {
                var A = (0, C.Z)(["\n    background: linear-gradient(\n        343deg,\n        #06ce9f 0%,\n        #15afdd 25%,\n        #026eef 51%,\n        #683ca6 65%,\n        #de0352 100%\n    );\n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n"]);
                return Ap = function() {
                    return A
                }, A
            }
            var Ag = d.ZP.span.withConfig({
                    componentId: "sc-62146031-0"
                })(Ap()),
                Ax = function() {
                    var A = (0, r.useRef)(null);
                    return (0, Ar.Z)(A, "dark"), (0, n.jsxs)("section", {
                        className: "bg-black text-white pt-[12.5rem] pb-10 px-2 md:py-10",
                        ref: A,
                        children: [(0, n.jsxs)(s.E.div, {
                            className: "text-center max-w-[900px] mx-auto text-lg md:text-base",
                            variants: Ao,
                            initial: "initial",
                            whileInView: "animate",
                            viewport: {
                                amount: .7
                            },
                            children: [(0, n.jsx)("div", {
                                className: "text-[5rem] lg:text-[3.6rem] md:text-[3rem]",
                                children: (0, n.jsxs)("strong", {
                                    children: ["Pourquoi travailler", " ", (0, n.jsx)(Ag, {
                                        children: "avec nous"
                                    }), " ?"]
                                })
                            }), (0, n.jsx)("div", {
                                className: "mt-2",
                                children: "Nous sommes un studio de cr\xe9ation digitale, capable de produire des interfaces multi-support de toute complexit\xe9 en prenant \xe0 coeur les dimensions strat\xe9giques de vos projets."
                            })]
                        }), (0, n.jsx)("div", {
                            className: "mt-5 max-w-[900px] mx-auto",
                            children: Au.map(function(A, e) {
                                return (0, n.jsxs)(s.E.div, {
                                    className: "flex items-center py-10 md:flex-col md:py-5",
                                    variants: AC,
                                    initial: "initial",
                                    whileInView: "animate",
                                    viewport: {
                                        once: !0,
                                        amount: .4
                                    },
                                    children: [(0, n.jsx)(s.E.div, {
                                        className: "w-1/2 relative md:w-full",
                                        variants: Al,
                                        children: (0, n.jsx)(c(), {
                                            src: A.pic,
                                            alt: "",
                                            className: "w-auto h-auto block relative mx-auto md:w-full",
                                            quality: 100
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "w-1/2 flex justify-center md:w-full",
                                        children: (0, n.jsxs)(s.E.div, {
                                            className: "pl-6 md:pl-0",
                                            variants: Ac,
                                            children: [(0, n.jsxs)(s.E.div, {
                                                className: "opacity-50 text-2xl",
                                                variants: Ad,
                                                children: [e + 1, "."]
                                            }), (0, n.jsx)(s.E.h3, {
                                                className: "text-[3.5rem] mt-1 md:text-[3rem]",
                                                variants: Ad,
                                                children: A.title
                                            }), (0, n.jsx)(s.E.div, {
                                                className: "opacity-75 text-lg mt-2 md:text-base",
                                                variants: Ad,
                                                children: A.content.map(function(A, e) {
                                                    return (0, n.jsx)("p", {
                                                        children: A
                                                    }, "p-".concat(e))
                                                })
                                            })]
                                        })
                                    })]
                                }, e)
                            })
                        })]
                    })
                },
                AL = function() {
                    var A = (0, o.Zl)(i.F);
                    return (0, r.useEffect)(function() {
                        A("dark")
                    }, [A]), (0, n.jsx)(a.Z, {
                        children: (0, n.jsx)(s.E.section, {
                            exit: {
                                opacity: 0,
                                transition: {
                                    duration: .2
                                }
                            },
                            children: (0, n.jsxs)(s.E.div, {
                                animate: "animate",
                                variants: As.k,
                                children: [(0, n.jsx)(Aa, {}), (0, n.jsx)(Ax, {}), (0, n.jsx)(b, {})]
                            })
                        })
                    })
                },
                Ah = t(9008),
                Af = t.n(Ah),
                Am = function() {
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)(Af(), {
                            children: [(0, n.jsx)("title", {
                                children: "Notre studio | Maespirit"
                            }), (0, n.jsx)("meta", {
                                name: "description",
                                content: "D\xe9couvrez nos \xe9quipes projet, notre cadre de travail et nos valeurs. Parcourez quelques photos !"
                            }, "description")]
                        }), (0, n.jsx)(AL, {})]
                    })
                }
        },
        16782: function(A, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return x
                }
            });
            var n = t(85893),
                i = t(67294),
                a = t(7297),
                s = t(22452),
                r = t(14141);

            function o() {
                var A = (0, a.Z)(["\n    background: url('/images/contact_us_bg.png') no-repeat;\n    background-size: cover;\n"]);
                return o = function() {
                    return A
                }, A
            }
            var C = r.ZP.div.withConfig({
                    componentId: "sc-edce386d-0"
                })(o()),
                l = function() {
                    return (0, n.jsxs)(C, {
                        className: "relative flex flex-col items-center leading-normal justify-center py-8 px-2 text-white",
                        children: [(0, n.jsx)("div", {
                            className: "text-[5.4rem] font-bold text-center md:text-[40px] sm:text-[30px]",
                            children: "Parlons de votre projet"
                        }), (0, n.jsx)("div", {
                            className: "text-xl md:text-lg",
                            children: "Prenez rendez-vous d\xe8s aujourd’hui"
                        }), (0, n.jsx)("div", {
                            className: "mt-3",
                            children: (0, n.jsx)(s.Z, {
                                variant: "white",
                                rightIcon: "paper-plane-top",
                                href: "/contact",
                                children: "Contactez nous"
                            })
                        })]
                    })
                },
                c = t(41664),
                d = t.n(c);

            function u() {
                var A = (0, a.Z)(["\n    color: #fff;\n    li + li::before {\n        content: '|';\n        color: #888b96;\n        padding: 0 10px;\n    }\n    li a {\n        color: #fff;\n    }\n"]);
                return u = function() {
                    return A
                }, A
            }
            var p = r.ZP.ul.withConfig({
                    componentId: "sc-b9b46d53-0"
                })(u()),
                g = function() {
                    return (0, n.jsx)("div", {
                        className: "relative bg-black py-2 text-white text-[1.4rem] px-2",
                        children: (0, n.jsxs)("div", {
                            className: "max-w-[1125px] mx-auto flex md:text-sm",
                            children: [(0, n.jsxs)("div", {
                                children: ["\xa9 ", new Date().getFullYear(), " Maespirit.", " ", (0, n.jsx)("span", {
                                    className: "md:hidden",
                                    children: "All right reserved."
                                })]
                            }), (0, n.jsx)(p, {
                                className: "list-none p-0 m-0 ml-auto flex",
                                children: (0, n.jsx)("li", {
                                    children: (0, n.jsx)(d(), {
                                        href: "/mentions-legales",
                                        children: (0, n.jsx)("a", {
                                            children: "Mentions l\xe9gales"
                                        })
                                    })
                                })
                            })]
                        })
                    })
                },
                x = function(A) {
                    var e = A.children,
                        t = A.footer,
                        a = (0, i.useCallback)(function() {
                            var A = .01 * window.innerHeight;
                            document.documentElement.style.setProperty("--vh", "".concat(A, "px"))
                        }, []);
                    return (0, i.useEffect)(function() {
                        return a(), window.addEventListener("resize", a),
                            function() {
                                window.removeEventListener("resize", a)
                            }
                    }, [a]), (0, n.jsxs)("div", {
                        children: [e, (void 0 == t || t) && (0, n.jsx)(l, {}), (void 0 == t || t) && (0, n.jsx)(g, {})]
                    })
                }
        },
        79873: function(A, e, t) {
            "use strict";
            t.d(e, {
                At: function() {
                    return n
                },
                BR: function() {
                    return i
                },
                OM: function() {
                    return a
                },
                gY: function() {
                    return s
                }
            });
            var n = {
                    initial: {
                        y: -20,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: .25,
                        transition: {
                            duration: .7,
                            ease: [.6, -.05, .01, .99]
                        }
                    }
                },
                i = {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1,
                        transition: {
                            duration: .5,
                            ease: [.6, -.05, .01, .99]
                        }
                    }
                },
                a = {
                    animate: {
                        transition: {
                            staggerChildren: .2
                        }
                    }
                },
                s = {
                    initial: {
                        opacity: 0,
                        rotateX: -50,
                        x: 50
                    },
                    animate: {
                        opacity: 1,
                        rotateX: 0,
                        x: 0,
                        transition: {
                            duration: .75,
                            ease: [.6, -.05, .01, .99]
                        }
                    }
                }
        },
        68157: function(A, e, t) {
            "use strict";
            t.d(e, {
                k: function() {
                    return n
                }
            });
            var n = {
                animate: {
                    transition: {
                        staggerChildren: .1
                    }
                }
            }
        },
        10188: function(A, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return o
                }
            });
            var n = t(62468),
                i = t(67294),
                a = t(4480),
                s = t(70603),
                r = function(A, e) {
                    var t = e.threshold,
                        n = void 0 === t ? 0 : t,
                        a = e.root,
                        r = void 0 === a ? null : a,
                        o = e.rootMargin,
                        C = void 0 === o ? "0%" : o,
                        l = e.freezeOnceVisible,
                        c = (0, i.useState)(),
                        d = c[0],
                        u = c[1],
                        p = (null == d ? void 0 : d.isIntersecting) && void 0 !== l && l,
                        g = function(A) {
                            u((0, s.Z)(A, 1)[0])
                        };
                    return (0, i.useEffect)(function() {
                        var e = null == A ? void 0 : A.current;
                        if (window.IntersectionObserver && !p && e) {
                            var t = new IntersectionObserver(g, {
                                threshold: n,
                                root: r,
                                rootMargin: C
                            });
                            return t.observe(e),
                                function() {
                                    return t.disconnect()
                                }
                        }
                    }, [A, n, r, C, p]), d
                },
                o = function(A, e) {
                    var t = (0, a.Zl)(n.F),
                        s = r(A, {
                            rootMargin: "0px 0px",
                            threshold: [.05, .9]
                        });
                    (0, i.useEffect)(function() {
                        s && (null == s ? void 0 : s.isIntersecting) && (s.target.getBoundingClientRect().top > 85 || s.target.getBoundingClientRect().top < 0 - s.target.getBoundingClientRect().height + 85 ? "light" == e ? t("light") : t("dark") : s.target.getBoundingClientRect().top <= 85 && ("light" == e ? t("dark") : t("light")))
                    }, [s, t, e])
                }
        }
    },
    function(A) {
        A.O(0, [774, 888, 179], function() {
            return A(A.s = 55793)
        }), _N_E = A.O()
    }
]);