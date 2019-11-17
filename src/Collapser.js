import React, {Component} from 'react';
import request from './data/captain.json';
import Item from './Item';

class Collapser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapse: true
    }
    this.collapseBlock = this.collapseBlock.bind(this);
  }

  collapseBlock(){
    this.setState((oldState) => ({collapse: !oldState.collapse}));
  }

  render(){
    return(
      <div className={this.state.collapse? "open": "closed"} data-testid="collapse-block">
        <button type="button"
          className="btn btn-danger"
          onClick={this.collapseBlock}
          data-testid="collapse-button">
        </button>
        {this.props.render(this.state.collapse)}
      </div>
    )
  }
}

export default Collapser;
