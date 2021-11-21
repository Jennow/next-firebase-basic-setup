import React from 'react'
import { withProtected } from '../src/hook/route'; 

function Admin({ auth }) {
    const { user, logout, error} = auth;

    return (
        <div>
            <button onClick={ logout }>Logout</button>
        </div>
    )
}

export default withProtected(Admin);