import React from 'react';
import './CharactersGallery.scss';
import { Link } from 'react-router-dom';


export default function CharactersGallery(props) {


    return (
        <div className="c-character-gallery">
            <div className="row">
                {props.characters.map((character, i) =>
                    <div className="col-12 col-md-2 col-sm-4" key={i}>
                        <Link to={"characters/" + character.name}>
                            <div className="c-character-gallery__item-container">

                                <figure className="c-character-gallery__item">
                                    <img className="c-character-gallery__img" src={character.image} alt=""></img>
                                    <figcaption className="c-character-gallery__caption overlay">{character.name}</figcaption>
                                </figure>

                            </div>
                        </Link>
                    </div>

                )}

            </div>
        </div>
    )
}