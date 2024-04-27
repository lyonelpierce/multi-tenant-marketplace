import exp from "constants";
import { z } from "zod";

const searchSchema = z.object({
  searchInput: z.string().min(3, {
    message: "La búsqueda debe tener al menos 3 caracteres",
  }),
});

export default searchSchema;
