import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;

    input[type='number'] {
        border: none;
        outline: none;
        border-bottom: 1px solid #3d3d3d;
        margin: 5px;
        height: 20px;
    }

    button {
        padding: 6px 20px;
        background: #3d3d3d;
        color: ghostwhite;
        outline: none;
        border: none;
        margin: 15px;
        border-radius: 5px;
    }

    input[type='range'] {
        margin: 0 10px;
        height: 21px;
        -webkit-appearance: none;
        width: 200px;
    }
    input[type='range']:focus {
        outline: none;
    }
    input[type='range']::-webkit-slider-runnable-track {
        width: 200px;
        height: 3px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000;
        background: #424242;
        border-radius: 50px;
        border: 0px solid #010101;
    }
    input[type='range']::-webkit-slider-thumb {
        box-shadow: 0px 0px 0px #000031;
        border: 0px solid #00001e;
        height: 15px;
        width: 15px;
        border-radius: 15px;
        background: #009688;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -6px;
    }
    input[type='range']:focus::-webkit-slider-runnable-track {
        background: #424242;
    }
    input[type='range']::-moz-range-track {
        width: 200px;
        height: 3px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000;
        background: #424242;
        border-radius: 50px;
        border: 0px solid #010101;
    }
    input[type='range']::-moz-range-thumb {
        box-shadow: 0px 0px 0px #000031;
        border: 0px solid #00001e;
        height: 15px;
        width: 15px;
        border-radius: 15px;
        background: #009688;
        cursor: pointer;
    }
    input[type='range']::-ms-track {
        width: 200px;
        height: 3px;
        cursor: pointer;
        animate: 0.2s;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }
    input[type='range']::-ms-fill-lower {
        background: #424242;
        border: 0px solid #010101;
        border-radius: 100px;
        box-shadow: 0px 0px 0px #000000;
    }
    input[type='range']::-ms-fill-upper {
        background: #424242;
        border: 0px solid #010101;
        border-radius: 100px;
        box-shadow: 0px 0px 0px #000000;
    }
    input[type='range']::-ms-thumb {
        margin-top: 1px;
        box-shadow: 0px 0px 0px #000031;
        border: 0px solid #00001e;
        height: 15px;
        width: 15px;
        border-radius: 15px;
        background: #009688;
        cursor: pointer;
    }
    input[type='range']:focus::-ms-fill-lower {
        background: #424242;
    }
    input[type='range']:focus::-ms-fill-upper {
        background: #424242;
    }

    .cords {
        position: absolute;
        right: 70px;
        top: 60px;
    }
`;

export const Canvas = styled.canvas`
    display: block;
    margin: auto;
    border: 1px solid #3d3d3d;
`;
