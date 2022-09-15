import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

const Champions = () => {
  const [champions, setChampions] = useState(null);
  const [selectedChampion, setSelectedChampion] = useState(null);

  const fetchChampions = async () => {
    const response = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion.json",
      {
        method: "GET",
      }
    ).then((response) => response.json());
    setChampions(response.data);
  };

  useEffect(() => {
    fetchChampions();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        textAlign: "center",
        backgroundColor: "#010a13"
      }}
    >
      {champions &&
        Object.entries(champions).map(([key, value]) => {
          return (
            <div
              onClick={() => setSelectedChampion(value)}
              key={key}
              style={{
                margin: "3rem",
                width: "fit-content",
                cursor: "pointer",
                justifySelf: "center",
                alignSelf: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  userSelect: "none",
                  color: "white",
                }}
              >
                {value.name}
              </div>
              <div>
                <img
                  loading="lazy"
                  width={120}
                  height={120}
                  src={`http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/${value.image.full}`}
                  alt={value.name}
                />
              </div>
            </div>
          );
        })}
      <Modal
        show={!!selectedChampion}
        closeModal={() => setSelectedChampion(null)}
        animation="fade"
      >
        <div
          style={{
            background: "white",
            borderRadius: "5px",
            padding: "3rem",
          }}
        >
          {selectedChampion && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  userSelect: "none",
                }}
              >
                {selectedChampion.name}
              </div>
              <div>
                <img
                  loading="lazy"
                  width={120}
                  height={120}
                  src={`http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/${selectedChampion.image.full}`}
                  alt={selectedChampion.name}
                />
              </div>
              <div>{selectedChampion.blurb}</div>

              
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Champions;
