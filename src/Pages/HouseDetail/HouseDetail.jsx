import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { HouseDetailGallery} from '../Components/HouseDetailGallery/HouseDetailGallery.jsx';

export default function HouseDetail() {

    // const [amiibos, setAmiibos] = useState([]);

    const detail = useParams().name;

    const [house, setHouse] = useState([]);


    useEffect(() => {
        axios.get(process.env.REACT_APP_BACK_URL + 'houses/' + detail).then(res => {
            setHouse(res.data[0])
        })
    });


    return (
        <div>
            <Link to="/houses">
                <button className="back-btn">Volver</button>
            </Link>
            <HouseDetailGallery house={house}/>
        </div>
    );
}