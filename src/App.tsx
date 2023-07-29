import { StyledMain } from "./style";
import { useEffect, useState } from "react";
import { Modal } from "./components/Modal";
import { Gift as GiftComponent } from "./components/Gift";

export type Gift = {
  nombre: string;
  cantidad: number;
  imagen: string;
  destinatario: string;
};

function App() {
  const [gifts, setGifts] = useState<Gift[]>(() =>
    JSON.parse(localStorage.getItem("gift") || "[]")
  );
  const [showMore, setShowMore] = useState(false);

  const showForm = () => {
    if (showMore) setShowMore(false);
    else setShowMore(true);
  };

  useEffect(() => {
    localStorage.setItem("gift", JSON.stringify(gifts));
  }, [gifts]);

  const deleteGift = (name: string) => {
    const giftsFilter = gifts.filter((gift) => gift.nombre !== name);
    setGifts(giftsFilter);
  };

  const deleteAll = () => {
    setGifts([]);
  };

  return (
    <StyledMain>
      <div className="main__card">
        <h1 className="main__title">Adviency</h1>
        <button onClick={showForm} className="main__add-button">
          Agregar tu regalo
        </button>

        {showMore && (
          <Modal setGifts={setGifts} gifts={gifts} showForm={showForm} />
        )}
        <ul>
          <div className="main__container-gifts">
            {gifts.length > 0 ? (
              gifts.map((gift) => (
                <GiftComponent
                  deleteGift={deleteGift}
                  gift={gift}
                  key={gift.nombre}
                />
              ))
            ) : (
              <p className="main__text-no-gifts">No hay regalos! Agrega uno</p>
            )}
          </div>
        </ul>
        <button className="main__delete" onClick={deleteAll}>
          Borrar todo!
        </button>
      </div>
    </StyledMain>
  );
}

export default App;
