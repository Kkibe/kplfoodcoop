import React from 'react'
import { NavLink } from 'react-router-dom'

export default function EditProfile() {
  return (
    <div>
        <h1>Edit Profile</h1>
      <NavLink to=".." relative="path">
        Cancel
      </NavLink>
    </div>
  )
}
