import './App.css';
import BookCards from './components/BookCards';
import Header from './components/Header';

function App() {
  const navLinks = [
    {title: "Главная", href: "#"},
    {title: "Магазин", href: "#"},
    {title: "О нас", href: "#"},
    {title: "Контакты", href: "#"},
  ]
  const books = [
    {
      title: "Книга1", 
      body: "lorem lorem lorem lorem lorem lorem lorem lorem loremlorem", 
      image: "https://dictionary.cambridge.org/ru/images/thumb/book_noun_001_01679.jpg?version=5.0.388"
    },
    {
      title: "Книга1", 
      body: "text", 
      image: "https://dictionary.cambridge.org/ru/images/thumb/book_noun_001_01679.jpg?version=5.0.388"
    },
    {
      title: "Книга1", 
      body: "text", 
      image: "https://dictionary.cambridge.org/ru/images/thumb/book_noun_001_01679.jpg?version=5.0.388"
    },
    {
      title: "Книга1", 
      body: "text", 
      image: "https://dictionary.cambridge.org/ru/images/thumb/book_noun_001_01679.jpg?version=5.0.388"
    },
    {
      title: "Книга1", 
      body: "text", 
      image: "https://dictionary.cambridge.org/ru/images/thumb/book_noun_001_01679.jpg?version=5.0.388"
    },
    {
      title: "Книга1", 
      body: "text", 
      image: "https://dictionary.cambridge.org/ru/images/thumb/book_noun_001_01679.jpg?version=5.0.388"
    },
  ]
  return (
    <div className='App'>
      <Header books={books} navLinks={navLinks}/>
      <BookCards books={books}/>
    </div>
  )
  
  
}

export default App;
