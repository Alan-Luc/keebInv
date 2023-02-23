import React from 'react'
import './results.css'
import { Layout, Input, Button } from 'antd';
import {SearchOutlined} from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
const ResultModule = (props) => {
    console.log(props)
    return(
        <div className="result-module">
            <div className="result-img" style={{backgroundImage: `url(${props.result.img})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',}}></div>
            <div className="result-info">
                <h3 className="result-title">{props.result.title}</h3>
                <p className="result-price">{props.result.price}</p>
                <h3 className="result-seller">Sold By: {props.result.seller}</h3>
            </div>
        </div>
    )
}
export default function ResultsPage(props) {
    const layoutStyle = {
        backgroundColor:'rgb(255,255,255,0)'
      }
      const headerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor:'rgb(255,255,255,0)',
        padding:'10px',
      };
      console.log(props)
    return(
        <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <p className="nav-title" onClick={props.switchPage}>Keebinv</p>
          <SearchOutlined className="nav-search"/>
        </Header>
        <Content className="results-container">
            {props.results.map((x) => <ResultModule result={x}/>)}
        </Content>
      </Layout>
    )
}