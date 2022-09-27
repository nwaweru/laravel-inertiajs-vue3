<template>
    <Link href="/" :class="{'active' : active}">
        <slot></slot>
    </Link>
</template>

<script>
export default {
    props: {
        active: Boolean
    }
};
</script>
