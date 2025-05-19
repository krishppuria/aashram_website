
import React, { useEffect } from 'react';
import PortfolioGallery from '../PortfolioGallery';

const CurrentPeethadheeswar = () => {


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
                            <li><a href="/trust"> Trust </a></li>
                            <li><a href="/nath_sect"> Nath Sect </a></li>
                            <li><a  class="active"  href="/current_peethadheeswar"> Current Peethadheeswar </a></li>
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
                    <h2> <span class="description-title">  PRESENT PRESIDENT AND DIRECTOR OF THE ASHRAM  </span></h2> 
                    <br/>
                    <h5>
                        <small className='d-block mb-3'>  The current President and Director of the Ashram - Shri Baijanathji Maharaj   </small>
                        
                        <b>
                        Shanta mahanto nivasanti santo, Vasantavallok hitam charantha tirna: Swayaam Bhimabhavarnavam Jana, Na Hetu Nanyanpi Tarayantha.
                        </b>
                    </h5> 
                    <br/> 
                    <h5>
                    <div className='text-end' >
                        <small className='mt-5 text-end' >
                        Vivek Chudamani (Shankaracharya)
                        </small>
                    </div>
                    </h5>
                </div> 
            </section>
            <section id="Position_sec" class="about section pt-0  ">
                <div class="container  " > 
                    <div className='card card-custom  bg-muted' >
                        <div className='card-body' >
                        <div class="row g-4 align-items-center ">   
                            <div class="col-xl-5 col-md-4" data-aos-delay="100">
                                <img src="assets/img/_topmaharaj_img.png" alt="" class="img-fluid ms-md-auto" />
                            </div>
                            <div class="col-xl-7 col-md-8 text-center " data-aos-delay="100"> 

                            <p>   Beautiful Vast dreamy benign form Illuminated by divine light Radiant brilliant personality Discreet indomitable courage Knowledge Abyss of knowledge Divine energy Loud speech Far from self-praise Self-directed Compassionate Affectionate Pure intimacy New-born infant Simple, pure, gentle Sincere Charming smile Every definition of Guru is complete with you O sage of the age, seer of the age, maker of the age Salutations at your feet Shat Hundred Salutations Koti Koti Naman </p>
                            </div>  


                        </div>
                        </div>
                    </div>

                    <p className='text-center' >
                    A very magnificent gentle face on which the heart is captivated by the warmth of affection and courtesy. The simple, gentle eyes full of compassion and tenderness quickly impress and attract the audience. The light of boundless faith and belief in the mind, the ideal of constant hard work and the symbol of unobtrusive-conscious lifestyle, the most revered Paramguru Sri Baijanath Maharaj is the current Peethadhishwar of Sri Nath Ji's Ashram.
                    </p>
                    <p className='text-center' >
                    Shri Shraddhanath Ji Maharaj declared him as his successor on the basis of his faith, purity, diligence, scholarship, purity etc. during his lifetime. In the ashram of Shri Nath ji established by the command and inspiration of his guru Shri Shubnath ji, Shri Shraddhanath ji Maharaj appointed Shri Baijnath ji as the patron, director and head of the Ashram after giving formal initiation to Nath Panth on 28th February, 1985. In the presence of prominent saints of the Nath sect and thousands of followers of the ashram, Shri Baijnath Ji Maharaj bowed down at the feet of his most venerable guru and bowed down at his feet to carry out the tradition of the great yogi and Guru Gorakshanath. Take responsibility.
                    </p>
                    <p className='text-center mt-5' >
                    Shri Baijnath ji Maharaj was also born in Panlawa, the birthplace of Shri Shraddhanath ji, so from his childhood he received the holy and loving presence of Shri Shraddhanath ji, considering Shri Shraddhanath ji as his ultimate role model under his protection and guidance on the path of life. Mr. Baijnath ji who went ahead presented his feelings towards Mr. Shraddhanath ji from time to time by quoting the statement of Mahayogi Gorakhnath ji-
                    </p>
                    <br/>
                    <p className='text-center my-4' >
                    <b>"Sri Guru Parmanand, Vande Swanand Vigraham <br/>Yasya Sannidhya Matren Chidandayate Tanuh.</b>
                    </p>
                    <p className='text-center' >
                    And in this form, the Guru's ultimate idolatry is considered to be the joy of whose presence only the disciple becomes enlightened
                    </p>
                </div> 
            </section>


            <section id="portfolio" class="portfolio section bg-color ">  
                    <div class="container">

                        <div className='row' >
                            <div className='col-lg-7 text-white' >
                                <p>
                                Shree Shraddhanathji Maharaj's Ashram is a witness of the consciousness of these words, feelings, being alive, because the supreme consciousness of Shree Shraddhanath ji is evident in the present Peethadheshwar Shri Baijnath ji. "Ghati Ghati Gorakh Bahi Kari, Jo Nipajai So Hoi Hamari" is being interpreted. Those who are Shiva are Gorakhs, those who are Gorakhs are Amrit Nathji, those who are Amritnath ji are Shraddhanath ji Maharaj and those who are Shraddhanathji are Baijanath ji Maharaj. In whose holy presence Sri Shraddhanathji's ashram has established itself as a divinely awakened Peetha.
                                </p>
                                <p>
                                Shri Baijnathji Maharaj, after Babaji Maharaj's Brahmalin, developed the ashram of Shri Shraddhanathji at a rapid pace-enriched it, also established many service centers- while continuously doing meaningful work in every field of his life, he made 'Shri Shraddhanathji Maharaj's Ashram' ' has provided a specific form. In the religious area of ​​his life, he expanded the physical form of the ashram, built many buildings, Sri Goraksha Temple, Sri Shraddha Smriti Temple, Sri Shraddha Samadhi Temple, Sadhana Room, Library (Pragyan Mandir), etc. And he tried so that he could perfect the best and most important place for the pilgrims from the point of view of meditation, contemplation, contemplation, ascetic conduct etc. In the field of knowledge of his life, Vidya Anuragi and visionary Mr. Baijnath Ji Maharaj has collected and compiled high quality Sanskrit texts and texts of Nath literature. Even at present you are collecting and compiling authentic Nath literature and writings from everywhere. The library of the Ashram has six thousand books worth lakhs of rupees and most of the books have been bought and passed on by Peethadhishwar himself.
                                </p>
                            </div>
                            <div className='col-lg-5' >
                                <img src="assets/img/maharaj_img.png" className='img-fluid'  alt='' />
                            </div>
                        </div>

                         

                    </div>

                </section>


                
            <section id="Position_sec" class="about section   ">
                <div class="container  "  >

                    <p className='text-center' >
                    Sri Shraddha Sanskrit Vidyapeeth was established by Karma Yogi Peethadhiswar Shri Baijnath Ji in his life's field of work, in which through appropriate education of astrology, Vedas, Puranas, grammar, moral education, physical education, music, etc., the creation of an ideal beautiful society and preparation of high character citizens Trying to do it. Shree Shraddha Sanskrit Vidyapeeth is virtually an ideal educational institution.
                    </p>
                    <br/>
                    <p className='text-center my-4' >
                    <b>Annadanam Param Danam Vidyadanamatha Param. <br/>Annan Kansika Triptiryavajjivan Ch Vidya. </b>
                    </p>
                    <p className='text-center' >
                    In the spirit that education is the ultimate gift, no tuition fee is charged here and education is provided here completely free of cost.
                    </p>
                </div> 
            </section>



            <section id="Position_sec" class="about section pt-0  ">
                <div class="container  " > 
                    <div className='card card-custom  bg-muted' >
                        <div className='card-body' >
                            <div class="row g-4 align-items-center ">  
                                <div class="col-xl-12 col-md-12 text-center " data-aos-delay="100"> 

                                
                                <p className='text-center' >
                                An ardent scholar, a scholar, a thinker and an enlightened writer, Mr. Baijanath Ji Maharaj has been the principal and headmaster of a well-known meaningful and strong education center like Gram Bharti Vidyapeeth for two and a half decades. You are M.A. in Hindi and English. Hain and B.Ed. too Shri Baijnath Guru is such a huge tree which has given shade to countless disciples, provided fruit, breath of life and is such an ocean which has provided jewels to countless number of people, has given enlightenment. your life
                                </p>
                                <br/>
                                <p className='text-center my-4' >
                                <b> "Neither Tvahan Kamaye Rajya nor Cha Purnabhavam.<br/>Kamaye dukha taptanam artranasanam." </b>
                                </p>
                                <p className='text-center' >
                                It is based on feelings of renunciation, hatred, affection and karma. 
                                    Renunciation - of ego, mom, family, worldly comforts
                                    Distaste for high position, prestige, name, honor, achievement 
                                    Anurag - towards every person who comes in contact, towards nature, towards animals 
                                    Karma is the goal of life.
                                </p>



                                </div> 

                            </div>
                        </div>
                    </div> 
                </div> 
            </section>


            


                
            <section id="Position_sec" class="about section   ">
                <div class="container  "  >

                    <p className='text-center' >
                    In the life ideals presented by you, do not be lazy in doing religion and good deeds. is specific Adopting these ideals, Shri Baijnath ji always kept himself attached to the feet of his guru Shri Shraddhanath ji, kept dedicated. In each of his sermons, he said, "The language style and speech are mine, but the thought is what Shri Babaji Maharaj is." And thus, he said the last words of his Guru, "I am one today, but after leaving the body I will become a hundred times." Every sign of Shri Baba Ji Maharaj, expressed in hundreds of words, expressed in hundreds of words, presented to Shri Baba Ji Maharaj with every breath, every word, every thought, every deed. The name 'Baijnath' given by Gaye Siva Guru became his body's identity and he became 'shraddhamay' in mind and soul.
                    </p>
                    <br/>
                   
                    <p className='text-center' >
                    Shri Prakashnath ji is a worthy disciple of the current Peethadhishwar. He is also fully devoted to the feet of his Guru and is carrying out the responsibility of the routine and other arrangements of the ashram well. Stay engaged.
                    </p>
                </div> 
            </section> 

                
            <section id="Position_sec" class="about section   ">
                <div class="container section-title mb-0">
                    <h2 className='mb-0'> <span class="description-title">  PEETHADHISHWAR SHRI BAIJNATH JI BOOKS</span></h2>
                </div>
                <div class="container  "  >

                    <p className='text-center' >
                    In Indian culture, it is believed that the word Guru is the word Guru and the word Guru is the word timeless, so the Guru is also timeless. If we look at history, we will see that whatever human civilization and culture we have today is the gift of the Gurus. An enlightened, cultured and idealized guru guides his disciples and society in the light of his words and thoughts. Compilation of the thoughts of Peethadhishwar Shraddheya Guruvar Shri Baijanath Ji Maharaj is published and available by Shri Nath Ji Maharaj Ashram Trust - Tatva Chintan, Swara K Perpirana, Bichar Manthan etc. Books shed light on various topics like religion, philosophy, yoga, science, life practices etc. is In the words of Maharaj Shri Baijnath ji, "Education is the source of our identity, literature is a trend of thought" "Its expansion leads to the perfection of man, through which the attainment of a divine direction is possible." These books, which contain reflections on the fundamentals of the basic principles, give deep satisfaction to readers with spiritual inclinations.
                    </p>
                    <br/>
                   
                    <p className='text-center' >
                    Sahajayogi Saint Shree Shraddhanath Ji Maharaj and Shree Shraddhanath Ji's sadhana and thought books reveal the life of Shree Shraddhanath ji as well as the secrets of the Nath cult and the levels of sadhana. For the development of virtues such as truth, love, compassion, generosity, fearlessness, determination, courage, tolerance etc. in life, these books are like a light pillar, in the light of which thousands of millions of people will be able to determine suitable life values ​​for themselves in the years to come.
                    </p>
                </div> 
            </section>

            
                
            <section id="Position_sec" class="about section   ">
                <div class="container section-title mb-0">
                    <h2 className='mb-0'> <span class="description-title">  PEETHADHISHWAR SHRI BAIJNATH JI BOOKS </span></h2>
                </div>
                <div class="container "> 
                    <p className='text-center' >
                    In Indian culture, it is believed that the word Guru is the word Guru and the word Guru is the word timeless, so the Guru is also timeless. If we look at history, we will see that whatever human civilization and culture we have today is the gift of the Gurus. An enlightened, cultured and idealized guru guides his disciples and society in the light of his words and thoughts. Compilation of the thoughts of Peethadhishwar Shraddheya Guruvar Shri Baijanath Ji Maharaj is published and available by Shri Nath Ji Maharaj Ashram Trust - Tatva Chintan, Swara K Perpirana, Bichar Manthan etc. Books shed light on various topics like religion, philosophy, yoga, science, life practices etc. is In the words of Maharaj Shri Baijnath ji, "Education is the source of our identity, literature is a trend of thought" "Its expansion leads to the perfection of man, through which the attainment of a divine direction is possible." These books, which contain reflections on the fundamentals of the basic principles, give deep satisfaction to readers with spiritual inclinations.
                    </p>
                    <br/>
                   
                    <p className='text-center' >
                    Sahajayogi Saint Shree Shraddhanath Ji Maharaj and Shree Shraddhanath Ji's sadhana and thought books reveal the life of Shree Shraddhanath ji as well as the secrets of the Nath cult and the levels of sadhana. For the development of virtues such as truth, love, compassion, generosity, fearlessness, determination, courage, tolerance etc. in life, these books are like a light pillar, in the light of which thousands of millions of people will be able to determine suitable life values ​​for themselves in the years to come.
                    </p>
                </div> 
            </section>

            <section id="Position_sec" class="about section featured-services   ">
                <div class="container section-title mb-0">
                    <h2 className='mb-0'> <span class="description-title">  Name of Books: Publisher: Shrinathji Ka Ashram, Laxmangarh, Sikar(Raj.) </span></h2>
                </div>
                <div class="container "> 
                    
                <div class="row g-4">
                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative"> 
                                    <h4>   Sahajyogi Saint Shri Shraddhanath Ji Maharaj </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative ser_fill"> 
                                    <h4> Sahaja Yogi Saint Shri Shraddhanath Ji Maharaj-Sadhana and Thought   </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative"> 
                                    <h4>   Brainstorm  </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative ser_fill"> 
                                    <h4> element contemplation   </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative"> 
                                    <h4> The voice of inspiration   </h4>
                                </a>
                            </div>

                            <div class="col-xl-2 col-md-6 d-flex" data-aos-delay="100">
                                <a href="#" class="service-item position-relative ser_fill"> 
                                    <h4> The voice of inspiration   </h4>
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

export default CurrentPeethadheeswar
