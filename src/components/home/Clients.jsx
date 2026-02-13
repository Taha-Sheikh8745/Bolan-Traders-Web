import React from 'react';
import Slider from 'react-slick';
import { clientsData } from '../../data/clients';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Clients.css';

const Clients = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <section className="clients section">
            <div className="container">
                <div className="section-header text-center mb-12">
                    <h5 className="text-primary font-bold uppercase tracking-widest">Our Partners</h5>
                    <h2>Trusted by <span className="text-secondary">Industry Leaders</span></h2>
                </div>

                <div className="clients-slider">
                    <Slider {...settings}>
                        {clientsData.map((client) => (
                            <div key={client.id} className="client-logo-item">
                                <div className="logo-placeholder">
                                    {client.name}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Clients;
