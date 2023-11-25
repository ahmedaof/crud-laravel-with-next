export interface UserModel {
  id: number;
  name: string;
}
export interface ContactModel {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  keyword: string;
  publish: number;
  content: string;
  created_at: string;
  deleteContact: (id: number) => void;
}
export interface ContactAddModel {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}
