import React from 'react'
import BotCard from './BotCard'

const BotCollection=({bots,addToArmy})=>
{
    return(
        <div className='bot-collection'>
            {bots.map(bot=>(
                <BotCard key={bot.id} bot={bot}
                handleClick={addToArmy}/>
            ))}
        </div>
    )
}

export default BotCollection