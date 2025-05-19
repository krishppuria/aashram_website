
import React, { useEffect } from 'react';
import PortfolioGallery from '../PortfolioGallery';

const ShriShraddhanathji = () => {


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
                                <li><a  class="active" href="/shri_shraddhanathji"> Shri Shraddhanath ji </a></li>
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
                    <img src="assets/img/trust_main_img.png" class="img-fluid" alt="" />
                </section>
                <section class="sub_hero" >
                    <div class="container" >
                        <img src="assets/img/subhero-text.svg" class="img-fluid w-100" alt="" />
                    </div>
                </section>
                <section id="about" class="about section pb-0 ">
                    <div class="container section-title" >
                        <h2> <span class="description-title">  Shrinathji Maharaj's Ashram, Laxmangarh - Shri Shraddhanathji Maharaj's personality
                        </span></h2> 
                    </div> 
                </section>
                <section id="Position_sec" class="about section  ">
                    <div class="container  " > 
                        <div class="row g-4 align-items ">
                            <div class="col-xl-5 col-md-5" data-aos-delay="100">
                                <img src="assets/img/shri_shraddhanath_ji.png" alt="" class="img-fluid ms-md-auto" />
                            </div>
                            <div class="col-xl-7 col-md-7 " data-aos-delay="100"> 
                                 <p  className=''  >The symbol of renunciation in Indian culture is the garish clothes, the shapely dark body, the pleasant and gentle facial expression, the most compassionate expression in the slightly bloodshot eyes, the happy Prashant Anand idol. . Whoever came in contact with Pujya Babaji Maharaj, even today feels that Babaji Maharaj has had infinite mercy on me, He has been loving me the most. Whoever has benefited from your satsang even once, should not remain untouched by your supernatural love. In this direction, the poor, the rich, the educated, the uneducated, the young, the old have all felt the same, everyone has the same belief that there has been a great mercy on me. I have a lot of love. Shri Shraddhanath Ji Maharaj's personality was so free and devoted to humanity that there was no hiddenness, alienation or discrimination in him. This equanimity of self-possessed great men is their greatness. It is certain that the infinite cannot be measured by the finite.</p>
                                 <p>
                                 Understanding the divine and supernatural personality of Babaji Maharaj is not an easy task. Babaji Maharaj was a perfect man in life. His character is a beacon of ideals and values. He had such a peculiar charm that whoever came to him would bow down and all his doubts would be removed. Babaji Maharaj's proximity was a source of self-soothing and new refreshment. Your voice was so smooth and melodious that the thirst of the people was understood automatically. There is an extraordinary richness of ease, seriousness, humor and humor in your statements. In simple language, there was also rationality and practical explanation of knowledge. There was also the solution of doubts in simple things and also the guidance of mundane things full of intimacy. You never used harsh or bitter words for anyone, because you believed that doing so would soften your speech. Your smooth speech was characterized by simplicity, ease and conciseness.
                                 </p>
                                 <p>
                                 Explaining the esoteric subjects of knowledge, yoga-sadhana and adhyatya in easy, simple language with simple examples was your unique characteristic. In your speech there was the incoherence and ingenuity of the folk language. All the references, metaphors and images were connected to folk life.
                                 </p>
                                 <p>
                                 Babaji Maharaj's specialty was to present his point in clear words and in a concise form. He used to explain only the practical aspects of spirituality to the common people in a direct and simple manner. Babaji Maharaj's memory was extraordinary. Babaji Maharaj is instantly recognized by a person who meets and sees him once.
                                 </p>
                            </div>                            
                         </div>
                    </div> 
                </section>
                <section class="about section ">
                    <div class="fe_title">
                        <div class="container">
                            <p className='text-white' >Babaji Maharaj's great virtue was to maintain equality in practice. Babaji Maharaj used to say, Sadhu should be kept equal.</p>
                            <p className='text-white'><small>This verse of Gita was the ideal of Babaji Maharaj-</small></p>
                            <h4 className='text-white'>" Suhrinmitraryudasinmadhyastha masatyabandhushu.<br/>Sadhushwapi cha papeshu sambuddhirvisishyate.. "</h4>
                        </div>
                    </div>
                </section>
                <section id="Position_sec2" class="about section  bg-gray ">
                    <div class="container  " > 
                        <div class="row g-4   ">
                            <div class="col-xl-7 col-md-7 " data-aos-delay="100"> 
                                 <p  className='text-='  >Babaji Maharaj explains the terms 'Samadrishti' and 'Samavrti' very precisely. As Babaji Maharaj used to say, he should see himself as he is and act accordingly. At the same time, the ideal of 'Atmavat Sarvabhuteshu' is embedded in your behavior. Babaji Maharaj believed that everyone is the child of God, so it is narrow minded to discriminate on the basis of wealth, caste or any other basis.</p>
                                 <p>Babaji Maharaj was fair and impartial. To tell the truth in clear words was the greatness of Babaji Maharaj's character. Babaji Maharaj was a man of strong intellect, policy-master and sincere heart. Those who were in close contact with Babaji Maharaj were well aware of Babaji Maharaj's purity of heart, sincerity and deep intimacy.</p>
                            </div> 
                            <div class="col-xl-5 col-md-5" data-aos-delay="100">
                                <img src="assets/img/maharaj_explain.png" alt="" class="img-fluid ms-md-auto" />
                            </div>                           
                         </div>
                    </div> 
                </section>
                <section id="Position_sec3" class=" pt-0 section ">
                    <div class="container section-title"><h2 class="text-white mb-0"> LOVE YOGA  </h2></div>
                    <div class="container "> 
                        <div class="row g-4  ">
                            <div class="col-xl-5 col-md-5" data-aos-delay="100">
                                <img src="assets/img/love_yoga.png" alt="" class="img-fluid ms-md-auto" />
                            </div>
                            <div class="col-xl-7 col-md-7 " data-aos-delay="100">
                                 <p  className='text'  >Pujya Babaji Maharaj himself was a form of love, he was loving. Right from your childhood, you had unwavering devotion, profound love and firm faith towards Shri Amritnathji Maharaj in your heart. Then moving forward, it was like a flood of love came in your life. The light of love always shines on your face. You are always overflowing with spiritual love in that divine supernatural love, whoever comes in front of you with reverence, love starts showering on him. Your love was the love of the soul. You rose above the body. Worldly love wants reciprocation, but spiritual love is a matter of joy in which joy is joy with a sublime sense of well-being, that is why whenever I saw you, I found you joyful.
                                 </p>
                                 <p  className='text'  >
                                 Your presence was supposed to relieve one's worldly worries, that's why as soon as one came to your satsang he started to forget worldly worries and experience bliss. A sense of peace begins to flow in the heart of the devotee who gets the benefit of satsang. He finds the whole environment loving.
                                 </p> 
                                 <p  className='text'  >
                                 Once, on the occasion of a satsang, a devotee asked Babaji Maharaj that what is the essence of this life? On this Babaji said - 'The essence of this life is love. The ease that is seen in this life is the result of love. Life without love is dull, death is like death; knowledge, meditation, hymns and yoga are all done by love. If there is no love then there is nothing in this world. Love is the joy of life.'
                                 </p>
                                 <p>
                                 Love is the form of joy. It is love that coordinates everything. So Babaji Maharaj used to say, love yourself, love each other and love God. In these three senses, he provided the perfection of love.
                                 </p>
                                 <p>In fact, Babaji Maharaj's life became synonymous with love. Babaji Maharaj's love was the love of soul. They rise above the body and give primacy to the love of the soul. All souls are one, so love can be expressed towards all. Babaji Maharaj's love was limitless, in the words of Kavindra Rabindra - "Samsare te aur jahara hai" means, O Lord, the situation of this world is completely opposite. He binds whomever he loves. It is only Your love that frees from these bonds. Such was the liberating love of Babaji Maharaj.</p>
                                 <p>Firm determination and faith not only advance the seeker on his path, but also bring success. Babaji Maharaj had both these qualities. They used to say that we are praying to the power; Is that power not listening to this prayer? Then he said, 'Of course I am listening.' The same power is also listening to prayers and driving storms and storms, so there is no need to be unstable and agitated. She will solve such an awkward situation herself.</p>

                            </div>  
                            <div className='col-lg-12' >
                                <img src="assets/img/all_img.png" alt="" class="my-4 img-fluid ms-md-auto" />

                                <p className='text-center' >
                                If during prayer the adverse nature of nature causes disruption in prayer, then one should remain seated in prayer with firm determination and get up only after praying. Babaji Maharaj used to say that the name of determination is Bhakti and the name of determination is yoga. Meera had determination, Prahlad had determination. No matter how many adverse situations tried to disturb him, but he did not waver from his sadhana, that's why he used to say, "You should never give up your determination." There is strength in determination and this strength alone resolves all calamities.
                                </p>
                                <p className='text-center' >The basic idea of ​​Babaji Maharaj was that love is the basis of this creation. This world is run by love. Pure love is of the soul and is above physical or carnal love. There is only joy in it. Real love doesn't come with love. Like love made and then broken, it is fake and fake love. Because love does not break. Just as water in water unites and becomes one, so pure love unites, not breaks.</p>
                                <p className='text-center' >When the ashram was established, after that he continued to lavish love on his servants, devotees and pilgrims. There was no obligation for anyone to come to the ashram. The ashram was for everyone and everything. He was just sitting on a hard throne and giving darshan. If you have never been troubled, you have never given up patience and why do you give up? There was only true love in his heart - what did only humans take. This is the reason that even strangers and acquaintances do not have any difficulty, nor do they have to wait for anyone. There was a steady stream of visitors, the room was packed with people and Babaji said, 'Ab leo Prasad', blessing the people affectionately, he took his leave.</p>
                                <p className='text-center' >Babaji Maharaj was very knowledgeable and experienced. Visiting and benefiting from the satsang of the great sages of the country was the greatest achievement of Babaji Maharaj's life, which is why his satsang was inspiring, enlightening and paving the way for life struggles. Babaji Maharaj had immense reverence for saints and saints from his childhood and this reverence was enriched by the fruit of 'nath' in his later life. Babaji Maharaj reawakened the memory of Shri Amritnathji Maharaj in Shekhawati district and drew the attention of the intelligentsia towards the Nath community, which was suffering from many types of misconceptions and neglect. This is the reason why educated intellectuals and officials are more among your servants today.</p>
                                <p className='text-center' >
                                Babaji Maharaj was generous, equanimous and broad-minded. Babaji Maharaj had personal contact with Saints and Mahatmas of various sects and Babaji Maharaj also got personal benefits by being in their presence. The limitations of any particular sect never became an obstacle for Babaji Maharaj. Babaji Maharaj had equal affection and respect for saints and saints of all sects. Even in the Ashram there was no discrimination from the point of view of sect. Sadhu of any sect is welcome. It seems that even though he was initiated in the Nath sect, he introduced a liberal attitude towards other sects and religions.
                                </p>
                            </div>                          
                         </div>
                    </div> 
                </section> 
                <section id="Position_sec4" class="about section  bg-color "> 
                    <div class="container section-title text-white"><h2 class="text-white mb-0">   Recreational tours and folk education  </h2></div>
                    <div class="container  " > 
                        <div class="row g-4 ">
                            <div class="col-xl-5 col-md-5" data-aos-delay="100">
                                <img src="assets/img/tours.png" alt="" class="img-fluid ms-md-auto" />
                            </div>
                            <div class="col-xl-7 col-md-7 " data-aos-delay="100"> 
                                 <p  className='text-white'  >Raman-bhraman was not only Babaji Maharaj's nature but it is considered to be the basic instinct of a sadhu. Babaji Maharaj did a lot of sightseeing, traveled to all the important places of the country and met thousands of sadhus and saints. Haridwar was Babaji Maharaj's favorite place, where he visited many times. Apart from places of pilgrimage and deserts, Babaji Maharaj has been traveling in villages and villages of Shekhawati district and has been discussing his ideals and teachings. Babaji Maharaj was a supporter of Indian culture. Babaji Maharaj took the noble life values ​​of culture in his life. At the time of Babaji Maharaj, educated young men from here came under the influence of western culture and started criticizing Indian culture. The mentality of imitating this western civilization and culture was completely against religion and spirituality. Therefore, Babaji Maharaj attracted the educated class with his ideas. He went to schools and hostels to meet the youth and among them, spirituality and their culture</p>
                            </div>                            
                         </div>
                         <p className='text-center text-white my-4' >Created a sense of attachment and connection. He continued to inspire the young generation to stay away from intoxicants and avoid non-food items, the result of which is that today there are thousands of young people who are growing on the right path by benefiting from the teachings of Babaji Maharaj and their lives are simple. And sattvic thoughts appear. From the very beginning, Babaji Maharaj planted the seeds of such rituals in this educated youth and saved people from going astray. This contribution of Babaji Maharaj in this field is unforgettable.</p>
                         <div class="row g-4 ">
                            <div class="col-xl-7 col-md-7 " data-aos-delay="100"> 
                                 <p  className='text-white'  >Babaji Maharaj, who had a wonderful knowledge of folk behavior, used to give equal advice to people to solve their family and social problems. Keeping in mind the problem of broken families, you emphasized on family spirit and inspired the younger generation to serve their parents. Referring to the transitional situation after independence, Maharaj said that it is very important to protect the family and society at this time. It seems that at this time a blind spot has arisen which is destroying our original ideals and we are drifting in that blind spot without direction. Even in this darkness, some people feel good about flying. So many are waiting for the end of blindness, they are saddened by this situation when this situation will end.</p>
                                 <p className='text-white'  >
                                 Emphasis should be placed on character building in the young generation - this was the principle of Babaji Maharaj. They used to say that character is a pervasive word. In which everything came. In his view, virtue is synonymous with character. No one can be uplifted by denying character. If you want to move forward, provide something and give something to the society, it is necessary to become a character. Character is powerful and effective. Babaji Maharaj emphasized this character sadhana with his simple and practical teachings. He considered character to be a powerful force. The effect any person has on us is the effect of his character, even if any kind of words are used to explain it.
                                 </p>
                                 <p className='text-white'  >
                                 Babaji Maharaj's deep devotion to country and culture has been a source of inspiration for the youth. The sense of saintly service was awakened in the people of this area by your virtue and purity and purity appeared in the social environment with the harmony of dharma-karma. Your gentle demeanor, love and deep social studies attracted people towards you.
                                 </p>
                            </div> 
                            <div class="col-xl-5 col-md-5" data-aos-delay="100">
                                <img src="assets/img/knowledge.png" alt="" class="img-fluid ms-md-auto" />
                            </div>                           
                         </div> 
                         <p className='text-center text-white my-4' >In Ramanakal, when you discuss morality and knowledge of practical life, you give special emphasis on three things. First, faith and obedience to Sadguru, second, prayer and worship according to the daily rules of Ishtadev, third, love and walk on the right path.</p>
                         <div class="row g-4 ">
                            <div class="col-xl-7 col-md-7 " data-aos-delay="100"> 
                                 <p  className='text-white'  >From an ideological point of view, Babaji Maharaj was a wonderful confluence of ancient and archaic. He was also a fan and supporter of Indian culture and ideals and used to present his ideas in a scientific context as well. From the point of view of spiritual and cultural values, Babaji Maharaj was a wonderful confluence of ancient and ancient China. He was also a fan and supporter of Indian culture and ideals and used to present his ideas in a scientific context as well. From the point of view of spiritual and cultural values, Babaji Maharaj's thinking belonged to the era of Gorakhnathji, but in scientific thinking, he was associated with the twentieth century. Babaji Maharaj's mind was always open to new ideas. Instead of conservatism, Babaji Maharaj thought of every problem from a scientific point of view. Babaji Maharaj was progressive in his ideas. Sometimes they used to say to newspaper writers, 'Write such things in the newspapers that we will learn knowledge and science from the West, we will also bring money, but we will not bring their behavior to us. This is causing a big mess. Babaji Maharaj believed that material happiness came to people along with spiritual awareness because he was a supporter of poor people and in a sense he was more supportive of them. He saw more simplicity and sincerity in the poor.'
                                 </p>
                            </div> 
                            <div class="col-xl-5 col-md-5" data-aos-delay="100">
                                <img src="assets/img/ideological.png" alt="" class="img-fluid ms-md-auto" />
                            </div>                           
                         </div> 
                         
                         <p className='text-center text-white my-4' >He believed that the work-oriented life is an essential part of human effort. This is the reason why he did not like a thief or a person without karma. They did not even want to keep such a person in their contact. Babaji Maharaj used to say that I don't like passive people.</p>
                         
                         <p className='text-center text-white my-4' >Babaji Maharaj used to constantly tell his servants that wherever you work, duty and honesty should be the first qualities of a person.</p>
                    </div> 
                </section>  

                
                <section id="Position_sec3" class=" pt-0 section ">
                    <div class="container section-title"><h2 class="text-white mb-0">   TO Remain Cheerful  </h2></div>
                    <div class="container "> 
                        <div class="row g-4  ">
                            <div class="col-xl-5 col-md-5" data-aos-delay="100">
                                <img src="assets/img/remain_cheerful.png" alt="" class="img-fluid ms-md-auto" />
                            </div>
                            <div class="col-xl-7 col-md-7 " data-aos-delay="100">
                                 <p  className='text'  >Babaji Maharaj was a repository of virtues. The quality that people were most attracted to him was his always happy nature. He was always happy. The image of Anand was overshadowed on his brown face. Anand kept falling from calm and pure eyes. Even though he was distraught, he did not remain indifferent. Even though he was celibate, he did not neglect anyone. They look at each person with love, they show interest in each one. He asked everyone about happiness and sadness. He didn't hate anyone, he didn't hate anyone. There was a wonderful harmony in Babaji Maharaj's life. He had deep affection in his heart for only animals. They rose above hiding and alienation. His heart was simple, sincere and pure like a child. This is the reason why the devotees used to come towards him and his presence for a few moments became an unforgettable memory of his life. Then wherever he went, discussed and when the subject of Laxmangarh came up, he felt proud because of the moments spent in the presence of Babaji Maharaj.
                                 </p>
                                 <p  className='text'  >
                                 Often in religious places, ashrams and monasteries, rich and learned people are more respected. Among them, the first place belongs to the rich, because in such places there is a competition for display of splendor and display of knowledge.
                                 </p> 
                                 <p  className='text'  >
                                 Therefore, the poor, educated and well-to-do people are not taken care of. But the Ashram of Shri Shraddhanathji Maharaj of Lakshmangarh, built on the merits of a self-possessed recluse-ascetic saint, is unique in itself. Where the poor and the rich, the educated and the learned have been coming, but in Babaji Maharaj, everyone was given equal respect. In his eyes, farmers, laborers and scholars were all equal. If you think a little more deeply from this point of view, the rich did not have a special place in this ashram. All this is indicative of Babaji Maharaj's great sacrifice and easy love for human beings. 
                                 </p>
                                 <p>
                                 Babaji Maharaj's equanimity was a paramount quality in itself. In his eyes, the greatest seth-moneylender and a poor man, both were equal. Both of them got equal love and respect, this was the same vision of Babaji Maharaj. Babaji Maharaj's personality was huge and great, so whoever came in front of him, whether he was a rich man, a high official or a high class scholar, he felt dwarfed by himself. But Babaji Maharaj gave equal love to everyone. Your refined public manners were exemplary.</p>

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

export default ShriShraddhanathji
