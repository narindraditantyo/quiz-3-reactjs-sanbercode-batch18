import React from "react";
import '../Assets/css/style.css'

const About = () => {
    return (
        <section className="sections">
            <h1 className="text-center title">
                Data Peserta Sanbercode Bootcamp Reactjs
      </h1>
            <div className="container">
                <ol>
                    <li>
                        <b>Nama:</b> Gregorius Agung Narindra Aditantyo
                    </li>
                    <li>
                        <b>Email:</b> narindra.aditantyo@gmail.com
                    </li>
                    <li>
                        <b>Sistem Operasi yang digunakan:</b> macOS
                    </li>
                    <li>
                        <b>Akun Github:</b> narindraditantyo
                    </li>
                    <li>
                        <b>Akun Telegram:</b> narindraditantyo
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default About;
