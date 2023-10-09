import { useQuery, useMutation } from "react-query";
import axios from "axios";

const API_BASE_URL = "https://api.ganjoor.net/api";

const get = async (url: string) => {
  const response = await axios.get(`${API_BASE_URL}/${url}`);
  return response.data;
};

const post = async (url: string, data: any) => {
  const response = await axios.post(`${API_BASE_URL}/${url}`, data);
  return response.data;
};

export const useFetch = () => {
  const useGet = <TData = any,>(url: string, enabled?: boolean) => {
    return useQuery<TData>(url, () => get(url), { enabled: enabled });
  };

  const usePost = <TData = any,>(url: string) => {
    const mutation = useMutation<TData, any, any>((data) => post(url, data));
    const { data, isLoading, isError } = mutation;

    return {
      data,
      isLoading,
      isError,
      mutate: mutation.mutate,
      reset: mutation.reset,
    };
  };

  return { useGet, usePost };
};
