(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/News.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/News.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./resources/js/api/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "News",
  components: {
    Loader: _components_Loader__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    this.loadNews();
    this.checkRef();
  },
  data: function data() {
    return {
      loading: true,
      news: [],
      selected: false,
      pagination: {
        current_page: 1,
        last_page: 1,
        per_page: 10,
        total: 1
      }
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      moment__WEBPACK_IMPORTED_MODULE_1___default.a.locale('ru');
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format('lll');
    },
    checkRef: function checkRef() {
      var ref = this.$route.query.ref;
      if (ref) {
        localStorage.setItem('refer', ref);
      }
    },
    loadNews: function loadNews() {
      var _this = this;
      this.loading = true;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('news/load', {
        params: {
          page: this.pagination.current_page
        }
      }).then(function (response) {
        _this.news = response.data.news.data;
        _this.pagination.current_page = response.data.news.current_page;
        _this.pagination.last_page = response.data.news.last_page;
        _this.pagination.per_page = response.data.news.per_page;
        _this.pagination.total = response.data.news.total;
        _this.loading = false;
      })["catch"](function (error) {
        console.error(error);
      });
    }
  },
  watch: {
    'pagination.current_page': function paginationCurrent_page(val) {
      this.loadNews();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/News.vue?vue&type=template&id=163b945c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/News.vue?vue&type=template&id=163b945c&scoped=true& ***!
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
  return this.loading ? _c("loader") : _c("div", {
    staticClass: "news"
  }, [_vm._l(_vm.news, function (article) {
    return _c("article", {
      staticClass: "news_item"
    }, [_c("a", {
      staticClass: "row",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          _vm.selected && _vm.selected.id === article.id ? _vm.selected = false : _vm.selected = article;
        }
      }
    }, [_c("div", {
      "class":  true && _vm.selected.id === article.id ? "col-xl-12" : "col-xl-4"
    }, [_c("div", {
      staticClass: "news_info"
    }, [_c("div", {
      staticClass: "news_meta"
    }, [_vm._v("Новости")]), _vm._v(" "), _c("h3", [_vm._v(_vm._s(article.title))]), _vm._v(" "), _c("p", {
      domProps: {
        innerHTML: _vm._s(_vm.selected && _vm.selected.id === article.id ? article.full_content : article.short_content)
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "news_date"
    }, [_vm._v(_vm._s(_vm.formatDate(article.created_at)))])])]), _vm._v(" "), _c("div", {
      "class": "col " + (_vm.selected && _vm.selected.id === article.id ? "ml-xl-0" : "ml-xl-4")
    }, [_c("div", {
      staticClass: "news_image"
    }, [_c("div", {
      staticClass: "img_wrapper",
      style: "background-image:url(" + article.image + ")"
    })])])])]);
  }), _vm._v(" "), _c("div", {
    staticClass: "paging"
  }, [_c("b-pagination", {
    attrs: {
      "total-rows": _vm.pagination.total,
      "per-page": _vm.pagination.per_page
    },
    model: {
      value: _vm.pagination.current_page,
      callback: function callback($$v) {
        _vm.$set(_vm.pagination, "current_page", $$v);
      },
      expression: "pagination.current_page"
    }
  })], 1)], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/News.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/News.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _News_vue_vue_type_template_id_163b945c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./News.vue?vue&type=template&id=163b945c&scoped=true& */ "./resources/js/pages/News.vue?vue&type=template&id=163b945c&scoped=true&");
/* harmony import */ var _News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./News.vue?vue&type=script&lang=js& */ "./resources/js/pages/News.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _News_vue_vue_type_template_id_163b945c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _News_vue_vue_type_template_id_163b945c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "163b945c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/News.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/News.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/News.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./News.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/News.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/News.vue?vue&type=template&id=163b945c&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/News.vue?vue&type=template&id=163b945c&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_template_id_163b945c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./News.vue?vue&type=template&id=163b945c&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/News.vue?vue&type=template&id=163b945c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_template_id_163b945c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_template_id_163b945c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);