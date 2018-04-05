import React from 'react'
import hogs from '../porkers_data';
// console.log(hogs)

class HogIndex extends React.Component {

  constructor(){
    super()
    this.state = {
      hogsArr: []
    }
    this.hogArray()
  }

  hogArray(){
    hogs.forEach(hog =>  {
    let newHog = Object.assign({click: false}, hog)
    this.state.hogsArr.push(newHog)
    })
  }



  // hogRenderer = (e) => {
  //   if e.target.
  // }

  handleHogClick = (e) => {
    const hogId = parseInt(e.target.id)
    console.log(this.state.hogsArr[hogId].click)
    if (this.state.hogsArr[hogId].click === false) {
      this.setState({hogsArr[hogId].click: true})
      console.log(this.state.hogsArr[hogId].click)
    } else {
        this.setState({hogsArr[hogId].click: false})
        console.log(this.this.state.hogsArr[hogId].click)
    }
  }


    // if (this.state.hogArray.(['the hog we're clicking on'']).click === false){
  //
  //     return
  //     <div className="ui eight wide column" id={ hog.name } onClick={ this.handleHogClick } >
  //       <p>{ hog.specialty }</p>
  //       <p>{ hog.greased }</p>
  //       <p>{ hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] }</p>
  //       <p>{ hog['highest medal achieved'] }</p>
  //     </div>
  //   } else {
  //     this.setState({click:false})
  //
  //   }
  // }

  generateHog = () => {
    return this.state.hogsArr.map((hog) => {
      return <div className="ui grid container" >
        <h2 onClick={ this.handleHogClick } id={this.state.hogsArr.indexOf(hog)} className="ui eight wide column"> { hog.name }</h2>
    </div>
    })
  }

  // generateHogInfo = () => {
  //   return hogs.map((hog) => {
  //
  //   })
  // }

//only render the hogs details that are clicked
  render() {
    const hogList = this.generateHog()
    return (
    <div>
      { hogList }
    </div>

    )
  }

}


export default HogIndex;
