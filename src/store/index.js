import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import database from '@/database'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [VuexORM.install(database)]
})
