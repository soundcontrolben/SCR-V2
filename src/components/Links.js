import React from 'react';

const Links = ({links}) => {

    const myLinks = links;

    const socialIcons = Object.keys(myLinks).map((key, index) => {
        const btn = `btn-social-icon btn-${key}`;
        const fa = `fa fa-${key}`;
        return (
            <div key={index}>
                <a className={btn} href={myLinks[key]}>
                    <span className={fa}></span>
                </a>
            </div>
        )
    });

    return (
        <div className="link-wrapper">{socialIcons}</div>
    )

};

Links.defaultProps = {
    links: {}
};

export default Links;
