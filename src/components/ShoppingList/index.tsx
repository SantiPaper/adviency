import { Gift } from "../../App";
import { StyledShoppingList } from "./style";
import { useEffect, KeyboardEvent } from "react";

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

  const onPrint = () => {
    window.print();
  };

  return (
    <StyledShoppingList id="close-modal">
      <div className="modal">
        <h2 className="buy-text">Comprar</h2>
        <ul>
          {shoppingList.map((el) => (
            <li className="shopping-item" key={el.id}>
              <img width={40} height={40} src={el.imagen} alt="" />
              <h3 className="item__name">{el.nombre}</h3>
              <p>{el.cantidad}</p>
              <p>{el.destinatario}</p>
            </li>
          ))}
          <div className="container__buttons">
            <button className="button-delete" onClick={onClose}>
              Ocultar
            </button>
            <button className="button-print" onClick={onPrint}>
              Imprimir
            </button>
          </div>
        </ul>
      </div>
    </StyledShoppingList>
  );
};
