
// - Create a Student Array & Object Data Structure ( name, roll, age, class, gender, location, Admission fees ) 30.  now create a console data table with

// - Total Admnission fees
// - Find All Female Students
// - Find class wise student result
// - Location wise student result
// - find student between 10 - 25 age




const Student = [
     {
       Name : 'Rabiul Jahid',
       Roll : 01,
       Age : 12,
       Class_name : 'Five',
       Email : 'rabiuljahid@gmail.com',
       Gender : 'Male',
       location : 'Kurigram', 
       Admission_fees : 190,
       skill : 'Mern developer'

     },

     {
      Name : 'Jahid Rubel',
      Roll : 02,
      Age : 21,
      Class_name : 'Foure',
      Email : 'rabiuljahid1@gmail.com',
      Gender : 'Male',
      location : 'Kurigram', 
      Admission_fees : 720,
      skill : 'Laravel developer'

    },

    {
      Name : 'Rokeya Khatun',
      Roll : 03,
      Age : 15,
      Class_name : 'Three',
      Email : 'rokeya@gmail.com',
      Gender : 'Female',
      location : 'Bhurungamari', 
      Admission_fees : 360,
      skill : 'Mern developer'

    },

    {
      Name : 'Tanisha Tahosin',
      Roll : 04,
      Age : 17,
      Class_name : 'Five',
      Email : 'tanisha@gmail.com',
      Gender : 'Female',
      location : 'Bhurungamari',
      Admission_fees : 650,
      skill : 'Laravel developer'

    },

    {
      Name : 'Tanvir HAssan',
      Roll : 05,
      Age : 19,
      Class_name : 'Five',
      Email : 'tanvir21@gmail.com',
      Gender : 'Male',
      location : 'Kurigram', 
      Admission_fees : 750,
      skill : 'JS developer'
    },
    {
      Name : 'Rupom Hoque',
      Roll : 06,
      Age : 25,
      Class_name : 'Four',
      Email : 'rupomhoque@gmail.com',
      Gender : 'Male',
      location : 'Bhurungamari',
      Admission_fees : 480,
      skill : 'Mern developer'

    },
    {
      Name :  'Jahid Hassan',
      Roll : 07,
      Age : 12,
      Class_name : 'Three',
      Email : 'jahidhassan@gmail.com',
      Gender : 'Male',
      location : 'Kurigram', 
      Admission_fees : 360,
      skill : 'Php developer'

    },
    {
      Name : 'Rabiul Jahid',
      Roll : 01,
      Age : 12,
      Class_name : 'Five',
      Email : 'rabiuljahid@gmail.com',
      Gender : 'Male',
      location : 'Bhurungamari',
      Admission_fees : 420,
      skill : 'Mern developer'

    },
    {
      Name : 'Anis Ahamed',
      Roll : 29,
      Age : 18,
      Class_name : 'Four',
      Email : 'anis@gmail.com',
      Gender : 'Male',
      location : 'Kurigram', 
      Admission_fees : 520,
      skill : 'Php developer'

    },
    {
      Name : 'Ruma Khatun',
      Roll : 52,
      Age : 27,
      Class_name : 'Three',
      Email : 'rumakhatun@gmail.com',
      Gender : 'Female',
      location : 'Bhurungamari', 
      Admission_fees : 980,
      skill : 'Ai developer'

    },
    {
      Name : 'Aysa Khatun',
      Roll : 77,
      Age : 22,
      Class_name : 'Five',
      Email : 'aysa@gmail.com',
      Gender : 'Female',
      location : 'Kurigram', 
      Admission_fees : 150,
      skill : 'Php developer'

    },
    {
      Name : 'Rafiqul Islam',
      Roll : 23,
      Age : 20,
      Class_name : 'Four',
      Email : 'rafiqulislam@gmail.com',
      Gender : 'Male',
      location : 'Kurigram', 
      Admission_fees : 750,
      skill : 'Js developer'

    },
    {
      Name : 'Mizanur Rahaman',
      Roll : 18,
      Age : 25,
      Class_name : 'Three',
      Email : 'mizanur01@gmail.com',
      Gender : 'Male',
      location : 'Bhurungamari', 
      Admission_fees : 850,
      skill : 'Mern developer'

    },
    {
      Name : 'Jibon Roy',
      Roll : 13,
      Age : 19,
      Class_name : 'Five',
      Email : 'jibonroy@gmail.com',
      Gender : 'Male',
      location : 'Bhurungamari',
      Admission_fees : 150,
      skill : 'Php developer'

    },
    {
      Name : 'Sufiya Khatun',
      Roll : 21,
      Age : 21,
      Class_name : 'Four',
      Email : 'sufiyakhatun01@gmail.com',
      Gender : 'Female',
      location : 'Kurigram', 
      Admission_fees : 800,
      skill : 'Laravel developer'

    },
    {
      Name : 'Tasnim Hassan',
      Roll : 29,
      Age : 24,
      Class_name : 'Five',
      Email : 'tasnimhassan@gmail.com',
      Gender : 'Male',
      location : 'Kurigram', 
      Admission_fees : 290,
      skill : 'Php developer'

    },
    {
      Name : 'Rotna Khatun',
      Roll : 21,
      Age : 16,
      Class_name : 'Three',
      Email : 'rotna01@gmail.com',
      Gender : 'Female',
      location : 'Bhurungamari',
      Admission_fees : 208,
      skill : 'Laravel developer'

    },
    {
      Name : 'Sopna Khatun',
      Roll : 90,
      Age : 18,
      Class_name : 'Four',
      Email : 'rotna02@gmail.com',
      Gender : 'Female',
      location : 'Bhurungamari', 
      Admission_fees : 300,
      skill : 'Mern developer'

    },
    {
      Name : 'Sourov Ganguli',
      Roll : 29,
      Age : 16,
      Class_name : 'Five',
      Email : 'sourov@gmail.com',
      Gender : 'Male',
      location : 'Kurigram', 
      Admission_fees : 400,
      skill : 'Js developer'

    },
    {
      Name : 'Ovijit Roy',
      Roll : 65,
      Age : 13,
      Class_name : 'Three',
      Email : 'ovijit01@gmail.com',
      Gender : 'Male',
      location : 'Bhurungamari',
      Admission_fees : 201,
      skill : 'Java developer'

    },
    {
      Name : 'Ahad Sorkar',
      Roll : 69,
      Age : 24,
      Class_name : 'Four',
      Email : 'ahadsorkar@gmail.com',
      Gender : 'Male',
      location : 'Kurigram', 
      Admission_fees : 210,
      skill : 'Laravel developer'

    }

  ];




/*=================111111111111111111111=========Total INcome=======================*/

let admission_fee = 0;
for( data of Student ){
  console.log(`  
   Name : ${data.Name}
   Admission Fees : ${data.Admission_fees}
  
  `);

  admission_fee += data.Admission_fees;
}
console.log(`
===========================================>
Total Admission Fees  : ${admission_fee} Taka
`);




// =========111111111111========Total Admission Fees

let total_student = 0;
let admission_fees = 0;
Student.map( ( data, index) => {
   console.log(`
   Id : ${index +1}
    Name : ${data.Name}
    Admission Fees : ${data.Admission_fees}
   
   `);
   total_student ++ +(index +1)
   admission_fees += +(data.Admission_fees)


});

console.log(`
=========================================================================>
Total Student ${ total_student} Jon & Admission Fees =    ${admission_fees }  Taka  
  

`);




// =======2222222222222222222===========Find All Female Students

let total_femaleStu = 0;
Student.map( (data, index) => {
  
  if (data.Gender == "Female"){
    console.log(`
     No : ${index +1}
     Name : ${data.Name}
     Gender : ${data.Gender}
     Email : ${data.Email}
    
    `);
    total_femaleStu ++ +(data.Gender)
  }


});

console.log(`
================================================>
Total Female Student =   ${ total_femaleStu}  Jon

`);


//=========3333333333333333333======== Find class wise Student result

let classWiseStudent = 0;
Student.map( (data, index) => {

  if ( data.Class_name == "Five" ){
   console.log(`
     Id : ${index +1}
     Name : ${data.Name}
     Class : ${data.Class_name}
   
   `);
   classWiseStudent ++ +(data.Class_name)
  

  }

});

console.log(`
================================================>
Total Student in Class Five = ${classWiseStudent} Jon


`);



// ==============44444444=========== Location wise student result
let locationWiseStudent = 0;
Student.map( ( data, index) => {

 if( data.location == "Kurigram"){
 console.log(`
   Id : ${index +1}
   Name : ${data.Name}
   Location : ${data.location}
  
 `);
  locationWiseStudent ++ +(data.location)

 }


});

console.log(`
================================================>
Total Student in Kurigram Area = ${locationWiseStudent} Jon


`);


//==========555555555555555555555========= find Devs between 10 - 25 age

let conditon_age = 0;

Student.sort().map( ( data, index) => {
  
   if(data.Age >= 10 && data.Age <= 25){

    console.log(`
     No : ${index +1}
     Name : ${data.Name}
     Age : ${data.Age} years
    `);
    conditon_age ++ +(data.Age)
   }
});

console.log(`
========================================>
Total condition age Students =  ${conditon_age} Jon

`);


