import { InfinitySpin } from 'react-loader-spinner';

import css from './Loader.module.css';

export const Loader = props => (
  <div className={css.loader}>
    <InfinitySpin width="200" color="#4fa94d " />;
  </div>
);
