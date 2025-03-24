import api, { handleApiError } from "./instance";

// ✅ GET Request (with optional query params)

export const fetchData = async <T>(
  endpoint: string,
  params?: Record<string, any>,
): Promise<T> => {
  try {
    const url = params
      ? `${endpoint}?${new URLSearchParams(params)}`
      : endpoint;
    return await api.get(url).json<T>();
  } catch (error) {
    throw handleApiError(error, endpoint);
  }
};

// ✅ POST Request (with body and optional headers)
export const postData = async <T>(
  endpoint: string,
  data: object,
  headers?: Record<string, string>,
): Promise<T> => {
  try {
    return await api.post(endpoint, { json: data, headers }).json<T>();
  } catch (error) {
    throw handleApiError(error, endpoint);
  }
};

// ✅ PUT Request (with body and optional headers)
export const putData = async (
  endpoint: string,
  data: object,
  headers?: Record<string, string>,
) => {
  try {
    return await api.put(endpoint, { json: data, headers }).json();
  } catch (error) {
    throw handleApiError(error, endpoint);
  }
};

// ✅ DELETE Request (with optional body)
export const deleteData = async (endpoint: string, body?: object) => {
  try {
    return await api.delete(endpoint, { json: body }).json();
  } catch (error) {
    throw handleApiError(error, endpoint);
  }
};
