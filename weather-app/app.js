//  var requests = require('requests');

// requests('https://jsonplaceholder.typicode.com/posts',{} )
// .on('data', function (chunk) {
//     console.log(JSON.parse(chunk)[1])
//   })
//   .on('end', function (err) {
//     if (err) return console.log('connection closed due to errors', err);
   
//     console.log('end');
//   });

  const add = (a, b, callback) => {
      callback(a+b);
  }

  add(1,3, (sum)=>{
      console.log(sum);
  })