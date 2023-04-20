import React from 'react'
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dropdown from 'react-bootstrap/Dropdown';
import ReactFlagsSelect from "react-flags-select";


function Phone() {

    const [selected, setSelected] = useState("TR");

    const phones = {
        US: "+1",
        GB: "+44",
        FR: "+33",
        IT: "+39",
        DE: "+31",
        TR: "+90"
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 1000,
        arrows: false,
    };
    return (
        <div className='slider-box'>
            <Slider {...settings}>
                <div className='slide1'>
                </div>
                <div className='slide2'>
                </div>
                <div className='slide3'>
                </div>
                <div className='slide4'>
                </div>
            </Slider>
            <div className="gradient ">
                <div className="container">
                    <div className="box justify-content-between">
                        <div className="text-white">
                            <img width="80%" src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
                            <br />
                            <br />
                            <h2> <b> Dakikalar içinde <br /> kapınızda</b></h2>
                        </div>
                        <div className="login-box  p-4">
                            <h6 className='mb-4 text-center' > <b> Giriş yap veya kayıt ol</b></h6>
                            <div className='flags' >
                                <div className="row1 d-flex m-0">
                                    <ReactFlagsSelect
                                        countries={Object.keys(phones)}
                                        customLabels={phones}
                                        selected={selected}
                                        onSelect={(code) => setSelected(code)}
                                        className="flag-menu "
                                    />
                                    <div className='phone'>
                                        <input className='' type="text" placeholder='Telefon giriniz' />
                                    </div>
                                </div>
                                <div className='continue-btn' width="100%">
                                    <button className='m-0 text-center' type="button">Telefon numarası ile devam edeiniz</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Phone