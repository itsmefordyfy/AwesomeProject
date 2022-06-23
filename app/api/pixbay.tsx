import {AxiosError} from 'axios';
import Config from 'react-native-config';
import ApiConfig from '../res/api-config';
import {apiClient} from '../services/client';

export async function getSearchResults(query: string, page: number) {
  try {
    console.log('page: ', page);
    const response = await apiClient.get(`${ApiConfig.PIXBAY}`, {
      params: {
        key: Config.PIXBAY_API_KEY,
        image_type: 'photo',
        q: query,
        page,
      },
    });

    return response.data;
  } catch (error) {
    return error;
  }
}
