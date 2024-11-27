<template>
  <div class="hero_area">    
    <section id="title" class="slider_section gradient-background">
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-6 ">
                  <div class="detail-box">
                    <div class="display-5 fw-bold d-flex lh-1 mb-3 justify-content-center">
                      <img src="images/khonsaret_profile_website.png" class="profile d-block mx-lg-auto img-fluid fs-6" alt="Bootstrap Themes" width="150" height="150" loading="lazy">
                    </div>
                    <div class="display-5 lh-1 mb-3 text-center">
                      <h3 class="display-10 fw-bold lh-1 mb-3 text-white text-center">Web Development Trainer</h3>
                      <p>Our trainers is providing training courses in Web Development both in person and online. People who want a creative career path may enjoy web development.</p>
                      <div>
                        <button type="button" class="btn btn-primary btn-lg px-4 me-md m-3">
                          Free Register
                        </button> 
                        <button type="button" class="btn btn-outline-secondary btn-lg px-4">
                          Go Your Course
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="images/banner.png" alt="">  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
  export default{
    components:{
      Header,
    }
  }
</script>