import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './mutation-types.js'


// 调用
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      userInfo:[]
  },
  modules: {
 
  },
//   getters,
  mutations: {
    // 登录后写入
    setUserInfo:(state,data)=>{
        state.userInfo[0]=data
    }
  },

})

