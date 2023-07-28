(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Pay.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Pay.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./resources/js/api/index.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Pay",
  components: {
    Loader: _components_Loader__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.load();
  },
  data: function data() {
    return {
      loading: true,
      user: {},
      sum: null
    };
  },
  methods: {
    load: function load() {
      var _this = this;
      this.loading = true;
      if (this.$route.query.username) {
        _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('core/user/find?login=' + this.$route.query.username).then(function (response) {
          if (response.data.success) {
            _this.user = response.data.user;
            _this.loading = false;
          }
        });
      }
      if (this.$route.query.uuid) {
        this.user = {
          uuid: this.$route.query.uuid
        };
        this.loading = false;
      }
      if (this.$route.query.sum) {
        this.sum = parseInt(this.$route.query.sum);
      }
    },
    skinpay: function skinpay() {
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('pay/skinpay', {
        account: this.user.uuid
      }).then(function (response) {
        if (response.data.url) {
          window.location = response.data.url;
        }
      });
    },
    obmenka: function obmenka() {
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('pay/obmenka', {
        account: this.user.uuid,
        sum: this.sum
      }).then(function (response) {
        if (response.data.url) {
          window.location = response.data.url;
        }
      });
    },
    enot: function enot() {
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('pay/enot', {
        account: this.user.uuid,
        sum: this.sum
      }).then(function (response) {
        if (response.data.url) {
          window.location = response.data.url;
        }
      });
    },
    digiseller: function digiseller() {
      var data = {
        id_d: 3086435,
        typecurr: 'WMR',
        lang: 'ru-RU',
        failpage: 'https://' + window.location.hostname + '/page/failed',
        unit_cnt: Math.round(this.sum),
        uuid: this.user.uuid
      };
      this.submit({
        method: 'POST',
        path: 'https://oplata.info/asp2/pay.asp',
        data: data
      });
    },
    makeElement: function makeElement(tagName, attributes) {
      var element = document.createElement(tagName);
      Object.assign(element, attributes);
      for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
      }
      for (var _i = 0, _children = children; _i < _children.length; _i++) {
        var child = _children[_i];
        element.appendChild(child);
      }
      return element;
    },
    submit: function submit(_ref) {
      var _this2 = this;
      var _ref$method = _ref.method,
        method = _ref$method === void 0 ? 'POST' : _ref$method,
        path = _ref.path,
        data = _ref.data;
      var form = this.makeElement.apply(this, ['form', {
        action: path,
        method: method
      }].concat(_toConsumableArray(Object.entries(data).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          name = _ref3[0],
          value = _ref3[1];
        return _this2.makeElement('input', {
          name: name,
          value: value
        });
      }))));
      document.body.appendChild(form);
      form.submit();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Pay.vue?vue&type=template&id=40e4f6a2&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Pay.vue?vue&type=template&id=40e4f6a2&scoped=true& ***!
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
  return this.loading ? _c("loader") : _c("div", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6 mx-auto"
  }, [_c("b-input", {
    staticClass: "col-12 form-control-lg mb-5",
    attrs: {
      type: "number",
      placeholder: "Введите сумму"
    },
    model: {
      value: _vm.sum,
      callback: function callback($$v) {
        _vm.sum = $$v;
      },
      expression: "sum"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6 mx-auto"
  }, [_c("a", {
    staticClass: "btn_large primary mb-2",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.obmenka.apply(null, arguments);
      }
    }
  }, [_c("span", [_vm._v("Пополнить баланс")]), _vm._v(" "), _c("small", [_vm._v("QIWI, банковские карты")])]), _vm._v(" "), _c("a", {
    staticClass: "btn_large warning mb-2",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.enot.apply(null, arguments);
      }
    }
  }, [_c("span", [_vm._v("Пополнить баланс")]), _vm._v(" "), _c("small", [_vm._v("ApplePay, карты не СНГ, ЮMoney, криптовалюта")])]), _vm._v(" "), _c("a", {
    staticClass: "btn_large success mb-2",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.digiseller.apply(null, arguments);
      }
    }
  }, [_c("span", [_vm._v("Пополнить баланс")]), _vm._v(" "), _c("small", [_vm._v("Мобильные операторы, WebMoney, QIWI, PayPal")])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/Pay.vue":
/*!************************************!*\
  !*** ./resources/js/pages/Pay.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pay_vue_vue_type_template_id_40e4f6a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pay.vue?vue&type=template&id=40e4f6a2&scoped=true& */ "./resources/js/pages/Pay.vue?vue&type=template&id=40e4f6a2&scoped=true&");
/* harmony import */ var _Pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pay.vue?vue&type=script&lang=js& */ "./resources/js/pages/Pay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pay_vue_vue_type_template_id_40e4f6a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pay_vue_vue_type_template_id_40e4f6a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "40e4f6a2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Pay.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Pay.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/pages/Pay.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Pay.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Pay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Pay.vue?vue&type=template&id=40e4f6a2&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/Pay.vue?vue&type=template&id=40e4f6a2&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pay_vue_vue_type_template_id_40e4f6a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Pay.vue?vue&type=template&id=40e4f6a2&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Pay.vue?vue&type=template&id=40e4f6a2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pay_vue_vue_type_template_id_40e4f6a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pay_vue_vue_type_template_id_40e4f6a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);