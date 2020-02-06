import React, { useContext } from "react";

import * as Widget from "../StyledWidgets";

// context
import { GameContext } from "../../contexts/GameContext";

const Movement = () => {
  const { movePlayer } = useContext(GameContext);
  return (
    <Widget.MovementContainer>
      <button
        onClick={() => {
          movePlayer("n");
        }}
      >
        N
      </button>
      <button
        onClick={() => {
          movePlayer("s");
        }}
      >
        S
      </button>
      <button
        onClick={() => {
          movePlayer("e");
        }}
      >
        E
      </button>
      <button
        onClick={() => {
          movePlayer("w");
        }}
      >
        W
      </button>
    </Widget.MovementContainer>
  );
};

export default Movement;
