<script setup>
 import { onMounted, reactive } from 'vue';
 import useCustomers from '../../composables/customers';

 const {customer,getCustomer,updateCustomer,errors} = useCustomers();
 const props = defineProps({
    id: {
        required:true,
        type:String,
    }
 });
 onMounted(() => getCustomer(props.id));
</script>
<template>
    <div class="mt-12">
        <form @submit.prevent="updateCustomer($route.params.id)">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Customer Name</label>
                    <input v-model="customer.name" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
                    <div v-if="errors.name">
                        <span class="text-sm text-red-400">{{ errors.name[0] }}</span>
                    </div>
                </div>
                <div>
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                    <input v-model="customer.phone" type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678"  required>
                    <div v-if="errors.phone">
                        <span class="text-sm text-red-400">{{ errors.phone[0] }}</span>
                    </div>
                </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="customer_types" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select v-model="customer.typeId" id="customer_types" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a type</option>
                        <option value="1">Merchant</option>
                        <option value="2">Customer</option>
                    </select>
                    <div v-if="errors.typeId">
                        <span class="text-sm text-red-400">{{ errors.typeId[0] }}</span>
                    </div>
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                    <input v-model="customer.email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required>
                    <div v-if="errors.email">
                        <span class="text-sm text-red-400">{{ errors.email[0] }}</span>
                    </div>
                </div> 
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input v-model="customer.password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••">
                    <div v-if="errors.password">
                        <span class="text-sm text-red-400">{{ errors.password[0] }}</span>
                    </div>
                </div> 
                <div>
                    <label for="password_confirmation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                    <input  v-model="customer.password_confirmation" type="password" id="password_confirmation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••">
                    <div v-if="errors.password_confirmation">
                        <span class="text-sm text-red-400">{{ errors.password_confirmation[0] }}</span>
                    </div>
                </div> 
            </div>
            <button type="submit" class="bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Submit</button>
        </form>
    </div>
</template>