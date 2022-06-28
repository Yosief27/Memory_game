import { AuthContext} from "../context/ContextAuth"
import { useContext } from "react"

export const useContextAuth = () => {
const context = useContext(AuthContext)

  if(!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }

  return context
}