import axios from "axios"
import { mapGetters } from "vuex";

export default {
    name: 'HomePage',
    data() {
        return {
            postList: {},
            categoryList: {},
            searchKey: '',
            tokenStatus: false,
            // storageStatus: false,
        }
    },

    computed: {
        ...mapGetters(['storageToken', 'storageUserData'])
    },

    methods: {
        getAllPost() {
            axios.get('http://localhost:8000/api/post/list').then(
                (response) => {
                    for (let i = 0; i < response.data.post.length; i++) {
                        if (response.data.post[i].image != null) {
                            response.data.post[i].image =
                                'http://localhost:8000/postImage/' + response.data.post[i].image;
                        } else {
                            response.data.post[i].image = 'http://localhost:8000/defaultImage/default.jpg'
                        }
                    }

                    this.postList = response.data.post;
                },
            );
        },

        getAllCategory() {
            axios.get('http://localhost:8000/api/category/list').then(
                (response) => {
                    this.categoryList = response.data.category;
                }
            )
        },

        search() {
            let key = {
                key: this.searchKey
            };
            axios.post('http://localhost:8000/api/post/search', key).then(
                (response) => {
                    for (let i = 0; i < response.data.searchData.length; i++) {
                        if (response.data.searchData[i].image != null) {
                            response.data.searchData[i].image =
                                'http://localhost:8000/postImage/' + response.data.searchData[i].image;
                        } else {
                            response.data.searchData[i].image = 'http://localhost:8000/defaultImage/default.jpg'
                        }

                        console.log(response.data.searchData);
                    }
                    this.postList = response.data.searchData;
                }
            )
        },

        categorySearch(searchKey) {
            let key = {
                key: searchKey
            };
            axios.post('http://localhost:8000/api/category/search', key).then(
                (response) => {
                    for (let i = 0; i < response.data.searchData.length; i++) {
                        if (response.data.searchData[i].image != null) {
                            response.data.searchData[i].image =
                                'http://localhost:8000/postImage/' + response.data.searchData[i].image;
                        } else {
                            response.data.searchData[i].image = 'http://localhost:8000/defaultImage/default.jpg'
                        }

                        console.log(response.data.searchData);
                    }
                    this.postList = response.data.searchData;
                }
            )
        },

        newsDetails(id) {
            this.$router.push({
                name: 'newsDetails',
                query: {
                    newsId: id,
                },
            })
        },

        home() {
            this.$router.push({
                name: 'home'
            })
        },

        goLogin() {
            this.$router.push({
                name: 'loginPage'
            })
        },

        goLogout() {
            this.$store.dispatch('setToken', null);
            this.goLogin();
        },

        checkToken() {
            if (
                this.storageToken != null && this.storageToken != '' && this.storageToken != undefined
            ) {
                this.tokenStatus = true
            } else {
                this.tokenStatus = false
            }
        }
    },

    mounted() {
        this.checkToken();
        this.getAllPost();
        this.getAllCategory();
    }

}