import type { Gift as GiftType } from "../../App";
import { StyledGift } from "./style";

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
        className="gift__button-edit"
        onClick={() => onEdit(gift, "edit")}
      >
        Editar
      </button>
      <button
        className="gift__button-delete"
        onClick={() => deleteGift(gift.id)}
      >
        Eliminar
      </button>
      <button
        className="gift__button-duplicate"
        onClick={() => onEdit(gift, "add")}
      >
        Duplicar
      </button>
    </StyledGift>
  );
};
