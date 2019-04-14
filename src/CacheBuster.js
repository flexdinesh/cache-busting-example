import React from 'react';
import { semverGreaterThan } from './helper';
import packageJson from '../package.json';
global.appVersion = packageJson.version;

class CacheBuster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAppReady: false
    };
  }

  componentDidMount() {
    fetch('/meta.json')
      .then((response) => response.json())
      .then((meta) => {
        console.log({ meta });
        const latestVersion = meta.version;
        const currentVersion = global.appVersion;

        const shouldForceRefresh = semverGreaterThan(latestVersion, currentVersion);
        if (shouldForceRefresh) {
          console.log(`We have a new version - ${latestVersion}. Going to force refresh`);
          window.location.reload(true);
        } else {
          console.log(`You already have the latest version - ${latestVersion}. No cache refresh needed.`);
        }

        this.setState({ isAppReady: true });
      });
  }
  render() {
    const { isAppReady } = this.state;
    if (!isAppReady) return null;
    return this.props.children;
  }
}

export default CacheBuster;
