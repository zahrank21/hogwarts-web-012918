import React from 'react'


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
    }else {
      this.setState({click:false})
    }
  }

  render(){
    // need conditional rendering depending on if state is clicked
    if this.state.click === false{
      //need on click method for tile for handleHogClick method made before 
    }else {
      // need on click method for tile for handleHogClick method
    }
  }




}

export default HogTiles;
