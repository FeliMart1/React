import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  return (
    <>
      <div className='App'>
        <NavBar />
        <ItemListContainer greeting='Bienvenidos a nuestra tienda' />
        <ItemCount stock={20} initial={1} onAdd={(count) => console.log('Cantidad agregada', count)} />
      </div>
    </>
  )
}
export default App;