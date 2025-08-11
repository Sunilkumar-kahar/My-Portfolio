import style from './Hero.module.css';
import {getImageUrl} from '../../utils';

function Hero(){
    const resumeBtn = ()=>{
    window.open('../assets/hero/Py_SUNILKUMAR KAHAR.pdf', '_blank');
    };
    return(
        <section className={style.hero_section}>
            <div className={style.hero_content}>
                <h1 className={style.hero_title}>Hi, I'm Sunilkumar Kahar</h1>
                <h3 className={style.hero_sub_title}><u>Software Developer</u> | <u>C++, Python, React,Django</u></h3>
                <p className={style.hero_description}>
                    I'm a versatile developer with 11 months of industry experience in C/C++. I also build responsive, dynamic web applications using React, JavaScript, Python, and Django.
                </p>
                <button className={style.hero_btn} onClick={resumeBtn}>RESUME</button>
            </div>
            <div className={style.hero_imgDviv}>
                <img className={style.circular_img} src={getImageUrl("hero/circular_profile_img.png")} alt='Circular_profile_img'></img>
            </div>
        </section>
    );
}
export default Hero