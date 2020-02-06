import React, { useContext } from "react";

import * as Widget from "../StyledWidgets";

// context
import { GameContext } from "../../contexts/GameContext";

const Movement = () => {
  const { movePlayer } = useContext(GameContext);
  return (
    <Widget.MovementContainer>
      <Widget.MovementButton
        onClick={() => {
          movePlayer("n");
        }}
        style={{gridArea: "north"}}
      >
        N
      </Widget.MovementButton>
      <Widget.MovementButton
        onClick={() => {
          movePlayer("s");
        }}
        style={{gridArea: "south"}}
      >
        S
      </Widget.MovementButton>
      <Widget.MovementButton
        onClick={() => {
          movePlayer("e");
        }}
        style={{gridArea: "east"}}
      >
        E
      </Widget.MovementButton>
      <Widget.MovementButton
        onClick={() => {
          movePlayer("w");
        }}
        style={{gridArea: "west"}}
      >
        W
      </Widget.MovementButton>
    </Widget.MovementContainer>
  );
};

export default Movement;
