/**
 * Created by qoder on 16-12-5.
 */
'use strict';
import mutations from './mutations'
import * as getters from './getters'

const state={
  walls:[],
  historyWalls:[]
}

export default {
  state,
  getters,
  mutations
}
