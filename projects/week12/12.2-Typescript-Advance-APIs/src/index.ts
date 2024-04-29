// interface user {
//     name:string,
//     email:string,
//     password:string,
//     age:number
// }


// function displayAge(userDetails:user){
//     console.log(userDetails.age);
// }

// displayAge({
//     name:"rashid",
//     email:"rashid@gmail.com",
//     password:"Rashid!23",
//     age:24
// });

//------------------------------PICK---------------------------
// interface User {
//     name:string,
//     email:string,
//     password:string,
//     age:number
// }

// type userProfile=Pick<User,'name'|'email'>;

// function displayEmail(user:userProfile){
//     const email=user.email;
//     return email;
// }

// const emailGot=displayEmail({name:'Rashid',email:'Rashid@gmail.com'});
// console.log("Email Got ",emailGot);

//----------------------------------Partial-----------------------------
// interface User {
//     name:string,
//     email:string,
//     password:string,
//     age:number
// }

// // lets say there DB call where a user wants to only Change 
// // the  name or password or it could be any of them

// // First Task would be To pick What properties User Are allowed to Update

// type updateProfile=Pick<User,'name'|'password'>

// // Then you Would make the key's to partial so that User Can update Any of them

// type updateUser=Partial<updateProfile>

// function updateUserDeatails(updateuser:updateUser){
//     // Some DB Call
// }

// updateUserDeatails({
//     name:'rashid',
//     // password:'12'  Now we can send the value partialy dont have to send all the value to update
// })


//------------------------------readOnly----------------------------------------------

// const array=[1,2,3,4];
// // array[0]=3;
// // or
// const obj={
//     name:"rashid",
//     age:21
// }
// obj.name='harkirat';

// Issue- in above both the cases we can Notice that type of Array's and Objects are
// the const type. which means we cannot change the value of that right!.
// But in this Typescript or even javascript does not seems to complain why !..
// Typescript basically assuming that the value which are updated in this case 
// is done inside of the Array and obj.if would have done something like this 

// obj={
//     name:"RAshid",
//     age:24
// }

// or 
// array=[22,32,165];

// So, Now typescipt is popping the error. Just because it assumes that 
// the object and the array itself has changed.

// Hence, if we want to inforce that ki inside value of any array or object as immutable
// Then we use readonly to make unchangble if it is the type of const.

// interface User{
//     name:string;
//      age:number;
//      password:string
// }

// const userObj:Readonly<User>={
//     name:"rashid",
//     age:23,
//     password:"@123"
// }
// Now if we try to update the vlaue inside of the object then it is giving the error
// userObj.name='ziyaRashid';
// The Error is Saying -> Cannot assign to 'name' because it is a read-only property.


// ------------------------------Record-----------------------------------------------

// Record
// Record let’s you give a cleaner type to objects
// You can type objects like follows - 

// if a object like this is required then how do you set the types of given object
// *************************NORMAL-WAY-------------------------------
// interface user{
//     name:string,
//     email:string,
//     id:string
// }
// type Users={
//     [key:string]:user
// }
// const user:Users={
//     '@123id1':{
//         name:"Rashid",
//         email:"rashid@gmail.com",
//         id:'@123id1'
//     },
//     '@123id2':{
//         name:'ziya',
//         email:'ziya@gmail.com',
//         id:'@123id2'
//     }
// }
// console.log(user['@123id1'].email);

//---------------Using RECORD------------------------

// Now. the above code is not like more readable for developer 
// Here's How we can user Records to make it more readable and developer friendly
// interface user{
//     name:string,
//     email:string,
//     id:string
// }

// type Users=Record<string,user>

// const user:Users={
//     '@123id1':{
//         name:"Rashid",
//         email:"rashid@gmail.com",
//         id:'@123id1'
//     },
//     '@123id2':{
//         name:'ziya',
//         email:'ziya@gmail.com',
//         id:'@123id2'
//     }
// }

// console.log(user['@123id2'].id);

// note -> it is only the part of Typescript not the part of Javascript


// -----------------------------Map--------------------------------------------

// It is Part of javascript and Typescript as well 
// As a developer it gives more readable code if it comes to manage with object 
// as it gives method like set and get and delete to perform updation deletion and insertion
// maps gives you an even fancier way to deal with objects. Very similar to Maps in C++

// interface user{
//     name:string;
//     age:number;
//     email:string
// }

// const userMap=new Map<string,user>
// // insert with .set and access data with .get
// userMap.set('@123id1',{name:'Eman',age:21,email:'eman@gmail.com'});
// userMap.set('@123id2',{name:'Rashid',age:24,email:'Rashid@gmail.com'});

// userMap.delete('@123id1');

// console.log(userMap);


//----------------Exclude-----------------------------------------------------

// By the name itself we can understand that by using this we can exclude some properties

// type eventType='scroll'|'click'|'mousemove';

// type evetExluded=Exclude<eventType,'scroll'>

// const ExludeFunction=(input:evetExluded)=>{
//     console.log(`Event is ${input}`);
// }

// ExludeFunction('click');