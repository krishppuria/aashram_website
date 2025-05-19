
import React, { useEffect } from 'react';
import PortfolioGallery from '../PortfolioGallery';

const MtAbuAshram = () => {


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
                                <li><a href="/"> Main Page </a></li>
                                <li><a href="/about_us" > Hermitage   </a></li>
                                <li><a href="/shri_shraddhanathji"> Shri Shraddhanath ji </a></li>
                                <li><a href="/trust"> Trust </a></li>
                                <li><a href="/nath_sect"> Nath Sect </a></li>
                                <li><a href="/current_peethadheeswar"> Current Peethadheeswar </a></li>
                                <li><a href="/sanskrit_vidyapeeth">Sri Shraddha Sanskrit Vidyapeeth</a></li>
                                <li><a class="active"  href="/mount_abu_ashram "> Mount Abu Ashram </a></li>
                                <li><a href="/contact_us">Contact Us</a></li>
                            </ul>
                            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
                        </nav>
                    </div>
                </div>
            </header>
            <main class="main">
                <section id="hero" class="hero section ">
                    <img src="assets/img/sanskrit_vidyapeeth_img.png" class="img-fluid" alt="" />
                </section>
                <section class="sub_hero" >
                    <div class="container" >
                        <img src="assets/img/subhero-text.svg" class="img-fluid w-100" alt="" />
                    </div>
                </section>
                <section id="about" class="about section pb-0 ">
                    <div class="container section-title" >
                        <h2 className='' > <span class="description-title">   Shiv Sadhana Ashram   Mount ABU
                        </span></h2> 
                        <p className='text-start mb-3' >
                        After taking charge of Shri Nath Ji Maharaj's ashram, many basic development works were carried out by Peethadheeshwar Shri Baijnath Ji Maharaj after the passing away of Shraddhnath Ji Baba Ji Maharaj. Shri Baijnath Ji Maharaj not only preserved the legacy of his Guru but made it more prosperous and abundant. Due to his active nature and active nature, he established the Peetha of the Nath Sampradaya in the form of 'Shiva Sadhana Ashram' at Mount Abu, doing many works of permanent importance.
                        </p>
                        <p className='text-start mb-3' >
                        About 5 km from Guru Shikhar on Achalgarh Marg. A quiet, secluded, picturesque place near the Oriya pond in the village of Neeji Oriya was selected by Mr. Baijnath ji himself. The natural energy of the place inspired him to build a monastery there.
                        </p> 
                        <p className='text-start mb-3' >Behind its construction was the invisible inspiration of Shri Shraddhanath ji. In his youth, Shri Baijanath ji was traveling to this region during Raman tour with Shri Shraddhanath ji Maharaj. The good will that resulted in the establishment of this ashram was realized on the 12 bigha land on the edge of the reserve forest.</p>
                        <p className='text-start mb-3' >It is a beautiful and divine place with the most magnificent natural beauty of Mount Abu. Babaji Maharaj's followers keep coming here throughout the year and many rooms have been built for their residence. Efforts are being made to transform this beautiful mountain hermitage into a yoga center.</p>
                        <p className='text-start mb-3'>It is a beautiful and divine place with the most magnificent natural beauty of Mount Abu. Babaji Maharaj's followers keep coming here throughout the year and many rooms have been built for their residence. Efforts are being made to transform this beautiful mountain hermitage into a yoga center.</p>
                    </div> 
                </section>
                <section id="Position_sec" class="about section  bg-color ">
                    <div class="container  " > 
                        <div class="row g-4 align-items-center "> 
                            <div class="col-xl-12 text-center " data-aos-delay="100">
                                 <h3 className='text-white mb-3 mb-md-4' >  Aryajusthamidan vrittamiti vidya shashwatam. <br/>Santh paraartham kurwana novekshante pratikam.</h3>
                                 <h5 className='text-white mb-3 mb-md-4'  >
                                 This is the eternal behavior of noble men - understanding that good men do favors to others without wishing for anything in return.

                                 </h5>
                                 <p className='text-white d-block text-end mt-5 ' >- The Mahabharata</p>
                                 
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

export default MtAbuAshram
