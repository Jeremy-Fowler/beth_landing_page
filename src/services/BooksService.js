import { AppState } from "@/appstate.js"

class BooksService {
  setActiveBook(book) {
    AppState.activeBook = book
  }

}

export const booksService = new BooksService()