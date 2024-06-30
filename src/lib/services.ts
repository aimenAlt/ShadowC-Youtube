import { X_RapidAPI_Key } from '$env/static/private';
import { error } from '@sveltejs/kit';
import Axios from 'axios';
import {mockHome} from "../../mockData";

const axios = Axios.create({
  baseURL: 'https://youtube138.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': X_RapidAPI_Key,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  },
  params: {
    hl: 'en',
    gl: 'US'
  }
});

const activate = false;
export const getHome = async () => {
  if (!activate) {
    console.log('not activated');
    return mockHome.contents;
  }
  console.log('activated');
  try {
    const result = await axios('home/');
    console.log(result.data);
    return result.data.contents;
  } catch (e) {
    console.log('🚀 ~ file: services.ts:23 ~ getHomePage ~ e:', e.message);
    throw error(500, {
      message: 'an error occurred, refresh the page and try again'
    });
  }
};
