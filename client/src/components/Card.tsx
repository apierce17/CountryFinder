import {GiCapitol} from 'react-icons/gi'
import {IoLanguageSharp, IoPeopleCircleOutline} from 'react-icons/io5'

import './Card.css'

type Employee = {
  id?: number;
  name?: string;
  flag?: string;
  population?: number;
  capital?: string;
  languages?: [{ name?: string }];
};

function Card(props: { data: Employee }) {
  return (
    <li className="cardWrapper">
        <div className='flagWrapper'>
            <img src={props.data.flag} alt={props.data.name + 'flag'}/>
        </div>
        <div className="info">
            <h3>{props.data.name}</h3>
            <div className='capital' title={'Capital of ' + props.data.name}>
                <GiCapitol/>
                {props.data.capital}
            </div>
            <div className='language' title={'Language of ' + props.data.name}>
                <IoLanguageSharp/>
                {props.data.languages !== undefined && props.data.languages[0].name}
            </div>
            <div className='population' title={'Population of ' + props.data.name}>
                <IoPeopleCircleOutline/>
                {props.data.population?.toLocaleString()} 
            </div>
        </div>
    </li>
  );
}

export default Card;
