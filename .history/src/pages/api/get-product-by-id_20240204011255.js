import repository from "@/lib/repository";

export default async function getProductById(req, res) {
  console.log(req.body.id)
  const product = await repository.getProductById(req.body.id);
  console.log(product)
  res.send(product);
  return;
}
