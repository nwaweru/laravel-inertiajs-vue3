<template>
    <Head title="Edit User" />
    <div class="row justify-content-center">
        <div class="col-12 col-md-6">
            <h1 class="text-center">Edit User</h1>
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input id="name" name="name" type="name" class="form-control" v-model="form.name">
                    <span v-if="form.errors.name" v-text="form.errors.name" class="text-danger"></span>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input id="email" name="email" type="email" class="form-control" v-model="form.email">
                    <span v-if="form.errors.email" v-text="form.errors.email" class="text-danger"></span>
                </div>
                <button type="submit" class="btn btn-primary w-100" :disabled="form.processing">Save Changes</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: Object
    },

    data() {
        return {
            form: this.$inertia.form({
                name: this.user.name,
                email: this.user.email
            })
        };
    },

    methods: {
        submit() {
            this.form.patch(route('users.update', { id: this.user.id }));
        }
    }
}
</script>
