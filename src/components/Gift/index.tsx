import type { Gift as GiftType } from "../../App";
import { StyledGift } from "./style";

type Props = {
  deleteGift: (name: string) => void;
  gift: GiftType;
};

export const Gift = ({ deleteGift, gift }: Props) => {
  return (
    <StyledGift>
      <img width={30} height={30} src={gift.imagen} alt={gift.nombre} />{" "}
      <div className="gift__info">
        <h3>{gift.nombre}</h3>
        <p>{gift.destinatario}</p>
      </div>
      <p>{gift.cantidad}</p>
      <button className="gift__delete" onClick={() => deleteGift(gift.nombre)}>
        X
      </button>
    </StyledGift>
  );
};
