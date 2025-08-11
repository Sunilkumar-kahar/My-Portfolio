import { useState } from "react";
import { useEffect } from "react";
import { LuMenu } from "react-icons/lu";
import { GrClose } from "react-icons/gr";
import style from './Navbar.module.css';
function Navbar(){
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(()=>{
            let unord_li = document.getElementsByClassName("mobileMenu")[0];
            const elementMenuIcon = document.getElementsByClassName('menuIcon')[0];
            if(elementMenuIcon !== undefined){
                if(unord_li !== undefined)
                    unord_li.style.display = 'none';
                return (!menu);
            }
            return(false);
        });
    };
    
    return(
        <nav>
            <div className={style.nameLogo}>Sunilkumr Kahar</div>
            <ul className={`${style.webMenu} ${menu && style.mobileMenu}`}>
                <li className={style.nav_li} ><a href = "#home" onClick={toggleMenu}>Home</a></li>
                <li className={style.nav_li} ><a href = "#about" onClick={toggleMenu}>About</a></li>
                {/* <li className={style.nav_li} ><a href = "#skills" onClick={toggleMenu}>Skills</a></li> */}
                <li className={style.nav_li} ><a href = "#skills_and_experience" onClick={toggleMenu}>Experience/Skills</a></li>
                <li className={style.nav_li} ><a href = "#projects" onClick={toggleMenu}>Projects</a></li>
                <li className={style.nav_li} ><a href = "#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
            {
                menu ?
                    <GrClose className={style.menuIcon} onClick={()=>setMenu(!menu)} />
                :
                    <LuMenu className={style.menuIcon} onClick={()=>setMenu(!menu)} />
            }
        </nav>
    );
}
export default Navbar;