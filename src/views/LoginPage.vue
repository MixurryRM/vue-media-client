<template>
    <main>
        <div class="d-flex justify-content-center my-3">
          <p class="btn btn-danger btn-sm me-3" @click="home()">Home</p>           
        </div>

        <form class="container-fluid col-5 mx-auto shadow my-5 p-5">
            <div class="alert alert-danger" v-if="userStatus">
              The credential do not match!
            </div>
            <div>
              <div class="form-group mb-3">
                  <label class="form-label" for="email">Email :</label>
                  <input type="email"  id="email" 
                         class="form-control" placeholder="Enter your email..."
                         v-model="userData.email" >
              </div>
              <div class="form-group mb-3">
                  <label class="form-label" for="password">Password :</label>
                  <input type="password"  id="password" 
                         class="form-control" placeholder="Enter your password..."
                          v-model="userData.password">
              </div>
            </div>
            <input type="button" value="Login" class="btn btn-dark btn-sm flex-end" @click="login()">
        </form>
      </main>
</template>

<script src="../js/LoginPage.js">
</script>
