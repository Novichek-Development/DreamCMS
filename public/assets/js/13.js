(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CabinetProfile.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/CabinetProfile.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./resources/js/api/index.js");
/* harmony import */ var tinymce_tinymce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/tinymce */ "./node_modules/tinymce/tinymce.js");
/* harmony import */ var tinymce_tinymce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinymce_tinymce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tinymce_themes_silver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tinymce/themes/silver */ "./node_modules/tinymce/themes/silver/index.js");
/* harmony import */ var tinymce_themes_silver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tinymce_themes_silver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CabinetProfile",
  components: {
    Editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])(['user'])),
  mounted: function mounted() {
    this.show_signs = this.user.show_signs;
    this.hide_friends = this.user.hide_friends;
    this.$nextTick(function () {
      this.load();
    });
  },
  data: function data() {
    return {
      sign: '',
      loaded: false,
      show_signs: true,
      hide_friends: false,
      editor: {
        init: {
          language: 'ru',
          icons_url: '/assets/tinymce/icons.min.js',
          plugins: 'preview paste autolink autosave code visualblocks visualchars image link media template codesample table hr toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
          menubar: false,
          toolbar: 'undo redo | bold italic underline strikethrough | formatselect fontsizeselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor removeformat | emoticons | preview | image template link anchor codesample',
          toolbar_sticky: true,
          templates: []
        }
      }
    };
  },
  methods: {
    load: function load() {
      var _this = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/settings').then(function (response) {
        _this.sign = response.data.sign;
        _this.loaded = true;
      });
    },
    saveSign: function saveSign() {
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/settings/profile', {
        sign: this.sign
      });
    },
    clearSign: function clearSign() {
      this.sign = '';
      this.saveSign();
    }
  },
  watch: {
    show_signs: function show_signs(newVal) {
      if (this.loaded) _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/settings/profile', {
        show_signs: newVal
      });
    },
    hide_friends: function hide_friends(newVal) {
      if (this.loaded) _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/settings/profile', {
        hide_friends: newVal
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CabinetProfile.vue?vue&type=template&id=124ffd7a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/CabinetProfile.vue?vue&type=template&id=124ffd7a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "profile",
    "class": !this.loaded ? "unload" : ""
  }, [_c("div", {
    staticClass: "row section"
  }, [_c("div", {
    staticClass: "col-12 col-xl-6"
  }, [_c("h3", [_vm._v("Опции профиля")]), _vm._v(" "), _c("p", [_vm._v("Настраивайте Ваш форумный профиль под свои нужды, используйте все наши социальные функции и становитесь крайне значимой фигурой в игровом сообществе!")]), _vm._v(" "), _c("p", {
    staticClass: "options"
  }, [_c("label", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.show_signs,
      expression: "show_signs"
    }],
    staticClass: "checkbox",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.show_signs) ? _vm._i(_vm.show_signs, null) > -1 : _vm.show_signs
    },
    on: {
      change: function change($event) {
        var $$a = _vm.show_signs,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.show_signs = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.show_signs = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.show_signs = $$c;
        }
      }
    }
  }), _vm._v("\n                    Показывать подписи других игроков на форуме\n                ")]), _vm._v(" "), _c("label", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.hide_friends,
      expression: "hide_friends"
    }],
    staticClass: "checkbox",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.hide_friends) ? _vm._i(_vm.hide_friends, null) > -1 : _vm.hide_friends
    },
    on: {
      change: function change($event) {
        var $$a = _vm.hide_friends,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.hide_friends = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.hide_friends = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.hide_friends = $$c;
        }
      }
    }
  }), _vm._v("\n                    Скрыть друзей в профиле\n                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-xl-6 mt-5 mt-xl-0"
  }, [_c("h3", [_vm._v("Сменить подпись")]), _vm._v(" "), _c("p", [_c("editor", {
    attrs: {
      id: "newpost",
      init: _vm.editor.init
    },
    model: {
      value: _vm.sign,
      callback: function callback($$v) {
        _vm.sign = $$v;
      },
      expression: "sign"
    }
  }), _vm._v(" "), _c("a", {
    staticClass: "btn_common primary mt-2",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.saveSign.apply(null, arguments);
      }
    }
  }, [_vm._v("Сохранить подпись")]), _vm._v(" "), _c("a", {
    staticClass: "btn_common mt-2",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.clearSign.apply(null, arguments);
      }
    }
  }, [_vm._v("Очистить")])], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/CabinetProfile.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/CabinetProfile.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CabinetProfile_vue_vue_type_template_id_124ffd7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CabinetProfile.vue?vue&type=template&id=124ffd7a&scoped=true& */ "./resources/js/pages/CabinetProfile.vue?vue&type=template&id=124ffd7a&scoped=true&");
/* harmony import */ var _CabinetProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CabinetProfile.vue?vue&type=script&lang=js& */ "./resources/js/pages/CabinetProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CabinetProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CabinetProfile_vue_vue_type_template_id_124ffd7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CabinetProfile_vue_vue_type_template_id_124ffd7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "124ffd7a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/CabinetProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/CabinetProfile.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/CabinetProfile.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CabinetProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CabinetProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CabinetProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CabinetProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/CabinetProfile.vue?vue&type=template&id=124ffd7a&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/CabinetProfile.vue?vue&type=template&id=124ffd7a&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CabinetProfile_vue_vue_type_template_id_124ffd7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./CabinetProfile.vue?vue&type=template&id=124ffd7a&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CabinetProfile.vue?vue&type=template&id=124ffd7a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CabinetProfile_vue_vue_type_template_id_124ffd7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CabinetProfile_vue_vue_type_template_id_124ffd7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);