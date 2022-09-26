<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <NavLink href="/" class="navbar-brand">{{ $page.props.env.APP_NAME }}</NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NavLink href="/" class="nav-link" :active="$page.component === 'Home'">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink href="/users" class="nav-link" :active="$page.component === 'Users/Index'">Users</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink href="/settings" class="nav-link" :active="$page.component === 'Settings'">Settings</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink :href="`/users?search=${name}`" class="nav-link">{{ name }}</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink href="/logout" method="post" as="button" class="nav-link">Logout</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import NavLink from '../Shared/NavLink.vue';
import { Link } from '@inertiajs/inertia-vue3';

export default {
    components: { NavLink, Link },

    computed: {
        name() {
            return this.$page.props.auth.user.name;
        }
    }
};
</script>
