import React, { Component } from 'react'



function Square(props) {

    const buttonClass = (props.value) ? 
                        (props.value === "red" ? "square red" : "square yellow") 
                        : "square"
  
    return (
        <button className={buttonClass} onClick={props.clickhandling}>
        </button>
    );
  }
  
export class Board extends Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(49).fill(null),
        xIsNext: true, // valore booleano per capire quale giocatore sta giocando ( true = Rosso = X)
      };
    }
  
    
  
  handleClick(i) {
      const squares = this.state.squares.slice();
      console.log(i);
      let correctInsertionIndex = gravity(squares, i);
      console.log(correctInsertionIndex)
      squares[correctInsertionIndex] = this.state.xIsNext ? "red" : "yellow";
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      }, () => {
        let win = calculateWinner(squares);
        if(win) {
          alert("Siamo i vincitori", win)
        } 
      })
    }
  
    renderSquare(i) {
      return (
        <Square
          value={this.state.squares[i]}
          clickhandling={() => this.handleClick(i)}
        />
      );
  }
  
  render() {
  
      const status = 'Prossimo giocatore: ' + (this.state.xIsNext ? 'rosso' : 'giallo');
      
      const board = [];
        /**
         * non avrei dovuto inserire board come array vuoto
         * 
         * const board = squares.map( (row, index) => {  return <div>{row}</div> })
         * 
         * */ 


      for(let i = 0; i < 7; i++) {
        let row = [];
        for(let y = i * 7; y < 7 * (i + 1); y++) {
          row.push(<div className="inline">{this.renderSquare(y)}</div>)
        }
        board.push(<div className="board-row">{row}</div>)
      }
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="boardCorner">
            {board}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="board">
            <Board />
          </div>
        </div>
      );
    }
  }



  
  // Soluzione poco elegante
  function calculateWinner(squares) {

    let matrix = new Array(7);

    for(let i = 0; i < matrix.length; i++) {

      matrix[i] = new Array(7);
    }
  
    for(let i = 0; i < 7; i++) {
      for(let j = 0; j < 7; j++) {
        matrix[i][j] = squares[i*7+j]
      }
    }
  
    for(let row = 0;  row < 7; row++) {
  
      for(let col = 0; col < 7; col++) {

        let position = matrix[row][col];
        if(position) {
   
          if (col + 3 < 7 &&
            position === matrix[row][col+1] && // look right
            position === matrix[row][col+2] &&
            position === matrix[row][col+3])
            return position;
            if (row + 3 < 7) {
              if (position === matrix[row+1][col] && // look up
                  position === matrix[row+2][col] &&
                  position === matrix[row+3][col])
                  return position;
              if (col + 3 < 7 &&
                  position === matrix[row+1][col+1] && // look up & right
                  position === matrix[row+2][col+2] &&
                  position === matrix[row+3][col+3])
                  return position;
              if (col - 3 >= 0 &&
                  position === matrix[row+1][col-1] && // look up & left
                  position === matrix[row+2][col-2] &&
                  position === matrix[row+3][col-3])
                  return position;
            }
        }
        
      }
    }

    return false
  
    
  }

  
  function gravity(squares, i) {
      console.log(squares, i)

      if(i < 0 || i > 48) {     
        console.log(1)
  
        return false;
      } 

      if(squares[i]) {
        let x = i-7; 
        return gravity(squares, x);
      }

      if(!squares[i+7]) {

         if(i+7 > 48) {
            return i;
         }
  

        let x = i+7;
        return gravity(squares, x)
      }

       return i;
      
    }

export default Game
