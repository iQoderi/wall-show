/**
 * Created by qoder on 16-12-5.
 */
'use strict';
import * as types from './mutation-type'

const mutations={
  [types.ADD_WALL]({walls,historyWalls},wall){
    walls.unshift(wall)
    if(walls.length>=3){
      Array.prototype.push.apply(historyWalls,walls.slice(3));
      walls.length=3;
    }
  }
}

export default mutations;
