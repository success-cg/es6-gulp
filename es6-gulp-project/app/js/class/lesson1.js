/**
 * let const
 */

let a = 1
const PI=3.14

function test(sss){
  let a = 2
  const PI=3.1415
  console.log('a',a);
  console.log('PI',PI);
}

test()
/**
 * a 2
 * PI 3.14
 */
