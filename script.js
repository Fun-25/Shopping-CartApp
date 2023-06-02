// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

const loginPageBtn=document.querySelector("#login-btn");
const signUpPageBtn=document.querySelector("#signup-btn");
const homeLink=document.getElementById("home-link")
const signup=document.getElementById("signup-link");
const login=document.getElementById("login-link");
const cartLink=document.getElementById("cart-link")
const profileLink=document.getElementById("profile-link")

document.querySelector("#login-btn").addEventListener("click", ()=>{
    login.click();
})
//opening Sign up Page
document.querySelector("#signup-btn").addEventListener("click", ()=>{
    signup.click();
})

cartLink.addEventListener("click",()=>{
    alert("Please signup / login")
})

profileLink.addEventListener("click",()=>{
    alert("Please signup / login")
})
//Check if user can sign up
//  function checkUserSignedup(){
//     console.log("Signup button clicked")
//     window.location.href="../signup/index.html"
//     // if(localStorage.getItem('user')){
//     //     window.location="index.html"
//     //     alert("You already have an account,please login");
         
//     // } else{
//     //     window.location.href="./signup/index.html"
        
//     // }
//  }

//  //Check if user can log in
// function checkUserLoggedin(){
//     console.log("Login button clicked")
//     window.location.href="login/index.html"
//     // if(!localStorage.getItem('user')){
//     //     // we are in sign up page
//     //     // then we click profile link
       
//     //     alert("You don't have an account, please signup");
//     //     window.location="index.html"
//     //     return false
//     // } else{
//     //     window.location.href="login/index.html"
//     //      return true
//     // }
// }

 
 
// //login 
// loginPageBtn.addEventListener('click',checkUserLoggedin);

// //signup
// signUpPageBtn.addEventListener('click',checkUserSignedup);

// //home Page
// homeLink.addEventListener("click",()=>{
//     window.location.href="./homePage/index.html"
// })
// //login link
// loginLink.addEventListener("click", ()=>{

//     event.preventDefault();
//     const queryString="email="+encodeURIComponent(email.value)+"&password="+encodeURIComponent(password.value);
//     const loginURL="login/index.html?"+queryString
//     window.location.href=loginURL;

// })

// //signup link
// signupLink.addEventListener("click",checkUserSignedup)

// //cart link
// cartLink.addEventListener("click",()=>{
//     if(checkUserLoggedin) window.location.href="cart/index.html"
//     else window.location.href="./signup/index.html"
// })

// //profile link
// profileLink.addEventListener("click",()=>{
    
//     if(checkUserLoggedin) {
//         event.preventDefault();

//   const queryString = "first_name=" + encodeURIComponent(firstName.value) +
//                       "&last_name=" + encodeURIComponent(lastName.value) +
//                       "&password=" + encodeURIComponent(password.value);
  
//   const profileURL = "profile/index.html?" + queryString;

//   window.location.href = profileURL;
         
// }
//     else window.location.href="login/index.html"
// })
