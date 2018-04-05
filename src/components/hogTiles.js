import React from 'react'
import hogs from '../porkers_data';
console.log(hogs)


class HogTiles extends React.Component{
// state determines whether we show details of the hog or not
constructor(){
  super()
  this.state = {
    click: false
  }

}

//determine what happens when we click on hog
  handleHogClick = () => {
    if (this.state.click === false){
      this.setState({click: true})
    } else {
      this.setState({click:false})
    }
  }

  hogTileUnclicked = (props) => {
    return (
      <div>
        {hogs.map(hog => {
          return (
          <div>
            hog.name
          </div>
          )
        })}
      </div>
    )
  }

  hogTileClicked = (props) => {
    return (
      <div>
        {hogs.map(hog => {
          return (
          <div>
            <p>hog.name</p>
            <p>hog.greased</p>
            <p>hog.specialty</p>
            <p>hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']</p>
            <p>hog['highest medal achieved']</p>
          </div>
          )
        })
      }
      </div>
    )
  }


  render(){
    return(
    // need conditional rendering depending on if state is clicked
    if (this.state.click === false) {
      {hogTileUnclicked(props)}
      //need on click method for tile for handleHogClick method made before
    }else {
      // need on click method for tile for handleHogClick method
      {hogTileClicked(props)}
    }
  )
  }




}

export default HogTiles;
