import React from 'react';
import './CharDetailGallery.scss';
import SimpleBar from 'simplebar-react';

export default function CharDetailGallery(props) {


    const gotDetail = props.characters;
    console.log(gotDetail);

    const gotHouses = props.houses;
    console.log(props.houses);
    return (

        <div className="d-flex justify-content-center">
            <div className="c-characters">
                <div className="c-characters-detail">
                    <figure>
                        <img className="c-characters-detail__img" src={gotDetail.image} alt=""></img>
                        <figcaption className="c-characters-detail__caption">{gotDetail.name}</figcaption>

                    </figure>
                    <div className="character-live-detail">
                        <div className="character-live-detail__box">
                            <p className="text-medium">Casa</p>
                        <div className="character-live-detail__img">
                              <img src={gotHouses.logoURL} alt=""></img>
                        </div>
                        </div>

                        <div className="character-live-detail__box">
                            <p className="text-medium">Alianzas</p>
                            <div className="character-live-detail__list">
                                <SimpleBar style={{ maxHeight: 220 }} forceVisible="y" autoHide={false}>
                                {gotDetail.allegiances && gotDetail.allegiances.map((allegiance, i) => <p className="text-small" key={i}>{allegiance}</p>)} 
                                </SimpleBar>
                            </div>
                        </div>
                        <div className="character-live-detail__box">
                            <p className="text-medium">Apariciones</p>
                            <div className="character-live-detail__list">
                                <SimpleBar style={{ maxHeight: 220 }} forceVisible="y" autoHide={false}>
                                    {gotDetail.appearances && gotDetail.appearances.map((appearance, i) => <p className="text-small" key={i}>{appearance}</p>)}
                                </SimpleBar>
                            </div>
                        </div>
                        <div className="character-live-detail__box">
                            <p className="text-medium">Padre</p>
                            <div className="character-live-detail__list">
                              <p className="text-small">{gotDetail.father}</p> 
                            </div>
                        </div>
                        <div className="character-live-detail__box">
                            <p className="text-medium">Descendientes</p>
                            <div className="character-live-detail__list">
                                <SimpleBar style={{ maxHeight: 220 }} forceVisible="y" autoHide={false}>
                                    {gotDetail.siblings && gotDetail.siblings.map((sibling, i) => <p className="text-small" key={i}>{sibling}</p>)}
                                </SimpleBar>
                            </div>
                        </div>
                        <div className="character-live-detail__box">
                            <p className="text-medium">Titulos</p>
                            <div className="character-live-detail__list">
                                <SimpleBar style={{ maxHeight: 220 }} forceVisible="y" autoHide={false}>
                                    {gotDetail.titles && gotDetail.titles.map((title, i) => <p className="text-small" key={i}>{title}</p>)}
                                </SimpleBar>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    )
}
//{gotDetail.titles && gotDetail.titles.map((title, i)=><li key={i}>{title}</li>)}//