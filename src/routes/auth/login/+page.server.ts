import { superValidate } from "sveltekit-superforms";
import { zod4 } from "sveltekit-superforms/adapters";
import { formSchema } from "./schema";
import type { PageServerLoad } from "./$types";
import { fail } from "@sveltejs/kit";
import { hookUseAPI } from "$lib/shared/hooks/use-api.js";
import { AxiosError } from "axios";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod4(formSchema)),
  };
};

export const actions = {
  default: async ({ request, cookies }) => {
    const form = await superValidate(request, zod4(formSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    console.log(form.data);
  },
};
