import style from './Skills_and_experience.module.css';
import exp from '../../data/experience.json';
// import Skill from './Skills';

function Experience(){
    return(
        <section className={style.experience_section}>
            <h1 className={style.experience_title}>EXPERIENCE</h1>
            {
                exp.map((data, index)=>{
                    return(
                        <>
                            <h2 className={style.position}>{`Position: ${data["Position"]}`}</h2>
                            <h2 className={style.Companye}>{`Companye: ${data["Companye"]}`}</h2>
                            <h3 className={style.date}>{`${data["Start date"]} - ${data["End date"]}`}</h3>
                            <h3 className={style.location}>{`Location: ${data["Location"]}`}</h3>
                            <ul className={style.experienceUL}>
                                {
                                    data["Role"].map((point, idx)=>{
                                        return(
                                            <li className={style.exp_point}>{point}</li>
                                        )
                                    })
                                }
                            </ul>

                            <h2 className={style.additional}>Additional</h2>
                            <ul className={style.experienceUL}>
                                <li className={style.exp_point}>
                                    Built personal projects using React.js, Python, Django, and JavaScript to strengthen full-stack development skills.
                                </li>
                                <li className={style.exp_point}>
                                    Familiar with developing REST APIs and creating responsive web applications.
                                </li>
                                <li className={style.exp_point}>
                                    Comfortable working with Linux environments and version control systems like Git.
                                </li>
                            </ul>
                        </>
                    )
                })
            }
        </section>
    )
}
export default Experience;