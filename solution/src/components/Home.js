import React from 'react';

import {Link} from 'react-router-dom';

export default (props) => {
  return (
    <>
      <article>
        <Link to="/beers">
          <img src="/beers.png" width="705" height="250" alt="" />
          <span>All Beers</span>
        </Link>
        <p>
          Ea consectetur enim consequat consequat minim anim eiusmod pariatur cupidatat quis labore duis eiusmod dolor. Eiusmod voluptate ad officia est ex irure ad exercitation excepteur.
        </p>
      </article>

      <article>
        <Link to="/random-beer">
          <img src="/random-beer.png" width="705" height="250" alt="" />
          <span>Random beer</span>
        </Link>
        <p>
          Enim elit amet sint officia consectetur do ad ullamco nisi voluptate.
          Dolore exercitation sint velit occaecat minim duis eu qui ex tempor do elit adipisicing.
        </p>
      </article>

      <article>
        <Link to="/new-beer">
          <img src="/new-beer.png" width="705" height="250" alt="" />
          <span>New beer</span>
        </Link>
        <p>
          Adipisicing eu nulla deserunt laboris adipisicing minim. Irure aliquip et tempor qui et elit aute quis.
        </p>
      </article>
    </>
  );
}