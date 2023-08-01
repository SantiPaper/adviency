import { Gift } from "../../App";

type Props = {
  shoppingList: Gift[];
  onClose: () => void;
};

export const ShoppingList = ({ shoppingList, onClose }: Props) => {
  return (
    <>
      <h2>Comprar</h2>
      <ul>
        {shoppingList.map((el) => (
          <li>
            <img src={el.imagen} alt="" />
            <h3>{el.nombre}</h3>
            <p>{el.cantidad}</p>
            <p>{el.destinatario}</p>
          </li>
        ))}
        <button onClick={onClose}>Ocultar</button>
      </ul>
    </>
  );
};
