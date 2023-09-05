export interface IItemState {
  status: 'idle' | 'success' | 'loading' | 'failed';
  error: string | undefined;
  items: Array<IItem>;
}

export interface IItem {
  _id: string,
  id: number,
  title: string;
  data: [];
  // itemsFavorite: [],
  // itemsBin: [],
}

export interface IItemProps {
  data: IItembyid[];
  id: number;
}

export interface IItembyid {
  itemId: number;
  title: string;
  image: string;
  size: string;
  price: string;
  is_favorite?: boolean;
  is_bin?: boolean;
}

export interface ICard {
  id: number;
  title: string;
  image: string;
  size: string;
  price: string;
  is_favorite: boolean;
  is_bin: boolean;
}
