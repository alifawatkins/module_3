const React = require('react');

class Index extends React.Component {
  render() {
    return (
        <div>
            <h1>Mongoose Flights</h1>
            <table>
                <thead>
                    <tr>
                        <th>Airline</th>
                        <th>Flight Number</th>
                        <th>Departure Time</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.flights.map((flight, i) => {
                        return (
                            <tr>
                                <td>{flight.airline}</td>
                                <td>{flight.flightNo}</td>
                                <td>{flight.departs.toString()}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div> );
  }
}

module.exports = Index;