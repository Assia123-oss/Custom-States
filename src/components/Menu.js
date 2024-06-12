import React from 'react'
import ChangeProfile from "../ChangeProfile.js"
import { useContext } from 'react'
import {AppContext} from "../App.js"

export const Menu = () => {
  const {username} = useContext(AppContext);
  return (
    <div>Menu being used by:{username} 
    <ChangeProfile/></div>
  )
}
