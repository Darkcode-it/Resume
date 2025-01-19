import { FaFacebook } from "react-icons/fa6";
import styles from './Home.css'
import  data from '../Data.json'
import {SocialIcon} from "react-social-icons";
import Skill from "../Skill/Skill";
export default function Home(props) {
    return (
        <div className="container">
            <div className="menu">
                <ol className="sectionMenu">
                    <li>Skill</li>
                    <li>About</li>
                </ol>
            </div>
            <div>
                <h1 className="title">{data.title}<h1 style={{color: "aqua", fontSize: "25px"}}>Musa Rahd</h1></h1>
                <h2 className="subtitle">{data.subtitle}</h2>
            </div>
            <div className="icon">
                {Object.keys(data.link).map(key => {
                    return (
                        <div className="icon">
                            <SocialIcon url={data.link[key]}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

