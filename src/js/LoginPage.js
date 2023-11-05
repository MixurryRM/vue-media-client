import axios from "axios"

export default {
    name: 'LoginPage',

    data() {
        return {
            userData: {
                email: '',
                password: ''
            },
            userStatus: false
        }
    },

    methods: {
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

        login() {
            axios.post('http://localhost:8000/api/user/login', this.userData).then(
                (response) => {
                    if (response.data.token == null) {
                        this.userStatus = true
                    } else {
                        this.storeUserInfo(response);
                        this.userStatus = false
                        this.home();
                    }
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        },

        storeUserInfo(response) {
            this.$store.dispatch('setToken', response.data.token);
            this.$store.dispatch('setUserData', response.data.user);
            console.log('storage token success..')
        }
    }
}