import React, { Component } from 'react';
import PropTypes from 'prop-types';

interface RainProps {
  numDrops: number;
  zIndex: number;
  size: number;
  color: string;
  velocity: number;
}

interface RainState {}

class MyRain extends Component<RainProps, RainState> {
    static defaultProps = {
    zIndex: 1000,
    size: 2,
    color: '#FFFFFF',
    velocity: 15
  };

  componentDidMount() {
    this.startRain();
  }

  componentDidUpdate(prevProps: RainProps) {
    if(this.props.numDrops !== prevProps.numDrops) {
      this.stopRain();
      this.startRain()
    }
  }

  componentWillUnmount() {
    this.stopRain();
  }

  startRain() {
    const rainSection = document.getElementById('Rain');
    if (!rainSection) return;

    const { innerWidth: width, innerHeight: height } = window;
    console.log("width:", width);
    console.log("height:", height);

    for (let i = 1; i < this.props.numDrops; i++) {
      const dropLeft = this.randRange(0, width);
      const dropTop = this.randRange(-1000, 1400);

      const drop = document.createElement('div');
      drop.setAttribute('class', 'drop');
      drop.setAttribute('id', `drop${i}`);

      rainSection.appendChild(drop);

      drop.style.left = `${dropLeft}px`;
      drop.style.top = `${dropTop}px`;
      drop.style.zIndex = `${this.props.zIndex}`;
      drop.style.width = `${this.props.size}px`;
      drop.style.height = `${this.props.size * 5}px`;
      drop.style.backgroundColor = this.props.color;

      this.animate(drop);
    }
  }

  stopRain() {
    const rainSection = document.getElementById('Rain');
    if (!rainSection) return;

    while (rainSection.firstChild) {
      rainSection.removeChild(rainSection.firstChild);
    }
  }

  animate = (drop: HTMLElement) => {
    let position = parseInt(drop.style.top, 10);
    const moveRain = () => {
      if (position >= 1400) {
        position = -25;
      }
      position += this.props.velocity;
      drop.style.top = `${position}px`;
      requestAnimationFrame(moveRain);
    };
    requestAnimationFrame(moveRain);
  }

  randRange(minNum: number, maxNum: number): number {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  }

  render() {
    return (
      <div id="Rain" style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'none',
        overflow: 'hidden'
      }}></div>
    );
  }
}

export default MyRain;
