(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/UserProfile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/UserProfile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./resources/js/api/index.js");
/* harmony import */ var _skinview3d_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../skinview3d.module */ "./resources/js/skinview3d.module.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserProfile",
  components: {
    Loader: _components_Loader__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      loading: true,
      skinViewer: null,
      walk: null,
      profile: null,
      current_page: 1,
      modals: {
        friends: {
          loading: false,
          open: false,
          requests: []
        },
        achievements: {
          loading: false,
          open: false,
          data: []
        }
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['user', 'isLogged'])), {}, {
    myProfile: function myProfile() {
      if (!this.isLogged) return false;
      return this.user.id === this.profile.user.id;
    },
    isMyFriend: function isMyFriend() {
      if (!this.isLogged) return false;
      var found = false;
      var vm = this;
      this.profile.friends.forEach(function (friend) {
        if (friend.id === vm.user.id) found = true;
      });
      return found;
    }
  }),
  mounted: function mounted() {
    this.loadProfile();
  },
  methods: {
    reloadFriends: function reloadFriends() {
      var _this = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('user/' + this.$route.params.login).then(function (response) {
        _this.profile.friends = response.data.profile.friends;
      });
    },
    acceptFriend: function acceptFriend(id) {
      var _this2 = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('friends/accept', {
        user: id
      }).then(function (response) {
        if (response.data.success) {
          _this2.modals.friends.requests = _this2.modals.friends.requests.filter(function (request) {
            return request.sender_id !== id;
          });
          _this2.reloadFriends();
        }
      });
    },
    denyFriend: function denyFriend(id) {
      var _this3 = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('friends/deny', {
        user: id
      }).then(function (response) {
        if (response.data.success) {
          _this3.modals.friends.requests = _this3.modals.friends.requests.filter(function (request) {
            return request.sender_id !== id;
          });
        }
      });
    },
    openFriendsModal: function openFriendsModal() {
      var _this4 = this;
      if (this.myProfile) this.modals.friends.loading = true;
      this.modals.friends.open = true;
      if (this.myProfile) {
        _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('friends/requests').then(function (response) {
          if (response.data.success) {
            _this4.modals.friends.requests = response.data.requests;
          }
          _this4.modals.friends.loading = false;
        });
      }
    },
    sendFriendRequest: function sendFriendRequest() {
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('friends/add', {
        user: this.profile.user.id
      });
      this.profile.has_friend_request = true;
    },
    removeFromFriend: function removeFromFriend() {
      var _this5 = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('friends/remove', {
        user: this.profile.user.id
      }).then(function () {
        _this5.reloadFriends();
      });
    },
    initSpoilers: function initSpoilers() {
      $(function () {
        $('.spoiler-text').hide();
        $('.spoiler-toggle').click(function () {
          $(this).next().toggle();
        });
      });
    },
    loadProfile: function loadProfile() {
      var _this6 = this;
      this.loading = true;
      this.modals.friends.open = false;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('user/' + this.$route.params.login).then(function (response) {
        _this6.profile = response.data.profile;
        _this6.loading = false;

        // Count avg chars
        _this6.profile.avg_chars = Math.round(_this6.profile.chars / _this6.profile.posts);
        if (_this6.profile.posts < 1 || Number.isNaN(_this6.profile.avg_chars) || !Number.isFinite(_this6.profile.avg_chars)) {
          _this6.profile.avg_chars = 0;
        }
        _this6.$nextTick(function () {
          this.initSkin();
          this.initSpoilers();
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    initSkin: function initSkin() {
      if (!document.getElementById("user_viewer")) return;
      this.skinViewer = new _skinview3d_module__WEBPACK_IMPORTED_MODULE_1__["SkinViewer"]({
        domElement: document.getElementById("user_viewer"),
        width: 280,
        height: 560,
        skinUrl: '/skins/' + this.profile.user.uuid + '.png',
        capeUrl: '/cloaks/' + this.profile.user.uuid + '.png',
        "static": true
      });
      var control = _skinview3d_module__WEBPACK_IMPORTED_MODULE_1__["createOrbitControls"](this.skinViewer);
      control.enableRotate = false;
      control.enableZoom = false;
      control.enablePan = false;
      this.$set(this.skinViewer, 'animation', new _skinview3d_module__WEBPACK_IMPORTED_MODULE_1__["CompositeAnimation"]());
      this.walk = this.skinViewer.animation.add(_skinview3d_module__WEBPACK_IMPORTED_MODULE_1__["WalkingAnimation"]);
      this.walk.speed = 5;
      this.walk.paused = 5;
      this.skinViewer.playerObject.rotation._x = 0.15;
      this.skinViewer.playerObject.quaternion._y = 0.25;
    }
  },
  watch: {
    '$route': function $route() {
      this.loadProfile();
    },
    current_page: function current_page(newVal) {
      var _this7 = this;
      this.loading = true;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('user/' + this.$route.params.login + '?page=' + newVal).then(function (response) {
        _this7.profile.actions = response.data.profile.actions;
        _this7.loading = false;
        _this7.$nextTick(function () {
          this.initSkin();
          this.initSpoilers();
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/UserProfile.vue?vue&type=template&id=5a5b1565&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/UserProfile.vue?vue&type=template&id=5a5b1565& ***!
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
    staticClass: "forum"
  }, [this.loading ? _c("loader") : _c("div", {
    staticClass: "profile"
  }, [_c("div", {
    staticClass: "row align-items-center align-items-lg-start mx-0 px-4"
  }, [_c("div", {
    staticClass: "col-12 col-sm order-3 order-sm-1 viewer"
  }, [_c("div", {
    attrs: {
      id: "user_viewer"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm order-sm-2 header pr-0"
  }, [_c("h2", [_vm._v("Профиль " + _vm._s(_vm.profile.user.login))]), _vm._v(" "), _c("p", [_vm._v("Аккаунт зарегистрирован: "), _c("b", [_vm._v(_vm._s(_vm.moment.unix(_vm.profile.user.reg_time).format("lll")))])]), _vm._v(" "), _c("p", [_vm._v("\n                    Действующая группа:\n                    "), _c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.profile.role)
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row section mx-0 p-4"
  }, [_c("div", {
    staticClass: "col-12 col-lg viewer px-0 px-xl-3"
  }, [!_vm.myProfile ? _c("div", [_vm.isMyFriend ? _c("a", {
    staticClass: "btn_common d-lg-block",
    attrs: {
      href: "#"
    },
    on: {
      click: _vm.removeFromFriend
    }
  }, [_vm._v("Убрать из друзей")]) : _vm.profile.has_friend_request && !_vm.profile.has_sent_friend_request ? _c("a", {
    staticClass: "btn_common d-lg-block",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Вы подписаны")]) : _vm.isLogged && !_vm.profile.has_sent_friend_request ? _c("a", {
    staticClass: "btn_common d-lg-block",
    attrs: {
      href: "#"
    },
    on: {
      click: _vm.sendFriendRequest
    }
  }, [_vm._v("Добавить в друзья")]) : _vm._e(), _vm._v(" "), _vm.profile.has_sent_friend_request ? _c("a", {
    staticClass: "btn_common d-lg-block",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        return _vm.acceptFriend(_vm.profile.user.id);
      }
    }
  }, [_vm._v("Принять заявку")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.myProfile ? _c("router-link", {
    staticClass: "btn_common primary ml-0 ml-sm-2 ml-lg-0 mt-2 mt-sm-0 mt-lg-2 d-lg-block",
    attrs: {
      to: {
        name: "cabinet"
      }
    }
  }, [_vm._v("Личный кабинет")]) : _c("a", {
    staticClass: "btn_common primary ml-0 ml-sm-2 ml-lg-0 mt-2 mt-sm-0 mt-lg-2 d-lg-block",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
      }
    }
  }, [_vm._v("Личные сообщения")])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg"
  }, [_c("ul", {
    staticClass: "meta"
  }, [_c("li", [_c("i", {
    staticClass: "fas fa-badge-check"
  }), _vm._v(" "), _c("h5", [_vm._v(_vm._s(Math.round(_vm.moment.duration(_vm.moment().diff(_vm.moment.unix(_vm.profile.user.reg_time))).asDays())))]), _vm._v(" "), _c("small", [_vm._v("Дней с момента"), _c("br"), _vm._v("регистрации")])]), _vm._v(" "), _c("li", [_c("i", {
    staticClass: "fas fa-comments-alt"
  }), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.profile.posts))]), _vm._v(" "), _c("small", [_vm._v("Сообщений"), _c("br"), _vm._v("опубликовано")])]), _vm._v(" "), _c("li", [_c("i", {
    staticClass: "fas fa-heart"
  }), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.profile.user.reputation))]), _vm._v(" "), _c("small", [_vm._v("Репутации получено"), _c("br"), _vm._v("от пользователей")])]), _vm._v(" "), _c("li", [_c("i", {
    staticClass: "fas fa-paper-plane"
  }), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.profile.avg_chars))]), _vm._v(" "), _c("small", [_vm._v("В среднем символов в"), _c("br"), _vm._v("одном сообщении")])]), _vm._v(" "), _c("li", [_c("i", {
    staticClass: "fas fa-waveform-path"
  }), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.profile.discussions))]), _vm._v(" "), _c("small", [_vm._v("Всего поучавствовал"), _c("br"), _vm._v("в темах")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-xl-4 px-0"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-lg-6 col-xl-12 mt-3"
  }, [_c("div", {
    staticClass: "info"
  }, [_c("ul", [_c("li", [_c("b", [_vm._v("Был в игре:")]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.profile.user.last_play ? _vm.moment.unix(_vm.profile.user.last_play).format("lll") : "Никогда"))])]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Блокировка на форуме:")]), _vm._v(" "), _vm.profile.banned ? _c("span", [_vm._v("Заблокирован")]) : _c("small", [_vm._v("Не найдено")])]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Блокировка в игре:")]), _vm._v(" "), _vm.profile.game_banned ? _c("span", [_vm._v("Заблокирован")]) : _c("small", [_vm._v("Не найдено")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-6 col-xl-12 mt-3"
  }, [_c("div", {
    staticClass: "info"
  }, [_c("h4", [_vm._v("\n                                Друзья"), _c("span", {
    staticClass: "count"
  }, [_vm._v(_vm._s(_vm.profile.friends.length))])]), _vm._v(" "), _vm.profile.hide_friends && _vm.profile.friends.length === 0 ? _c("div", [_c("small", {
    staticClass: "d-block mt-1"
  }, [_vm._v("Этот пользователь скрыл список своих друзей.")])]) : _vm.profile.friends.length ? _c("ul", {
    staticClass: "row list mt-1"
  }, _vm._l(_vm.profile.friends.slice(0, 20), function (friend) {
    return _c("li", [_c("router-link", {
      staticClass: "user_pic anchor",
      attrs: {
        to: {
          name: "user",
          params: {
            login: friend.login
          }
        }
      }
    }, [_c("img", {
      attrs: {
        src: _vm.getHeadUrl(friend.uuid)
      }
    })])], 1);
  }), 0) : _c("div", [_vm.myProfile ? _c("small", {
    staticClass: "d-block mt-1"
  }, [_vm._v("Вы ещё не никого не добавляли в друзья.")]) : _c("small", {
    staticClass: "d-block mt-1"
  }, [_vm._v("Этот пользователь ещё никого не добавлял.")])]), _vm._v(" "), _c("small", {
    staticClass: "expand"
  }, [_c("a", {
    attrs: {
      href: "#friends",
      rel: "modal"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.openFriendsModal.apply(null, arguments);
      }
    }
  }, [_vm._v("Открыть полный список друзей")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6 col-xl-12 mt-3"
  }, [_c("div", {
    staticClass: "info"
  }, [_c("h4", [_vm._v("\n                                Достижения"), _c("span", {
    staticClass: "count"
  }, [_vm._v("0 из 56")]), _vm._v(" "), _c("small", {
    staticClass: "d-block float-sm-right"
  }, [_vm._v("Прогресс 0%")])]), _vm._v(" "), _vm.myProfile ? _c("small", {
    staticClass: "d-block mt-2"
  }, [_vm._v("Вы ещё не получали никаких достижений.")]) : _c("small", {
    staticClass: "d-block mt-1"
  }, [_vm._v("Этот пользователь ещё не получал достижений.")]), _vm._v(" "), _c("small", {
    staticClass: "expand mt-1"
  }, [_c("a", {
    attrs: {
      href: "#achievements",
      rel: "modal"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.modals.achievements.open = true;
      }
    }
  }, [_vm._v("Открыть список достижений")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6 col-xl-12 mt-3"
  }, [_c("div", {
    staticClass: "info"
  }, [_c("h4", [_vm._v("Последние посетители")]), _vm._v(" "), _vm.myProfile ? _c("small", {
    staticClass: "d-block mt-2"
  }, [_vm._v("Ваш профиль ещё никто не посетил.")]) : _c("small", {
    staticClass: "d-block mt-1"
  }, [_vm._v("Список последних посетителей пуст.")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "activity py-4 p-xl-5"
  }, [_c("h3", [_vm._v("Последняя активность")]), _vm._v(" "), _c("div", {
    staticClass: "row mt-3"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("ul", {}, _vm._l(_vm.profile.actions, function (post) {
    return _c("li", {
      staticClass: "post"
    }, [_c("router-link", {
      staticClass: "user_pic anchor",
      attrs: {
        to: {
          name: "user",
          params: {
            login: _vm.profile.user.login
          }
        }
      }
    }, [_c("img", {
      attrs: {
        src: _vm.getHeadUrl(_vm.profile.user.uuid)
      }
    })]), _vm._v(" "), _c("h4", [_c("router-link", {
      attrs: {
        to: {
          name: "discussion",
          params: {
            slug: post.slug
          }
        }
      }
    }, [_vm._v(_vm._s(post.title))])], 1), _vm._v(" "), _c("p", {
      staticClass: "action"
    }, [_c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: _vm.profile.user.login
          }
        }
      }
    }, [_vm._v(_vm._s(_vm.profile.user.login))]), _vm._v(" написал сообщение\n                            ")], 1), _vm._v(" "), _c("p", {
      domProps: {
        innerHTML: _vm._s(post.body)
      }
    }), _vm._v(" "), _c("p", {
      staticClass: "meta"
    }, [_c("span", [_vm._v(_vm._s(_vm.moment(post.created_at).format("lll")))])])], 1);
  }), 0), _vm._v(" "), _vm.profile.posts > 10 ? _c("div", {
    staticClass: "paging"
  }, [_c("b-pagination", {
    attrs: {
      "total-rows": _vm.profile.posts,
      "per-page": 10,
      limit: "10"
    },
    model: {
      value: _vm.current_page,
      callback: function callback($$v) {
        _vm.current_page = $$v;
      },
      expression: "current_page"
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-xl-4 ml-0 ml-xl-4"
  })])]), _vm._v(" "), _c("b-modal", {
    attrs: {
      "modal-class": "modal",
      "hide-header": "",
      "hide-footer": "",
      "content-class": "custom_modal",
      size: "lg"
    },
    model: {
      value: _vm.modals.friends.open,
      callback: function callback($$v) {
        _vm.$set(_vm.modals.friends, "open", $$v);
      },
      expression: "modals.friends.open"
    }
  }, [_c("div", {
    attrs: {
      id: "modal"
    }
  }, [_c("div", {
    staticClass: "window sectional"
  }, [_c("div", {
    staticClass: "header"
  }, [_vm.myProfile ? _c("h2", [_vm._v("Мой список друзей")]) : _c("h2", [_vm._v("Список друзей "), _c("router-link", {
    attrs: {
      to: {
        name: "user",
        params: {
          login: _vm.profile.user.login
        }
      }
    }
  }, [_vm._v(_vm._s(_vm.profile.user.login))])], 1), _vm._v(" "), _c("a", {
    staticClass: "d-block d-sm-none mt-2",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.modals.friends.open = false;
      }
    }
  }, [_vm._v("Закрыть "), _c("i", {
    staticClass: "far fa-window-close"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "body"
  }, [_c("div", {
    staticClass: "chapter"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_vm.profile.friends.length > 0 ? _c("h3", [_vm._v("\n                                        Список друзей "), _c("b", [_vm._v(_vm._s(_vm.profile.friends.length))])]) : _c("h3", [_vm._v("\n                                        Список друзей "), _c("b", [_vm._v("Пуст")])])]), _vm._v(" "), _vm._l(_vm.profile.friends, function (friend) {
    return _c("router-link", {
      key: friend.login,
      staticClass: "col data",
      attrs: {
        to: {
          name: "user",
          params: {
            login: friend.login
          }
        }
      }
    }, [_c("div", {
      staticClass: "user_pic"
    }, [_c("img", {
      attrs: {
        src: _vm.getHeadUrl(friend.uuid),
        alt: ""
      }
    })]), _vm._v(" "), _c("h4", [_c("span", [_vm._v(_vm._s(friend.login))])])]);
  })], 2)]), _vm._v(" "), _vm.modals.friends.loading ? _c("loader") : _vm.myProfile ? _c("div", {
    staticClass: "chapter"
  }, [_c("h3", [_vm._v("\n                                Входящие заявки\n                                "), _c("b", [_vm._v(_vm._s(_vm.modals.friends.requests.length))])]), _vm._v(" "), _c("ul", {
    staticClass: "requests"
  }, _vm._l(_vm.modals.friends.requests, function (request) {
    return _c("li", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-12 col-md"
    }, [_c("span", [_vm._v(_vm._s(_vm.moment(request.created_at).format("lll")))]), _vm._v(" "), _c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: request.sender.login
          }
        }
      }
    }, [_vm._v(_vm._s(request.sender.login))]), _vm._v(" отправил заявку в друзья\n                                    ")], 1), _vm._v(" "), _c("a", {
      staticClass: "btn_common primary",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.acceptFriend(request.sender.id);
        }
      }
    }, [_vm._v("Принять")]), _vm._v(" "), _c("a", {
      staticClass: "btn_common",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.denyFriend(request.sender.id);
        }
      }
    }, [_vm._v("Отклонить")])]);
  }), 0)]) : _vm._e()], 1)])])]), _vm._v(" "), _c("b-modal", {
    attrs: {
      "modal-class": "modal",
      "hide-header": "",
      "hide-footer": "",
      "content-class": "custom_modal",
      size: "lg"
    },
    model: {
      value: _vm.modals.achievements.open,
      callback: function callback($$v) {
        _vm.$set(_vm.modals.achievements, "open", $$v);
      },
      expression: "modals.achievements.open"
    }
  }, [_c("div", {
    attrs: {
      id: "modal"
    }
  }, [_c("div", {
    staticClass: "window sectional"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("h2", [_vm._v("Достижения "), _c("router-link", {
    attrs: {
      to: {
        name: "user",
        params: {
          login: _vm.profile.user.login
        }
      }
    }
  }, [_vm._v(_vm._s(_vm.profile.user.login))])], 1), _vm._v(" "), _c("p", [_vm._v("Достижения находятся в разработке!")]), _vm._v(" "), _c("p", [_vm._v("Пользователь получил 0 из 112 достижений")])]), _vm._v(" "), _c("div", {
    staticClass: "body"
  }, [_c("div", {
    staticClass: "chapter"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("h3", [_vm._v("\n                                        Сайт и форум\n                                        "), _c("b", [_vm._v("0 из 17")]), _vm._v(" "), _c("small", [_vm._v("Общий прогресс 0%")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-chess-queen"
  }), _vm._v(" "), _c("h4", [_vm._v("КвинТет!")]), _vm._v(" "), _c("p", [_vm._v("Подружиться с экс-куратором форума")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("Абсолютная ВЛА-А-А-АСТЬ!")]), _vm._v(" "), _c("p", [_vm._v("Войти в состав администрации проекта")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("Прокуратор судеб")]), _vm._v(" "), _c("p", [_c("em", [_vm._v("Особое секретное достижение")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-arrows"
  }), _vm._v(" "), _c("h4", [_vm._v("Si vis pacem, para bellum")]), _vm._v(" "), _c("p", [_vm._v("Хочешь мира — готовься к войне")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-map-marker-times"
  }), _vm._v(" "), _c("h4", [_vm._v("Статус «Секуляризован»")]), _vm._v(" "), _c("p", [_c("em", [_vm._v("Открыто секретное достижение!")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("Статус «Экскомьюникадо»")]), _vm._v(" "), _c("p", [_c("em", [_vm._v("Особое секретное достижение")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "chapter"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("h3", [_vm._v("\n                                        Игровой процесс\n                                        "), _c("b", [_vm._v("0 из 20")]), _vm._v(" "), _c("small", [_vm._v("Общий прогресс 0%")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("Школьная фондовая биржа")]), _vm._v(" "), _c("p", [_vm._v("Накопить 100 тысяч коинов на любом сервере")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("Финансовый воротила")]), _vm._v(" "), _c("p", [_vm._v("Перевести на любой сервер 10 тысяч коинов")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("бАгАч на сервИре")]), _vm._v(" "), _c("p", [_vm._v("Войти в топ-5 игроков по коинам любого сервер")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("Юный капиталист")]), _vm._v(" "), _c("p", [_vm._v("Занять 1 место в рейтинге по коинам любого сервера")])])])]), _vm._v(" "), _c("div", {
    staticClass: "chapter"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("h3", [_vm._v("\n                                        Платные услуги\n                                        "), _c("b", [_vm._v("0 из 57")]), _vm._v(" "), _c("small", [_vm._v("Общий прогресс 0%")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("Оппа! Чирик!")]), _vm._v(" "), _c("p", [_vm._v("Положить ровно 10 рублей на баланс")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("Саня, верни сотку!")]), _vm._v(" "), _c("p", [_vm._v("Положить ровно 100 рублей на баланс")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("Экономил на обедах")]), _vm._v(" "), _c("p", [_vm._v("Положить менее 100 рублей на баланс")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("Прикуриваю от купюр")]), _vm._v(" "), _c("p", [_vm._v("Пополнить баланс на 1 000 рублей за раз")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("Таксую на велосипеде")]), _vm._v(" "), _c("p", [_vm._v("Купить VIP привилегию")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("Сын маминой подруги")]), _vm._v(" "), _c("p", [_vm._v("Купить PREMIUM привилегию")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("Племянник Билл Гейтса")]), _vm._v(" "), _c("p", [_vm._v("Купить DELUXE привилегию")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("Живу на Уолл Стрит")]), _vm._v(" "), _c("p", [_vm._v("Купить LEGEND привилегию")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("В магазин только на майбахе")]), _vm._v(" "), _c("p", [_vm._v("Трижды продлить LEGEND привилегию")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("Трачу и не плачу")]), _vm._v(" "), _c("p", [_vm._v("Потратить на проекте в сумме 1 000 рублей")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("Владелец заводов, газет, пароходов!")]), _vm._v(" "), _c("p", [_vm._v("Потратить на проекте в сумме 10 000 рублей")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("Продвинутый пользователь киви кошелька")]), _vm._v(" "), _c("p", [_vm._v("Трижды пополнить свой баланс с QIWI")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("Золотая лихорадка")]), _vm._v(" "), _c("p", [_vm._v("Пополнить баланс аккаунта 10 раз за месяц (не менее чем на 1 000 рублей)")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-sm-6 cell"
  }, [_c("i", {
    staticClass: "fad fa-lock-alt"
  }), _vm._v(" "), _c("h4", [_vm._v("Поднял бабла — школоло три топора")]), _vm._v(" "), _c("p", [_vm._v("Накопить 1 000 рублей не пополняя счёта")])])])])])])])])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/UserProfile.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/UserProfile.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfile_vue_vue_type_template_id_5a5b1565___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=template&id=5a5b1565& */ "./resources/js/pages/UserProfile.vue?vue&type=template&id=5a5b1565&");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=script&lang=js& */ "./resources/js/pages/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfile_vue_vue_type_template_id_5a5b1565___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfile_vue_vue_type_template_id_5a5b1565___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/UserProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/UserProfile.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/UserProfile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/UserProfile.vue?vue&type=template&id=5a5b1565&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/UserProfile.vue?vue&type=template&id=5a5b1565& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_5a5b1565___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=template&id=5a5b1565& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/UserProfile.vue?vue&type=template&id=5a5b1565&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_5a5b1565___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_5a5b1565___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);