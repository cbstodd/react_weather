function getTempCallback(location, callback) {
    callback("City not found");
    callback(undefined, 78);
}

getTempCallback("Baltimore", function (err, temp) {
    if (err) {
        console.log("error", err);
    } else {
        console.log("success", temp);
    }
});

function getTempPromise(location) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(98);
            reject("City not found");
        }, 2000);
    });
}

getTempPromise("Chevy Chase")
    .then(function (temp) {
        console.log("promise success", temp);
    }, function (err) {
        console.log("promise error", err);
    });
