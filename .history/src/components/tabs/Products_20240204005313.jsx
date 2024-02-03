import httpClient from "@/lib/htttpClient";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";

const Products = () => {
  const [store, setStore] = useState([]);
  const [manualFetchTrigger, setManualFetchTrigger] = useState(false);
  // const { data: session } = useSession();

  useEffect(() => {
    const getStore = async () => {
      const result = await httpClient.getProducts();
      setStore(result);
    };

    getStore();
  }, [manualFetchTrigger]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonRefresher
          slot="fixed"
          onIonRefresh={(event) => {
            setManualFetchTrigger(!manualFetchTrigger);
            setTimeout(() => event.detail.complete(), 1000);
          }}
        >
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Products</IonTitle>
          </IonToolbar>
        </IonHeader>

        {store.map((product) => (
          <IonCard
            key={product._id}
            onClick={() => Router.push(`/products/${product.productId}`)}
          >
            <Image
              alt="Silhouette of mountains"
              src={`${process.env.PUBLIC_URL}/${product.productId}.jpg`}
              className="w-full h-36 object-cover"
              width={100}
              height={50}
            />

            <IonCardHeader>
              <IonCardTitle>{product.name}</IonCardTitle>
              <IonCardSubtitle>{product.price} $</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>{product.description}</IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Products;
