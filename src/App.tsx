import React, { useState, useEffect, useReducer, useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './infrastructure/router'
import { UserContext } from './infrastructure/UserProvider'

export default () => {
  const [ loading, setLoading ] = useState(true)
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    fetch('http://localhost:8080')
      .then(res => res.json())
      .then(() => {
        setLoading(false)
        setUser({ authed: true })
      })
      .catch(err => console.log(err))
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
