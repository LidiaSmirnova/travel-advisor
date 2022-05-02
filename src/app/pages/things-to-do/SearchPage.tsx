import * as React from "react";
import {useNavigate} from "react-router-dom";

import Header from "../../components/header/Header";
import landscape from "../../static/images/landscape.png";
import CountrySelect from "../../components/country-select/CountrySelect";

import "./SearchPage.scss";

function SearchPage() {
    const navigate = useNavigate();

    const onCountryChange = (country: string) => {
        navigate(`/things-to-do/${country}`);
    }

    return (
        <div className="search-page">
            <Header/>
            <img alt="landscape-img" src={landscape} className="search-page__img"/>
            <CountrySelect onChange={onCountryChange}/>
        </div>
    );
}

export default SearchPage;