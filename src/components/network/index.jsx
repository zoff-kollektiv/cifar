import React, { Component, Fragment } from 'react';

import renderNetwork from './network';
import styles from './styles';

class Network extends Component {
  network = React.createRef();

  componentDidMount () {
    renderNetwork(this.network.current);

    window.addEventListener('resize', () => {
      renderNetwork(this.network.current);
    });
  }

  render () {
    return (
      <Fragment>
        <style jsx global>{styles}</style>

        <div className="network" ref={this.network} />
      </Fragment>
    )
  }
}

export default Network;
