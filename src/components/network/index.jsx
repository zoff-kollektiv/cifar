import React, { Component, Fragment } from 'react';

import Constraint from '../constraint';
import renderNetwork, { getWindowWidth } from './network';
import styles from './styles';

class Network extends Component {
  network = React.createRef();

  componentDidMount() {
    const { data, images } = this.props;

    renderNetwork(this.network.current, data, images);

    window.addEventListener('resize', () => {
      // only re-render on large screens; below scale
      if (getWindowWidth() >= 500) {
        renderNetwork(this.network.current, data, images);
      }
    });
  }

  render() {
    return (
      <Fragment>
        <style jsx>{styles}</style>

        <div className="network" ref={this.network} />

        <div className="labels">
          <Constraint>
            <div className="labels-list-container">
              <h5>Connection types</h5>

              <ul>
                <li>
                  <span className="color color--family" /> Family
                </li>

                <li>
                  <span className="color color--government" /> Government
                </li>

                <li>
                  <span className="color color--private-sector" /> Private
                  sector
                </li>
              </ul>
            </div>
          </Constraint>
        </div>
      </Fragment>
    );
  }
}

export default Network;
