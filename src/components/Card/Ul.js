import React from 'react';
/**
 * 轮播滚动组件
 * children 可以自定义要滚动的内容
 */
export default class Card extends React.Component {
  state={top:0}
  componentDidMount() {
    if (!this.Ref) {
      return;
    }
    this.height = Math.abs(this.Ref.clientHeight)/2;
    this.setInterval();
  }
  setInterval() {
    this.timer = setInterval(() => {
      this.setState(({top}) => {
        const moveTop = Math.abs(top) >= this.height ? 0 : --top;
        return {
          top: moveTop,
        };
      });
    }, 30);
  }
  handleMouserOver = () => {
    clearInterval(this.timer);
  }

  handleMouserOut = () => {
    this.setInterval();
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  render(){
    const {top} = this.state
    const {children}= this.props
    return (
      <ul style={{top: top}}
        ref={ref => (this.Ref = ref)}
        onMouseOver={this.handleMouserOver}
        onMouseOut={this.handleMouserOut}>
         {children}
      </ul>
    );
  }
}