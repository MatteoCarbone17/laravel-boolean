<template lang="">
    <div class="row">
        <div class="col-12">
            <h2>
                Books:
            </h2>
        </div>
    </div>
<div class="row justify-content-around">
    <AppBook v-for="book in books" :book="book" class="col-4"/>
</div>
</template>
<script>
import AppBook from '../components/AppBook.vue';
import axios from 'axios';
export default {
    name:'BooksList',
    components:{
        AppBook ,
    },
    data() {
        return {
            books : [],
            urlAddress: 'http://127.0.0.1:8000/api/books',
        }
    },
    methods: {
    getBooks() {
        axios.get(this.urlAddress, {
        params: {}
        })
        .then((response) => {
            this.books= response.data.results.data;
            console.log(this.books);
        })
        .catch(function (error) {
            console.warn(error);
        })
    }
    },
    created() {
        this.getBooks();
    },
}
</script>
<style lang="">
    
</style>