export const images = [
  'https://res.cloudinary.com/unlimitednow/image/upload/v1669509766/assets/62274-1.jpg.jpg',
  'https://images.unsplash.com/photo-1610212594948-370947a3ba0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
  'https://images.unsplash.com/photo-1610155180433-9994da6a323b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
];

export const homeItems = [
  {
    title: 'Receive Exclusive Rewards',
    type: 'Create',
    text: 'Distribute Ads',
    author: 'Max Lynch',
    authorAvatar: '/img/max.jpg',
    image: images[0],
  }
];

export const notifications = [
  { title: 'New friend request', when: '6 hr' },
  { title: 'Please change your password', when: '1 day' },
  { title: 'You have a new message', when: '2 weeks' },
  { title: 'Welcome to the app!', when: '1 month' },
];

// Some fake lists
export const lists = [
  {
    name: ' 💰 Open merchant account',
    id: 'groceries',
    items: [{ name: 'Stripe' }, { name: 'Square' }, { name: 'PayPal' }, { name: 'CashApp ' }],
  },
  {
    name: '🧑‍🤝‍🧑 Growing your lists',
    id: 'hardware',
    items: [
      { name: 'Mailchimp' },
      { name: 'Klaviyo' },
      { name: 'Campaign Monitor' },
      { name: 'Sendgrid' },
    ],
  },
  { name: '🥰 Managing online appearance', id: 'work', items: [{ name: 'How to part A' }, { name: 'How to Part b' }] },
  { name: '👋 Finding new customers', id: 'reminders' },
];
