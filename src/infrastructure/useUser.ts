import React, { useState } from 'react'

interface User {
  authed: boolean
}

export default () => {
  const [ user, setUser ] = useState<User>({
    authed: false
  })

  function updateUser (user: User) {
    setUser(user)
  }

  return { user, updateUser }
}
