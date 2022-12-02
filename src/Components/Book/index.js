import './index.css';

const Book = (props) =>{
    const {bookDetails} = props;
    const {name,imageUrl} = bookDetails;
    return (
        <article>
            <div className = 'image-container'>
                <img src = {imageUrl} alt = {name} className = 'bookImage' />
            </div>
            <h2>{name}</h2>
        </article>
    )
}

export default Book;
