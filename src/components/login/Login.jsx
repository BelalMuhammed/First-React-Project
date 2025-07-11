import { useForm } from 'react-hook-form'; 
import './Login.css'
function Login() {
      const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
     const savedUser = JSON.parse(localStorage.getItem("user"));


 if (
      savedUser &&
      data.email === savedUser.email &&
      data.password === savedUser.password
    ) {
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }

    console.log("Login Data:", data);
  
  };
  return (
    <>
 <section className=" login-hight">
      <div className="container my-5">
           <h2 className="fs-1 pb-3 ">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
     
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
                required: "Password is required"
              })}
            />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>



    
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
    </>
  )
}

export default Login