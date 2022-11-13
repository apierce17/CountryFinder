import { Key } from "react";
import {AiOutlineLoading3Quarters} from 'react-icons/ai';

import Card from "./Card";
import ErrorMessage from "./ErrorMessage";
import './List.css';

function List(props: {data: any, loading: boolean, error: string}) {

    if (props.loading === true) {
        return (
            <div className="spinner">
                <AiOutlineLoading3Quarters/>
            </div>
        )
    } else {
        if (props.error !== '') {
            return <ErrorMessage error={props.error}/>
        } else {
            return (
              <ul className="listWrapper">
                {props.data.map((country : object, idx: Key ) => { // Iterate through all countries and create a card for each
                  return <Card data={country} key={idx}/>;
                })}
              </ul>
            );
        }
    }

}

export default List;
