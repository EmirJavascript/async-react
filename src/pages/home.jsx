import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getBooks } from "../store/booksSlice";


export const HomePage = () => {
  const dispatch = useDispatch()
  const books= useSelector(state => state.books.books)
  const statuses = useSelector(state => state.books.getBooks)

  // useEffect(() => {
  //   fetch('http://localhost:2000/books')
  //     .then(res => res.json())
  //     .then(console.log)
  //     // .then((data) => console.log(data))
  // }, [])

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  return (
    <div>
      {statuses.loading && <div>LOADING</div>}
      {
        statuses.success && (
          <ul>
            {
              books.map(book => (
                <li key={book.id}>
                  {book.name}
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  )
}

// first 'books' - reducers, second 'books' - array