import { ValidationException, NotFoundUserException } from './errors';
import { 
    UserFechListData, 
    UserFetchData, 
    UserFetchDataResponse, 
    UserUpdateData, 
    UserUpdateDataResponse 
} from './types';
import { apiService } from './utils';

export async function fetchUserData(payload: UserFetchData): Promise<UserFetchDataResponse> {
    if(!payload.userId || !payload.token) throw new ValidationException();
    
    const headers = {
        'Authorization': `Bearer ${payload}`,
    };
    
    const response = await apiService.get<UserFetchDataResponse>(`/user/${payload.userId}`, { headers });

    if(!response.data) throw new NotFoundUserException()

    return response.data;
}


export async function updateUserData(payload: UserUpdateData): Promise<UserFetchDataResponse>  {
    if(!payload.userId || !payload.token) throw new ValidationException();
    
    const headers = {
        'Authorization': `Bearer ${payload}`,
    };
    
    const response = await apiService.patch<UserUpdateDataResponse>(
        `/user/${payload.userId}`, 
        payload.data, 
        { headers }
    );

    if(!response.data) throw new NotFoundUserException()

    return response.data;
}


export async function fetchUserList(payload: UserFechListData) {
    if(!payload.token || !payload.limit || !payload.page) throw new ValidationException();
    
    const headers = {
        'Authorization': `Bearer ${payload.token}`,
    };
        
    const response = await apiService.get<UserFetchDataResponse>(
        `/users`, 
       {
        data: {
            page: payload.page,
            limit: payload.limit
        },
        headers
       }, 
    );

    if(!response.data) throw new NotFoundUserException()

    return response.data;
}

