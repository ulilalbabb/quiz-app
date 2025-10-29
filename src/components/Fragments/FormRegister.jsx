import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import Button from "../Elements/Button/Button"
import InputForm from "../Elements/Input/Index"

const FormRegister = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            return toast.error('Password and Confirm Password do not match', {
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

        if (!email || !password || !confirmPassword) {
            return toast.error('Please fill in all fields', {
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

        if (password.length < 6) {
            return toast.error('Password must be at least 8 characters long', {
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

        const userData = { email, password }
        localStorage.setItem('userData', JSON.stringify(userData))
        toast.success('Registration successful', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
        navigate('/login')

        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <form onSubmit={handleRegister}>
            <ToastContainer></ToastContainer>
            <InputForm
                label="Email"
                type="email"
                placeholder="example@gmail.com"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <InputForm 
                label="Password"
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <InputForm 
                label="Confirm password"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
            />
            <Button 
                variant="bg-amber-950 text-white w-full py-1 hover:bg-amber-800"
                type="submit"
            >
                Register
            </Button>
        </form>
    )
}

export default FormRegister