import { ProductCard } from "@/components/ProductCard";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  return <ProductCard productId={id} />;
}
