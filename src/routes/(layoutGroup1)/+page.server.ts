import {getHome} from "$lib/services";
import type {Actions} from "@sveltejs/kit";
import {fail, redirect} from "@sveltejs/kit";

export const load = async () => {
  return {
    content: getHome()
  };
};


export const actions = {
  search: async ({request }) => {
    console.log("Calling Search!!!");
    const data = await request.formData();
    const query = data.get("q");
    if(!query) {
      return fail(400, {
        error: "Empty search"
      });
    }
    console.log("Search Called!!!");
    throw redirect(301, `/results?q=${query}`)
    return {
      status: 200,
      body: {
        message: "OK"
      }
    };
  }
};
