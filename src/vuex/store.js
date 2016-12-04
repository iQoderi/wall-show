/**
 * Created by qoder on 16-12-4.
 */
'use strict';
import Vue from 'vue'
import Vuex from 'vuex'
import rockets from './modules/rockets'

Vue.use(Vuex)
const debug=process.env.NODE_ENV!=="production";

export default new Vuex.Store({
  modules:{
    rockets
  },
  strict:debug
})

