import { LocalStorageData } from "../localStorage/LocalStorageData"
import { TSessionContext } from "../types/ISession"

export default function handleSessionLogout (sessionContext: TSessionContext) {
  const [session, setSession] = sessionContext
  
  localStorage.setItem(LocalStorageData.Session.token, "")
  setSession({ 
    ...session, 
    isAuthenticated: false,
    token: ""
  })
}