import React, { useMemo, useEffect, useLayoutEffect, useContext, useReducer, useRef } from "react";

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
})), reactIs_18 = (reactIs.typeOf, reactIs.AsyncMode, reactIs.ConcurrentMode, reactIs.ContextConsumer, 
reactIs.ContextProvider, reactIs.Element, reactIs.ForwardRef, reactIs.Fragment, 
reactIs.Lazy, reactIs.Memo, reactIs.Portal, reactIs.Profiler, reactIs.StrictMode, 
reactIs.Suspense, reactIs.isValidElementType, reactIs.isAsyncMode, reactIs.isConcurrentMode, 
reactIs.isContextConsumer), getOwnPropertySymbols = (reactIs.isContextProvider, 
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

var batch = function(callback) {
    callback();
}, getBatch = function() {
    return batch;
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
        this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper), 
        this.listeners = function() {
            var batch = getBatch(), current = [], next = [];
            return {
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
            };
        }());
    }, _proto.tryUnsubscribe = function() {
        this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), 
        this.listeners = nullListeners);
    }, Subscription;
}();

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

propTypes.shape({
    subscribe: propTypes.func.isRequired,
    dispatch: propTypes.func.isRequired,
    getState: propTypes.func.isRequired
}), propTypes.object, propTypes.any;

var REACT_STATICS = {
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

var defineProperty = Object.defineProperty, getOwnPropertyNames = Object.getOwnPropertyNames, getOwnPropertySymbols$1 = Object.getOwnPropertySymbols, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, getPrototypeOf = Object.getPrototypeOf, objectPrototype = Object.prototype;

var hoistNonReactStatics_cjs = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if ("string" != typeof sourceComponent) {
        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            inheritedComponent && inheritedComponent !== objectPrototype && hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
        }
        var keys = getOwnPropertyNames(sourceComponent);
        getOwnPropertySymbols$1 && (keys = keys.concat(getOwnPropertySymbols$1(sourceComponent)));
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
}, invariant_1 = function(condition, format, a, b, c, d, e, f) {
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
}, useIsomorphicLayoutEffect = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? useLayoutEffect : useEffect, EMPTY_ARRAY = [], NO_SUBSCRIPTION_ARRAY = [ null, null ];

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
    invariant_1(void 0 === renderCountProp, "renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"), 
    invariant_1(!withRef, "withRef is removed. To access the wrapped instance, use a ref on the connected component");
    invariant_1("store" === storeKey, "storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect");
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
        var usePureOnlyMemo = pure ? useMemo : function(callback) {
            return callback();
        };
        function ConnectFunction(props) {
            var _useMemo = useMemo((function() {
                var forwardedRef = props.forwardedRef, wrapperProps = _objectWithoutPropertiesLoose(props, [ "forwardedRef" ]);
                return [ props.context, forwardedRef, wrapperProps ];
            }), [ props ]), propsContext = _useMemo[0], forwardedRef = _useMemo[1], wrapperProps = _useMemo[2], ContextToUse = useMemo((function() {
                return propsContext && propsContext.Consumer && reactIs_18(React.createElement(propsContext.Consumer, null)) ? propsContext : Context;
            }), [ propsContext, Context ]), contextValue = useContext(ContextToUse), didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch), didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
            invariant_1(didStoreComeFromProps || didStoreComeFromContext, 'Could not find "store" in the context of "' + displayName + '". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ' + displayName + " in connect options.");
            var store = didStoreComeFromProps ? props.store : contextValue.store, childPropsSelector = useMemo((function() {
                return function(store) {
                    return selectorFactory(store.dispatch, selectorFactoryOptions);
                }(store);
            }), [ store ]), _useMemo2 = useMemo((function() {
                if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY;
                var subscription = new Subscription(store, didStoreComeFromProps ? null : contextValue.subscription), notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
                return [ subscription, notifyNestedSubs ];
            }), [ store, didStoreComeFromProps, contextValue ]), subscription = _useMemo2[0], notifyNestedSubs = _useMemo2[1], overriddenContextValue = useMemo((function() {
                return didStoreComeFromProps ? contextValue : _extends({}, contextValue, {
                    subscription: subscription
                });
            }), [ didStoreComeFromProps, contextValue, subscription ]), _useReducer = useReducer(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates), previousStateUpdateResult = _useReducer[0][0], forceComponentUpdateDispatch = _useReducer[1];
            if (previousStateUpdateResult && previousStateUpdateResult.error) throw previousStateUpdateResult.error;
            var lastChildProps = useRef(), lastWrapperProps = useRef(wrapperProps), childPropsFromStoreUpdate = useRef(), renderIsScheduled = useRef(!1), actualChildProps = usePureOnlyMemo((function() {
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
            var renderedWrappedComponent = useMemo((function() {
                return React.createElement(WrappedComponent, _extends({}, actualChildProps, {
                    ref: forwardedRef
                }));
            }), [ forwardedRef, WrappedComponent, actualChildProps ]);
            return useMemo((function() {
                return shouldHandleStateChanges ? React.createElement(ContextToUse.Provider, {
                    value: overriddenContextValue
                }, renderedWrappedComponent) : renderedWrappedComponent;
            }), [ ContextToUse, renderedWrappedComponent, overriddenContextValue ]);
        }
        var Connect = pure ? React.memo(ConnectFunction) : ConnectFunction;
        if (Connect.WrappedComponent = WrappedComponent, Connect.displayName = displayName, 
        forwardRef) {
            var forwarded = React.forwardRef((function(props, ref) {
                return React.createElement(Connect, _extends({}, props, {
                    forwardedRef: ref
                }));
            }));
            return forwarded.displayName = displayName, forwarded.WrappedComponent = WrappedComponent, 
            hoistNonReactStatics_cjs(forwarded, WrappedComponent);
        }
        return hoistNonReactStatics_cjs(Connect, WrappedComponent);
    };
}

Object.prototype.hasOwnProperty;

!function(root) {
    var result, Symbol = root.Symbol;
    "function" == typeof Symbol ? Symbol.observable ? result = Symbol.observable : (result = Symbol("observable"), 
    Symbol.observable = result) : result = "@@observable";
}("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")());

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

var defaultMapDispatchToPropsFactories = [ function(mapDispatchToProps) {
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

var defaultMapStateToPropsFactories = [ function(mapStateToProps) {
    return "function" == typeof mapStateToProps ? wrapMapToPropsFunc(mapStateToProps) : void 0;
}, function(mapStateToProps) {
    return mapStateToProps ? void 0 : wrapMapToPropsConstant((function() {
        return {};
    }));
} ];

function defaultMergeProps(stateProps, dispatchProps, ownProps) {
    return _extends({}, ownProps, {}, stateProps, {}, dispatchProps);
}

var _temp, _ref, _ref$connectHOC, _ref$mapStateToPropsF, _ref$mapDispatchToPro, _ref$mergePropsFactor, _ref$selectorFactory, defaultMergePropsFactories = [ function(mergeProps) {
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

_ref$connectHOC = (_ref = void 0 === _temp ? {} : _temp).connectHOC, _ref$mapStateToPropsF = _ref.mapStateToPropsFactories, 
_ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories, _ref$mergePropsFactor = _ref.mergePropsFactories, 
_ref$selectorFactory = _ref.selectorFactory, batch = unstable_batchedUpdates;
