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
                                    title: 'Сервера 1.16.5',
                                    child: [
                                        {title: 'Architechnica', to: {name: 'page', params: {name: 'technomagic'}}},
                                    ]
                                },
                        {
                            title: 'Сервера 1.12.2',
                            child: [
                                {title: 'Technology', to: {name: 'page', params: {name: 'nanotech'}}},
                                {title: 'Mysterius', to: {name: 'page', params: {name: 'magic'}}}
                            ]
                        }
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
                    {title: 'Команда проекта', to: {name: 'page', params: {name: 'team'}}}
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
