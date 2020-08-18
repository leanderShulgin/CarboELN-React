import React, { Component } from "react";


import Kekule from 'kekule'


export class KekuleComposer extends Component {
  
  composerCont = React.createRef()


  componentDidMount() {
    this.showComposer()
  }

  showComposer() {
    const composer = new Kekule.Editor.Composer(this.composerCont.current)
  }

  render() {
    return (
      <div className= "kekule-widget-cont" ref={this.composerCont} />
    )
  }
}

export default KekuleComposer;
