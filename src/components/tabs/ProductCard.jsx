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
import { useEffect, useState } from "react";
import httpClient from "@/lib/htttpClient";
import Image from "next/image";

export const ProductCard = ({ productId }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const result = await httpClient.getProductById(productId);
      setProduct(result);
    };

    getProduct();
  }, [productId]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Product Info</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/products" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {!!product && (
          <div className="flex justify-between items-center flex-col rounded-lg mb-2 border-gray-100 dark:bg-gray-800 font-sans bg-gray-50">
            <Image
              src={product.imageUrl}
              alt="product-image"
              className="h-80 my-2 rounded-md w-[70%]"
              width={100}
              height={200}
            ></Image>

            <div className="text-4xl font-bold text-center ml-5">
              {product.price} $
            </div>

            <div className=" text-xl uppercase font-bold text-center my-2 border-b dark:border-gray-600 w-full ml-5">
              {product.name}
            </div>

            <div className="text-xl p-5 w-full">
              <div className="text-2xl font-bold text-center uppercase">
                Description
              </div>
              <div className="text-center">{product.description}</div>
            </div>

            <div className="my-2 p-5 border-t dark:border-gray-600 w-full flex flex-col items-center">
              <div className="text-center mb-2">QR Code:</div>
              <QRCodeGenerator qrCodeValue={productId} />
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};
