import { useContext } from "react";
import { motion } from "framer-motion";

import Timer from "../Timer/Timer";
import { GameSettingsContext } from "../App/GameSettingsContext";
import { GameContext } from "../App/GameContext";
import { CELL_SIZE } from "../../constants";
import mineLineArt from "../../assets/imgs/mine-lineart.svg";
import reset from "../../assets/imgs/reset.svg";
import "./Toolbar.scss";

const Toolbar = () => {
  const { gameSettings } = useContext(GameSettingsContext);
  const { setGameStatus } = useContext(GameContext);

  return (
    <div
      className="toolbar"
      style={{
        width: `${CELL_SIZE * gameSettings.COLS}px`,
      }}
    >
      <div className="toolbar__left">
        {/* Render mine count with icon */}
        <span className="toolbar__left__mine-count">
          <img
            src={mineLineArt}
            alt="mines"
            className="toolbar__left__mine-count__icon"
          />
          {gameSettings.NUM_MINES}
        </span>
        {/* Render Timer Component */}
        <Timer />
      </div>
      {/* Render reset game button */}
      <motion.button
        className="toolbar__reset-btn"
        style={{
          backgroundImage: `url(${reset})`,
        }}
        whileHover={{
          rotate: 360,
          transition: { duration: 0.1, ease: "linear" },
        }}
        onClick={() => {
          setGameStatus("");
        }}
      ></motion.button>
    </div>
  );
};

export default Toolbar;