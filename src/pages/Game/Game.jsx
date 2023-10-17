import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

const Game = ({room}) => {

    const socket = io.connect("http://localhost:3001")

    const [card, setCard] = useState("Cards")
    const [cardsPlayed, setCardsPlayed] = useState("")

    const sendCard = () => {
        socket.emit("send_card", {card, room})
    }

    useEffect(() => {
        socket.on("receive_card", (data) => {
            setCardsPlayed(data.card)
        })
    }, [socket])

  return (
    <div>
        <button onClick={sendCard}>Send</button>
        {cardsPlayed}
    </div>
  )
}

export default Game