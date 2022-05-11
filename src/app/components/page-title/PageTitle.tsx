import * as React from "react";

import "./PageTitle.scss"

interface PageTitleProps {
    title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({title}) => {

    return (
        <div className="page-title">
            <div className="page-title__content">{title}</div>
        </div>
    );
}

export default PageTitle;