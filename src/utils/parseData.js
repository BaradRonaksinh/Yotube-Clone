import React from 'react'

export const parseData = async(items) => {
    try {
        const videoIds = [];
        const channelIds = [];

        items.forEach((item) => {
            channelIds.push(item.snippet.channelId)
        });
    } catch (error) {
        
    }

    console.log(items);

    return(
        <div>
            
        </div>
    )
}


