import Store from '../../store';
import * as selectors from '../../store/selectors';
import { IonButton, useIonAlert } from '@ionic/react';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/react';

function Example() {
  const [presentAlert] = useIonAlert();


const ListEntry = ({ list, ...props }) => (
  <IonItem routerLink={`/tabs/lists/${list.id}`} className="list-entry">
    <IonLabel>{list.name}</IonLabel>
  </IonItem>
);

const AllLists = ({ onSelect }) => {
  const lists = Store.useState(selectors.getLists);

  return (
    <>
      {lists.map((list, i) => (
        <ListEntry list={list} key={i} />
      ))}
    </>
  );
};


const Lists = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Earn More</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Earn More</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <AllLists />
        </IonList> <IonButton
      onClick={() =>
        presentAlert({
          header: 'Please enter your info',
          buttons: ['OK'],
          inputs: [
            {
              placeholder: 'Name',
            },
            {
              placeholder: 'Nickname (max 8 characters)',
              attributes: {
                maxlength: 8,
              },
            },
            {
              type: 'number',
              placeholder: 'Age',
              min: 1,
              max: 100,
            },
            {
              type: 'textarea',
              placeholder: 'A little about yourself',
            },
          ],
        })
      }
    >
      Click Me
    </IonButton>
      </IonContent>
    </IonPage>
  );
};
}
export default Lists;
