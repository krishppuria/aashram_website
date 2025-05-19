
import React, { useEffect } from 'react';
import PortfolioGallery from '../PortfolioGallery';

const AboutPage = () => {


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
                                <li><a href="/about_us"  class="active" > Hermitage   </a></li>
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
                    <img src="assets/img/about-img_main.png" class="img-fluid" alt="" />
                </section>
                <section class="sub_hero" >
                    <div class="container" >
                        <img src="assets/img/subhero-text.svg" class="img-fluid w-100" alt="" />
                    </div>
                </section>
                <section id="about" class="about section pb-0 ">
                    <div class="container section-title" >
                        <h2> <span class="description-title">   Shri Shraddhanathji Maharaj’s ashram Laxmangarh,
                        </span></h2> 
                    </div> 
                </section>
                <section id="Position_sec" class="about section  bg-color ">
                    <div class="container  " > 
                        <div class="row g-4 align-items-center ">
                            <div class="col-xl-5 col-md-5" data-aos-delay="100">
                                <img src="assets/img/position_img.png" alt="" class="img-fluid ms-md-auto" />
                            </div>
                            <div class="col-xl-7 col-md-7 " data-aos-delay="100">
                                 <h3 className='text-white mb-3 mb-md-4' > <b>Position and view</b></h3>
                                 <p  className='text-white'  >"Shrinath Ji Maharaj's Ashram" is 24 km north of Sikar on National Highway No-11 in Laxmangarh Tehsil in Shekhawati region of Rajasthan. is located at a distance of 30 km west of Laxmangarh. Salasar Dham, the famous pilgrimage site of Rajasthan, is located at the interval. Its height from sea level is 220 m. is Although Laxmangarh is a small town, the fort here is the only representative of its construction method. The construction of Lakshmangarh fort and city by Ravaraja Lakshman Singh of Sikar in 1805-1807 AD. I built it on the top of a hill called Bed in the western direction. In this Balukayam region, the Aravalli mountain range is separated from the main range and spread in some places. Covering its flanks with sand dunes spread all around, these mountain ranges are known to be very beautiful.</p>
                            </div>                            
                         </div>
                    </div> 
                </section>
                <section id="Position_sec2" class="about section  bg-gray ">
                    <div class="container  " > 
                        <div class="row g-4 align-items-center ">
                            <div class="col-xl-7 col-md-7 " data-aos-delay="100">
                                 <h3 className='text- mb-3 mb-md-4' > <b>Visual Description </b></h3>
                                 <p  className='text-='  >This ashram is located in the north eastern corner of Laxmangarh town. Laxmangarh Railway Station is just half a kilometer (1/2 km.) from here. A magnificent temple of Lord Krishna is located in the south-eastern corner of this ashram named Krishna Vatika. To its west is the residence of Mr. Rajendra Modi, founder and director of Modi University. In the north there are farmers' fields and small farms.</p>
                                 <p>This ashram is spread over an area of ​​15 bighas surrounded by high walls. Thousands of shady trees are scattered in the ashram premises and the vacant land of the ashram. This desert land has so much greenery that it can only be found in a picturesque hilly region.</p>
                            </div> 
                            <div class="col-xl-5 col-md-5" data-aos-delay="100">
                                <img src="assets/img/visual_description.png" alt="" class="img-fluid ms-md-auto" />
                            </div>                           
                         </div>
                    </div> 
                </section>
                <section id="Position_sec3" class="about section  bg-color ">
                    <div class="container  " > 
                        <div class="row g-4  ">
                            <div class="col-xl-5 col-md-5" data-aos-delay="100">
                                <img src="assets/img/establishment_img.png" alt="" class="img-fluid ms-md-auto" />
                            </div>
                            <div class="col-xl-7 col-md-7 " data-aos-delay="100">
                                 <h3 className='text-white mb-3 mb-md-4' > <b>Establishment of ashram</b></h3>
                                 <p  className='text-white'  >In a sandy area outside the settlement in the north-east direction from Laxmangarh was an open solitary high hill which extended from west to east. Clean soft sand was scattered on this huge beautiful hill. On the north side, the mound was flat on which two thick trees of khejdi stood. Shri Babaji Maharaj came to this high hill rambling. He was finally inspired that he should sit and meditate on this Tbadi because in his words 'Aa jagati bhaum hai.' Babaji Maharaj had old relations with this land. Even before the ashram, he came here many times and used to sit in solitude. Many times he had divine feelings while sitting on these hills. These realizations happened because Mahasiddha Guruvara Paramayogi Shri Amritnathji Maharaj had fallen on them. At his feet, the austere land was conducive to sadhana. Sometimes Babaji Maharaj also used to say that while walking on these hills, he heard them</p>
                                 <p  className='text-white'  >
                                 As someone is saying, 'Sraddhanath' sit on these tables, here the instincts of the mind will be easily stopped and it was the same for them. He used to say that sometimes when he sat here, tears flowed continuously from his eyes in Bhavdasha and he felt as if he was descending deeper into Bhav-Samadhi. The motivation behind the construction of the Ashram was his Gurudev Shri Shubnathji Maharaj. Once Babaji Maharaj reached Amrita Ashram rambling. There, Pir Mahant Shri Shubnath Ji Maharaj said with a friendly smile, "Shradhanath, accept one thing. An ashram was built in the name of Nathji Maharaj.'' Following the order of Shraddhanath ji, when he was asked at which place should the ashram be built? There was no Nathashram in Lakshmangarh till then, so Shraddhanath Ji Maharaj replied, "I will do as per your order." And thus on the auspicious date of Ram Navami, Samvat 2029 accordingly 23rd March, 1972 AD. The foundation stone of the ashram was laid. The Pooja Mandir of Shree Shraddhanathji Maharaj was established on Purnima Samvat 2029 accordingly on 28th May, 1972 AD. who happened Prestige and Inauguration of Ashram by Kar Kamal of Mahant Shri Hanumannathji Maharaj of Shri Amrit Ashram Auspicious Date Ashad Shukla Saptami Monday Vikram Samvat 2029 Accordingly 17th July, 1972 AD. completed Sadhus and devotees also came with him on this occasion. He was warmly welcomed by thousands of servants and devotees present at the ashram.
                                 </p> 

                            </div>                            
                         </div>
                    </div> 
                </section> 
                <section id="Position_sec4" class="about section  bg-gray ">
                    <div class="container  " > 
                        <div class="row g-4 align-items-center ">
                            <div class="col-xl-7 col-md-7 " data-aos-delay="100">
                                 <h3 className='text- mb-3 mb-md-4' > <b>Purpose of Ashram </b></h3>
                                 <p  className='text-='  >Inside the ashram premises there are small carts of beautiful flowers. Which is very boring. Complete hygiene and cleanliness is spread everywhere. In the Kunj (garden) of the Ashram, thousands of birds are sheltered here by green trees. There are 70 peacocks in this enclosure alone. There are different types and species of birds and birds. 15 kg of grain is spread here daily for the birds. There are tubs of pure water here and there for the birds to drink. There is also a small room for sick birds. Sick birds are treated here. The view of this ashram is very beautiful, grand and breathtaking.After Babaji Maharaj's Brahmaleen, he felt the need to form a trust for the ashram. Usually, the formation of a trust for the management of an institution, ashram or any public institution is recognized by the government and the complete accounting of that institution is written and according to the statutes and regulations of the trust. The institute is a legacy of the trust and is managed by the members of the trust. Keeping this in mind, a Trust Board was formed on November 2, 1987 under the name "Shrednathji Maharaj's Ashram Trust" of Shree Shraddhanathji Maharaj's ashram to assist in the smooth running of the ashram system</p>
                            </div> 
                            <div class="col-xl-5 col-md-5" data-aos-delay="100">
                                <img src="assets/img/purpose_of_ashram.png" alt="" class="img-fluid ms-md-auto" />
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

export default AboutPage
