import { Store as PullStateStore } from 'pullstate';
import axios from 'axios';

const Store = new PullStateStore({
  safeAreaTop: 0,
  safeAreaBottom: 0,
  menuOpen: false,
  notificationsOpen: false,
  currentPage: null,
  homeItems: [],
  lists: [],
  notifications: [],
  settings: {
    enableNotifications: true,
  },
});

const fetchData = async () => {
  try {
    const homeItemsResponse = await axios.get('https://main-bvxea6i-zaz5zyrpktiw2.us-2.platformsh.site/items/feedv1');
    const listsResponse = await axios.get('https://connect.unlimitednow.site/lists');
    const notificationsResponse = await axios.get('https://connect.unlimitednow.site/notifications');
    Store.update(s => {
      s.homeItems = JSON.stringify(homeItemsResponse.data);
      s.lists = JSON.stringify(listsResponse.data);
      s.notifications = JSON.stringify(notificationsResponse.data);
    });
  } catch (error) {
    console.error(error);
  }
};

fetchData();

export default Store;
