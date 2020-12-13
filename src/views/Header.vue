<template>
<div>
    <a-menu v-model="current" mode="horizontal">
        <a-menu-item v-for="item in menus" :key="item.menuPath">{{item.menuName}}</a-menu-item>

    </a-menu>
</div>
</template>

<script>
export default {
    data() {
        return {
            current:['/adminManage'],
            menus: [{
                    menuName: '系统管理',
                    menuPath: '/adminManage',
                    children: [

                        {
                            menuName: '文档管理',
                            menuPath: '/documentManage',
                        },
                        {
                            menuName: '日志管理',
                            menuPath: '/logManage',
                        },
                        {
                            menuName: '产品管理',
                            menuPath: '/productManage',
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
                        },
                        {
                            menuName: '权限管理',
                            menuPath: '/accessManage',
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
                        },
                        {
                            menuName: '接入配置',
                            menuPath: '/accessConfig',
                        }
                    ]
                },
            ]
        }
    },
}
</script>
