function addPromise(num1, num2) {
    return new Promise(function (resolve, reject) {
        if (typeof num1 === "number" && typeof num2 === "number") {
            resolve(num1 + num2);
        } else {
            reject("num1 & num2 need to be numbers");
        }
    });
}

addPromise(11, 44)
    .then(function (sum) {
        console.log("Success", sum);
    }, function (err) {
        console.log("Error", err);
    });

addPromise("some_name", 9).then(function (sum) {
    console.log("This should not show up");
}, function (err) {
    console.log("This should appear");
});
