import { firestore } from '../firebase';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export default {
  /**
   * this function will be fired when you first time run the app,
   * and it will fetch first 5 portfolios, here I retrieve them in descending order, until the last added portfolio appears first.
   */
  portfoliosFirstBatch: async function () {
    try {
      const data = await firestore
        .collection('portfolios')
        .orderBy('createdAt', 'desc')
        .limit(5)
        .get();

      let portfolios = [];
      let lastKey = '';

      data.forEach((doc) => {
        let portfolio = {
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          imageKey: doc.data().imageKey,
          hashtag: doc.data().hashtag,
        };

        lastKey = doc.data().createdAt;

        portfolios.push(portfolio);
      });

      return { portfolios, lastKey };
    } catch (e) {
      console.log(e);
    }
  },

  getImageURL: async function (res) {
    try {
      let arr = [];
      for (const item of res) {
        let obj = { ...item };

        if (item.imageKey) {
          const storage = getStorage();
          const imageRef = ref(storage, `portfolio/${item.imageKey}`);
          obj.imageURL = await getDownloadURL(imageRef);
        }
        arr.push({ ...obj });
      }
      return arr;
    } catch (e) {
      console.log(e);
    }
  },

  /**
   * this function will be fired each time the user click on 'More Posts' button,
   * it receive key of last portfolio in previous batch, then fetch next 5 portfolios
   * starting after last fetched portfolio.
   */
  portfoliosNextBatch: async (key) => {
    try {
      const data = await firestore
        .collection('portfolios')
        .orderBy('createdAt', 'desc')
        .startAfter(key)
        .limit(5)
        .get();

      let portfolios = [];
      let lastKey = '';
      data.forEach((doc) => {
        portfolios.push({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          imageKey: doc.data().imageKey,
          hashtag: doc.data().hashtag,
        });
        lastKey = doc.data().createdAt;
      });
      return { portfolios, lastKey };
    } catch (e) {
      console.log(e);
    }
  },
};
