import './App.css';
import React from 'react'
import SearchPage from './search.jsx'
import ResultsPage from './results.jsx'
import mySVG from './images/bg-img.svg';
import { Layout, Input, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
function App() {
  const [testResult, setTestResult] = React.useState([
    {img: "https://cdn.shopify.com/s/files/1/3099/8088/products/NK_Cream_1728x.jpg?v=1660571996", title: "Novel Key Creams", seller: "KBD Fans", price: "$14"},
    {img: "https://cdn.shopify.com/s/files/1/3099/8088/products/NK_Cream_Tactile_1728x.jpg?v=1660571996", title: "Novel Key Creams", seller: "MDN", price: "$13"},
    {img: "https://cdn.shopify.com/s/files/1/3099/8088/products/NK_Cream_Clickie_1728x.jpg?v=1672936107", title: "Novel Key Creams", seller: "Another Comp", price: "$10"},
    {img: "https://cdn.shopify.com/s/files/1/3099/8088/products/Kailh_Box_MuteJade_1728x.jpg?v=1641915008", title: "Novel Key Creams", seller: "NovelKey", price: "$8.99"},
  ])
  const[searchQuery, setSearchQuery] = React.useState("")
  const[resultPageState, setResultPageState] = React.useState(false)
  const handleSearch = (x) => {
    setResultPageState((y) => !y)
    console.log('Searching for ' + x)
}
  return (
    resultPageState ? <ResultsPage results={testResult} switchPage={()=>setResultPageState((y) => !y)}/> : <SearchPage clickSearch={(x) => handleSearch(x)}/>
  );
}

export default App;
