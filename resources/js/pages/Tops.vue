<template>
    <div :class="'inner ' + (loading ? 'unload' : '')">
        <div class="headline">
            <h2>Топ игроков</h2>
            <p>Здесь представлен перечень пользователей для ознакомления ;)</p>
        </div>

        <div class="banlist mt-5">
            <div class="section primary search">
                <div class="row align-items-center">
                    <i class="fal fa-search d-none d-sm-block"></i>
                    <b-select class="col form-control mr-3" :options="tops" value-field="type" text-field="name" v-model="top"></b-select>
                    <b-select class="col form-control" :options="servers" value-field="id" text-field="name" v-model="server" v-if="top === 'money'"></b-select>
                </div>
            </div>
            <div class="section spreadsheet mt-3" v-if="top === 'votes' && topVotes">
                <div class="head d-none d-sm-block">
                    <div class="row">
                        <div class="col-4 col-md">Место</div>
                        <div class="col-4 col-md">Игрок</div>
                        <div class="col-4 col-md">Всего голосов</div>
                    </div>
                </div>
                <div class="body">
                    <div class="row" v-for="(topUser, index) in topVotes">
                        <div class="col-12 col-sm-4 col-md">
                            {{ index + 1 }}
                        </div>
                        <div class="col-12 col-sm-4 col-md">
                            <router-link :to="{name: 'user', params: {login: topUser.login}}">
                                <div class="user_pic">
                                    <img :src="getHeadUrl(topUser.uuid)" alt>
                                </div>
                                {{ topUser.login }}
                            </router-link>
                        </div>
                        <div class="col-12 col-sm-4 col-md">
                            {{ readableNum(topUser.total) }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="section spreadsheet mt-3" v-if="top === 'money' && topMoney">
                <div class="head d-none d-sm-block">
                    <div class="row">
                        <div class="col-4 col-md">Место</div>
                        <div class="col-4 col-md">Игрок</div>
                        <div class="col-4 col-md">Баланс</div>
                    </div>
                </div>
                <div class="body">
                    <div class="row" v-for="(topUser, index) in topVotes">
                        <div class="col-12 col-sm-4 col-md">
                            {{ index + 1 }}
                        </div>
                        <div class="col-12 col-sm-4 col-md">
                            <router-link :to="{name: 'user', params: {login: topUser.login}}">
                                <div class="user_pic">
                                    <img :src="getHeadUrl(topUser.uuid)" alt>
                                </div>
                                {{ topUser.login }}
                            </router-link>
                        </div>
                        <div class="col-12 col-sm-4 col-md">
                            {{ readableNum(topUser.top_money) }}
                        </div>
                    </div>
                </div>
            </div>
<!--            <div class="paging">-->
<!--                <b-pagination v-model="pagination.current_page"-->
<!--                              :total-rows="pagination.total"-->
<!--                              :per-page="pagination.per_page">-->
<!--                </b-pagination>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
    import api from "../api";
    import {mapGetters} from "vuex";

    export default {
        name: "Tops",
        computed: {
            ...mapGetters(['isLogged', 'servers'])
        },
        data(){
            return {
                loading: true,
                top: 'votes',

                tops: [
                    {type: 'votes', name: 'По голосам'},
                    {type: 'money', name: 'По балансу'}
                ],

                pagination: {
                    current_page: 1,
                    total: 0,
                    per_page: 10
                },

                server: null,

                topVotes: false,
                topMoney: false,
            }
        },
        mounted(){
            this.loadTop();
        },
        methods: {
            loadTop(){
                if (this.top === 'votes'){
                    this.loadTopVotes();
                }else {
                    if (this.server){
                        this.loadTopMoney();
                    }
                }
            },
            loadTopVotes(){
                this.loading = true;

                api.post('top/votes').then(response => {
                    if (response.data.success){
                        this.topVotes = response.data.data;
                    }

                    // this.pagination.current_page = response.data.current_page;
                    // this.pagination.last_page = response.data.last_page;
                    // this.pagination.per_page = response.data.per_page;
                    // this.pagination.total = response.data.total;

                    this.loading = false;
                }).catch(error => {
                    console.error(error);
                });
            },
            loadTopMoney(){
                this.loading = true;

                api.post('top/money', {server: this.server}).then(response => {
                    if (response.data.success){
                        this.topMoney = response.data.data;
                    }

                    this.loading = false;
                }).catch(error => {
                    console.error(error);
                });
            }
        },
        watch: {
            'top' : function (newVal) {
                this.loadTop();
            },
            'pagination.current_page' : function () {
                this.loadTop();
            },
            'server' : function () {
                this.loadTop();
            }
        }
    }
</script>

<style scoped>

</style>
