import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menus:[]
  },
  mutations: {
    getMenus(state,payload){
        state.menus = payload;
        console.log(state)
    }
  },
  actions: {
    getMenus({commit},payload){
      commit('getMenus',payload);
    }
  },
  modules: {}
});
