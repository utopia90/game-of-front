
import React, {useState, useEffect} from "react";
import axios from "axios";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './Chronology.scss'


export default function Chronology(){

    const [characters, setCharacters] = useState([]);
    const [estado, setEstado] = useState(true);
    const [flecha, setFlecha] = useState(">");
    let orderDes;
    let orderAsc;

    useEffect(() => {

        axios.get(process.env.REACT_APP_BACK_URL + "characters").then(res =>{
            setCharacters(res.data);
        })
    }, []);

    const ageOrderArray = [];

    for (let i = 0; i < characters.length; i++){

        let character = characters[i].age;

        if(character?.age ?? ''){

            ageOrderArray.push(characters[i]);
        }
    }

    if(estado){
    orderDes = ageOrderArray.sort(((a, b) => a.age.age - b.age.age));
    }
    else {
    orderAsc= ageOrderArray.sort(((a, b) =>  b.age.age - a.age.age));
    }

    const orderAges = () =>{

        if(estado === true){
            setEstado(false);
            setFlecha("<");

        }
        else {
            setEstado(true)
            setFlecha(">");

        }
    }

    return (
        <div>
            <button className="buttonchange"onClick={()=> orderAges()}>{flecha}</button>
            <div>
            <SimpleBar style = { {  maxHeight : 2000}} forceVisible = "y"  autoHide = { false }>
                {estado ? (orderDes.map((character,i, key) =>
                <div>
                    <h2>{character.age.age}</h2>
                    <h4>{character.age.name}</h4>
                    <img src={character.image}/>
                </div>
                )) : orderAsc.map((character,i, key={i}) =>
                <div>
                    <h5>{character.age.age}</h5>
                    <h4>{character.age.name}</h4>
                    <img src={character.image}/>

                </div>
                )}
            </SimpleBar>
                </div>
        </div>

    )
}