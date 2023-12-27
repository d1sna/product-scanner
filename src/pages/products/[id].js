import { ProductCard } from "@/components/tabs/ProductCard";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  return <ProductCard productId={id} />;
}
