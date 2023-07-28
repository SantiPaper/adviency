import { StyledMain } from "./style";
import { FormEvent, useState } from "react";

function App() {
  const [gifts, setGifts] = useState(["Peluche", "Tablet", "Play 5"]);

  const addGift = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const gift = formData.get("gift") as string;
    setGifts([...gifts, gift]);
    form.reset();
  };

  return (
    <StyledMain>
      <div className="main__card">
        <h1 className="main__title">Adviency</h1>
        <form onSubmit={addGift}>
          <label htmlFor="gift">Agrega tu regalo!</label>
          <input
            placeholder="Pelota de futbol"
            name="gift"
            type="text"
            id="gift"
          />
          <button>Agregar</button>
        </form>
        <ul>
          {gifts.map((gift) => (
            <li key={gift} className="main__gift">
              {gift}
            </li>
          ))}
        </ul>
      </div>
    </StyledMain>
  );
}

export default App;
