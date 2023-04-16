const React = require('react');

class Index extends React.Component {
    render () {
        const { pokemon } = this.props;
        return (
            <div>
                <h1>See All The Pokemon!</h1>
                <ul>
                    {pokemon.map((pokemon, i) => {
                        return(
                            <li><a href={`/pokemon/${pokemon.id}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a></li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}
module.exports = Index;