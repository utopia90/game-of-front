import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CharDetailGallery from '../Components/CharDetailGallery/CharDetailGallery';
import { Link } from 'react-router-dom';

export default function CharDetail() {


const name = useParams().name;
const [characterDetail, setCharacterDetail] = useState(null);
const [logoHouse, setLogoHouse] = useState("");
let houseName = "";
useEffect(()=>{
    axios.get(process.env.REACT_APP_BACK_URL + 'characters/'+ name).then(res =>{
        const characters = res.data;
        setCharacterDetail(characters);
        houseName = res.data.house;
        console.log("casa"+houseName);
        axios.get(process.env.REACT_APP_BACK_URL + 'houses/'+ houseName).then(res =>{
            const houseLogo = res.data[0];
            setLogoHouse(houseLogo);
            console.log(houseLogo.logoURL);
        })
    })
   

}, [])

console.log(characterDetail);

return (


    <div>
        <Link to="/characters">
            <button className="return-btn">Volver</button>
        </Link>

        {characterDetail && <CharDetailGallery characters={characterDetail}  houses={logoHouse}/>} 
     
    </div>
)
}