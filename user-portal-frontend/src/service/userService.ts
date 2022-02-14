import { User } from '../model/user';

export const fetchUsers = async (options: FetchUserOptions): Promise<User[]> => {
    const url = buildUsersUrl(options);
    return fetch(url)
      .then(res => res.json());
    
}

const buildUsersUrl = (options: FetchUserOptions): string => {
    let apiUrl = 'http://localhost:3001/users?';
    const queries = constructQueryString(options);
    if (queries) {
        apiUrl = apiUrl.concat(queries);
    }
    return apiUrl;
}

const constructQueryString = (options: FetchUserOptions): string => {
    const keyValuePairs = [];
    for (const key in options) {
        keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(options[key]));
    }
    return keyValuePairs.join('&');
}

export interface FetchUserOptions {
    includeCodes?: string;
    excludeCodes?: string;
    includeCategories?: string;
    excludeCategories?: string;
}

