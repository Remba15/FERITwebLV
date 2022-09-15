import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

const Items = () => {
  const [items, setItems] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItems, setSelectedItems] = useState({});

  const fetchItems = async () => {
    const response = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/item.json",
      {
        method: "GET",
      }
    ).then((response) => response.json());
    setItems(response.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div
      style={{
        paddingBottom: "8rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        textAlign: "center",
        backgroundColor:"#010a13",
      }}
    >
      {items &&
        Object.entries(items).map(([key, value]) => {
          return (
            <div
              key={key}
              onClick={() => {
                if (selectedItems[key]) {
                  const newSelectedItems = { ...selectedItems };
                  delete newSelectedItems[key];
                  return setSelectedItems(newSelectedItems);
                }
                return setSelectedItems({ ...selectedItems, [key]: value });
              }}
              style={{
                boxShadow: selectedItems[key]
                  ? "0 0 10px 0 rgb(49, 37, 192)"
                  : "",
                border: "1px solid transparent",
                borderRadius: "5px",
                padding: "10px",
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
                  color: "#FFFFFF"
                }}
              >
                {value.name}
              </div>
              <div>
                <img
                  loading="lazy"
                  width={120}
                  height={120}
                  src={`http://ddragon.leagueoflegends.com/cdn/12.17.1/img/item/${value.image.full}`}
                  alt={value.name}
                />
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(value);
                }}
              >
                Details
              </button>
            </div>
          );
        })}
      <div
        style={{
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
          position: "fixed",
          bottom: 0,
          width: "100%",
          height: "8rem",
          background: "white",
          display: "flex",
          justifyContent: "space-between",
          padding: "5px 2rem",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        >
          Selected items: {Object.keys(selectedItems).length}
        </div>
        <div
          style={{
            height: "100%",
            fontSize: "1.5rem",
            fontWeight: "bold",
            overflowY: "auto",
          }}
        >
          {Object.keys(selectedItems).map((key) => {
            return <div>{selectedItems[key].name}</div>;
          })}
        </div>
        <div
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        >
          Total gold:{" "}
          {selectedItems !== {} &&
            Object.values(selectedItems).reduce(
              (a, value) => a + value.gold.total,
              0
            )}
        </div>
      </div>
      <Modal
        show={!!selectedItem}
        closeModal={() => setSelectedItem(null)}
        animation="fade"
      >
        <div
          style={{
            background: "white",
            borderRadius: "5px",
            padding: "2rem",
          }}
        >
          {selectedItem && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  userSelect: "none",
                }}
              >
                {selectedItem.name}
              </div>
              <div>
                <img
                  loading="lazy"
                  width={120}
                  height={120}
                  src={`http://ddragon.leagueoflegends.com/cdn/12.17.1/img/item/${selectedItem.image.full}`}
                  alt={selectedItem.name}
                />
              </div>
              <div>{selectedItem.plaintext}</div>

              <div>
                {Object.entries(selectedItem.gold).map(([key, value]) => {
                  return (
                    <div>
                      {key}: {value}
                    </div>
                  );
                })}
                {Object.entries(selectedItem.stats).map(([key, value]) => {
                  return (
                    <div>
                      {key}: {value}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Items;
