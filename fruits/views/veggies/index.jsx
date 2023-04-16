const React = require("react");

function Index(props) {
  const { veggies } = props;

  return (
    <div>
      <nav>
        <a href="/veggies/new">Create a New Veggie</a>
      </nav>
      
      <h1>Index Page</h1>

      <ul>
        {veggies.map((veggie, i) => {
          return (
            <li key={veggie._id}>
              The <a href={`/veggies/${veggie._id}`}>{veggie.name}</a> is {veggie.color}{" "}
              {veggie.readyToEat
                ? "It is ready to eat"
                : "It is not ready to eat"}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Index;