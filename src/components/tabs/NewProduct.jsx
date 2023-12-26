/* eslint-disable @next/next/no-img-element */
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
} from "@ionic/react";
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
      // reader.readAsDataURL(file);
    }
  };

  const openFileDialog = () => {
    document.getElementById("file-upload").click();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>New Product</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
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
          <IonInput
            label="Product name"
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
              <img src={image} alt="uploaded-image" className="rounded-xl" />
            )}

            {!image && (
              <IonButton onClick={openFileDialog}>Upload image</IonButton>
            )}
          </div>
        </IonItem>

        <IonButton
          expand="block"
          size="default"
          color="success"
          disabled={!name || !description || !price || !image}
        >
          Create
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default NewProduct;
