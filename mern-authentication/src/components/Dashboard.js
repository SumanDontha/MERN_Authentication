import { Button } from '@material-ui/core'
import React from 'react'
import AuthApi from '../utils/AuthApi'

const Dashboard = () => {

  const authApi = React.useContext(AuthApi)
  const handleLogOut = () => {
    authApi.setAuth(false)
  }

  return (
    <div>
      <h1> Dashboard </h1>
      <Button onClick={handleLogOut}> Logout </Button>
    </div>
  )
}

export default Dashboard
