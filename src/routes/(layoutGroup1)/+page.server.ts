import {getHome} from "$lib/services";

export const load = async () => {
  return {
    content: getHome()
  };
};
