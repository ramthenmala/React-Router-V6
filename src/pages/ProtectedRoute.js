import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ProtectedRoute = ({children, user}) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
          navigate('/login');
        }
    }, [])
    return children
}

export default ProtectedRoute