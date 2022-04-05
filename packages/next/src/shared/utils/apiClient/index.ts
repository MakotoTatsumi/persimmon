import axiosClient from "@aspida/axios"
import api from "../../../libs/apiClient/strapi/$api"

export const apiClient = api(axiosClient())
