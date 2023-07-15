export interface TAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo:{
    lat: string,
    lng: string,
  }
}

export interface TCompany {
  name: string,
  catchPhrase: string,
  bs: string,
}

export interface TUser {
  id: number;
  name: string,
  username: string,
  email: string,
  address: TAddress,
  phone: string,
  website: string,
  company: TCompany
}

export type TUsers = Array<TUser>;