import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';
import Isotope from 'isotope-layout';

const PortfolioGallery = () => {
    useEffect(() => {
        // Initialize GLightbox
        const lightbox = GLightbox({
            selector: '.glightbox',
        });

        // Initialize Isotope
        const isotope = new Isotope('.isotope-container', {
            itemSelector: '.isotope-item',
            layoutMode: 'masonry',
            filter: '*',
        });

        return () => {
            // Cleanup GLightbox and Isotope instances
            lightbox.destroy();
            isotope.destroy();
        };
    }, []);

    const images = [
        { src: 'assets/img/g1.png', filter: 'filter-app' },
        { src: 'assets/img/g23.png', filter: 'filter-product' },
        { src: 'assets/img/g4.png', filter: 'filter-app' },
        { src: 'assets/img/g5.png', filter: 'filter-product' },
        { src: 'assets/img/g6.png', filter: 'filter-branding' },
        { src: 'assets/img/g7.png', filter: 'filter-app' },
        { src: 'assets/img/g8.png', filter: 'filter-product' },
        { src: 'assets/img/g9.png', filter: 'filter-branding' },
        { src: 'assets/img/g10.png', filter: 'filter-branding' },
    ];

    return (
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
            <div className="row gy-4">
                {images.map((image, index) => (
                    <div key={index} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${image.filter}`}>
                        <a href={image.src} data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                            <img src={image.src} className="img-fluid" alt="" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioGallery;
