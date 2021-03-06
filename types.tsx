export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  News: undefined;
  Chat: undefined;
  Shop: undefined;
  Concert: undefined;
  
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User={
  id:String;
  name:String;
  imageUri:String;
}

export type Message = {
  id:String;
  content:string;
  createdAt:string;
};
export type ChatRoom = {
  id:String;
  Users:User[];
  lastMessage:Message;
};
