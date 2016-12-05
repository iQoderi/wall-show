/**
 * Created by qoder on 16-12-5.
 */
'use strict';
import * as types from './mutation-type'
import getLength from '../../../utils/getLength'
import limitLength from '../../../utils/limitLength'

const mutations = {
  [types.ADD_WALL]({walls, historyWalls}, wall){
    wall.content=limitLength(wall.content);
    let length=getLength(wall.content);
    if(length>=32){wall.fontSize='53px'}
    if(length>=26&&length<32){wall.fontSize='70px'}
    if(length>=18&&length<26){wall.fontSize='80px'}
    if(length===16){wall.fontSize='100px'}
    if(length<16){wall.fontSize='120px'}
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
  }
}

export default mutations;
