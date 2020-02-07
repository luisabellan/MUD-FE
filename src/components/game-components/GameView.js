import React from "react";

//components
import PlayerStatBar from "./player-status/PlayerStatBar";
import GameInfo from "./GameInfo";
import GameActions from "./GameActions";
import Movement from "./Movement";
import Enemy from "./Enemy";

//styles
import * as Widgets from "../StyledWidgets";

export default function GameView() {
  return (
    <div style={{ margin: "20px", background: "" }}>
      <Widgets.DisplayContainer>
        <Enemy/>
      </Widgets.DisplayContainer>

      <Widgets.MainGameContainer>
        <Widgets.StatsGameInfoInput>
          <PlayerStatBar />
          <GameInfo />
        </Widgets.StatsGameInfoInput>

        <Widgets.GameControls>
          <GameActions />
          <Movement />
        </Widgets.GameControls>
      </Widgets.MainGameContainer>
    </div>
  );
}
