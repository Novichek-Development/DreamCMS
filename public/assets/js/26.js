(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Notifications.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Notifications.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./resources/js/api/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Notifications",
  components: {
    Loader: _components_Loader__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      loading: true,
      notifications: [],
      pagination: {
        current_page: 1,
        last_page: 1,
        per_page: 10,
        total: 1
      }
    };
  },
  mounted: function mounted() {
    this.load();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['user'])),
  methods: {
    load: function load() {
      var _this = this;
      this.loading = true;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('core/notifications?page=' + this.pagination.current_page).then(function (response) {
        if (response.data.success) {
          _this.pagination.current_page = response.data.notifications.current_page;
          _this.pagination.last_page = response.data.notifications.last_page;
          _this.pagination.per_page = response.data.notifications.per_page;
          _this.pagination.total = response.data.notifications.total;
          _this.notifications = [];
          _this.notifications = _this.notifications.concat(response.data.unread);
          _this.notifications = _this.notifications.concat(response.data.notifications.data);
          _this.loading = false;
        }
      });
    },
    getNotMe: function getNotMe(notify) {
      if (notify.data.friendship.sender.id !== this.user.id) {
        return notify.data.friendship.sender;
      }
      return notify.data.friendship.recipient;
    },
    getNotifyClass: function getNotifyClass(notify) {
      var clazz = '';
      if (notify.type === 'App\\Notifications\\FriendRequest') {
        switch (notify.data.action) {
          case 'befriend':
            clazz = 'request';
            break;
          case 'unfriend':
            clazz = 'remove';
            break;
          default:
            clazz = notify.data.action;
            break;
        }
      }
      if (notify.type === 'App\\Notifications\\NewReply') {
        clazz = 'answer';
      }
      if (notify.type === 'App\\Notifications\\ChangePasswordNotify') {
        clazz = 'changepass';
      }
      if (notify.type === 'App\\Notifications\\BalanceAdd') {
        clazz = 'plus';
      }
      if (notify.type === 'App\\Notifications\\TextNotification') {
        clazz = 'start';
      }
      if (!notify.read_at) {
        clazz += ' unread';
      }
      return clazz;
    }
  },
  watch: {
    'pagination.current_page': function paginationCurrent_page(val) {
      this.load();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Notifications.vue?vue&type=template&id=31bceba2&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Notifications.vue?vue&type=template&id=31bceba2& ***!
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
  return _c("div", {
    staticClass: "inner"
  }, [_vm._m(0), _vm._v(" "), this.loading ? _c("loader") : _c("div", {
    staticClass: "notice_center"
  }, [_c("ul", {
    staticClass: "notice_content"
  }, _vm._l(_vm.notifications, function (notify) {
    return _c("li", {
      "class": _vm.getNotifyClass(notify)
    }, [notify.type === "App\\Notifications\\FriendRequest" && notify.data.action === "befriend" ? _c("span", [_c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: _vm.getNotMe(notify).login
          }
        }
      }
    }, [_c("div", {
      staticClass: "user_pic"
    }, [_c("img", {
      attrs: {
        src: _vm.getHeadUrl(_vm.getNotMe(notify).uuid),
        alt: ""
      }
    })]), _vm._v("\n                        " + _vm._s(_vm.getNotMe(notify).login) + "\n                    ")]), _vm._v(" отправил Вам заявку в друзья\n                ")], 1) : _vm._e(), _vm._v(" "), notify.type === "App\\Notifications\\FriendRequest" && notify.data.action === "unfriend" ? _c("span", [_c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: _vm.getNotMe(notify).login
          }
        }
      }
    }, [_c("div", {
      staticClass: "user_pic"
    }, [_c("img", {
      attrs: {
        src: _vm.getHeadUrl(_vm.getNotMe(notify).uuid),
        alt: ""
      }
    })]), _vm._v("\n                        " + _vm._s(_vm.getNotMe(notify).login) + "\n                    ")]), _vm._v(" удалил вас из друзей\n                ")], 1) : _vm._e(), _vm._v(" "), notify.type === "App\\Notifications\\FriendRequest" && notify.data.action === "accept" ? _c("span", [_c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: _vm.getNotMe(notify).login
          }
        }
      }
    }, [_c("div", {
      staticClass: "user_pic"
    }, [_c("img", {
      attrs: {
        src: _vm.getHeadUrl(_vm.getNotMe(notify).uuid),
        alt: ""
      }
    })]), _vm._v("\n                        " + _vm._s(_vm.getNotMe(notify).login) + "\n                    ")]), _vm._v(" принял ваш запрос в друзья\n                ")], 1) : _vm._e(), _vm._v(" "), notify.type === "App\\Notifications\\FriendRequest" && notify.data.action === "deny" ? _c("span", [_c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: _vm.getNotMe(notify).login
          }
        }
      }
    }, [_c("div", {
      staticClass: "user_pic"
    }, [_c("img", {
      attrs: {
        src: _vm.getHeadUrl(_vm.getNotMe(notify).uuid),
        alt: ""
      }
    })]), _vm._v("\n                        " + _vm._s(_vm.getNotMe(notify).login) + "\n                    ")]), _vm._v(" отклонил запрос на дружбу\n                ")], 1) : _vm._e(), _vm._v(" "), notify.type === "App\\Notifications\\NewReply" ? _c("span", [_c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: notify.data.user.login
          }
        }
      }
    }, [_c("div", {
      staticClass: "user_pic"
    }, [_c("img", {
      attrs: {
        src: _vm.getHeadUrl(notify.data.user.uuid),
        alt: ""
      }
    })]), _vm._v("\n                        " + _vm._s(notify.data.user.login) + "\n                    ")]), _vm._v("\n                    ответил в Вашей теме\n                    "), _c("router-link", {
      attrs: {
        to: {
          name: "discussion",
          params: {
            slug: notify.data.discussion.slug
          }
        }
      }
    }, [_vm._v("\n                        " + _vm._s(notify.data.discussion.title) + "\n                    ")])], 1) : _vm._e(), _vm._v(" "), notify.type === "App\\Notifications\\BalanceAdd" ? _c("span", [_vm._v("\n                    Ваш баланс успешно пополнен на " + _vm._s(notify.data.sum) + " " + _vm._s(_vm.declOfNum(notify.data.sum, ["стрим", "стрима", "стримов"])) + "!\n                ")]) : _vm._e(), _vm._v(" "), notify.type === "App\\Notifications\\ChangePasswordNotify" ? _c("span", [_vm._v("\n                    Успешная смена пароля [IP: " + _vm._s(notify.data.ip) + "]\n                ")]) : _vm._e(), _vm._v(" "), notify.type === "App\\Notifications\\TextNotification" ? _c("span", [notify.data.route ? _c("router-link", {
      attrs: {
        to: {
          name: notify.data.route
        }
      }
    }, [_vm._v("\n                        " + _vm._s(notify.data.text) + "\n                    ")]) : _c("div", [_vm._v("\n                      " + _vm._s(notify.data.text) + "\n                    ")])], 1) : _vm._e(), _vm._v(" "), _c("span", {
      staticClass: "meta"
    }, [_vm._v(_vm._s(_vm.humanDiff(notify.created_at)) + " назад")])]);
  }), 0), _vm._v(" "), _vm.pagination.total >= _vm.pagination.per_page ? _c("div", {
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
  })], 1) : _vm._e()])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "headline"
  }, [_c("h2", [_vm._v("Центр уведомлений")]), _vm._v(" "), _c("p", [_vm._v("Здесь отображаются все Ваши уведомления о тех или иных событиях и действиях. Вам отправили заявку в друзья, либо же кому-то понравилось Ваше сообщение? Мы незамедлительно уведомим Вас, будьте в курсе всего первым!")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/Notifications.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/Notifications.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notifications_vue_vue_type_template_id_31bceba2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notifications.vue?vue&type=template&id=31bceba2& */ "./resources/js/pages/Notifications.vue?vue&type=template&id=31bceba2&");
/* harmony import */ var _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notifications.vue?vue&type=script&lang=js& */ "./resources/js/pages/Notifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notifications_vue_vue_type_template_id_31bceba2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notifications_vue_vue_type_template_id_31bceba2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Notifications.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Notifications.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Notifications.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Notifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Notifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Notifications.vue?vue&type=template&id=31bceba2&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Notifications.vue?vue&type=template&id=31bceba2& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_31bceba2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Notifications.vue?vue&type=template&id=31bceba2& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Notifications.vue?vue&type=template&id=31bceba2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_31bceba2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_31bceba2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);