<template>
  <div class="d-flex justify-content-center  my-3">
    <p class="btn btn-danger btn-sm mr-3" @click="home()">Home</p>
    <p class="btn btn-dark btn-sm mr-3" @click="goLogin()" v-if="!storageToken">Login</p>
    <p class="btn btn-dark btn-sm mr-3" @click="goLogout()" v-if="storageToken">Logout</p>
  </div>
  <!-- Whats New Start -->
  <section class="whats-news-area pt-50 pb-20">
      <div class="container">
          <div class="row">
              <div class="col-lg-12">
                  <div class="row d-flex justify-content-between">
                      <div class="col-lg-3 col-md-3">
                          <div class="section-tittle mb-30">
                              <h3>Whats New</h3>
                          </div>
                      </div>
                      <div class="col-lg-9 col-md-9">
                          <div class="properties__button">
                              <!--Nav Button  -->
                              <nav>
                                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                      <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="details.htmlnav-home" role="tab" aria-controls="nav-home" aria-selected="true"
                                      @click="categorySearch('')">
                                      All
                                      </a>
                  <a
                    class="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="details.htmlnav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                    v-for="(category,index) in categoryList" :key="index"
                    @click="categorySearch(category.name)"
                    >{{ category.name }}</a
                  >
                </div>
              </nav>
              <!--End Nav Button  -->
            </div>
          </div>
        </div>

        <div class="row">
        <div class="col-12 mb-3">
          <div class="d-flex justify-content-end">
            <input
              type="text"  class=" form-control col-3" v-model="searchKey" v-on:keyup.enter="search()"
            />
            
              <i class="fa fa-solid fa-search text-dark ml-2 mt-2" @click="search()"
              style="font-size: 20px;"></i>
            
          </div>
        </div>
       </div>
        
        <div class="row">
          <div class="col-12">
            <!-- Nav Card -->
            <div class="tab-content" id="nav-tabContent">
              <!-- card one -->
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div class="whats-news-caption">
                 <div>
                  <div v-if="!tokenStatus">
                    <div class="row p-5">
                    <h1 class="d-flex justify-content-center h3 bg-warning  mx-auto p-3">
                      There is no permission for this page. Please Login
                      First!
                    </h1>
                  </div>
                </div>
                   <div v-if="tokenStatus" class="row">
                    <div class= "mx-auto m-5 d-flex align-items-center" v-if="postList == 0">
                      <h1 class="text-danger">
                        There is no data!
                      </h1>
                    </div>
                    <div class="col-lg-6 col-md-6" v-else-if="postList != 0" v-for="(post,index) in postList" :key="index">
                      <div class="single-what-news mb-100" @click="newsDetails(post.post_id)">
                        <div class="what-img">
                          <img
                            :src="post.image"
                            alt=""
                          />
                        </div>
                        <div class="what-cap">
                          <span class="color1">{{ post.category_name }}</span>
                          <h4>
                            <a href="details.html"
                              >{{ post.title }}</a
                            >
                          </h4>
                        </div>
                      </div>
                    </div>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Nav Card -->
          </div>
        </div>
      </div>
      </div>
      </div>
           
  </section>
  <!-- Whats New End -->
</template>

<script src="../js/HomePage.js">
</script>

