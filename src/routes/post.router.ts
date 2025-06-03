import { Router, Request, Response } from "express";

const postRouter = Router();

postRouter.get("/posts", (_req: Request, res: Response) => {
  res.send("Obteniendo posts");
});

postRouter.get("/posts/:username", (req: Request, res: Response) => {
  const { username } = req.params;
  res.send("Obteniendo posts del usuario " + username);
});

postRouter.post("/posts", (_req: Request, res: Response) => {
  res.send("Creando un post");
});

postRouter.patch("/posts/:postId", (req: Request, res: Response) => {
  const { postId } = req.params;
  res.send("Editando el posts con id " + postId);
});

postRouter.post("/posts/:postId/like", (req: Request, res: Response) => {
  const { postId } = req.params;
  res.send("Agregando like al posts con id " + postId);
});

postRouter.delete("/posts/:postId/like", (req: Request, res: Response) => {
  const { postId } = req.params;
  res.send("Eliminando like al posts con id " + postId);
});

export default postRouter;
