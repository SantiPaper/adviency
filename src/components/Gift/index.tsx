import type { Gift as GiftType } from "../../App";
import { StyledGift } from "./style";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BiSolidDuplicate } from "react-icons/bi";

type Props = {
  deleteGift: (id: string) => void;
  gift: GiftType;
  onEdit: (gift: GiftType, type: string) => void;
};

export const Gift = ({ deleteGift, gift, onEdit }: Props) => {
  return (
    <StyledGift>
      <div className="gift__container">
        <img width={50} height={50} src={gift.imagen} alt={gift.nombre} />{" "}
        <div className="gift__info">
          <h3>
            {gift.nombre} ({gift.cantidad})
          </h3>
          <p>{gift.destinatario}</p>
        </div>
      </div>
      <p>${gift.precio * gift.cantidad}</p>

      <button
        aria-label="Boton editar regalo"
        className="gift__button-edit"
        onClick={() => onEdit(gift, "edit")}
      >
        <AiFillEdit />
      </button>
      <button
        aria-label="Boton eliminar regalo"
        className="gift__button-delete"
        onClick={() => deleteGift(gift.id)}
      >
        <AiFillDelete />
      </button>
      <button
        aria-label="Boton duplicar regalo"
        className="gift__button-duplicate"
        onClick={() => onEdit(gift, "add")}
      >
        <BiSolidDuplicate />
      </button>
    </StyledGift>
  );
};
