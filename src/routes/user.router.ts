import { Router, Request, Response } from "express";

const userRouter = Router();

userRouter.get("/me", (_req: Request, res: Response) => {
  res.send("Obteniendo perfil del usuario");
});

userRouter.patch("/me", (_req: Request, res: Response) => {
  res.send("Editando perfil del usuario");
});

userRouter.delete("/me", (_req: Request, res: Response) => {
  res.send("Eliminando cuenta del usuario");
});

export default userRouter;
