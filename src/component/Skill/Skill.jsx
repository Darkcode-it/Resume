

import styles from './Skill.css';
import  data from '../Data.json';



export default function Skill() {
    return (
        <div className="container">
            <div className="skill">
                {data.data.map((data) => (
                    <div className="singleSkill" key={data.id}>
                        <img src={process.env.PUBLIC_URL + '/' + data.logo} className="image" alt={data.title}/>
                        <h4 className='titleskill'>{data.title}</h4>
                    </div>
                ))}
            </div>

        </div>
    );
}
