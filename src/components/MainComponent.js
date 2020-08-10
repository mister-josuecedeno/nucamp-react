import React, { Component } from 'react';
import Directory from './DirectoryComponent';
//import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      selectedCampsite: null,
    };
  }

  onCampsiteSelect(campsiteId) {
    this.setState({ selectedCampsite: campsiteId });
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    // <Directory
    //   campsites={this.state.campsites}
    //   onClick={(campsiteId) => this.onCampsiteSelect(campsiteId)}
    // />
    // <CampsiteInfo
    //   campsite={
    //     this.state.campsites.filter(
    //       (campsite) => campsite.id === this.state.selectedCampsite
    //     )[0]
    //   }
    // />

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route
            exact
            path='/directory'
            render={() => <Directory campsites={this.state.campsites} />}
          />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
