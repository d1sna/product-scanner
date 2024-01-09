import { Redirect, Route } from "react-router-dom";
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { add, list, person, scan } from "ionicons/icons";
import Products from "./tabs/Products";
import NewProduct from "./tabs/NewProduct";
import ScanQrCode from "./tabs/ScanQrCode";
import User from "./tabs/User";

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/products" render={() => <Products />} exact={true} />
        <Route path="/tabs/new-product" component={NewProduct} exact={true} />
        <Route path="/tabs/camera" component={ScanQrCode} exact={true} />
        <Route path="/tabs/user" component={User} exact={true} />
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
        <IonTabButton tab="tab4" href="/tabs/user">
          <IonIcon icon={person} />
          <IonLabel>User</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
