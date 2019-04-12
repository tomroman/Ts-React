import React, { Component } from 'react'; 
import User from '../interfaces/User.interface'

interface SearchState {
    name: string, 
    numberOfAbilities: number, 
    baseExperience: number, 
    imageUrl: string
}

export class PokemonSearch extends Component <User, SearchState> {
    pokemonRef: React.RefObject<HTMLInputElement>;
    constructor(props: User ) {
        super(props);
        this.state = {
            name: '', 
            numberOfAbilities: 0, 
            baseExperience: 0, 
            imageUrl: ''
        }
        this.pokemonRef = React.createRef();
    }
    onSearchClick = () => {
        const inputValue = this.pokemonRef.current.value; 
        fetch(`https://pokeapi.co/api/v2/pokemon/`)

    }
    render() {
        const { name, numberOfPokemons } = this.props;
        return (
            <div>
                <p>
                    User {name} {' '}
                    {numberOfPokemons && <span> has {numberOfPokemons} pokemons</span>}
                </p>
                <input type = "text" ref={this.pokemonRef}/>
                <button onClick={this.onSearchClick} className="my-button">
                    Search
                </button>
            </div>
        );
    }
}

export default PokemonSearch;