import Image from 'next/image';
import Card from '../ui/Card';
import React, { useRef, useState } from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuButton,
} from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react';

import Notifications from './Notifications';
import { notificationsOutline } from 'ionicons/icons';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';
import { UserButton,  useUser} from "@clerk/clerk-react";

const FeedCard = ({ title, type, text, author, authorAvatar, image }) => (
  <><a href='https://studio.unlimitpotential.com/'><Card className="my-4 mx-auto">
    <div className="h-32 w-full relative">
      <img className="rounded-t-xl object-cover min-w-full min-h-full max-w-full max-h-full" src={image} alt="" />
    </div>
    <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
      <h4 className="font-bold py-0 text-s text-gray-400 dark:text-gray-500 uppercase">{type}</h4>
      <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">{title}</h2>
      <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400">{text}</p>
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 relative">
          <img src={authorAvatar} className="rounded-full object-cover min-w-full min-h-full max-w-full max-h-full" alt="" />
        </div>
        <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">{author}</h3>
      </div>
    </div>
  </Card></a> </>
);

const Feed = () => {
  const homeItems = Store.useState(getHomeItems);
  const [showNotifications, setShowNotifications] = useState(false);

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quick Start</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
          <UserButton /> 
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Quick Start</IonTitle>
          </IonToolbar>
       </IonHeader>
        <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />
        {homeItems.map((i, index) => (
          <FeedCard {...i} key={index} href='https://unlimitpotential.com/my-profile'/>
        ))}
         <IonCard>
      <IonCardHeader>
        <IonCardTitle>Apps & Tools</IonCardTitle>
        <IonCardSubtitle>Lillie A.I.</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://res.cloudinary.com/unlimitednow/image/upload/v1673246648/Screen_Shot_2023-01-09_at_1.32.05_AM_i7dtzd.png" />
            </IonThumbnail>
            <a href='https://studio.unlimitpotential.com/'> <IonLabel>Launch App</IonLabel></a>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://res.cloudinary.com/unlimitednow/image/upload/v1673246648/Screen_Shot_2023-01-09_at_1.32.20_AM_zltc7j.png" />
            </IonThumbnail>
            <a href='https://connect.unlimitpotential.com/'>  <IonLabel>Launch App</IonLabel></a>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://res.cloudinary.com/unlimitednow/image/upload/v1673246648/Screen_Shot_2023-01-09_at_1.31.57_AM_gnw5wi.png" />
            </IonThumbnail>
            <a href='https://accounts.unlimitpotential.com/me'>  <IonLabel>Launch App</IonLabel></a>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://res.cloudinary.com/unlimitednow/image/upload/v1673246648/Screen_Shot_2023-01-09_at_1.32.11_AM_f7flvc.png" />
            </IonThumbnail>
            <a href='https://command.unlimitpotential.com/'>  <IonLabel>Launch App</IonLabel></a>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
