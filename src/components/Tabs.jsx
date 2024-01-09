import { Redirect, Route } from "react-router-dom";
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { add, list, scan } from "ionicons/icons";
import Products from "./tabs/Products";
import NewProduct from "./tabs/NewProduct";
import ScanQrCode from "./tabs/ScanQrCode";
import { useSession } from "next-auth/react";
import LoginButton from "./LoginButton";

const Tabs = () => {
  const { data: sesion } = useSession();

  if (!sesion) return <LoginButton />;

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/products" render={() => <Products />} exact={true} />
        <Route path="/tabs/new-product" component={NewProduct} exact={true} />
        <Route path="/tabs/camera" component={ScanQrCode} exact={true} />
        <Redirect exact from="/" to="/tabs/products" />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/products">
          <IonIcon icon={list} />
          <IonLabel>Products</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/new-product">
          <IonIcon icon={add} />
          <IonLabel>New product</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/camera">
          <IonIcon icon={scan} />
          <IonLabel>Scan QR-code</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
