/**
 * Created by qoder on 16-12-5.
 */
'use strict';
const getLength=(str)=>{
  let realLength=0
  for(let i=0; i<str.length; i++){
    let charCode=str.charCodeAt(str[i])
    if(charCode>=0&&charCode<=128){
      realLength+=1;
    }else{
      realLength+=2;
    }
  }

  return realLength;
}

export default  getLength
