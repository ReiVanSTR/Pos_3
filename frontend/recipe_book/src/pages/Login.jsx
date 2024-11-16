import PinLogin from "../components/PinLogin"
import Loading from "../components/Loading"
import Header from "../components/Header"


function Login() {
    return <div>
        <Header />
        <PinLogin route = "/users/token/"/>
        </div>
}

export default Login