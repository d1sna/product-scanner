import repository from "@/lib/repository";

export default async function getProducts(req, res) {
  const products = await repository.getProducts();
  res.send(products);
}
