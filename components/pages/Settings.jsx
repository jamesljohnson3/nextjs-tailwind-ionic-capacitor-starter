import {
  IonPage,
  IonItem,
  IonList,
  IonToggle,
  IonLabel,
} from '@ionic/react';

import Store from '../../store';
import * as selectors from '../../store/selectors';
import { setSettings } from '../../store/actions';
import { IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
import { chevronDownCircle, chevronForwardCircle, chevronUpCircle, colorPalette, document, globe } from 'ionicons/icons';

const Settings = () => {
  const settings = Store.useState(selectors.getSettings);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Advanced Options</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Receive Alerts</IonLabel>
            <IonToggle
              checked={settings.enableNotifications}
              onIonChange={e => {
                setSettings({
                  ...settings,
                  enableNotifications: e.target.checked,
                });
              }}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Limit Spending</IonLabel>
            <IonToggle
              checked={settings.enableNotifications}
              onIonChange={e => {
                setSettings({
                  ...settings,
                  enableNotifications: e.target.checked,
                });
              }}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Lillie A.I. </IonLabel>
            <IonToggle
              checked={settings.enableNotifications}
              onIonChange={e => {
                setSettings({
                  ...settings,
                  enableNotifications: e.target.checked,
                });
              }}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Accept Payments</IonLabel>
            <IonToggle
              checked={settings.enableNotifications}
              onIonChange={e => {
                setSettings({
                  ...settings,
                  enableNotifications: e.target.checked,
                });
              }}
            />
          </IonItem>
        </IonList>
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon icon={chevronUpCircle}></IonIcon>
          </IonFabButton>
          <IonFabList side="top">
          <a href="https://connect.unlimitpotential.com/">  <IonFabButton>
              <IonIcon icon={document}></IonIcon>
            </IonFabButton></a> <a href="https://connect.unlimitpotential.com/billing">
            <IonFabButton>
              <IonIcon icon={colorPalette}></IonIcon>
            </IonFabButton></a> <a href="https://connect.unlimitpotential.com/feed">
            <IonFabButton>
              <IonIcon icon={globe}></IonIcon>
            </IonFabButton></a>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
