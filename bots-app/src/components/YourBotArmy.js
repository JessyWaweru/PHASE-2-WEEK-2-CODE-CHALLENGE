import React from'react'
import BotCard from './BotCard'

const YourBotArmy=({botArmy,releaseBot,dischargeBot})=>{
    return(
        <div className='your-bot-army'>
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