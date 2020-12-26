<template>
<div>
    <a-menu mode="vertical">
        <a-menu-item v-for="item in siderMenu" :key="item.menuPath">{{item.menuName}}</a-menu-item>
    </a-menu>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState({
            siderMenu: state => state.siderMenu
        })
    },
    created() {
  
    }
}
</script>
