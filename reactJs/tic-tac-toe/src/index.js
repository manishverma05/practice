import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }
    render() {
        return React.createElement('button', {
            onClick: () => this.setState({ value: 'X' })
        },
            this.state.value
        )
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null)
        }
    }

    handleCheck(i) {
        const sqrs = this.state.squares.slice();
        sqrs[i] = 'X';
        this.setState({ squares: sqrs });
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleCheck(i)} />;
    }

    render() {
        const status = 'Next player: X';
        return React.createElement('div', null,
            React.createElement('div', {
                className: 'status'
            },
                status
            ),
            React.createElement('div', {
                className: 'board-row'
            },
                this.renderSquare(0),
                this.renderSquare(1),
                this.renderSquare(2)
            ),
            React.createElement('div', {
                className: 'board-row'
            },
                this.renderSquare(3),
                this.renderSquare(4),
                this.renderSquare(5)
            ),
            React.createElement('div', {
                className: 'board-row'
            },
                this.renderSquare(6),
                this.renderSquare(7),
                this.renderSquare(8)
            )
        );
    }
}


class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  