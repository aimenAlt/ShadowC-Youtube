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

const activateHome = false;
export const getHome = async () => {
  if (!activateHome) {
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

const activateSearch = true;

export const getSearch = async ({query, filters}: {query: string, filter: string}) => {
  if (!activateSearch) {
    console.log('search not activated');
    return mockHome.contents;
  }

  try {
    console.log('calling search in services.ts');
    const result = await axios('search/', {
      params: {
        q: query,
        cursor: filters
      }
    });
    return result.data;
  } catch (e) {
    throw error(500, {
      message: 'an error occurred when requesting search results.'
    });
  }
}
