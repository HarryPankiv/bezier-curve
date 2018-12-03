import React from 'react';
import Bezier from './Bezier';
import { Wrapper, Canvas } from './Styles';
import flatten from 'lodash.flatten'

class App extends Bezier {
    constructor(props) {
        super(props);

        this.state = {
            cords: [],
            x: 0,
            y: 0,
            history: [],
            animation: 100,
            showCords: false
        };
    }
    componentDidMount = () => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        this.ctx = ctx;
        this.height = canvas.height;
        this.width = canvas.width;
        
        this.generateRandomCurve();
    };
    
    componentDidUpdate = (prevProps, prevState) => {
        console.log(this.state);
        if (prevState.cords !== this.state.cords && this.state.cords) {
            this.drawCurve();
        }

        if (prevState.animation !== this.state.animation) {
            this.drawCurve();
        }
    };

    drawBezier = (cords, timeout) => {
        let arrayCords = this.getBezierCurve(cords);
        this.ctx.beginPath();
        this.ctx.moveTo(arrayCords[0].x, arrayCords[0].y);
    
        for (let i = 0; i < this.state.animation; i++) {
            this.draw(arrayCords, i);
        }

        /*let i = 0;
        setTimeout( () => {
            const interval = setInterval(() => {
                this.draw(arrayCords, i);
                i++;
                if (i >= arrayCords.length) {
                    clearInterval(interval);
                    this.ctx.closePath();
                    // this.ctx.moveTo(0, 0);
                }
            }, this.speed);
        }, timeout);
        */
    }

    drawCurve = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
        if (this.state.cords.length !== 0) {
            const arrayCords = this.getBezierCurve(this.state.cords);
            this.drawBezier(arrayCords, 0);
        }

        if (this.state.history.length !== 0) { 
            this.state.history.map( (el, i) => { 
                const cords = this.getBezierCurve(el);
                this.drawBezier(cords, 750 + 750*i);
            }) 
        }
    };

    generateRandomCurve = () => {
        const cords = this.randomCords();
        this.setState({ cords });
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    clear = () => {
        this.setState({ cords: [], history: [] });
        this.ctx.clearRect(0, 0, this.height, this.width);
    };

    addPoint = () => {
        const { cords, x, y } = this.state;
        this.setState({ cords: [...cords, { x, y }] });
    };

    newCurve = () => {
        const { history, cords } = this.state;
        this.setState({history: [...history, cords], cords: []});
        this.ctx.moveTo(0, 0);
        // this.generateRandomCurve();
    }

    mergeCurves = () => {
        const { history, cords } = this.state;
        this.setState({cords: [...flatten(history), ...cords], history: []});
    }

    showCords = () => {
        this.setState({showCords: !this.state.showCords})
    }

    render() {
        const { x, y, animation, cords, showCords } = this.state;
        return (
            <React.Fragment>
                <Wrapper>
                    <span>x: </span>
                    <input type="number" name="x" value={x} onChange={this.handleChange} />
                    <span>y: </span>
                    <input type="number" name="y" value={y} onChange={this.handleChange} />
                    <button onClick={this.addPoint}>add point</button>
                    <span>animation: </span>
                    <input type="range" name="animation" value={animation} onChange={this.handleChange} />
                    <button onClick={this.generateRandomCurve}>random curve</button>
                    <button onClick={this.clear}>clear</button>
                    <button onClick={this.newCurve}>new curve</button>
                    <button onClick={this.mergeCurves}>merge curves</button>
                    <button onClick={this.showCords}>show points</button>
                    { showCords && <div className="cords">
                        <h4>current cords: </h4>
                        {cords.map( el => <div>{el.x}, {el.y}</div>)}
                    </div>}
                </Wrapper>
                <Canvas id="canvas" height={600} width={600} />
            </React.Fragment>
        );
    }
}

export default App;
