import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonContent,
  IonMenuButton,
} from "@ionic/react";

export const ProductCard = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Product Card</IonTitle>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding" fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Product Card</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonContent>
  </IonPage>
);
