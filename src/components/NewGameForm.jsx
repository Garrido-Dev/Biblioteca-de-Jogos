import { useState } from "react";
import TextInput from "./TextInput";

export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };
  return (
    <form onSubmit={handleSubmit}>
        <TextInput value={title} setValue={setTitle} label={"Titulo"} id={'title'}/>
        <TextInput value={cover} setValue={setCover} label={"Capa"} id={'cover'}/>
        <button type="submit">Adicionar à Biblioteca</button>
    </form>
  );
}
