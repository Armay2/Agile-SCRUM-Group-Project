/**
 * @ Author: Alpaga
 * @ Create Time: 2020-06-11 19:48:24
 * @ Modified by: Alpaga
 * @ Modified time: 2020-12-02 12:15:39
 */

/*
  Item: {
    name: String
    price: Integer
    label: String [Luxury, Essential, Gift]
    dimensions: {
      height: Integer
      width: Integer
      depth: Integer
    }
  }
*/

export const basketInitialState = {itemList: []};

export function basketReducer(state, action) {
  switch (action.type) {
    case 'NEW_ITEM':
      return {
        ...state,
        itemList: [...state.itemList, action.newItem]
      };
    default:
      throw new Error();
  }
}
