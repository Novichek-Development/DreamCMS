(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Container.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Container.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./resources/js/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

//import moment from "moment";

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Container",
  data: function data() {
    return {
      selected: false
    };
  },
  created: function created() {
    this.$store.dispatch(_api__WEBPACK_IMPORTED_MODULE_1__["FORUM_LOAD_LATEST"]);
  },
  methods: {
    stripHTML: function stripHTML(msg) {
      var regex = /(<([^>]+)>)/ig;
      var string = msg.replace(regex, "");
      var trimmedString = string.length > 96 ? string.substring(0, 93) + "..." : string;
      return trimmedString;
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['isLogged', 'servers', 'lastPosts', 'record'])), {}, {
    branches: function branches() {
      var branches = {};
      for (var _i = 0, _Object$entries = Object.entries(this.servers); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          id = _Object$entries$_i[0],
          serv = _Object$entries$_i[1];
        var branch = serv.name.split(' ')[0];
        branches[branch] = {
          online: 0,
          maxonline: 0,
          servers: []
        };
      }
      for (var _i2 = 0, _Object$entries2 = Object.entries(this.servers); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          _id = _Object$entries2$_i[0],
          _serv = _Object$entries2$_i[1];
        var branch = _serv.name.split(' ')[0];
        branches[branch].online += _serv.online;
        branches[branch].maxonline += _serv.maxonline;
        branches[branch].version = _serv.version;
        branches[branch].servers.push(_serv);
      }
      return branches;
    },
    totalOnline: function totalOnline() {
      var online = 0;
      for (var _i3 = 0, _Object$entries3 = Object.entries(this.branches); _i3 < _Object$entries3.length; _i3++) {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
          name = _Object$entries3$_i[0],
          branch = _Object$entries3$_i[1];
        branch.servers.forEach(function (server) {
          online += server.online;
        });
      }
      return online;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Container.vue?vue&type=template&id=166afb53&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Container.vue?vue&type=template&id=166afb53&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "middle"
    }
  }, [_c("div", {
    staticClass: "wrapper"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col mr-lg-4"
  }, [_c("router-view")], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6 col-lg-5 col-xl-3 pl-lg-0"
  }, [_vm.isLogged ? _c("router-link", {
    staticClass: "btn_large primary mb-3",
    attrs: {
      to: {
        name: "page",
        params: {
          name: "download"
        }
      }
    }
  }, [_c("span", [_vm._v("Скачать лаунчер")]), _vm._v(" "), _c("small", [_vm._v("Начни игру всего в пару кликов!")])]) : _c("router-link", {
    staticClass: "btn_large success mb-3",
    attrs: {
      to: {
        name: "page",
        params: {
          name: "start"
        }
      }
    }
  }, [_c("span", [_vm._v("Начать играть!")]), _vm._v(" "), _c("small", [_vm._v("Начни игру всего в пару кликов!")])]), _vm._v(" "), _c("div", {
    staticClass: "quarter mt-5"
  }, [_c("h3", [_vm._v("Наши сервера")]), _vm._v(" "), _c("div", {
    staticClass: "content servers"
  }, [_c("ul", _vm._l(_vm.branches, function (branch, name) {
    return _c("li", [_c("a", {
      staticClass: "btn_common",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          _vm.selected && _vm.selected === name ? _vm.selected = false : _vm.selected = name;
        }
      }
    }, [_c("div", {
      staticClass: "heading"
    }, [_c("div", {
      staticClass: "h4"
    }, [_vm._v("\n                                                " + _vm._s(name) + "\n                                                "), branch.maxonline > 0 ? _c("small", [_vm._v(_vm._s(branch.servers.length) + " " + _vm._s(_vm.declOfNum(branch.servers.length, ["сервер", "сервера", "серверов"])) + " [v" + _vm._s(branch.version) + "]")]) : _c("small", [_vm._v("Недоступен")])]), _vm._v(" "), branch.maxonline > 0 ? _c("div", {
      staticClass: "online"
    }, [_c("b", [_vm._v(_vm._s(branch.online))]), _vm._v(" из " + _vm._s(branch.maxonline) + "\n                                            ")]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "branches",
      style: "display: " + (_vm.selected && _vm.selected === name ? "block" : "none") + ";"
    }, _vm._l(branch.servers, function (server) {
      return _c("div", {
        staticClass: "row align-items-center"
      }, [_c("div", {
        staticClass: "h5"
      }, [_vm._v(_vm._s(server.name))]), _vm._v(" "), server.maxonline > 0 ? _c("div", {
        staticClass: "lot"
      }, [_vm._v(_vm._s(server.online))]) : _c("div", {
        staticClass: "lot"
      }, [_vm._v("N/A")]), _vm._v(" "), _c("div", {
        staticClass: "col-12 bar"
      }, [_c("div", {
        staticClass: "process",
        style: "width: " + server.online / server.maxonline * 100 + "%;"
      })])]);
    }), 0)])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "row total align-items-center"
  }, [_c("h5", {
    staticClass: "col-6 pr-1"
  }, [_vm._v("\n                                    " + _vm._s(_vm.readableNum(_vm.totalOnline)) + "\n                                    "), _c("small", [_vm._v("Всего игроков")])]), _vm._v(" "), _c("h5", {
    staticClass: "col-6 pl-1"
  }, [_vm._v("\n                                    " + _vm._s(_vm.readableNum(Math.max(_vm.record, _vm.totalOnline))) + "\n                                    "), _c("small", [_vm._v("Рекорд дня")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "quarter mt-5"
  }, [_c("div", {
    staticClass: "content"
  }, [_c("h4", [_vm._v("Последние ответы")]), _vm._v(" "), _c("ul", _vm._l(_vm.lastPosts, function (post) {
    return _c("li", [_c("router-link", {
      staticClass: "small",
      attrs: {
        to: {
          name: "discussion",
          params: {
            slug: post.discussion.slug
          }
        }
      }
    }, [_vm._v(_vm._s(post.discussion.title))]), _vm._v(" "), _c("router-link", {
      staticClass: "title",
      attrs: {
        to: {
          name: "discussion",
          params: {
            slug: post.discussion.slug
          }
        }
      }
    }, [_vm._v(_vm._s(_vm.stripHTML(post.body)))]), _vm._v(" "), _c("div", {
      staticClass: "small"
    }, [_vm._v("От "), _c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: post.user.login
          }
        }
      }
    }, [_vm._v(_vm._s(post.user.login))]), _vm._v(" " + _vm._s(_vm.humanDiff(post.created_at)) + " назад")], 1)], 1);
  }), 0)])])], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/Container.vue":
/*!************************************!*\
  !*** ./resources/js/Container.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Container_vue_vue_type_template_id_166afb53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container.vue?vue&type=template&id=166afb53&scoped=true& */ "./resources/js/Container.vue?vue&type=template&id=166afb53&scoped=true&");
/* harmony import */ var _Container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container.vue?vue&type=script&lang=js& */ "./resources/js/Container.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Container_vue_vue_type_template_id_166afb53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Container_vue_vue_type_template_id_166afb53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "166afb53",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Container.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Container.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/Container.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./Container.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Container.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Container.vue?vue&type=template&id=166afb53&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Container.vue?vue&type=template&id=166afb53&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Container_vue_vue_type_template_id_166afb53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??vue-loader-options!./Container.vue?vue&type=template&id=166afb53&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Container.vue?vue&type=template&id=166afb53&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Container_vue_vue_type_template_id_166afb53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Container_vue_vue_type_template_id_166afb53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);