

function callBackBasedFunction(arg, callback) {
  setTimeout(() => {
    if (arg) {
      callback("Success!");
    } else {
      callback("Error occurred");
    }
  }, 1000);
}

function promiseBasedFunction(arg){
  return new Promise((resolve, reject) =>{
    if (arg) {
      resolve("Success!");
    } else {
      reject("Error occurred");
    }
  }).then(
    (resolvevalue) => console.log(`good ${resolvevalue}`)
    ,
    (rejectvalue) => console.log(`bad ${rejectvalue}`)
  )
}

promiseBasedFunction(false);
