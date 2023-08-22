import React from 'react';

import { Notify } from 'notiflix';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

import * as ImageService from '../service/image-service';

import css from './App.module.css';

export class App extends React.Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    error: null,
    isEmpty: false,
    isShowButton: false,
  };

  abortCtrl;

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages(query, page);
    }

    if (page !== 1) {
      window.scrollBy({
        top: 250 * 2,
        behavior: 'smooth',
      });
    }
  }

  handleSubmit = value => {
    if (this.state.query === value) {
      Notify.info('Please enter another value or click "Load more"!');
      return;
    }
    this.setState({
      query: value,
      page: 1,
      images: [],
      error: null,
      isEmpty: false,
      isShowButton: false,
    });
  };

  getImages = async (query, page) => {
    const perPage = 12;
    if (this.abortCtrl) {
      this.abortCtrl.abort();
    }

    this.abortCtrl = new AbortController();

    this.setState({ isLoading: true });
    try {
      const { hits, totalHits } = await ImageService.getImages(query, page);

      if (!hits.length) {
        this.setState({ isEmpty: true });
        return;
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        isShowButton: this.state.page < Math.ceil(totalHits / perPage),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleClickBtn = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.images.length > 0 && (
          <ImageGallery images={this.state.images} />
        )}
        {this.state.isEmpty && (
          <div className={css.message}>
            Sorry. There are no images for your request
          </div>
        )}
        {this.state.error && (
          <div className={css.message}>{this.state.error}</div>
        )}
        {this.state.isLoading && <Loader />}
        {this.state.isShowButton && !this.state.isLoading && (
          <Button onClick={this.handleClickBtn} />
        )}
      </>
    );
  }
}
