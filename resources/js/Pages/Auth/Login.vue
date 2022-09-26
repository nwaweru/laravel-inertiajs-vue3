<template>
    <Head title="Login" />
    <div class="container">
        <div class="row justify-content-center vh-100 d-flex align-items-center">
            <div class="col-12 col-md-4">
                <h1 class="text-center">Login</h1>
                <form @submit.prevent="submit">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input id="email" name="email" type="email" class="form-control" v-model="form.email">
                        <span v-if="form.errors.email" v-text="form.errors.email" class="text-danger text-sm"></span>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input id="password" name="password" type="password" class="form-control" v-model="form.password">
                        <span v-if="form.errors.password" v-text="form.errors.password" class="text-danger"></span>
                    </div>
                    <button type="submit" class="btn btn-primary w-100" :disabled="form.processing">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: null,

    data() {
        return {
            form: this.$inertia.form({
                email: '',
                password: '',
            })
        };
    },

    methods: {
        submit() {
            this.form.post('/login');
        }
    }
};
</script>
