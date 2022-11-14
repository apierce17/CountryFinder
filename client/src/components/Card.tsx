import { GiCapitol } from "react-icons/gi";
import { IoLanguageSharp, IoPeopleCircleOutline } from "react-icons/io5";

import "./Card.css";

type Country = {
  id?: number;
  name?: string;
  flag?: string;
  population?: number;
  capital?: string;
  languages?: [{ name?: string }];
};

type Language = {
  name?: string;
};

function Card(props: { data: Country }) {
  return (
    <li className="cardWrapper">
      <div className="flagWrapper">
        <img src={props.data.flag} alt={props.data.name + "flag"} />
      </div>
      <div className="info">
        <h3>{props.data.name}</h3>
        <div className="capital" title={"Capital of " + props.data.name}>
          <GiCapitol />
          <p>{props.data.capital}</p>
        </div>
        <div className="language" title={"Languages of " + props.data.name}>
          <IoLanguageSharp />
          <ul className="languageList">
            {props.data.languages !== undefined &&
              props.data.languages.map((language: Language) => {
                return <li><p>{language.name}</p></li>;
              })}
          </ul>
        </div>
        <div className="population" title={"Population of " + props.data.name}>
          <IoPeopleCircleOutline />
          <p>{props.data.population?.toLocaleString()}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
