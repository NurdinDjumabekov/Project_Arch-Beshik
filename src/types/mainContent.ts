///////для данных , которые отображаются на mainPage
interface Comment {
  id: number;
  name: string;
  email: string;
  comment: string;
}

export interface ContentList {
  id: number;
  title: string;
  category_id: number;
  comments: Comment[];
  content: string;
  data_added: string;
  image: string;
  owner: number;
  photos: "";
}

///////для данных квартир
interface imgs {
  image: string;
}

export interface HousemanageList {
  amount_of_rooms: number;
  category_id: number;
  description: string;
  id: number;
  owner: string;
  phone_number: number;
  photos: imgs[];
  photoss: string;
  price: number;
  remont: string;
  udobstva: string;
  title: string;
}
///////для url отправки запросов
export interface TypeUrl {
  url: string;
  lang: string;
  type: string;
}

///////для категорий
export interface Category {
  id: number;
  name: string;
  is_rent: boolean;
}

///////для данных отправки коментарий
export interface DataComment {
  name: string;
  email: string;
  comment: string;
}

///////для детализированной страницы объявлений
interface photos {
  image: string;
}

export interface MainDetailed {
  id: number;
  title: string;
  category_id: number;
  image: string;
  data_added: string;
  owner: number;
  content: string;
  comments: [];
  photos: photos[];
}

///////для входа пользователя
export interface TypeLogins {
  username: string;
  password: string;
}

///////для входа пользователя

export interface TypeQuestion {
  username: string;
  question: string;
}

///////для того чтобы брать данные с запроса
export interface TypeTakeQuestion {
  id: number;
  text: string;
}

///////для регистрации пользователя
export interface TypeRegistr {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  password: string;
}

///////для токена
export interface TypeToken {
  token: string;
  username: string;
}
