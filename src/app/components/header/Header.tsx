import * as React from "react";
import koala from "../../static/images/koala2.png";
import {AppBar, Chip, IconButton, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

import "./Header.scss";

interface HeaderProps {
    countryName?: string | null;
}

const Header: React.FC<HeaderProps> = ({countryName}) => {
    const navigate = useNavigate();
    const hasCountry = countryName !== undefined;

    return (
        <AppBar position="static" className="header">
            <Toolbar>
                <div className="logo-block">
                    <IconButton className="header__home-btn" onClick={() => navigate("/")}>
                        <img alt="logo" src={koala}/>
                    </IconButton>
                    <Typography component="div" className="header__title">
                        Travel Advisor
                    </Typography>
                </div>
                {hasCountry && <Chip label={`#${countryName}`} color="success" className="header__country"/>}
            </Toolbar>
        </AppBar>
    );
}

export default Header;