export const flatten = (entrada) => {
  let index = 0;
  let fin = entrada.length;
  while(index < fin) {
  	if(Array.isArray(entrada[index])) {
    	fin += (entrada[index].length - 1);
    	entrada.splice(index,1,...entrada[index]);
    }
    else if(entrada[index] === null || entrada[index] === undefined) {
    	fin --;
    	entrada.splice(index,1);
    }
    else
    	index ++;
  }
  return entrada;
};