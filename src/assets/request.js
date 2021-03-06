import axios from "axios"

'use strict';

const INDEX_BASE_URL =process.env.VUE_APP_INDEX_BASE_URL;

export function tip() {

    return{
        //获取提示
        async getTips(){
            return await axios.get(INDEX_BASE_URL+"/xiaobing/tips");
        }
    }

}

export function ordertype(){
    return {
        //获取所有类型
        async getOrdertypes(){
            return await axios.get( INDEX_BASE_URL + '/xiaobing/orderTypes');
        }
    }
}

export function ordertypelist(){
    return {
        //获取所有类型
        async getOrdertypeList(){
            return await axios.get( INDEX_BASE_URL + '/xiaobing/orderType/list');
        }
    }
}
