(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/StaticPage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/StaticPage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./resources/js/api/index.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var _skinview3d_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skinview3d.module */ "./resources/js/skinview3d.module.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "StaticPage",
  components: {
    Loader: _components_Loader__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.loadPage();
    this.checkRef();
  },
  data: function data() {
    return {
      loaded: false,
      page: false
    };
  },
  methods: {
    processLinks: function processLinks(event) {
      if (event.target) {
        var link = event.target.closest('a');
        if (link && link.pathname && link.hostname === window.location.hostname) {
          event.preventDefault();
          console.log('Go to: ' + link.pathname);
          this.$router.push({
            path: link.pathname
          });
        }
      }
    },
    loadPage: function loadPage() {
      var _this = this;
      this.loaded = false;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('page/' + this.$route.params.name).then(function (response) {
        _this.page = response.data.page;
        _this.loaded = true;
        _this.$nextTick(function () {
          this.loadSkins();
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    checkRef: function checkRef() {
      var ref = this.$route.query.ref;
      if (ref) {
        localStorage.setItem('refer', ref);
      }
    },
    loadSkins: function loadSkins() {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).on('click ', '.rules h3', function (e) {
        e.preventDefault();
        var i = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this),
          c = 'checked',
          b = i.parent().hasClass(c);
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('.rules .chapter').each(function () {
          jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).removeClass(c);
        });
        !b ? i.parent().addClass(c) : null;
      });
      if (this.$route.params.name === 'donate') {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).on('click', '.donate .switcher .case', function (e) {
          e.preventDefault();
          var switcher = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.donate .switcher'),
            i = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this),
            c = 'checked',
            b = i.hasClass(c),
            id = i.attr('href').slice(1),
            groupment = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.groupment');
          switcher.find('.case').each(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).removeClass(c);
          });
          groupment.find('> li').each(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).hide(0);
          });
          !b ? i.addClass(c) : null;
          groupment.find("#".concat(id)).fadeIn(200);
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('html').animate({
            scrollTop: groupment.offset().top
          }, 500);
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('#accountUpgrade').removeClass('d-none');
        });
        jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).on('mouseenter', '.donate .kitTrigger', function () {
          var i = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this),
            c = 'checked',
            id = i.attr('id');
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('.donate .kitTrigger').each(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).removeClass(c);
          });
          i.addClass(c);
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('.donate .kitWrap').each(function () {
            i = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this);
            i.hasClass(id) ? i.fadeIn(150) : i.hide();
          });
        });
        jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).on('mouseleave', '.donate .chapter', function () {
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('.donate .kitTrigger').each(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).removeClass('checked');
          });
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('.donate .kitWrap').each(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).hide();
          });
        });
      }
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).on('click ', '.server .mods a', function () {
        var attr = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).attr('data-value');
        jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).attr('href', "https://www.google.com/search?q=".concat(attr !== undefined ? attr + ' ' : '').concat(jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).text(), "+\u0432\u0438\u043A\u0438"));
      });
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.preview').each(function () {
        var attr = this.getAttribute('data-value'),
          path = attr === null ? '/skins/default.png' : "/skins/".concat(attr, ".png");
        var skinViewer = new _skinview3d_module__WEBPACK_IMPORTED_MODULE_2__["SkinViewer"]({
          domElement: this,
          width: 512,
          height: 1024,
          skinUrl: path,
          capeUrl: "img/cape.png",
          "static": true
        });
        var control = _skinview3d_module__WEBPACK_IMPORTED_MODULE_2__["createOrbitControls"](skinViewer);
        control.enableRotate = false;
        control.enableZoom = false;
        control.enablePan = false;
        skinViewer.animation = new _skinview3d_module__WEBPACK_IMPORTED_MODULE_2__["CompositeAnimation"]();
        var walk = skinViewer.animation.add(_skinview3d_module__WEBPACK_IMPORTED_MODULE_2__["WalkingAnimation"]);
        setTimeout(function () {
          walk.paused = true;
          skinViewer.playerObject.rotation._x = 0.15;
          skinViewer.playerObject.quaternion._y = 0.1;
        }, 200);
      });
    }
  },
  watch: {
    '$route': function $route(to, from) {
      if (to.params.name !== from.params.name) {
        this.loadPage();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/StaticPage.vue?vue&type=template&id=588b8c34&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/StaticPage.vue?vue&type=template&id=588b8c34&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.loaded ? _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.page.content)
    },
    on: {
      click: _vm.processLinks
    }
  }) : _c("loader");
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/StaticPage.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/StaticPage.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StaticPage_vue_vue_type_template_id_588b8c34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StaticPage.vue?vue&type=template&id=588b8c34&scoped=true& */ "./resources/js/pages/StaticPage.vue?vue&type=template&id=588b8c34&scoped=true&");
/* harmony import */ var _StaticPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StaticPage.vue?vue&type=script&lang=js& */ "./resources/js/pages/StaticPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StaticPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StaticPage_vue_vue_type_template_id_588b8c34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StaticPage_vue_vue_type_template_id_588b8c34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "588b8c34",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/StaticPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/StaticPage.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/StaticPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./StaticPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/StaticPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/StaticPage.vue?vue&type=template&id=588b8c34&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/StaticPage.vue?vue&type=template&id=588b8c34&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticPage_vue_vue_type_template_id_588b8c34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./StaticPage.vue?vue&type=template&id=588b8c34&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/StaticPage.vue?vue&type=template&id=588b8c34&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticPage_vue_vue_type_template_id_588b8c34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_StaticPage_vue_vue_type_template_id_588b8c34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);