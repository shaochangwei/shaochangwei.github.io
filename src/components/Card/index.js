import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
/**
 * 卡片组件
 * style  object 卡片样式
 * title  string 卡片标题
 * extra  string 卡片小标题，时间关系，后期可以改成自定义组件
 * url    string 小标题链接
 * children 自定义内容区
 */
export default class Card extends React.Component {
  static propTypes = {
    style: PropTypes.object,
  };

  static defaultProps = {
    style:{
      width: 850,
      height: 300,
    }
  };
  render(){
    const { style, title, url, extra, children } = this.props
    return(
      <div className='card' style={style}>
        <div className='cardHeadr'>{title||''}<a href={url||'https://job.alibaba.com/zhaopin/index.htm'}>{extra||''}</a></div>
        <div className='cardContent'>
          {children}
        </div>
      </div>
    )
  }
}