import PropTypes from 'prop-types';

import React from 'react';
import { ModalWindow } from '../Modal/Modal';

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
      <li className="gallery-item" key={id}>
        <img src={webformatURL} alt={tags} onClick={this.toogleModal} />
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
