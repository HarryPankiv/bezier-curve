import React from 'react';
import Bezier from './Bezier';
import { Wrapper, Canvas } from './Styles';

class App extends Bezier {
    constructor(props) {
        super(props);

        this.state = {
            cords: [],
            x: 0,
            y: 0,
            history: []
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
        if (prevState.cords !== this.state.cords) {
            this.drawCurve();
        }
    };

    drawBezier = () => {
        const arrayCords = this.getBezierCurve(this.state.cords);
        this.ctx.beginPath();
        this.ctx.moveTo(arrayCords[0].x, arrayCords[0].y);
    
        let i = 0;
        const interval = setInterval(() => {
            this.draw(arrayCords, i);
            i++;
            if (i >= arrayCords.length) {
                clearInterval(interval);
            }
        }, this.speed);
    }

    drawCurve = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.drawBezier()
    };

    generateRandomCurve = () => {
        const cords = this.randomCords();
        this.setState({ cords });
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    clear = () => {
        this.setState({ cords: [] });
        this.ctx.clearRect(0, 0, this.height, this.width);
    };

    addPoint = () => {
        const { cords, x, y } = this.state;
        this.setState({ cords: [...cords, { x, y }] });
    };

    newCurve = () => {
        const { history, cords } = this.state;
        this.setState({history: [...history, cords], cords: []});
        this.drawBezier();
    }

    render() {
        const { x, y } = this.state;
        return (
            <React.Fragment>
                <Wrapper>
                    <input type="number" name="x" value={x} onChange={this.handleChange} />
                    <input type="number" name="y" value={y} onChange={this.handleChange} />
                    <button onClick={this.addPoint}>add point</button>
                    <button onClick={this.generateRandomCurve}>random curve</button>
                    <button onClick={this.clear}>clear</button>
                    <button onClick={this.newCurve}>new curve</button>
                </Wrapper>
                <Canvas id="canvas" height={600} width={600} />
            </React.Fragment>
        );
    }
}

export default App;
