import { Component } from 'react';

class Bezier extends Component {
    speed = 0.5;
    getBezierBasis(i, n, t) {
        function f(n) {
            if (n <= 1) {
                return 1;
            } else {
                return n * f(n - 1);
            }
        }

        return (f(n) / (f(i) * f(n - i))) * Math.pow(t, i) * Math.pow(1 - t, n - i);
    }

    logDots(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].x, arr[i].y);
        }
    }

    getBezierCurve(arr) {
        const step = 0.01;

        let res = [];

        for (let t = 0; t < 1 + step; t += step) {
            if (t > 1) {
                t = 1;
            }

            let ytmp = 0;
            let xtmp = 0;

            for (let i = 0; i < arr.length; i++) {
                const b = this.getBezierBasis(i, arr.length - 1, t);
                xtmp += arr[i].x * b;
                ytmp += arr[i].y * b;
            }
            res.push({ x: xtmp, y: ytmp });
        }

        return res;
    }

    draw(arrayCords, i) {
        this.ctx.lineTo(arrayCords[i].x, arrayCords[i].y);
        this.ctx.stroke();
    }

    randomCords() {
        return [
            {
                x: Math.floor(Math.random() * 600),
                y: Math.floor(Math.random() * 600)
            },
            {
                x: Math.floor(Math.random() * 600),
                y: Math.floor(Math.random() * 600)
            },
            {
                x: Math.floor(Math.random() * 600),
                y: Math.floor(Math.random() * 600)
            },
            {
                x: Math.floor(Math.random() * 600),
                y: Math.floor(Math.random() * 600)
            },
            {
                x: Math.floor(Math.random() * 600),
                y: Math.floor(Math.random() * 600)
            },
            {
                x: Math.floor(Math.random() * 600),
                y: Math.floor(Math.random() * 600)
            },
            {
                x: Math.floor(Math.random() * 600),
                y: Math.floor(Math.random() * 600)
            }
        ];
    }
}

export default Bezier;
