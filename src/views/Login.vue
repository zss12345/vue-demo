<template>
<div class="login">
    <div class="login-form">
        <a-form-model ref="form" :model="form" :rules="rules" v-bind="layout">
            <a-form-model-item has-feedback label="用户名" prop="username">
                <a-input v-model="form.username" placeholder="input placeholder" />
            </a-form-model-item>
            <a-form-model-item has-feedback label="密码" prop="password">
                <a-input v-model="form.password" placeholder="input placeholder" />
            </a-form-model-item>
            <a-form-model-item>
                <a-button type="primary" @click="submit">登录</a-button>
            </a-form-model-item>
        </a-form-model>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            layout: {
                labelCol: {
                    span: 4
                },
                wrapperCol: {
                    span: 14
                },
            },
            form: {
                layout: 'horizontal',
                username: '',
                password: '',
            },
            rules: {
                username: [{
                    required: true,
                    trigger: 'blur',
                    message: '请输入用户名'
                }],
                password: [{
                    required: true,
                    trigger: 'blur',
                    message: '请输入用户名'
                }]
            }
        }
    },
    methods: {
        submit() {
            this.$refs['form'].validate((valid) => {
                if (valid) {
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
                                    menuName: k.menuName,
                                    components: () => import(`${k.component}`)
                                })
                            })
                        }
                    });
                    this.$store.dispatch('getMenus', arr);
                    this.$store.dispatch('saveSiderMenu', arr[0].children)
                    this.$router.options.routes.push(...routes);
                    this.$router.addRoutes(routes);
                    this.$router.push({
                        path: arr[0].children[0].menuPath
                    });

                }
            })
        }
    }
}
</script>

<style lang="less">
.login {
    height: 100%;
    background: #d6d7df;
    position: relative;

    .login-form {
        padding: 30px 20px;
        width: 440px;
        height: 330px;
        border-radius: 3px;
        position: absolute;
        background: cornflowerblue;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
}
</style>
