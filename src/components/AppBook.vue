<script>

export default {
    name: 'AppBook',

    data() {
        return {

        }
    },
    props:
    {
        'book': {
            type: Object,
            required: true,
        },
        'isShow': {
            type: Boolean,
            required: false,
            default: false,
        },

    },

    methods: {

    },

}
</script>

<template>
    <div class="card mb-5 rounded-4 p-5">
        <div class="card-header d-flex  rounded-4 bg-success text-light justify-content-between p-2">
            <p>
                Author : {{ book.author }}
            </p>
            <span>
                <i class="fa-solid fa-envelopes-bulk"></i>
            </span>
        </div>
        <div class="card-body  rounded-4 text-center">
            <div>
                <h5 class="card-title mt-2 mb-2">{{ book.title }}</h5>
            </div>
            <p>
                Id Project: {{ book.id }}
            </p>
            <div class="card-img mt-2 mb-2">
                <img :src="book.cover_image" class="img-fluid" width="150px" alt="cover_book">
            </div>
            <div>
                <p class="card-text p-3 text-">{{ book.description.substr(0, 150) }}...</p>
            </div>
        </div>
        <div class="card-footer  rounded-4 p-3">
            <span class="d-block">Data di pubblicazione : {{ book.publication_date }} </span>
            <span class="d-block">Prezzo: {{ book.price }}&euro; </span>
        </div>
        <div class="col-2 mt-3">
            <router-link v-if="!isShow" :class="this.$route.name === 'book' ? 'd-none' : '' " :to="{ name: 'book', params: { id: book.id } }" class="btn btn-outline-success">
                Visualiza
            </router-link>
        </div>
    </div>
</template>

<style lang="">
    
</style>