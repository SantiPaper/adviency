import type { Gift } from "../../App";
import type { FormEvent } from "react";
import { StyledModal } from "./style";
import { useEffect, KeyboardEvent, MouseEvent } from "react";

type Props = {
  gifts: Gift[];
  setGifts: React.Dispatch<React.SetStateAction<Gift[]>>;
  showForm: () => void;
};

export const Modal = ({ gifts, setGifts, showForm }: Props) => {
  const escapeListener = (e: Event) => {
    if ((e as unknown as KeyboardEvent).key === "Escape") {
      showForm();
    }
  };

  const mouseListener = (e: Event) => {
    if (
      (e as unknown as MouseEvent<HTMLDivElement>).target.id === "close-modal"
    ) {
      showForm();
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

    const gift: Gift = {
      nombre,
      cantidad: Number(cantidad),
      imagen,
      destinatario,
    };

    if (gifts.find((gift) => gift.nombre === nombre) || nombre === "") {
      return;
    }
    setGifts([...gifts, gift]);
    form.reset();
    showForm();
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
              placeholder="Pelota de futbol"
              name="gift"
              type="text"
              id="gift"
              className="form__input"
            />
          </div>
          <div className="form__input-container">
            <label className="form__label" htmlFor="cantidad">
              Cantidad
            </label>
            <input
              placeholder="2"
              type="number"
              id="cantidad"
              name="cantidad"
              className="form__input"
            />
          </div>
          <div className="form__input-container">
            <label className="form__label" htmlFor="imagen">
              Imagen
            </label>
            <input
              placeholder="http://pelotadefutbol..."
              type="text"
              id="imagen"
              name="imagen"
              className="form__input"
            />
            <label className="form__label" htmlFor="destinatario">
              Destinatario
            </label>
            <input
              placeholder="Emi"
              type="text"
              id="destinatario"
              name="destinatario"
              className="form__input"
            />
          </div>
          <button className="form__button">Agregar</button>
        </form>
        <button onClick={showForm} className="modal__close">
          X
        </button>
      </div>
    </StyledModal>
  );
};
