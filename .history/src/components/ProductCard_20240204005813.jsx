import httpClient from "@/lib/htttpClient";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";
import QRCodeGenerator from "./QrCodeGenerator";

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
            <IonButton onClick={() => Router.push("/")}>
              <IonIcon icon={chevronBack} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {!!product && (
          <div className="flex justify-between items-center flex-col rounded-lg mb-5 pb-2 border-gray-100 dark:bg-gray-800 font-sans bg-gray-50">
            <Image
              alt="Silhouette of mountains"
              src={`${process.env.NEXT_PUBLIC_URL}/${product.productId}.jpg`}
              className="w-full h-36 object-cover"
              width={100}
              height={50}
            />

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
