import React from 'react';
import SpriteSVG from './sprite.svg';

const Icons = ({name, size = 16, className = null}) =>
    <svg className={className} width={size} height={size}>
        <use xlinkHref={`${SpriteSVG}#${name}`}/>
    </svg>

export default Icons;