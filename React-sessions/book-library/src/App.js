import logo from './logo.svg';
import './App.css';
import BookProvider from './components/BookContext';
import Navbar from './components/Navbar';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <BookProvider>
        <Navbar />

        <AddBook />

        <BookList />
      </BookProvider>
    </div>
  );
}

export default App;
