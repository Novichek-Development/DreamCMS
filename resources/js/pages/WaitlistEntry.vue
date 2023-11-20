<template>
    <div :class="'inner ' + (this.loading ? 'unload' : '')">
        <div class="headline text-center">
            <h2>Приватные сервера</h2>
            <p>Приватные сервера — их разрабатывает большая команда разработчиков нашего проекта, поэтому они сильно ценятся. </p>
        </div>
        <div class="moder">
            <div class="section primary">
                <h3>Запрос доступа к приватным серверам</h3>
                <p>Вы уже купили привилегию, но до сих пор не можете попасть на сервер? Не беда. Отправьте запрос на получение доступа к приватным серверам и ожидайте!</p>
                <div class="fieldset current" v-if="current">
                    <div class="row">
                        <div class="col-12 col-sm-4">
                            <h5>Статус заявки</h5>
                            <small>Отправлено {{ moment.unix(current.time).format('lll') }}</small>
                            <small>Создать новую возможно после:</small>
                            <small>{{ moment.unix(current.time + (7 * 24 * 60 * 60)).format('lll') }}</small>
                        </div>
                        <div class="col" v-if="current.status === 'WAIT'">
                            <h5>Ожидает рассмотрения</h5>
                            <small v-if="current.can_delete"><a href="#" @click="deleteCurrent">Удалить запрос</a></small>
                        </div>
                        <div class="col success" v-if="current.status === 'ACCEPT'">
                            <h5>Поздравляем, Ваша заявка одобрена! </h5>
                            <small>Ожидайте, когда с вами свяжутся!</small>
                        </div>
                        <div class="col failed" v-if="current.status === 'DENY'">
                            <h5>Ваша заявка была отклонена</h5>
                            <small><b>Комментарий:</b> {{ current.answer ? current.answer : 'Без комментария' }}</small>
                        </div>
                        <div class="col failed" v-if="current.status === 'DENY_FULL'">
                            <h5>Ваша заявка была отклонена без возможности повторной подачи</h5>
                            <small><b>Комментарий:</b> {{ current.answer ? current.answer : 'Без комментария' }}</small>
                        </div>
                    </div>
                </div>
                <div class="fieldset current" v-if="current">
                    <div class="row">
                        <div class="col-12 col-sm-4">
                            <h5>Ваш игровой никнейм</h5>
                        </div>
                        <div class="col">
                            <input class="form-control form-control-lg" :value="current.nickname" disabled>
                        </div>
                    </div>
                    <div class="row my-2">
                        <div class="col-12 col-sm-4">
                            <h5>Сколько вам лет?</h5>
                        </div>
                        <div class="col">
                            <input class="form-control form-control-lg" :value="current.age" disabled>
                        </div>
                    </div>
                    <div class="row my-2">
                        <div class="col-12 col-sm-4">
                            <h5>Контактные данные</h5>
                        </div>
                        <div class="col">
                            <input class="form-control form-control-lg" :value="current.contacts" disabled>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-sm-4">
                            <h5>Почему хотите играть у нас?</h5>
                        </div>
                        <div class="col">
                            <input class="form-control form-control-lg" :value="current.answer" disabled>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-sm-4">
                            <h5>Чем будете заниматься на сервере?</h5>
                        </div>
                        <div class="col">
                            <input class="form-control form-control-lg" :value="current.occup" disabled>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-sm-4">
                            <h5>Откуда узнали о нас?</h5>
                        </div>
                        <div class="col">
                            <textarea class="form-control form-control-lg" disabled>{{ current.found_out }}</textarea>
                        </div>
                    </div>
                </div>
                <div class="fieldset" v-else>
                    <div class="row">
                        <h5 class="col-12 col-sm-4">Выберите сервер</h5>
                        <div class="col">
                            <b-select class="form-control form-control-lg" :options="servers" value-field="id" text-field="name" v-model="entry.server"></b-select>
                        </div>
                    </div>
                </div>
                <div class="general">
                    <div class="fieldset" data-key="architechnica" v-if="entry.server === 40 || entry.server === 50 || entry.server === 34" style="display: block">
                        <div class="row align-items-center">
                            <div class="col-4 view d-none d-sm-block d-lg-none d-xl-block"></div>
                            <div class="col">
                                <h4>Одну минуточку! Кажется, ошибочка тут вышла...</h4>
                                <p>Вы подаёте запрос к доступам на приватные сервера, но не на модератора проекта. Но так вышло, что их приём ведётся не по этому адресу, честно-честно, мы не виноваты!</p>
                                <p>Он ведётся в другом разделе нашего сайта по ссылкам ниже, Вашу заявку ждут именно там, не перепутайте!</p>
                                <p>
                                    <a href="https://avemc.ru/moder/entry" class="btn_common mr-2 mb-2 mb-md-0" target="_blank">Набор в команду!</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="fieldset" data-key="vanilla_plus" v-else-if="entry.server === 30" style="display: block">
                        <div class="row align-items-center">
                            <div class="col-4 view d-none d-sm-block d-lg-none d-xl-block"></div>
                            <div class="col">
                                <h4>Упс, минуточку внимания!</h4>
                                <p>Вы подаёте запрос к доступам на приватные сервера, но не на модератора проекта. Однако набор модераторов на него проводится не здесь, честное администраторское слово!</p>
                                <p>Чтобы подать заявку, перейдите по ссылке ниже, главное тут ничего не перепутать!</p>
                                <p>
                                    <a href="https://avemc.ru/moder/entry" class="btn_common mr-2" target="_blank">Набор в команду!</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="fieldset" data-key="mysterius" v-if="entry.server === 40 || entry.server === 50 || entry.server === 34" style="display: block">
                        <div class="row align-items-center">
                            <div class="col-4 view d-none d-sm-block d-lg-none d-xl-block"></div>
                            <div class="col">
                                <h4>Одну минуточку! Кажется, ошибочка тут вышла...</h4>
                                <p>Вы подаёте запрос к доступам на приватные сервера, но не на модератора проекта. Но так вышло, что их приём ведётся не по этому адресу, честно-честно, мы не виноваты!</p>
                                <p>Он ведётся в другом разделе нашего сайта по ссылкам ниже, Вашу заявку ждут именно там, не перепутайте!</p>
                                <p>
                                    <a href="https://avemc.ru/moder/entry" class="btn_common mr-2 mb-2 mb-md-0" target="_blank">Набор в команду!</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="fieldset" data-key="mods" style="display: block" v-else-if="entry.server">
                        <div class="row align-items-center">
                            <div class="col-12 col-sm-4">
                                <h5>Никнейм</h5>
                            </div>
                            <div class="col">
                                <input class="form-control form-control-lg" placeholder="Ваш игровой никнейм" v-model="entry.nickname">
                            </div>
                        </div>
                        <div class="row align-items-center my-2">
                            <div class="col-12 col-sm-4">
                                <h5>Сколько вам лет</h5>
                            </div>
                            <div class="col">
                                <input class="form-control form-control-lg" placeholder="Возраст" v-model="entry.age">
                            </div>
                        </div>
                        <div class="row align-items-center my-2">
                            <div class="col-12 col-sm-4">
                                <h5>Контактные данные</h5>
                            </div>
                            <div class="col">
                                <input class="form-control form-control-lg" placeholder="Ссылки для связи с Вами" v-model="entry.contacts">
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-12 col-sm-4">
                                <h5>Почему хотите играть у нас?</h5>
                            </div>
                            <div class="col">
                                <input class="form-control form-control-lg" placeholder="Расскажите, почему мы вызвали у Вас интерес?" v-model="entry.answer">
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-12 col-sm-4">
                                <h5>Чем будете заниматься на сервере?</h5>
                            </div>
                            <div class="col">
                                <input class="form-control form-control-lg" placeholder="Расскажите о своей деятельности на сервере" v-model="entry.occup">
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-12 col-sm-4">
                                <h5>Откуда узнали о нас?</h5>
                            </div>
                            <div class="col">
                                <textarea class="form-control form-control-lg" placeholder="Расскажите о себе и своих увлечениях, это должно быть мини-сочинения не менее, чем на 150 слов!" rows="4" v-model="entry.found_out"></textarea>
                            </div>
                        </div>
                        <div class="row justify-content-end mt-3">
                            <div class="col-12 col-sm-8">
                                <a href="#" class="btn_common large" @click.prevent="sendWaitlistEntry">Отправить запрос</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import api from "../api";
    import {mapGetters} from "vuex";
    import moment from "moment";

    export default {
        name: "WaitlistEntry",
        computed:{
            ...mapGetters(['user', 'servers'])
        },
        data(){
            return {
                loading: true,

                current: null,

                entry:{
                    server: null,
                    nickname: '',
                    age: '',
                    answer: '',
                    occup: '',
                    found_out: '',
                }
            }
        },
        mounted(){
            this.loadCurrent();
        },
        methods:{
            deleteCurrent(){
              this.loading = true;

              api.post('/waitlist/delete', this.entry).finally(() => {
                  this.loading = false;
              });
            },
            loadCurrent(){
                this.loading = true;

                api.get('/waitlist/load').then(response => {
                    this.current = response.data.current;
                }).finally(() =>{
                    this.loading = false;
                });
            },
            sendWaitlistEntry(){
                this.loading = true;

                api.post('/waitlist/send', this.entry)
                .then(response => {
                }).finally(() =>{
                    this.loading = false;
                });
            }
        }
    }
</script>