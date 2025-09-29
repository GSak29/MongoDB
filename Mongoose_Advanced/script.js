const mongoose = require('mongoose');
const User = require('./models/userModel');

mongoose.connect('mongodb://127.0.0.1:27017/advance').then(()=>{
    console.log('Connected!')
}).catch(()=>{
    console.log('Not Connected!')
})

// const user = new User({
//     name:'Guru',
//     age: 20
// });

// user.save().then(()=>{
//     console.log('user saved')
// })

// async function run(){
//     const newuser = await user.save();
//     console.log((newuser))
// }

async function run(){
    try{
    // const newuser = await User.create({
    //     name: 'Guru',
    //     age: 20,
    //     email:'nama@22',
    //     hobbies: ['music','movie'],
    //     address:{
    //         street:"erode"
    //     }
        
    // });

    // newuser.name = 'Rahul';
    // await newuser.save();

    // console.log((newuser))
    
    const user = await User.findById('68b48f50ac7b466121aee4a2');
    console.log(user);
    
    const user2 = await User.find({name: "Guru"});
    console.log(user2);
}catch(e){
    console.log(e.message);
    //console.log(e.errors);
}
}

run();