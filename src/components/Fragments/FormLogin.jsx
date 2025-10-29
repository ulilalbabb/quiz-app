import { useState } from "react";
import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Button";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (storedUser) {
        if (storedUser.email === email && storedUser.password === password) {
            localStorage.setItem("isLoggedIn", "true");
            toast.success("login successful", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate("/");
        } else {
            return toast.error('Invalid email or password', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    } else {
        return toast.error('Please Register first', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }
  };

  return (
    <form onSubmit={handleLogin}>
        <ToastContainer></ToastContainer>
        <InputForm 
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            label="Email"
        />
        <InputForm 
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            label="Password"
        />
        <Button 
            variant="bg-amber-950 text-white w-full py-1 hover:bg-amber-800"
            type="submit"
                >
                    Login
        </Button>
    </form>
  )
};

export default FormLogin;
