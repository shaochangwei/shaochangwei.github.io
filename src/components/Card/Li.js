import React from 'react';
export default class Card extends React.Component {
  
  render(){
    const {name,area,time,url} = this.props.data;
    return(
        <li className="liSum" style={{
          display: 'flex',
          padding: '0 14px',
          lineHeight: '50px',
          fontSize: '14px'
        }}>
          <a className="liName" href={url||'job.alibaba.com/zhaopin/index.htm'} style={{display:'inline-block',
            width:'400px',
            marginRight: '80px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            color:'#3C99d8'}
            }>{name||''}</a>
          <span className="liArea" style={{width:'202px',marginRight:'70px',color:'rgba(0,0,0,0.6)'}}>{area||''}</span>
          <span className="liTime" style={{width:'70px',textAlign:'right',color:'rgba(31,56,88,0.6)'}}>{time||''}</span>
        </li>
    )
  }
}