import React from 'react'
import '../style.css'
const Landpage = () => {
    return (
        <div>
            <section id="hero" data-aos="zoom-out">
                <h1 className="fw-bold" data-aos="fade-right" data-aos-duration="600">Encontra tu vocacion con nosotros!</h1>
                <div>
                    <form action="https://www.cursova.com/testvocacional"><button data-aos="fade-left" data-aos-duration="800">Test Vocacional</button></form>
                </div>
            </section>
        </div>
    )
}

export default Landpage