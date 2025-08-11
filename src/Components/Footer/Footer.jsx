import style from './Footer.module.css';
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { TbBrandHackerrank } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";

function Footer(){
    return(
        <footer>
            <h3 className={style.connect_title}>Connect with:</h3>
            <a href='https://www.linkedin.com/in/sunilkumar-kahar' target='_blank'>
                <BsLinkedin className={style.footer_logo}/>
            </a>
            <a href='https://github.com/Sunilkumar-kahar' target='_blank'>
                <SiGithub className={style.footer_logo}/>
            </a>
            <a href='https://leetcode.com/u/Sunilkumar_kahar/' target='_blank'>
                <SiLeetcode className={style.footer_logo}/>
            </a>
            <a href='https://www.hackerrank.com/profile/Sunilkumar_kahar' target='_blank'>
                <TbBrandHackerrank className={style.footer_logo}/>
            </a>
            <a href='https://www.instagram.com/sun_i_l_20/' target='_blank'>
                <FaInstagram className={style.footer_logo}/>
            </a>
        </footer>
    );
}

export default Footer;