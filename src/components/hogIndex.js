import React from 'react'
import hogs from '../porkers_data';
// console.log(hogs)

class HogIndex extends React.Component {



  generateHog = () => {
    return hogs.map((hog) => {
      return <div className="ui grid container" >
        <h2 onClick={ this.handleHogClick } className="ui eight wide column"> { hog.name }</h2>
    </div>
    })
  }

  generateHogInfo = () => {
    return hogs.map((hog) => {
      return <div className="ui eight wide column" id={ hog.name } onClick={ this.handleHogClick } >
        <p>{ hog.specialty }</p>
        <p>{ hog.greased }</p>
        <p>{ hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] }</p>
        <p>{ hog['highest medal achieved'] }</p>
      </div>
    })
  }

  render(){
    const hogListDetails = this.generateHogInfo()
    const hogList = this.generateHog()
    return (
        <div>
          { (this.state.click) ? hogListDetails : hogList }
        </div>

    )



  }


}


export default HogIndex;
