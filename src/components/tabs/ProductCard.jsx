/* eslint-disable @next/next/no-img-element */
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonContent,
  IonBackButton,
} from "@ionic/react";
import QRCodeGenerator from "../QrCodeGenerator";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import httpClient from "@/lib/htttpClient";

export const ProductCard = () => {
  const router = useRouter();
  const productId = router.query.all[2];

  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const result = await httpClient.getProductById(productId);
      setProduct(result);
    };

    getProduct();
  }, [router.query, productId]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {!!product && <IonTitle>{product.name}</IonTitle>}
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/products" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            {!!product && (
              <IonTitle size="large" className="uppercase">
                {product.name}
              </IonTitle>
            )}
            <div className="text-xl  p-2 rounded-xl my-2 w-full shadow-md text-center">
              Price: {product.price} $
            </div>
          </IonToolbar>
        </IonHeader>

        {!!product && (
          <div className="flex justify-between items-center flex-col ">
            <img
              src={`/${productId}.jpg`}
              alt="product-image"
              className="rounded-lg m-2 shadow-md"
            ></img>
            <div className="text-xl bg-gray-200 p-5 rounded-xl my-2 w-full shadow-md">
              {product.description}
            </div>
            <div className="my-2 p-5 shadow-md rounded-lg">
              QR Code: <QRCodeGenerator qrCodeValue={productId} />
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};
