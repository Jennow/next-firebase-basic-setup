import React from 'react'
import Link from "next/link"
import useAuth from '../hook/auth'
import { useRouter } from 'next/dist/client/router';

export default function AppLayout({ children }) {

    const auth = useAuth();
    const router = useRouter();

    if (router.pathname !== "/login") {
        return (
            <main>
                <nav style={{
                    background: "#577",
                    color: "#fff",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <span>{ auth.user?.displayName }</span>
                    <span>
                    <Link href="/admin">admin</Link>| 
                    <Link href="/login">login</Link>
                    </span>
    
                </nav>
                { children }
            </main>
        )
    }
    return children;

}
