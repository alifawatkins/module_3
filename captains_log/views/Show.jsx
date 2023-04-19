const React = require('react')

class Show extends React.Component {
    render () {
        const { log } = this.props;
        return (
            <div>
                <h1>{log.title}</h1>
                <p>{log.entry}</p>
                <p>Ship Status: <b>{log.shipIsBroken ? "BROKEN" : "OPERATIONAL"}</b></p>
                <a href="/logs">Back</a>
            </div>
        );
    }
}
module.exports  = Show;