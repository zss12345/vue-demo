import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menus:[],
    siderMenu:[]
  },
  mutations: {
    getMenus(state,payload){
        state.menus = payload;
    },
    saveSiderMenu(state,payload){
      state.siderMenu = payload;
    }
  },
  actions: {
    getMenus({commit},payload){
      commit('getMenus',payload);
    },
    saveSiderMenu({commit},payload){
      commit('saveSiderMenu',payload);
    }
  },
  modules: {}
});
