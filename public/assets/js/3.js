(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ForumBoard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ForumBoard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ForumBoard",
  data: function data() {
    return {
      online: []
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.sockets.subscribe('forum.online', function (data) {
      _this.online = data;
    });
    this.$socket.emit('forum.online');
  },
  methods: {
    getColor: function getColor(html) {
      try {
        var htmlDoc = new DOMParser().parseFromString(html, 'text/html');
        return htmlDoc.getElementsByTagName('span')[0].style.color;
      } catch (e) {
        return 'inherit';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ForumChat.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ForumChat.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ForumChat",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['isLogged'])),
  data: function data() {
    return {
      recentEmoji: localStorage.getItem('recentEmoji') ? this.loadRecent(localStorage.getItem('recentEmoji')) : [],
      emoji: false,
      msg: '',
      isModer: false,
      messages: []
    };
  },
  mounted: function mounted() {
    var _this = this;
    var chat = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.chat');
    chat.css({
      'height': localStorage.getItem('chat-height') + 'px'
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('mousedown', '.chat_resize', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).mousemove(function (e) {
        var y = e.pageY,
          top = chat.offset().top,
          li = 0;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.chat_content li').each(function () {
          li += jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).outerHeight(true);
        });
        chat.css({
          'height': y - top,
          'max-height': li + 58
        });
        localStorage.setItem('chat-height', (y - top).toString());
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).mouseup(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off('mousemove');
    });
    this.sockets.subscribe('forum.chat.msg', function (msg) {
      _this.messages.push(msg);
      _this.scrollDown();
    });
    this.sockets.subscribe('forum.chat.load', function (msgs) {
      _this.messages = msgs;
      _this.scrollDown();
    });
    this.sockets.subscribe('forum.chat.moder', function (obj) {
      _this.isModer = obj.moder;
    });
    this.sockets.subscribe('forum.chat.delete', function (text) {
      _this.messages = _this.messages.filter(function (msg) {
        return msg.text !== text;
      });
    });
    this.$socket.emit('forum.chat.load');
    this.$socket.emit('forum.chat.moder');
  },
  destroyed: function destroyed() {
    this.sockets.unsubscribe('forum.chat.msg');
    this.sockets.unsubscribe('forum.chat.load');
    this.sockets.unsubscribe('forum.chat.delete');
    this.sockets.unsubscribe('forum.chat.moder');
  },
  methods: {
    scrollDown: function scrollDown() {
      this.$nextTick(function () {
        var jchat = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.chat_content');
        jchat.scrollTop(jchat.prop('scrollHeight'));
      });
    },
    loadRecent: function loadRecent(val) {
      return val.split(',').map(function (id) {
        return parseInt(id);
      });
    },
    send: function send() {
      this.emoji = false;
      this.$socket.emit('forum.chat.msg', this.msg);
      this.msg = '';
    },
    deleteMsg: function deleteMsg(text) {
      this.$socket.emit('forum.chat.delete', text);
    },
    parseMsg: function parseMsg(text) {
      text = text.replace(/<\/?[^>]+>/gi, '');
      for (var i = 0; i <= 58; i++) {
        text = text.replace(new RegExp(':emoji_' + i + ':', 'g'), '<i class="emoji emoji_' + i + '"></i>');
      }
      return text;
    },
    putEmoji: function putEmoji(id) {
      var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.msg += ':emoji_' + id + ':';
      if (update) {
        this.recentEmoji = this.recentEmoji.filter(function (emoji) {
          return emoji !== id;
        });
        this.recentEmoji.unshift(id);
        if (this.recentEmoji.length > 11) {
          this.recentEmoji = this.recentEmoji.slice(0, 11);
        }
        localStorage.setItem('recentEmoji', this.recentEmoji);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Forum.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Forum.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ForumChat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ForumChat */ "./resources/js/components/ForumChat.vue");
/* harmony import */ var _components_ForumBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ForumBoard */ "./resources/js/components/ForumBoard.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./resources/js/api/index.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Forum",
  components: {
    Loader: _components_Loader__WEBPACK_IMPORTED_MODULE_4__["default"],
    ForumBoard: _components_ForumBoard__WEBPACK_IMPORTED_MODULE_1__["default"],
    ForumChat: _components_ForumChat__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['forumCategories'])),
  mounted: function mounted() {
    var _this = this;
    this.$store.dispatch(_api__WEBPACK_IMPORTED_MODULE_3__["FORUM_LOAD"]);
    this.sockets.subscribe('forum.posts.new', function (msgs) {
      _this.$store.dispatch(_api__WEBPACK_IMPORTED_MODULE_3__["FORUM_LOAD_LATEST"]);
    });
  },
  destroyed: function destroyed() {
    this.sockets.unsubscribe('forum.posts.new');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ForumBoard.vue?vue&type=template&id=ed28ff20&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ForumBoard.vue?vue&type=template&id=ed28ff20&scoped=true& ***!
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
    staticClass: "board"
  }, [_c("div", {
    staticClass: "row m-0 text-center text-md-left justify-content-center justify-content-md-start"
  }, [_c("span", {
    staticClass: "col-12 col-xl p-0"
  }, [_vm._v("Пользователей в сети — " + _vm._s(_vm.online.length))]), _vm._v(" "), _c("router-link", {
    attrs: {
      to: {
        name: "forum_team"
      }
    }
  }, [_vm._v("Администрация")])], 1), _vm._v(" "), _c("ul", {
    staticClass: "text-center text-md-left"
  }, _vm._l(_vm.online, function (user) {
    return _c("li", [_c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: user.login
          }
        }
      }
    }, [_c("span", {
      style: "color: " + _vm.getColor(user.role) + ";"
    }, [_vm._v(_vm._s(user.login))])])], 1);
  }), 0)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ForumChat.vue?vue&type=template&id=0beddc84&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ForumChat.vue?vue&type=template&id=0beddc84&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "chat"
  }, [_c("div", {
    staticClass: "row h-100 m-0"
  }, [_c("div", {
    staticClass: "col h-100 px-0"
  }, [_c("div", {
    staticClass: "chat_window"
  }, [_c("ul", {
    staticClass: "chat_content"
  }, _vm._l(_vm.messages, function (msg) {
    return _c("li", [_c("router-link", {
      staticClass: "user_pic",
      attrs: {
        to: {
          name: "user",
          params: {
            login: msg.user.login
          }
        }
      }
    }, [_c("img", {
      attrs: {
        src: _vm.getHeadUrl(msg.user.uuid)
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "msg_body"
    }, [_c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: msg.user.login
          }
        }
      }
    }, [_vm._v(_vm._s(msg.user.login))]), _vm._v(" "), _c("small", {
      domProps: {
        innerHTML: _vm._s(msg.user.role)
      }
    }), _vm._v(" "), _c("p", {
      domProps: {
        innerHTML: _vm._s(_vm.parseMsg(msg.text))
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "msg_meta"
    }, [_vm.isModer ? _c("a", {
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          return _vm.deleteMsg(msg.text);
        }
      }
    }, [_vm._v("Удалить")]) : _vm._e(), _vm._v("\n                            " + _vm._s(msg.time) + "\n                        ")])], 1);
  }), 0), _vm._v(" "), _c("div", {
    "class": "lower " + (_vm.emoji ? "emoji_visible" : "")
  }, [_c("div", {
    staticClass: "emoji_wrap"
  }, [_c("div", {
    staticClass: "emoji_scroll"
  }, [_vm.recentEmoji && _vm.recentEmoji.length > 0 ? _c("div", {
    staticClass: "item"
  }, [_vm._m(0), _vm._v(" "), _vm._l(_vm.recentEmoji, function (id) {
    return _c("a", {
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.putEmoji(id, false);
        }
      }
    }, [_c("i", {
      "class": "emoji emoji_" + id
    })]);
  })], 2) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "item"
  }, [_vm._m(1), _vm._v(" "), _vm._l(58, function (id) {
    return _c("a", {
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.putEmoji(id);
        }
      }
    }, [_c("i", {
      "class": "emoji emoji_" + id
    })]);
  })], 2)])]), _vm._v(" "), this.isLogged ? _c("div", {
    staticClass: "chat_enter"
  }, [_c("a", {
    staticClass: "btn_emoji",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.emoji = !_vm.emoji;
      }
    }
  }, [_c("i", {
    staticClass: "fal fa-smile"
  })]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.msg,
      expression: "msg"
    }],
    attrs: {
      title: "Ввод сообщения",
      placeholder: "Введите сообщение",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.msg
    },
    on: {
      keypress: function keypress($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.send.apply(null, arguments);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.msg = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("a", {
    staticClass: "btn_common ml-2 d-none d-sm-inline-block",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.send.apply(null, arguments);
      }
    }
  }, [_vm._v("Отправить")])]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "chat_resize"
  })])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h4", [_c("span", [_vm._v("Часто используемые")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h4", [_c("span", [_vm._v("Эмоции & Жесты")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Forum.vue?vue&type=template&id=1c20dce8&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Forum.vue?vue&type=template&id=1c20dce8& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("forum-chat"), _vm._v(" "), _c("forum-board"), _vm._v(" "), _vm.forumCategories.length < 1 ? _c("loader") : _vm._e(), _vm._v(" "), _vm._l(_vm.forumCategories, function (mainCategory) {
    return _c("div", {
      staticClass: "category"
    }, [_c("div", {
      staticClass: "h2 text-center text-md-left"
    }, [_c("h2", [_vm._v(_vm._s(mainCategory.name))])]), _vm._v(" "), _c("div", {
      staticClass: "content"
    }, _vm._l(mainCategory.childs, function (category) {
      return _c("div", {
        staticClass: "row"
      }, [_c("div", {
        staticClass: "col-12 col-sm-9 col-lg-6"
      }, [_c("div", {
        staticClass: "data"
      }, [_vm._m(0, true), _vm._v(" "), _c("div", [_c("h3", [_c("router-link", {
        attrs: {
          to: {
            name: "category",
            params: {
              slug: category.slug
            }
          }
        }
      }, [_vm._v(_vm._s(category.name))])], 1), _vm._v(" "), _c("p", [_vm._v(_vm._s(category.description))]), _vm._v(" "), category.childs && Object.keys(category.childs).length ? _c("ul", {
        staticClass: "sublist"
      }, _vm._l(category.childs, function (subcategory) {
        return _c("li", [_c("router-link", {
          attrs: {
            to: {
              name: "category",
              params: {
                slug: subcategory.slug
              }
            }
          }
        }, [_vm._v(_vm._s(subcategory.name))])], 1);
      }), 0) : _vm._e()])])]), _vm._v(" "), _c("div", {
        staticClass: "col d-none d-sm-flex d-md-none d-lg-flex"
      }, [_c("div", {
        staticClass: "data"
      }, [_c("div", {
        staticClass: "meta"
      }, [_c("h3", [_vm._v(_vm._s(_vm.readableNum(category.discussions_count)))]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.declOfNum(category.discussions_count, ["тема", "темы", "тем"])))])]), _vm._v(" "), _c("div", {
        staticClass: "meta"
      }, [_c("h3", [_vm._v(_vm._s(_vm.readableNum(category.posts_count)))]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.declOfNum(category.posts_count, ["ответ", "ответа", "ответов"])))])])])]), _vm._v(" "), _c("div", {
        staticClass: "col-3 d-none d-md-block d-lg-none d-xl-block"
      }, [category.post_preview ? _c("div", {
        staticClass: "data"
      }, [_c("router-link", {
        staticClass: "user_pic",
        attrs: {
          to: {
            name: "user",
            params: {
              login: category.post_preview.user.login
            }
          }
        }
      }, [_c("img", {
        attrs: {
          src: _vm.getHeadUrl(category.post_preview.user.uuid),
          alt: ""
        }
      })]), _vm._v(" "), _c("div", [_c("h4", [_c("router-link", {
        attrs: {
          to: {
            name: "discussion",
            params: {
              slug: category.post_preview.discussion.slug
            }
          }
        }
      }, [_vm._v(_vm._s(category.post_preview.discussion.title))])], 1), _vm._v(" "), _c("p", [_vm._v("От "), _c("router-link", {
        attrs: {
          to: {
            name: "user",
            params: {
              login: category.post_preview.user.login
            }
          }
        }
      }, [_vm._v(_vm._s(category.post_preview.user.login))]), _vm._v(", " + _vm._s(_vm.humanDiff(category.post_preview.created_at)) + " назад")], 1)])], 1) : _c("p", {
        staticClass: "stub"
      }, [_vm._v("Нет доступных сообщений для отображения в данный момент")])])]);
    }), 0)]);
  })], 2);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "status d-none d-sm-block"
  }, [_c("i", {
    staticClass: "fas fa-comments-alt"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/ForumBoard.vue":
/*!************************************************!*\
  !*** ./resources/js/components/ForumBoard.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForumBoard_vue_vue_type_template_id_ed28ff20_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForumBoard.vue?vue&type=template&id=ed28ff20&scoped=true& */ "./resources/js/components/ForumBoard.vue?vue&type=template&id=ed28ff20&scoped=true&");
/* harmony import */ var _ForumBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForumBoard.vue?vue&type=script&lang=js& */ "./resources/js/components/ForumBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForumBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForumBoard_vue_vue_type_template_id_ed28ff20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForumBoard_vue_vue_type_template_id_ed28ff20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ed28ff20",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ForumBoard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ForumBoard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/ForumBoard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ForumBoard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ForumBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ForumBoard.vue?vue&type=template&id=ed28ff20&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/ForumBoard.vue?vue&type=template&id=ed28ff20&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumBoard_vue_vue_type_template_id_ed28ff20_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./ForumBoard.vue?vue&type=template&id=ed28ff20&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ForumBoard.vue?vue&type=template&id=ed28ff20&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumBoard_vue_vue_type_template_id_ed28ff20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumBoard_vue_vue_type_template_id_ed28ff20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ForumChat.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/ForumChat.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForumChat_vue_vue_type_template_id_0beddc84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForumChat.vue?vue&type=template&id=0beddc84&scoped=true& */ "./resources/js/components/ForumChat.vue?vue&type=template&id=0beddc84&scoped=true&");
/* harmony import */ var _ForumChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForumChat.vue?vue&type=script&lang=js& */ "./resources/js/components/ForumChat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForumChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForumChat_vue_vue_type_template_id_0beddc84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForumChat_vue_vue_type_template_id_0beddc84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0beddc84",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ForumChat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ForumChat.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/ForumChat.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ForumChat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ForumChat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ForumChat.vue?vue&type=template&id=0beddc84&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/ForumChat.vue?vue&type=template&id=0beddc84&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumChat_vue_vue_type_template_id_0beddc84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./ForumChat.vue?vue&type=template&id=0beddc84&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ForumChat.vue?vue&type=template&id=0beddc84&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumChat_vue_vue_type_template_id_0beddc84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumChat_vue_vue_type_template_id_0beddc84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Forum.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Forum.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Forum_vue_vue_type_template_id_1c20dce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forum.vue?vue&type=template&id=1c20dce8& */ "./resources/js/pages/Forum.vue?vue&type=template&id=1c20dce8&");
/* harmony import */ var _Forum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forum.vue?vue&type=script&lang=js& */ "./resources/js/pages/Forum.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Forum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Forum_vue_vue_type_template_id_1c20dce8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Forum_vue_vue_type_template_id_1c20dce8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Forum.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Forum.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Forum.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Forum.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Forum.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forum_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Forum.vue?vue&type=template&id=1c20dce8&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Forum.vue?vue&type=template&id=1c20dce8& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Forum_vue_vue_type_template_id_1c20dce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Forum.vue?vue&type=template&id=1c20dce8& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Forum.vue?vue&type=template&id=1c20dce8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Forum_vue_vue_type_template_id_1c20dce8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Forum_vue_vue_type_template_id_1c20dce8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);