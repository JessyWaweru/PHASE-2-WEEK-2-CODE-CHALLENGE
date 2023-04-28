import React from 'react'

const BotCard=({bot,handleClick})=>
{
    return(
        <div className='bot-card' onClick={()=>
        handleClick(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h1>name:{bot.name}</h1>
            <h2>health:{bot.health} || damage:{bot.damage} || armor:{bot.armor}</h2>
            <h2>specialty:{bot.bot_class}</h2>
            <p>ACTIVATION KEY:{bot.catchphrase}</p>
        </div>
    )
}

export default BotCard