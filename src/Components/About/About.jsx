import style from './About.module.css';
import {getImageUrl} from '../../utils';
function About(){
    return(
        <section id='about' className={style.about_section}>
            <h1 className={style.about_title}>ABOUT</h1>
            <div className={style.about_content}>
                {/* <div className={style.about_imgDiv}> */}
                    <img className={style.about_img} src={getImageUrl("about/Profile_img.jpg")} alt='profile_img'></img>
                {/* </div> */}
                <ul className={style.about_ul}>
                    <li className={style.about_li}>
                        <img className={style.li_img} src='../../assets/about/cursorIcon.png'></img>
                        <p className={style.about_para}>With 11 months of hands-on experience in C/C++, I’ve developed performance-critical software and contributed to real-world projects involving algorithmic trading and low-level system programming on Linux.</p>
                    </li>
                    <li className={style.about_li}>
                        <img className={style.li_img} src='../../assets/about/serverIcon.png'></img>
                        <p className={style.about_para}>I have experience building efficient backend systems using Python, Django, and C++. I'm also comfortable working with APIs, databases, and Linux-based environments to deliver scalable and optimized solutions.</p>
                    </li>
                    <li className={style.about_li}>
                        <img className={style.li_img} src='../../assets/about/uiIcon.png'></img>
                        <p className={style.about_para}>I'm a frontend developer skilled in building responsive and interactive web applications using React.js, JavaScript, HTML, and CSS. I focus on writing clean UI code and creating user-friendly experiences.</p>
                    </li>
                </ul>
            </div>
            {/* <img style={{border:'2px solid white'}} src='../../assets/about/cursorIcon.png'></img> */}
        </section>
    );
}
export default About;