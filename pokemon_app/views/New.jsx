const React = require('react');

class New extends React.Component {
    render () {
        return(
            <div>
                <h1>New Pokemon Identified!</h1>

                <form action='/pokemon' method='POST'>

                    Name: <input type="text" name="name"/>
                    <br/>

                    Image URL: <input type='text' name="img"/>
                    <br/>

                    <input type="submit" value="Confirm new entry!"/>

                </form>
            </div>
        );
    }
}

module.exports = New;