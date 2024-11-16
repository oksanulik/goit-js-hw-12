import axios from 'axios';
import iziToast from 'izitoast';

const API_KEY = '46878404-43e11e495eedf0f56c253a7d9';
const API_URL = 'https://pixabay.com/api/';

export async function getData(inputValue, page = 1, per_page = 15) {
  try {
    const { data } = await axios.get(API_URL, {
      params: {
        key: API_KEY,
        q: inputValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page,
      },
    });
    console.log(data);

    if (data.hits.length === 0) {
      return { hits: [] };
    }
    return data;
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Сталася помилка при отриманні зображень.',
      message: 'Спробуйте ще раз!',
      position: 'topRight',
    });
    return { hits: [] };
  }
}
