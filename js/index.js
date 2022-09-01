 
 const loadUser =( ) => {

fetch('https://randomuser.me/api/?results=10')

.then (res => res.json())
.then( data =>displayUsers(data.results))

 }


 const  displayUsers =users =>{

const userContainer =document.getElementById('user-container');

for(const user of users) {

    console.log(user);
    const userDiv=document.createElement('div');
      userDiv.classList.add('user');
    userDiv.innerHTML =`
    
    <h3> Name :${user.name.first} </h3>

    <p> email :${user.email}</p> 

    <p>location:${user.location.city}</p>

    <p>Gender:${user.gender}</p>
     
    <p>Nationality: ${user.nat}</p>

    <p>Date of birth : ${user.dob.date}</p>
    
    
    `
    ;

    userContainer.appendChild(userDiv)
    //baccha bananor jonno 
}

 }
 loadUser();