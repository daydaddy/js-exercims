//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

export const decodedValue = (colors) => {
  let val = 0
  
  for (let cnt = 0; cnt < 2; cnt++) {
    
    val += COLORS.findIndex(element=>element === colors[cnt]) * (cnt==0 ?10: 1)
  }
  return val
};
