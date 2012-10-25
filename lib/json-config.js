var fs = require('fs');

function save(uri, write_string, cb) {
    write_string = JSON.stringify(write_string, null, 2);

    fs.writeFile(uri, write_string, function(err) {
        if(err) {
            console.log(err);
            process.exit(1);
        } else {
            console.log("The file was saved!");
            cb();
        }
    });
}

function openSync(uri) {
    try {
      var data = JSON.parse(fs.readFileSync(uri, 'utf8'));
    }
    catch (err) {
      console.error("There was an error opening the file:");
      console.log(err);
      data = err;
    }
    return data;
}


module.exports.save = save;
module.exports.open = openSync;