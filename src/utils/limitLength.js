/**
 * Created by qoder on 16-12-5.
 */
'use strict';
import getLength from './getLength'
const limitLength = (str)=> {
  let length = getLength(str)
  if (length > 60) {
    let overLength = length - 60;
    for (let i = str.length; i >= 0; i--) {
      let charCode = str.charCodeAt(str[i])
      if (overLength <= 0) {
        break;
      }
      if (charCode >= 0 && charCode <= 128) {
        overLength -= 1;
      } else {
        overLength -= 2;
      }
      str = str.replace(str[i], "");
    }
  }

  return str;
}

export default limitLength;
