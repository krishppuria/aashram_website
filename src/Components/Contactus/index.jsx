import React, { useEffect } from 'react'
import PortfolioGallery from '../PortfolioGallery'

const Contactus = () => {

    useEffect(() => {
        const toggleButton = document.querySelector('.mobile-nav-toggle');
        
        if (toggleButton) {
            toggleButton.addEventListener('click', () => {
                document.body.classList.toggle('mobile-nav-active');
            });
        }

        // Cleanup the event listener when the component unmounts
        return () => {
            if (toggleButton) {
                toggleButton.removeEventListener('click', () => {
                    document.body.classList.toggle('mobile-nav-active');
                });
            }
        };
    }, []);

    return (
        <>

            <header id="header" class="header ">
                <div class="topbar d-flex align-items-center">
                    <div class="container d-flex justify-content-center ">
                        <img src="assets/img/logo_header.png" class=" logo_header img-fluid" alt="" />
                    </div>
                </div>
                <div class="branding d-flex align-items-cente">
                    <div class="container position-relative d-flex align-items-center justify-content-end justify-content-md-center">
                        <nav id="navmenu" class="navmenu">
                            <ul>
                                <li><a href="/" class="active"> Main Page </a></li>
                                <li><a href="/about_us"> Hermitage </a></li>
                                <li><a href="/shri_shraddhanathji"> Shri Shraddhanath ji </a></li>
                                <li><a href="/trust"> Trust </a></li>
                                <li><a href="/nath_sect"> Nath Sect </a></li>
                                <li><a href="/current_peethadheeswar"> Current Peethadheeswar </a></li>
                                <li><a href="/sanskrit_vidyapeeth">Sri Shraddha Sanskrit Vidyapeeth</a></li>
                                <li><a href="/mount_abu_ashram "> Mount Abu Ashram </a></li>
                                <li><a href="/contact_us">Contact Us</a></li>
                            </ul>
                            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
                        </nav>
                    </div>
                </div>
            </header>

            <main class="main">
                <section id="hero" class="hero section ">
                    <img src="assets/img/hero-bg.jpg" class="img-fluid" alt="" />
                </section>

                <section class="sub_hero" >
                    <div class="container" >
                        <img src="assets/img/subhero-text.svg" class="img-fluid w-100" alt="" />
                    </div>
                </section>
                <section id="team" class="team section ">
                    <div class="container section-title">

                        <h2> <span class="description-title">   Contact Us </span></h2>
                        <p>
                            We would love to hear from you! Whether you have questions, need assistance, or want to share your experiences, please feel free to reach out to us.
                        </p>
                    </div>

                    <div class="container">

                        <div class="row gy-4">

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos-delay="100">
                                <div class="team-member">
                                    <div class="member-img">
                                        <img src="assets/img/team/team-1.jpg" class="img-fluid" alt="" />
                                    </div>
                                    <div class="member-info">
                                        <h4>Peethadhishwar Shri Baijnath Ji Maharaj</h4>
                                        <span> Shrinath Ji's Ashram Laxmangarh, Sikar, Raj. </span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos-delay="200">
                                <div class="team-member">
                                    <div class="member-img">
                                        <img src="assets/img/team/team-2.jpg" class="img-fluid" alt="" />
                                    </div>
                                    <div class="member-info">
                                        <h4>  Prakash Nath Ji Maharaj </h4>
                                        <span> Shrinath Ji's Ashram Laxmangarh, Sikar, Raj.  </span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos-delay="300">
                                <div class="team-member">
                                    <div class="member-img">
                                        <img src="assets/img/team/team-3.jpg" class="img-fluid" alt="" />
                                    </div>
                                    <div class="member-info">
                                        <h4> Sarthak Sahal  </h4>
                                        <span> Mukundgarh / Jaipur Raj. </span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>



                </section>


                <section id="contact" class="contact section pt-0">

                    <div class="container aos-init aos-animate" data-aos-delay="100">



                        <div class="info-wrap">

                            <div class="row gy-4">

                                <div class="col-lg-4">
                                    <div class="info-item d-flex aos-init aos-animate" data-aos-delay="300">
                                        <i class="bi bi-telephone flex-shrink-0"></i>
                                        <div>
                                            <h3>Call Us</h3>
                                            <p>+91-9887875151</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4">
                                    <a href="https://api.whatsapp.com/send?phone=919887875151&text=Hello" class="info-item d-flex aos-init aos-animate" data-aos-delay="400" target='_blank'>
                                        <i class="bi bi-whatsapp flex-shrink-0"></i>
                                        <div>
                                            <h3>Whatsapp </h3>
                                            <p>
                                                9887875151  </p>
                                        </div>
                                    </a>
                                </div>

                                <div class="col-lg-4">
                                    <div class="info-item d-flex aos-init aos-animate" data-aos-delay="200">
                                        <i class="bi bi-geo-alt flex-shrink-0"></i>
                                        <div>
                                            <h3>Address</h3>
                                            <p> Shri Shraddhanathji Maharaj’s Ashram
                                                Station Road-Laxmangarh, (Sikar) (श्री श्रद्धानाथजी महाराज का आश्रम,
                                                स्टेशन रोड-लक्ष्मणगढ़, (सीकर) ) </p>
                                        </div>
                                    </div>
                                </div>



                            </div>


                        </div>


                    </div>

                </section>



                <section id="portfolio" class="portfolio section bg-color">

                    <div class="container section-title" >
                        <h2 class="text-white mb-0" >The Photo Gallery</h2>
                    </div>

                    <div class="container">

                        <PortfolioGallery />

                    </div>

                </section>


            </main>

            <footer id="footer" class="footer">

                <div class="container footer-top">
                    <div class="row ">
                        <div class="col-lg-12 col-md-12 text-center">
                            <img src="assets/img/footer_img.svg" class="img-fluid" alt="" />
                            <h4> Shri Shraddhanathji Maharaj’s Ashram  <br /> Station Road-Laxmangarh, (Sikar)</h4>
                            <p>Phone : <a href="tel:9887875151" > +91-9887875151 </a> </p>
                            <p>Email : <a href="mailto:sarthak@appinop.com" > sarthak@appinop.com </a> </p>
                            <div class="social-links d-flex justify-content-center mt-4">
                                <a href="https://www.youtube.com/@shrishraddhanathjimaharajk7485" target='_blank'><i class="bi bi-youtube"></i></a>
                                <a href="https://www.facebook.com/people/Shri-Shraddha-Nathji-Maharaj-Ka-AshramLachhmangarhSikar/100069003048239/" target='_blank'><i class="bi bi-facebook"></i></a>
                                <a href="https://www.instagram.com/shrishraddhanathji/" target='_blank'><i class="bi bi-instagram"></i></a>
                                <a href="https://api.whatsapp.com/send?phone=919887875151&text=Hello" target='_blank'><i class="bi bi-whatsapp"></i></a>
                            </div>
                        </div>

                    </div>

                    
                </div>
                <div class=" copyright text-center mt-4">
                        <div class="container"> <p>Copyright 2011 Shree Nath Ji’s Ashram. All rights reserved.</p>  </div>
                    </div>
            </footer >
            <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>


        </>
    )
}

export default Contactus
