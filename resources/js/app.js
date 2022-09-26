import './bootstrap';

import { createApp, h } from 'vue';
import { createInertiaApp, Head } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Layout from './Shared/Layout.vue';

createInertiaApp({
    resolve: async name => {
        let page = (await import(`./Pages/${name}`)).default;

        if (page.layout === undefined) {
            page.layout = Layout;
        }

        return page;
    },

    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component('Head', Head)
            .mount(el)
    },

    title: title => title + ' - My App'
});

InertiaProgress.init()
