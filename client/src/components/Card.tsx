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
    <div>
      {props.data.name} {props.data.capital} {props.data.population} {props.data.flag}
      {props.data.languages !== undefined && props.data.languages[0].name}
    </div>
  );
}

export default Card;
