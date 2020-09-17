import React from "react";
import "./SearchBar.scss";
import { useForm } from "react-hook-form";

export default function SearchBar(props) {
  const { register, handleSubmit, watch, errors } = useForm();

  const fnChange = (data) => {
    props.fnSubmit(data);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit(fnChange)}>
      <label htmlFor="name">
        <span className="pi pi-search primeicon"></span>
        <input
          placeholder="Buscar..."
          className="search-form__input"
          onChange={handleSubmit(fnChange)}
          name="name"
          id="name"
          ref={register}
        />
      </label>
    </form>
  );
}
