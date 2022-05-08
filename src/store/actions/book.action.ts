import { BOOK_TYPES } from '../types/book.type';
import { Ebook } from '../../screens/Home';

const { ADD_BOOK, LOAD_BOOK } = BOOK_TYPES;

export const BookAction = {
  addBook: (input: Ebook) => {
    return async (dispatch: any) => {
      try {
        dispatch({
          type: ADD_BOOK,
          activeBook: input,
        });
      } catch (err) {
        console.log(err);
      }
    };
  },
  loadBook: () => {
    return async (dispatch: any) => {
      try {
        dispatch({
          type: LOAD_BOOK,
        });
      } catch (err) {
        console.log(err);
      }
    };
  },
};

export default BookAction;
