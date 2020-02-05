import React, {Component} from 'react';
import Like from './like';




class Counter extends Component {
   
    render() {
      console.log('props', this.props.value);

      return (
        <div className="container" style={{marginTop: 20}}>
          <div className="row">
            <div className="col-sm-2 counter">
                <h4><span className="badge badge-secondary">{this.formatCount()}</span></h4>
            </div>
            <div className="col-sm-10 counter-btn">
            <button onClick={() => this.props.onIncrement(this.props.counter)} type="button" className="btn btn-primary">+</button> &nbsp;
            <button onClick={() => this.props.onDecrement(this.props.counter)} type="button" className="btn btn-outline-primary" disabled={this.props.counter.value === 0 ? 'disabled' : ''}>-</button> &nbsp;
            <button onClick={() => this.props.onDelete(this.props.counter.id)}type="button" className="btn btn-outline-danger">Delete</button> &nbsp;
            <Like liked={this.props.counter.liked} onClickx={() => this.props.onLike(this.props.counter)}/>

            </div>
        </div>
    </div>
      )
    }

    formatCount() {
      const { value } = this.props.counter;
      return value === 0 ? '0' : value;
    }

  
  }
  
  export default Counter;









 