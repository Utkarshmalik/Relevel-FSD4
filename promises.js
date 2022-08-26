

// // let promise= new Promise((resolve,reject)=>{
    
// //     setTimeout(()=>{
// //         resolve(10);
// //     },3000);
// // })

// // promise.then((result)=>{
     
// //     return new Promise((resolve,reject)=>{

// // //         setTimeout(()=>{
// // //             resolve(result * 3)
// // //         },3000)
// // //     })
// // // })
// // // .then((result)=>{
    
// // //     return new Promise((resolve,reject)=>{

// // //         setTimeout(()=>{
// // //             resolve(result * 5);
// // //         },3000)
// // //     })
// // // })
// // // .then((result)=>{
// // //     console.log(result);
// // // })




// // step1()
// // .then(result=>step2(result))
// // .then(result=>step3(result));




// //userId 
// //get the user from a DB based on userId 
// //What are the services of the selected user 
// //Calculate the service cosr from the users services




// function getUser(userId){

//     return new Promise((resolve,reject)=>{
        
//         console.log("calling DB");
        
//         setTimeout(()=>{
//             resolve({
//                 userId:userId,
//                 userName:"admin"
//             })
//         },1000)
//     })
// }

// function getServices(user){

//     return new Promise((resolve,reject)=>{
//         console.log("calling services API");

//         setTimeout(()=>{

//             resolve(['Email','VPN','CDN']);
//         },2000)
//     })
// }

// function getServiceCost(services){

//     return new Promise((resolve,reject)=>{
//         console.log("calling pricing API");

//         setTimeout(()=>{
//             resolve(services.length * 100);
//         },2000)
//     })
// }


// getUser(1234)
// .then(getServices)
// .then(getServiceCost)
// .then(console.log)




// const promise1= new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//        resolve(10); 
//     },2000)
// })

// const promise2= new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//     resolve(20)
//     },3000)
// })
// const promise3= new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//        resolve(40); 
//     },1000)
// })

// Promise.all([promise1,promise2,promise3])
// .then(data=>{
//    const ans= data[0] + data[1] + data[2];
//    console.log(ans);
// })
// .catch(err=>{
//     console.log(err);
// })










//Async Await

// await  async



// function getUser(userId){

//     return new Promise((resolve,reject)=>{
        
//         console.log("calling DB");
        
//         setTimeout(()=>{
//             resolve({
//                 userId:userId,
//                 userName:"admin"
//             })
//         },1000)
//     })
// }

// function getServices(user){

//     return new Promise((resolve,reject)=>{
//         console.log("calling services API");

//         setTimeout(()=>{

//             resolve(['Email','VPN','CDN']);
//         },2000)
//     })
// }

// function getServiceCost(services){

//     return new Promise((resolve,reject)=>{
//         console.log("calling pricing API");

//         setTimeout(()=>{
//             resolve(services.length * 100);
//         },2000)
//     })
// }




// async function calculateCost(userId){

//     let user = await getUser(userId);

//     let services= await getServices(user);

//     let cost=  await getServiceCost(services);

//     return cost;
// }

// calculateCost(1234)
// .then(console.log)



// const promise1= new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//        resolve(10); 
//     },2000)
// })

// const promise2= new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//     resolve(20)
//     },3000)
// })
// const promise3= new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//        reject(40); 
//     },1000)
// })

//  async function calculateSum(){
//    return await Promise.all([promise1,promise2,promise3]);  
//  }


//  calculateSum()
//  .then(data=>{
//      console.log(data);
//  })



//Error Handling

function getUser(userId){

    return new Promise((resolve,reject)=>{
        
        console.log("calling DB");
        
        setTimeout(()=>{
            resolve({
                userId:userId,
                userName:"admin"
            })
        },1000)
    })
}

function getServices(user){

    return new Promise((resolve,reject)=>{
        console.log("calling services API");

        setTimeout(()=>{

            resolve(['Email','VPN','CDN']);
        },2000)
    })
}

function getServiceCost(services){

    return new Promise((resolve,reject)=>{
        console.log("calling pricing API");

        setTimeout(()=>{
            reject("Pricing service is down");
        },2000)
    })
}




async function calculateCost(userId){

    try{

    let user = await getUser(userId);

    let services= await getServices(user);

    let cost=  await getServiceCost(services);

    return cost;

    } catch(err){
        return "Something went wrong"
    }
    
}

calculateCost(1234)
.then(console.log)




const promise1= new Promise((resolve,reject)=>{

    setTimeout(()=>{
       resolve(10); 
    },2000)
})

const promise2= new Promise((resolve,reject)=>{

    setTimeout(()=>{
    resolve(20)
    },3000)
})
const promise3= new Promise((resolve,reject)=>{

    setTimeout(()=>{
       reject("Something went wrong"); 
    },1000)
})

 async function calculateSum(){
     try{
   return await Promise.all([promise1,promise2,promise3]); 
     }
     catch(err){
         return err;
     } 
 }


 calculateSum()
 .then(data=>{
     console.log(data);
 })


