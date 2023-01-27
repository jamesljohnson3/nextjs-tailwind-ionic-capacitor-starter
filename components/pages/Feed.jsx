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
import Notifications from './Notifications';
import { notificationsOutline } from 'ionicons/icons';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';
import { UserButton,  useUser} from "@clerk/clerk-react";
import { KnockFeedProvider, NotificationFeedPopover, NotificationIconButton } from "@knocklabs/react-notification-feed";
import "@knocklabs/react-notification-feed/dist/index.css";

const FeedCard = ({ title, type, text, author, authorAvatar, image }) => (
  <Card className="my-4 mx-auto">
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
  </Card>
);

const Feed = () => {
  const homeItems = Store.useState(getHomeItems);
  const [showNotifications, setShowNotifications] = useState(false);
  const notifButtonRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Feed</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowNotifications(true)}>
              <IonIcon icon={notificationsOutline} />
            </IonButton> <UserButton /> <KnockFeedProvider
          userId={primaryEmailAddress.toString()}
          apiKey={process.env.NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY}
          feedId={process.env.NEXT_PUBLIC_KNOCK_FEED_CHANNEL_ID}
        ><>
        <NotificationIconButton
          ref={notifButtonRef}
          onClick={(e) => setIsVisible(!isVisible)}
        />
        <NotificationFeedPopover
          buttonRef={notifButtonRef}
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
        />
      </></KnockFeedProvider>  
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Feed</IonTitle>
          </IonToolbar>
       <UserButton /> </IonHeader>
        <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />
        {homeItems.map((i, index) => (
          <FeedCard {...i} key={index} />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Feed;
