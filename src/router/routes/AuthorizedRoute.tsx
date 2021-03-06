import React from "react"
import { Route, Redirect, RouteProps } from "react-router-dom"
import { LoginRoute } from "../constants/ClientRoutes"
import useSessionContext from "../../state/context/SessionContext"

/**
 * @AuthorizedRoute 
 */
const AuthorizedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { session } = useSessionContext()

  return (
    <Route {...rest} render={({location}) => (
      session.isAuthenticated ? (children) : (
        <Redirect 
          to={{
            pathname: LoginRoute,
            state: { 
              from: location,
              errorMessage: "You mut be logged in to view this route." 
            }
          }}
        />
      )
    )}>

    </Route>
  )
}

export default AuthorizedRoute