import {getSearch} from "$lib/services";

export const load = async ({url}) => {
  const query = (url.searchParams.get('q') || '').replace(/\s+/g, '');
  const filter = (url.searchParams.get('filters') || '').replace(/\s+/g, '');
  console.log('in results server.ts');
  return {
    contents:getSearch({query, filter})
  }
};
