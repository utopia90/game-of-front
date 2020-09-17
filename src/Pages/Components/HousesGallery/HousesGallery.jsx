import React from "react";
import { Link } from "react-router-dom";
import "./HousesGallery.scss";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

export default function HousesGallery(props) {
  return (
    <SimpleBar forceVisible="y" autoHide={false} style={{ maxHeight: 2000 }}>
      <div className="row">
        {props.houses
          .filter((house, i) => house.logoURL)
          .map((house, i) => (
            <div className="c-houses-gallery" key={i}>
              <div className="col-lg-3 col-md-2 col-sm-12">
                <Link
                  to={"houses/" + house.name}
                  className="c-houses-gallery__link"
                >
                  <figure className="c-houses-gallery__img-container">
                    <img
                      src={house.logoURL}
                      alt="house-img"
                      className="c-houses-gallery__img"
                    />
                    <figcaption className="c-houses-gallery__caption">
                      <p>{house.name}</p>
                    </figcaption>
                  </figure>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </SimpleBar>
  );
}
