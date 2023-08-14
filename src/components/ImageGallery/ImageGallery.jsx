import PropTypes from 'prop-types';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => (
  <ul class="gallery">
    {images.map(({ id, tags, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        id={id}
        tags={tags}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
      />
    ))}
  </ul>
);
