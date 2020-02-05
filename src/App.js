import React, { Component } from 'react';
import Counters from './components/counters';
import './App.css';



class App extends Component {
  state = {
   counters:[
      { id: 1, value: 0, liked: true },
      { id: 2, value: 0, liked: false },
      { id: 3, value: 0, liked: false },
      { id: 4, value: 0, liked: false }
    ]
  };

  handleIncrement = counter => {
     /* Quando clicar criar um clone do array counters*/
    console.log('original counters'+ JSON.stringify(counter));
    const counters = [...this.state.counters];
    /* Agora, cada item do array tem um objeto. Vamos identificar qual item foi clicado e clonar o objeto*/
    console.log('copia counters' + JSON.stringify(counter));
    const index = counters.indexOf(counter);
    console.log('index: '+index);
    counters[index] = {...counter};
    counters[index].value ++;
    this.setState({ counters});
    console.log(this.state.counters[index]);
  };

  handleDecrement = counter => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value --;
    this.setState({ counters});
    console.log(this.state.counters[index]);
  };

  /* O METODO ABAIXO VAI MODIFICAR O STATE DESSE COMPONENTE ENTAO O METODO/FUNCAO TEM QUE ESTAR NESSE COMPONENT */
  /* counterId é o (this.props.counter.id) que está sendo passado lá na chamada da funcao diretamente no botao ( ver counter.jsx)  */
  handleDelete =(counterId) =>{
    console.log('Event Handler Called', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters})
  };

  handleReset =() =>{
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleLike = (counter) => {
    console.log('Like clicked', counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]= {...counters[index]};
    counters[index].liked = !counters[index].liked;
    this.setState({ counters});
  };


  render() {
    return (
      <React.Fragment>
        
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            /> 
        </main>
      </React.Fragment>
    );
  }
}

export default App;