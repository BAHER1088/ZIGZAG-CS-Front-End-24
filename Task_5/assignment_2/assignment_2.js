

function invokeAfterDelay(callback) {
    setTimeout(callback, 2000); 
  }
  
  
  invokeAfterDelay(function() {
    console.log("Callback invoked after 2 seconds");
  });
  