function getData(data) {
    let promise=new Promise((resolve,reject)=>{
   let delay=0
         setTimeout(()=>{
           if(data%2==0){
             resolve("even")  
             delay=4000          
           }
           else if(data%2!=0){
            resolve("odd")
            delay=2000
           }
           else{
            reject("error")
            delay=0;
           }
         },delay)
    })
    return promise;
}

export default getData



