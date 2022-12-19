<template>
    <div class="flex flex-col w-1/2">
        <h1 class="font-bold mb-8">Nuxt 3 + Supabase Auth</h1>
        <input type="email" placeholder="Email"
            class="text-white form-input rounded-md bg-gray-600 placeholder-gray-300 mb-2 focus:outline-none focus:ring focus:ring-green-500" />
        <input type="password" placeholder="Password"
            class="text-white form-input rounded-md bg-gray-600 placeholder-gray-300 mb-2 focus:outline-none focus:ring focus:ring-green-500" />
        <button class="bg-green-500 rounded-md hover:bg-green-400 h-10 mb-8">Sign up</button>
        <div class="flex justify-center underline hover:font-bold">
            <nuxt-link href="#">Have an account? Log in instead</nuxt-link>
        </div>
    </div>
</template>
