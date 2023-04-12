const React = require("react");

function Show(props) {
  const { veggie } = props;
  console.log(veggie);

  return (
    <div>
      <h1>Show Page</h1>

      <p>
        The {veggie.name} is {veggie.color} {" "}
        {veggie.readyToEat
          ? "Its ready to eat"
          : "It is not ready to eat... Cant touch this"}
      </p>
    </div>
  );
}

// class Show extends React.Component{
//     render() {
//         return(
//             <h1>Show Route</h1>
//         )
//     }
// }

module.exports = Show;