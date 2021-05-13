let users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
    ];


// filter users score > 85 ;
const filterGt85 = (users) => {
    let filtered = users.filter(item => item.scores > 85);
    return filtered;
}
// console.log(filterGt85(users));

// function to add a non existing user

const adduser = (name, scores=0 , skills = [] , age=0) => {
    let newUser = {
        name,
        scores,
        skills,
        age
    }
    let namesList = users.map(user=> user.name)

    !namesList.includes(name) ?  users.push(newUser) : console.log(`user already exist`);

    return users.filter(user=> user.name === name);
    
};
// console.log(adduser("Brook"));

//function to add a skill to user
const addUserSkill = (name , skill) => {
    if(!name) return `Please provide a name`;
    if(!skill) return `Please provide a skill`;

    let targetIdx ;

    users.map((user, idx)=> {
        if(user.name=== name) targetIdx = idx
    });

    if(targetIdx<users.length){
        users[targetIdx].skills.push(skill);
        return users[targetIdx];
    }
    else return "User not found";
}
// console.log((addUserSkill("Rahul","AWS")));

// edit user

const editUser = (name , scores , skills , age)=>{
    if(!name) return `please provide a name of the user`;

    let targetIdx ;

    users.map((user, idx)=> {
        if(user.name=== name) targetIdx = idx
    });

    if(targetIdx<users.length){

        if(skills) users[targetIdx].skills= skills;
        if(scores) users[targetIdx].scores= scores;
        if(age) users[targetIdx].age = age
        return users[targetIdx];
    }
    else return "User not found";

}

console.log(editUser("Brook", 91, ["AWS","HTML","Css",15]));