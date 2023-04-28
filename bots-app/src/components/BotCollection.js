import React from 'react'
import BotCard from './BotCard'

const BotCollection=({bots,addToArmy})=>
{
    return(
        <div className='bot-collection'>
            <h1 id='botcollection'>CHOOSE YOUR MACHINE OF DEATH:</h1>
            {bots.map(bot=>(
                <BotCard key={bot.id} bot={bot}
                handleClick={addToArmy}/>
            ))}
        </div>
    )
}

export default BotCollection