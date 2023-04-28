import React from'react'
import BotCard from './BotCard'

const YourBotArmy=({botArmy,releaseBot,dischargeBot})=>{
    return(
        <div className='your-bot-army'>
            <h1>YOUR ARMY OF DEATH</h1>
            {botArmy.map(bot=>(
                <div key={bot.id}>
                    <BotCard bot={bot} handleClick={releaseBot}/>
                    <button onClick={()=>
                    dischargeBot(bot.id)}>X</button>
                </div>
            ))}
        </div>
    )
}
export default YourBotArmy