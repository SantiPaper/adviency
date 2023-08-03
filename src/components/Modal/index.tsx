import type { Gift, ModalAction } from "../../App";
import type { FormEvent } from "react";
import { StyledModal } from "./style";
import { useEffect, KeyboardEvent, MouseEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Props = {
  onSubmit: (gift: Gift) => void;
  gift: ModalAction;
  onClose: () => void;
};

const randomGifts = [
  "Pelota",
  "Remera",
  "Teclado",
  "Parlante",
  "Termo",
  "Equipo de musica",
];

export const Modal = ({ onSubmit, onClose, gift }: Props) => {
  const [randomGift, setRandomGift] = useState(gift.gift?.nombre);

  const escapeListener = (e: Event) => {
    if ((e as unknown as KeyboardEvent).key === "Escape") {
      onClose();
    }
  };

  const mouseListener = (e: Event) => {
    if ((e.target as HTMLDivElement).id === "close-modal") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", escapeListener);
    window.addEventListener("click", mouseListener);

    return () => {
      window.removeEventListener("keydown", escapeListener);
      window.removeEventListener("click", mouseListener);
    };
  }, []);

  const addGift = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const nombre = formData.get("gift")!.toString();
    const cantidad = formData.get("cantidad")!.toString();
    const imagen = formData.get("imagen")!.toString();
    const destinatario = formData.get("destinatario")!.toString();
    const precio = formData.get("precio")!.toString();

    const giftOnSubmit: Gift = {
      nombre,
      cantidad: Number(cantidad),
      imagen,
      destinatario,
      precio: Number(precio),
      id: gift.type === "edit" ? gift.gift!.id : uuidv4(),
    };

    const valuesGift = Object.values(giftOnSubmit);

    if (valuesGift.some((v) => !v)) {
      return;
    }

    onSubmit(giftOnSubmit);
    form.reset();
  };

  const generateRandomGift = () => {
    const indexRandom = Math.floor(Math.random() * randomGifts.length);
    setRandomGift(randomGifts[indexRandom]);
  };

  return (
    <StyledModal id="close-modal">
      <div className="modal">
        <form className="modal__form" onSubmit={addGift}>
          <div className="form__input-container">
            <label className="form__label" htmlFor="gift">
              Agrega tu regalo!
            </label>
            <input
              key={randomGift}
              defaultValue={randomGift}
              placeholder="Pelota de futbol"
              name="gift"
              type="text"
              id="gift"
              className="form__input"
              required
            />
            <button
              type="button"
              aria-label="Generar nombre de regalo aleatorio"
              onClick={generateRandomGift}
              className="random__gift"
            >
              Sorpresa!
            </button>
          </div>

          <div className="form__input-container">
            <label className="form__label" htmlFor="precio">
              Precio
            </label>
            <input
              defaultValue={gift.gift?.precio}
              placeholder="100"
              type="number"
              id="precio"
              name="precio"
              className="form__input"
              required
            />
          </div>
          <div className="form__input-container">
            <label className="form__label" htmlFor="cantidad">
              Cantidad
            </label>
            <input
              defaultValue={gift.gift?.cantidad}
              placeholder="2"
              type="number"
              id="cantidad"
              name="cantidad"
              className="form__input"
              required
            />
          </div>
          <div className="form__input-container">
            <label className="form__label" htmlFor="imagen">
              Imagen
            </label>
            <input
              defaultValue={gift.gift?.imagen}
              placeholder="http://pelotadefutbol..."
              type="text"
              id="imagen"
              name="imagen"
              className="form__input"
              required
            />
            <label className="form__label" htmlFor="destinatario">
              Destinatario
            </label>
            <input
              defaultValue={gift.gift?.destinatario}
              placeholder="Emi"
              type="text"
              id="destinatario"
              name="destinatario"
              className="form__input"
              required
            />
          </div>
          <button className="form__button">Agregar</button>
        </form>
        <button onClick={onClose} className="modal__close">
          X
        </button>
      </div>
    </StyledModal>
  );
};
