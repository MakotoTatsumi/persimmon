import axiosClient from '@aspida/axios'
import api from "../../../libs/apiClient/$api";

export const apiClient = api(axiosClient())
