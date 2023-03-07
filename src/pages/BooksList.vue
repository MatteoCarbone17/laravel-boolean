<template lang="">
    <div class="row">
        <div class="col-12">
            <h2>
                Books:
            </h2>
        </div>
    </div>
<div class="row justify-content-around">
    <AppPost  v-for="book in books" :book="book" class="col-4"/>
</div>
</template>
<script>
import AppPost from '../components/AppBook.vue';
import axios from 'axios';
export default {
    name:'BooksList',
    components:{
        AppBook ,
    },
    data() {
        return {
            posts : [],
            urlAddress: 'http://127.0.0.1:8000/api/books',
        }
    },
    methods: {
    getPosts() {
        axios.get(this.urlAddress, {
        params: {}
        })
        .then((response) => {
            this.posts= response.data.results.data;
            console.log(this.books);
        })
        .catch(function (error) {
            console.warn(error);
        })
    }
    },
    created() {
        this.getPosts();
    },
}
</script>
<style lang="">
    
</style>