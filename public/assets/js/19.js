(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumAdmins.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ForumAdmins.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./resources/js/api/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ForumAdmins",
  mounted: function mounted() {
    this.load();
  },
  data: function data() {
    return {
      loading: true,
      users: [],
      pagination: {
        current_page: 1,
        total: 0,
        per_page: 10
      }
    };
  },
  methods: {
    load: function load() {
      var _this = this;
      this.loading = true;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/forum/admins', {
        params: {
          page: this.pagination.current_page
        }
      }).then(function (response) {
        if (response.data.success) {
          _this.users = response.data.users.data;
          _this.pagination.current_page = response.data.users.current_page;
          _this.pagination.last_page = response.data.users.last_page;
          _this.pagination.per_page = response.data.users.per_page;
          _this.pagination.total = response.data.users.total;
        }
      })["finally"](function () {
        _this.loading = false;
      });
    }
  },
  watch: {
    'pagination.current_page': function paginationCurrent_page() {
      this.load();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumAdmins.vue?vue&type=template&id=5b05020c&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ForumAdmins.vue?vue&type=template&id=5b05020c& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    "class": "category " + (_vm.loading ? "unload" : "")
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "members"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "body"
  }, _vm._l(_vm.users, function (user) {
    return _c("div", {
      staticClass: "row align-items-center"
    }, [_c("div", {
      staticClass: "col-12 col-sm col-lg-3 order-1 order-sm-0"
    }, [_c("router-link", {
      staticClass: "anchor",
      attrs: {
        to: {
          name: "user",
          params: {
            login: user.login
          }
        }
      }
    }, [_c("div", {
      staticClass: "user_pic"
    }, [_c("img", {
      attrs: {
        src: _vm.getHeadUrl(user.uuid)
      }
    })]), _vm._v("\n                            " + _vm._s(user.login) + "\n                        ")])], 1), _vm._v(" "), _c("div", {
      staticClass: "col-6 col-sm order-2 order-sm-0"
    }, [_c("div", {
      domProps: {
        innerHTML: _vm._s(user.role)
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-12 col-sm d-block d-sm-none d-md-block d-lg-none d-xl-block order-4 order-sm-0"
    }, [_c("a", {
      attrs: {
        href: "#"
      }
    }, [_vm._v(_vm._s(user.posts) + " " + _vm._s(_vm.declOfNum(user.posts, ["сообщение", "сообщения", "сообщений"])))])]), _vm._v(" "), _c("div", {
      staticClass: "col d-none d-sm-block"
    }, [user.last_activity ? _c("a", [_vm._v(_vm._s(_vm.formatUnix(user.last_activity)))]) : _c("a", [_vm._v("Никогда")])])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "paging px-0"
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
  })], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "h2 text-center text-md-left"
  }, [_c("h2", [_vm._v("Администрация")]), _vm._v(" "), _c("p", {
    staticClass: "small mt-1 d-block"
  }, [_vm._v("Всегда актуальный список администраторов и модераторов, которые вкладывают свои силы и с каждым днём делают наш проект всё лучше и лучше!")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "head"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 d-block d-sm-none empty"
  }, [_vm._v("Пользователь, роль и публикации")]), _vm._v(" "), _c("div", {
    staticClass: "col col-lg-3 d-none d-sm-block empty"
  }, [_vm._v("Имя пользователя")]), _vm._v(" "), _c("div", {
    staticClass: "col d-none d-sm-block"
  }, [_vm._v("Роль")]), _vm._v(" "), _c("div", {
    staticClass: "col d-none d-md-block d-lg-none d-xl-block"
  }, [_vm._v("Публикации")]), _vm._v(" "), _c("div", {
    staticClass: "col d-none d-sm-block"
  }, [_vm._v("Активность")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/ForumAdmins.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/ForumAdmins.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForumAdmins_vue_vue_type_template_id_5b05020c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForumAdmins.vue?vue&type=template&id=5b05020c& */ "./resources/js/pages/ForumAdmins.vue?vue&type=template&id=5b05020c&");
/* harmony import */ var _ForumAdmins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForumAdmins.vue?vue&type=script&lang=js& */ "./resources/js/pages/ForumAdmins.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForumAdmins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForumAdmins_vue_vue_type_template_id_5b05020c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForumAdmins_vue_vue_type_template_id_5b05020c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ForumAdmins.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/ForumAdmins.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/ForumAdmins.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumAdmins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ForumAdmins.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumAdmins.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumAdmins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/ForumAdmins.vue?vue&type=template&id=5b05020c&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/ForumAdmins.vue?vue&type=template&id=5b05020c& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumAdmins_vue_vue_type_template_id_5b05020c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./ForumAdmins.vue?vue&type=template&id=5b05020c& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumAdmins.vue?vue&type=template&id=5b05020c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumAdmins_vue_vue_type_template_id_5b05020c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumAdmins_vue_vue_type_template_id_5b05020c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);