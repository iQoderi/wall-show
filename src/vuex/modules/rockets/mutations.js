/**
 * Created by qoder on 16-12-4.
 */
'use strict';
import * as types from './mutation-type'

let timer=null;
const mutations = {
  [types.ADD_ROCKETS]({rockets}, rocket){
    rockets.push(rocket);
  },
  [types.ADD_ROCKET_DISTANCE]({rockets}){
    let maxMoveWidth = window.innerWidth + 1000;
    for(let i=rockets.length-1;i>=0;i--){
      if(rockets[i].distance>maxMoveWidth){
        rockets.splice(i,1)
      }
    }

    rockets.map((rocket)=> {
      if (rocket.isHover === 0) {
        rocket.distance += rocket.speed||1;
      }
    })
  },
  [types.HOVER_ROCKET]({rockets}, rocket){
    rockets.map((_rocket)=> {
      if (rocket.id === _rocket.id) {
        _rocket.isHover = 5
      }
    })
  },
  [types.LEAVE_ROCKET]({rockets}, rocket){
    rockets.map((_rocket)=> {
      if (rocket.id === _rocket.id) {
        _rocket.isHover = 0
      }
    })
  }
}

export default mutations
