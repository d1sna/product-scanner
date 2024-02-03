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
  console.log(req.body.id)
  const product = await repository.getProductById(req.body.id);
  console.log(product)
  res.send(product);
  return;
}
