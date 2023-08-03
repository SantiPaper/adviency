import { StyledMain } from "./style";
import { useEffect, useState } from "react";
import { Modal } from "./components/Modal";
import { Gift as GiftComponent } from "./components/Gift";
import { ShoppingList } from "./components/ShoppingList";
import { Audio } from "./components/Audio";
import { AiFillGift } from "react-icons/ai";

export type Gift = {
  nombre: string;
  cantidad: number;
  imagen: string;
  destinatario: string;
  precio: number;
  id: string;
};

export type ModalAction = {
  type: string;
  gift: Gift | null;
};

const initialState = {
  type: "add",
  gift: null,
};

function App() {
  const [gifts, setGifts] = useState<Gift[]>(() =>
    JSON.parse(localStorage.getItem("gift") || "[]")
  );
  const [modalAction, setModalAction] = useState<ModalAction>(initialState);
  const [showModal, setShowModal] = useState(false);
  const [showShoppingList, setShowShoppingList] = useState(false);

  const showForm = () => {
    if (showModal) {
      setShowModal(false);
      setModalAction(initialState);
    } else setShowModal(true);
  };

  const openShoppingList = () => {
    setShowShoppingList(!showShoppingList);
  };

  useEffect(() => {
    localStorage.setItem("gift", JSON.stringify(gifts));
  }, [gifts]);

  const deleteGift = (name: string) => {
    const giftsFilter = gifts.filter((gift) => gift.id !== name);
    setGifts(giftsFilter);
  };

  const deleteAll = () => {
    setGifts([]);
  };

  const addGift = (gift: Gift) => {
    setGifts([...gifts, gift]);
    setShowModal(false);
    setModalAction(initialState);
  };

  const editGifts = (gift: Gift) => {
    const indexGift = gifts.findIndex((g) => gift.id === g.id);
    const newListGifts = [...gifts];
    newListGifts[indexGift] = gift;
    setGifts(newListGifts);
    setShowModal(false);
    setModalAction(initialState);
  };

  const setGiftToEdit = (gift: Gift, type: string) => {
    setModalAction({
      type: type,
      gift: gift,
    });
    setShowModal(true);
  };

  const precioTotal = gifts.reduce(
    (acc, value) => acc + value.precio * value.cantidad,
    0
  );

  return (
    <StyledMain>
      <div className="main__card">
        <h1 className="main__title">Lista de regalos:</h1>

        <button onClick={showForm} className="main__add-button">
          + <AiFillGift />
        </button>

        {showShoppingList && (
          <ShoppingList shoppingList={gifts} onClose={openShoppingList} />
        )}

        <ul>
          <div className="main__container-gifts">
            {gifts.length > 0 ? (
              gifts.map((gift) => (
                <GiftComponent
                  deleteGift={deleteGift}
                  gift={gift}
                  key={gift.id}
                  onEdit={setGiftToEdit}
                />
              ))
            ) : (
              <p className="main__text-no-gifts">
                Tu lista de regalos esta vacia!
              </p>
            )}
          </div>
        </ul>
        {gifts.length > 0 && (
          <p className="main__text-price-total">
            Precio total: ${precioTotal}{" "}
          </p>
        )}
        <Audio />
        {showModal && (
          <Modal
            gift={modalAction}
            onSubmit={modalAction.type === "edit" ? editGifts : addGift}
            onClose={showForm}
          />
        )}
        {gifts.length > 0 && (
          <div className="main__container-buttons">
            <button className="main__delete" onClick={deleteAll}>
              Borrar todo!
            </button>
            <button className="main__preview-button" onClick={openShoppingList}>
              Previsualizar compra
            </button>
          </div>
        )}
      </div>
    </StyledMain>
  );
}

export default App;
