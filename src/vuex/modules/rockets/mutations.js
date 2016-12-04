/**
 * Created by qoder on 16-12-4.
 */
'use strict';
import * as types from './mutation-type'

const mutations={
  [types.ADD_ROCKETS]({rockets},{content}){
    rockets.push(content);
  }
}

export default mutations
