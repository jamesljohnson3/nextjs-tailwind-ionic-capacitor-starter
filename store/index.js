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
const homeItemsResponse = await axios.get('https://connect.unlimitednow.site/homeItems');
const listsResponse = await axios.get('https://connect.unlimitednow.site/lists');
const notificationsResponse = await axios.get('https://connect.unlimitednow.site/notifications');
Store.update(s => {
s.homeItems = homeItemsResponse.data;
s.lists = listsResponse.data;
s.notifications = notificationsResponse.data;
});
} catch (error) {
console.error(error);
}
};

fetchData();

export default Store;