
import React, { useEffect } from 'react';
import PortfolioGallery from '../PortfolioGallery';

const TrustPage = () => {


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
                                <li><a href="/" > Main Page </a></li>
                                <li><a href="/about_us" > Hermitage </a></li>
                                <li><a  href="/shri_shraddhanathji"> Shri Shraddhanath ji </a></li>
                                <li><a  class="active" href="/trust"> Trust </a></li>
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
                    <img src="assets/img/trust_main_img.png" class="img-fluid" alt="" />
                </section>
                <section class="sub_hero" >
                    <div class="container" >
                        <img src="assets/img/subhero-text.svg" class="img-fluid w-100" alt="" />
                    </div>
                </section>
                <section id="about" class="about section pb-0 ">
                    <div class="container section-title" >
                        <h2> <span class="description-title">  Shrinathji Maharaj's Ashram Trust Laxmangarh  </span></h2> 
                        <br/>
                        <h5>
                            <small className='d-block mb-3  color_gray' > <b>Name of the Trust</b> </small>
                            Shrinathji Maharaj's Ashram Trust, Laxmangarh
                        </h5> 
                        <br/>
                        <h5>
                            <small className='d-block mb-3  color_gray' > <b>Address of the Trust </b> </small>
                            Shrinathji Maharaj's Ashram Trust in Laxmangarh, Village Post- Laxmangarh, District- Sikar (Rajasthan).
                        </h5>
                        <br/>
                        <br/>
                        <img src="assets/img/trust_img.png" className='img-fluid' alt=''/>
                    </div> 
                </section>
                 

                 <section id="objectives" class="objectives section  ">
 
                     <div class="container section-title" >
                         <h2 class="  mb-0 " >  Objectives of the Trust  </h2>
                     </div>
 
                     <div class="container">

                                <div className='row g-4' >
                                    <div className='col-lg-4' >
                                        <div className='text-center h-100' >
                                            <img src="assets/img/ob_1.png" className='img-fluid mb-3' alt='' />
                                            <p>To construct wells, ponds, gardens, playgrounds, roads etc. in public interest and to make free arrangements for water and electricity.</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-4' >
                                        <div className='text-center h-100' >
                                            <img src="assets/img/ob_2.png" className='img-fluid mb-3' alt='' />
                                            <p>To construct library, reading room, discourse hall, drinking water stall, hostel etc. and to assist in their construction.</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-4' >
                                        <div className='text-center h-100' >
                                            <img src="assets/img/ob_3.png" className='img-fluid mb-3' alt='' />
                                            <p>Working for public welfare and social upliftment, social service, service to saints, propagating good thoughts etc.</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-4' >
                                        <div className='text-center h-100' >
                                            <img src="assets/img/ob_4.png" className='img-fluid mb-3' alt='' />
                                            <p>To make arrangements for animal service, dispensary, hospital, cow service, service to people in distress.</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-4' >
                                        <div className='text-center h-100' >
                                            <img src="assets/img/ob_5.png" className='img-fluid mb-3' alt='' />
                                            <p>To help the victims and the helpless in saving them from famine, earthquake, flood and other such natural calamities.</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-4' >
                                        <div className='text-center h-100' >
                                            <img src="assets/img/ob_6.png" className='img-fluid mb-3' alt='' />
                                            <p>To do good to all people without making any distinction of caste, religion, class or gender.</p>
                                        </div>
                                    </div>   
                                    <div className='col-lg-4' >
                                        <div className='text-center h-100' >
                                            <img src="assets/img/ob_7.png" className='img-fluid mb-3' alt='' />
                                            <p>To spread education, literature, science, art and other useful knowledge.</p>
                                        </div>
                                    </div>  
                                    <div className='col-lg-4' >
                                        <div className='text-center h-100' >
                                            <img src="assets/img/ob_8.png" className='img-fluid mb-3' alt='' />
                                            <p>Distributing food, clothes, medicines etc. for public welfare.</p>
                                        </div>
                                    </div>  
                                    <div className='col-lg-4' >
                                        <div className='text-center h-100' >
                                            <img src="assets/img/ob_9.png" className='img-fluid mb-3' alt='' />
                                            <p>Proper care, protection, growth and development of the Ashram and its property.</p>
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

            <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center">
                <i class="bi bi-arrow-up-short"></i>
            </a> 
        </>
    )
}

export default TrustPage
