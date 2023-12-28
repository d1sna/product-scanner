import httpClient from "@/lib/htttpClient";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  useIonViewWillEnter,
} from "@ionic/react";
import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";

const Item = ({ productId, name, description, price, imageUrl }) => (
  <div
    className="bg-white shadow-lg rounded-b-xl dark:bg-black my-2"
    onClick={() => {
      Router.push(`/products/${productId}`);
    }}
  >
    <div className="h-44 w-full relative">
      <Image
        className="rounded-t-xl object-cover min-w-full min-h-full max-w-full max-h-full"
        src={imageUrl}
        alt=""
        width={100}
        height={200}
      />
    </div>
    <div className="px-3 py-1 bg-white rounded-b-xl dark:bg-gray-800">
      <div className="flex justify-between items-center text-xl">
        <div className="font-bold uppercase text-gray-800 dark:text-gray-100">
          {name}
        </div>
        <div className="font-bold uppercase">{price} $</div>
      </div>

      <p className="sm:text-sm text-s text-gray-500 mr-1 my-1 dark:text-gray-400">
        {description}
      </p>
    </div>
  </div>
);

const Products = () => {
  const [store, setStore] = useState([]);

  useIonViewWillEnter(async () => {
    const result = await httpClient.getProducts();
    setStore(result);
  });

  useEffect(() => {
    const getStore = async () => {
      const result = await httpClient.getProducts();
      setStore(result);
    };

    getStore();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Products</IonTitle>
          </IonToolbar>
        </IonHeader>

        {store.map((product) => (
          <Item
            productId={`${product.productId}`}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            key={product._id}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Products;
