<template>
    <header>
        <Nav />
    </header>

    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <slot />
                </div>
            </div>
        </div>
    </main>

    <footer class="footer mt-auto py-3">
        <div class="container text-center">
            &copy; {{ $page.props.env.APP_NAME }} {{ currentYear }}
        </div>
    </footer>
</template>

<script>
import Nav from '../Shared/Nav.vue';

export default {
    components: { Nav },

    computed: {
        currentYear() {
            const date = new Date();
            return date.getFullYear();
        }
    }
};
</script>
