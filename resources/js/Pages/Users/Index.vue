<template>
    <Head title="Users" />
    <p v-if="can.createUser" class="text-end">
        <Link :href="route('users.create')" class="btn btn-primary">Create User</Link>
    </p>
    <h1>Users</h1>
    <div class="row justify-content-center">
        <div class="col-12 col-md-4">
            <input type="text" class="form-control" v-model="search" placeholder="Search..." />
        </div>
    </div>
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Created At</th>
                <th>&nbsp;</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users.data" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td :title="user.created_at_for_humans">{{ user.created_at }}</td>
                <td>
                    <Link v-if="user.can.edit" :href="route('users.edit', { id: `${user.id}`})" class="text-decoration-none">Edit</Link>
                </td>
            </tr>
        </tbody>
    </table>

    <Pagination :links="users.links" />
</template>

<script>
import Pagination from '@/Shared/Pagination.vue';
import debounce from 'lodash/debounce';

export default {
    components: { Pagination },

    props: {
        users: Object,
        filters: Object,
        can: Object
    },

    data() {
        return {
            search: this.filters.search
        }
    },

    watch: {
        search(value) {
            this.searchUser(value);
        }
    },

    methods: {
        searchUser: debounce(function (name) {
            this.$inertia.get('/users', { search: name }, {
                preserveState: true,
                replace: true
            });
        }, 300)
    }
};
</script>
