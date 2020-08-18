import React, { Component } from "react";
import Kekule from "kekule";
import "./KekuleComposer.css";

export class KekuleComposer extends Component {
  composerCont = React.createRef();

  componentDidMount() {
    this.showComposer();
  }

  showComposer() {
    const composer = new Kekule.Editor.Composer(this.composerCont.current);
  }

  render() {
    return (
      <div className="row" style={styles.row}>
        <div className="col-lg-1"></div>
        <div className="col-lg-10" style={styles.col}>
          <div
            className="kekule-widget-cont"
            style={{ width: "100%", overflowX: "auto" }}
            ref={this.composerCont}
          />
          <h4 className="kekule-widget-msg">
            You have turn your phone to a horizontal position in order to use the Chemical
            Composer
          </h4>
        </div>
        <div className="col-lg-1"></div>
      </div>
    );
  }
}

const styles = {
  row: {
    marginBottom: "40px",
  },
  col: {
    padding: "10px, 0px",
  },
};

export default KekuleComposer;
