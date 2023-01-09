import { firestore } from '../firebase';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { collection, getCountFromServer } from 'firebase/firestore';

const getPortfolios = async (lastKey) => {
  const count = countBatch();
  const list = portfoliosBatch(lastKey);

  const data = await Promise.all([count, list]);
  console.log('🚀 ~ file: PortfolioData.js:10 ~ getPortfolios ~ data', data);

  return data;
};

const countBatch = async () => {
  const coll = collection(firestore, 'portfolios');
  const snapshot = await getCountFromServer(coll);

  return snapshot.data().count;
};

const portfoliosBatch = async function (lastKey = '') {
  try {
    const data = await firestore
      .collection('portfolios')
      .orderBy('createdAt', 'desc')
      .startAfter(lastKey)
      .limit(6)
      .get();

    const portfolios = await data.docs.reduce(async (prev, doc) => {
      let prevPortfolio = await prev;

      let portfolio = {
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        imageKey: doc.data().imageKey,
        hashtag: doc.data().hashtag,
        pageURL: doc.data().pageURL,
        createdAt: doc.data().createdAt,
      };

      if (doc.data().imageKey) {
        const storage = getStorage();
        const imageRef = ref(storage, `portfolio/${doc.data().imageKey}`);
        const url = await getDownloadURL(imageRef);
        portfolio.imageURL = url;
      }

      return Promise.resolve([...prevPortfolio, portfolio]);
    }, Promise.resolve([]));

    return portfolios;
  } catch (e) {
    console.log(e);
  }
};

const APIs = {
  getPortfolios,
};

export default APIs;
