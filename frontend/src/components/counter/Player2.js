import "./Players.css";
import { Group, Modal } from "@mantine/core";
import useScreenSize from "../../hooks/useScreenSize";
import { useState } from "react";

import swords from "./images/sword.png";
import heal from "./images/regeneration.png";
import undo from "./images/undo.png";
import add from "./images/add.webp";

const Player2 = ({
  player2,
  setPlayer2,
  handleDamage,
  handleHeal,
  currentChampions,
  setCurrentChampions,
  championsListToShow,
}) => {
  const screenSize = useScreenSize();

  /*modal handler*/
  const [openedList, setOpenedList] = useState(false);
  const openList = () => setOpenedList(true);
  const closeList = () => setOpenedList(false);
  /********************************************************/

  /*image style for champion*/
  const championImgStyle = {
    height: `${(screenSize.height - 70) / 2 - 100}px`,
  };
  /********************************************************/

  /*handler for image click*/
  const handleImgClick = () => {
    if (currentChampions.player2.level !== 3) {
      openList();
    }
  };
  /********************************************************/
  /*handler for image click*/
  const handleDelevel = () => {
    if (currentChampions.player2.level === -1) {
      return "";
    }
    if (currentChampions.player2.level !== -1) {
      if (currentChampions.player2.level === 0) {
        setCurrentChampions({
          ...currentChampions,
          player2: { level: -1, img: add, hp: 0 },
        });
        setPlayer2({ ...player2, level0: null });
      }

      if (currentChampions.player2.level === 1) {
        setCurrentChampions({
          ...currentChampions,
          player2: player2.level0,
        });
        setPlayer2({ ...player2, level1: null });
      }

      if (currentChampions.player2.level === 2) {
        setCurrentChampions({
          ...currentChampions,
          player2: player2.level1,
        });
        setPlayer2({ ...player2, level2: null });
      }

      if (currentChampions.player2.level === 3) {
        setCurrentChampions({
          ...currentChampions,
          player2: player2.level2,
        });
        setPlayer2({ ...player2, level3: null });
      }
    }
  };
  /********************************************************/

  /*handler for champions list click*/
  const handleChampionClick = (championValue) => {
    setCurrentChampions({ ...currentChampions, player2: championValue });

    if (championValue.level === 0) {
      setPlayer2({ ...player2, level0: championValue });
    }
    if (championValue.level === 1) {
      setPlayer2({ ...player2, level1: championValue });
    }
    if (championValue.level === 2) {
      setPlayer2({ ...player2, level2: championValue });
    }
    if (championValue.level === 3) {
      setPlayer2({ ...player2, level3: championValue });
    }

    closeList();
  };

  return (
    <div className="players-outer-div">
      <div className="players-div player2">
        <Modal.Root
          opened={openedList}
          onClose={closeList}
          centered
          zIndex="1000"
          className="champions-list-modal"
        >
          <Modal.Overlay />
          <Modal.Content className={`champions-list-content `} radius="15">
            <Modal.Header>
              <Modal.Title className="champions-list-player">
                Player 2
              </Modal.Title>
              <Modal.CloseButton />
            </Modal.Header>
            <Modal.Body>
              <div className="champions-list-div  player2">
                {championsListToShow(currentChampions.player2)
                  .sort((a, b) => (a.label < b.label ? -1 : 1))
                  .map((champion, i) => (
                    <div
                      key={i}
                      onClick={() => handleChampionClick(champion.value)}
                      className="champions-list"
                    >
                      {champion.label}
                    </div>
                  ))}
              </div>
            </Modal.Body>
          </Modal.Content>
        </Modal.Root>
        <Group gap="0" className="players-group">
          <div className="players-box left">
            <img
              src={currentChampions.player2.img}
              alt="add"
              className={`players-champion-img ${
                currentChampions.player2.level === 3 ? "level3" : ""
              }`}
              style={championImgStyle}
              onClick={handleImgClick}
            />
            <img
              src={undo}
              alt="undo"
              className={`champion-delevel ${
                currentChampions.player2.level === -1 ? "hide" : "show"
              }`}
              onClick={handleDelevel}
            />
          </div>
          <div className="players-box right">
            <div
              className="heal-atk-border"
              onClick={() => handleHeal(player2, setPlayer2)}
            >
              <img src={heal} alt="heal" className="heal-atk-icon heal" />
            </div>
            <div className="players-hp">
              {currentChampions.player2.hp - player2.damaged + player2.healed}
            </div>
            <div
              className="heal-atk-border"
              onClick={() => handleDamage(player2, setPlayer2)}
            >
              <img src={swords} alt="attack" className="heal-atk-icon atk" />
            </div>
          </div>
        </Group>
      </div>
    </div>
  );
};

export default Player2;
