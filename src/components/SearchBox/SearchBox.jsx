import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name); // Отримуємо поточний фільтр з Redux

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value)); // Відправляємо нове значення фільтру в Redux
  };

  return (
    <div className={s.container}>
      <label className={s.inputBox} htmlFor="id-form">
        Find contacts by name
      </label>
      <input
        value={filter} // Прив'язуємо поле введення до Redux-стану
        onChange={handleChange} // Викликаємо handleChange, щоб оновити фільтр
        className={s.input}
        id="id-form"
      />
    </div>
  );
}
