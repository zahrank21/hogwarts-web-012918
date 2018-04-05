import React from 'react'
import hogs from '../porkers_data';
// console.log(hogs)

class HogIndex extends React.Component {

  generateHog = () => {
    return hogs.map((hog) => {
         return hog
        console.log(hog.name)
    })
  }

  render(){
    const hogsZ = this.generateHog()
    console.log(hogsZ)
    return (
        <div>
          <h1>
          { hogsZ.name }
        </h1>
        </div>

    )



  }


}


export default HogIndex;
