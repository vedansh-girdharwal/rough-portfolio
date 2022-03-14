const user_url = "http://localhost:4000/users";

let loginbtn = document.getElementById("loginbtn");
function Redirect(){
    window.location = "http://127.0.0.1:5500/login.html"
}
loginbtn.addEventListener("click",Redirect);

let first_name =  document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let email =document.getElementById("email");
let password = document.getElementById("password");
let signupbtn = document.getElementById("signupbtn");



const create_user = async()=>{
    try {
        const result = await fetch(`${user_url}/signup`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                first_name:first_name.value,
                last_name:last_name.value,
                email:email.value,
                password:password.value,
            })
        });
        Redirect();
        
    } catch (error) {
        console.log(error);
    }
}
signupbtn.addEventListener("click",create_user);