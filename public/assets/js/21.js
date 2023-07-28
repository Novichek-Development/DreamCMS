(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumCreate.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ForumCreate.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ForumCreate",
  components: {
    Editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      loading: false,
      title: '',
      content: '',
      editor: {
        init: {
          language: 'ru',
          icons_url: '/assets/tinymce/icons.min.js',
          plugins: 'spoiler preview paste autolink autosave code visualblocks visualchars image link media template codesample table hr toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
          menubar: false,
          toolbar: 'undo redo | bold italic underline strikethrough | formatselect fontsizeselect | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | forecolor removeformat | spoiler-add spoiler-remove | emoticons | preview | image template link anchor codesample',
          toolbar_sticky: true,
          templates: []
        }
      }
    };
  },
  methods: {
    create: function create() {
      var _this = this;
      this.loading = true;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('forum/discussion/create', {
        title: this.title,
        body: this.content,
        category_slug: this.$route.params.category
      }).then(function (response) {
        if (response.data.success) {
          _this.$router.push({
            name: 'discussion',
            params: {
              slug: response.data.slug
            }
          });
        }
      })["finally"](function () {
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumCreate.vue?vue&type=template&id=fadafff8&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ForumCreate.vue?vue&type=template&id=fadafff8&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    "class": "category " + (this.loading ? "unload" : "")
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "section create"
  }, [_c("div", {
    staticClass: "row align-items-center"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm col-md-5 col-xl-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.title,
      expression: "title"
    }],
    staticClass: "form-control form-control-light mt-1 mt-sm-0",
    attrs: {
      placeholder: "Заголовок"
    },
    domProps: {
      value: _vm.title
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.title = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row mt-4"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm"
  }, [_c("editor", {
    attrs: {
      id: "newpost",
      init: _vm.editor.init
    },
    model: {
      value: _vm.content,
      callback: function callback($$v) {
        _vm.content = $$v;
      },
      expression: "content"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row align-items-center mt-2"
  }, [_c("div", {
    staticClass: "col-12 col-sm-4"
  }), _vm._v(" "), _c("div", {
    staticClass: "col text-center text-sm-left"
  }, [_c("a", {
    staticClass: "btn_common primary",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.create.apply(null, arguments);
      }
    }
  }, [_vm._v("Создать новую тему")])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "h2"
  }, [_c("div", {
    staticClass: "row align-items-end text-center"
  }, [_c("div", {
    staticClass: "col-12 col-md-6 mb-3 mb-md-0 text-md-left px-0 px-sm-3"
  }, [_c("h2", [_vm._v("Создать новую тему")]), _vm._v(" "), _c("p", {
    staticClass: "small"
  }, [_vm._v("Будьте внимательные, за нарушение правил публикаций на форуме Вы можете получить блокировку!")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_vm._v("\n                Введите заголовок\n                "), _c("small", [_vm._v("Заголовок в списке тем (максимум 50 символов)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_vm._v("\n                Текст сообщения\n                "), _c("small", [_vm._v("Максимум 1000 символов")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/ForumCreate.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/ForumCreate.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForumCreate_vue_vue_type_template_id_fadafff8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForumCreate.vue?vue&type=template&id=fadafff8&scoped=true& */ "./resources/js/pages/ForumCreate.vue?vue&type=template&id=fadafff8&scoped=true&");
/* harmony import */ var _ForumCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForumCreate.vue?vue&type=script&lang=js& */ "./resources/js/pages/ForumCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForumCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForumCreate_vue_vue_type_template_id_fadafff8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForumCreate_vue_vue_type_template_id_fadafff8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fadafff8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ForumCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/ForumCreate.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/ForumCreate.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ForumCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/ForumCreate.vue?vue&type=template&id=fadafff8&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/ForumCreate.vue?vue&type=template&id=fadafff8&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumCreate_vue_vue_type_template_id_fadafff8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./ForumCreate.vue?vue&type=template&id=fadafff8&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumCreate.vue?vue&type=template&id=fadafff8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumCreate_vue_vue_type_template_id_fadafff8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumCreate_vue_vue_type_template_id_fadafff8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);