<template>
<div class="login">
    <div class="login-form">
        <a-form-model :layout="form.layout" :model="form" v-bind="{ labelCol: { span: 4 }, wrapperCol: { span: 20 } }" @submit="submit">
            <a-form-model-item label="Field A">
                <a-input v-model="form.fieldA" placeholder="input placeholder" />
            </a-form-model-item>
            <a-form-model-item label="Field B">
                <a-input v-model="form.fieldB" placeholder="input placeholder" />
            </a-form-model-item>
            <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }"> 
                <a-button type="primary" @click="submit">
                    Submit
                </a-button>
            </a-form-model-item>
        </a-form-model>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                layout: 'horizontal',
                fieldA: '',
                fieldB: '',
            },
        }
    },
    methods:{
        submit(){
            this.$router.push('/home')
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
