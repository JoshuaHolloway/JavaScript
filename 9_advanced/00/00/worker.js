// Receive message from main file
self.onmessage = function (e) {
    console.log('INSIDE worker.js: e.data = ', e.data);
    console.log('e:');
    console.log(e);

    // Send message to main file
    self.postMessage(workerResult);
}