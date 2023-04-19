const React = require('react');

class Edit extends React.Component{
  render() {
    return (      
        <form action={`/logs/${this.props.log._id}?_method=PUT`} method="POST">
            Title: <input type="text" name="title" value={this.props.log.title} /><br/>
            Entry: <input type="textarea" name="entry" value={this.props.log.entry} /><br/>
            Ship Is Broken:
              { this.props.log.shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type="checkbox" name="shipIsBroken"/> }
          <br/>
          <input type="submit" value="Update Log"/>
      </form>
    )
  }
}
module.exports= Edit;