import React from 'react';
import { mainMenu, hotSearch, dataList } from '../components/config.js'
import Card from '../components/Card'
import './index.scss';
import Ul from '../components/Card/Ul.js'
import Li from '../components/Card/Li.js'
const url = 'https://job.alibaba.com/zhaopin/index.htm'
export default class App extends React.Component {
  
  render(){
     //复制一份数据防止滚动出空白；
     let dataSource = [...dataList,...dataList]
    return (
      <div >
        <div className='header'>
          <div className='headerContent'>
            <div className='logo'>
              <a className='logoImg' href={url} >
                <img src='https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png' style={{height:'20px'}} alt=' '/>
              </a>
              <i className='logoVertical'>|</i>
              <i className='logoWord'>社招官网</i>
            </div>
            <ul className='mainMenu'>
              {
                mainMenu.map((item,index)=>{
                  return <li key={index}><a href={url}>{item.label}</a></li>
                })
              }
            </ul>
            <div className='logIn' style={{opacity:'0.8'}}>欢迎来到阿里巴巴集团招聘！
              <a href={url}>登陆</a> | <a href={url}>注册</a>
            </div>
          </div>
        </div>
        <div className='banner'>
          <img className='bannerImg' src='https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png' style={{ verticalAlign:'middle', width:'100%',height:'100%'}} alt=' '/>
          <div className='bannerShade'></div>
          <div className='bannerContent'>
          <form>
            <div className='search' >
              <p>If not now, when?</p>
              <p>If not me, who?</p>
              <p className='chWord'>此时此刻，非我莫属！</p>
              <div className='searchBox'>
                <div></div>
                <input className='searchText' type='text' maxLength='30' placeholder='请输入职位关键词'></input>
                <input className='searchBtn' type='submit' value='搜索'></input>
              </div>
              <div className='hotSearch'>
                <span>热门搜索：</span>&nbsp;&nbsp;
                {
                  hotSearch.map((item,index)=>{
                    return <a key={index} href={url}>{item.label}</a>;
                  })
                }
              </div>
            </div>
          </form>
        </div>
        </div>
        <div className='main'>
          <div className='mainContent'>
            <Card
              title="最新职位"
              extra="更多"
              url='https://job.alibaba.com/zhaopin/index.htm'
            >
              <Ul>
              {
                dataSource.map((item,index)=>{
                  return <Li key={index} data={item}/>
                })
              }
              </Ul>
            </Card>
            <div className='friend'>
              <a className='friendLinkOne' href={url}>
                <img src='https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png' alt=''/>
              </a>
              <a className='friendLinkTwo' href={url}>
                <img src='https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg' alt=''/>
              </a>
            </div>
          </div>
        </div>
        <div className='footer'>
        <div className='footerContent'>
		      阿里巴巴集团 Copyright ©1999-2019 版权所有
        </div>
      </div>
      </div>
    );
  }
}

