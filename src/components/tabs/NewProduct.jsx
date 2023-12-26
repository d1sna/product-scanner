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
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { cloudUpload } from "ionicons/icons";
import { useState } from "react";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");

  const handleChangeImage = (event) => {
    const file = event.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFileDialog = () => {
    document.getElementById("file-upload").click();
  };

  const clearAll = () => {
    setName("");
    setDescription("");
    setPrice("");
    setImage(null);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>New Product</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton />
            <IonButton onClick={clearAll}>Clear all</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">New Product</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem>
          <IonLabel position="stacked">Product Image</IonLabel>
          <div className="flex flex-col justify-center items-center w-full my-2">
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleChangeImage}
            />

            {image && (
              <img
                src={image}
                alt="uploaded-image"
                className="rounded-xl mb-2"
              />
            )}

            <IonButton onClick={openFileDialog}>
              <IonIcon icon={cloudUpload}></IonIcon>
            </IonButton>
          </div>
        </IonItem>

        <IonItem>
          <IonInput
            label="Product name"
            required
            labelPlacement="stacked"
            onIonChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="My product"
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonInput
            label="Product Price"
            labelPlacement="stacked"
            type="text"
            value={price}
            onIonChange={(e) => setPrice(e.target.value)}
            inputMode="numeric"
            placeholder="100 $"
          />
        </IonItem>

        <IonItem>
          <IonTextarea
            label="Product Description"
            labelPlacement="stacked"
            placeholder="My product is..."
            rows={1}
            counter={true}
            maxlength={120}
            onIonChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </IonItem>

        <IonButton
          expand="block"
          size="default"
          disabled={!name || !description || !price || !image}
          className="mt-2"
          onClick={async () => {
            await httpClient.createProduct({
              image,
              name,
              description,
              price,
            });
            clearAll();
          }}
        >
          Create
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default NewProduct;
