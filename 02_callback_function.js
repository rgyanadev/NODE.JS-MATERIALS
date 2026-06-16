function callback() {
    console.log("Callback function executed.");
}

const add = (x, y, callback) => {
    let result = x + y;
    console.log("Result: " + result);

    callback();
}

add(5, 10, callback);
// A callback function is a function that is passed as an argument to another function. It does not have to execute after the main task. The receiving function decides when to invoke the callback—before, during, or after its main logic. Therefore, the execution order does not determine whether a function is a callback; what matters is that it is passed to another function and invoked by that function.