
import { useNavigate } from "react-router-dom"
import "./Login.css"
export const Login = () => {
    const navigate = useNavigate()
    return (
        <section className='container-login'>
            <form action="">
                <h1>Log In</h1>
                <div className="fields">
                    <input type="text" placeholder='username' />
                    <input type="password" placeholder='password' />
                </div>
                <button type="submit" className="btn-submit" onClick={() => { navigate("/") }}>Log In</button>
            </form>
        </section>
    )
}
