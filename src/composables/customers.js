import {ref} from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/customers/"

export default function useCustomers() 
{
    const customers = ref([]);
    const customer = ref([]);
    const errors = ref({})
    const router = useRouter();

    const getCustomers = async () =>{
        const response = await axios.get("customers");
        customers.value = response.data.data;
    };
    const getCustomer = async (id) =>{
        const response = await axios.get("customers/"+id);
        customer.value = response.data.data;
    };

    const storeCustomer = async (data) => {
        try
        {
            await axios.post("customers",data);
            await router.push({name:"customers"});

        }catch(error)
        {
            if(error.response.status === 422)
            {
                errors.value = error.response.data.errors;
            }
        }

    };

    const updateCustomer = async (id,data) => {
        try
        {
            await axios.put("customers/"+ id, data);
            await router.push({name:"customers"});

        }catch(error)
        {
            if(error.response.status === 422)
            {
                errors.value = error.response.data.errors;
            }
        }

    };

    const destoryCustomer = async (id) => {
        try
        {
            if(!window.confirm("Are you sure to delete this customer?"))
            {
                return;
            }
            await axios.delete("customers/"+ id);
            await getCustomers();

        }catch(error)
        {
            if(error.response.status === 422)
            {
                errors.value = error.response.data.errors;
            }
        }

    };
    return {
        customers ,
        customer,
        getCustomers,
        getCustomer,
        storeCustomer,
        updateCustomer,
        destoryCustomer,
        errors,
    }
    
}