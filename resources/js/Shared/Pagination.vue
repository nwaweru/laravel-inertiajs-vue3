<template>
    <nav aria-label="Table pagination">
        <ul class="pagination">
            <li
                class="page-item"
                v-for="link in links"
                :key="link.label"
                :class="{ 'active': link.active, 'disabled': !link.url }"
            >
                <Link :href="link.url" class="page-link" v-html="link.label" />
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        links: Array
    }
};
</script>
