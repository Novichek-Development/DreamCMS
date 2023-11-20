const state = {
        menu: [
            {
                title: 'Форум',
                to: {name: 'forum'}
            },
            {
                title: 'Наши сервера',
                cols: [
                    [
                        {
                            title: 'Сервера 1.7.10',
                            child: [
                                {title: 'Sandbox', to: {name: 'page', params: {name: 'sandbox'}}},

                                {title: 'Technology', to: {name: 'page', params: {name: 'technology'}}},
                                {title: 'MagicRPG', to: {name: 'page', params: {name: 'magic_rpg'}}},
                                {title: 'DivineRPG', to: {name: 'page', params: {name: 'rpg'}}}
                            ]
                        },
                        {
                            title: 'Сервера 1.12.2',
                            child: [
                                {title: 'Mysterius', to: {name: 'page', params: {name: 'mysterius'}}},
                                {title: 'Pixelmon', to: {name: 'page', params: {name: 'pixelmon'}}},
                                {title: 'Infected', to: {name: 'page', params: {name: 'infected'}}},
                            ]
                        },
                    ],
                    [
                        {
                            title: 'Сервера 1.16.5',
                            child: [
                                {title: 'Architechnica', to: {name: 'page', params: {name: 'architechnica'}}},
                                {title: 'Vanilla+', to: {name: 'page', params: {name: 'vanilla_plus'}}},
                            ]
                        },
                        {
                            title: 'Сервера 1.19.3',
                            child: [
                                {title: 'Vanilla', to: {name: 'page', params: {name: 'vanilla'}}},
                            ]
                        },
                        {
                            title: 'Мини-игры',
                            child: [
                                {title: 'MiniGames', to: {name: 'page', params: {name: 'minigames'}}},
                            ]
                        },
                    ],
                ]
            },
            {
                title: 'Помощь',
                child: [
                    {title: 'Правила', to: {name: 'page', params: {name: 'rules'}}},
                    {title: 'Вопросы и ответы', to: {name: 'page', params: {name: 'help'}}},
                    {title: 'Скачать лаунчер', to: {name: 'page', params: {name: 'download'}}},
                    {title: 'Команды', to: {name: 'page', params: {name: 'commands'}}},
                    {title: 'Банлист', to: {name: 'banlist'}},
                    {title: 'Хочу в команду!', to: {name: 'moderentry'}},
                    {title: 'Команда проекта', to: {name: 'page', params: {name: 'team'}}},
                    {title: 'Приватные сервера', to: {name: 'waitlistentry'}}
                ]
            },
            {
                title: 'Донат',
                class: 'donate',
                to: {name: 'page', params: {name: 'donate'}}
            },
            {
                title: 'Магазин блоков',
                class: 'shop',
                to: {name: 'shop'}
            },
            {
                title: 'Кабинет',
                auth: true,
                to: {name: 'cabinet'}
            }
        ]
    };

const getters = {
    menu: state => state.menu,
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}
