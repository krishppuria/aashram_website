
import React, { useEffect } from 'react';
import PortfolioGallery from '../PortfolioGallery';

const NathSect = () => {


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
                                <li><a href="/shri_shraddhanathji"> Shri Shraddhanath ji </a></li>
                                <li><a href="/trust"> Trust </a></li>
                                <li><a class="active" href="/nath_sect"> Nath Sect </a></li>
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
                    <img src="assets/img/sanskrit_vidyapeeth_img.png" class="img-fluid" alt="" />
                </section>
                <section class="sub_hero" >
                    <div class="container" >
                        <img src="assets/img/subhero-text.svg" class="img-fluid w-100" alt="" />
                    </div>
                </section>
                <section id="about" class="about section pb-0 ">
                    <div class="container section-title" >
                        <h2> <span class="description-title">  NATH SECT - THE INTRODUCTION
                        </span></h2> 
                    </div> 
                </section>
                <section id="Position_sec" class="about section pt-0  ">
                    <div class="container  " > 
                        <div class="row g-4 align-items ">
                            <div class="col-xl-7 col-md-8 " data-aos-delay="100"> 

                               <p>  When the miracles and practices of Tantrics and Siddhas became discredited, those who were seen with hatred for Shaktmadya, Mansadi and Siddhas, Tantrics etc. due to their feminine practices and when their Yogic Kriyas also started to slow down, then these Yogic Kriyas At that time Nath Sampradaya emerged for rescue. Navnath is said to be the main ones: Gorakshnath, Jwalendranath, Karinnath, Gahininath, Charpatnath, Revannath, Nagnath, Bhartrinath and Gopichandranath. Gorakhnath is famous as Gorakhnath.</p>


                               <p> Adinath, the tradition founder of this sect, is considered to be an avatar of Shankar himself. It is associated with the Raseshwars and its followers practice Adishta Yoga in the Agamas. Therefore, many historians consider it a Shaiva sect. But like other Shaivas, they neither perform lingarchan nor perform other parts of Shiva worship. But they believe in pilgrimages, deities, etc., and go to Shiva temples and Devi temples for darshan. Kaila Devi ji and Hinglaj Mata's darshan is especially said, from which their strong relationship is also clear. Yogi Bhasma too</p>


                               <p>  They are happy, but there is a special meaning of bhasmasnan - when these people stop the entry of breath into the body. This is an important technique in the practice of pranayama. Yet it is a sect of pure yoga practice. That is why it should be considered under the tradition of the Yoga Sampradaya of the Mahabharata period. Characteristic because its relationship with Pashupat sect seems to be similar. Also Yogasadhana is in its beginning, middle and end. Therefore, it is a pure yoga sect of Shaivism.
                                The Yoga Sadhana of this sect is an evolved form of the Patanjali method. By leaving its philosophical part and adding Hatha yoga action, it becomes Nathpant's yoga action. In Nathpant, being 'Urdhvareta' or an unbroken celibate is the most important thing. Meat-alcohol and all tamasic meals are completely prohibited. This sect appears to be the guardian of the Tantric Vajrayana of the eighty-four Siddhas in its sattvic form.</p>


                                <p>  His philosophy is that God is 'only'. To reach the same God is salvation. One can consider the relationship of the living being with him as he likes, but from a practical point of view, joining him is Kaivalya moksha or yoga. This is the goal of Panth, to be realized in this life. The first step to achieving this goal is the practice of physical activity. Some treat the body as an enemy and cause various troubles and some indulge in lust and leave it uncontrolled. But the Nathpanthi considers the body as the abode of God and practices it accordingly. For him, the body is the instrument by which he realizes salvation in this life, takes full control over life, birth, death, root-filling-disease and time.</p>


                                <p>  To achieve this goal, he first cleanses the body. For this he does the six actions of hatha yoga (neti, dhauti, vasti, nauli, kapalabhanti and trataka) with yama and niyama so that the body becomes pure. This is not an invention of Nathpantis; The Nath Panthians have rescued the Satvik Yoga system described in the ancient book 'Gheranda Samhita' written on Hatha Yoga.</p>


                                <p>  In this view, the sadhanas of pure hatha yoga and raja yoga are disciplined. Attainment of samadhi through Yogasana, Nadijnana, Shatchakra Nirupana and Pranayama are its main components. Rasa Vidya also has a special place in this view for the achievement of physical confirmation and victory over the Pancha Mahabhutas. The yogis of this sect either take samadhi alive or are given samadhi upon leaving the body. They do not burn. It is believed that his body gets purified only by yoga, there is no need to burn it. Nathpanthi Yogi awakens Alakh. With this word they meditate on Ishtadev and also do alms with this word. His disciples respond to the Guru's address by saying 'Adesh' when he says 'alaksh'. The goal of these mantras is Pranavarupi Param Purusha who is the goal of the Vedas and Upanishads. Among the texts that Nathpanthi considers as evidence, the oldest texts related to hatha yoga are the Gheranda Samhita and the Shiva Samhita. Gorakshanathkrita Hatha Yoga, Gorakshanath Jnanamrut, Gorakshakalpa Sahastranam, Chaturshityasana, Yogachintamani, Yoga Mahima, Yogamartanda, Yoga Siddhanta Methodology, Vivekmartanda, Siddha Siddhanta Methodology, Gorakhbodh, Datta Gorakh Samvad, Gorakhnath Ji Ra Pada, Gorakhnath K Sphut Granth, Gnana Siddhant Yoga, Jnanavikram, Yogeshwari Sakhi, Narvaibodh, Virahpurana and Gorakhsar Granth are also the proof texts of Nath sect. </p>
                            </div>    

                            <div class="col-xl-5 col-md-4" data-aos-delay="100">
                                <img src="assets/img/nath_sect_img.png" alt="" class="img-fluid ms-md-auto" />
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

export default NathSect
