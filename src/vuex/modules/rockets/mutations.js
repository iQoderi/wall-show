/**
 * Created by qoder on 16-12-4.
 */
'use strict';
import * as types from './mutation-type'

const mutations = {
  [types.ADD_ROCKETS]({rockets}, rocket){
    rockets.push(rocket);
  },
  [types.ADD_ROCKET_DISTANCE]({rockets}){
    let maxMoveWidth = window.innerWidth + 1000;
    for (let i = rockets.length - 1; i >= 0; i--) {
      rockets[i].index = i;
      if (rockets[i].distance > maxMoveWidth) {
        rockets.splice(i, 1)
      } else {
        if (rockets[i].isHover === 0) {
          rockets[i].distance += rockets[i].speed || 1;
        }
      }
    }
  },
  [types.HOVER_ROCKET]({rockets}, rocket){
    rockets.map((_rocket)=> {
      if (rocket.id === _rocket.id) {
        _rocket.isHover = 1
      }
    })
  },
  [types.LEAVE_ROCKET]({rockets}, rocket){
    rockets.map((_rocket)=> {
      if (rocket.id === _rocket.id) {
        _rocket.isHover = 0
      }
    })
  },
  [types.CLOSE_ROCKET]({rockets}, index){
    rockets.splice(index, 1)
  }
}

export default mutations
