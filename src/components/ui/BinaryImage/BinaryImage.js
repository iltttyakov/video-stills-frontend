import React from 'react';

const BinaryImage = (
    {
        data,
        type = 'image/png',
        className = null,
        width,
        height,
        alt
    }
) => {
    return (
        <img
            className={className}
            src={`data:${type};base64,${btoa(data)}`}
            width={width}
            height={height}
            alt={alt}
        />

    );
};

export default BinaryImage;