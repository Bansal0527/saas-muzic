"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


export function Appbar() {
    const session = useSession()
    // const router = useRouter()

    // useEffect(() => {
    //   if (session.data?.user) {
    //     router.push('/dashboard')  // Redirect to dashboard
    //   }
    // }, [session, router])

    return(
    <div>
        <div className="flex justify-between">
            <div>
                Muzi
            </div>
            <div>
                {session.data?.user && <button className="m-2 p-2 bg-blue-400" onClick={() => signOut()}>Logout</button> }
                {!session.data?.user && <button className="m-2 p-2 bg-blue-400" onClick={() => signIn("google")}>SignIn</button> }
            </div>
        </div>
    </div>
    ) 
}