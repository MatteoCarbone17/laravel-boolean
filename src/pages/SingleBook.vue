
<script>
import AppBook from '../components/AppBook.vue';
import axios from 'axios';
export default {
    name: 'SingleBook',
    components: {
        AppBook,
    },
    data() {
        return {
            book: '',
            ApiUrl: "http://127.0.0.1:8000/api/books/",
        };
    },
    methods: {
        getBook() {
            axios.get(`${this.ApiUrl}${this.$route.params.id}`, {
                params: {
                }
            })
                .then((response) => {
                    this.book = response.data.results;
                    console.warn(this.book)
                })
                .catch(function (error) {
                    console.log(error);
                });

        },
    },
    created() {
        this.getBook();
    },
}
</script>

<template>
    <div class="container">
        <h1>Libro:{{ this.$route.params.id }}</h1>
        <AppBook :book="book" />
    </div>
</template>


<style lang="scss"></style>