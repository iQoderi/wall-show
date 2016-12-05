/**
 * Created by qoder on 16-12-4.
 */
'use strict';
import mutations from './mutations'
import * as getters from './gettters';

const state = {
  rockets: [{
    id: 1,
    content: "dawd",
    distance: 0,
    isHover: 0,
    speed: 1
  }]
}

export default {
  state,
  getters,
  mutations
}


