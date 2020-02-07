import React, { useContext } from "react"
import styled from "styled-components"
import { GameContext } from "../../contexts/GameContext"
import knight_idle from "../../img/sprites/knight/Idle (1).png"

const Tile = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: dodgerblue;
  border: 3px solid #000;
`

const Sprite = styled.img`
  width: 100%;
`

export default function Room({
  id,
  size,
  x,
  y,
  n_to_id,
  s_to_id,
  e_to_id,
  w_to_id
}) {
  const { roomInfo } = useContext(GameContext)
  console.log("FROM ROOM:", roomInfo)

  return (
    <>
      <Tile
        style={{
          width: size,
          height: size,
          left: `${x}px`,
          top: `${y}px`,
          borderTop: n_to_id && "none",
          borderBottom: s_to_id && "none",
          borderRight: e_to_id && "none",
          borderLeft: w_to_id && "none"
        }}
      >
        {roomInfo.room_id === id && <Sprite alt="sprite" src={knight_idle} />}
      </Tile>
    </>
  )
}

/*
{
  id: 1
  title: "asd"
  description: "asdasd"
  n_to_id: null
  s_to_id: null
  e_to_id: null
  w_to_id: null
  inventory_id: 1
  enemy_id: 1
}
 */
