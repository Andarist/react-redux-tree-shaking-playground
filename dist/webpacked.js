!function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.t = function(value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 13);
}([ function(module, exports) {
    module.exports = React;
}, function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = function(condition, format, a, b, c, d, e, f) {
        if (!condition) {
            var error;
            if (void 0 === format) error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                var args = [ a, b, c, d, e, f ], argIndex = 0;
                (error = new Error(format.replace(/%s/g, (function() {
                    return args[argIndex++];
                })))).name = "Invariant Violation";
            }
            throw error.framesToPop = 1, error;
        }
    };
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(8)();
}, function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = __webpack_require__(10);
}, function(module, exports, __webpack_require__) {
    "use strict";
    var reactIs = __webpack_require__(3), REACT_STATICS = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    }, KNOWN_STATICS = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    }, MEMO_STATICS = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    }, TYPE_STATICS = {};
    function getStatics(component) {
        return reactIs.isMemo(component) ? MEMO_STATICS : TYPE_STATICS[component.$$typeof] || REACT_STATICS;
    }
    TYPE_STATICS[reactIs.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    };
    var defineProperty = Object.defineProperty, getOwnPropertyNames = Object.getOwnPropertyNames, getOwnPropertySymbols = Object.getOwnPropertySymbols, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, getPrototypeOf = Object.getPrototypeOf, objectPrototype = Object.prototype;
    module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
        if ("string" != typeof sourceComponent) {
            if (objectPrototype) {
                var inheritedComponent = getPrototypeOf(sourceComponent);
                inheritedComponent && inheritedComponent !== objectPrototype && hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
            var keys = getOwnPropertyNames(sourceComponent);
            getOwnPropertySymbols && (keys = keys.concat(getOwnPropertySymbols(sourceComponent)));
            for (var targetStatics = getStatics(targetComponent), sourceStatics = getStatics(sourceComponent), i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (!(KNOWN_STATICS[key] || blacklist && blacklist[key] || sourceStatics && sourceStatics[key] || targetStatics && targetStatics[key])) {
                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                    try {
                        defineProperty(targetComponent, key, descriptor);
                    } catch (e) {}
                }
            }
        }
        return targetComponent;
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    (function(global, module) {
        var root, _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
        root = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== global ? global : module;
        var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__.a)(root);
        __webpack_exports__.a = result;
    }).call(this, __webpack_require__(11), __webpack_require__(12)(module));
}, function(module, exports) {
    module.exports = ReactDOM;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function symbolObservablePonyfill(root) {
        var result, Symbol = root.Symbol;
        return "function" == typeof Symbol ? Symbol.observable ? result = Symbol.observable : (result = Symbol("observable"), 
        Symbol.observable = result) : result = "@@observable", result;
    }
    __webpack_require__.d(__webpack_exports__, "a", (function() {
        return symbolObservablePonyfill;
    }));
}, function(module, exports, __webpack_require__) {
    "use strict";
    var ReactPropTypesSecret = __webpack_require__(9);
    function emptyFunction() {}
    function emptyFunctionWithReset() {}
    emptyFunctionWithReset.resetWarningCache = emptyFunction, module.exports = function() {
        function shim(props, propName, componentName, location, propFullName, secret) {
            if (secret !== ReactPropTypesSecret) {
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
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}, function(module, exports, __webpack_require__) {
    "use strict";
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
}, function(module, exports) {
    var g;
    g = function() {
        return this;
    }();
    try {
        g = g || new Function("return this")();
    } catch (e) {
        "object" == typeof window && (g = window);
    }
    module.exports = g;
}, function(module, exports) {
    module.exports = function(originalModule) {
        if (!originalModule.webpackPolyfill) {
            var module = Object.create(originalModule);
            module.children || (module.children = []), Object.defineProperty(module, "loaded", {
                enumerable: !0,
                get: function() {
                    return module.l;
                }
            }), Object.defineProperty(module, "id", {
                enumerable: !0,
                get: function() {
                    return module.i;
                }
            }), Object.defineProperty(module, "exports", {
                enumerable: !0
            }), module.webpackPolyfill = 1;
        }
        return module;
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var external_React_ = __webpack_require__(0), external_React_default = __webpack_require__.n(external_React_), prop_types = __webpack_require__(2), prop_types_default = __webpack_require__.n(prop_types), ReactReduxContext = external_React_default.a.createContext(null);
    ReactReduxContext.displayName = "ReactRedux";
    var batch_batch = function(callback) {
        callback();
    }, getBatch = function() {
        return batch_batch;
    }, CLEARED = null, nullListeners = {
        notify: function() {}
    };
    var Subscription = function() {
        function Subscription(store, parentSub) {
            this.store = store, this.parentSub = parentSub, this.unsubscribe = null, this.listeners = nullListeners, 
            this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
        }
        var _proto = Subscription.prototype;
        return _proto.addNestedSub = function(listener) {
            return this.trySubscribe(), this.listeners.subscribe(listener);
        }, _proto.notifyNestedSubs = function() {
            this.listeners.notify();
        }, _proto.handleChangeWrapper = function() {
            this.onStateChange && this.onStateChange();
        }, _proto.isSubscribed = function() {
            return Boolean(this.unsubscribe);
        }, _proto.trySubscribe = function() {
            var batch, current, next;
            this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper), 
            this.listeners = (batch = getBatch(), current = [], next = [], {
                clear: function() {
                    next = CLEARED, current = CLEARED;
                },
                notify: function() {
                    var listeners = current = next;
                    batch((function() {
                        for (var i = 0; i < listeners.length; i++) listeners[i]();
                    }));
                },
                get: function() {
                    return next;
                },
                subscribe: function(listener) {
                    var isSubscribed = !0;
                    return next === current && (next = current.slice()), next.push(listener), function() {
                        isSubscribed && current !== CLEARED && (isSubscribed = !1, next === current && (next = current.slice()), 
                        next.splice(next.indexOf(listener), 1));
                    };
                }
            }));
        }, _proto.tryUnsubscribe = function() {
            this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), 
            this.listeners = nullListeners);
        }, Subscription;
    }();
    function Provider(_ref) {
        var store = _ref.store, context = _ref.context, children = _ref.children, contextValue = Object(external_React_.useMemo)((function() {
            var subscription = new Subscription(store);
            return subscription.onStateChange = subscription.notifyNestedSubs, {
                store: store,
                subscription: subscription
            };
        }), [ store ]), previousState = Object(external_React_.useMemo)((function() {
            return store.getState();
        }), [ store ]);
        Object(external_React_.useEffect)((function() {
            var subscription = contextValue.subscription;
            return subscription.trySubscribe(), previousState !== store.getState() && subscription.notifyNestedSubs(), 
            function() {
                subscription.tryUnsubscribe(), subscription.onStateChange = null;
            };
        }), [ contextValue, previousState ]);
        var Context = context || ReactReduxContext;
        return external_React_default.a.createElement(Context.Provider, {
            value: contextValue
        }, children);
    }
    Provider.propTypes = {
        store: prop_types_default.a.shape({
            subscribe: prop_types_default.a.func.isRequired,
            dispatch: prop_types_default.a.func.isRequired,
            getState: prop_types_default.a.func.isRequired
        }),
        context: prop_types_default.a.object,
        children: prop_types_default.a.any
    };
    function _extends() {
        return (_extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }).apply(this, arguments);
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for (i = 0; i < sourceKeys.length; i++) key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }
    var hoist_non_react_statics_cjs = __webpack_require__(4), hoist_non_react_statics_cjs_default = __webpack_require__.n(hoist_non_react_statics_cjs), browser = __webpack_require__(1), browser_default = __webpack_require__.n(browser), react_is = __webpack_require__(3), useIsomorphicLayoutEffect = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? external_React_.useLayoutEffect : external_React_.useEffect, EMPTY_ARRAY = [], NO_SUBSCRIPTION_ARRAY = [ null, null ];
    function storeStateUpdatesReducer(state, action) {
        var updateCount = state[1];
        return [ action.payload, updateCount + 1 ];
    }
    var initStateUpdates = function() {
        return [ null, 0 ];
    };
    function connectAdvanced(selectorFactory, _ref) {
        void 0 === _ref && (_ref = {});
        var _ref2 = _ref, _ref2$getDisplayName = _ref2.getDisplayName, getDisplayName = void 0 === _ref2$getDisplayName ? function(name) {
            return "ConnectAdvanced(" + name + ")";
        } : _ref2$getDisplayName, _ref2$methodName = _ref2.methodName, methodName = void 0 === _ref2$methodName ? "connectAdvanced" : _ref2$methodName, _ref2$renderCountProp = _ref2.renderCountProp, renderCountProp = void 0 === _ref2$renderCountProp ? void 0 : _ref2$renderCountProp, _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges, shouldHandleStateChanges = void 0 === _ref2$shouldHandleSta || _ref2$shouldHandleSta, _ref2$storeKey = _ref2.storeKey, storeKey = void 0 === _ref2$storeKey ? "store" : _ref2$storeKey, _ref2$withRef = _ref2.withRef, withRef = void 0 !== _ref2$withRef && _ref2$withRef, _ref2$forwardRef = _ref2.forwardRef, forwardRef = void 0 !== _ref2$forwardRef && _ref2$forwardRef, _ref2$context = _ref2.context, context = void 0 === _ref2$context ? ReactReduxContext : _ref2$context, connectOptions = _objectWithoutPropertiesLoose(_ref2, [ "getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context" ]);
        browser_default()(void 0 === renderCountProp, "renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"), 
        browser_default()(!withRef, "withRef is removed. To access the wrapped instance, use a ref on the connected component");
        browser_default()("store" === storeKey, "storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect");
        var Context = context;
        return function(WrappedComponent) {
            var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component", displayName = getDisplayName(wrappedComponentName), selectorFactoryOptions = _extends({}, connectOptions, {
                getDisplayName: getDisplayName,
                methodName: methodName,
                renderCountProp: renderCountProp,
                shouldHandleStateChanges: shouldHandleStateChanges,
                storeKey: storeKey,
                displayName: displayName,
                wrappedComponentName: wrappedComponentName,
                WrappedComponent: WrappedComponent
            }), pure = connectOptions.pure;
            var usePureOnlyMemo = pure ? external_React_.useMemo : function(callback) {
                return callback();
            };
            function ConnectFunction(props) {
                var _useMemo = Object(external_React_.useMemo)((function() {
                    var forwardedRef = props.forwardedRef, wrapperProps = _objectWithoutPropertiesLoose(props, [ "forwardedRef" ]);
                    return [ props.context, forwardedRef, wrapperProps ];
                }), [ props ]), propsContext = _useMemo[0], forwardedRef = _useMemo[1], wrapperProps = _useMemo[2], ContextToUse = Object(external_React_.useMemo)((function() {
                    return propsContext && propsContext.Consumer && Object(react_is.isContextConsumer)(external_React_default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;
                }), [ propsContext, Context ]), contextValue = Object(external_React_.useContext)(ContextToUse), didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch), didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
                browser_default()(didStoreComeFromProps || didStoreComeFromContext, 'Could not find "store" in the context of "' + displayName + '". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ' + displayName + " in connect options.");
                var store = didStoreComeFromProps ? props.store : contextValue.store, childPropsSelector = Object(external_React_.useMemo)((function() {
                    return function(store) {
                        return selectorFactory(store.dispatch, selectorFactoryOptions);
                    }(store);
                }), [ store ]), _useMemo2 = Object(external_React_.useMemo)((function() {
                    if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY;
                    var subscription = new Subscription(store, didStoreComeFromProps ? null : contextValue.subscription), notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
                    return [ subscription, notifyNestedSubs ];
                }), [ store, didStoreComeFromProps, contextValue ]), subscription = _useMemo2[0], notifyNestedSubs = _useMemo2[1], overriddenContextValue = Object(external_React_.useMemo)((function() {
                    return didStoreComeFromProps ? contextValue : _extends({}, contextValue, {
                        subscription: subscription
                    });
                }), [ didStoreComeFromProps, contextValue, subscription ]), _useReducer = Object(external_React_.useReducer)(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates), previousStateUpdateResult = _useReducer[0][0], forceComponentUpdateDispatch = _useReducer[1];
                if (previousStateUpdateResult && previousStateUpdateResult.error) throw previousStateUpdateResult.error;
                var lastChildProps = Object(external_React_.useRef)(), lastWrapperProps = Object(external_React_.useRef)(wrapperProps), childPropsFromStoreUpdate = Object(external_React_.useRef)(), renderIsScheduled = Object(external_React_.useRef)(!1), actualChildProps = usePureOnlyMemo((function() {
                    return childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current ? childPropsFromStoreUpdate.current : childPropsSelector(store.getState(), wrapperProps);
                }), [ store, previousStateUpdateResult, wrapperProps ]);
                useIsomorphicLayoutEffect((function() {
                    lastWrapperProps.current = wrapperProps, lastChildProps.current = actualChildProps, 
                    renderIsScheduled.current = !1, childPropsFromStoreUpdate.current && (childPropsFromStoreUpdate.current = null, 
                    notifyNestedSubs());
                })), useIsomorphicLayoutEffect((function() {
                    if (shouldHandleStateChanges) {
                        var didUnsubscribe = !1, lastThrownError = null, checkForUpdates = function() {
                            if (!didUnsubscribe) {
                                var newChildProps, error, latestStoreState = store.getState();
                                try {
                                    newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
                                } catch (e) {
                                    error = e, lastThrownError = e;
                                }
                                error || (lastThrownError = null), newChildProps === lastChildProps.current ? renderIsScheduled.current || notifyNestedSubs() : (lastChildProps.current = newChildProps, 
                                childPropsFromStoreUpdate.current = newChildProps, renderIsScheduled.current = !0, 
                                forceComponentUpdateDispatch({
                                    type: "STORE_UPDATED",
                                    payload: {
                                        error: error
                                    }
                                }));
                            }
                        };
                        subscription.onStateChange = checkForUpdates, subscription.trySubscribe(), checkForUpdates();
                        return function() {
                            if (didUnsubscribe = !0, subscription.tryUnsubscribe(), subscription.onStateChange = null, 
                            lastThrownError) throw lastThrownError;
                        };
                    }
                }), [ store, subscription, childPropsSelector ]);
                var renderedWrappedComponent = Object(external_React_.useMemo)((function() {
                    return external_React_default.a.createElement(WrappedComponent, _extends({}, actualChildProps, {
                        ref: forwardedRef
                    }));
                }), [ forwardedRef, WrappedComponent, actualChildProps ]);
                return Object(external_React_.useMemo)((function() {
                    return shouldHandleStateChanges ? external_React_default.a.createElement(ContextToUse.Provider, {
                        value: overriddenContextValue
                    }, renderedWrappedComponent) : renderedWrappedComponent;
                }), [ ContextToUse, renderedWrappedComponent, overriddenContextValue ]);
            }
            var Connect = pure ? external_React_default.a.memo(ConnectFunction) : ConnectFunction;
            if (Connect.WrappedComponent = WrappedComponent, Connect.displayName = displayName, 
            forwardRef) {
                var forwarded = external_React_default.a.forwardRef((function(props, ref) {
                    return external_React_default.a.createElement(Connect, _extends({}, props, {
                        forwardedRef: ref
                    }));
                }));
                return forwarded.displayName = displayName, forwarded.WrappedComponent = WrappedComponent, 
                hoist_non_react_statics_cjs_default()(forwarded, WrappedComponent);
            }
            return hoist_non_react_statics_cjs_default()(Connect, WrappedComponent);
        };
    }
    var hasOwn = Object.prototype.hasOwnProperty;
    function is(x, y) {
        return x === y ? 0 !== x || 0 !== y || 1 / x == 1 / y : x != x && y != y;
    }
    function shallowEqual(objA, objB) {
        if (is(objA, objB)) return !0;
        if ("object" != typeof objA || null === objA || "object" != typeof objB || null === objB) return !1;
        var keysA = Object.keys(objA), keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) return !1;
        for (var i = 0; i < keysA.length; i++) if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) return !1;
        return !0;
    }
    __webpack_require__(5);
    var randomString = function() {
        return Math.random().toString(36).substring(7).split("").join(".");
    };
    randomString(), randomString();
    function bindActionCreator(actionCreator, dispatch) {
        return function() {
            return dispatch(actionCreator.apply(this, arguments));
        };
    }
    function wrapMapToPropsConstant(getConstant) {
        return function(dispatch, options) {
            var constant = getConstant(dispatch, options);
            function constantSelector() {
                return constant;
            }
            return constantSelector.dependsOnOwnProps = !1, constantSelector;
        };
    }
    function getDependsOnOwnProps(mapToProps) {
        return null !== mapToProps.dependsOnOwnProps && void 0 !== mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : 1 !== mapToProps.length;
    }
    function wrapMapToPropsFunc(mapToProps, methodName) {
        return function(dispatch, _ref) {
            _ref.displayName;
            var proxy = function(stateOrDispatch, ownProps) {
                return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
            };
            return proxy.dependsOnOwnProps = !0, proxy.mapToProps = function(stateOrDispatch, ownProps) {
                proxy.mapToProps = mapToProps, proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
                var props = proxy(stateOrDispatch, ownProps);
                return "function" == typeof props && (proxy.mapToProps = props, proxy.dependsOnOwnProps = getDependsOnOwnProps(props), 
                props = proxy(stateOrDispatch, ownProps)), props;
            }, proxy;
        };
    }
    var connect_mapDispatchToProps = [ function(mapDispatchToProps) {
        return "function" == typeof mapDispatchToProps ? wrapMapToPropsFunc(mapDispatchToProps) : void 0;
    }, function(mapDispatchToProps) {
        return mapDispatchToProps ? void 0 : wrapMapToPropsConstant((function(dispatch) {
            return {
                dispatch: dispatch
            };
        }));
    }, function(mapDispatchToProps) {
        return mapDispatchToProps && "object" == typeof mapDispatchToProps ? wrapMapToPropsConstant((function(dispatch) {
            return function(actionCreators, dispatch) {
                if ("function" == typeof actionCreators) return bindActionCreator(actionCreators, dispatch);
                if ("object" != typeof actionCreators || null === actionCreators) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === actionCreators ? "null" : typeof actionCreators) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
                var boundActionCreators = {};
                for (var key in actionCreators) {
                    var actionCreator = actionCreators[key];
                    "function" == typeof actionCreator && (boundActionCreators[key] = bindActionCreator(actionCreator, dispatch));
                }
                return boundActionCreators;
            }(mapDispatchToProps, dispatch);
        })) : void 0;
    } ];
    var connect_mapStateToProps = [ function(mapStateToProps) {
        return "function" == typeof mapStateToProps ? wrapMapToPropsFunc(mapStateToProps) : void 0;
    }, function(mapStateToProps) {
        return mapStateToProps ? void 0 : wrapMapToPropsConstant((function() {
            return {};
        }));
    } ];
    function defaultMergeProps(stateProps, dispatchProps, ownProps) {
        return _extends({}, ownProps, {}, stateProps, {}, dispatchProps);
    }
    var connect_mergeProps = [ function(mergeProps) {
        return "function" == typeof mergeProps ? function(mergeProps) {
            return function(dispatch, _ref) {
                _ref.displayName;
                var mergedProps, pure = _ref.pure, areMergedPropsEqual = _ref.areMergedPropsEqual, hasRunOnce = !1;
                return function(stateProps, dispatchProps, ownProps) {
                    var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
                    return hasRunOnce ? pure && areMergedPropsEqual(nextMergedProps, mergedProps) || (mergedProps = nextMergedProps) : (hasRunOnce = !0, 
                    mergedProps = nextMergedProps), mergedProps;
                };
            };
        }(mergeProps) : void 0;
    }, function(mergeProps) {
        return mergeProps ? void 0 : function() {
            return defaultMergeProps;
        };
    } ];
    function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
        return function(state, ownProps) {
            return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
        };
    }
    function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
        var state, ownProps, stateProps, dispatchProps, mergedProps, areStatesEqual = _ref.areStatesEqual, areOwnPropsEqual = _ref.areOwnPropsEqual, areStatePropsEqual = _ref.areStatePropsEqual, hasRunAtLeastOnce = !1;
        function handleSubsequentCalls(nextState, nextOwnProps) {
            var nextStateProps, statePropsChanged, propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps), stateChanged = !areStatesEqual(nextState, state);
            return state = nextState, ownProps = nextOwnProps, propsChanged && stateChanged ? (stateProps = mapStateToProps(state, ownProps), 
            mapDispatchToProps.dependsOnOwnProps && (dispatchProps = mapDispatchToProps(dispatch, ownProps)), 
            mergedProps = mergeProps(stateProps, dispatchProps, ownProps)) : propsChanged ? (mapStateToProps.dependsOnOwnProps && (stateProps = mapStateToProps(state, ownProps)), 
            mapDispatchToProps.dependsOnOwnProps && (dispatchProps = mapDispatchToProps(dispatch, ownProps)), 
            mergedProps = mergeProps(stateProps, dispatchProps, ownProps)) : stateChanged ? (nextStateProps = mapStateToProps(state, ownProps), 
            statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps), stateProps = nextStateProps, 
            statePropsChanged && (mergedProps = mergeProps(stateProps, dispatchProps, ownProps)), 
            mergedProps) : mergedProps;
        }
        return function(nextState, nextOwnProps) {
            return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : (stateProps = mapStateToProps(state = nextState, ownProps = nextOwnProps), 
            dispatchProps = mapDispatchToProps(dispatch, ownProps), mergedProps = mergeProps(stateProps, dispatchProps, ownProps), 
            hasRunAtLeastOnce = !0, mergedProps);
        };
    }
    function finalPropsSelectorFactory(dispatch, _ref2) {
        var initMapStateToProps = _ref2.initMapStateToProps, initMapDispatchToProps = _ref2.initMapDispatchToProps, initMergeProps = _ref2.initMergeProps, options = _objectWithoutPropertiesLoose(_ref2, [ "initMapStateToProps", "initMapDispatchToProps", "initMergeProps" ]), mapStateToProps = initMapStateToProps(dispatch, options), mapDispatchToProps = initMapDispatchToProps(dispatch, options), mergeProps = initMergeProps(dispatch, options);
        return (options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory)(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
    }
    function match(arg, factories, name) {
        for (var i = factories.length - 1; i >= 0; i--) {
            var result = factories[i](arg);
            if (result) return result;
        }
        return function(dispatch, options) {
            throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
        };
    }
    function strictEqual(a, b) {
        return a === b;
    }
    var _temp, _ref, _ref$connectHOC, connectHOC, _ref$mapStateToPropsF, mapStateToPropsFactories, _ref$mapDispatchToPro, mapDispatchToPropsFactories, _ref$mergePropsFactor, mergePropsFactories, _ref$selectorFactory, selectorFactory;
    _ref$connectHOC = (_ref = void 0 === _temp ? {} : _temp).connectHOC, connectHOC = void 0 === _ref$connectHOC ? connectAdvanced : _ref$connectHOC, 
    _ref$mapStateToPropsF = _ref.mapStateToPropsFactories, mapStateToPropsFactories = void 0 === _ref$mapStateToPropsF ? connect_mapStateToProps : _ref$mapStateToPropsF, 
    _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories, mapDispatchToPropsFactories = void 0 === _ref$mapDispatchToPro ? connect_mapDispatchToProps : _ref$mapDispatchToPro, 
    _ref$mergePropsFactor = _ref.mergePropsFactories, mergePropsFactories = void 0 === _ref$mergePropsFactor ? connect_mergeProps : _ref$mergePropsFactor, 
    _ref$selectorFactory = _ref.selectorFactory, selectorFactory = void 0 === _ref$selectorFactory ? finalPropsSelectorFactory : _ref$selectorFactory;
    function useReduxContext_useReduxContext() {
        var contextValue = Object(external_React_.useContext)(ReactReduxContext);
        return browser_default()(contextValue, "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"), 
        contextValue;
    }
    function createStoreHook(context) {
        void 0 === context && (context = ReactReduxContext);
        var useReduxContext = context === ReactReduxContext ? useReduxContext_useReduxContext : function() {
            return Object(external_React_.useContext)(context);
        };
        return function() {
            return useReduxContext().store;
        };
    }
    var useStore_useStore = createStoreHook();
    !function(context) {
        void 0 === context && (context = ReactReduxContext);
        var useStore = context === ReactReduxContext ? useStore_useStore : createStoreHook(context);
    }();
    var refEquality = function(a, b) {
        return a === b;
    };
    !function(context) {
        void 0 === context && (context = ReactReduxContext);
        var useReduxContext = context === ReactReduxContext ? useReduxContext_useReduxContext : function() {
            return Object(external_React_.useContext)(context);
        };
    }();
    var newBatch, external_ReactDOM_ = __webpack_require__(6);
    newBatch = external_ReactDOM_.unstable_batchedUpdates, batch_batch = newBatch;
} ]);