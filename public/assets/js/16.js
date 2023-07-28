(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CabinetSecurity.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/CabinetSecurity.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./resources/js/api/index.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_telegram_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-telegram-login */ "./node_modules/vue-telegram-login/dist/vue-telegram-login.js");
/* harmony import */ var vue_telegram_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_telegram_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ua-parser-js */ "./node_modules/ua-parser-js/src/ua-parser.js");
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CabinetSecurity",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['user', 'servers'])),
  components: {
    vueTelegramLogin: vue_telegram_login__WEBPACK_IMPORTED_MODULE_3__["vueTelegramLogin"]
  },
  mounted: function mounted() {
    this.loadSettings();
  },
  data: function data() {
    return {
      loading: true,
      vk: null,
      vk_data: null,
      lastPasswordChange: null,
      currentEmail: '',
      confirmEmail: '',
      changepass: {
        password: '',
        new_password: '',
        new_password2: '',
        logout: true
      },
      qr_url: '',
      otp: {
        enabled: false,
        code: '',
        tempsecret: '',
        backup_codes: []
      },
      show_codes: false,
      auth_logs: [],
      telegram_id: false,
      tg_token: '',
      show_tg: false,
      confirmedAt: 0,
      selectedServer: null,
      drivers: [],
      integrations: []
    };
  },
  methods: {
    hasIntegration: function hasIntegration(driver) {
      return this.integrations.find(function (integration) {
        return integration.driver === driver;
      });
    },
    unlink: function unlink(integration) {
      var _this = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('profile/oauth/unlink/' + integration.driver).then(function (response) {
        if (response.data.success) {
          _this.loadSettings();
        }
      });
    },
    link: function link(driver) {
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('profile/oauth/link/' + driver).then(function (response) {
        if (response.data.success) {
          window.location = response.data.url;
        }
      });
    },
    getIntegrationProfileURL: function getIntegrationProfileURL(integration) {
      switch (integration.driver) {
        case 'discord':
          return "#";
        case 'vkontakte':
          return 'https://vk.com/id' + integration.ext_id;
        case 'steam':
          return integration.data.user_raw.profileurl;
        case 'mailru':
        case 'yandex':
          return '';
        case 'telegram':
          return 'https://t.me/' + integration.data.nickname;
      }
    },
    getDriverName: function getDriverName(driver) {
      switch (driver) {
        case 'discord':
          return "Discord";
        case 'vkontakte':
          return "ВКонтакте";
        case 'steam':
          return "Steam";
        case 'yandex':
          return "Яндекс";
        case 'telegram':
          return "Telegram";
        case 'mailru':
          return "Mail.Ru";
      }
    },
    takeBonus: function takeBonus() {
      var _this2 = this;
      this.loading = true;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('settings/email/bonus', {
        server: this.selectedServer
      }).then(function (response) {
        _this2.loading = false;
      });
    },
    sendConfirmEmail: function sendConfirmEmail() {
      var _this3 = this;
      this.loading = true;
      this.$recaptcha('email_confirm').then(function (token) {
        _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('settings/email/confirm', {
          email: _this3.confirmEmail,
          captcha: token
        }).then(function (response) {
          _this3.loading = false;
        });
      });
    },
    resetSessions: function resetSessions() {
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('settings/save', {
        reset_sessions: true
      }).then(function (response) {
        if (response.data.success) {
          window.location.reload();
        }
      });
    },
    loadSettings: function loadSettings() {
      var _this4 = this;
      this.loading = true;
      this.confirmEmail = this.user.email;
      this.currentEmail = this.user.email;
      this.confirmedAt = this.user.email_confirmed_at;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('settings').then(function (response) {
        _this4.vk = response.data.vk;
        _this4.vk_data = response.data.vkData;
        _this4.lastPasswordChange = response.data.lastPasswordChange;
        _this4.otp.enabled = response.data.otp;
        _this4.otp.tempsecret = response.data.tempsecret;
        _this4.qr_url = response.data.qr_url;
        _this4.auth_logs = response.data.auth_logs;
        _this4.telegram_id = response.data.telegram_id;
        _this4.drivers = response.data.drivers;
        _this4.integrations = response.data.integrations.map(function (integration) {
          integration.data = JSON.parse(integration.data);
          return integration;
        });
        _this4.auth_logs.map(function (log) {
          log.ua = new ua_parser_js__WEBPACK_IMPORTED_MODULE_4___default.a(log.user_agent);
          return log;
        });
        _this4.loading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    changePassword: function changePassword() {
      var _this5 = this;
      this.loading = true;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('settings/save', {
        pass: this.changepass.password,
        newpass: this.changepass.new_password,
        logout: this.changepass.logout
      }).then(function (response) {
        _this5.loading = false;
        if (response.data.success && _this5.changepass.logout) {
          window.location.reload();
        }
        _this5.loadSettings();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    changeOTP: function changeOTP() {
      var _this6 = this;
      this.loading = true;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('settings/save', {
        code: this.otp.code,
        tempsecret: this.otp.tempsecret
      }).then(function (response) {
        _this6.otp.code = _this6.otp.tempsecret = '';
        _this6.loading = false;
        if (response.data.codes) {
          _this6.otp.backup_codes = response.data.codes;
          _this6.show_codes = true;
        }
        _this6.loadSettings();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    saveCodes: function saveCodes() {
      var blob = new Blob([this.otp.backup_codes.join("\n")], {
        type: "text/plain;charset=utf-8"
      });
      Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(blob, "recovery_codes.txt");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CabinetSecurity.vue?vue&type=template&id=2189833f&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/CabinetSecurity.vue?vue&type=template&id=2189833f&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    "class": this.loading ? "unload" : ""
  }, [_c("div", {
    staticClass: "section"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-lg-5"
  }, [_c("h3", [_vm._v("Параметры безопасности")]), _vm._v(" "), _c("p", [_vm._v("Не пренебрегайте безопасностью Вашего аккаунта, не используйте один и тот же пароль на разных\n                    проектах во избежании взлома.")]), _vm._v(" "), _c("p", [_vm._v("Ниже вы можете привязать сторонние сервисы, что позволит входить в аккаунт и восстанавливать к нему доступ в один клик!")]), _vm._v(" "), _vm._l(_vm.integrations, function (integration) {
    return _c("div", [_c("hr"), _vm._v(" "), _c("p", [_vm._v("Вы подключили " + _vm._s(_vm.getDriverName(integration.driver)) + ", теперь вы можете быстро и безопасно входить на сайт и восстановить пароль, в случае его утери.")]), _vm._v(" "), _c("a", {
      staticClass: "row justify-content-center align-items-center vk_user mx-0 mt-2",
      attrs: {
        href: _vm.getIntegrationProfileURL(integration),
        target: "_blank"
      }
    }, [_c("div", {
      staticClass: "user_pic"
    }, [_c("img", {
      attrs: {
        src: integration.data.avatar,
        alt: ""
      }
    })]), _vm._v(" "), _c("h5", {
      staticClass: "col-12 col-sm pl-2"
    }, [_vm._v("\n                            " + _vm._s(integration.data.name) + "\n                            "), _c("small", [_vm._v(_vm._s(integration.data.nickname))])])]), _vm._v(" "), _c("a", {
      staticClass: "btn_common primary mt-2",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.unlink(integration);
        }
      }
    }, [_vm._v("Отвязать " + _vm._s(_vm.getDriverName(integration.driver)))])]);
  }), _vm._v(" "), _vm._l(_vm.drivers, function (driver) {
    return !_vm.hasIntegration(driver) ? _c("div", [_c("hr"), _vm._v(" "), driver === "telegram" ? _c("vue-telegram-login", {
      attrs: {
        mode: "redirect",
        "telegram-login": "dreamcms_bot",
        "redirect-url": _vm.url("/oauth/link/telegram"),
        userpic: "",
        radius: "5",
        requestAccess: "write"
      }
    }) : _c("a", {
      staticClass: "btn_common primary mt-2",
      attrs: {
        href: _vm.getIntegrationURL(driver, "link")
      }
    }, [_vm._v("Подключить " + _vm._s(_vm.getDriverName(driver)))])], 1) : _vm._e();
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "baseform"
  }, [_c("h4", [_vm._v("Подтверждение почты")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-lg-6 col-xl-5"
  }, [_vm._v("Текущая почта")]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_vm._v("\n                                " + _vm._s(_vm.currentEmail) + "\n                            ")])]), _vm._v(" "), _vm.confirmedAt > 0 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-lg-6 col-xl-5"
  }, [_vm._v("Ваша почта подтверждена!")])]) : _c("div", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-lg-6 col-xl-5"
  }, [_vm._v("Введите почту для подтверждения")]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.confirmEmail,
      expression: "confirmEmail"
    }],
    attrs: {
      type: "email",
      name: "email"
    },
    domProps: {
      value: _vm.confirmEmail
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.confirmEmail = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-lg-6 col-xl-5"
  }), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("a", {
    staticClass: "btn_common primary",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.sendConfirmEmail.apply(null, arguments);
      }
    }
  }, [_vm._v("Отправить подтверждение")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "airside"
  }, [_c("div", {
    staticClass: "baseform"
  }, [_c("h4", [_vm._v("Изменить пароль")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-lg-6 col-xl-5"
  }, [_vm._v("Последняя смена пароля")]), _vm._v(" "), _vm.lastPasswordChange ? _c("div", {
    staticClass: "col"
  }, [_vm._v("\n                                " + _vm._s(_vm.moment.unix(_vm.lastPasswordChange).format("lll")) + "\n                            ")]) : _c("div", {
    staticClass: "col"
  }, [_vm._v("\n                                Не менялся с момента регистрации\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-lg-6 col-xl-5"
  }, [_vm._v("Введите текущий пароль")]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("b-input", {
    attrs: {
      type: "password",
      name: "pass",
      placeholder: "••••••••••••••••"
    },
    model: {
      value: _vm.changepass.password,
      callback: function callback($$v) {
        _vm.$set(_vm.changepass, "password", $$v);
      },
      expression: "changepass.password"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-lg-6 col-xl-5"
  }, [_vm._v("Придумайте новый пароль")]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("b-input", {
    attrs: {
      type: "password",
      name: "pass",
      placeholder: "••••••••••••••••",
      autocomplete: "off"
    },
    model: {
      value: _vm.changepass.new_password,
      callback: function callback($$v) {
        _vm.$set(_vm.changepass, "new_password", $$v);
      },
      expression: "changepass.new_password"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-lg-6 col-xl-5"
  }, [_vm._v("Повторите новый пароль")]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("b-input", {
    attrs: {
      type: "password",
      name: "pass",
      placeholder: "••••••••••••••••",
      autocomplete: "off",
      state: _vm.changepass.new_password.length > 0 && _vm.changepass.new_password === _vm.changepass.new_password2
    },
    model: {
      value: _vm.changepass.new_password2,
      callback: function callback($$v) {
        _vm.$set(_vm.changepass, "new_password2", $$v);
      },
      expression: "changepass.new_password2"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-lg-6 col-xl-5"
  }), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("label", {
    staticClass: "mb-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.changepass.logout,
      expression: "changepass.logout"
    }],
    staticClass: "checkbox",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.changepass.logout) ? _vm._i(_vm.changepass.logout, null) > -1 : _vm.changepass.logout
    },
    on: {
      change: function change($event) {
        var $$a = _vm.changepass.logout,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.changepass, "logout", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.changepass, "logout", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.changepass, "logout", $$c);
        }
      }
    }
  }), _vm._v("\n                                    Сбросить все сессии\n                                ")]), _vm._v(" "), _c("br"), _vm._v(" "), _vm.changepass.new_password === _vm.changepass.new_password2 ? _c("a", {
    staticClass: "btn_common primary",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changePassword.apply(null, arguments);
      }
    }
  }, [_vm._v("Сменить пароль")]) : _vm._e()])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "section light"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-lg-5"
  }, [_vm.otp.enabled ? _c("div", [_c("p", [_vm._v("У вас подключена двухэтапная авторизация, при входе на сайт или с нового устройства в\n                        лаунчере, потребуется код из приложения для входа. Не потеряйте его!")])]) : _c("div", [_c("p", [_vm._v("Загрузите приложение Яндекс.Ключ или Google Authenticator на свой телефон, отсканируйте\n                        QR-код и введите код в соответствующее поле здесь, после чего Вы сможете быстро\n                        авторизоваться на сайте при помощи одноразового пароля из приложения.")]), _vm._v(" "), _c("div", {
    staticClass: "text-center mt-3"
  }, [_c("img", {
    attrs: {
      src: _vm.qr_url
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "m-0"
  }, [_vm._v("QR-Code")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg mt-4 mt-md-5"
  }, [_c("div", {
    staticClass: "baseform"
  }, [_c("h4", [_vm._v("Двухэтапная авторизация")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-lg-6 col-xl-5"
  }, [_vm._v("Код из приложения")]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.otp.code,
      expression: "otp.code"
    }],
    attrs: {
      type: "text",
      placeholder: "123456"
    },
    domProps: {
      value: _vm.otp.code
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.otp, "code", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-lg-6 col-xl-5"
  }), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [!_vm.otp.enabled ? _c("a", {
    staticClass: "btn_common primary",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeOTP.apply(null, arguments);
      }
    }
  }, [_vm._v("Активировать\n                                защиту")]) : _c("a", {
    staticClass: "btn_common primary",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeOTP.apply(null, arguments);
      }
    }
  }, [_vm._v("Снять защиту\n                                (потребуется код или резервный код)")])])])]), _vm._v(" "), _c("div", {
    staticClass: "alert_2step"
  }, [_vm._v("\n                    После активации защиты ни в коем случае НЕ УДАЛЯЙТЕ ПРИЛОЖЕНИЕ до отключения этой функции и сохраните резервные коды, которые вы получите после включения, иначе\n                    Вы не сможете зайти в аккаунт без кода из приложения!\n                ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "section spreadsheet mt-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("a", {
    staticClass: "btn_common info",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.resetSessions.apply(null, arguments);
      }
    }
  }, [_vm._v("Сбросить все сессии")])])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "body"
  }, _vm._l(_vm.auth_logs, function (log) {
    return _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-12 col-sm-4 col-md"
    }, [_vm._v("\n                    " + _vm._s(log.ip_address) + "\n                ")]), _vm._v(" "), _c("div", {
      staticClass: "col-12 col-sm-4 col-md"
    }, [_vm._v("\n                    Браузер: " + _vm._s(log.ua.getBrowser().name || "Неизвестно") + " " + _vm._s(log.ua.getBrowser().version) + " "), _c("br"), _vm._v("\n                    ОС: " + _vm._s(log.ua.getOS().name || "Неизвестно") + " " + _vm._s(log.ua.getOS().version) + " "), _c("br"), _vm._v("\n                    Устройство: " + _vm._s(log.ua.getDevice().vendor || "Неизвестно") + " " + _vm._s(log.ua.getDevice().model) + " "), _c("br"), _vm._v(" "), _c("br")]), _vm._v(" "), _c("div", {
      staticClass: "col-12 col-sm-4 col-md"
    }, [_vm._v("\n                    " + _vm._s(_vm.moment(log.login_at).format("lll")) + "\n                ")])]);
  }), 0)]), _vm._v(" "), _c("b-modal", {
    attrs: {
      "modal-class": "modal",
      "hide-header": "",
      "hide-footer": "",
      "content-class": "custom_modal",
      size: "lg"
    },
    model: {
      value: _vm.show_codes,
      callback: function callback($$v) {
        _vm.show_codes = $$v;
      },
      expression: "show_codes"
    }
  }, [_c("div", {
    attrs: {
      id: "modal"
    }
  }, [_c("div", {
    staticClass: "window aboutKits"
  }, [_c("div", {
    staticClass: "header mb-2"
  }, [_c("h2", [_vm._v("Резервные коды")]), _vm._v(" "), _c("div", {
    staticClass: "row justify-content-center"
  }, [_c("p", {
    staticClass: "col-12 col-md-9 p-0"
  }, [_vm._v("Мы сгенерировали для Вас одноразовые секретные коды. В случае потери доступа к генератору кодов, мы сможете восстановить доступ с помощью кодов ниже. НИКОМУ НЕ ПЕРЕДАВАЙТЕ ИХ!")]), _vm._v(" "), _c("p", {
    staticClass: "col-12 mt-3"
  }, [_c("a", {
    staticClass: "btn_common primary",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.saveCodes.apply(null, arguments);
      }
    }
  }, [_vm._v("Сохранить в файл")])])])]), _vm._v(" "), _c("div", {
    staticClass: "body"
  }, [_c("div", {
    staticClass: "row justify-content-center"
  }, [_c("ul", _vm._l(_vm.otp.backup_codes, function (code) {
    return _c("li", [_c("h3", [_vm._v(_vm._s(code))])]);
  }), 0)])])])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-9"
  }, [_c("h3", [_vm._v("Успешные входы в аккаунт за последние 30 дней")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "head d-none d-sm-block mt-5"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-4 col-md"
  }, [_vm._v("IP адрес")]), _vm._v(" "), _c("div", {
    staticClass: "col-4 col-md"
  }, [_vm._v("Браузер")]), _vm._v(" "), _c("div", {
    staticClass: "col-4 col-md"
  }, [_vm._v("Время")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/CabinetSecurity.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/CabinetSecurity.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CabinetSecurity_vue_vue_type_template_id_2189833f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CabinetSecurity.vue?vue&type=template&id=2189833f&scoped=true& */ "./resources/js/pages/CabinetSecurity.vue?vue&type=template&id=2189833f&scoped=true&");
/* harmony import */ var _CabinetSecurity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CabinetSecurity.vue?vue&type=script&lang=js& */ "./resources/js/pages/CabinetSecurity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CabinetSecurity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CabinetSecurity_vue_vue_type_template_id_2189833f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CabinetSecurity_vue_vue_type_template_id_2189833f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2189833f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/CabinetSecurity.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/CabinetSecurity.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/CabinetSecurity.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CabinetSecurity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CabinetSecurity.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CabinetSecurity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CabinetSecurity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/CabinetSecurity.vue?vue&type=template&id=2189833f&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/CabinetSecurity.vue?vue&type=template&id=2189833f&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CabinetSecurity_vue_vue_type_template_id_2189833f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./CabinetSecurity.vue?vue&type=template&id=2189833f&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CabinetSecurity.vue?vue&type=template&id=2189833f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CabinetSecurity_vue_vue_type_template_id_2189833f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CabinetSecurity_vue_vue_type_template_id_2189833f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);