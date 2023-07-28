(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumSearch.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ForumSearch.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./resources/js/api/index.js");
/* harmony import */ var _components_UserSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UserSelector */ "./resources/js/components/UserSelector.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ForumSearch",
  components: {
    UserSelector: _components_UserSelector__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      loading: false,
      text: '',
      user: null,
      discussions_page: 1,
      posts_page: 1,
      tab: 'discussions',
      posts: [],
      discussions: []
    };
  },
  methods: {
    search: function search() {
      var _this = this;
      this.loading = true;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('forum/search', {
        text: this.text,
        page: this.tab === 'discussions' ? this.discussions_page : this.posts_page,
        user: this.user ? this.user.id : null
      }).then(function (response) {
        if (response.data.success) {
          _this.posts = response.data.data.posts;
          _this.discussions = response.data.data.discussions;
          _this.$nextTick(function () {
            this.initSpoilers();
          });
        }
      })["finally"](function () {
        _this.loading = false;
      });
    },
    initSpoilers: function initSpoilers() {
      $(function () {
        $('.spoiler-text').hide();
        $('.spoiler-toggle').click(function () {
          $(this).next().toggle();
        });
      });
    }
  },
  watch: {
    user: function user(newval) {
      console.log(newval);
    },
    posts_page: function posts_page(newval) {
      this.search();
    },
    discussions_page: function discussions_page(newval) {
      this.search();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumSearch.vue?vue&type=template&id=069d0eb0&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ForumSearch.vue?vue&type=template&id=069d0eb0&scoped=true& ***!
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
    staticClass: "row align-items-center mb-3"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm col-md-5 col-xl-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.text,
      expression: "text"
    }],
    staticClass: "form-control form-control-light mt-1 mt-sm-0",
    attrs: {
      placeholder: "Текст..."
    },
    domProps: {
      value: _vm.text
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.text = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row align-items-center mb-3"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm col-md-5 col-xl-4"
  }, [_c("user-selector", {
    model: {
      value: _vm.user,
      callback: function callback($$v) {
        _vm.user = $$v;
      },
      expression: "user"
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
        return _vm.search.apply(null, arguments);
      }
    }
  }, [_vm._v("Поиск")])])])]), _vm._v(" "), _c("div", {
    staticClass: "section create mt-2"
  }, [_c("ul", {
    staticClass: "cabinet_tabs"
  }, [_c("li", {
    "class": _vm.tab === "discussions" ? "checked" : ""
  }, [_c("a", {
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        _vm.tab = "discussions";
      }
    }
  }, [_vm._v("Темы")])]), _vm._v(" "), _c("li", {
    "class": _vm.tab === "posts" ? "checked" : ""
  }, [_c("a", {
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        _vm.tab = "posts";
      }
    }
  }, [_vm._v("Сообщения")])])])]), _vm._v(" "), _vm.tab === "posts" ? _c("div", {
    staticClass: "profile"
  }, [_c("div", {
    staticClass: "activity py-4 p-xl-5"
  }, [_c("h3", [_vm._v("Сообщения на форуме")]), _vm._v(" "), _c("div", {
    staticClass: "row mt-3"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("ul", {}, _vm._l(_vm.posts.data, function (post) {
    return _c("li", {
      staticClass: "post"
    }, [_c("router-link", {
      staticClass: "user_pic anchor",
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
        src: _vm.getHeadUrl(post.user.uuid)
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
    }, [_vm._v(_vm._s(post.discussion.title))])], 1), _vm._v(" "), _c("p", {
      staticClass: "action"
    }, [_c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: post.user.login
          }
        }
      }
    }, [_vm._v(_vm._s(post.user.login))]), _vm._v(" написал сообщение\n                            ")], 1), _vm._v(" "), _c("p", {
      domProps: {
        innerHTML: _vm._s(post.body)
      }
    }), _vm._v(" "), _c("p", {
      staticClass: "meta"
    }, [_c("span", [_vm._v(_vm._s(_vm.moment(post.created_at).format("lll")))])])], 1);
  }), 0)])])]), _vm._v(" "), _vm.posts.total >= _vm.posts.per_page ? _c("div", {
    staticClass: "paging"
  }, [_c("b-pagination", {
    attrs: {
      "total-rows": _vm.posts.total,
      "per-page": _vm.posts.per_page
    },
    model: {
      value: _vm.posts_page,
      callback: function callback($$v) {
        _vm.posts_page = $$v;
      },
      expression: "posts_page"
    }
  })], 1) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.tab === "discussions" ? _c("div", {
    staticClass: "profile"
  }, [_c("div", {
    staticClass: "activity py-4 p-xl-5"
  }, [_c("h3", [_vm._v("Темы на форуме")]), _vm._v(" "), _c("div", {
    staticClass: "row mt-3"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("ul", {}, _vm._l(_vm.discussions.data, function (discussion) {
    return _c("li", {
      staticClass: "post"
    }, [_c("router-link", {
      staticClass: "user_pic anchor",
      attrs: {
        to: {
          name: "user",
          params: {
            login: discussion.user.login
          }
        }
      }
    }, [_c("img", {
      attrs: {
        src: _vm.getHeadUrl(discussion.user.uuid)
      }
    })]), _vm._v(" "), _c("h4", [_c("router-link", {
      attrs: {
        to: {
          name: "discussion",
          params: {
            slug: discussion.slug
          }
        }
      }
    }, [_vm._v(_vm._s(discussion.title))])], 1), _vm._v(" "), _c("p", {
      staticClass: "action"
    }, [_c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: discussion.user.login
          }
        }
      }
    }, [_vm._v(_vm._s(discussion.user.login))]), _vm._v(" создал тему\n                            ")], 1), _vm._v(" "), _c("p", {
      staticClass: "meta"
    }, [_c("span", [_vm._v(_vm._s(_vm.moment(discussion.created_at).format("lll")))])])], 1);
  }), 0)])])]), _vm._v(" "), _vm.discussions.total >= _vm.discussions.per_page ? _c("div", {
    staticClass: "paging"
  }, [_c("b-pagination", {
    attrs: {
      "total-rows": _vm.discussions.total,
      "per-page": _vm.discussions.per_page
    },
    model: {
      value: _vm.discussions_page,
      callback: function callback($$v) {
        _vm.discussions_page = $$v;
      },
      expression: "discussions_page"
    }
  })], 1) : _vm._e()]) : _vm._e()]);
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
  }, [_c("h2", [_vm._v("Поиск по форуму")]), _vm._v(" "), _c("p", {
    staticClass: "small"
  }, [_vm._v("Вы можете найти темы по их названию и сообщения по содержанию. Указав игрока, вы увидите только темы и сообщения созданные им.")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_vm._v("\n                Введите текст для поиска\n                "), _c("small", [_vm._v("Поиск в названиях тем и сообщениях")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12 col-sm-4"
  }, [_vm._v("\n                Указать пользователя\n                "), _c("small", [_vm._v("Поиск тем и сообщений только этого игрока")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/ForumSearch.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/ForumSearch.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForumSearch_vue_vue_type_template_id_069d0eb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForumSearch.vue?vue&type=template&id=069d0eb0&scoped=true& */ "./resources/js/pages/ForumSearch.vue?vue&type=template&id=069d0eb0&scoped=true&");
/* harmony import */ var _ForumSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForumSearch.vue?vue&type=script&lang=js& */ "./resources/js/pages/ForumSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForumSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForumSearch_vue_vue_type_template_id_069d0eb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForumSearch_vue_vue_type_template_id_069d0eb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "069d0eb0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ForumSearch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/ForumSearch.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/ForumSearch.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ForumSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/ForumSearch.vue?vue&type=template&id=069d0eb0&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/ForumSearch.vue?vue&type=template&id=069d0eb0&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumSearch_vue_vue_type_template_id_069d0eb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./ForumSearch.vue?vue&type=template&id=069d0eb0&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumSearch.vue?vue&type=template&id=069d0eb0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumSearch_vue_vue_type_template_id_069d0eb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumSearch_vue_vue_type_template_id_069d0eb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);