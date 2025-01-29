import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <div className="contain-date">
        <div>
          <SearchBox />
          <ContactForm />
        </div>
        <ContactList />
      </div>
    </div>
  );
}

export default App;
