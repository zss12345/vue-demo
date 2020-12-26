<template>
<div>
    <a-menu v-model="current" mode="horizontal">
        <a-menu-item v-for="item in menus" :key="item.menuPath" @click="getChildren(item.children)">{{item.menuName}}</a-menu-item>
    </a-menu>
</div>
</template>

<script>
export default {
    data() {
        return {
            current:['/adminManage'],
            menus: []
        }
    },
    created(){
        this.menus = this.$store.state.menus;
    },
    methods: {
        getChildren(children){
            this.$store.dispatch('saveSiderMenu',children)
            this.$router.push({
                path:children[0].menuPath
            })
        }
    },
}
</script>
