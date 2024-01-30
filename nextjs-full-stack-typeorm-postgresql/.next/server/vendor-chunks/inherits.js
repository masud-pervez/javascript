"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/inherits";
exports.ids = ["vendor-chunks/inherits"];
exports.modules = {

/***/ "(rsc)/./node_modules/inherits/inherits.js":
/*!*******************************************!*\
  !*** ./node_modules/inherits/inherits.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\ntry {\n    var util = __webpack_require__(/*! util */ \"util\");\n    /* istanbul ignore next */ if (typeof util.inherits !== \"function\") throw \"\";\n    module.exports = util.inherits;\n} catch (e) {\n    /* istanbul ignore next */ module.exports = __webpack_require__(/*! ./inherits_browser.js */ \"(rsc)/./node_modules/inherits/inherits_browser.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQUk7SUFDRixJQUFJQSxPQUFPQyxtQkFBT0EsQ0FBQztJQUNuQix3QkFBd0IsR0FDeEIsSUFBSSxPQUFPRCxLQUFLRSxRQUFRLEtBQUssWUFBWSxNQUFNO0lBQy9DQyxPQUFPQyxPQUFPLEdBQUdKLEtBQUtFLFFBQVE7QUFDaEMsRUFBRSxPQUFPRyxHQUFHO0lBQ1Ysd0JBQXdCLEdBQ3hCRixzSEFBeUI7QUFDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHMuanM/NzI2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJ0cnkge1xuICB2YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKHR5cGVvZiB1dGlsLmluaGVyaXRzICE9PSAnZnVuY3Rpb24nKSB0aHJvdyAnJztcbiAgbW9kdWxlLmV4cG9ydHMgPSB1dGlsLmluaGVyaXRzO1xufSBjYXRjaCAoZSkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaW5oZXJpdHNfYnJvd3Nlci5qcycpO1xufVxuIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiaW5oZXJpdHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/inherits/inherits.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/***/ ((module) => {

eval("\nif (typeof Object.create === \"function\") {\n    // implementation from standard node.js 'util' module\n    module.exports = function inherits(ctor, superCtor) {\n        if (superCtor) {\n            ctor.super_ = superCtor;\n            ctor.prototype = Object.create(superCtor.prototype, {\n                constructor: {\n                    value: ctor,\n                    enumerable: false,\n                    writable: true,\n                    configurable: true\n                }\n            });\n        }\n    };\n} else {\n    // old school shim for old browsers\n    module.exports = function inherits(ctor, superCtor) {\n        if (superCtor) {\n            ctor.super_ = superCtor;\n            var TempCtor = function() {};\n            TempCtor.prototype = superCtor.prototype;\n            ctor.prototype = new TempCtor();\n            ctor.prototype.constructor = ctor;\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxPQUFPQSxPQUFPQyxNQUFNLEtBQUssWUFBWTtJQUN2QyxxREFBcUQ7SUFDckRDLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxTQUFTQyxJQUFJLEVBQUVDLFNBQVM7UUFDaEQsSUFBSUEsV0FBVztZQUNiRCxLQUFLRSxNQUFNLEdBQUdEO1lBQ2RELEtBQUtHLFNBQVMsR0FBR1IsT0FBT0MsTUFBTSxDQUFDSyxVQUFVRSxTQUFTLEVBQUU7Z0JBQ2xEQyxhQUFhO29CQUNYQyxPQUFPTDtvQkFDUE0sWUFBWTtvQkFDWkMsVUFBVTtvQkFDVkMsY0FBYztnQkFDaEI7WUFDRjtRQUNGO0lBQ0Y7QUFDRixPQUFPO0lBQ0wsbUNBQW1DO0lBQ25DWCxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsU0FBU0MsSUFBSSxFQUFFQyxTQUFTO1FBQ2hELElBQUlBLFdBQVc7WUFDYkQsS0FBS0UsTUFBTSxHQUFHRDtZQUNkLElBQUlRLFdBQVcsWUFBYTtZQUM1QkEsU0FBU04sU0FBUyxHQUFHRixVQUFVRSxTQUFTO1lBQ3hDSCxLQUFLRyxTQUFTLEdBQUcsSUFBSU07WUFDckJULEtBQUtHLFNBQVMsQ0FBQ0MsV0FBVyxHQUFHSjtRQUMvQjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcz9lM2M2Il0sInNvdXJjZXNDb250ZW50IjpbImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGlmIChzdXBlckN0b3IpIHtcbiAgICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgaWYgKHN1cGVyQ3Rvcikge1xuICAgICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJjcmVhdGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW5oZXJpdHMiLCJjdG9yIiwic3VwZXJDdG9yIiwic3VwZXJfIiwicHJvdG90eXBlIiwiY29uc3RydWN0b3IiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsIlRlbXBDdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/inherits/inherits_browser.js\n");

/***/ })

};
;