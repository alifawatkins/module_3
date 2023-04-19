const React = require('react');

class Index extends React.Component {
  render() {
    return (
        <div>
            <h1>Captain's Log</h1>
            <ul>
                {this.props.logs.map((log, i)=>{
                    return (
                        <li>
                            <a href={`/logs/${log._id}`}>{log.title}</a><br/>
                            <a href={`/logs/${log._id}/edit`}>Edit This Log</a><br/>
                            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE"/>
                            </form>
                        </li>
                    )
                })}
            </ul>
            <a href="/logs/new">Write a New Log</a>
        </div> );
  }
}

module.exports = Index;