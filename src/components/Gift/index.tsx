import type { Gift as GiftType } from "../../App";
import { StyledGift } from "./style";

type Props = {
  deleteGift: (name: string) => void;
  gift: GiftType;
};

export const Gift = ({ deleteGift, gift }: Props) => {
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
        <p></p>
      </div>
      <button className="gift__delete" onClick={() => deleteGift(gift.nombre)}>
        X
      </button>
    </StyledGift>
  );
};
