import Book from './Components/Book';
import './App.css';

const BooksList = [
  {
    id :1,
    name:"Do it today",
    imageUrl:"https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id :2,
    name:"Do it today",
    imageUrl:"https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id :3,
    name:"Do it today",
    imageUrl:"https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id :4,
    name:"Life's Amazing secrets",
    imageUrl:"https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id :5,
    name:"Life's Amazing secrets",
    imageUrl:"https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id :6,
    name:"Life's Amazing secrets",
    imageUrl:"https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_UY327_FMwebp_QL65_.jpg"
  },
]
function App() {
  return (
    <section>
    <h1>Trending Books</h1>
    <div className = 'books-container'>
      {
        BooksList.map(BookData=>(<Book bookDetails = {BookData} key = {BookData.id}/>))
      }
    </div>
    </section>
  )
}

export default App;
