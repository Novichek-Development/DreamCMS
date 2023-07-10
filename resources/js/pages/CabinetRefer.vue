<template>
    <div :class="loading ? 'unload' : ''">
        <div class="section economy">
            <h3>Реферальная система</h3>
            <p>Приглашая игроков по специальной реферальной ссылке внизу, вы будете получать {{ settings.balance_percent }}% от его пополнений счета и {{ settings.tops_percent }}% от голосов в топах. Важно, что бы игрок зарегистрировался именно по вашей ссылке!</p>
            <p>
                <b-form-input disabled :value="getHostname() + '/?refer=' + user.login"></b-form-input>
            </p>
            <div class="purchases" v-if="refers.length <= 0">
                <p>Вы еще не пригласили ни одного игрока</p>
            </div>
        </div>
        <div class="banlist" v-if="refers.length > 0">
            <div class="section spreadsheet mt-3">
                <div class="head d-none d-sm-block">
                    <div class="row">
                        <div class="col-4 col-md">Игрок</div>
                        <div class="col-4 col-md">Дата регистрации</div>
                        <div class="col-4 col-md">Кол-во голосов</div>
                    </div>
                </div>
                <div>
                    <div class="row" v-for="refer in refers">
                        <div class="col-12 col-sm-4 col-md">
                            <router-link :to="{name: 'user', params: {login: refer.login}}">
                                <div class="user_pic">
                                    <img :src="getHeadUrl(refer.uuid)" alt>
                                </div>
                                {{ refer.login }}
                            </router-link>
                        </div>
                        <div class="col-12 col-sm-4 col-md">
                            {{ refer.reg_time }}
                        </div>
                        <div class="col-12 col-sm-4 col-md">
                            {{ refer.votes }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import api from "../api";

    export default {
        name: "CabinetRefer",
        computed: {
            ...mapGetters(['user'])
        },
        data(){
            return {
                loading: true,

                settings:{
                    balance_percent: 0,
                    tops_percent: 0,
                },

                refers:[]
            }
        },
        mounted(){
            this.load();
        },
        methods:{
            getHostname(){
                return location.origin;
            },
            load(){
                this.loading = true;

                api.get('/profile/refers')
                .then(response => {
                    if (response.data.success){
                        this.refers = response.data.refers;
                        this.settings = response.data.settings;
                    }
                }).finally(() =>{
                    this.loading = false;
                });
            }
        }
    }
</script>
