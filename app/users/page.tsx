"use client"

import { signOut } from "next-auth/react";

const usersPage = ()=>{
    return <button type="button" onClick={()=>signOut()} >Logout</button>
}

export default usersPage;