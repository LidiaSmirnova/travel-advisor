import AttractionCard from "../attraction-card/AttractionCard";
import * as React from "react";

import "./Attractions.scss";

function Attractions(){
    return (
        <div className="attractions">
            <AttractionCard/>
            <AttractionCard/>
            <AttractionCard/>
            <AttractionCard/>
        </div>
    );
}

export default Attractions;