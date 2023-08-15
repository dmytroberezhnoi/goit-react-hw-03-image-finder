import PropTypes from 'prop-types';

import React from 'react';
import { ModalWindow } from '../Modal/Modal';

import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends React.Component {
  state = {
    modalIsOpen: false,
  };

  toogleModal = () => {
    this.setState(prevState => ({
      modalIsOpen: !prevState.modalIsOpen,
    }));
  };

  render() {
    const { id, tags, webformatURL, largeImageURL } = this.props;
    const { modalIsOpen } = this.state;

    return (
      <li className={css.imageGalleryItem} key={id}>
        <img
          src={webformatURL}
          alt={tags}
          onClick={this.toogleModal}
          className={css.imageGalleryItemImage}
        />
        {modalIsOpen && (
          <ModalWindow
            isOpen={modalIsOpen}
            tags={tags}
            largeImageURL={largeImageURL}
            onClose={this.toogleModal}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.string,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
