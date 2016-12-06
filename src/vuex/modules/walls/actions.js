/**
 * Created by qoder on 16-12-5.
 */
'use strict';
import * as types  from './mutation-type'

export const redoAddWall = ({commit, state}, wall)=> {
  const {walls, historyWalls}=state;
  let flag = 0
  for (let i = walls.length - 1; i >= 0; i--) {
    if (walls[i].id === wall.id) {
      flag = 1
      commit(types.DELETE_WALL,i)
      break
    }
  }

  if (historyWalls.length > 0 && flag === 1) {
    let firstHisWall = historyWalls[0]
    commit(types.SHIFT_HISTORY_WALL)
    commit(types.ADD_WALL, firstHisWall)
  }
}
