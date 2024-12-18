export const convertRawtoString = (labelValue,isSub=false)=>{

    // console.log(labelValue);
    const num = Math.abs(Number(labelValue));

    if(num >=1.0e9){
        return(num/1.0e9).toFixed(1) +"B"; //1500000000 = 1.5 B
    }
    if(num >=1.0e6){
        return(num/1.0e6).toFixed(1) +"M"; //1500000 = 1.5M
        
    }
    if(num >=1.0e3){
        return(num/1.0e3).toFixed(isSub ? 2 : 0) +"K"; //1500 = 1.50 K

    }

    return num.toString();
}