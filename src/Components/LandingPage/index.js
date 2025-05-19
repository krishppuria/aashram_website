
import React, { useEffect } from 'react';
import PortfolioGallery from '../PortfolioGallery';

const LandingPage = () => {


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
                <section id="about" class="about section ">
                    <div class="container section-title" >
                        <h2> <span class="description-title">    Ashram of Shri Shraddhanathji Maharaj- Laxmangarh,
                            Sikar (Rajasthan) </span></h2>
                        <p>
                            Welcome to our Shri Shraddhanathji Maharaj ji ka ashram, nestled in the heart of the Sikar district in Rajasthan. Our peaceful retreat offers a perfect blend of spiritual tranquility and accessibility. Located conveniently on National Highway 52 (Bikaner), our ashram is easily reachable from major cities and landmarks.Whether you're traveling from New Delhi, Jaipur, or nearby holy sites, our ashram is your destination for spiritual rejuvenation.
                        </p>
                    </div>
                    <div class="container">
                        <div class="row gy-3">
                            <div class="col-lg-6" data-aos-delay="100">
                                <img src="assets/img/about.jpg" alt="" class="img-fluid" />
                            </div>
                            <div class="col-lg-6  " data-aos-delay="200">
                                <div class="about-content ps-0 ps-lg-3">
                                    <ul class="row g-3" >
                                        <li class="col-lg-6" >
                                            <i class="bi bi-geo-alt"></i>
                                            <div>
                                                <h4 class="description-title" >Address Details</h4>
                                                <p><b>Location</b>: Sikar district of Rajasthan</p>
                                                <p><b>Highway</b>: On National Highway (Bikaner) No. 52</p>
                                            </div>
                                        </li>
                                        <li class="col-lg-6" >
                                            <i class="bi bi-car-front-fill"></i>
                                            <div>
                                                <h4 class="description-title" >Access to Laxmangarh  </h4>
                                                <p><b>By Bus</b> </p>
                                                <p><b>By Train</b> </p>
                                            </div>
                                        </li>
                                        <li class="col-lg-6" >
                                            <i class="bi bi-geo"></i>
                                            <div>
                                                <h4 class="description-title" >    Distance from Major Cities  </h4>
                                                <p>350 Km from New Delhi </p>
                                                <p> 140 Km from Jaipur </p>
                                            </div>
                                        </li>
                                        <li class="col-lg-6" >
                                            <i class="bi bi-pin-map"></i>
                                            <div>
                                                <h4 class="description-title" >  Ashram Location  </h4>
                                                <p>  In the north-east corner of Laxmangarh   </p>
                                                <p>½ Km from Railway Station 1.5 Km from the bus stand </p>
                                            </div>
                                        </li>
                                        <li class="col-lg-6" >
                                            <i class="bi bi-crosshair"></i>
                                            <div>
                                                <h4 class="description-title" >    Nearby Locations  </h4>
                                                <p>  24 Km north of Sikar  </p>
                                                <p>27 Km east from Shri Salasar Dham </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>

                </section>



                <div class="fe_title" >
                    <div class="container" >
                        <h4>
                            SPEECH OF SHRI BAIJNATH JI MAHARAJ
                        </h4>
                    </div>
                </div>
                <section id="featured-services" class="featured-services section">

                    <div class="container">

                        <div class="row g-4">
                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative">
                                    <div class="icon"> <img src="assets/img/fe_1.svg" class="img-fluid" alt="" /> </div>
                                    <h4> Self Study </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative ser_fill">
                                    <div class="icon"> <img src="assets/img/fe_2.svg" class="img-fluid" alt="" /> </div>
                                    <h4> Self realization   </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative">
                                    <div class="icon"> <img src="assets/img/fe_3.svg" class="img-fluid" alt="" /> </div>
                                    <h4>   Compassion Friendship Joy </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative ser_fill">
                                    <div class="icon"> <img src="assets/img/fe_4.svg" class="img-fluid" alt="" /> </div>
                                    <h4> Abhay   </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative">
                                    <div class="icon"> <img src="assets/img/fe_5.svg" class="img-fluid" alt="" /> </div>
                                    <h4> KARMYOGA   </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative ser_fill">
                                    <div class="icon"> <img src="assets/img/fe_6.svg" class="img-fluid" alt="" /> </div>
                                    <h4> Previous birth and rebirth   </h4>
                                </a>
                            </div>



                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative ser_fill">
                                    <div class="icon"> <img src="assets/img/fe_7.svg" class="img-fluid" alt="" /> </div>
                                    <h4> Spiritual Practice </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative  ">
                                    <div class="icon"> <img src="assets/img/fe_8.svg" class="img-fluid" alt="" /> </div>
                                    <h4>   Attainment of Shivatva   </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative ser_fill">
                                    <div class="icon"> <img src="assets/img/fe_9.svg" class="img-fluid" alt="" /> </div>
                                    <h4>   Asato ma sadgmay       </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative  ">
                                    <div class="icon"> <img src="assets/img/fe_10.svg" class="img-fluid" alt="" /> </div>
                                    <h4> Know how to die   </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative ser_fill">
                                    <div class="icon"> <img src="assets/img/fe_11.svg" class="img-fluid" alt="" /> </div>
                                    <h4> Aharnish Kathiba   </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative  ">
                                    <div class="icon"> <img src="assets/img/fe_12.svg" class="img-fluid" alt="" /> </div>
                                    <h4> The Elements of suffering   </h4>
                                </a>
                            </div>



                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative ">
                                    <div class="icon"> <img src="assets/img/fe_13.svg" class="img-fluid" alt="" /> </div>
                                    <h4>   Guru Power supreme power </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative ser_fill">
                                    <div class="icon"> <img src="assets/img/fe_14.svg" class="img-fluid" alt="" /> </div>
                                    <h4>   Manliness and fatalism   </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative">
                                    <div class="icon"> <img src="assets/img/fe_15.svg" class="img-fluid" alt="" /> </div>
                                    <h4>   The Essence of religion  </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative ser_fill">
                                    <div class="icon"> <img src="assets/img/fe_16.svg" class="img-fluid" alt="" /> </div>
                                    <h4> Wishing to cause sadness   </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative">
                                    <div class="icon"> <img src="assets/img/fe_17.svg" class="img-fluid" alt="" /> </div>
                                    <h4> Test of Love   </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative ser_fill">
                                    <div class="icon"> <img src="assets/img/fe_18.svg" class="img-fluid" alt="" /> </div>
                                    <h4>  Shiva is everything  </h4>
                                </a>
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

            <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center">
                <i class="bi bi-arrow-up-short"></i>
            </a>



        </>
    )
}

export default LandingPage
