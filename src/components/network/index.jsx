import React, { Component, Fragment } from 'react';

import renderNetwork from './network';
import styles from './styles';

class Network extends Component {
  network = React.createRef();

  componentDidMount () {
    const { data } = this.props;

    renderNetwork(this.network.current, data);

    window.addEventListener('resize', () => {
      renderNetwork(this.network.current, data);
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
