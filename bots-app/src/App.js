import React,{useState,useEffect}from 'react'
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots,setBots]=useState([])
  const [botArmy,setBotArmy]=useState([])

  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=async()=>{
    const res=await
    fetch('http://localhost:3001/bots')
    const text=await res.text()
    console.log (text)
    const data=JSON.parse(text) 
    setBots(data)
  }
  const addToArmy=(bot) =>
  {if (!botArmy.includes(bot)){
    setBotArmy([...botArmy,bot])
  }}
  const releaseBot=(bot)=>{
    setBotArmy(botArmy.filter(item=>item.id
      !== bot.id))
  }
    
const dischargeBot=async (botId)=>{
setBotArmy(botArmy.filter(item=>item.id
 !== botId ))
 await
 fetch(`http://localhost:3001/bots/${botId}`,{

      method:'DELETE',
 })

}
  return (
   < div className='app'>
      
      <YourBotArmy 
      botArmy={botArmy}
      
      releaseBot={releaseBot}
      dischargeBot={dischargeBot}
      />
      <BotCollection bots={bots} addToArmy={addToArmy}/>
    </div>
  );
}

export default App;
