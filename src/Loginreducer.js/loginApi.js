export async function loginApi({username,password}){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                if(username==='josi'&& password==='josi'){
                    console.log('done')
                    
            resolve();
            }else{
                console.log('error')
                reject();}
   
        },1000
             );

});}