import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
function Register() {
 const { register, handleSubmit , formState: { errors },watch} = useForm();
  const password = watch("password");
    const navigate = useNavigate();
const onSubmit = (data)=>{

   localStorage.setItem("user", JSON.stringify(data));
  alert("Registration successful!");
navigate("/login")
console.log(data);

}

  return (
  <>
   <section className=" register-hight">
  
      <div className="container my-5">
          <h2 className="fs-1 pb-3 ">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
     

  <div className="mb-3">
            <label htmlFor="userName" className="form-label"> User Name</label>
            <input
              type="text"
              className={`form-control ${errors.userName ? "is-invalid" : ""}`}
              id="userName"
              {...register("userName", {
                required: " User Name is required",
                pattern:{
                  value:/^\S+$/,
                  message:"Enter User Name with no spaces"
                }
         
              })}
            />
            {errors.userName && <div className="invalid-feedback">{errors.userName.message}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: "Invalid email format"
                }
              })}
            />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>

   
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              id="password"
              {...register("password", {
                required: "Password is required",
                pattern:{
                  value:/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
                  message: "Password Should have at least (1 UpperCase, 1 Number, 1 Special character)"
                }
              })}
            />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>

       <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <input
          type="password"
          className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
          id="confirmPassword"
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <div className="invalid-feedback">{errors.confirmPassword.message}</div>
        )}
      </div>

         <div className="mb-3">
        <label htmlFor="Address" className="form-label">Address</label>
        <input
          type="text"
          className={`form-control`}
          id="Address"
          {...register("Address")}
        />
 
      </div>

    
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section></>
  )
}

export default Register