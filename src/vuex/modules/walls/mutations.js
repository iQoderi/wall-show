/**
 * Created by qoder on 16-12-5.
 */
'use strict';
import * as types from './mutation-type'
import getLength from '../../../utils/getLength'
import limitLength from '../../../utils/limitLength'
import getFontSize from '../../../utils/getFontSize'

const mutations = {
  [types.ADD_WALL]({walls, historyWalls}, wall){
    wall.content = limitLength(wall.content);
    let length = getLength(wall.content);
    wall = getFontSize(length, wall)
    let flag = walls.every((myWall)=> {
      return myWall.id !== wall.id
    })
    if (flag) {
      walls.unshift(wall)
      if (walls.length >= 3) {
        Array.prototype.push.apply(historyWalls, walls.slice(3))
        walls.length = 3
      }
    } else {
      console.warn('wall existed')
    }
  },
  [types.DELETE_WALL]({walls}, index){
    walls.splice(index, 1)
  },
  [types.SHIFT_HISTORY_WALL]({historyWalls}){
    historyWalls.shift();
  }
}

export default mutations;
