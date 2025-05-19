
import React, { useEffect } from 'react';
import PortfolioGallery from '../PortfolioGallery';

const SanskritVidyapeeth = () => {


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

            <header id="header" class="header">
                <div class="topbar d-flex align-items-center">
                    <div class="container d-flex justify-content-center">
                        <img src="assets/img/logo_header.png" class="logo_header img-fluid" alt="" />
                    </div>
                </div>
                <div class="branding d-flex align-items-center">
                    <div class="container position-relative d-flex align-items-center justify-content-end justify-content-md-center">
                        <nav id="navmenu" class="navmenu">
                            <ul>
                                <li><a href="/"> Main Page </a></li>
                                <li><a href="/about_us"> Hermitage </a></li>
                                <li><a href="/shri_shraddhanathji"> Shri Shraddhanath ji </a></li>
                                <li><a href="/trust"> Trust </a></li>
                                <li><a href="/nath_sect"> Nath Sect </a></li>
                                <li><a href="/current_peethadheeswar"> Current Peethadheeswar </a></li>
                                <li><a class="active" href="/sanskrit_vidyapeeth">Sri Shraddha Sanskrit Vidyapeeth</a></li>
                                <li><a href="/mount_abu_ashram"> Mount Abu Ashram </a></li>
                                <li><a href="/contact_us">Contact Us</a></li>
                            </ul>
                            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
                        </nav>
                    </div>
                </div>
            </header>
            <main class="main">
                <section id="hero" class="hero section">
                    <img src="assets/img/sanskrit_vidyapeeth_img.png" class="img-fluid" alt="" />
                </section>
                <section class="sub_hero">
                    <div class="container">
                        <img src="assets/img/subhero-text.svg" class="img-fluid w-100" alt="" />
                    </div>
                </section>
                <section id="about" class="about section pb-0">
                    <div class="container section-title">
                        <h2><span class="description-title"> SRI SHRADDHA SANSKRIT VIDYAPEETH </span></h2>
                    </div>
                </section>
                <div class="fe_title">
                    <div class="container">
                        <h4>“Aano Bhadraah Kratvo Yantu Vishwatah.” <br/>
                            <small><small>That is, good thoughts should come to us from all directions.</small></small>
                        </h4>
                    </div>
                </div>

                <section id="position_sec1" class="about section">
                    <div class="container">
                        <div class="row g-4 align-items-center">
                            <div class="col-xl-12 text-center" data-aos-delay="100">
                                <h3 class="text mb-3 mb-md-4 color_gray">
                                    <b>Sarve bhavantu sukhinah sarvesantu niramayaah. Sarve Bhadrani Pashyantu, Ma Kashchit Dukhbhagbhavet.</b>
                                </h3>
                                <p class="text">Which other language has such a wish for welfare, a sense of national unity and universal brotherhood? Today, there is an acute shortage of accomplished scholars who teach the Vedas methodically. Pandits who are experts in the Rigveda, Yajurveda, Atharvaveda and Samveda are all upset with this disappearing science. The ancient methods of performing yajnas etc. with due rituals are coming to an end, this is the reason that despite many yajnas and mahayagnas, the desired results are not achieved.</p>
                                <p>In the present times, it is extremely necessary to study the Vedas to keep the grand form of Indian culture intact.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="position_sec2" class="about section pt-0">
                    <div class="container">
                        <div class="row g-4 align-items-center">
                            <div class="col-xl-12 text-center" data-aos-delay="100">
                                <h3 class="text mb-3 mb-md-4 color_gray">
                                    <b>For this purpose prasutasya sakashadgrajanmanah. Swam Swam Charitraam Shisheeram Prithivyaam Sarvamanavah.</b>
                                </h3>
                                <p class="text">The people of the world should learn about their character from the forefathers (Brahmins, scholars) born in this country.</p>
                                <p>The inspiration to start this Shri Shraddha Sanskrit Vidyapeeth came so that in today's time, students can be taken towards perfection in specific branches of study and teaching. Although such arrangements are difficult, yet not impossible. Bringing the scholars of the concerned Vedas and other things here and providing them with accommodation, all the residential arrangements without putting any financial burden on the students is undoubtedly very economical.</p>
                                <p>The huge Shri Shraddha Sanskrit Vidyapeeth is ready to welcome you, there is no doubt that all the tasks will be accomplished with the glory of Shri Shraddhanathji. The admitted students and patrons should take advantage of this unique opportunity with full hard work, dedication, devotion and enthusiasm so that they can play a helpful role in the development of the nation along with the testing of Indian culture.</p>
                                <p class="text-end mt-3">
                                    <b>- Peethadheeshwar Baijnath Ji Maharaj</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="Position_sec" class="about section  bg-color ">
                    <div class="container  " > 
                        <div class="row g-4 align-items-center ">
                            <div class="col-xl-7 col-md-7 " data-aos-delay="100">
                                 <h3 className='text-white mb-3 mb-md-4' > <b>Resolution </b></h3>
                                 <ul className='text-white' >
                                    <li className='mb-2' >Preservation of Indian culture.</li>
                                    <li className='mb-2'>To prepare urban and rural boys and girls as experts in the ancient extinct Vedic studies and practical knowledge, rituals, astrology and grammar and to re-establish the cultural glory of the country.</li>
                                    <li className='mb-2'>To develop the physical, mental and character strength of the students and instill high ideal qualities in them.</li>
                                    <li className='mb-2'>To rise above regionalism, caste, religion and language etc. and develop the spirit of 'Vasudhaiva Kutumbakam' and create ideal human beings.</li>
                                 </ul>
                            </div>  
                            <div class="col-xl-5 col-md-5" data-aos-delay="100">
                                <img src="assets/img/resolution.png" alt="" class="img-fluid ms-md-auto" />
                            </div> 
                         </div>
                    </div> 
                </section>


                <section id="Position_sec" class="about section  ">
                    <div class="container  " > 
                        <div class="row g-4 align-items-start ">
                            <div class="col-xl-5 col-md-5" >
                                <img src="assets/img/objectives_img.png" alt="" class="img-fluid ms-md-auto" />
                            </div> 
                            <div class="col-xl-7 col-md-7" data-aos-delay="100">
                                 <h3 className=' mb-3 mb-md-4' > <b>OBJECTIVES OF INSTITUTION </b></h3>
                                 <p>Shri Shraddha Sanskrit Vidyapeeth, the President of the Committee is Shri Nath Ji Maharaj and the Peethadheeswar of the Ashram is Shri Baijnath Ji Maharaj.</p>
                                 <ul className='' >
                                    <li className='mb-2' >To work for education, health, culture, religion and social awareness.</li>
                                    <li className='mb-2'>To provide comprehensive study of Sanskrit literature, grammar, Indian ancient heritage Vedas, Vedangas, rituals, astrology, Vedanta and various other ancient disciplines without any distinction of caste, colour, religion, sex or age.</li>
                                    <li className='mb-2'>To teach various subjects like social, cultural, music, dance, painting etc.</li>
                                    <li className='mb-2'>To organize and manage lectures, debates, discussions, educational seminars etc. for the advancement of thoughts and ideas and dissemination of knowledge for the benefit of the country and society.</li>
                                    <li className='mb-2'>To conduct research on the ancient Indian Akshaynidhi Vedas, Astrology, Ayurveda, Sanskrit Grammar and other religious literature related works </li>
                                    <li className='mb-2'> To provide high level study of Vedas, Vedanta, Sanskrit Grammar, Rituals and Astrology and to propagate these subjects. </li>
                                    <li className='mb-2'> To make plans and implement them for achieving the various objectives mentioned in the deed of Shri Shraddhanathji Maharaj Ashram-Trust, Laxmangarh, Sikar Raj. </li>
                                    <li className='mb-2'>To properly care for, protect, enhance and develop the organisation and its property. </li>
                                    <li className='mb-2'> To operate such Sanskrit universities in India and abroad for the proper teaching of Vedas-Vedanta, Sanskrit grammar, rituals and astrology etc. </li>
                                 </ul>
                            </div>  
                         </div>
                    </div> 
                </section>


                <section id="position_sec2" class="about section pt-0">
                    <div class="container">
                        <div class="row g-4 align-items-center">
                            <div class="col-xl-12 text-center" data-aos-delay="100">
                                <h3 class="text mb-3 mb-md-4 mb-lg-5 color_gray">
                                    <b>Executive Committee of the Organization</b>
                                </h3>
                                <p class="text-start">This institution is run by an executive committee under Shri Shraddhanathji Maharaj's Ashram-Trust, Laxmangarh (Sikar). This executive committee has a minimum of 11 and a maximum of 15 members.</p>
                                

                                <ul className='text-start' >
                                    <li className='mb-2' >
                                        The Executive Committee consists of the following office bearers:
                                        <br/>
                                        <ul className='mt-2'>
                                            <li className='mb-2' >chairman</li>
                                            <li className='mb-2' >Secretary</li>
                                            <li className='mb-2' >Joint Secretary</li>
                                            <li className='mb-2' >treasurer</li>
                                            <li className='mb-2' >Rest of the ordinary members</li>
                                        </ul>
                                    </li>
                                    <li className='mb-2' >The tenure of the executive committee is minimum 3 years.</li>
                                    <li className='mb-2' >As far as possible, learned and generous social workers from all sections are included in the Executive Committee.  </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section> 

                <section id="position_sec2" class="about section pt-0">
                    <div class="container">
                        <div class="row g-4 align-items-center">
                            <div class="col-xl-12 text-center" data-aos-delay="100">
                                <h3 class="text mb-3 mb-md-4 mb-lg-5 color_gray">
                                    <b> Duties and functions of the Executive Committee </b>
                                </h3> 

                                <ul className='text-start' >
                                    <li  className='mb-2'  >
                                        To assist the Trust-Board in the operation, management and physical development of Shri Shraddha Sanskrit Vidyapeeth, Laxmangarh.
                                         
                                    </li>
                                    <li  className='mb-2'  > To ensure compliance of the decisions related to the institution passed by Shri Shraddhanathji Maharaj's Ashram-Trust, Laxmangarh (Sikar). </li>

                                    <li  className='mb-2'  > To assist the Trust-Board in raising financial resources for the smooth functioning of Shri Shraddha Sanskrit Vidyapeeth, Laxmangarh. </li>

                                    <li  className='mb-2'  > She will maintain the account of daily income and expenditure of the organization and submit that account every month to the President of Shri Shraddhanathji Maharaj Ashram Trust, Laxmangarh. </li>

                                    <li  className='mb-2'  > To prepare membership of four types of members to obtain financial grants for the permanent operation of the organization. </li>

                                    <li  className='mb-2'  > Ordinary Member – Can give minimum Rs. 3100/- annual donation. </li>

                                    <li  className='mb-2'  > Distinguished Member- can donate minimum Rs. 5100/- annually. </li>

                                    <li  className='mb-2'  > Distinguished Member – can give minimum Rs. 11,000/- annual grant. </li>

                                    <li  className='mb-2'  > Super Special Member- Can give minimum Rs. 21,000/- annual grant. </li>

                                    <li  className='mb-2'  > To record the proceedings of the Executive Meetings in a proceedings book. </li>

                                    <li  className='mb-2'  >  At the beginning of the Executive Year, each year the amount for food, clothing and other expenses incurred on students is considered and the amount is determined. </li>

                                    <li  className='mb-2'  >  It will arrange for and inspect the work related to teachers, employees etc. appointed by the Trust Board and will bring about proficiency in work skills. </li>

                                    <li  className='mb-2'  > The institution will be responsible for getting the institution related recognitions, examinations etc. </li>

                                    <li  className='mb-2'  > In the mid-term, the vacancies in the Executive will be filled by its majority. </li>

                                    <li  className='mb-2'  > To assist the Chairman in the eligibility test and selection process of students seeking admission in the institute. </li> 

                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="position_sec2" class="about section bg-color">
                    <div class="container">
                        <div class="row g-4 align-items-center">
                            <div class="col-xl-12 " data-aos-delay="100">
                                <h3 class="text mb-3 text-white  text-center mb-md-4 mb-lg-5  ">
                                    <b> Sri Shraddha Sanskrit Vidyapeeth: Shraddhapuram </b>
                                </h3>

                                <h5 className='text-white '> <b>Introduction</b> </h5>
                                <p class="text-white">Education is the expression of the perfection inherent in man and is a means of holistic development of human personality. It is true that the identity of any educational institution is the students educated by it who make the institution proud by setting records in various fields, but a good, pure and excellent educational environment, comfortable building, learned teachers, high goals and healthy management are equally important, which prove to be helpful in helping the students reach their goals.</p>

                                <p class="text-white">
                                The newly established Veda Vidyalaya has rapidly emerged as one of the best and renowned educational institutions of Shekhawati and has become renowned far and wide for its grand campus, buildings, gardens and the excellent education and facilities provided to the students. This campus is as grand and picturesque as it is convenient.
                                </p>

                                <br/>
                                <br/> 
                                
                                <h3 class="text mb-3 text-white  text-center mb-md-4 mb-lg-5  ">
                                    <b>"Childhood is the morning of life, therefore education received in childhood helps in building a great personality."</b>
                                </h3>


                                <p class="text-white">
                                Basant Panchami, 25 February 2002 is an unforgettable day in the history of Shri Sanskrit Vidyalaya when its foundation stone was laid by the lotus hands of Maharaj Shri Baijnath ji. The pollution-free environment is calm and beautiful and is suitable for studies. A calm, solitary environment helps in concentrating on studies. Shri Shraddhapuram is a unique example of this. The spacious school building is also situated right in front of Shri Shraddhanath Ashram. As soon as you enter the main gate, a grand Veda temple is decorated in the middle on the upper floor, whose tall peak seems to be announcing the re-establishment of Vedic culture in today's cultureless environment. It has beautiful statues of Brahma, Vishnu and Mahesh. On both sides of this main temple are laboratories of Vedas, rituals and astrology, below which there are large classrooms. </p>

                                <p class="text-white"> On the right, the principal's room is built in a circular shape, from the windows of which one can observe the surroundings. Next to it, there are seven rooms in a row for the students to reside. On the left side of the main gate, just in front of the principal's room, there is a circular administrative room, in one row of which are classrooms and on the other side are the residences of the principal and teachers. </p>

                                <p class="text-white"> On the left side of the main gate there is inspection room (control room), drawing painting, music, dispensary, computer room, water tank and two store houses etc. </p>

                                <p class="text-white"> As an ideal educational institution, the ashram is running an educational institution by the name of Shri Shraddha Sanskrit Vidyapeeth. This institution has a beautiful combination of ancient Sanskrit literature and modern education curriculum. This is a residential school. This institution is running till the eighth standard. About 40 students are studying here. All those students are from some districts of northern Rajasthan. These include Sikar, Jhunjhunu, Churu, Bikaner, Nagaur etc. Efforts are underway to get recognition for entrance exam. It is hoped that recognition up to entrance exam will be obtained soon. There are a large number of students from poor and backward classes in this school. Most of these students have rural background. No fee is charged in this school. Education is imparted here completely free of cost. </p>

                                <p class="text-white"> It is very important to give some general introduction about this university. So, I am giving some general introduction as per the brochure of this institution </p>
 
                            </div>
                        </div>
                    </div>
                </section>


                <section id="position_sec2" class="about section  ">
                    <div class="container">
                        <div class="row g-4 align-items-start">
                        <div class="col-xl-6 col-md-6 " data-aos-delay="100">
                                <img src="assets/img/notable_feature.png" className='img-fluid' alt='' />
                        </div>
                            <div class="col-xl-6 col-md-6 " data-aos-delay="100">
                                <h3 class="text mb-3 mb-md-4 mb-lg-5 color_gray">
                                    <b> NOTABLE FEATURES</b>
                                </h3> 

                                <ul className='text-start' >
                                    <li  className='mb-2'  >   Shri Shraddha Sanskrit Vidyapeeth is situated near the railway station on the western end of the Lakshmangarh tehsil of Sikar district, opposite the famous Shri Shraddha Nath Ashram for its peaceful environment, where the picturesque natural surroundings are simply captivating. </li>

                                    <li  className='mb-2'  > This Vidyapeeth is a residential institution, whose large hostel is fully equipped, all the workers also reside in the institution campus 'Shraddhapuram'. </li>

                                    <li  className='mb-2'  > This is a good institute for getting education mainly for the students of low and middle income group families. </li>

                                    <li  className='mb-2'  > Situated in the open lap of nature, away from the village and city population, the Shraddhapuram complex is free from all types of pollution. </li>

                                    <li  className='mb-2'  > Teaching by well-qualified subject-expert teachers and the cordial relationship between teacher and student are its special features.
                                    A well-organized disciplined daily routine is especially helpful in studies. </li>

                                    <li  className='mb-2'  > Apart from excellent results, the ultimate aim of the Vidyapeeth is to inculcate in the students values ​​like faith, dedication, equanimity and devotion. </li>

                                    <li  className='mb-2'  >  is a special arrangement for sports, healthy entertainment, exercise, yoga, cultural programs, various literary activities here. 'Simple living, high thinking' is the basic mantra of the university. </li>

                                    <li  className='mb-2'  >  Parent-teacher conference is compulsorily held once a year. </li>
 

                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="position_sec2" class="about section  pt-0">
                    <div class="container">
                                <h3 class="text text-center mb-3 mb-md-4 mb-lg-5 color_gray">
                                    <b> FOUNDATION DAY  FEATURES</b>
                                </h3> 
                                <p  className='text-center' >
                                The foundation stone was laid on Magh Shukla Triyodashi Monday, Samvat 2058 corresponding to February 25, 2002 by the lotus hands of Peethadheeswar Shri Bainjanath Ji Maharaj.
                                </p>
                        <div class="row g-4 align-items-start mt-4 mt-md-5">
                        <div class="col-xl-6 col-md-6 " data-aos-delay="100">
                                <img src="assets/img/syllabus_img.png" className='img-fluid' alt='' />
                        </div>
                            <div class="col-xl-6 col-md-6 " data-aos-delay="100">
                                <h3 class="text mb-3 mb-md-4 mb-lg-5 color_gray">
                                    <b>   Syllabus</b>
                                </h3> 

                                <ul className='text-start mb-4' >
                                    <b className='mb-2 d-block' >General Studies</b>
                                    <li  className='mb-2'  >   Class-VI- As per the syllabus of Rajasthan Education Department.</li>
                                    <li  className='mb-2'  >Class VII- As per the syllabus of Rajasthan Education Department.</li>
                                    <li  className='mb-2'  > Class VIII- As per the syllabus of Rajasthan Education Department.</li>
                                </ul>

                                <ul className='text-start mb-4' >
                                    <b className='mb-2 d-block' >  Optional Subjects</b>
                                    <li  className='mb-2'  > Sanskrit, Grammar, Vedas, Rituals, Astrology etc. </li>
                                    <li  className='mb-2'  > Optional subjects are selected as per the interest of the students and the </li>
                                    <li  className='mb-2'  >guardian and the talent of the student. </li>
                                </ul>
                                

                                <ul className='text-start mb-4' >
                                    <b className='mb-2 d-block' >  Extracurricular Activities  </b>
                                    <li  className='mb-2'  >  Special teaching-English language writing and use. </li>
                                    <li  className='mb-2'  >     Computer-General Studies Compulsory. </li>
                                    <li  className='mb-2'  >     Music(singing, playing) </li>
                                    <li  className='mb-2'  >     drawing </li>
                                    <li  className='mb-2'  >     General knowledge of yoga and naturopathy. </li>
                                    <li  className='mb-2'  >    General knowledge of Ayurveda, Homeopathy medicine. </li>
                                    <li  className='mb-2'  >    Competitions like speech, essay, debate, acting, dance, singing, playing instruments, sewing, embroidery, rangoli, mandana, mehndi etc. </li>
                                </ul>
                                

                                <ul className='text-start mb-4' >
                                    <b className='mb-2 d-block' >  Sports  </b>

                                    <li  className='mb-2 row'   > 
                                        
                                        <ul className='col-6' >  
                                            <b className='d-block mb-2' >For students</b>
                                             
                                            <li  className='mb-2'  >   Basketball</li>
                                            <li  className='mb-2'  >   Handball</li>
                                            <li  className='mb-2'  >   Malkhambha</li>
                                            <li  className='mb-2'  >   Wrestling</li>
                                            <li  className='mb-2'  >   Yogic Exercises</li>
                                            <li  className='mb-2'  >   PT Parade</li>
                                            <li  className='mb-2'  >   judo karate</li> 
                                        </ul>
                                        <ul className='col-6' >  
                                            <b className='d-block mb-2' >For students</b>
                                            <li  className='mb-2'  > Handball</li> 
                                            <li  className='mb-2'  >  Ringball</li> 
                                            <li  className='mb-2'  >  Badminton</li> 
                                            <li  className='mb-2'  >    Lezim</li> 
                                            <li  className='mb-2'  >    Yogic Exercises</li> 
                                            <li  className='mb-2'  >    PT Parade</li> 
                                            <li  className='mb-2'  >   judo karate</li> 
                                        </ul>
                                    </li>
                                    
                                </ul> 
                                
                                


                            </div>
                        </div>
                    </div>
                </section>

                


                <section id="Position_sec" class="about section  bg-color ">
                    <div class="container  " > 
                        <div class="row g-4 align-items-center ">
                            <div class="col-xl-7 col-md-7 " data-aos-delay="100">
                                 <h3 className='text-white mb-3 mb-md-4' > <b>ENTRY RULES </b></h3>
                                 <p className='text-white' >5th passed, minimum marks 60%.
                                Admission is based on the merit list of written examination.
                                On the basis of oral interview, aptitude and interest test.
                                Mentor interview required.
                                It is compulsory for the students to wear uniform.
                                No tuition fees are charged from the students.
                                Accommodation fee is completely waived.
                                Provision of free books to the students.
                                It is mandatory to bring your own clothes and bedding as per the weather.
                                Education department rules regarding examinations and exam results are fully applicable.</p>
                            </div>  
                            <div class="col-xl-5 col-md-5" data-aos-delay="100">
                                <img src="assets/img/entry_rules.png" alt="" class="img-fluid ms-md-auto" />
                            </div> 
                         </div>
                    </div> 
                </section>

                


                <section id="position_sec2" class="about section  ">
                    <div class="container">
                                <h3 class="text text-center mb-3 mb-md-4 mb-lg-5 color_gray">
                                    <b> OTHER ACTIVITIES</b>
                                </h3> 
                                <p  className='text-center' >
                                For the all-round development of students, special attention is paid to the university activities. So that attentiveness towards academic, literary, cultural, physical, moral and social service etc. can be developed.
                                </p>
                        <div class="row g-4 align-items-start mt-4 mt-md-5">
                            <div class="col-xl-7 col-md-6 " data-aos-delay="100">

                                <p>
                                In the daily prayer meetings, programmes like prayer to God, inspirational quotes, patriotic songs, meditation and silent prayer, general knowledge, daily news, necessary guidelines, pledges and national anthem etc. are important for the enhancement of moral values ​​and general knowledge.
                                </p>
                                <p>
                                Cleanliness and hygienic behavior are checked daily.
                                </p>
                                <p>
                                Living together without any caste or creed discrimination to promote collectivism and equality.
                                </p>
                                <p>
                                Discussion on the all-round development of students through parent-teacher conferences and contact.
                                </p>
                                <p>
                                Assigning various responsibilities to boys and girls in the school and hostel to promote the sense of responsibility.
                                </p> 

                                <ul className='text-start mb-4' > 
                                    <li  className='mb-2'  >   Preparation of a planned programme (Panchang) from the beginning of the session and implementation of the year-long work accordingly.</li>
                                    <li  className='mb-2'  > Organizing literary, cultural, debate and discussion seminars every Saturday.
                                    Educational tour.</li>
                                    <li  className='mb-2'  > Various physical exercises, sports, competitions and group sports displays in which participation is compulsory for all.</li>
                                    <li  className='mb-2'  >  To benefit the students from the nectar words of great men and saints from time to time.</li>
                                    <li  className='mb-2'  > 
                                    Sports for good health: 
                                    <ul className='text-start mb-4' > 
                                    <li  className='mb-2'  > It is essential to play every day. "A healthy mind can reside only in a healthy body." </li>
                                    <li  className='mb-2'  > Various exercise equipment and spacious playgrounds are available. </li>
                                </ul> 
                                    </li>
                                </ul>
 
                            </div>
                            <div class="col-xl-5  col-md-6 " data-aos-delay="100">
                                    <img src="assets/img/other_activaty.png" className='img-fluid' alt='' />
                            </div>
                        </div>
                    </div>
                </section>

                
                <section id="position_sec2" class="about section pt-0 ">
                    <div class="container">
                        <h3 class="text text-center mb-3 mb-md-4 mb-lg-5 color_gray">
                            <b>   SHRI shraddha hostel</b>
                        </h3>  
                        <div class="row g-4 align-items-start mt-4 mt-md-5">
                            <div class="col-xl-5 col-md-6 " data-aos-delay="100">
                                <img src="assets/img/shraddha_hostel.png" className='img-fluid' alt='' />
                            </div>
                            <div class="col-xl-7 col-md-6 " data-aos-delay="100">

                                <p>
                                When Peethadheeshwar Shri Baijnathji Maharaj of Shri Shraddhanathji's Ashram moved forward on the path of social service and social welfare by following the path shown by his most revered Guru Shri Shraddhanathji, he established Shri Shraddha Sanskrit Vidyapeeth and to make it more meaningful, he also established Shraddha hostel so that he could educate the children of poor and low or middle class families. Liberal, religious, hardworking and far-sighted, Shri Baijnathji had special interest in religion, philosophy, art, music, literature, sports, so he tried to provide plans of all subjects free of cost in the Vidyapeeth and hostel.
                                </p>
                                <p>
                                Poor students studying in the Vidyapeeth and living in the hostel are provided with clothes and bedding free of cost. Books, copies and other stationery are also provided free of cost to the poor students.</p> 

                                <b className='d-block mb-4 mt-4 mt-md-5 ' >Scholarships, financial assistance, counselling and guidance to poor students :</b>

                                <ul className='text-start mb-4' > 
                                    
                                    <li  className='mb-2'  >   
                                    Shri Shraddhanathji Maharaj's Ashram provides scholarships worth thousands of rupees to poor and talented students for studies without any caste or class discrimination and without any publicity or promotion.</li>

                                    <li  className='mb-2'  >   Such students are also given proper guidance for studies and proper assistance in admission etc.</li>

                                    <li  className='mb-2'  >   The students of the Vidyapeeth are continuously given proper counselling and guidance for their higher studies or for employment related information or problem solving.</li>

                                    <li  className='mb-2'  >   Hundreds of students who received assistance from the Ashram are today holding respectable positions in various fields.</li>

                                    <li  className='mb-2'  >   Blankets, quilts, sweaters etc. are distributed every year by the Ashram Trust to the tribal people living in remote mountainous regions.
                                    Clothes are distributed to students studying in hilly areas as per their size and weather. </li>
                                </ul>  
 

                                <b className='d-block mb-4 mt-4 mt-md-5 ' > Medical facilities are also available for better health. Doctors come from time to time to check the health of the students. </b>

                            </div>
                        </div> 
                    </div> 
                        
                    <h3 class="text text-center mb-3 mb-md-4 mt-5 mb-lg-5 color_gray">
                        <b>  ASHRAM LIBRARY </b>
                    </h3>  
                    <div class="fe_title">
                        <div class="container">
                            <h4>''Vidya Prapyate Saukhyam Yashah Kirtisthatatula. <br/>
                                <small><small>Gyanam Swargaah Sumokshascha Tasmadvidyaam Prasadhap.</small></small>
                            </h4>
                            <p className='mb-0 mt-4 text-white text-end' >- PAdma PURANA</p>
                        </div>
                        
                    </div> 


                    <div className='container' >
                    <b className='d-block mb-4 mt-4 mt-md-5 text-center' >"Education gives you happiness, fame, unmatched glory, knowledge, heaven and salvation. So, practice education."</b>

                            <p> 
                            Library plays an important role in the pursuit of knowledge. In view of this, Peethadheeshwar Shri Baijnath ji Maharaj built a huge library "Pragyan Mandir" in the ashram. Baijnath ji, a highly educated, inquisitive and studious person, has a special interest in studying high level books. This is why the library of the ashram has books related to Indian religion, philosophy, literature, art, culture and rare and very important biographies of saints and sages of all sects of India. There are many rare handwritten books.</p>

                            <p> This library is built on two floors with 65 shelves built into the walls. This library has 6000 books on various subjects. This library is managed part time by an independent librarian. The library is not only used by local teachers and children, but curious readers from outside also study here. Students pursuing PhD and D.Litt also take references from books for their research.</p>

                            <p> Peethadheeswar Shri Baijnath Ji Maharaj tries to continuously increase the collection of the library because in his view it is a unique repository of Saraswati.</p>

                            <p> Apurva: Kodapi Koshodayam Vidyate Tav Bharati Vayato Vriddhimayati Kshayamayati Sanchayat O Saraswati! Your dictionary (of genre) is very strange and unique which increases by spending and decreases by keeping it hidden with effort.</p>
                    </div>


                <div className='container my-4' >

                <h3 class="text text-center mb-3 mb-md-4 mt-5 mb-lg-5 color_gray">
                        <b> LIBRARY Rules </b>
                    </h3>  

                    <ul className='text-start mb-4' > 
                        <li  className='mb-2'  > Self-study is the key to acquiring knowledge. Students should ask the names of reference books from their teachers and then sit in the library and note down the relevant portions. </li>

                        <li  className='mb-2'  > Books will not be issued from the library. </li>

                        <li  className='mb-2'  > If the pages of the book are torn or there are less pages then the librarian should be informed immediately. </li>

                        <li  className='mb-2'  > Students will be allowed to read reserved books, old question papers, syllabus and other books while sitting in the reading room. </li>

                        <li  className='mb-2'  >  It is important to study peacefully in the library and reading room. In case of breaking discipline or not following the rules, one can be denied library benefits. </li>

                        <li  className='mb-2'  > If a book is lost, double the price of the book will be charged. </li>

                        <li  className='mb-2'  > One can study in the library even on holidays. </li>
                    </ul>


                </div>


                <div className='container my-4' >

                <h3 class="text text-center mb-3 mb-md-4 mt-5 mb-lg-5 color_gray">
                        <b> Celebrations   </b>
                    </h3>  

                    <div className='row g-4 justify-content-center' >
                        <ul className='col-3  ' >   
                                
                            <li  className='mb-2'  >   independence day</li> 
                            <li  className='mb-2'  >           Republic Day</li> 
                            <li  className='mb-2'  >           geeta jayanti</li> 
                            <li  className='mb-2'  >           sanskrit day</li> 
                            <li  className='mb-2'  >          Foundation day</li> 
                        </ul>
                        <ul className='col-3' >  
                            
                            <li  className='mb-2'  > Shivratri</li> 
                            <li  className='mb-2'  >  Death anniversary of Shri Shraddhanath Ji Maharaj</li> 
                            <li  className='mb-2'  >  guru purnima</li> 
                            <li  className='mb-2'  >   Ram Navami</li> 
                            <li  className='mb-2'  >   krishna janmashtami</li> 
                        </ul>
                    </div>


                    <div className='mt-5 mb-5' >
                    <h6 className='text-center' >
                        <b>''Kakachesta bako dhyanam dog sleep tathaiva cha <br/>alpahari grihatyagi vidyarthi pancha lakshanam.''</b>
                    </h6>
                    </div>


                </div>


                   
                    





                </section>





             





                <section id="portfolio" class="portfolio section bg-color">
                    <div class="container section-title">
                        <h2 class="text-white mb-0">The Photo Gallery</h2>
                    </div>
                    <div class="container">
                    <PortfolioGallery />
                    </div>
                </section>
            </main>

            <footer id="footer" class="footer">
                <div class="container footer-top">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 text-center">
                            <img src="assets/img/footer_img.svg" class="img-fluid" alt="" />
                            <h4>Shri Shraddhanathji Maharaj’s Ashram <br /> Station Road-Laxmangarh, (Sikar)</h4>
                            <p>Phone : <a href="tel:9887875151">+91-9887875151</a></p>
                            <p>Email : <a href="mailto:sarthak@appinop.com">sarthak@appinop.com</a></p>
                            <div class="social-links d-flex justify-content-center mt-4">
                                <a href="https://www.youtube.com/@shrishraddhanathjimaharajk7485" target="_blank"><i class="bi bi-youtube"></i></a>
                                <a href="https://www.facebook.com/people/Shri-Shraddha-Nathji-Maharaj-Ka-AshramLachhmangarhSikar/100069003048239/" target="_blank"><i class="bi bi-facebook"></i></a>
                                <a href="https://www.instagram.com/shrishraddhanathji/" target="_blank"><i class="bi bi-instagram"></i></a>
                                <a href="https://api.whatsapp.com/send?phone=919887875151&text=Hello" target="_blank"><i class="bi bi-whatsapp"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright text-center mt-4">
                    <div class="container">
                        <p>Copyright 2011 Shree Nath Ji’s Ashram. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center">
                <i class="bi bi-arrow-up-short"></i>
            </a>



        </>
    )
}

export default SanskritVidyapeeth
