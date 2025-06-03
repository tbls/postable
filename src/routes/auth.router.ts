import { Router, Request, Response } from "express";

const authRouter = Router();

authRouter.post("/singup", (_req: Request, res: Response) => {
  res.send("Creando cuenta");
});

authRouter.post("/login", (_req: Request, res: Response) => {
  res.send("Iniciando sesión");
});

authRouter.post("/logout", (_req: Request, res: Response) => {
  res.send("Cerrando sesión");
});

export default authRouter;
