import { Gift } from "../../App";
import { StyledShoppingList } from "./style";
import { useEffect, KeyboardEvent, MouseEvent } from "react";

type Props = {
  shoppingList: Gift[];
  onClose: () => void;
};

export const ShoppingList = ({ shoppingList, onClose }: Props) => {
  const escapeListener = (e: Event) => {
    if ((e as unknown as KeyboardEvent).key === "Escape") {
      onClose();
    }
  };

  const mouseListener = (e: Event) => {
    if (
      (e as unknown as MouseEvent<HTMLDivElement>).target.id === "close-modal"
    ) {
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

  const onPrint = () => {
    window.print();
  };

  return (
    <StyledShoppingList id="close-modal">
      <div className="modal">
        <h2 className="buy-text">Comprar</h2>
        <ul>
          {shoppingList.map((el) => (
            <li className="shopping-item">
              <img width={40} height={40} src={el.imagen} alt="" />
              <h3 className="item__name">{el.nombre}</h3>
              <p>{el.cantidad}</p>
              <p>{el.destinatario}</p>
            </li>
          ))}
          <button className="close-modal" onClick={onClose}>
            Ocultar
          </button>
          <button onClick={onPrint}>Imprimir</button>
        </ul>
      </div>
    </StyledShoppingList>
  );
};
