import { useNavigate } from "react-router-dom"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"
import { useState } from "react"
import './styles/PinLogin.css';
import api from "../api";


function PinLogin({ route }) {
    const [pin, setPin] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (pin.length < 4){
        setPin("")
        return 
      }

      try {
        const res = await api.post(route, { login_pin: pin })
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/")
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
      setPin("")
    };

    const clearPinInput = () =>{
        setPin("")
    }
  
    const enterPin = (number) => {
      if (pin.length < 4) {  // Limit PIN to 4 digits
        setPin(pin + number);
      }
    };
  
    return (
    <>
        <div className="login-container">
        <input
          type="password"
          className="pin-input"
          placeholder="Enter PIN"
          value={pin}
          readOnly
        />
  
        <div className="buttons-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <button
              key={number}
              className="pin-button"
              onClick={() => enterPin(number.toString())}
            >
              {number}
            </button>
          ))}
        </div>
  
        <div className="actions-row">
          <button className="action-button" onClick={clearPinInput}>
            Clear
          </button>
          <button className="action-button" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </>
    )
  }
  
  export default PinLogin;