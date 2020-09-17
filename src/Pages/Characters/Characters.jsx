import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import CharactersGallery from '../Components/CharactersGallery/CharactersGallery';
import './Characters.scss';
import SearchBar from '../Components/Shared/SearchBar/SearchBar';

let characters = [];

export default function Characters () {


    const [filteredCharacters, setFilteredCharacter] = useState([])

    useEffect(() => {

        axios.get(process.env.REACT_APP_BACK_URL + 'characters').then(res =>{
       const charactersLocal = res.data;
       console.log(charactersLocal);
       characters = charactersLocal;
       setFilteredCharacter(charactersLocal);

    })

    }, [])

    const filterCharacter = (filterValues) => {
    const filteredLocalCharacters = [];
    //array vacio donde voy a almacenar todos los valores que coincidan con el nombre que puse en la barra de buscar//
    

    for(const character of characters){
        if (character.name.includes(filterValues.name)) {
            filteredLocalCharacters.push(character);
            //aquellos que hayan pasado el filtro del if entonces los pusheare a la variable con array vacio que me he creado con los nombres que coinciden//
        }
    }

    //aquui estoy haciendo un bucle for de todos los amigos tengan el nombre que tengan y luego con if compruebo que el nombre coincida con el de la barra//

    setFilteredCharacter(filteredLocalCharacters);
    //una vez que consigo los amigos filtrados se los paso a setear el estado//
}





    return (
        <div>
            <SearchBar fnSubmit={filterCharacter}/>
            <CharactersGallery characters={filteredCharacters}/>
        </div>

    );



}