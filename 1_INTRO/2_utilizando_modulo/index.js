const fs = require('fs'); // import file system

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }

  console.log(data);
});
