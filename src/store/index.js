import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins:[]
  },
  getters: {
    getCoins: (state) => state.coins,
  },
  mutations: {
    SET_COINS(state,data){
      state.coins = data
    }
  },
  actions: {
    loadCoins({commit}){
      axios.get("https://api2.binance.com/api/v3/ticker/24hr").then((res)=>{
        commit("SET_COINS",res.data)
      })
      .catch(err=>console.log(err))

    }
  },
  modules: {
  }
})
