import repository from "@/lib/repository";

export default async function getProductById(req, res) {
  if (req.method !== "POST") {
    res.status(404);
    return;
  }

  if (!req.body.id) {
    res.status(400);
    return;
  }

  const product = await repository.getProductById(req.body.id);
  res.send(product);
  return;
}
