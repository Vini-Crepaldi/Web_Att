
export default function inverterArray(array) {
    const invertido = []; 

    for (let i = array.length - 1; i >= 0; i--) {
        invertido.push(array[i]); 
    }

    return invertido;
}


