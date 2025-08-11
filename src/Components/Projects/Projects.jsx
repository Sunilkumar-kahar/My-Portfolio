import style from './Projects.module.css';
import project from '../../data/projects.json';
import {getImageUrl} from '../../utils';

function Projects(){
    return(
        <section id="projects" className={style.project_section}>
            <h1 className={style.project_title}>PROJECT</h1>
            <div className={style.project_container}>
                {
                    project.map((proj)=>{
                        return(
                            <div className={style.projectCard}>
                                <img className={style.projectImg} src = {getImageUrl(proj.imgSrc)}></img>
                                <h2 className={style.project_name}>{proj.title}</h2>
                                <h3 className={style.desc}>{proj.description}</h3>
                                <h3 className={style.techSkill}>Technology:</h3>
                                {
                                    proj.Skills.map((skill)=>{
                                        return(
                                            <span className={style.skills}>{skill}</span>
                                        );
                                    })
                                }
                                <h3 className={style.project_links}>Links:</h3>
                                <div className={style.project_links_div}>
                                    <a className={style.project_link} href={proj.source}>Source</a>
                                    <a className={style.project_link} href={proj.demo}>Demo</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Projects;