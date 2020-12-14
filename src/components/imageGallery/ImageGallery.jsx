import React from 'react';
import propTypes from 'prop-types';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import styles from './imageGallery.module.css';


const ImageGallery = ({images, onClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          smallImage={image.webformatURL}
          largeImage={image.largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
    images: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            webformatURL: propTypes.string.isRequired,
            largeImageURL: propTypes.string.isRequired,
        }),
    ).isRequired,
    onClick: propTypes.func.isRequired,
};

export default ImageGallery;