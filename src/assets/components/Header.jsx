import React from 'react';

const Header = () => {
    return (
        <header id="carouselExample" className="carousel slide bg-dark" style={{ height: '40vh' , margin: "10px 20px"}}>
            <div className="carousel-inner" style={{ height: '100%' }}>
                <div className="carousel-item active" style={{ height: '100%' }}>
                    <img src="./img/frothy-pint-beer-wooden-table-pub-generated-by-artificial-intelligence.jpg" className="d-block w-100" style={{ height: '100%', objectFit: 'cover' }} alt="..." />
                </div>
                <div className="carousel-item" style={{ height: '100%' }}>
                    <img src="./img/wp9254925-alcohol-4k-wallpapers.jpg" className="d-block w-100" style={{ height: '100%', objectFit: 'cover' }} alt="..." />
                </div>
                <div className="carousel-item" style={{ height: '100%' }}>
                    <img src="./img/Huincha_Cerveza_Categorias.jpg" className="d-block w-100" style={{ height: '100%', objectFit: 'cover' }} alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </header>
    );
};

export default Header;