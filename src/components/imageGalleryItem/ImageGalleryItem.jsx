import React from 'react';
import propTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({smallImage, largeImage, onClick}) => {
    return(
        <li className={styles.ImageGalleryItem}>
        <img
          onClick={() => onClick(largeImage)}
          src={smallImage}
          alt="galleryImg"
          className={styles.ImageGalleryItemImage}
        />
      </li>
    );
};

ImageGalleryItem.propTypes = {
    smallImage: propTypes.string.isRequired,
    largeImage: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
};

export default ImageGalleryItem;