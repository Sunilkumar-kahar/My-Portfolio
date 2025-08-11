//import style from './Skills.module.css';
import style from './Skills_and_experience.module.css';
import skill_front from '../../data/frontend.json';
import skill_back from '../../data/backend.json';
import skill_db from '../../data/Database.json';
import skill_tool from '../../data/tools.json';

import {getImageUrl} from '../../utils';
import Experience from './Experience';

function Skills(){
    const titleArr = ["Frontend", "Backend", "Database", "Tools"];
    const skillData = [skill_front, skill_back, skill_db, skill_tool];
    const className = ["skill_front", "skill_back", "skill_db", "skill_tool"];
    return(
        <section id='skills_and_experience' className={style.skill_and_experience_section}>
            <section id='skills' className={style.skill_section}>
                <h1 className={style.skill_title}>SKILLS</h1>
                {
                    titleArr.map((title, index)=>{
                        return(
                        <div className={style[title]}>
                            <h1 className={style.sub_title} >{title}</h1>
                            <div className={style[`container_${title}`]}>
                                {
                                    skillData[index].map((e, idx)=>{
                                        return(
                                            <div key={idx} className={style[className[index]]}>
                                                <div className={style.skillImgDiv}>
                                                    <img className={style.logo} src={getImageUrl(e.imageSrc)}></img>
                                                </div>
                                                <h5 className={style.logo_name}>{e.title}</h5>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        );
                    })
                    
                }
            </section>
            <Experience />
        </section>
    );
}
export default Skills;