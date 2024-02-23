import { useEffect, useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import { level0 } from "../../data/champions/level0";
import { level1 } from "../../data/champions/level1";
import { level2 } from "../../data/champions/level2";
import { level3 } from "../../data/champions/level3";
import add from "./images/add.webp";
import Player1 from "./Player1";
import Player2 from "./Player2";

import "./Counter.css";
import { Button, Group } from "@mantine/core";

const Counter = () => {
  const screenSize = useScreenSize();
  /********************************************************/

  const [championsList, setChampionsList] = useState({
    level0: [],
    level1: [],
    level2: [],
    level3: [],
  });

  const [player1, setPlayer1] = useState({
    level0: null,
    level1: null,
    level2: null,
    level3: null,
    damaged: 0,
    healed: 0,
    attribute: [],
  });
  const [player2, setPlayer2] = useState({
    level0: null,
    level1: null,
    level2: null,
    level3: null,
    damaged: 0,
    healed: 0,
    attribute: [],
  });
  const [currentChampions, setCurrentChampions] = useState({
    player1: { level: -1, img: add, hp: 0 },
    player2: { level: -1, img: add, hp: 0 },
  });
  /********************************************************/

  /*handler to show champions list*/
  useEffect(() => {
    let list0 = [];
    let list1 = [];
    let list2 = [];
    let list3 = [];

    level0.forEach((champion, i) => {
      list0.push({
        label: champion.name,
        value: champion,
      });
    });

    level1.forEach((champion, i) => {
      list1.push({
        label: champion.name,
        value: champion,
      });
    });

    level2.forEach((champion, i) => {
      list2.push({
        label: champion.name,
        value: champion,
      });
    });

    level3.forEach((champion, i) => {
      list3.push({
        label: champion.name,
        value: champion,
      });
    });

    setChampionsList({
      level0: list0,
      level1: list1,
      level2: list2,
      level3: list3,
    });
  }, []);
  /********************************************************/

  /*handle champions list to show*/
  const championsListToShow = (currentPlayerChampion) => {
    if (currentPlayerChampion.level === -1) {
      return championsList.level0;
    }

    if (currentPlayerChampion.level === 0) {
      return championsList.level1;
    }

    if (currentPlayerChampion.level === 1) {
      return championsList.level2;
    }

    if (currentPlayerChampion.level === 2) {
      return championsList.level3;
    }

    if (currentPlayerChampion.level === 3) {
      return [];
    }
  };

  /********************************************************/

  /****handler for selecting champion****/
  const handleChampionSelect = (player, setPlayer, champion) => {
    const handleAttribute = () => {
      if (player.attribute.includes(champion.attribute)) {
        return player.attribute;
      }
      return [...player.attribute, champion.attribute];
    };

    if (champion.level === 0) {
      setPlayer({ ...player, level0: champion, attribute: handleAttribute() });
    }

    if (champion.level === 1) {
      setPlayer({ ...player, level1: champion, attribute: handleAttribute() });
    }

    if (champion.level === 2) {
      setPlayer({ ...player, level2: champion, attribute: handleAttribute() });
    }

    if (champion.level === 3) {
      setPlayer({ ...player, level3: champion, attribute: handleAttribute() });
    }

    setCurrentChampions({ ...currentChampions, [player]: champion });
  };

  /****handler for receiving damage****/
  const handleDamage = (player, setPlayer) => {
    setPlayer({ ...player, damaged: (player.damaged += 1) });
  };

  /****handler for receiving heal****/
  const handleHeal = (player, setPlayer) => {
    setPlayer({ ...player, healed: (player.healed += 1) });
  };
  /********************************************************/

  /****handler for receiving heal****/
  const handleReset = () => {
    const defaultPlayer = {
      level0: null,
      level1: null,
      level2: null,
      level3: null,
      damaged: 0,
      healed: 0,
      attribute: [],
    };

    const defaultChampion = { level: -1, img: add, hp: 0 };

    setPlayer1(defaultPlayer);
    setPlayer2(defaultPlayer);
    setCurrentChampions({
      player1: defaultChampion,
      player2: defaultChampion,
    });
  };
  /********************************************************/

  return (
    <div className="counter-div">
      <div
        style={{ height: `${screenSize.height - 70}px` }}
        className="counter-players-div"
      >
        <Player1
          player1={player1}
          setPlayer1={setPlayer1}
          handleDamage={handleDamage}
          handleHeal={handleHeal}
          currentChampions={currentChampions}
          setCurrentChampions={setCurrentChampions}
          handleChampionSelect={handleChampionSelect}
          championsListToShow={championsListToShow}
        />
        <Player2
          player2={player2}
          setPlayer2={setPlayer2}
          handleDamage={handleDamage}
          handleHeal={handleHeal}
          currentChampions={currentChampions}
          setCurrentChampions={setCurrentChampions}
          handleChampionSelect={handleChampionSelect}
          championsListToShow={championsListToShow}
        />
      </div>
      <Group justify="center" className="counter-reset-group">
        <Button className="counter-reset-btn" radius="lg" onClick={handleReset}>
          Reset
        </Button>
      </Group>
    </div>
  );
};

export default Counter;
