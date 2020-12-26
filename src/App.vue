<template>
<div id="app" class="app">
    <a-layout class="layout-app" v-show="$route.path !== '/login'">
        <a-layout-header>
            <Header />
        </a-layout-header>
        <a-layout class="layout-main">
            <a-layout-sider>
                <SiderMenu />
            </a-layout-sider>
            <a-layout-content>
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout>
    <router-view v-show="$route.path === '/login'"></router-view>
</div>
</template>

<script>
import SiderMenu from '@views/SiderMenu.vue'
import Header from '@views/Header.vue'
export default {
    components: {
        Header,
        SiderMenu
    },
    created() {
        const routes = [];
        const arr = [{
                menuName: '系统管理',
                menuPath: '/adminManage',
                children: [

                    {
                        menuName: '文档管理',
                        menuPath: '/documentManage',
                        component: '@components/admin/DucumentManage.vue'
                    },
                    {
                        menuName: '日志管理',
                        menuPath: '/logManage',
                        component: '@components/admin/LogManage.vue'
                    },
                    {
                        menuName: '产品管理',
                        menuPath: '/productManage',
                        component: '@components/admin/ProductManage.vue'
                    }
                ]
            },
            {
                menuName: '用户管理',
                menuPath: '/userManage',
                children: [

                    {
                        menuName: '角色管理',
                        menuPath: '/roleManage',
                        component: '@components/user/RoleManage.vue'
                    },
                    {
                        menuName: '权限管理',
                        menuPath: '/accessManage',
                        component: '@components/user/AccessManage.vue'
                    }
                ]
            },
            {
                menuName: '配置管理',
                menuPath: '/configManage',
                children: [

                    {
                        menuName: '服务器配置',
                        menuPath: '/serverConfig',
                        component: '@components/config/ServerConfig.vue'
                    },
                    {
                        menuName: '接入配置',
                        menuPath: '/accessConfig',
                        component: '@components/config/AccessConfig.vue'
                    }
                ]
            }
        ];
        arr.forEach(v => {
            if (v.children.length > 0) {
                v.children.forEach(k => {
                    routes.push({
                        path: k.menuPath,
                        name: k.menuName,
                        components: () => import(`${k.component}`)
                    })
                })
            }
        });
        this.$store.dispatch('getMenus', arr);
        this.$router.options.routes.push(...routes);
        this.$router.addRoutes(routes);
    },
}
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
}
</style>
