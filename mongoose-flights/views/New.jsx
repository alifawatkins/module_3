const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>Book A New Flight</h1>
            <form action="/flights" method="POST">
                Airline: <input list="airlines" id="airline" name="airline" />
                    <datalist id="airlines">
                        <option value="American"></option>
                        <option value="Southwest"></option>
                        <option value="United"></option>
                    </datalist>
                <br/>
                Flight Number: <input type="number" name="flightNo" min="10" max="9999" /><br/>
                Departure Time: <input type="datetime-local" name="departs" /><br/>
                <input type="submit" name="" value="Book Flight"/>
             </form>
        </div>);
  }
}

module.exports = New;