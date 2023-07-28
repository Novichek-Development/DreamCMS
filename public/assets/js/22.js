(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumDiscussion.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ForumDiscussion.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./resources/js/api/index.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tinymce_tinymce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tinymce/tinymce */ "./node_modules/tinymce/tinymce.js");
/* harmony import */ var tinymce_tinymce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tinymce_tinymce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tinymce_themes_silver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tinymce/themes/silver */ "./node_modules/tinymce/themes/silver/index.js");
/* harmony import */ var tinymce_themes_silver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tinymce_themes_silver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ForumDiscussion",
  components: {
    Loader: _components_Loader__WEBPACK_IMPORTED_MODULE_2__["default"],
    Editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['user', 'isLogged', 'forumCategories'])),
  mounted: function mounted() {
    this.$store.dispatch(_api__WEBPACK_IMPORTED_MODULE_1__["FORUM_LOAD"]);
    if (this.$route.params.page) {
      this.pagination.current_page = this.$route.params.page;
    }
    this.loadDiscussion();
  },
  data: function data() {
    return {
      modals: {
        likes: {
          open: false,
          loading: true,
          post: null,
          data: []
        },
        template: {
          open: false,
          name: '',
          id: null
        },
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
        },
        ban: {
          open: false,
          user: {
            login: ''
          },
          reason: null,
          days: null,
          game: false
        }
      },
      newpost: {
        content: ''
      },
      editor: {
        init: {
          language: 'ru',
          icons_url: '/assets/tinymce/icons.min.js',
          plugins: 'spoiler preview paste autolink autosave code visualblocks visualchars image link media template codesample table hr toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
          menubar: false,
          toolbar: 'undo redo | bold italic underline strikethrough | formatselect fontsizeselect | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | forecolor removeformat | spoiler-add spoiler-remove | emoticons | preview | image template link anchor codesample',
          toolbar_sticky: true,
          templates: []
        }
      },
      loading: true,
      category: null,
      discussion: null,
      posts: null,
      editingPost: 0,
      pagination: {
        current_page: 1,
        total: 0,
        per_page: 10
      }
    };
  },
  methods: {
    archiveDiscussion: function archiveDiscussion() {
      _api__WEBPACK_IMPORTED_MODULE_1__["default"].post('forum/discussion/move', {
        discussion: this.discussion.id,
        category: 41
      });
    },
    openModalLikes: function openModalLikes(post) {
      var _this = this;
      this.modals.likes.loading = true;
      this.modals.likes.open = true;
      _api__WEBPACK_IMPORTED_MODULE_1__["default"].get('forum/post/like/' + post.id).then(function (response) {
        if (response.data.success) {
          _this.modals.likes.loading = false;
          _this.modals.likes.data = response.data.users;
        }
      });
    },
    openDiscussion: function openDiscussion() {
      var _this2 = this;
      _api__WEBPACK_IMPORTED_MODULE_1__["default"].post('forum/discussion/unlock', {
        discussion: this.discussion.id
      }).then(function (response) {
        if (response.data.success) _this2.loadDiscussion();
      });
    },
    closeDiscussion: function closeDiscussion() {
      var _this3 = this;
      _api__WEBPACK_IMPORTED_MODULE_1__["default"].post('forum/discussion/lock', {
        discussion: this.discussion.id
      }).then(function (response) {
        if (response.data.success) _this3.loadDiscussion();
      });
    },
    moveDiscussion: function moveDiscussion() {
      _api__WEBPACK_IMPORTED_MODULE_1__["default"].post('forum/discussion/move', {
        discussion: this.discussion.id,
        category: this.modals.move.to.id
      });
    },
    pinDiscussion: function pinDiscussion() {
      var _this4 = this;
      _api__WEBPACK_IMPORTED_MODULE_1__["default"].post('forum/discussion/pin', {
        discussion: this.discussion.id
      }).then(function (response) {
        if (response.data.success) _this4.loadDiscussion();
      });
    },
    unpinDiscussion: function unpinDiscussion() {
      var _this5 = this;
      _api__WEBPACK_IMPORTED_MODULE_1__["default"].post('forum/discussion/unpin', {
        discussion: this.discussion.id
      }).then(function (response) {
        if (response.data.success) _this5.loadDiscussion();
      });
    },
    deleteDiscussion: function deleteDiscussion() {
      var _this6 = this;
      this.$bvModal.msgBoxConfirm('Вы уверены что хотите УДАЛИТЬ данную тему?', {
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
          _api__WEBPACK_IMPORTED_MODULE_1__["default"].post('forum/discussion/delete', {
            discussion: _this6.discussion.id
          }).then(function (response) {
            if (response.data.success) {
              _this6.$router.push({
                name: 'category',
                params: {
                  slug: _this6.category.slug
                }
              });
            }
          });
        }
      });
    },
    post: function post() {
      var _this7 = this;
      _api__WEBPACK_IMPORTED_MODULE_1__["default"].post('forum/post/create', {
        chatter_discussion_id: this.discussion.id,
        body: this.newpost.content
      }).then(function (response) {
        if (response.data.success) {
          _this7.$socket.emit('forum.posts.new');
          _this7.newpost.content = '';
          _this7.loadDiscussion();
        }
      });
    },
    blockUser: function blockUser(user) {
      this.modals.ban.user = user;
      this.modals.ban.open = true;
    },
    performBan: function performBan() {
      var _this8 = this;
      _api__WEBPACK_IMPORTED_MODULE_1__["default"].post('forum/user/ban', {
        user: this.modals.ban.user.id,
        reason: this.modals.ban.reason,
        days: this.modals.ban.days,
        ingame: this.modals.ban.game
      }).then(function (response) {
        if (response.data.success) _this8.modals.ban.open = false;
      });
    },
    clearSign: function clearSign(user) {
      _api__WEBPACK_IMPORTED_MODULE_1__["default"].post('forum/user/sign/delete', {
        user: user.id
      });
    },
    deleteTemplate: function deleteTemplate() {
      var _this9 = this;
      _api__WEBPACK_IMPORTED_MODULE_1__["default"].post('forum/post/template/delete', {
        id: this.modals.template.id
      }).then(function (response) {
        if (response.data.success) {
          _this9.modals.template.open = false;
        }
      });
    },
    saveTemplate: function saveTemplate() {
      var _this10 = this;
      _api__WEBPACK_IMPORTED_MODULE_1__["default"].post('forum/post/template', {
        name: this.modals.template.name,
        body: this.newpost.content
      }).then(function (response) {
        if (response.data.success) {
          _this10.modals.template.name = '';
          _this10.modals.template.open = false;
        }
      });
    },
    likePost: function likePost(post, rep) {
      _api__WEBPACK_IMPORTED_MODULE_1__["default"].post('forum/post/like/' + post.id, {
        like: rep
      }).then(function (response) {
        if (response.data.success) post.likes += rep;
      });
    },
    editPost: function editPost(post) {
      _api__WEBPACK_IMPORTED_MODULE_1__["default"].post('forum/post/update/' + post.id, {
        body: tinymce_tinymce__WEBPACK_IMPORTED_MODULE_4___default.a.get('edit' + post.id).getContent()
      });
    },
    deletePost: function deletePost(id) {
      var _this11 = this;
      _api__WEBPACK_IMPORTED_MODULE_1__["default"].post('forum/post/delete/' + id).then(function (response) {
        if (response.data.success) _this11.loadDiscussion();
      });
    },
    initSpoilers: function initSpoilers() {
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(function () {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('.spoiler-text').hide();
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('.spoiler-toggle').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).next().toggle();
        });
      });
    },
    loadDiscussion: function loadDiscussion() {
      var _this12 = this;
      this.loading = true;
      _api__WEBPACK_IMPORTED_MODULE_1__["default"].get('forum/discussion/' + this.$route.params.slug + '?page=' + this.pagination.current_page).then(function (response) {
        _this12.category = response.data.category;
        _this12.discussion = response.data.discussion;
        _this12.posts = response.data.posts;
        _this12.pagination.total = response.data.posts.total;
        _this12.editor.init.templates = response.data.templates;
        _this12.loading = false;
        _this12.$nextTick(function () {
          this.initSpoilers();
        });
        if (_this12.$route.hash) {
          _this12.$nextTick(function () {
            this.$refs[this.$route.hash][0].scrollIntoView();
          });
        }
      });
    }
  },
  watch: {
    '$route': function $route(to) {
      if (to.params.page) {
        this.pagination.current_page = to.params.page;
      }
      this.loadDiscussion();
    },
    'pagination.current_page': function paginationCurrent_page(newVal) {
      if (this.discussion) {
        this.$router.push({
          name: 'discussion',
          params: {
            slug: this.discussion.slug,
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumDiscussion.vue?vue&type=template&id=60ade930&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ForumDiscussion.vue?vue&type=template&id=60ade930& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return this.loading ? _c("loader") : _c("div", {
    staticClass: "forum"
  }, [_c("div", {
    staticClass: "row breadcrumbs"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("ul", [_c("li", [_c("router-link", {
    staticClass: "btn_common primary",
    attrs: {
      to: {
        name: "forum"
      }
    }
  }, [_vm._v("Форум")])], 1), _vm._v(" "), _vm.category ? _c("li", [_c("router-link", {
    staticClass: "btn_common info",
    attrs: {
      to: {
        name: "category",
        params: {
          slug: _vm.category.slug
        }
      }
    }
  }, [_vm._v(_vm._s(_vm.category.name))])], 1) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-7 text-right"
  }, [_c("a", {
    staticClass: "btn_common mr-2 d-none d-md-inline-block",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Новые публикации")]), _vm._v(" "), _c("router-link", {
    staticClass: "btn_common dark",
    attrs: {
      to: {
        name: "forum_search"
      }
    }
  }, [_vm._v("Поиск... "), _c("i", {
    staticClass: "fas fa-search fa-sm ml-2"
  })])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-lg"
  }, [_c("div", {
    staticClass: "thread"
  }, [_vm.discussion.pinned ? _c("div", {
    staticClass: "row alert align-items-center justify-content-center justify-content-md-start text-center text-md-left mb-3"
  }, [_c("i", {
    staticClass: "fal fa-thumbtack"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md"
  }, [_c("h3", [_vm._v("Тема закреплена")]), _vm._v(" "), _c("p", [_vm._v("Обсуждение закреплено. Скорее всего, здесь есть важная информация.")])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row header align-items-center text-center text-md-left"
  }, [_c("div", {
    staticClass: "user_pic d-none d-md-block"
  }, [_c("img", {
    attrs: {
      src: _vm.getHeadUrl(_vm.discussion.user.uuid),
      alt: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("h3", [_vm._v(_vm._s(_vm.discussion.title))]), _vm._v(" "), _c("p", [_vm._v("Опубликовано "), _c("router-link", {
    attrs: {
      to: {
        name: "user",
        params: {
          login: _vm.discussion.user.login
        }
      }
    }
  }, [_vm._v(_vm._s(_vm.discussion.user.login))]), _vm._v(" " + _vm._s(_vm.humanDiff(_vm.discussion.created_at)) + " назад в раздел "), _c("router-link", {
    attrs: {
      to: {
        name: "category",
        params: {
          slug: _vm.category.slug
        }
      }
    }
  }, [_vm._v(_vm._s(_vm.category.name))])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "py-3 text-center text-md-right"
  }, [_vm.hasPermission("forum_manager.logs.access") ? _c("b-dropdown", {
    attrs: {
      text: "Опции"
    }
  }, [_vm.discussion.no_reply ? _c("b-dropdown-item", {
    on: {
      click: _vm.openDiscussion
    }
  }, [_vm._v("Открыть")]) : _c("b-dropdown-item", {
    on: {
      click: _vm.closeDiscussion
    }
  }, [_vm._v("Закрыть")]), _vm._v(" "), _c("b-dropdown-item", {
    on: {
      click: function click($event) {
        _vm.modals.move.open = true;
      }
    }
  }, [_vm._v("Перенести")]), _vm._v(" "), _vm.discussion.pinned ? _c("b-dropdown-item", {
    on: {
      click: _vm.unpinDiscussion
    }
  }, [_vm._v("Открепить")]) : _c("b-dropdown-item", {
    on: {
      click: _vm.pinDiscussion
    }
  }, [_vm._v("Закрепить")]), _vm._v(" "), _c("b-dropdown-item", {
    on: {
      click: _vm.archiveDiscussion
    }
  }, [_vm._v("Архивировать")]), _vm._v(" "), _c("b-dropdown-item", {
    on: {
      click: _vm.deleteDiscussion
    }
  }, [_vm._v("Удалить")])], 1) : _vm._e(), _vm._v(" "), _c("a", {
    staticClass: "btn_common primary ml-2",
    attrs: {
      href: "#",
      onclick: "$('html, body').animate({ scrollTop: $('#anchor').offset().top}, 1000);"
    }
  }, [_vm._v("Ответить")])], 1), _vm._v(" "), _c("div", {
    staticClass: "body"
  }, [_vm._l(_vm.posts.data, function (post) {
    return _c("div", {
      ref: "#" + post.id,
      refInFor: true,
      staticClass: "row post",
      attrs: {
        id: "post" + post.id
      }
    }, [_c("div", {
      staticClass: "col-12 col-md author"
    }, [_c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col col-md-12 order-2 order-md-1 text-left text-md-center"
    }, [_c("h5", [_c("router-link", {
      attrs: {
        to: {
          name: "user",
          params: {
            login: post.user.login
          }
        }
      }
    }, [_vm._v(_vm._s(post.user.login))])], 1), _vm._v(" "), _c("p", {
      domProps: {
        innerHTML: _vm._s(post.user.siterole)
      }
    }, [_vm._v("Игрок")])]), _vm._v(" "), _c("div", {
      staticClass: "col avatar order-1 order-md-2 mt-md-2 mb-md-1"
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
        src: _vm.getHeadUrl(post.user.uuid),
        alt: ""
      }
    })])], 1), _vm._v(" "), _c("div", {
      staticClass: "col order-3 ml-auto ml-md-0 col-md-12 text-right text-md-center"
    }, [_c("p", [_vm._v(_vm._s(post.user.posts) + " " + _vm._s(_vm.declOfNum(post.user.posts, ["сообщение", "сообщения", "сообщений"])))])]), _vm._v(" "), _c("div", {
      staticClass: "col-12 order-4 d-none d-md-block"
    }, [_c("p", {
      "class": "rep " + (post.user.reputation < -100 ? "nightmare" : post.user.reputation < -5 ? "danger" : post.user.reputation > 100 ? "liked" : post.user.reputation > 5 ? "primary" : "")
    }, [_c("b", [_vm._v(_vm._s(post.user.reputation))]), _vm._v("\n                                        " + _vm._s(post.user.reputation < -100 ? "Очень плохой" : post.user.reputation < -5 ? "Плохой" : post.user.reputation > 100 ? "Очень хороший" : post.user.reputation > 5 ? "Хороший" : "Обычный") + "\n                                    ")])])])]), _vm._v(" "), _c("div", {
      staticClass: "col-12 col-md"
    }, [_c("div", {
      staticClass: "meta"
    }, [_c("span", [_vm._v("Опубликовано " + _vm._s(_vm.moment(post.created_at).format("lll")))]), _vm._v(" "), _c("span", {
      staticClass: "d-block float-md-right"
    }, [_c("a", {
      attrs: {
        href: "#" + post.id
      }
    }, [_vm._v("#" + _vm._s(post.id))])])]), _vm._v(" "), _vm.editingPost === post.id ? _c("div", {
      staticClass: "content"
    }, [_c("editor", {
      attrs: {
        id: "edit" + post.id,
        init: _vm.editor.init,
        "initial-value": post.body,
        inline: ""
      }
    })], 1) : _c("div", {
      staticClass: "content",
      domProps: {
        innerHTML: _vm._s(post.body)
      }
    }), _vm._v(" "), _c("hr"), _vm._v(" "), post.user.sign && _vm.isLogged && _vm.user.show_signs ? _c("div", {
      staticClass: "sign",
      domProps: {
        innerHTML: _vm._s(post.user.sign)
      }
    }) : _vm._e(), _vm._v(" "), post.user.sign && _vm.isLogged && _vm.user.show_signs ? _c("hr") : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "row action align-items-center text-center text-lg-left mr-0"
    }, [_c("div", {
      staticClass: "col-12 col-lg"
    }, [_vm.isLogged && (post.user.id === _vm.user.id || _vm.hasPermission("forum.post.edit")) && _vm.editingPost !== post.id ? _c("a", {
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          _vm.editingPost = post.id;
        }
      }
    }, [_vm._v("Редактировать")]) : _vm._e(), _vm._v(" "), _vm.isLogged && (post.user.id === _vm.user.id || _vm.hasPermission("forum.post.edit")) && _vm.editingPost === post.id ? _c("a", {
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.editPost(post);
        }
      }
    }, [_vm._v("Сохранить")]) : _vm._e(), _vm._v(" "), _vm.isLogged && (post.user.id === _vm.user.id || _vm.hasPermission("forum.post.delete")) ? _c("a", {
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.deletePost(post.id);
        }
      }
    }, [_vm._v("Удалить")]) : _vm._e(), _vm._v(" "), _vm.hasPermission("forum_manager.ban.access") ? _c("a", {
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.blockUser(post.user);
        }
      }
    }, [_vm._v("Заблокировать")]) : _vm._e(), _vm._v(" "), _vm.hasPermission("forum_manager.sign.delete") ? _c("a", {
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.clearSign(post.user);
        }
      }
    }, [_vm._v("Очистить подпись")]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "mt-2 mt-lg-0 ml-auto mr-lg-0 mr-auto"
    }, [_vm.isLogged ? _c("a", {
      staticClass: "btn_common danger outline",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.likePost(post, -1);
        }
      }
    }, [_vm._v("Не нравится")]) : _vm._e(), _vm._v(" "), _vm.isLogged ? _c("a", {
      staticClass: "btn_common primary outline",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.likePost(post, 1);
        }
      }
    }, [_vm._v("Нравится")]) : _vm._e(), _vm._v(" "), post.likes !== 0 ? _c("a", {
      "class": "btn_common " + (post.likes < 0 ? "danger" : "primary"),
      attrs: {
        href: "#",
        rel: "modal"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.openModalLikes(post);
        }
      }
    }, [_vm._v(_vm._s(post.likes))]) : _vm._e()])])])]);
  }), _vm._v(" "), _c("div", {
    attrs: {
      id: "anchor"
    }
  })], 2), _vm._v(" "), _vm.pagination.total > 10 ? _c("div", {
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
  })], 1) : _vm._e(), _vm._v(" "), _vm.discussion.no_reply ? _c("div", {
    staticClass: "row alert align-items-center justify-content-center justify-content-md-start text-center text-md-left mt-3"
  }, [_c("i", {
    staticClass: "fal fa-lock-alt"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md"
  }, [_c("h3", [_vm._v("Тема закрыта")]), _vm._v(" "), _c("p", [_vm._v("Вы не можете создавать новые сообщения в этой теме")])])]) : _vm.isLogged ? _c("div", {
    staticClass: "row footer mt-3"
  }, [_c("div", {
    staticClass: "user_pic d-none d-md-block"
  }, [_c("img", {
    attrs: {
      src: _vm.getHeadUrl(_vm.user.uuid),
      alt: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("editor", {
    attrs: {
      id: "newpost",
      init: _vm.editor.init
    },
    model: {
      value: _vm.newpost.content,
      callback: function callback($$v) {
        _vm.$set(_vm.newpost, "content", $$v);
      },
      expression: "newpost.content"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 text-right mt-3"
  }, [_vm.hasPermission("forum.template.access") ? _c("a", {
    staticClass: "btn_common btn_common_lg",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.modals.template.open = true;
      }
    }
  }, [_vm._v("Шаблоны")]) : _vm._e(), _vm._v(" "), _c("a", {
    staticClass: "btn_common btn_common_lg primary",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.post.apply(null, arguments);
      }
    }
  }, [_vm._v("Отправить")])])]) : _vm._e()])])]), _vm._v(" "), _c("b-modal", {
    attrs: {
      "hide-footer": ""
    },
    model: {
      value: _vm.modals.template.open,
      callback: function callback($$v) {
        _vm.$set(_vm.modals.template, "open", $$v);
      },
      expression: "modals.template.open"
    }
  }, [_c("v-select", {
    attrs: {
      options: _vm.editor.init.templates,
      reduce: function reduce(template) {
        return template.id;
      },
      label: "title"
    },
    model: {
      value: _vm.modals.template.id,
      callback: function callback($$v) {
        _vm.$set(_vm.modals.template, "id", $$v);
      },
      expression: "modals.template.id"
    }
  }), _vm._v(" "), _c("b-button", {
    staticClass: "mt-2",
    attrs: {
      block: ""
    },
    on: {
      click: _vm.deleteTemplate
    }
  }, [_vm._v("Удалить шаблон")]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("b-input", {
    attrs: {
      placeholder: "Имя для шаблона"
    },
    model: {
      value: _vm.modals.template.name,
      callback: function callback($$v) {
        _vm.$set(_vm.modals.template, "name", $$v);
      },
      expression: "modals.template.name"
    }
  }), _vm._v(" "), _c("b-button", {
    staticClass: "mt-2",
    attrs: {
      block: ""
    },
    on: {
      click: _vm.saveTemplate
    }
  }, [_vm._v("Сохранить шаблон")])], 1), _vm._v(" "), _c("b-modal", {
    attrs: {
      "hide-footer": ""
    },
    model: {
      value: _vm.modals.ban.open,
      callback: function callback($$v) {
        _vm.$set(_vm.modals.ban, "open", $$v);
      },
      expression: "modals.ban.open"
    }
  }, [_c("h3", [_vm._v("Блокировка игрока: " + _vm._s(_vm.modals.ban.user.login))]), _vm._v(" "), _c("b-input", {
    staticClass: "mt-2",
    attrs: {
      placeholder: "Причина"
    },
    model: {
      value: _vm.modals.ban.reason,
      callback: function callback($$v) {
        _vm.$set(_vm.modals.ban, "reason", $$v);
      },
      expression: "modals.ban.reason"
    }
  }), _vm._v(" "), _c("b-input", {
    staticClass: "mt-2",
    attrs: {
      placeholder: "Количество дней",
      max: "365",
      min: "1",
      type: "number"
    },
    model: {
      value: _vm.modals.ban.days,
      callback: function callback($$v) {
        _vm.$set(_vm.modals.ban, "days", $$v);
      },
      expression: "modals.ban.days"
    }
  }), _vm._v(" "), _c("b-checkbox", {
    staticClass: "mt-2",
    model: {
      value: _vm.modals.ban.game,
      callback: function callback($$v) {
        _vm.$set(_vm.modals.ban, "game", $$v);
      },
      expression: "modals.ban.game"
    }
  }, [_vm._v("Выдать блокировку в игре")]), _vm._v(" "), _c("b-button", {
    staticClass: "mt-2",
    attrs: {
      block: ""
    },
    on: {
      click: _vm.performBan
    }
  }, [_vm._v("Выдать блокировку")])], 1), _vm._v(" "), _c("b-modal", {
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
    on: {
      select: function select($event) {}
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
  }, [_vm._v("Переместить")])], 1), _vm._v(" "), _c("b-modal", {
    attrs: {
      "modal-class": "modal",
      "hide-header": "",
      "hide-footer": "",
      "content-class": "custom_modal"
    },
    model: {
      value: _vm.modals.likes.open,
      callback: function callback($$v) {
        _vm.$set(_vm.modals.likes, "open", $$v);
      },
      expression: "modals.likes.open"
    }
  }, [_c("div", {
    attrs: {
      id: "modal"
    }
  }, [_c("div", {
    staticClass: "window listLiked"
  }, [_c("div", {
    staticClass: "header"
  }, [_vm.modals.likes.data.length <= 0 ? _c("div", [_c("h2", [_vm._v("Оценок нет")])]) : _c("div", [_c("h2", [_vm._v("Сообщение оценили:")]), _vm._v(" "), _c("div", {
    staticClass: "row justify-content-center content mt-3 px-3 pb-3"
  }, _vm._l(_vm.modals.likes.data, function (like) {
    return _c("router-link", {
      key: like.login,
      staticClass: "user",
      attrs: {
        to: {
          name: "user",
          params: {
            login: like.login
          }
        }
      }
    }, [_c("div", {
      staticClass: "user_pic"
    }, [_c("img", {
      attrs: {
        src: _vm.getHeadUrl(like.uuid),
        alt: ""
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col"
    }, [_c("h3", [_vm._v(_vm._s(like.login))]), _vm._v(" "), like.rep >= 1 ? _c("p", {
      staticClass: "primary"
    }, [_vm._v("Положительно")]) : _c("p", {
      staticClass: "danger"
    }, [_vm._v("Отрицательно")])])]);
  }), 1)])])])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/ForumDiscussion.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/ForumDiscussion.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForumDiscussion_vue_vue_type_template_id_60ade930___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForumDiscussion.vue?vue&type=template&id=60ade930& */ "./resources/js/pages/ForumDiscussion.vue?vue&type=template&id=60ade930&");
/* harmony import */ var _ForumDiscussion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForumDiscussion.vue?vue&type=script&lang=js& */ "./resources/js/pages/ForumDiscussion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForumDiscussion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForumDiscussion_vue_vue_type_template_id_60ade930___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForumDiscussion_vue_vue_type_template_id_60ade930___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ForumDiscussion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/ForumDiscussion.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/ForumDiscussion.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumDiscussion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ForumDiscussion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumDiscussion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumDiscussion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/ForumDiscussion.vue?vue&type=template&id=60ade930&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/ForumDiscussion.vue?vue&type=template&id=60ade930& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumDiscussion_vue_vue_type_template_id_60ade930___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./ForumDiscussion.vue?vue&type=template&id=60ade930& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ForumDiscussion.vue?vue&type=template&id=60ade930&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumDiscussion_vue_vue_type_template_id_60ade930___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ForumDiscussion_vue_vue_type_template_id_60ade930___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);