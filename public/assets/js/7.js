(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AuthRecovery.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AuthRecovery.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./resources/js/api/index.js");
/* harmony import */ var vue_telegram_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-telegram-login */ "./node_modules/vue-telegram-login/dist/vue-telegram-login.js");
/* harmony import */ var vue_telegram_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_telegram_login__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AuthRecovery",
  components: {
    vueTelegramLogin: vue_telegram_login__WEBPACK_IMPORTED_MODULE_1__["vueTelegramLogin"]
  },
  data: function data() {
    return {
      loading: false,
      hotfix: false,
      email: '',
      password: '',
      password2: ''
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function () {
      _this.hotfix = true;
    });
  },
  computed: {
    emailState: function emailState() {
      if (this.email !== '') {
        return /.+@.+/.test(this.email);
      }
      return null;
    },
    passwordState: function passwordState() {
      if (this.password !== '') {
        return !(this.password.length < 8 || this.password.length > 40);
      }
      return null;
    },
    passwordState2: function passwordState2() {
      return this.password.length > 0 ? this.password === this.password2 : null;
    }
  },
  methods: {
    savePassword: function savePassword() {
      var _this2 = this;
      if (this.passwordState && this.passwordState2) {
        this.loading = true;
        _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('auth/password/reset', {
          token: this.$route.params.token,
          email: this.email,
          password: this.password,
          password_confirmation: this.password2
        })["finally"](function () {
          _this2.loading = false;
        });
      }
    },
    vkRecovery: function vkRecovery() {
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('auth/vk/redirect?page=recovery').then(function (response) {
        if (response.data.success) {
          window.location = response.data.url;
        }
      });
    },
    emailRecovery: function emailRecovery() {
      var _this3 = this;
      this.loading = true;
      this.$recaptcha('recovery').then(function (token) {
        _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('auth/password/email', {
          email: _this3.email,
          captcha: token
        })["finally"](function () {
          _this3.loading = false;
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AuthRecovery.vue?vue&type=template&id=21494ce6&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AuthRecovery.vue?vue&type=template&id=21494ce6&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    "class": "inner " + (this.loading ? "unload" : "")
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "recovery"
  }, [this.$route.params.token ? _c("div", {
    staticClass: "row section text-center text-sm-left"
  }, [_c("div", {
    staticClass: "col-12 col-md-6 col-lg-12 col-xl-6"
  }, [_c("i", {
    staticClass: "big fas fa-at"
  }), _vm._v(" "), _c("h3", [_vm._v("Установка нового пароля")]), _vm._v(" "), _c("div", {
    staticClass: "row mt-4"
  }, [_c("div", {
    staticClass: "col-12 col-sm col-md-12 pr-0 pr-md-3"
  }, [_c("b-input", {
    staticClass: "form-control-lg",
    attrs: {
      placeholder: "Email",
      state: _vm.emailState,
      autocomplete: "off"
    },
    model: {
      value: _vm.email,
      callback: function callback($$v) {
        _vm.email = $$v;
      },
      expression: "email"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm col-md-12 pr-0 pr-md-3 mt-2"
  }, [_c("b-input", {
    staticClass: "form-control-lg",
    attrs: {
      placeholder: "Новый пароль",
      type: "password",
      state: _vm.passwordState
    },
    model: {
      value: _vm.password,
      callback: function callback($$v) {
        _vm.password = $$v;
      },
      expression: "password"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm col-md-12 pr-0 pr-md-3 mt-2"
  }, [_c("b-input", {
    staticClass: "form-control-lg",
    attrs: {
      placeholder: "Повторите пароль",
      type: "password",
      state: _vm.passwordState2
    },
    model: {
      value: _vm.password2,
      callback: function callback($$v) {
        _vm.password2 = $$v;
      },
      expression: "password2"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-7 col-md-12 mt-2 mt-sm-0 mt-md-3"
  }, [_c("a", {
    staticClass: "btn_common",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.savePassword.apply(null, arguments);
      }
    }
  }, [_vm._v("Сменить пароль")])])])])]) : _c("div", {
    staticClass: "row section text-center text-sm-left"
  }, [_c("div", {
    staticClass: "col-12 col-md-6 col-lg-12 col-xl-6"
  }, [_c("i", {
    staticClass: "big fab fa-vk"
  }), _vm._v(" "), _c("h3", [_vm._v("Восстановить доступ при помощи соц-сетей")]), _vm._v(" "), _c("p", [_vm._v("Вы предусмотрительно привязали Ваш аккаунт к соц-сетям?")]), _vm._v(" "), _c("p", {
    staticClass: "mb-2"
  }, [_vm._v("Знайте, Вы — большой молодец, и благодаря этому Вы теперь можете всего в пару кликов восстановить свой аккаунт, выбрав сервис ниже!")]), _vm._v(" "), _vm.hotfix ? _c("vue-telegram-login", {
    attrs: {
      mode: "redirect",
      "telegram-login": "dreamcms_bot",
      "redirect-url": _vm.url("/oauth/recovery/telegram"),
      userpic: "",
      radius: "5",
      requestAccess: "write"
    }
  }) : _vm._e(), _vm._v(" "), _c("a", {
    staticClass: "btn_common info mt-2",
    staticStyle: {
      "font-size": "28px"
    },
    attrs: {
      href: _vm.getIntegrationURL("vkontakte", "recovery")
    }
  }, [_c("i", {
    staticClass: "fab fa-vk"
  })]), _vm._v(" "), _c("a", {
    staticClass: "btn_common info mt-2",
    staticStyle: {
      "font-size": "28px"
    },
    attrs: {
      href: _vm.getIntegrationURL("discord", "recovery")
    }
  }, [_c("i", {
    staticClass: "fab fa-discord"
  })]), _vm._v(" "), _c("a", {
    staticClass: "btn_common info mt-2",
    staticStyle: {
      "font-size": "28px"
    },
    attrs: {
      href: _vm.getIntegrationURL("yandex", "recovery")
    }
  }, [_c("i", {
    staticClass: "fab fa-yandex"
  })]), _vm._v(" "), _c("a", {
    staticClass: "btn_common info mt-2",
    staticStyle: {
      "font-size": "28px"
    },
    attrs: {
      href: _vm.getIntegrationURL("steam", "recovery")
    }
  }, [_c("i", {
    staticClass: "fab fa-steam"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6 col-lg-12 col-xl-6"
  }, [_c("i", {
    staticClass: "big fas fa-at"
  }), _vm._v(" "), _c("h3", [_vm._v("Восстановить доступ через электронную почту")]), _vm._v(" "), _c("p", [_vm._v("Менее быстрый способ восстановления аккаунта, укажите почту привязанную к аккаунту и вы получите письмо с уникаольной ссылкой для восстановления пароля")]), _vm._v(" "), _c("div", {
    staticClass: "row mt-4"
  }, [_c("div", {
    staticClass: "col-12 col-sm col-md-12 pr-0 pr-md-3"
  }, [_c("b-input", {
    staticClass: "form-control-lg",
    attrs: {
      placeholder: "Почта",
      state: _vm.emailState
    },
    model: {
      value: _vm.email,
      callback: function callback($$v) {
        _vm.email = $$v;
      },
      expression: "email"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-7 col-md-12 mt-2 mt-sm-0 mt-md-3"
  }, [_c("a", {
    staticClass: "btn_common",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.emailRecovery.apply(null, arguments);
      }
    }
  }, [_vm._v("Выслать инструкцию")])])])])]), _vm._v(" "), _vm._m(1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "headline"
  }, [_c("h2", [_vm._v("Восстановление пароля")]), _vm._v(" "), _c("p", [_vm._v("Если Вы забыли логин, пароль, либо же их сразу вместе, то Вам поможет наша форма восстановления, Вы можете восстановить аккаунт либо при помощи привязанного аккаунта ВКонтакте, либо же через электронную почту.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row justify-content-center text-center"
  }, [_c("div", {
    staticClass: "col-12 col-md-8 pt-4 pb-3"
  }, [_c("p", {
    staticClass: "other"
  }, [_vm._v("Случилось нечто непредвиденное и Вы не можете восстановить доступ к Вашему аккаунту? Обратитесь в нашу группу ВКонтакте, где администрация проекта поможет Вам решить все возникшие проблемы.")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("a", {
    staticClass: "btn_large primary d-inline-block",
    attrs: {
      href: "https://vk.me/avemc"
    }
  }, [_c("span", [_vm._v("Группа ВКонтакте")]), _vm._v(" "), _c("small", [_vm._v("Техническая поддержка 24/7")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/AuthRecovery.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/AuthRecovery.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthRecovery_vue_vue_type_template_id_21494ce6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthRecovery.vue?vue&type=template&id=21494ce6&scoped=true& */ "./resources/js/pages/AuthRecovery.vue?vue&type=template&id=21494ce6&scoped=true&");
/* harmony import */ var _AuthRecovery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthRecovery.vue?vue&type=script&lang=js& */ "./resources/js/pages/AuthRecovery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthRecovery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthRecovery_vue_vue_type_template_id_21494ce6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthRecovery_vue_vue_type_template_id_21494ce6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "21494ce6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/AuthRecovery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/AuthRecovery.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/AuthRecovery.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRecovery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRecovery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AuthRecovery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRecovery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/AuthRecovery.vue?vue&type=template&id=21494ce6&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/AuthRecovery.vue?vue&type=template&id=21494ce6&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRecovery_vue_vue_type_template_id_21494ce6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRecovery.vue?vue&type=template&id=21494ce6&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AuthRecovery.vue?vue&type=template&id=21494ce6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRecovery_vue_vue_type_template_id_21494ce6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRecovery_vue_vue_type_template_id_21494ce6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);