// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hwSkd":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6f8beed154632f9a";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"gg0zR":[function(require,module,exports) {
var _searchCityForm = require("./components/searchCityForm");
const mainApp = function() {
    const log = (i)=>console.log("\n", i, "\n");
    (0, _searchCityForm.searchCityForm)();
};
document.addEventListener("DOMContentLoaded", mainApp);

},{"./components/searchCityForm":"fwD8U"}],"fwD8U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "searchCityForm", ()=>searchCityForm);
var _handleSearchCitySubmit = require("../events/handleSearchCitySubmit");
const searchCityForm = function() {
    const log = (i)=>console.log("\n", i, "\n");
    const formSearchCity = document.querySelector("#form-search-city");
    formSearchCity.addEventListener("submit", (0, _handleSearchCitySubmit.handleSearchCitySubmit));
};

},{"../events/handleSearchCitySubmit":"8UDx2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8UDx2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleSearchCitySubmit", ()=>handleSearchCitySubmit);
var _fetchWeatherData = require("./fetchWeatherData");
const handleSearchCitySubmit = function(ev) {
    const log = (i)=>console.log("\n", i, "\n");
    ev.preventDefault();
    const formSearchCityData = new FormData(this);
    const inputSearchCity = formSearchCityData.get("search-city").toString();
    (0, _fetchWeatherData.fetchWeatherData)(inputSearchCity);
};

},{"./fetchWeatherData":"hc3Zq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hc3Zq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchWeatherData", ()=>fetchWeatherData);
var _renderCurrent = require("../components/renderCurrent");
var _renderDaily = require("../components/renderDaily");
var _renderHourly = require("../components/renderHourly");
const fetchWeatherData = async function(cityName_) {
    const log = (i)=>console.log("\n", i, "\n");
    const apiKey = "10869cf72314716d5dac69e49cfcb7b7";
    const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName_}&limit=1&appid=${apiKey}`);
    const latAndLongResp = await geoResponse.json();
    const latAndLongObj = Object.fromEntries(latAndLongResp.reduce((acc, curr)=>{
        acc.set("name", curr.name);
        acc.set("lat", curr.lat);
        acc.set("lon", curr.lon);
        acc.set("country", curr.country);
        acc.set("state", curr.state);
        return acc;
    }, new Map()));
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latAndLongObj.lat}&lon=${latAndLongObj.lon}&units=metric&appid=${apiKey}`);
    const weatherData = await weatherResponse.json();
    JSON.stringify(weatherData);
    const current = weatherData.current;
    const minutely = weatherData.minutely;
    const hourly = weatherData.hourly;
    const daily = weatherData.daily;
    const timezone = {
        timezone: weatherData.timezone,
        timezone_offset: weatherData.timezone_offset
    };
    //render
    (0, _renderCurrent.renderCurrent)(latAndLongObj, current, hourly);
    (0, _renderHourly.renderHourly)(hourly);
    (0, _renderDaily.renderDaily)(daily);
};

},{"../components/renderCurrent":"hG8fc","../components/renderDaily":"cIjcA","../components/renderHourly":"hhEjo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hG8fc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderCurrent", ()=>renderCurrent);
var _elementCreators = require("../utilities/element-creators");
const renderCurrent = function(geoData_, current_, hourly_) {
    const log = (i)=>console.log("\n", i, "\n");
    //to find the highs and lows
    const temperatures = hourly_.map((temp)=>temp.temp).slice(0, 24);
    const high = Math.round(Math.max(...temperatures));
    const low = Math.round(Math.min(...temperatures));
    //capitalize the first letters of the phrase
    const description = current_.weather[0].description.split(" ").reduce((acc, curr)=>{
        curr = curr[0].toUpperCase() + curr.slice(1);
        acc = `${acc} ${curr}`;
        return acc;
    }, "");
    const currentContainer = document.querySelector(".currentContainer");
    //remove previously rendered contents
    const currentContainerChild = document.querySelector(".currentContainerInner");
    if (currentContainerChild) currentContainerChild.remove();
    //render new contents
    const currentContainerInner = (0, _elementCreators.elemCreator)("div")([
        "current",
        "currentContainerInner"
    ]);
    (0, _elementCreators.appendElemToParent)(currentContainer)(currentContainerInner);
    (0, _elementCreators.pipe)((0, _elementCreators.addTextToElem)(geoData_.name), (0, _elementCreators.appendElemToParent)(currentContainerInner))((0, _elementCreators.elemCreator)("h2")([
        "current",
        "current-cityName"
    ]));
    (0, _elementCreators.pipe)((0, _elementCreators.addTextToElem)(`${Math.round(current_.temp)}°`), (0, _elementCreators.appendElemToParent)(currentContainerInner))((0, _elementCreators.elemCreator)("h2")([
        "current",
        "current-temp"
    ]));
    (0, _elementCreators.pipe)((0, _elementCreators.addTextToElem)(description), (0, _elementCreators.appendElemToParent)(currentContainerInner))((0, _elementCreators.elemCreator)("h4")([
        "current",
        "current-desc"
    ]));
    (0, _elementCreators.pipe)((0, _elementCreators.addTextToElem)(`High: ${high}°`), (0, _elementCreators.appendElemToParent)(currentContainerInner))((0, _elementCreators.elemCreator)("h4")([
        "current",
        "current-high"
    ]));
    (0, _elementCreators.pipe)((0, _elementCreators.addTextToElem)(`Low: ${low}°`), (0, _elementCreators.appendElemToParent)(currentContainerInner))((0, _elementCreators.elemCreator)("h4")([
        "current",
        "current-low"
    ]));
};

},{"../utilities/element-creators":"ijWjs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ijWjs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "elemCreator", ()=>elemCreator);
parcelHelpers.export(exports, "appendElemToParent", ()=>appendElemToParent);
parcelHelpers.export(exports, "addTextToElem", ()=>addTextToElem);
parcelHelpers.export(exports, "addAttributeToElem", ()=>addAttributeToElem);
parcelHelpers.export(exports, "createImage", ()=>createImage);
parcelHelpers.export(exports, "addEvtListener", ()=>addEvtListener);
parcelHelpers.export(exports, "addStyleToElem", ()=>addStyleToElem);
parcelHelpers.export(exports, "pipe", ()=>pipe);
const elemCreator = (elem_)=>(class_)=>{
        const element = document.createElement(elem_);
        return class_.reduce((elem, currClass)=>{
            elem.classList.add(currClass);
            return elem;
        }, element);
    };
const addAttributeToElem = (attrVals_)=>(elem_)=>{
        return attrVals_.reduce((element, curr)=>{
            if (curr.length > 2) return undefined;
            element?.setAttribute(curr[0], curr[1]);
            return element;
        }, elem_);
    };
const addStyleToElem = (stylePropVals_)=>(elem_)=>{
        return stylePropVals_.reduce((element, curr)=>{
            if (curr.length > 2) return undefined;
            element?.style.setProperty(curr[0], curr[1]);
            return element;
        }, elem_);
    };
const addTextToElem = (text_)=>(elem_)=>{
        const textNode = document.createTextNode(text_);
        elem_?.appendChild(textNode);
        return elem_;
    };
const appendElemToParent = (parent_)=>(child_)=>{
        if (child_) parent_?.appendChild(child_);
    };
const createImage = (source_)=>(class_)=>(alt_)=>(title_)=>{
                const image = new Image();
                image.src = source_;
                image.alt = alt_;
                image.title = title_;
                return class_.reduce((elem, currClass)=>{
                    elem.classList.add(currClass);
                    return elem;
                }, image);
            };
const addEvtListener = (evt_)=>(handleEvt_)=>(elem_)=>{
            elem_?.addEventListener(evt_, handleEvt_);
            return elem_;
        };
const pipe = (...funcs)=>(value)=>funcs.reduce((res, func)=>func(res), value);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cIjcA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderDaily", ()=>renderDaily);
var _showDailyCarouselLeft = require("../events/showDailyCarouselLeft");
var _showDailyCarouselRight = require("../events/showDailyCarouselRight");
var _elementCreators = require("../utilities/element-creators");
var _renderDailyCard = require("./renderDailyCard");
const renderDaily = function(dailyArr_) {
    const log = (i)=>console.log("\n", i, "\n");
    const now = new Date();
    let day = now.getDay();
    const dailyContainer = document.querySelector(".dailyContainer");
    //remove previously rendered content
    const dailyContainerChild = document.querySelector(".dailyContainerInner");
    if (dailyContainerChild) dailyContainerChild.remove();
    //render new content
    const dailyContainerInner = (0, _elementCreators.elemCreator)("div")([
        "dailyContainerInner"
    ]);
    (0, _elementCreators.appendElemToParent)(dailyContainer)(dailyContainerInner);
    const ul = (0, _elementCreators.elemCreator)("ul")([
        "daily",
        "daily-ul",
        "slideshow-container"
    ]);
    (0, _elementCreators.appendElemToParent)(dailyContainerInner)(ul);
    dailyArr_.forEach((daily, index)=>{
        (0, _renderDailyCard.renderDailyCard)(daily, ul, index, day);
    });
    //carousel nav buttons
    (0, _elementCreators.pipe)((0, _elementCreators.addTextToElem)("<"), (0, _elementCreators.addEvtListener)("click")((0, _showDailyCarouselLeft.showDailyCarouselLeft)), (0, _elementCreators.appendElemToParent)(dailyContainerInner))((0, _elementCreators.elemCreator)("button")([
        "daily",
        "bttn-prev"
    ]));
    (0, _elementCreators.pipe)((0, _elementCreators.addTextToElem)(">"), (0, _elementCreators.addEvtListener)("click")((0, _showDailyCarouselRight.showDailyCarouselRight)), (0, _elementCreators.appendElemToParent)(dailyContainerInner))((0, _elementCreators.elemCreator)("button")([
        "daily",
        "bttn-next"
    ]));
};

},{"../events/showDailyCarouselLeft":"1JPmx","../events/showDailyCarouselRight":"kQFBk","../utilities/element-creators":"ijWjs","./renderDailyCard":"jK6z2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1JPmx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showDailyCarouselLeft", ()=>showDailyCarouselLeft);
var _showSlides = require("./showSlides");
const showDailyCarouselLeft = function(ev) {
    const log = (i)=>console.log("\n", i, "\n");
    if (!localStorage.getItem("dailySlideIndex")) localStorage.setItem("dailySlideIndex", JSON.stringify(1));
    let dailySlideIndex = JSON.parse(localStorage.getItem("dailySlideIndex"));
    dailySlideIndex--;
    localStorage.setItem("dailySlideIndex", JSON.stringify(dailySlideIndex));
    log(dailySlideIndex);
    (0, _showSlides.showSlides)(dailySlideIndex);
};

},{"./showSlides":"4uAMT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4uAMT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showSlides", ()=>showSlides);
const showSlides = function(index) {
    const slides = document.querySelectorAll(".daily-ul li");
    let dailySlideIndex = JSON.parse(localStorage.getItem("dailySlideIndex"));
    //loop around
    if (index > slides.length) {
        dailySlideIndex = 1;
        localStorage.setItem("dailySlideIndex", JSON.stringify(1));
    }
    if (index < 1) dailySlideIndex = slides.length;
    slides.forEach((slide)=>{
        slide.style.display = "none";
    });
    slides[dailySlideIndex - 1].style.display = "block";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kQFBk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showDailyCarouselRight", ()=>showDailyCarouselRight);
var _showSlides = require("./showSlides");
const showDailyCarouselRight = function(ev) {
    const log = (i)=>console.log("\n", i, "\n");
    if (!localStorage.getItem("dailySlideIndex")) localStorage.setItem("dailySlideIndex", JSON.stringify(1));
    let dailySlideIndex = JSON.parse(localStorage.getItem("dailySlideIndex"));
    dailySlideIndex++;
    localStorage.setItem("dailySlideIndex", JSON.stringify(dailySlideIndex));
    log(dailySlideIndex);
    (0, _showSlides.showSlides)(dailySlideIndex);
};

},{"./showSlides":"4uAMT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jK6z2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderDailyCard", ()=>renderDailyCard);
var _elementCreators = require("../utilities/element-creators");
var _showSlides = require("../events/showSlides");
const renderDailyCard = function(daily_, container_, index_, day_) {
    const tempDaily = {
        dt: 1654254000,
        sunrise: 1654228066,
        sunset: 1654286990,
        moonrise: 1654237920,
        moonset: 1654211880,
        moon_phase: 0.12,
        temp: {
            day: 21.39,
            min: 10.47,
            max: 22.1,
            night: 16.2,
            eve: 18.96,
            morn: 11.13
        },
        feels_like: {
            day: 20.63,
            night: 15.52,
            eve: 18.27,
            morn: 10.54
        },
        pressure: 1017,
        humidity: 40,
        dew_point: 7.04,
        wind_speed: 5.72,
        wind_deg: 68,
        wind_gust: 12.78,
        weather: [
            {
                id: 801,
                main: "Clouds",
                description: "few clouds",
                icon: "02d"
            }
        ],
        clouds: 12,
        pop: 0.08,
        uvi: 6.36
    };
    const daysMap = new Map([
        [
            0,
            "Sunday"
        ],
        [
            1,
            "Monday"
        ],
        [
            2,
            "Tuesday"
        ],
        [
            3,
            "Wednesday"
        ],
        [
            4,
            "Thursday"
        ],
        [
            5,
            "Friday"
        ],
        [
            6,
            "Saturday"
        ], 
    ]);
    //capitalizes first letters of phrase
    const description = daily_.weather[0].description.split(" ").reduce((acc, curr)=>{
        curr = curr[0].toUpperCase() + curr.slice(1);
        acc = `${acc} ${curr}`;
        return acc;
    }, "");
    const li = (0, _elementCreators.elemCreator)("li")([
        "daily",
        `daily-li${index_}`
    ]);
    (0, _elementCreators.appendElemToParent)(container_)(li);
    const dailyCard = (0, _elementCreators.elemCreator)("div")([
        "daily",
        "daily-card",
        "slides",
        "fade"
    ]);
    (0, _elementCreators.appendElemToParent)(li)(dailyCard);
    (0, _elementCreators.pipe)((0, _elementCreators.addTextToElem)(`${day_ + index_ < 7 ? daysMap.get(day_ + index_) : daysMap.get(day_ + index_ - 7)}`), (0, _elementCreators.appendElemToParent)(dailyCard))((0, _elementCreators.elemCreator)("h5")([
        "daily",
        "daily-day"
    ]));
    (0, _elementCreators.pipe)((0, _elementCreators.addTextToElem)(`High: ${Math.round(daily_.temp.max)}°`), (0, _elementCreators.appendElemToParent)(dailyCard))((0, _elementCreators.elemCreator)("h5")([
        "daily",
        "daily-high"
    ]));
    (0, _elementCreators.pipe)((0, _elementCreators.addTextToElem)(`Low: ${Math.round(daily_.temp.min)}°`), (0, _elementCreators.appendElemToParent)(dailyCard))((0, _elementCreators.elemCreator)("h5")([
        "daily",
        "daily-low"
    ]));
    (0, _elementCreators.pipe)((0, _elementCreators.appendElemToParent)(dailyCard))((0, _elementCreators.createImage)(`http://openweathermap.org/img/wn/${daily_.weather[0].icon}@2x.png`)([
        "daily",
        "daily-icon", 
    ])(`icon representing ${daily_.weather[0].description}`)(`${description}`));
    (0, _elementCreators.pipe)((0, _elementCreators.addTextToElem)(`${description}`), (0, _elementCreators.appendElemToParent)(dailyCard))((0, _elementCreators.elemCreator)("h5")([
        "daily",
        "daily-desc"
    ]));
    //sets the initial slide index
    const setIndex = (()=>{
        if (!localStorage.getItem("dailySlideIndex")) localStorage.setItem("dailySlideIndex", JSON.stringify(1));
        let dailySlideIndex = JSON.parse(localStorage.getItem("dailySlideIndex"));
        (0, _showSlides.showSlides)(dailySlideIndex);
    })();
};

},{"../utilities/element-creators":"ijWjs","../events/showSlides":"4uAMT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hhEjo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderHourly", ()=>renderHourly);
var _elementCreators = require("../utilities/element-creators");
var _renderHourlyCard = require("./renderHourlyCard");
const renderHourly = function(hourly_) {
    const log = (i)=>console.log("\n", i, "\n");
    const tempHourly = {
        dt: 1654279200,
        temp: 18.69,
        feels_like: 18.02,
        pressure: 1018,
        humidity: 54,
        dew_point: 9.2,
        uvi: 0.51,
        clouds: 84,
        visibility: 10000,
        wind_speed: 5.37,
        wind_deg: 63,
        wind_gust: 8.13,
        weather: [
            {
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
            }
        ],
        pop: 0.02
    };
    const now = new Date();
    let hours = now.getHours();
    let hoursTime = [
        hours,
        `${hours < 13 ? "AM" : "PM"}`
    ];
    const hourlyContainer = document.querySelector(".hourlyContainer");
    //remove previously rendered contents
    const hourlyContainerChild = document.querySelector(".hourlyContainerInner");
    if (hourlyContainerChild) hourlyContainerChild.remove();
    //render new contents
    const hourlyContainerInner = (0, _elementCreators.elemCreator)("div")([
        "hourly",
        "hourlyContainerInner"
    ]);
    (0, _elementCreators.appendElemToParent)(hourlyContainer)(hourlyContainerInner);
    const ul = (0, _elementCreators.elemCreator)("ul")([
        "hourly",
        "hourly-ul"
    ]);
    (0, _elementCreators.appendElemToParent)(hourlyContainerInner)(ul);
    //render hourly cards
    hourly_.forEach((hourInfo, index)=>{
        (0, _renderHourlyCard.renderHourlyCard)(hourInfo, ul, index, hoursTime);
    });
};

},{"../utilities/element-creators":"ijWjs","./renderHourlyCard":"55P5C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"55P5C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderHourlyCard", ()=>renderHourlyCard);
var _elementCreators = require("../utilities/element-creators");
var _getHours = require("./getHours");
const renderHourlyCard = function(hourly_, container_, index_, hours_) {
    const log = (i)=>console.log("\n", i, "\n");
    const description = hourly_.weather[0].description.split(" ").reduce((acc, curr)=>{
        curr = curr[0].toUpperCase() + curr.slice(1);
        acc = `${acc} ${curr}`;
        return acc;
    }, "");
    const li = (0, _elementCreators.elemCreator)("li")([
        "hourly",
        `hourly-li${index_}`
    ]);
    (0, _elementCreators.appendElemToParent)(container_)(li);
    const hourlyCard = (0, _elementCreators.elemCreator)("div")([
        "hourly",
        "hourly-card"
    ]);
    (0, _elementCreators.appendElemToParent)(li)(hourlyCard);
    //grab the correctly formatted 12-hr time
    const hoursTime = (0, _getHours.getHours)(hours_, index_);
    (0, _elementCreators.pipe)((0, _elementCreators.addTextToElem)(hoursTime), (0, _elementCreators.appendElemToParent)(hourlyCard))((0, _elementCreators.elemCreator)("h5")([
        "hourly",
        "hourly-time"
    ]));
    (0, _elementCreators.pipe)((0, _elementCreators.appendElemToParent)(hourlyCard))((0, _elementCreators.createImage)(`http://openweathermap.org/img/wn/${hourly_.weather[0].icon}@2x.png`)([
        "hourly",
        "hourly-icon", 
    ])(`icon representing ${hourly_.weather[0].description}`)(`${description}`));
    (0, _elementCreators.pipe)((0, _elementCreators.addTextToElem)(`${hourly_.weather[0].description}`), (0, _elementCreators.appendElemToParent)(hourlyCard))((0, _elementCreators.elemCreator)("h5")([
        "hourly",
        "hourly-desc"
    ]));
    (0, _elementCreators.pipe)((0, _elementCreators.addTextToElem)(`${Math.round(hourly_.temp)}°`), (0, _elementCreators.appendElemToParent)(hourlyCard))((0, _elementCreators.elemCreator)("h4")([
        "hourly",
        "hourly-temp"
    ]));
};

},{"../utilities/element-creators":"ijWjs","./getHours":"6Geb2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Geb2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getHours", ()=>getHours);
const getHours = function(hours_, index_) {
    let hours = (hours_[0] + 11) % 12 + 1 + index_;
    let hoursTime;
    //not very elegant but it works...up to 48 hrs
    if (hours_[1] === "PM") {
        if (hours <= 12) hoursTime = `${hours} ${hours_[1]}`;
        else //hours > 12 and <= 24
        if (hours <= 24) {
            hours = hours - 12;
            hoursTime = `${hours} AM`;
        } else {
            if (hours > 24 && hours <= 36) {
                hours = hours - 24;
                hoursTime = `${hours} ${hours_[1]}`;
            } else if (hours > 36 && hours <= 48) {
                hours = hours - 36;
                hoursTime = `${hours} AM`;
            } else if (hours > 48 && hours <= 60) {
                hours = hours - 48;
                hoursTime = `${hours} ${hours_[1]}`;
            }
        }
    } else if (hours_[1] === "AM") {
        if (hours <= 12) hoursTime = `${hours} ${hours_[1]}`;
        else //hours > 12 and <= 24
        if (hours <= 24) {
            hours = hours - 12;
            hoursTime = `${hours} PM`;
        } else {
            if (hours > 24 && hours <= 36) {
                hours = hours - 24;
                hoursTime = `${hours} ${hours_[1]}`;
            } else if (hours > 36 && hours <= 48) {
                hours = hours - 36;
                hoursTime = `${hours} PM`;
            } else if (hours > 48 && hours <= 60) {
                hours = hours - 48;
                hoursTime = `${hours} ${hours_[1]}`;
            }
        }
    }
    return hoursTime;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hwSkd","gg0zR"], "gg0zR", "parcelRequirebbde")

//# sourceMappingURL=index.54632f9a.js.map
