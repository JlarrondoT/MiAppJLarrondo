import { BOOK_TYPES } from '../types/book.type';
import { Ebook } from '../../screens/Home';

const { ADD_BOOK, LOAD_BOOK } = BOOK_TYPES;

const initialState = {
  activeBook: {} as Ebook,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_BOOK:
      initialState.activeBook = action.activeBook;
      return initialState.activeBook;
    case LOAD_BOOK:
      // @ts-ignore
      return initialState.activeBook;
    default:
      return state;
  }
};
