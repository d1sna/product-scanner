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
import { ProductCard } from "./tabs/ProductCard";

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/products" render={() => <Products />} exact={true} />
        <Route
          path="/tabs/products/:productId"
          render={() => <ProductCard />}
          exact={true}
        />
        <Route
          path="/tabs/new-product"
          render={() => <NewProduct />}
          exact={true}
        />
        <Route path="/tabs/camera" render={() => <ScanQrCode />} exact={true} />
        <Route
          path="/tabs"
          render={() => <Redirect to="/tabs/products" />}
          exact={true}
        />
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
