import axios from "axios";
import { mapGetters } from "vuex";


export default {
    name: 'NewsDetails',

    data() {
        return {
            postId: 0,
            post: {},
            storageStatus: false,
            viewCount: 0
        }
    },

    computed: {
        ...mapGetters(['storageToken', 'storageUserData'])
    },

    methods: {
        loadPost(id) {
            let key = {
                postId: id,
            };
            axios.post('http://localhost:8000/api/post/details', key).then(
                (response) => {


                    if (response.data.post.image != null) {
                        response.data.post.image =
                            'http://localhost:8000/postImage/' + response.data.post.image;
                    } else {
                        response.data.post.image = 'http://localhost:8000/defaultImage/default.jpg'
                    }
                    this.post = response.data.post;
                }
            )
        },

        back() {
            // history.back();
            this.$router.push({
                name: 'home'
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

        viewCountLoad() {
            let data = {
                user_id: this.storageUserData.id,
                post_id: this.$route.query.newsId
            };

            axios.post('http://localhost:8000/api/post/actionlog', data).then(
                (response) => {
                    this.viewCount = response.data.post.length;
                }
            )
        }
    },
    mounted() {
        this.viewCountLoad();
        this.postId = this.$route.query.newsId;
        this.loadPost(this.postId);
    }
}