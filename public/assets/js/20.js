(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumCategory.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ForumCategory.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./resources/js/api/index.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ForumCategory",
  components: {
    Loader: _components_Loader__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(['isLogged', 'forumCategories'])),
  data: function data() {
    return {
      loaded: false,
      category: null,
      discussions: [],
      current_page: 1,
      modals: {
        move: {
          open: false,
          to: null,
          level1: {
            childs: []
          },
          level2: {
            childs: []
          },
          level3: {
            childs: []
          }
        }
      }
    };
  },
  mounted: function mounted() {
    if (this.$route.params.page) {
      this.current_page = this.$route.params.page;
    }
    this.loadCategory();
  },
  methods: {
    checkAll: function checkAll() {
      this.discussions.data.forEach(function (discussion) {
        discussion.checked = true;
      });
    },
    archiveDiscussion: function archiveDiscussion() {
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('forum/discussion/move', {
        discussion: this.discussions.data.filter(function (discussion) {
          return discussion.checked;
        }).map(function (discussion) {
          return discussion.id;
        }),
        category: 41
      });
    },
    moveDiscussion: function moveDiscussion() {
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('forum/discussion/move', {
        discussion: this.discussions.data.filter(function (discussion) {
          return discussion.checked;
        }).map(function (discussion) {
          return discussion.id;
        }),
        category: this.modals.move.to.id
      });
    },
    deleteDiscussion: function deleteDiscussion() {
      var _this = this;
      this.$bvModal.msgBoxConfirm('Вы уверены что хотите УДАЛИТЬ выбранные темы?', {
        title: 'Подтверждение',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'Да',
        cancelTitle: 'Нет',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      }).then(function (value) {
        if (value) {
          _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('forum/discussion/delete', {
            discussion: _this.discussions.data.filter(function (discussion) {
              return discussion.checked;
            }).map(function (discussion) {
              return discussion.id;
            })
          });
        }
      });
    },
    truncate: function truncate(users, num) {
      return users.slice(0, num);
    },
    loadCategory: function loadCategory() {
      var _this2 = this;
      this.loaded = false;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/forum/category/' + this.$route.params.slug + '?page=' + this.current_page).then(function (response) {
        _this2.category = response.data.category;
        _this2.discussions = response.data.discussions;
        _this2.loaded = true;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  watch: {
    '$route': function $route(to) {
      if (to.params.page) {
        this.current_page = to.params.page;
      }
      this.loadCategory();
    },
    'current_page': function current_page(newVal) {
      if (this.category) {
        this.$router.push({
          name: 'category',
          params: {
            slug: this.category.slug,
            page: newVal
          }
        });
      }
    },
    'modals.move.level1': function modalsMoveLevel1(newVal) {
      this.modals.move.to = newVal;
    },
    'modals.move.level2': function modalsMoveLevel2(newVal) {
      this.modals.move.to = newVal;
    },
    'modals.move.level3': function modalsMoveLevel3(newVal) {
      this.modals.move.to = newVal;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumCategory.vue?vue&type=template&id=24c4ef06&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ForumCategory.vue?vue&type=template&id=24c4ef06& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return !this.loaded ? _c("loader") : _c("div", [_c("div", {
    staticClass: "category"
  }, [_c("div", {
    staticClass: "h2"
  }, [_c("div", {
    staticClass: "row align-items-end text-center"
  }, [_c("div", {
    staticClass: "col-12 col-md-6 mb-3 mb-md-0 text-md-left px-0 px-sm-3"
  }, [_c("h2", [_vm._v(_vm._s(_vm.category.name))]), _vm._v(" "), _c("p", {
    staticClass: "small mt-1 d-block"
  }, [_vm._v(_vm._s(_vm.category.description))])]), _vm._v(" "), _vm.category.childs.length <= 0 ? _c("div", {
    staticClass: "col-12 col-md-6 text-md-right px-0 px-sm-3"
  }, [_vm.hasPermission("forum_manager.logs.access") ? _c("b-dropdown", {
    attrs: {
      text: "Опции"
    }
  }, [_c("b-dropdown-item", {
    on: {
      click: function click($event) {
        _vm.modals.move.open = true;
      }
    }
  }, [_vm._v("Перенести")]), _vm._v(" "), _c("b-dropdown-item", {
    on: {
      click: _vm.archiveDiscussion
    }
  }, [_vm._v("Архивировать")]), _vm._v(" "), _c("b-dropdown-item", {
    on: {
      click: _vm.checkAll
    }
  }, [_vm._v("Выбрать все")]), _vm._v(" "), _c("b-dropdown-item", {
    on: {
      click: _vm.deleteDiscussion
    }
  }, [_vm._v("Удалить")])], 1) : _vm._e(), _vm._v(" "), this.isLogged ? _c("router-link", {
    staticClass: "btn_common primary",
    attrs: {
      to: {
        name: "create_discussions",
        params: {
          category: _vm.category.slug
        }
      }
    }
  }, [_vm._v("Создать тему")]) : _vm._e()], 1) : _vm._e()]), _vm._v(" "), _vm.discussions.total >= _vm.discussions.per_page ? _c("div", {
    staticClass: "paging"
  }, [_c("b-pagination", {
    attrs: {
      "total-rows": _vm.discussions.total,
      "per-page": _vm.discussions.per_page,
      limit: "10"
    },
    model: {
      value: _vm.current_page,
      callback: function callback($$v) {
        _vm.current_page = $$v;
      },
      expression: "current_page"
    }
  })], 1) : _vm._e()]), _vm._v(" "), _vm.category.childs.length > 0 ? _c("div", {
    staticClass: "content"
  }, _vm._l(_vm.category.childs, function (child) {
    return _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-12 col-sm-9 col-lg-7"
    }, [_c("div", {
      staticClass: "data"
    }, [_c("div", {
      staticClass: "status d-none d-sm-block"
    }, [_c("i", {
      staticClass: "fas fa-comments-alt"
    })]), _vm._v(" "), _c("div", [_c("h3", [_c("router-link", {
      attrs: {
        to: {
          name: "category",
          params: {
            slug: child.slug
          }
        }
      }
    }, [_vm._v(_vm._s(child.name))])], 1), _vm._v(" "), _c("p", [_vm._v(_vm._s(child.description))])])])]), _vm._v(" "), _c("div", {
      staticClass: "col d-none d-sm-flex d-md-none d-lg-flex"
    }, [_c("div", {
      staticClass: "data"
    }, [_c("div", {
      staticClass: "meta"
    }, [_c("h3", [_vm._v(_vm._s(child.discussions_count))]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.declOfNum(child.discussions_count, ["тема", "темы", "тем"])))])]), _vm._v(" "), _c("div", {
      staticClass: "meta"
    }, [_c("h3", [_vm._v(_vm._s(child.posts_count))]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.declOfNum(child.posts_count, ["ответ", "ответа", "ответов"])))])])])]), _vm._v(" "), _c("div", {
      staticClass: "col-3 d-none d-md-block d-lg-none d-xl-block"
    }, [child.last_post ? _c("div", {
      staticClass: "data"
    }, [_c("router-link", {
      staticClass: "user_pic",
      attrs: {
        to: {
          name: "user",
          params: {
            login: child.last_post.user.login
          }
        }
      }
    }, [_c("img", {
      attrs: {
        src: _vm.getHeadUrl(child.last_post.user.uuid),
        alt: ""
      }
    })]), _vm._v(" "), _c("div", [_c("h4", [_c("router-link", {
      attrs: {
        to: {
          name: "discussion",
          params: {
            slug: child.last_post.discussion.slug
          }
        }
      }
    }, [_vm._v(_vm._s(child.last_post.discussion.title))])], 1), _vm._v(" "), _c("p", [_vm._v("От "), _c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: child.last_post.user.login
          }
        }
      }
    }, [_vm._v(_vm._s(child.last_post.user.login))]), _vm._v(", " + _vm._s(_vm.humanDiff(child.last_post.created_at)))], 1)])], 1) : _c("div", {
      staticClass: "data"
    }, [_c("p", {
      staticClass: "stub"
    }, [_vm._v("Нет доступных сообщений для отображения в данный момент")])])])]);
  }), 0) : _vm._e(), _vm._v(" "), _c("ul", {
    staticClass: "topic"
  }, _vm._l(_vm.discussions.data, function (discussion) {
    return _c("li", {
      staticClass: "row align-items-center"
    }, [_c("router-link", {
      staticClass: "anchor d-none d-md-block",
      attrs: {
        to: {
          name: "discussion",
          params: {
            slug: discussion.slug
          }
        }
      }
    }, [_c("i", {
      "class": "fal " + (discussion.pinned ? "fa-thumbtack" : discussion.no_reply ? "fa-lock-alt" : Object.keys(discussion.users).length > 10 ? "fab fa-hotjar" : Object.keys(discussion.users).length > 1 ? "fa-comment-alt-lines" : "fa-comment-alt")
    })]), _vm._v(" "), _c("h4", {
      staticClass: "col-12 col-sm-5 mr-4"
    }, [_c("router-link", {
      staticClass: "anchor",
      attrs: {
        to: {
          name: "discussion",
          params: {
            slug: discussion.slug
          }
        }
      }
    }, [_vm._v(_vm._s(discussion.title))]), _vm._v(" "), _c("small", [_c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: discussion.user.login
          }
        }
      }
    }, [_vm._v(_vm._s(discussion.user.login))])], 1)], 1), _vm._v(" "), _c("div", {
      staticClass: "col responders d-none d-xl-block"
    }, [_vm._l(_vm.truncate(discussion.users, 5), function (user) {
      return _c("router-link", {
        key: user.id,
        staticClass: "user_pic anchor mr-1",
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
          src: _vm.getHeadUrl(user.uuid)
        }
      })]);
    }), _vm._v(" "), Object.keys(discussion.users).length > 5 ? _c("div", {
      staticClass: "more"
    }, [_vm._v("+" + _vm._s(Object.keys(discussion.users).length - 5))]) : _vm._e()], 2), _vm._v(" "), _c("router-link", {
      staticClass: "time ml-0 ml-sm-auto ml-xl-4",
      attrs: {
        to: {
          name: "discussion",
          params: {
            slug: discussion.slug
          }
        }
      }
    }, [_vm._v(_vm._s(_vm.humanDiff(discussion.updated_at)) + " назад")]), _vm._v(" "), _c("span", {
      staticClass: "meta d-none d-sm-block ml-4"
    }, [_c("i", {
      staticClass: "fas fa-comments-alt"
    }), _vm._v("\n                                            " + _vm._s(discussion.posts_count.total) + "\n                                        ")]), _vm._v(" "), _vm.hasPermission("forum.discussion.move") ? _c("b-checkbox", {
      staticClass: "ml-auto ml-sm-4",
      model: {
        value: discussion.checked,
        callback: function callback($$v) {
          _vm.$set(discussion, "checked", $$v);
        },
        expression: "discussion.checked"
      }
    }) : _vm._e()], 1);
  }), 0), _vm._v(" "), _vm.discussions.total >= _vm.discussions.per_page ? _c("div", {
    staticClass: "paging"
  }, [_c("b-pagination", {
    attrs: {
      "total-rows": _vm.discussions.total,
      "per-page": _vm.discussions.per_page,
      limit: "10"
    },
    model: {
      value: _vm.current_page,
      callback: function callback($$v) {
        _vm.current_page = $$v;
      },
      expression: "current_page"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.hasPermission("forum.discussion.move") ? _c("b-modal", {
    attrs: {
      "hide-footer": ""
    },
    model: {
      value: _vm.modals.move.open,
      callback: function callback($$v) {
        _vm.$set(_vm.modals.move, "open", $$v);
      },
      expression: "modals.move.open"
    }
  }, [_c("v-select", {
    attrs: {
      options: Object.values(_vm.forumCategories),
      label: "name"
    },
    model: {
      value: _vm.modals.move.level1,
      callback: function callback($$v) {
        _vm.$set(_vm.modals.move, "level1", $$v);
      },
      expression: "modals.move.level1"
    }
  }), _vm._v(" "), _c("v-select", {
    attrs: {
      options: Object.values(_vm.modals.move.level1.childs),
      label: "name"
    },
    model: {
      value: _vm.modals.move.level2,
      callback: function callback($$v) {
        _vm.$set(_vm.modals.move, "level2", $$v);
      },
      expression: "modals.move.level2"
    }
  }), _vm._v(" "), _c("v-select", {
    attrs: {
      options: Object.values(_vm.modals.move.level2.childs),
      label: "name"
    },
    model: {
      value: _vm.modals.move.level3,
      callback: function callback($$v) {
        _vm.$set(_vm.modals.move, "level3", $$v);
      },
      expression: "modals.move.level3"
    }
  }), _vm._v(" "), _c("b-button", {
    staticClass: "mt-2",
    attrs: {
      block: ""
    },
    on: {
      click: _vm.moveDiscussion
    }
  }, [_vm._v("Переместить")])], 1) : _vm._e()], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/ForumCategory.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/ForumCategory.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForumCategory_vue_vue_type_template_id_24c4ef06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForumCategory.vue?vue&type=template&id=24c4ef06& */ "./resources/js/pages/ForumCategory.vue?vue&type=template&id=24c4ef06&");
/* harmony import */ var _ForumCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForumCategory.vue?vue&type=script&lang=js& */ "./resources/js/pages/ForumCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForumCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForumCategory_vue_vue_type_template_id_24c4ef06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForumCategory_vue_vue_type_template_id_24c4ef06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ForumCategory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/ForumCategory.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/ForumCategory.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ForumCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/ForumCategory.vue?vue&type=template&id=24c4ef06&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/ForumCategory.vue?vue&type=template&id=24c4ef06& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumCategory_vue_vue_type_template_id_24c4ef06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./ForumCategory.vue?vue&type=template&id=24c4ef06& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumCategory.vue?vue&type=template&id=24c4ef06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumCategory_vue_vue_type_template_id_24c4ef06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumCategory_vue_vue_type_template_id_24c4ef06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);