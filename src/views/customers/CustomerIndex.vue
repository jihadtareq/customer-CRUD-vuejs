<script setup>
  import useCustomers from '../../composables/customers';
  import { onMounted } from 'vue';
  const { customers,getCustomers,destoryCustomer} = useCustomers();

  onMounted(()=>getCustomers());
</script>
<template>
    <div class="mt-12">
        <div class="flex justify-end m-2 p-2">
            <RouterLink :to="{name: 'customerCreate' }" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-white">New Customer</RouterLink>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Avatar
                        </th>
                        <th scope="col" class="px-6 py-3">
                            name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            phone
                        </th>
                        <th scope="col" class="px-6 py-3">
                            email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="customer in customers" :key="customer.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="px-6 py-4" >
                            <div v-if="customer.picture" class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <img class="w-10 h-10 rounded-full" :src="customer.picture" alt="Rounded avatar">
                            </div>
                            <div v-else class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            </div>
                        </td>
                        <td class="px-6 py-4">{{ customer.name }}</td>
                        <td class="px-6 py-4">{{ customer.phone }}</td>
                        <td class="px-6 py-4">{{ customer.email }}</td>
                        <td class="px-6 py-4 text-right space-x-2">
                            <RouterLink :to="{name: 'customerEdit' , params : {id: customer.id} }" class="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white">Edit</RouterLink>
                            <button @click="destoryCustomer(customer.id)" class="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white"> Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>