import Card from "./Card";

function List(props: {data: any}) {

  return (
    <div>
      {props.data.map((country : object) => { // Iterate through all countries and create a card for each
        return <Card data={country} />;
      })}
    </div>
  );
}

export default List;
