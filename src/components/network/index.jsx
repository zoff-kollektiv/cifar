import React, { Component } from 'react';

import renderNetwork from './network';
import styles from './styles';

class Network extends Component {
  network = React.createRef();

  componentDidMount () {
    renderNetwork(this.network.current);
  }

  render () {
    return (
      <div>
        <style jsx global>{styles}</style>

        <div className="network" ref={this.network} />
      </div>
    )
  }
}

export default withFauxDOM(Network);
