<template>
<a-layout class="layout-app">
    <a-layout-header>
        <Header />
    </a-layout-header>
    <a-layout class="layout-main">
        <a-layout-sider>Sider</a-layout-sider>
        <a-layout-content>Content</a-layout-content>
    </a-layout>
</a-layout>
</template>

<script>
import Header from '@views/Header.vue'
export default {
    components: {
        Header
    }
}
</script>
