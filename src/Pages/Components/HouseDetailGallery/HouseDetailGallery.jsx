import React from "react";
import "./HouseDetailGallery.scss";

export function HouseDetailGallery(props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="c-house-detail-item">
        <div className="c-house-detail-item__container">
          <figure className="c-house-detail-item__figure">
            <img
              src={props.house.logoURL}
              alt="house-detail-img"
              className="c-house-detail-item__img"
            />
            <h2 className="c-house-detail-item__caption">{props.house.name}</h2>
          </figure>
          <div className="c-house-detail-item__menu">
            <div className="c-house-detail-item__menu__column">
              <h2 className="c-house-detail-item__title">LEMA</h2>
              <p className="c-house-detail-item__info"> {props.house.words}</p>
            </div>
            <div className="c-house-detail-item__menu__column">
              <h2 className="c-house-detail-item__title">SEDE</h2>
              <p className="c-house-detail-item__info"> {props.house.seat}</p>
            </div>
            <div className="c-house-detail-item__menu__column">
              <h2 className="c-house-detail-item__title">REGION</h2>
              <p className="c-house-detail-item__info">{props.house.region}</p>
            </div>
            <div className="c-house-detail-item__menu__column">
              <h2 className="c-house-detail-item__title">ALIANZAS</h2>
              {props.house.allegiance &&
                <ul className="c-house-detail-item__list">
                  {props.house.allegiance.map((item, i) => <li className="c-house-detail-item__list__item" key={i}>{item}</li>)}  
                </ul>
              }                
            </div>
            <div className="c-house-detail-item__menu__column">
              <h2 className="c-house-detail-item__title">RELIGIONES</h2>
              <p className="c-house-detail-item__info">
                {props.house.religion}
              </p>
            </div>
            <div className="c-house-detail-item__menu__column">
              <h2 className="c-house-detail-item__title">FUNDACIÓN</h2>
              <p className="c-house-detail-item__info">
                {props.house.createdAt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
