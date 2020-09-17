import React from 'react';
import './SearchBar.scss';
import { useForm } from "react-hook-form";



export default function SearchBar (props) {

    const { register, handleSubmit, watch, errors } = useForm();


    const onSubmit = (data) => {
        props.fnSubmit(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">
                <span>Name</span>
                <input name="name" id="name" ref={register}/>
            </label>

        </form>
    );
}