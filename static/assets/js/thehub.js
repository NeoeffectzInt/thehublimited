// styling login btn
let nav_links = document.getElementsByClassName("nav-links");
let bg_style = document.getElementsByClassName("styler-bg");

for ( let i = 0; i < nav_links.length; i++ ) {

    nav_links[i].addEventListener( "mouseover", function() {
        console.log("abc")
        add_bg(bg_style[i])
    });
    
    nav_links[i].addEventListener( "mouseout", function() {
        remove_bg(bg_style[i])
    });

}

function add_bg(i){
    for ( let c = 0; c < i.classList.length; c++ ){
        if(i.classList[c] === "bg-nav-out"){
            i.classList.remove("bg-nav-out")
        }
        else{
            i.classList.add("bg-nav")
        }
    }

    
}

function remove_bg(i){
    i.classList.remove("bg-nav")
    i.classList.add("bg-nav-out")
    console.log(i.classList)
}


// how it works section on other pages
let hiw_nav = document.getElementsByClassName("hiw")[0];
let hiw_parent = document.getElementsByClassName("works-parent")[0]
let hiw_services = document.getElementsByClassName("hiw-services")[0]
let hiw_close = document.getElementsByClassName("hiw-close")[0]


if (window.location.href.split("/")[3].includes("about")) {
    hiw_nav.addEventListener("click", function(){
        how_modal();
    })
}else if (window.location.href.split("/")[3].includes("login")) {
    hiw_nav.addEventListener("click", function(){
        how_modal();
    })
}else if (window.location.href.split("/")[3].includes("signin")) {
    hiw_nav.addEventListener("click", function(){
        how_modal();
    })
}else if (window.location.href.split("/")[3].includes("register")) {
    hiw_nav.addEventListener("click", function(){
        how_modal();
    })
}else if (window.location.href.split("/")[3].includes("order-fullfilment")) {
    hiw_nav.addEventListener("click", function(){
        how_modal();
    })
}else if (window.location.href.split("/")[3].includes("global-product-distribution")) {
    hiw_nav.addEventListener("click", function(){
        how_modal();
    })
}else if (window.location.href.split("/")[3].includes("flexible-storage")) {
    hiw_nav.addEventListener("click", function(){
        how_modal();
    })
}else if (window.location.href.split("/")[3].includes("consolidation")) {
    hiw_nav.addEventListener("click", function(){
        how_modal();
    })
}else if (window.location.href.split("/")[3].includes("consulting")) {
    hiw_nav.addEventListener("click", function(){
        how_modal();
    })
}
function how_modal(){
    hiw_close.addEventListener("click", function(){
        hiw_services.style.transitionDelay = 0;
        hiw_services.style.transform = "translateY(-100vw)";

        hiw_parent.style.transitionDelay = ".5s";
        hiw_parent.style.height = 0;
    })
    

    hiw_parent.style.display = "grid";
    hiw_services.style.transitionDelay = ".2s";
    hiw_parent.style.transitionDelay = "0";
    hiw_parent.style.transition = ".2s";
    hiw_parent.style.height = "100vh";
    hiw_services.style.transform = "translateY(0)";

}

// about us card func 

if (window.location.href.split("/").includes("about")) {
    


    founders_dictionary = {
        "Pastor Ituah Ighodaro":{
            "image":"img/about1.png",
            "label": "Non-Executive Director(Chairman)",
            "text": `
                Ituah Ighodalo is a Corporate Business Leader with an extensive track record in building and sustaining major establishments and institutions.
                
                <br><br>He possesses over 40 years' experience in Auditing, Accounting, Taxation, Human resources and Financial Advisory Services.
                
                <br><br>Ituah is a fellow of the Institute of Chartered Accountants of Nigeria (ICAN). A Fellow of the Chartered Institute of Taxation Nigeria, a member of the Institute of Management, a member of the American Society of Industrial Security and a member of the American Instituteo f Management.
                
                <br><br>He sits on the board of several corporate, charitable organizations and NGOs, as Chairman and Director.
                
                <br><br>He also Serves as the Senior Pastor,Trinity House.
            `
        },

        "Victor Ukwat":{
            "image":"img/about2.png",
            "label": "Co-Founder | CEO",
            "text": `
                Victor Ukwat is a seasoned business manager with an extensive corporate experience of over 30 years. His experience spans across Sales, Operations, Business Development, Marketing andStrategy in the Logistics Industry where he spent 25 years at Red Star ExpressPLC. He is also a trained Leadership and Performance coach.

                <br><br>He is an alumnus of SeniorStrategy, Management and Leadership Programmes from top global institutions, notably the Columbia Business School in New York, USA; the Schulich BusinessSchool in Toronto, Canada; and the SAID Business School in Oxford, England, where he obtained certifications in High-Impact Leadership, StrategicLeadership, and High-Performance Leadership respectively. He also attended the prestigious Harvard Business School (USA), and the IESE Business School (Spain)where he obtained certifications in Building New Businesses In EstablishedCompanies and Entrepreneurship.

                <br><br>He holds a Bachelor's degree in Science (B.Sc) from the University of Calabar, a Masters in Science from the University of Ibadan and a Masters in Business Administration from the Lagos Business School (LBS). He is also a member of the Institute of Directors, Nigeria (IOD) and a Fellow of the National Institute of Marketing of Nigeria (NIMN). Victor Ukwat is a trained Executive Coach from Hult Ashridge, UK.
            `
        },

        "Jayson Oyarekhua":{
            "image":"img/about-us-3.png",
            "label": "Co-Founder | Executuve Director",
            "text": `
                Jayson Oyarekhua is a highly experienced Business Leader with a background in Management, Logistics, e-commerce, and Technology | Enterprise Solutions. He has held multiple cross-functional professional positions in Corporate Leadership, Operations, Sales and Strategy, e-commerce, and Technology. He has designed and implemented product distribution solutions with a focus on e-commerce and end-to-end order fulfilment.
                
                <br><br>As Chief Operating Officer at FedEx Red Star Express Nigeria, Jayson was responsible for overseeing all aspects of the company's sales, operations; including Transportation Management, Order Fulfilment, and Customer Experience Management. He is a strategic and analytical thinker with excellent communication and transformational leadership skills. He is also committed to staying up to date with the latest trends and developments in the industry.
                
                <br><br>In addition to his professional experience, Jayson holds a Masters of Business Administration (MBA) from the Ambrose Alli University, Ekpoma and is an alumnus of Leadership, Management and Strategic programs from SAID Business School in Oxford (UK), Wharton Business School (USA), University of California Irvine, USA, Lagos Business School (LBS) in Lagos, and FedEx Purple Academy in Dubai (UAE). He has also undergone various Logistics programs from the University of Westminster (UK).
            `
        },

        "Udeme Ufot":{
            "image":"img/about-us-4.png",
            "label": "Non-Executive Director",
            "text": `
                Udeme Ufot stands as one of Africa's prominent corporate leaders; with about 4 decades in advertising practice, over31 of those years leading SO&U.

                <br><br>Over the course of his career, he has been directly involved in establishing some of Nigeria's biggest brands and establishments. He sits on the board of several organizations; including the Nigerian Economic Summit Group (NESG),Ibom Hotel & Resorts, Special Olympics Nigeria and LEAP Africa.
                
                <br><br>His contribution to the advertising and marketing industry is evidenced by the several roles he has held; including being Vice-President and President of the Association of AdvertisingPractitioners Council of Nigeria (APCON), and Group Managing Director SO&U,a leading marketing/advertising company that he co-founded in 1990.
                
                <br><br>Udeme Holds a B.A in Industrial Design, a certification in Management from the Swedish Institute of Management and a Chief Executive Program Certification from the Lagos Business School(LBS). He is also an awardee of the Member of the Order of the Federal Republic of Nigeria (MFR).
            `
        },

        "Dr Jayne Shoboiki":{
            "image":"img/aboutus-5.png",
            "label": "Non-Executive Director",
            "text": `
                Dr.Mrs. Jayne Shoboiki is a seasoned business leader and strategic thinker with over 3 decades of vast Professional experience and educational achievements.

                <br><br>Within this period she has ventured and excelled in the Public Sector, as an Administrator, she is a lawyer, a passionate and successful Real Estate Magnate.
                
                <br><br>Dr. Jayne has a Masters degree in International Studies and also a Doctorate degree in International Relations. She holds numerous certifications, amongst which are; a certificate in Leadership, Policy and Strategic Studies from National Institute of Policy and Strategic Studies (NIPSS, Jos), a certificate in “Leadership and Character in Uncertain times” and a certificate in “Women Leading Change”She is a member of the Nigerian and International Bar Association, a Fellow of the Institute of Professional Managers and Administrators, Chartered Institute of Public Management and the Institute of Corporate administrators of Nigeria.
                
                <br><br>She is an Alumnus of the universities of Jos, Calabar and Abuja in Nigeria. University of Reading, United Kingdom and the Harvard Kennedy School, United states of America.
            `
        },

        "Olatunji Mayaki":{
            "image":"img/about-us-6.png",
            "label": "Non-Executive Director",
            "text": `
                Olatunji Mayaki is a highly accomplished professional with extensive experience in commercial law, asset management, and the energy sector. He holds degrees in Social Sciences and Law and began his legal career at the prestigious law firm Ajumogobia, Okeke Oyebode & Aluko. Throughout his career, he has held various leadership positions and contributed significantly to the success of renowned organizations.
                
                <br><br>Mr. Mayaki joined Shell Nigeria in 1996 as a Legal Adviser, specializing in Contracting & Projects. He played a key role in the establishment of Shell Exploration & Production Africa Limited, serving as its pioneer Legal Adviser & Company Secretary. In 2006, he relocated to The Netherlands as Senior Legal Counsel, providing support for Engineering Procurement & Construction (EPC) Contracts within Shell's global Gas & Power Business. During this time, he managed critical projects across Africa, China, Western Europe, and South America.
                
                <br><br>In 2009, Mr. Mayaki returned to Nigeria to assume the position of Country Head of Legal & Group Company Secretary for all Shell Companies in the country. His expertise and leadership were instrumental in ensuring compliance and driving legal excellence within the organization.In 2012, he joined Addax Petroleum Nigeria as Deputy Managing Director, overseeing key areas such as External & Government Affairs, Regulatory Affairs, Human Resources & Admin, Legal, Community Relations, Security, and Supply Chain Management. Mr. Mayaki retired voluntarily from this role in January 2022.
                
                <br><br>Throughout his career, Mr. Mayaki has pursued continuous personal and professional development. He has participated in various renowned business and leadership programs at prestigious institutions such as Harvard, IMD, and INSEAD.Currently, Mr. Mayaki serves on the Board of Sterling Bank Plc, where he brings his valuable insights and expertise to contribute to the bank's strategic direction. He also holds the position of Chairman of the Board of CFG Africa Ltd, a role in which he guides the company towards achieving its objectives.
                
                <br><br>In addition to his corporate endeavors, Mr. Mayaki is actively involved in philanthropic activities. He is a member of the Governing Council of Chestrad, a UK-based NGO and charitable organization. Through this platform, he has spearheaded the establishment of several programs in Nigeria to support health systems, social development, and the empowerment of women and the girl child.Mr. Mayaki's rich background, leadership acumen, and commitment to making a positive impact have positioned him as a highly respected professional in both the corporate and social spheres.
            `
        },

        "Nuratu Ajoke Jimoh Batagarawa":{
            "image":"img/exec-7.png",
            "label": "Non-Executive Director",
            "text": `
                Nuratu Ajoke Jimoh Batagarawa, born on March 8, 1961, in Jos, Plateau State, hails from Kwara State. Her parents, Alhaji Muhammadu Jimoh Aweda Oladimeji and Hajia Clara Nusiratu Jimoh Oladimeji, are both remembered with blessings.

                <br><br>Her educational journey began at St Luke's Primary School in Jos, followed by attendance at the prestigious St. Louis College, Jos. In 1977, Mrs. Nuratu Jimoh Batagarawa gained admission to Ahmadu Bello University, Zaria, graduating in 1981 with a B.Sc in Political Science. Subsequently, in 1982, she completed a Master's Degree in International Politics at the University of Lancaster, United Kingdom.
                
                <br><br>Embarking on her career in April 1985, she joined the National Institute for Policy & Strategic Studies, Kuru, Nigeria (NIPSS), as a Junior Research Fellow. Simultaneously, she contributed to Presidential Committees on Brain Drain and Restoration of Relationship with post-apartheid South Africa. In 1992, she assumed the role of Executive Director at the Federal Mortgage Bank of Nigeria until March 2003, transitioning to the Federal Civil Service as Deputy Director.
                
                <br><br>Mrs. Batagarawa's tenure included noteworthy positions such as Director in the Ministry of Police Affairs and Permanent Secretary in the Office of the Head of the Civil Service of the Federation, where she initiated the Civil Service Owner Occupier Housing Scheme for Federal Civil Servants. She further made history as the first female Permanent Secretary at the Ministry of Defence, serving until October 9, 2017.
                
                <br><br>Throughout her distinguished career, she attended various Leadership and Management courses, both domestically and internationally. Her expertise and innovative approach left an indelible mark on the organizations she served.
                
                <br><br>Retiring from the Federal Civil Service on April 4, 2020, after 35 meritorious years, Mrs. Nuratu J. Batagarawa continues her impactful contributions. Currently, she serves as an independent non-executive Director on the board of Lotus Bank and actively engages in estate management business. Married to Mallam Lawal Tukur Batagarawa, she is a proud mother and enjoys the enriching pursuit of reading.
            `
        },

        "Gbenga Akande":{
            "image":"img/executive-dir-1.png",
            "label": "Chief Technology Officer",
            "text": ``
        },

        "Cyril Chukwujekwe":{
            "image":"img/exec2.png",
            "label": "Chief Financial Officer",
            "text": ``
        },

        "Temitope Sanni":{
            "image":"img/exec1.png",
            "label": "Head, National Sales",
            "text": ``
        },

        "Elizabeth Onwuka":{
            "image":"img/exec3.png",
            "label": "Head, HR & Admin",
            "text": ``
        },
    }

    let flip_cards = document.getElementsByClassName("flip-card-bod");

    let founders_about = document.getElementsByClassName("founders-about")[0];
    let founders_description = document.getElementsByClassName("ab-desc")[0];

    let about_card = document.getElementsByClassName("about-card")[0];
    let founders_about_close = document.getElementsByClassName("founders-about-close")[0];


    for (let i = 0; i < flip_cards.length; i++) {
        flip_cards[i].addEventListener("click", function(){
            document.getElementsByClassName("ab-img")[0].style.display = "grid"
            document.getElementsByClassName("ceo-social-icons")[0].style.display = "grid"
            
            about_card.classList.remove("terms")
            about_card.style.transitionDelay = ".2s";
            founders_about.style.transitionDelay = "0";
            founders_about.style.transition = ".2s";
            founders_about.style.height = "100vh";
            // setting card content.....
            let ceo_name = flip_cards[i].children[0].children[1].children[0].innerHTML;
            
            ceo_data = founders_dictionary[ceo_name]
            console.log(founders_description)
            founders_description.children[0].innerHTML = ceo_name;
            founders_description.children[1].innerHTML = ceo_data["label"];
            founders_description.children[2].innerHTML = ceo_data["text"];
            // funtionality for executives without description
            if (founders_description.children[2].innerHTML.length < 5) {
                document.getElementsByClassName("modal-about")[0].style.gridTemplateRows = "max-content max-content max-content max-content";
            }else if(founders_description.children[2].innerHTML.length > 5){
                founders_description.style.gridTemplateRows = "max-content max-content 268px max-content";
            }
            founders_description.previousElementSibling.children[0].setAttribute("src", `/static/assets/${ceo_data["image"]}`)
            about_card.style.transform = "translateY(0)";

        })
        
    }

    founders_about_close.addEventListener("click", function(){
        about_card.style.transitionDelay = 0;
        about_card.style.transform = "translateY(-100vw)";

        founders_about.style.transitionDelay = ".5s";
        founders_about.style.height = 0;
    })

}

// nav function..........

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
let overlaysolmenu = document.getElementsByClassName("overlay-sol-menu")[0];
document.getElementsByClassName("overlay-solution")[0].addEventListener("click", function(){
    if ( overlaysolmenu.classList.contains("active-overlaysolmenu") ) {
        overlaysolmenu.classList.remove("active-overlaysolmenu");
    } else {
        overlaysolmenu.classList.add("active-overlaysolmenu");
    }
})

// homepage videos........

video_dictionary = {
    "video1":{"local":"videos/thl.mp4"},
    "video2":{"local":"videos/Thl2.mp4"},
    "video3":{"local":"videos/Thl3.mp4"},
}

if (window.location.href.split("/")[3] === "" ){
    
    let service_video = document.getElementsByClassName("service-video")[0];

    let video_cards = document.getElementsByClassName("card-image");

    let video_link = document.getElementsByClassName("ab-img")[0];
    let video_card = document.getElementsByClassName("video-card")[0];
    let service_video_close = document.getElementsByClassName("service-video-close")[0];


    for (let i = 0; i < video_cards.length; i++) {
        video_cards[i].addEventListener("click", function(){
            
            video_card.style.transitionDelay = ".2s";
            service_video.style.transitionDelay = "0";
            service_video.style.transition = ".2s";
            service_video.style.height = "100vh";
            // setting video link content.....
            let video_name = video_cards[i].children[1].getAttribute("data-videoLink").split("-");
            video_data = video_dictionary[video_name[0]][video_name[1]]

            if (video_name[1] === "online") {
                video_link.children[0].style.display = "block";
                video_link.children[1].style.display = "none";
                video_link.children[0].setAttribute("src", video_data)
            }else if( video_name[1] === "local" ){
                video_link.children[0].style.display = "none";
                video_link.children[1].style.display = "block";
                let final_src = '/static/assets/' + video_data;
                video_link.children[1].children[0].setAttribute("src", final_src);
                video_link.children[1].load()
            }
            

            video_card.style.transform = "translateY(0)";

        })
        
    }

    function controlVideo(vidFunc) {
        let iframe = video_link.children[0].contentWindow;
        
        iframe.postMessage(
            '{"event":"command","func":"' + vidFunc + '","args":""}',
            "*"
        );
        console.log(iframe.postMessage)
    }

    service_video_close.addEventListener("click", function(){
        controlVideo('pauseVideo');
        video_link.children[1].pause()
        video_card.style.transitionDelay = 0;
        video_card.style.transform = "translateY(-100vw)";

        service_video.style.transitionDelay = ".5s";
        service_video.style.height = 0;
    })

    //faq funtionality

    let faq_content = document.getElementsByClassName("faq-content")[0];
    let faq_group_item = document.getElementsByClassName("faq-group-item")
    
    for (let i = 0; i < faq_group_item.length; i++) {        
    
        faq_group_item[i].addEventListener("click", function(){
            let group_category = faq_group_item[i].innerHTML;
            let active_group_cat = document.getElementsByClassName("active-cat")[0];
            let active_group_item = document.getElementsByClassName("active-faq")[0];
            
            if (active_group_item.id === group_category) {
                // pass
            } else if(active_group_item.id !== group_category){
                active_group_cat.classList.remove("active-cat");
                active_group_item.classList.add("hide");
                active_group_item.classList.remove("active-faq", "show");
            
                let next_active_group_item = document.getElementById(`${group_category}`);
                let next_active_group_cat = document.getElementsByClassName(`${group_category}`)[0];
                next_active_group_cat.classList.add("active-cat");
                console.log(next_active_group_cat)
                next_active_group_item.classList.remove("hide");
                next_active_group_item.classList.add("show", "active-faq");
            }
        })
    }

    let faq_qstn = document.getElementsByClassName("faq-question");

    for (let i = 0; i < faq_qstn.length; i++) {
        faq_qstn[i].addEventListener("click", function(){
            
            if ( faq_qstn[i].children[0].checked === false ) {
                console.log(faq_qstn[i].children[3])
                faq_qstn[i].children[3].classList.add("panel-checked");
                check(faq_qstn[i].children[0])

            }else if( faq_qstn[i].children[0].checked === true ){
                faq_qstn[i].children[3].classList.remove("panel-checked");
                uncheck(faq_qstn[i].children[0])

            }
            
        })
        
    }

    function check(inpVar) {
        inpVar.checked = true;
    }
    
    function uncheck(inpVar) {
        inpVar.checked = false;
    }
    
    // form funtion
    
    // let form_button = document.getElementsByClassName("form-btn")[0];
    
    // form_button.addEventListener("click", function(e){
    //     let client_email = "gbenga.akande@thehubng.com"
    //     let user_name = document.getElementsByName("user_name")[0].value;
    //     let phone = document.getElementsByName("phone")[0].value;
    //     let email = document.getElementsByName("email")[0].value;
    //     let cartons = document.getElementsByName("cartons")[0].value;
    //     let message = document.getElementsByName("message")[0].value;
        
    //     form_button.setAttribute("href", `mailto:${client_email}?subject=${cartons}-${email}&body=NAME: ${user_name} %0D%0A%0D%0APHONE: ${phone}%0D%0A%0D%0A${message}`)
    //     user_name = "";
    //     phone = "";
    //     email = "";
    //     cartons = "";
    //     message = "";
        
        
    // })
    
    //how it works code
    let nav_link_works = document.getElementsByClassName("how_works")[0];
    nav_link_works.addEventListener("click", function(e){
        // e.preventDefault;
        let how_section = document.getElementsByClassName("homepage-services")[0];
        window.scrollTo({top: how_section.scrollHeight + 180, behavior: 'smooth'});
    })
    
    
}

 // footer links

footer_dictionary = {
    "Acceptable Products &amp; Use Policy":{
        "date": "29 January, 2024",
        "text": `
            

            The terms and conditions, privacy statement, acceptable products and use policy, disclaimer notices, and all agreements outlined here are applicable to the use of this website. In this context, the terms "Client," "You," and "Your" refer to the individual who logs in to this website and complies with the Company's terms and conditions. The terms "www.thehubng.com," "THL," "The Company," "Ourselves," "We," "Our," and "Us" refer to our Company. The terms "Party," "Parties," or "Us" collectively refer to both the Client and ourselves. The mentioned terminology or other words in the singular, plural, capitalization, and/or he/she or they are interchangeable and refer to the same entities.
            
            
            <br><br>
            The following policy outlines the guidelines for products eligible for fulfillment services ("Product Policy"). We reserve the right to modify the Product Policy at any time. By continuing to use the Services after a revised version of the Product Policy has been posted, you agree to comply with the latest version.
            <br><br>
            By utilizing our fulfillment services ("Services"), you agree to adhere to this Product Policy and comply with all applicable laws and regulations.
            The following products are strictly prohibited on thehubng.com:
            
            <li>
            Child exploitation: Products that exploit or abuse children, including images or depictions of child abuse or sexual abuse, or products that present children in a sexual manner.
            </li>
            <li>
            Hateful content: Products that promote violence against individuals based on race, ethnicity, color, national origin, religion, age, gender, sexual orientation, disability, medical condition, or veteran status.
            </li>
            <li>
            Intellectual property: Products that infringe upon the patent, copyright, trademark, or other intellectual property rights of others.
            </li>
            <li>
            Malware: Products that contain or are intended to transmit viruses or other malware, or are designed or intended to gain unauthorized access to, harm, or disrupt the data or operation of our or a third party's computing devices, networks, systems, infrastructure, or similar entities.
            </li>
            <li>
            Personal information: Products that contain personally identifiable information or confidential information, such as credit/debit card numbers, confidential national ID numbers, account passwords, medical records, employment records, or similar data, unless you have obtained prior written consent from the relevant authorized person.
            </li>
            <li>
            Restricted items: Products that are, or appear to be, restricted by law or regulation.

            </li>
            <li>Self-harm: Products that promote self-harm.</li>
            <li>Terrorist organizations: Products that imply or promote support, funding, or membership in a terrorist organization.</li>

            
            <br><br>
            
            We reserve the right, without notice, to remove any products, suspend, or terminate your account or access to the Services if you engage in activities that violate the essence or intent of this Product Policy, including activities beyond your use of the Services.
We have the right, but not the obligation, to monitor or investigate any products and your use of our Services at any time to ensure compliance with this Product Policy, our terms and conditions of service, or any other agreement governing your use of the Services. Our determination of whether a violation of this Product Policy has occurred will be final and binding. We retain full discretion in taking any action to enforce this Product Policy, including choosing not to take any action at all.
If you become aware of any product for which we provide services that violates this Product Policy, please contact us at info@thehubng.com to enable us to review the product, although we are not obliged to take any action regarding a specific product.

            <br><br>

If you come across any product that violates our Product Policy and is related to the services we provide, please inform us at info@thehubng.com so that we can review the product. However, please note that we are not obligated to take action regarding a specific product.

            
            
        `
    },
    "Privacy Policy":{
        "date": "29 January, 2024",
        "text": `
            

            Our commitment is to safeguard your personal information and respect your privacy rights. If you have any questions or concerns about our policy or how we handle your personal information, please contact us at info@thehubng.com. In this privacy policy, we aim to provide a clear explanation of the information we collect, how we use it, and the rights you have in relation to it. We encourage you to read it carefully. If you disagree with any terms in this privacy policy, please discontinue using our sites and services.
            
            <br><br>
            The following terms apply to our Terms and Conditions, Privacy Statement, Acceptable Products and Use Policy, Disclaimer Notices, and all Agreements: "Client," "You," and "Your" refer to the person accessing this website and agreeing to the Company's terms and conditions. "Thehubng.com," "THL," "The Company," "Ourselves," "We," "Our," and "Us" refer to our company. "Party," "Parties," or "Us" refer to both the Client and ourselves. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they is considered interchangeable and refers to the same.
                This privacy policy applies to all information collected through our website (such as www.thehubng.com) and/or any related services, sales, marketing, or events (referred to collectively as the "Services"). We encourage you to read this privacy policy carefully to make informed decisions about sharing your personal information with us.
            
            <br><br><strong>1. What information do we collect? </strong>
            
            We collect personal information that you provide to us voluntarily, such as your name, address, contact information, passwords and security data, and payment information. This information is collected when you express an interest in obtaining information about us or our products and services, participate in activities on the Services, or contact us. The type of personal information we collect depends on your interactions with us, the choices you make, and the products and features you use. It may include publicly available personal information such as first and last name, phone numbers, email addresses, business email, business phone number, and similar data. We may also collect credentials like passwords and security information used for authentication and account access. It is important that the personal information you provide is accurate and up to date, and you should notify us of any changes to such information.
            
            <br><br>
            
            We also automatically collect certain information when you visit our Services, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily used to maintain the security and operation of our Services and for internal analytics and reporting purposes. We may collect this information through cookies and similar technologies.
            
            
            <br><br><strong>2. How do we use your information? </strong>
            
            <li>
            We utilize your information for various purposes, relying on legitimate business interests, contractual obligations, legal compliance, and/or your consent. The personal information collected through our Services is employed for the following business purposes, and we indicate the specific grounds for processing next to each purpose:
            </li>
            
            <li>
            Sending marketing and promotional communications: We may use the personal information you provide to send marketing materials, based on your preferences and with your consent. You can opt-out of receiving marketing emails at any time by contacting us at info@thehubng.com or using the unsubscribe link in the email.
            </li>
            <li>
            Posting testimonials: Prior to posting a testimonial, we will obtain your consent to use your name and testimonial. If you want to update or delete your testimonial, please contact us at info@thehubng.com, providing your name, testimonial location, and contact information.
            </li>
            <li>
            Delivering targeted advertising: We may use your information to create and display customized content and advertisements tailored to your interests and/or location. We may collaborate with third parties for this purpose.
            </li>
            <li>
            Requesting feedback: Your information may be used to request feedback from you and to contact you regarding your use of our Services.
            </li>
            <li>
            Enabling user-to-user communications: With each user's consent, we may utilize your information to facilitate communications between users.
            </li>
            <li>
            Enforcing terms, conditions, and policies: We may use your information to enforce our terms, conditions, and policies for business purposes, legal reasons, and contractual obligations.
            </li>
            <li>
            Responding to legal requests and preventing harm: In response to a subpoena or other legal request, we may need to examine the data we possess to determine an appropriate course of action.
            </li>
            <li>
            Managing user accounts: Your information may be used to manage and maintain the functionality of user accounts.
            </li>
            <li>
            Delivering services to users: We may use your information to provide you with the requested services.
            </li>
            <li>
            Responding to user inquiries and offering support: Your information may be used to address your inquiries and resolve any issues you may encounter while using our Services.
            </li>
            <li>
            Other business purposes: We may utilize your information for additional business purposes, such as data analysis, identifying usage trends, evaluating the effectiveness of promotional campaigns, improving our Services, products, marketing, and enhancing user experience. This information may be stored and used in aggregated and anonymized form to ensure it is not linked to individual end users or include personal information. We will not use identifiable personal information without your consent.
            </li>
            <li>
            Such as analyzing data, identifying usage patterns, assessing the effectiveness of our promotional campaigns, and evaluating and enhancing our Services, products, marketing, and your user experience. We may utilize and store this information in an aggregated and anonymized manner, ensuring that it cannot be linked to individual end users and does not include personal data. We will not employ identifiable personal information without your consent.
            </li>
            
            
            
            <br><br><strong>3. Will your information be shared with anyone ? </strong>
            
            We only share information with your consent, to comply with legal obligations, to provide you with services, to safeguard your rights, or to fulfill business responsibilities. We may process or disclose data based on the following legal grounds:

            
            <li>
            Consent: If you have granted us specific consent to utilize your personal information for a particular purpose, we may process your data accordingly.

            </li>
            
            <li>
            Legitimate Interests: When reasonably necessary to achieve our legitimate business interests, we may process your data.

            </li>
            <li>
            Performance of a Contract: If we have entered into a contract with you, we may process your personal information to fulfill the contractual terms.
            </li>
            <li>
            Legal Obligations: We may disclose your information if legally required to comply with applicable laws, government requests, court orders, or legal processes, such as responding to court orders or subpoenas (including those from public authorities to meet national security or law enforcement requirements).

            </li>
            <li>
            Vital Interests: We may disclose your information if we believe it is necessary to investigate, prevent, or take action against potential policy violations, suspected fraud, potential threats to anyone's safety, illegal activities, or as evidence in litigation in which we are involved.
            </li>
            
            More specifically, we may need to process your data or share your personal information in the following scenarios:

            <li>
            Vendors, Consultants, and Third-Party Service Providers: We may share your data with third-party vendors, service providers, contractors, or agents who assist us in providing services or performing tasks on our behalf. These may include payment processing, data analysis, email delivery, hosting services, customer support, and marketing activities. We may permit selected third parties to employ tracking technologies on our Services, enabling them to gather data about your interactions over time. This information may be used, among other purposes, to analyze and track data, determine the popularity of specific content, and gain better insights into online activities. We do not share, sell, rent, or trade any of your information with third parties for their promotional purposes, unless otherwise stated in this Policy.

            </li>
            <li>
            Business Transfers: In connection with any mergers, sale of company assets, financing, or acquisition of all or a portion of our business by another company, we may share or transfer your information.
            </li>
            <li>
            Third-Party Advertisers: We may utilize third-party advertising companies to display ads when you visit our Services. These companies may collect information about your visits to our website(s) and other websites using web cookies and similar tracking technologies to provide advertisements about products and services that may interest you.

            </li>
            <li>
            Affiliates: We may share your information with our affiliates, including our parent company, subsidiaries, joint venture partners, or other companies under common control with us. We will require these affiliates to adhere to this privacy policy.

            </li>
            <li>
            Business Partners: We may share your information with business partners to offer you specific products, services, or promotions.
            </li>
            
            <br><br><strong>4. Do we use cookies and other tracking technologies? </strong>
            
            In short, we may use cookies and similar tracking technologies to collect and store your information. We may employ cookies and comparable tracking technologies like web beacons and pixels to access or store information. Further details about the usage of such technologies and how you can reject certain cookies are outlined in our Cookie Policy.
            
            <br><br><strong>5. Do we use Google Maps? ? </strong>
            
            Yes, we utilize Google Maps to enhance our services. Our website, mobile application, or Facebook application utilizes Google Maps APIs. You can find the Google Maps APIs Terms of Service by visiting the provided link. For a better understanding of Google's Privacy Policy, please refer to the linked webpage. By using our Maps API Implementation, you agree to be bound by Google's Terms of Service and permit us to obtain or cache your location. You can withdraw your consent at any time. We combine location information with data from other providers.
            
            <br><br><strong>6. What is our stance on third-party websites? ? </strong>
            
            We are not responsible for the security of any information you share with third-party providers who advertise on our websites but are not affiliated with us. Our Services may contain advertisements from third parties unaffiliated with us, which may link to other websites, online services, or mobile applications. We cannot ensure the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy policy. We are not liable for the content, privacy practices, and security policies of any third parties, including websites, services, or applications linked to or from our Services. You should review the policies of such third parties and contact them directly to address your inquiries.

            
            <br><br><strong>7. How long do we keep your information ? </strong>
            
            We retain your information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless otherwise mandated by law. Personal information will only be retained if required or permitted by law (such as for tax, accounting, or legal purposes). When there is no ongoing legitimate business need to process your personal information, we will either delete or anonymize it. If deletion is not immediately possible, such as when personal information is stored in backup archives, we will securely store and isolate it from further processing until deletion is feasible.

            
            <br><br><strong>8. How do we keep your information secure?  </strong>
            
            We strive to protect your personal information through a system of organizational and technical security measures. We have implemented appropriate security measures, both organizational and technical, to safeguard the personal information we process. However, please be aware that while we take precautions to protect your personal information, the internet itself is not entirely secure. Transmitting personal information to and from our Services is done at your own risk. You should access our services only within a secure environment.

            
            <br><br><strong>9. Do we collect information from minors? </strong>
            
            We do not knowingly collect data from or market to individuals under 18 years of age. If you are under 18, you should not use our Services without the consent of a parent or guardian. If we learn that we have collected personal information from someone under 18 years of age, we will deactivate the account and promptly take steps to delete such data from our records. If you become aware of any data we have collected from children under 18, please contact us at info@thehubng.com.

            
            <br><br><strong>10. What are your privacy rights?  </strong>
            
            You have the right to review, update, or delete the data we collect from you. Based on the laws of some countries, you may have the right to request access to your personal information, make changes to it, or have it deleted under certain circumstances. To request a review, update, or deletion of your personal information, please email your request to info@thehubng.com. We will respond to your request within 30 days.
            
            <br><br><strong>11. </strong>
            
            Controls for Do-Not-Track features Most web browsers and some mobile operating systems and applications offer a Do-Not-Track (DNT) feature or setting that signals your preference for not having your online browsing activities tracked and collected. As of now, there is no universally accepted standard for recognizing and implementing DNT signals. Consequently, we do not currently respond to DNT browser signals or any other mechanism that automatically conveys your choice not to be tracked online. If a standard for online tracking is established in the future and we are required to comply with it, we will inform you about the practice in an updated version of this privacy policy.

            
            <br><br><strong>12. Do we make updates to this policy? </strong>
            
            Yes, we may update this privacy policy as necessary to ensure compliance with relevant laws. The updated version will be indicated by a revised date and will be effective immediately upon its accessibility. In the event of material changes to this privacy policy, we may notify you through prominent posting or direct notification. We encourage you to review this privacy policy regularly to stay informed about how we protect your information.
            
            <br><br><strong>13. How can you contact us about this policy? </strong>
            
            If you have any questions or comments about this policy, you can email us at info@thehubng.com.
            
            <br><br>
            
            To review, update, or delete the data we collect from you, please send a request to info@thehubng.com. We will respond to your request within 30 days in accordance with the applicable laws.


            





            
           
    
            
            
        `
    },

    "Terms &amp; Conditions":{
        "date": "01 April 2022",
        "text": `
            

            These terms and conditions outline the rules and regulations for the use of The Hub Terminus Ltd Website, located at https://thehubng.com.
            
            <br><br>
            By accessing this website, you agree to be bound by these terms and conditions. Do not continue to use or access www.thehubng.com if you do not agree to take all of the terms and conditions stated on this page.
            
            <br><br>
            
            The following terminology applies to these Terms and Conditions, Privacy Statement, Acceptable Products and Use Policy, Disclaimer Notices and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "thehubng.com”, “THL”, “The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            
            <br><br><strong>Cookies </strong>
            
            We employ the use of cookies. By accessing thehubng.com, you agreed to use cookies in agreement with the The Hub Terminus Ltd’s Privacy Policy.
            
            
            <br><br>
            Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
            
            <br><br><strong>License </strong>
            
            Unless otherwise stated, The Hub terminus Ltd and/or its licensors own the intellectual property rights for all material on The Hub Terminus Ltd. All intellectual property rights are reserved. You may access this from thehubng.com for your own personal use subjected to restrictions set in these terms and conditions. This Agreement shall begin on the date hereof.

            You must not:
            <li>
            Republish material from thehubng.com
            </li>
            Sell, rent or sub-license material from thehubng.com

            <li>
            Reproduce, duplicate or copy material from thehubng.com

            </li>
            Redistribute content from thehubng.com
            <li>
            <br><br>
            Parts of this website offer educational content that are the opinions of other parties that do not reflect the views and opinions of The Hub Terminus Ltd, its agents and/or affiliates. To the extent permitted by applicable laws, The Hub Terminus Ltd shall not be liable for the content added for educational purposes only or for any liability, damages or expenses caused and/or suffered as a result of any use from 3rd parties content on this website.

            The following organizations may link to our Website without prior written approval:

            </li>
            Government agencies;

            <li>
            Search engines;
            </li>
            Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses;
            <li>
            ystem wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
            These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.
            <br><br>
            We may consider and approve other link requests from the following types of organizations:
            </li>
            commonly-known consumer and/or business information sources;
            <li>
            dot.com community sites;

            </li>
            associations or other groups representing charities;

            <li>
            online directory distributors;
            </li>
            internet portals;
            <li>
            accounting, law and consulting firms; and
            </li>
            <li>
            educational institutions and trade associations.
            </li>
            <br><br>
            We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of The Hub terminus Ltd; and (d) the link is in the context of general resource information.

            <br><br>
            These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and(c) fits within the context of the linking party’s site.
            If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to info @thehubng.com Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
            <br><br>
            Approved organizations may hyperlink to our Website as follows:

            <li>
            By use of our corporate name; or
            </li>
            <li>
            By use of the uniform resource locator being linked to; or
            </li>
            <li>
            By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.
            </li>

            <li>

            No use of The Hub Terminus Ltd logo or other artwork will be allowed for linking absent a trademark license agreement.

            <li>
            <br><br><strong>iFrames </strong>

            <br><br>

            Without prior approval and written permission, you may not create frames around our Web pages that alter in any way the visual presentation or appearance of our Website.

            <br><br><strong>Content Liability
            </strong>

            <br><br>

            We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third-party rights.

            
            <br><br><strong>Reservation of Rights
            </strong>

            <br><br>

            We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.

            <br><br><strong>Removal of links from our website
            </strong>

            <br><br>

            If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
            We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.

            <br><br><strong>Disclaimer

            </strong>

            <br><br>

            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
            <li>
            limit or exclude our or your liability for death or personal injury;

            </li>
            <li>
            limit or exclude our or your liability for fraud or fraudulent misrepresentation;

            </li>
            <li>
            limit any of our or your liabilities in any way that is not permitted under applicable law; or


            </li>
            <li>
            exclude any of our or your liabilities that may not be excluded under applicable law.

            </li>
            

            The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
            As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature

                    
        `
    }
}

let footer_links = document.getElementsByClassName("footer-links");

let founders_about = document.getElementsByClassName("founders-about")[0];
let founders_description = document.getElementsByClassName("ab-desc")[0];
let about_card = document.getElementsByClassName("about-card")[0];
let founders_about_close = document.getElementsByClassName("founders-about-close")[0];

for (let i = 0; i < footer_links.length; i++) {
    footer_links[i].addEventListener("click", function(){
        if (window.location.href.split("/")[3].includes("about")){
            document.getElementsByClassName("ab-img")[0].style.display = "none"
            document.getElementsByClassName("ceo-social-icons")[0].style.display = "none"
        }
        about_card.classList.add("terms")
        about_card.style.transitionDelay = ".2s";
        founders_about.style.zIndex = "100000000"
        founders_about.style.transitionDelay = "0";
        founders_about.style.transition = ".2s";
        founders_about.style.height = "100vh";
        // setting card content.....
        let link_name = footer_links[i].innerHTML;
        link_data = footer_dictionary[link_name]
        founders_description.children[0].innerHTML = link_name;
        founders_description.children[1].innerHTML = link_data["date"];
        founders_description.children[2].innerHTML = link_data["text"];
        
        about_card.style.transform = "translateY(0)";

    })
    
}

founders_about_close.addEventListener("click", function(){
    about_card.style.transitionDelay = 0;
    about_card.style.transform = "translateY(-100vw)";

    founders_about.style.transitionDelay = ".5s";
    founders_about.style.height = 0;
})

