import React, {Component} from 'react';
import Counter from './counter';



class Counters extends Component {
      render() {
    
        const { onReset, counters, onDelete, onIncrement, onDecrement, onLike} = this.props;
          return (
            <div>
              <button onClick={onReset} className="btn btn-primary btn-sm m-2"> Reset </button>
                  {this.props.counters.map(counter => (
                    <div>
                    <Counter key={counter.id}
                    onDelete = {onDelete}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    counter={counter}
                    onLike={onLike}>
                  </Counter>  &nbsp;
                  </div>
                  ))}
            </div>
        );
      }
    }
    
    export default Counters;