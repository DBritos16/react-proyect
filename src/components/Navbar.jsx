import React from 'react'

const Navbar = () => {*-
  
    return (
        <header id='site-header'>
            <nav className="navbar fixed navbar-expand-lg navbar-dark p-md-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">InformAR!</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Ofertas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Institutos</a>
                            </li>       
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contacto</a>
                            </li>   
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar