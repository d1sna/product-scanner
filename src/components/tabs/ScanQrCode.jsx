import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonContent,
  IonMenuButton,
  IonBackButton,
} from "@ionic/react";
import Router from "next/router";
import { useEffect, useState } from "react";

const ScanQrCode = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const checkPermission = async () => {
    return await BarcodeScanner.checkPermission({ force: true });
  };

  useEffect(() => {
    const startScan = async () => {
      try {
        const permission = await checkPermission();
        if (!permission.granted) {
          setErrorMessage("Pls allow using camera in settings");
          return;
        }

        setIsStarted(true);
        const result = await BarcodeScanner.startScan();
        if (result.hasContent) {
          setIsStarted(false);

          await stopScan();
          Router.push(`/products/${result.content}`);
        }
      } catch (error) {
        setIsStarted(false);
        setErrorMessage(error.message);
      }
    };

    const stopScan = async () => {
      await BarcodeScanner.stopScan();
    };

    startScan();

    return stopScan;
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scan Qr Code</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
            <IonBackButton defaultHref="/tabs/products" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen hidden={isStarted}>
        <div className=" flex items-center justify-center h-full">
          {!!errorMessage && (
            <div className="text-2xl text-white text-center bg-red-500 rounded-xl py-4">
              <div>Attention! Error!</div>
              <div>{errorMessage}</div>
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ScanQrCode;
