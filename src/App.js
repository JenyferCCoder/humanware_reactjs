import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'¡Bienvenidos a Humanware Lacers!'}/>
      {/* <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
