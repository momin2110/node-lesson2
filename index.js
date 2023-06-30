const fs = require('fs');

// console.log(fs);
// fs.writeFile('demo.txt', 'Bangladesh is a small country with a large population', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File is created successfully");
//     }
// });

// fs.appendFile('demo.txt', '. It has many rivers across the country.', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File is modified successfully");
//     }
// });

// fs.readFile('demo.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });
// fs.rename('demo.txt', 'test.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File is renamed successfully");
//     }
// });
// fs.unlink('test.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File is deleted successfully");
//     }
// });
fs.exists('demo.txt', (result)=>{
    if(result){
        console.log('Found');
    }else{
        console.log("not found");
    }
})



