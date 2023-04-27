import React from 'react'

const BotCard=({bot,handleClick})=>
{
    return(
        <div className='bot-card' onClick={()=>
        handleClick(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h2>{bot.name}</h2>
            <p>{bot.catchphrase}</p>
        </div>
    )
}

export default BotCard