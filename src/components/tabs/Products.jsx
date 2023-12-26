/* eslint-disable @next/next/no-img-element */
import httpClient from "@/lib/htttpClient";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonContent,
  IonMenuButton,
} from "@ionic/react";
import { useEffect, useState } from "react";

const Item = ({ _id, name, description, price }) => (
  <div className="bg-white shadow-md rounded-b-xl dark:bg-black my-1">
    <div className="h-32 w-full relative">
      <img
        className="rounded-t-xl object-cover min-w-full min-h-full max-w-full max-h-full"
        src={`/${_id}`}
        alt=""
      />
    </div>
    <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
      <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">
        {name}
      </h2>
      <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400">
        {description}
      </p>
      <p>{price} $</p>
    </div>
  </div>
);

const Products = () => {
  const [store, setStore] = useState([]);

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
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
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
            _id={`${product._id}.jpg`}
            name={product.name}
            description={product.description}
            price={product.price}
            key={product._id}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Products;
