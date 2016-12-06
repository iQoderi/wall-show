/**
 * Created by qoder on 16-12-6.
 */
'use strict';
const getFontSize=(length,wall)=>{
  if(length>=32){wall.fontSize='53px'}
  if(length>=26&&length<32){wall.fontSize='70px'}
  if(length>=18&&length<26){wall.fontSize='80px'}
  if(length===16){wall.fontSize='100px'}
  if(length<16){wall.fontSize='120px'}
  return wall;
}

export default  getFontSize;
