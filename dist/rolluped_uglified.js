import React, { useMemo, useEffect } from "react";

import { unstable_batchedUpdates } from "react-dom";

function unwrapExports(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}

function createCommonjsModule(fn, module) {
    return fn(module = {
        exports: {}
    }, module.exports), module.exports;
}

var reactIs_production_min = createCommonjsModule((function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var b = "function" == typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.fundamental") : 60117, w = b ? Symbol.for("react.responder") : 60118, x = b ? Symbol.for("react.scope") : 60119;
    function y(a) {
        if ("object" == typeof a && null !== a) {
            var u = a.$$typeof;
            switch (u) {
              case c:
                switch (a = a.type) {
                  case l:
                  case m:
                  case e:
                  case g:
                  case f:
                  case p:
                    return a;

                  default:
                    switch (a = a && a.$$typeof) {
                      case k:
                      case n:
                      case t:
                      case r:
                      case h:
                        return a;

                      default:
                        return u;
                    }
                }

              case d:
                return u;
            }
        }
    }
    function z(a) {
        return y(a) === m;
    }
    exports.typeOf = y, exports.AsyncMode = l, exports.ConcurrentMode = m, exports.ContextConsumer = k, 
    exports.ContextProvider = h, exports.Element = c, exports.ForwardRef = n, exports.Fragment = e, 
    exports.Lazy = t, exports.Memo = r, exports.Portal = d, exports.Profiler = g, exports.StrictMode = f, 
    exports.Suspense = p, exports.isValidElementType = function(a) {
        return "string" == typeof a || "function" == typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" == typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === v || a.$$typeof === w || a.$$typeof === x);
    }, exports.isAsyncMode = function(a) {
        return z(a) || y(a) === l;
    }, exports.isConcurrentMode = z, exports.isContextConsumer = function(a) {
        return y(a) === k;
    }, exports.isContextProvider = function(a) {
        return y(a) === h;
    }, exports.isElement = function(a) {
        return "object" == typeof a && null !== a && a.$$typeof === c;
    }, exports.isForwardRef = function(a) {
        return y(a) === n;
    }, exports.isFragment = function(a) {
        return y(a) === e;
    }, exports.isLazy = function(a) {
        return y(a) === t;
    }, exports.isMemo = function(a) {
        return y(a) === r;
    }, exports.isPortal = function(a) {
        return y(a) === d;
    }, exports.isProfiler = function(a) {
        return y(a) === g;
    }, exports.isStrictMode = function(a) {
        return y(a) === f;
    }, exports.isSuspense = function(a) {
        return y(a) === p;
    };
}));

unwrapExports(reactIs_production_min);

reactIs_production_min.typeOf, reactIs_production_min.AsyncMode, reactIs_production_min.ConcurrentMode, 
reactIs_production_min.ContextConsumer, reactIs_production_min.ContextProvider, 
reactIs_production_min.Element, reactIs_production_min.ForwardRef, reactIs_production_min.Fragment, 
reactIs_production_min.Lazy, reactIs_production_min.Memo, reactIs_production_min.Portal, 
reactIs_production_min.Profiler, reactIs_production_min.StrictMode, reactIs_production_min.Suspense, 
reactIs_production_min.isValidElementType, reactIs_production_min.isAsyncMode, reactIs_production_min.isConcurrentMode, 
reactIs_production_min.isContextConsumer, reactIs_production_min.isContextProvider, 
reactIs_production_min.isElement, reactIs_production_min.isForwardRef, reactIs_production_min.isFragment, 
reactIs_production_min.isLazy, reactIs_production_min.isMemo, reactIs_production_min.isPortal, 
reactIs_production_min.isProfiler, reactIs_production_min.isStrictMode, reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule((function(module, exports) {}));

unwrapExports(reactIs_development);

reactIs_development.typeOf, reactIs_development.AsyncMode, reactIs_development.ConcurrentMode, 
reactIs_development.ContextConsumer, reactIs_development.ContextProvider, reactIs_development.Element, 
reactIs_development.ForwardRef, reactIs_development.Fragment, reactIs_development.Lazy, 
reactIs_development.Memo, reactIs_development.Portal, reactIs_development.Profiler, 
reactIs_development.StrictMode, reactIs_development.Suspense, reactIs_development.isValidElementType, 
reactIs_development.isAsyncMode, reactIs_development.isConcurrentMode, reactIs_development.isContextConsumer, 
reactIs_development.isContextProvider, reactIs_development.isElement, reactIs_development.isForwardRef, 
reactIs_development.isFragment, reactIs_development.isLazy, reactIs_development.isMemo, 
reactIs_development.isPortal, reactIs_development.isProfiler, reactIs_development.isStrictMode, 
reactIs_development.isSuspense;

var reactIs = createCommonjsModule((function(module) {
    module.exports = reactIs_production_min;
})), getOwnPropertySymbols = (reactIs.typeOf, reactIs.AsyncMode, reactIs.ConcurrentMode, 
reactIs.ContextConsumer, reactIs.ContextProvider, reactIs.Element, reactIs.ForwardRef, 
reactIs.Fragment, reactIs.Lazy, reactIs.Memo, reactIs.Portal, reactIs.Profiler, 
reactIs.StrictMode, reactIs.Suspense, reactIs.isValidElementType, reactIs.isAsyncMode, 
reactIs.isConcurrentMode, reactIs.isContextConsumer, reactIs.isContextProvider, 
reactIs.isElement, reactIs.isForwardRef, reactIs.isFragment, reactIs.isLazy, reactIs.isMemo, 
reactIs.isPortal, reactIs.isProfiler, reactIs.isStrictMode, reactIs.isSuspense, 
Object.getOwnPropertySymbols), hasOwnProperty = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
    if (null == val) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(val);
}

(function() {
    try {
        if (!Object.assign) return !1;
        var test1 = new String("abc");
        if (test1[5] = "de", "5" === Object.getOwnPropertyNames(test1)[0]) return !1;
        for (var test2 = {}, i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
        if ("0123456789" !== Object.getOwnPropertyNames(test2).map((function(n) {
            return test2[n];
        })).join("")) return !1;
        var test3 = {};
        return "abcdefghijklmnopqrst".split("").forEach((function(letter) {
            test3[letter] = letter;
        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, test3)).join("");
    } catch (err) {
        return !1;
    }
})() && Object.assign;

var ReactPropTypesSecret_1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

Function.call.bind(Object.prototype.hasOwnProperty);

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

var propTypes = createCommonjsModule((function(module) {
    module.exports = function() {
        function shim(props, propName, componentName, location, propFullName, secret) {
            if (secret !== ReactPropTypesSecret_1) {
                var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw err.name = "Invariant Violation", err;
            }
        }
        function getShim() {
            return shim;
        }
        shim.isRequired = shim;
        var ReactPropTypes = {
            array: shim,
            bool: shim,
            func: shim,
            number: shim,
            object: shim,
            string: shim,
            symbol: shim,
            any: shim,
            arrayOf: getShim,
            element: shim,
            elementType: shim,
            instanceOf: getShim,
            node: shim,
            objectOf: getShim,
            oneOf: getShim,
            oneOfType: getShim,
            shape: getShim,
            exact: getShim,
            checkPropTypes: emptyFunctionWithReset,
            resetWarningCache: emptyFunction
        };
        return ReactPropTypes.PropTypes = ReactPropTypes, ReactPropTypes;
    }();
})), ReactReduxContext = (propTypes.array, propTypes.bool, propTypes.func, propTypes.number, 
propTypes.object, propTypes.string, propTypes.symbol, propTypes.any, propTypes.arrayOf, 
propTypes.element, propTypes.elementType, propTypes.instanceOf, propTypes.node, 
propTypes.objectOf, propTypes.oneOf, propTypes.oneOfType, propTypes.shape, propTypes.exact, 
propTypes.checkPropTypes, propTypes.resetWarningCache, propTypes.PropTypes, React.createContext(null));

ReactReduxContext.displayName = "ReactRedux";

propTypes.shape({
    subscribe: propTypes.func.isRequired,
    dispatch: propTypes.func.isRequired,
    getState: propTypes.func.isRequired
}), propTypes.object, propTypes.any;

({})[reactIs.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
};
