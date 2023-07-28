(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CabinetIndex.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/CabinetIndex.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./resources/js/api/index.js");
/* harmony import */ var skinview3d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! skinview3d */ "./node_modules/skinview3d/dist/skinview3d.module.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CabinetIndex",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['isLogged', 'user', 'role', 'servers', 'roles'])),
  data: function data() {
    return {
      skinViewer: null,
      walk: false,
      rotate: false,
      run: false,
      flatSkin: false,
      skinLoading: false,
      colors: [{
        "char": '',
        name: 'Выберите...',
        disabled: true
      }, {
        "char": '1',
        name: '[&1] Тёмно-синий',
        hex: '#0000AA'
      }, {
        "char": '3',
        name: '[&3] Бирюзовый',
        hex: '#00AAAA'
      }, {
        "char": '5',
        name: '[&5] Фиолетовый',
        hex: '#AA00AA'
      }, {
        "char": '6',
        name: '[&6] Оранжевый',
        hex: '#FFAA00'
      }, {
        "char": '7',
        name: '[&7] Серый',
        hex: '#aaa'
      }, {
        "char": '8',
        name: '[&8] Тёмно-серый',
        hex: '#555'
      }, {
        "char": '9',
        name: '[&9] Синий',
        hex: '#5555FF'
      }, {
        "char": 'a',
        name: '[&a] Светло-зелёный',
        hex: '#55FF55'
      }, {
        "char": 'b',
        name: '[&b] Голубой',
        hex: '#55FFFF'
      }, {
        "char": 'c',
        name: '[&c] Красный',
        hex: '#FF5555'
      }, {
        "char": 'd',
        name: '[&d] Розовый',
        hex: '#FF55FF'
      }, {
        "char": 'e',
        name: '[&e] Жёлтый',
        hex: '#ffff55'
      }, {
        "char": 'f',
        name: '[&f] Белый',
        hex: '#fff'
      }],
      prefix: {
        server: null,
        text: '',
        msg_color: '',
        nick_color: '',
        prefix_color: ''
      }
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.prefix.text = this.roles[0].toUpperCase();
    this.$nextTick(function () {
      _this.initSkin();
    });
  },
  watch: {
    '$route': function $route() {
      var _this2 = this;
      this.$nextTick(function () {
        _this2.initSkin();
      });
    },
    flatSkin: function flatSkin() {
      var _this3 = this;
      this.$nextTick(function () {
        _this3.initSkin();
      });
    },
    'prefix.text': function prefixText(newVal) {
      if (newVal.length > 10) {
        this.prefix.text = newVal.substr(0, 10);
      }
    },
    'prefix.prefix_color': function prefixPrefix_color(newVal) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#prefix_color').attr('style', "background-color:".concat(this.getColor(newVal).hex, " !important;") + "background-image:".concat(this.getColor(newVal).img, " !important;") + "color:".concat(this.getColor(newVal).back, " !important"));
    },
    'prefix.nick_color': function prefixNick_color(newVal) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#nick_color').attr('style', "background-color:".concat(this.getColor(newVal).hex, " !important;") + "background-image:".concat(this.getColor(newVal).img, " !important;") + "color:".concat(this.getColor(newVal).back, " !important"));
    },
    'prefix.msg_color': function prefixMsg_color(newVal) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#msg_color').attr('style', "background-color:".concat(this.getColor(newVal).hex, " !important;") + "background-image:".concat(this.getColor(newVal).img, " !important;") + "color:".concat(this.getColor(newVal).back, " !important"));
    }
  },
  methods: {
    downloadFile: function downloadFile(url, name) {
      Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(url, name);
    },
    getColor: function getColor(_char) {
      var find = this.colors.find(function (color) {
        return color["char"] === _char;
      });
      if (find) {
        var back = _char === 'a' || _char === 'b' || _char === 'e' ? 'rgba(0, 0, 0, 0.6)' : _char === 'f' ? '' : '#fff';
        var img = _char === 'a' || _char === 'b' || _char === 'e' ? 'url("/assets/img/selectDropDark.svg")' : _char === 'f' ? '' : 'url("/assets/img/selectDropLight.svg")';
        return {
          hex: find.hex,
          back: back,
          img: img
        };
      }
      return {
        hex: '',
        back: '',
        img: ''
      };
    },
    savePrefix: function savePrefix() {
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('profile/prefix/set', this.prefix).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    uploadSkin: function uploadSkin(event) {
      if (event.target.files) {
        var formData = new FormData();
        formData.append("type", 'skin');
        formData.append("file", event.target.files[0]);
        this.upload(formData);
      } else jquery__WEBPACK_IMPORTED_MODULE_4___default()('#skin_file').click();
    },
    uploadCloak: function uploadCloak(event) {
      if (event.target.files) {
        var formData = new FormData();
        formData.append("type", 'cloak');
        formData.append("file", event.target.files[0]);
        this.upload(formData);
      } else jquery__WEBPACK_IMPORTED_MODULE_4___default()('#cloak_file').click();
    },
    updateSkin: function updateSkin() {
      this.skinViewer.skinUrl = this.skinViewer.skinUrl + '?time=' + moment__WEBPACK_IMPORTED_MODULE_3___default()().unix();
      this.skinViewer.capeUrl = this.skinViewer.capeUrl + '?time=' + moment__WEBPACK_IMPORTED_MODULE_3___default()().unix();
    },
    upload: function upload(formData) {
      var _this4 = this;
      this.skinLoading = true;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('skins/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        _this4.updateSkin();
        _this4.skinLoading = false;
      });
    },
    deleteSkin: function deleteSkin() {
      var _this5 = this;
      this.skinLoading = true;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('skins/delete', {
        type: 'skin'
      }).then(function (response) {
        _this5.updateSkin();
        _this5.skinLoading = false;
      });
    },
    deleteCloak: function deleteCloak() {
      var _this6 = this;
      this.skinLoading = true;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('skins/delete', {
        type: 'cloak'
      }).then(function (response) {
        _this6.updateSkin();
        _this6.skinLoading = false;
      });
    },
    initSkin: function initSkin() {
      if (!document.getElementById("skin_container")) return;
      this.skinViewer = new skinview3d__WEBPACK_IMPORTED_MODULE_1__["SkinViewer"]({
        domElement: document.getElementById("skin_container"),
        width: 300,
        height: 320,
        skinUrl: '/skins/' + this.user.uuid + '.png',
        capeUrl: '/cloaks/' + this.user.uuid + '.png'
      });
      console.log("Init skin view");
      console.log(this.skinViewer);
      var control = skinview3d__WEBPACK_IMPORTED_MODULE_1__["createOrbitControls"](this.skinViewer);
      control.enableRotate = true;
      control.enableZoom = false;
      control.enablePan = false;
      this.$set(this.skinViewer, 'animation', new skinview3d__WEBPACK_IMPORTED_MODULE_1__["CompositeAnimation"]());
      this.walk = this.skinViewer.animation.add(skinview3d__WEBPACK_IMPORTED_MODULE_1__["WalkingAnimation"]);
      this.rotate = this.skinViewer.animation.add(skinview3d__WEBPACK_IMPORTED_MODULE_1__["RotatingAnimation"]);
      this.run = this.skinViewer.animation.add(skinview3d__WEBPACK_IMPORTED_MODULE_1__["RunningAnimation"]);
      this.$set(this.run, 'paused', true);
      this.$set(this.rotate, 'speed', 3);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CabinetIndex.vue?vue&type=template&id=702cfa63&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/CabinetIndex.vue?vue&type=template&id=702cfa63&scoped=true& ***!
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
    staticClass: "row character"
  }, [_c("div", {
    "class": "col-12 col-lg-6 " + (_vm.skinLoading ? "unload" : "")
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "section preview"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-sm viewer"
  }, [!_vm.flatSkin ? _c("div", {
    staticClass: "viewer_dim"
  }, [_c("div", {
    attrs: {
      id: "skin_container"
    }
  })]) : _vm._e(), _vm._v(" "), _vm.flatSkin ? _c("div", {
    staticClass: "viewer_dim mt-4"
  }, [_c("img", {
    attrs: {
      src: "/skin/" + _vm.user.uuid + "/front/260",
      width: "128",
      height: "256"
    }
  }), _vm._v(" "), _c("img", {
    attrs: {
      src: "/skin/" + _vm.user.uuid + "/back/260",
      width: "128",
      height: "256"
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "control_view"
  }, [_c("a", {
    staticClass: "btn_common",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.rotate.paused = !_vm.rotate.paused;
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-sync-alt"
  })]), _vm._v(" "), _c("a", {
    staticClass: "btn_common",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.skinViewer.animationPaused = !_vm.skinViewer.animationPaused;
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-pause"
  })]), _vm._v(" "), _c("a", {
    staticClass: "btn_common",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.flatSkin = !_vm.flatSkin;
      }
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.flatSkin ? "3D" : "2D") + "\n                        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm mt-4 mt-sm-0"
  }, [_c("div", [_c("h4", [_vm._v("Скин")]), _vm._v(" "), _vm.hasPermission("upload.skin.hd.edit") ? _c("p", [_vm._v("Вы можете загрузить любой скин в высоком HD качестве!")]) : _c("p", [_vm._v("Всем игрокам доступна загрузка скинов в классическом 64x64 разрешении.")]), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_c("a", {
    staticClass: "btn_common",
    attrs: {
      href: ""
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.uploadSkin.apply(null, arguments);
      }
    }
  }, [_vm._v("Загрузить")]), _vm._v(" "), _c("a", {
    staticClass: "btn_common ml-1",
    attrs: {
      href: "#",
      target: "_blank"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.downloadFile("/skins/" + _vm.user.uuid + ".png", _vm.user.login + "_skin.png");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-arrow-alt-to-bottom"
  })]), _vm._v(" "), _vm.hasPermission("upload.skin.delete") ? _c("a", {
    staticClass: "btn_common ml-1",
    attrs: {
      href: ""
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.deleteSkin.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-trash-alt"
  })]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "mt-5"
  }, [_c("h4", [_vm._v("Плащ")]), _vm._v(" "), _vm.hasPermission("upload.cloak.hd.edit") ? _c("div", [_c("p", [_vm._v("Загрузите плащ в высоком качестве HD разрешения прямо сейчас!")]), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_c("a", {
    staticClass: "btn_common",
    attrs: {
      href: ""
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.uploadCloak.apply(null, arguments);
      }
    }
  }, [_vm._v("Загрузить")]), _vm._v(" "), _c("a", {
    staticClass: "btn_common ml-1",
    attrs: {
      href: "#",
      target: "_blank"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.downloadFile("/cloaks/" + _vm.user.uuid + ".png", _vm.user.login + "_cloak.png");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-arrow-alt-to-bottom"
  })]), _vm._v(" "), _vm.hasPermission("upload.cloak.delete") ? _c("a", {
    staticClass: "btn_common ml-1",
    attrs: {
      href: ""
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.deleteCloak.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-trash-alt"
  })]) : _vm._e()])]) : _c("div", [_vm.hasPermission("upload.cloak.edit") ? _c("div", [_c("p", [_vm._v("Надевается на спину Вашего персонажа на всех наших игровых серверах.")]), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_c("a", {
    staticClass: "btn_common",
    attrs: {
      href: ""
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.uploadCloak.apply(null, arguments);
      }
    }
  }, [_vm._v("Загрузить")]), _vm._v(" "), _c("a", {
    staticClass: "btn_common ml-1",
    attrs: {
      href: "#",
      target: "_blank"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.downloadFile("/cloaks/" + _vm.user.uuid + ".png", _vm.user.login + "_cloak.png");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-arrow-alt-to-bottom"
  })]), _vm._v(" "), _vm.hasPermission("upload.cloak.delete") ? _c("a", {
    staticClass: "btn_common ml-1",
    attrs: {
      href: ""
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.deleteCloak.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-trash-alt"
  })]) : _vm._e()])]) : _c("div", [_c("p", [_vm._v("Загрузка плаща доступна только для группы VIP и выше.")]), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_c("a", {
    staticClass: "btn_common mr-1",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.deleteCloak.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-trash-alt"
  })]), _vm._v(" "), _c("router-link", {
    staticClass: "btn_common",
    attrs: {
      to: {
        name: "donate"
      }
    }
  }, [_vm._v("Прокачать аккаунт!")])], 1)])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "chat_color col-12 col-lg-6 mt-5 mt-lg-0",
    "class": !_vm.hasPermission("prefix.text.edit") && !_vm.hasPermission("prefix.prefix_color.edit") && !_vm.hasPermission("prefix.nick_color.edit") && !_vm.hasPermission("prefix.msg_color.edit") ? "locked" : ""
  }, [_c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Настройки игрового чата")]), _vm._v(" "), _c("p", [_vm._v("Управляйте визуализацией Вашего отображения в чате, установите уникальное оформление и станьте самым стильным на сервере!")]), _vm._v(" "), _c("div", {
    staticClass: "body"
  }, [_c("div", {
    staticClass: "row align-items-center"
  }, [_c("label", {
    staticClass: "col-12 col-sm-6 col-xl-5"
  }, [_vm._v("Выбор сервера")]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm"
  }, [_c("b-select", {
    staticClass: "btn_common select",
    attrs: {
      options: _vm.servers,
      "value-field": "id",
      "text-field": "name"
    },
    model: {
      value: _vm.prefix.server,
      callback: function callback($$v) {
        _vm.$set(_vm.prefix, "server", $$v);
      },
      expression: "prefix.server"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row align-items-center"
  }, [_c("label", {
    staticClass: "col-12 col-sm-6 col-xl-5"
  }, [_vm._v("Цвет префикса в чате")]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm"
  }, [_c("b-select", {
    staticClass: "btn_common select",
    attrs: {
      id: "prefix_color",
      options: _vm.colors,
      "value-field": "char",
      "text-field": "name"
    },
    model: {
      value: _vm.prefix.prefix_color,
      callback: function callback($$v) {
        _vm.$set(_vm.prefix, "prefix_color", $$v);
      },
      expression: "prefix.prefix_color"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row align-items-center"
  }, [_c("label", {
    staticClass: "col-12 col-sm-6 col-xl-5"
  }, [_vm._v("Цвет Вашего ника в чате")]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm"
  }, [_c("b-select", {
    staticClass: "btn_common select",
    attrs: {
      id: "nick_color",
      options: _vm.colors,
      "value-field": "char",
      "text-field": "name"
    },
    model: {
      value: _vm.prefix.nick_color,
      callback: function callback($$v) {
        _vm.$set(_vm.prefix, "nick_color", $$v);
      },
      expression: "prefix.nick_color"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row align-items-center"
  }, [_c("label", {
    staticClass: "col-12 col-sm-6 col-xl-5"
  }, [_vm._v("Цвет самого сообщения")]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm"
  }, [_c("b-select", {
    staticClass: "btn_common select",
    attrs: {
      id: "msg_color",
      options: _vm.colors,
      "value-field": "char",
      "text-field": "name"
    },
    model: {
      value: _vm.prefix.msg_color,
      callback: function callback($$v) {
        _vm.$set(_vm.prefix, "msg_color", $$v);
      },
      expression: "prefix.msg_color"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row align-items-center"
  }, [_c("label", {
    staticClass: "col-12 col-sm-6 col-xl-5"
  }, [_vm._v("Слово в Вашем префиксе")]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm"
  }, [_c("b-input", {
    staticClass: "form-control-lg",
    attrs: {
      placeholder: _vm.roles[0].toUpperCase(),
      maxlength: "10"
    },
    model: {
      value: _vm.prefix.text,
      callback: function callback($$v) {
        _vm.$set(_vm.prefix, "text", $$v);
      },
      expression: "prefix.text"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "footer"
  }, [_c("span", {
    staticStyle: {
      color: "#555"
    }
  }, [_vm._v("[")]), _vm._v(" "), _c("span", {
    style: "color: " + this.getColor(_vm.prefix.prefix_color).hex
  }, [_vm._v(_vm._s(_vm.prefix.text))]), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "#555"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c("span", {
    style: "color: " + this.getColor(_vm.prefix.nick_color).hex
  }, [_vm._v(_vm._s(_vm.user.login))]), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "#555"
    }
  }, [_vm._v(": ")]), _vm._v(" "), _c("span", {
    style: "color: " + this.getColor(_vm.prefix.msg_color).hex
  }, [_vm._v("Алоха, друзья!")]), _vm._v(" "), _c("br"), _c("span", {
    staticStyle: {
      color: "#555"
    }
  }, [_vm._v("[")]), _vm._v(" "), _c("span", {
    style: "color: " + this.getColor(_vm.prefix.prefix_color).hex
  }, [_vm._v(_vm._s(_vm.prefix.text))]), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "#555"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c("span", {
    style: "color: " + this.getColor(_vm.prefix.nick_color).hex
  }, [_vm._v(_vm._s(_vm.user.login))]), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "#555"
    }
  }, [_vm._v(": ")]), _vm._v(" "), _c("span", {
    style: "color: " + this.getColor(_vm.prefix.msg_color).hex
  }, [_vm._v("Как ваши дела?")]), _vm._v(" "), _c("br"), _c("span", {
    staticStyle: {
      color: "#555"
    }
  }, [_vm._v("[")]), _vm._v(" "), _c("span", {
    style: "color: " + this.getColor(_vm.prefix.prefix_color).hex
  }, [_vm._v(_vm._s(_vm.prefix.text))]), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "#555"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c("span", {
    style: "color: " + this.getColor(_vm.prefix.nick_color).hex
  }, [_vm._v(_vm._s(_vm.user.login))]), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "#555"
    }
  }, [_vm._v(": ")]), _vm._v(" "), _c("span", {
    style: "color: " + this.getColor(_vm.prefix.msg_color).hex
  }, [_vm._v("Я люблю Ave MC!")]), _vm._v(" "), _c("br"), _c("span", {
    staticStyle: {
      color: "#555"
    }
  }, [_vm._v("[")]), _vm._v(" "), _c("span", {
    style: "color: " + this.getColor(_vm.prefix.prefix_color).hex
  }, [_vm._v(_vm._s(_vm.prefix.text))]), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "#555"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c("span", {
    style: "color: " + this.getColor(_vm.prefix.nick_color).hex
  }, [_vm._v(_vm._s(_vm.user.login))]), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "#555"
    }
  }, [_vm._v(": ")]), _vm._v(" "), _c("span", {
    style: "color: " + this.getColor(_vm.prefix.msg_color).hex
  }, [_vm._v("Как вам мой новый цвет?")])])]), _vm._v(" "), _vm.hasPermission("prefix.text.edit") || _vm.hasPermission("prefix.prefix_color.edit") || _vm.hasPermission("prefix.nick_color.edit") || _vm.hasPermission("prefix.msg_color.edit") ? _c("div", {
    staticClass: "text-center mt-3"
  }, [_c("a", {
    staticClass: "btn_common btn_common_lg",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.savePrefix.apply(null, arguments);
      }
    }
  }, [_vm._v("Сохранить настройки префикса")])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "lock_screen"
  }, [_c("i", {
    staticClass: "fal fa-lock-alt"
  }), _vm._v(" "), _c("p", [_vm._v("Чтобы получить возможность устанавливать и настраивать Ваш личный префикс, Вам необходима привилегия Premium или выше.")]), _vm._v(" "), _c("router-link", {
    staticClass: "btn_common btn_common_lg primary",
    attrs: {
      to: {
        name: "donate"
      }
    }
  }, [_vm._v("Прокачать аккаунт!")])], 1)]), _vm._v(" "), _c("input", {
    staticStyle: {
      display: "none"
    },
    attrs: {
      id: "skin_file",
      type: "file"
    },
    on: {
      change: function change($event) {
        $event.preventDefault();
        return _vm.uploadSkin($event);
      }
    }
  }), _vm._v(" "), _c("input", {
    staticStyle: {
      display: "none"
    },
    attrs: {
      id: "cloak_file",
      type: "file"
    },
    on: {
      change: function change($event) {
        $event.preventDefault();
        return _vm.uploadCloak($event);
      }
    }
  })]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Внешний вид персонажа")]), _vm._v(" "), _c("p", [_vm._v("Хотите подчеркнуть свою индивидуальность и выглядеть по-настоящему круто? Персонализируйте Вашего игрового персонажа и загрузите скин всего в два клика!")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/CabinetIndex.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/CabinetIndex.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CabinetIndex_vue_vue_type_template_id_702cfa63_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CabinetIndex.vue?vue&type=template&id=702cfa63&scoped=true& */ "./resources/js/pages/CabinetIndex.vue?vue&type=template&id=702cfa63&scoped=true&");
/* harmony import */ var _CabinetIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CabinetIndex.vue?vue&type=script&lang=js& */ "./resources/js/pages/CabinetIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CabinetIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CabinetIndex_vue_vue_type_template_id_702cfa63_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CabinetIndex_vue_vue_type_template_id_702cfa63_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "702cfa63",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/CabinetIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/CabinetIndex.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/CabinetIndex.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CabinetIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CabinetIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CabinetIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CabinetIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/CabinetIndex.vue?vue&type=template&id=702cfa63&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/CabinetIndex.vue?vue&type=template&id=702cfa63&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CabinetIndex_vue_vue_type_template_id_702cfa63_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./CabinetIndex.vue?vue&type=template&id=702cfa63&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CabinetIndex.vue?vue&type=template&id=702cfa63&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CabinetIndex_vue_vue_type_template_id_702cfa63_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CabinetIndex_vue_vue_type_template_id_702cfa63_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);