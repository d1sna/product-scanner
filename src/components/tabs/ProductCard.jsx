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
import { useEffect, useState } from "react";
import httpClient from "@/lib/htttpClient";

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
          <IonTitle>Product {productId}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/products" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        {!!product && (
          <div className="flex justify-between items-center flex-col shadow-lg rounded-lg mb-2 border-gray-100 dark:bg-gray-800">
            <div className=" text-4xl uppercase my-2 border-b dark:border-gray-600 w-full text-center">
              {product.name}
            </div>
            <img
              src={product.imageUrl}
              alt="product-image"
              className="rounded-xl m-2 px-1"
            ></img>
            <div className="w-full border-t dark:border-gray-600"></div>
            <div className="p-5 my-2 w-[80%] rounded-xl bg-green-100 dark:bg-green-400">
              <div>Price:</div>
              <div>{product.price} $</div>
            </div>
            <div className="text-md bg-gray-100 p-5 my-2 w-[80%] rounded-xl dark:bg-gray-600">
              <div>Description:</div>
              <div>{product.description}</div>
            </div>
            <div className="my-2 p-5 rounded-lg">
              <div className="text-center mb-2">QR Code:</div>
              <QRCodeGenerator qrCodeValue={productId} />
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};
