import React from "react";

function Footer(){
    const copyright = new Date().getFullYear();

    return(
        <footer>
            <p>Copyright &copy;{copyright}</p>
        </footer>
    )
}

export default Footer;