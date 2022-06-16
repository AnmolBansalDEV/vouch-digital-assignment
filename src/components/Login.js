import React,{useState} from "react";
import illustration from "../images/illustration.png"

export default function Login(){

  let [email,setEmail]= useState("");
    let [password,setPassword]= useState("");
    
   async function login(){
      let item= {"email":email, "password":password};
      let result = await fetch("https://reqres.in/api/login" ,{
              method: "POST",
              headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
        body: JSON.stringify(item)
      });
       result = await result.json();
       alert(result.error || result.token);
    }

    return(
        <section className="vh-100">
    <div className="row d-flex align-items-center justify-items-center ">
     
      <div className="col-md-5 col-lg-7 col-xl-4 m-5 offset-xl-1 ms-5 align-self-center">
        <form className="login-form ">
          <div className="form-outline mb-4 text-center">
            <h2 className="login-title">Welcome Back</h2>
            <p className="login-subtitle text-muted">sub-title text goes here</p>
            <input placeholder="Email Address*" name="email" type="email" id="form1Example13" onChange={(e)=>setEmail(e.target.value)} className="text-muted form-control input-sm form-control-lg" />
            
          </div> 
          <div className="form-outline mb-4">
            <input placeholder="Password*" name="password" type="password" id="form1Example23" onChange={(e)=>setPassword(e.target.value)} className="text-muted form-control input-sm form-control-lg" />
            
          </div>
          <div className="text-center my-4">
          <button type="button" onClick={login} className="btn text-white btn-md py-2 btn-block w-100 login-btn bluish-color">Login</button>
          </div>
          <div className="d-flex justify-content-around align-items-center mb-4">
            <div className="form-check">
              <input className="form-check-input checkbox-login" type="checkbox" value="" id="form1Example3" checked />
              <label className="form-check-label" for="form1Example3"> Remember Password </label>
            </div>
            <a href="/" className="forgot-pass">Forgot password?</a>
          </div>

        </form>
      </div>
      <div className="disappear align-self-end col-xl-6 ms-3 me-0">
        <img src={illustration}
          className="img-fluid" alt="Planning illustration" />
      </div>
    </div>
 </section>
        )
}