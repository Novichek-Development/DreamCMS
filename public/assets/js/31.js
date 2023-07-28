(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tops.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Tops.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./resources/js/api/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Tops",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['isLogged', 'servers'])),
  data: function data() {
    return {
      loading: true,
      top: 'votes',
      tops: [{
        type: 'votes',
        name: 'По голосам'
      }, {
        type: 'money',
        name: 'По балансу'
      }],
      pagination: {
        current_page: 1,
        total: 0,
        per_page: 10
      },
      server: null,
      topVotes: false,
      topMoney: false
    };
  },
  mounted: function mounted() {
    this.loadTop();
  },
  methods: {
    loadTop: function loadTop() {
      if (this.top === 'votes') {
        this.loadTopVotes();
      } else {
        if (this.server) {
          this.loadTopMoney();
        }
      }
    },
    loadTopVotes: function loadTopVotes() {
      var _this = this;
      this.loading = true;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('top/votes').then(function (response) {
        if (response.data.success) {
          _this.topVotes = response.data.data;
        }

        // this.pagination.current_page = response.data.current_page;
        // this.pagination.last_page = response.data.last_page;
        // this.pagination.per_page = response.data.per_page;
        // this.pagination.total = response.data.total;

        _this.loading = false;
      })["catch"](function (error) {
        console.error(error);
      });
    },
    loadTopMoney: function loadTopMoney() {
      var _this2 = this;
      this.loading = true;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('top/money', {
        server: this.server
      }).then(function (response) {
        if (response.data.success) {
          _this2.topMoney = response.data.data;
        }
        _this2.loading = false;
      })["catch"](function (error) {
        console.error(error);
      });
    }
  },
  watch: {
    'top': function top(newVal) {
      this.loadTop();
    },
    'pagination.current_page': function paginationCurrent_page() {
      this.loadTop();
    },
    'server': function server() {
      this.loadTop();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tops.vue?vue&type=template&id=eae1f472&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Tops.vue?vue&type=template&id=eae1f472&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    "class": "inner " + (_vm.loading ? "unload" : "")
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "banlist mt-5"
  }, [_c("div", {
    staticClass: "section primary search"
  }, [_c("div", {
    staticClass: "row align-items-center"
  }, [_c("i", {
    staticClass: "fal fa-search d-none d-sm-block"
  }), _vm._v(" "), _c("b-select", {
    staticClass: "col form-control mr-3",
    attrs: {
      options: _vm.tops,
      "value-field": "type",
      "text-field": "name"
    },
    model: {
      value: _vm.top,
      callback: function callback($$v) {
        _vm.top = $$v;
      },
      expression: "top"
    }
  }), _vm._v(" "), _vm.top === "money" ? _c("b-select", {
    staticClass: "col form-control",
    attrs: {
      options: _vm.servers,
      "value-field": "id",
      "text-field": "name"
    },
    model: {
      value: _vm.server,
      callback: function callback($$v) {
        _vm.server = $$v;
      },
      expression: "server"
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _vm.top === "votes" && _vm.topVotes ? _c("div", {
    staticClass: "section spreadsheet mt-3"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "body"
  }, _vm._l(_vm.topVotes, function (topUser, index) {
    return _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-12 col-sm-4 col-md"
    }, [_vm._v("\n                            " + _vm._s(index + 1) + "\n                        ")]), _vm._v(" "), _c("div", {
      staticClass: "col-12 col-sm-4 col-md"
    }, [_c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: topUser.login
          }
        }
      }
    }, [_c("div", {
      staticClass: "user_pic"
    }, [_c("img", {
      attrs: {
        src: _vm.getHeadUrl(topUser.uuid),
        alt: ""
      }
    })]), _vm._v("\n                                " + _vm._s(topUser.login) + "\n                            ")])], 1), _vm._v(" "), _c("div", {
      staticClass: "col-12 col-sm-4 col-md"
    }, [_vm._v("\n                            " + _vm._s(_vm.readableNum(topUser.total)) + "\n                        ")])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.top === "money" && _vm.topMoney ? _c("div", {
    staticClass: "section spreadsheet mt-3"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "body"
  }, _vm._l(_vm.topVotes, function (topUser, index) {
    return _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-12 col-sm-4 col-md"
    }, [_vm._v("\n                            " + _vm._s(index + 1) + "\n                        ")]), _vm._v(" "), _c("div", {
      staticClass: "col-12 col-sm-4 col-md"
    }, [_c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: topUser.login
          }
        }
      }
    }, [_c("div", {
      staticClass: "user_pic"
    }, [_c("img", {
      attrs: {
        src: _vm.getHeadUrl(topUser.uuid),
        alt: ""
      }
    })]), _vm._v("\n                                " + _vm._s(topUser.login) + "\n                            ")])], 1), _vm._v(" "), _c("div", {
      staticClass: "col-12 col-sm-4 col-md"
    }, [_vm._v("\n                            " + _vm._s(_vm.readableNum(topUser.top_money)) + "\n                        ")])]);
  }), 0)]) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "headline"
  }, [_c("h2", [_vm._v("Топ игроков")]), _vm._v(" "), _c("p", [_vm._v("Здесь представлен перечень пользователей для ознакомления ;)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "head d-none d-sm-block"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-4 col-md"
  }, [_vm._v("Место")]), _vm._v(" "), _c("div", {
    staticClass: "col-4 col-md"
  }, [_vm._v("Игрок")]), _vm._v(" "), _c("div", {
    staticClass: "col-4 col-md"
  }, [_vm._v("Всего голосов")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "head d-none d-sm-block"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-4 col-md"
  }, [_vm._v("Место")]), _vm._v(" "), _c("div", {
    staticClass: "col-4 col-md"
  }, [_vm._v("Игрок")]), _vm._v(" "), _c("div", {
    staticClass: "col-4 col-md"
  }, [_vm._v("Баланс")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/Tops.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Tops.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tops_vue_vue_type_template_id_eae1f472_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tops.vue?vue&type=template&id=eae1f472&scoped=true& */ "./resources/js/pages/Tops.vue?vue&type=template&id=eae1f472&scoped=true&");
/* harmony import */ var _Tops_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tops.vue?vue&type=script&lang=js& */ "./resources/js/pages/Tops.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tops_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tops_vue_vue_type_template_id_eae1f472_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tops_vue_vue_type_template_id_eae1f472_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "eae1f472",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Tops.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Tops.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Tops.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tops_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Tops.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tops.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tops_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Tops.vue?vue&type=template&id=eae1f472&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Tops.vue?vue&type=template&id=eae1f472&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Tops_vue_vue_type_template_id_eae1f472_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Tops.vue?vue&type=template&id=eae1f472&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Tops.vue?vue&type=template&id=eae1f472&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Tops_vue_vue_type_template_id_eae1f472_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Tops_vue_vue_type_template_id_eae1f472_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);