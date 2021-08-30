import React from 'react'

function Footer() {
    let footerStyle = {
        position:"relative",
        top:"100vh",
        width:"100%"

    }
    
    return (
        <footer className="text-center bg-dark text-light py-3" style={footerStyle} >
            Copyright &copy; Mytodoslist.com
        </footer>
    )
}

export default Footer
