import {changePage} from "./mutations";
import axios from 'axios'

export const AenterInfor = ({commit} , data)=>{
    axios.get('enterprise-account/company',)
        .then(response=>{
            sessionStorage.setItem('Enterprise_information',JSON.stringify(response.data.data))
            commit({
                type:'EnterInfor',
                data:response.data.data
            })
        })
        .catch(err=>{
            console.log(err)
        })

}

