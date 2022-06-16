import React from "react"

export default function Navbar(){
return(
        <>
            <nav className="navbar navbar-light bg-white justify-content-between shadow-sm p-3 px-5">
                  <a className="navbar-brand atools">ATools<span className="text-warning">.</span></a>
                  <button type="button" className="btn text-white mx-4 py-2 px-5 bluish-color disappear btn-sm btn-block">Start Free Trial</button>
                  <button type="button" className="btn text-white px-5 py-2 btn-warning disappear btn-block btn-sm">Login</button>
            </nav>
        </>
)

}