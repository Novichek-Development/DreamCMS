(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/ForumContainer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/ForumContainer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./resources/js/api/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ForumContainer",
  data: function data() {
    return {
      interval: false
    };
  },
  created: function created() {
    var _this = this;
    this.$store.dispatch(_api__WEBPACK_IMPORTED_MODULE_1__["FORUM_LOAD"]);
    this.$store.dispatch(_api__WEBPACK_IMPORTED_MODULE_1__["FORUM_LOAD_LATEST"]);
    this.$store.dispatch(_api__WEBPACK_IMPORTED_MODULE_1__["FORUM_LOAD_LEADERS"]);
    this.$store.dispatch(_api__WEBPACK_IMPORTED_MODULE_1__["FORUM_LOAD_POPULARS"]);
    this.$socket.emit('forum.online');
    this.interval = setInterval(function () {
      _this.$socket.emit('forum.online');
    }, 30000);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['isLogged', 'lastPosts', 'leaders', 'populars']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/ForumContainer.vue?vue&type=template&id=cb8b5304&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/ForumContainer.vue?vue&type=template&id=cb8b5304&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "forum"
  }, [_c("div", {
    staticClass: "row breadcrumbs"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("ul", [_c("li", [_c("router-link", {
    staticClass: "btn_common primary",
    attrs: {
      to: {
        name: "forum"
      }
    }
  }, [_vm._v("Форум")])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-7 text-right"
  }, [_c("router-link", {
    staticClass: "btn_common dark",
    attrs: {
      to: {
        name: "forum_search"
      }
    }
  }, [_vm._v("Поиск... "), _c("i", {
    staticClass: "fas fa-search fa-sm ml-2"
  })])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-lg"
  }, [_c("router-view")], 1), _vm._v(" "), _c("div", {
    staticClass: "col col-lg-4 col-xl-3 mt-5 mt-lg-0"
  }, [_c("div", {
    staticClass: "widget"
  }, [_c("h3", [_vm._v("Последние ответы")]), _vm._v(" "), _c("ul", {
    staticClass: "widget_list"
  }, _vm._l(_vm.lastPosts, function (post) {
    return _c("li", [_c("router-link", {
      staticClass: "user_pic",
      attrs: {
        to: {
          name: "user",
          params: {
            login: post.user.login
          }
        }
      }
    }, [_c("img", {
      attrs: {
        src: _vm.getHeadUrl(post.user.uuid),
        alt: ""
      }
    })]), _vm._v(" "), _c("h4", [_c("router-link", {
      attrs: {
        to: {
          name: "discussion",
          params: {
            slug: post.discussion.slug
          }
        }
      }
    }, [_vm._v(_vm._s(post.discussion.title))]), _vm._v(" "), _c("small", [_c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: post.user.login
          }
        }
      }
    }, [_vm._v(_vm._s(post.user.login))]), _vm._v(", " + _vm._s(_vm.humanDiff(post.created_at)) + " назад\n                                        ")], 1)], 1)], 1);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "widget"
  }, [_c("h3", [_vm._v("Лидеры сообщества")]), _vm._v(" "), _c("ul", {
    staticClass: "widget_list"
  }, _vm._l(_vm.leaders, function (leader, key) {
    return _c("li", [_c("router-link", {
      staticClass: "user_pic",
      attrs: {
        to: {
          name: "user",
          params: {
            login: leader.login
          }
        }
      }
    }, [_c("img", {
      attrs: {
        src: _vm.getHeadUrl(leader.uuid),
        alt: ""
      }
    })]), _vm._v(" "), _c("h4", [_c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: leader.login
          }
        }
      }
    }, [_vm._v(_vm._s(leader.login))]), _vm._v(" "), _c("small", [_vm._v(_vm._s(_vm.readableNum(leader.posts)) + " сообщений")])], 1), _vm._v(" "), _c("span", {
      staticClass: "stage"
    }, [_vm._v(_vm._s(key + 1))])], 1);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "widget"
  }, [_c("h3", [_vm._v("Популярные авторы")]), _vm._v(" "), _c("ul", {
    staticClass: "widget_list"
  }, _vm._l(_vm.populars, function (user, key) {
    return _c("li", [_c("router-link", {
      staticClass: "user_pic",
      attrs: {
        to: {
          name: "user",
          params: {
            login: user.login
          }
        }
      }
    }, [_c("img", {
      attrs: {
        src: _vm.getHeadUrl(user.uuid),
        alt: ""
      }
    })]), _vm._v(" "), _c("h4", [_c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: user.login
          }
        }
      }
    }, [_vm._v("\n                                            " + _vm._s(user.login) + "\n                                        ")]), _vm._v(" "), _c("small", [_vm._v("+" + _vm._s(user.reputation) + " репутации")])], 1), _vm._v(" "), _c("span", {
      staticClass: "stage"
    }, [_vm._v(_vm._s(key + 1))])], 1);
  }), 0)])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/ForumContainer.vue":
/*!*****************************************!*\
  !*** ./resources/js/ForumContainer.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForumContainer_vue_vue_type_template_id_cb8b5304_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForumContainer.vue?vue&type=template&id=cb8b5304&scoped=true& */ "./resources/js/ForumContainer.vue?vue&type=template&id=cb8b5304&scoped=true&");
/* harmony import */ var _ForumContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForumContainer.vue?vue&type=script&lang=js& */ "./resources/js/ForumContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForumContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForumContainer_vue_vue_type_template_id_cb8b5304_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForumContainer_vue_vue_type_template_id_cb8b5304_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cb8b5304",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ForumContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/ForumContainer.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/ForumContainer.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./ForumContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/ForumContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ForumContainer.vue?vue&type=template&id=cb8b5304&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/ForumContainer.vue?vue&type=template&id=cb8b5304&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumContainer_vue_vue_type_template_id_cb8b5304_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??vue-loader-options!./ForumContainer.vue?vue&type=template&id=cb8b5304&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/ForumContainer.vue?vue&type=template&id=cb8b5304&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumContainer_vue_vue_type_template_id_cb8b5304_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumContainer_vue_vue_type_template_id_cb8b5304_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);