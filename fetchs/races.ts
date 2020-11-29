import Axios from 'axios';
import { RaceType } from '../types';

export type APIRacesResponse = {
  _id: string;
  purse: number;
  type: RaceType;
  raceNumber: number;
  raceName: string;
  url: string;
  date: string;
  meetingNumber: number;
  meetingName: string;
  runnersCount: number;
}[];

export type GetRacesProps = {
  date: string;
  purseMin: number;
  purseMax: number;
  runnersMin: number;
  runnersMax: number;
  type: RaceType[];
};

const createQuery = <T extends { [k: string]: U | U[] }, U = string | number>(
  obj: T
): string => {
  const zip: [keyof T, U][] = [];
  let key: keyof T;
  for (key in obj) {
    const value = obj[key];
    if (Array.isArray(value)) {
      zip.push(...value.map((value: U): [keyof T, U] => [key, value]));
    } else {
      zip.push([key, value as U]);
    }
  }
  return '?' + zip.map((keyVal) => keyVal.join('=')).join('&');
};

export const getRaces = async (props: GetRacesProps) => {
  try {
    const query = createQuery(props);
    const baseUrl = '127.0.0.1:4000';
    const response = await Axios.get<APIRacesResponse>(`${baseUrl}${query}`);
    if (response.status === 204) return [];

    return response.data;
  } catch (e) {
    throw new Error(e);
  }
};
