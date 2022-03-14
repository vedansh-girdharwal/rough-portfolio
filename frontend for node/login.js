const login_url = "http://localhost:4000/users";

const signupbtn = document.getElementById("signupbtn");
function Redirect(){
    window.location= "http://127.0.0.1:5500/signup.html";
}
signupbtn.addEventListener("click",Redirect);

let email = document.getElementById("email");
let password = document.getElementById("password");

const login_user = async()=>{
    try {
        const result = await fetch(`${login_url}/login`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                // 'authorization':'Bearer token'   in product APIs
            },
            body:JSON.stringify({
                email:email.value,
                password:password.value
            })
        });
        const logged_in_user = await result.json();
        console.log(logged_in_user.token);
    } catch (error) {
        console.log(error);
    }
}

const loginbtn = document.getElementById("loginbtn");
loginbtn.addEventListener("click",login_user);