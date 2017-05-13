import React from 'react';
import LandingInfoContainer from './LandingInfoContainer.jsx';
import DiveSiteInfoContainer from './DiveSiteInfoContainer.jsx';



class LeftPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DiveSiteInfoContainer graphHeight={this.props.graphHeight}
                                 data={this.props.data}
                                 description={this.props.description}
                                 display={this.props.shouldDisplay}
                                 weatherdata={this.props.weatherdata} />

          <LandingInfoContainer onDiveSite={this.props.weatherdata}
                                display={this.props.shouldDisplay}
                                landingWeather={this.props.landingWeather}/>
      </div>
    )
  }
}


export default LeftPanel;