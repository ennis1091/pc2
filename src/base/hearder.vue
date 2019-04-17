<template>
  <div ref="nav" :class="classmeta?'is-sticky':''">
    <div>
      <b-navbar toggleable="lg" type="light" variant="info" >
        <b-navbar-brand href="#">XX品牌</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" >
          <div class="nav_span" :class="active?'is-active':''" @click="navat">
            <span></span>
            <span></span>
            <span></span>
          </div>
          
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="#" v-for="(item,index) in lista" :key="index">{{item}}</b-nav-item>
          </b-navbar-nav>
            <!-- <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#" v-for="(item,index) in listb" :key="index">{{item}}</b-dropdown-item>
            </b-nav-item-dropdown> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return{
       classmeta:null,
       active:false
    }
  },
  props: {
    lista : {
      type:Array,
      default:[]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods:{
    handleScroll () {
       let y =window.scrollY
        this.$nextTick(() =>{
          if (y >= this.$refs.nav.clientHeight) {
            this.classmeta=true
          }
          else{
            this.classmeta=false
          }
        })
     },
    navat() {
      this.active=!this.active
    }
  },
}
</script>

<style scoped>
.navbar-light .navbar-brand{
  color:#fff;
}
.navbar-light .navbar-nav .nav-link {
  color:#fff;
}
.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
  color:#fff;
}
.navbar-light .navbar-toggler {
    border: none !important;
    outline: none;
    padding: 0 !important;
}
.nav_span {
  width: 28px;
  height: 28px;
  padding:5px 0;
  transition: all 0.3s ease;
  transform-origin: center center;
}
.nav_span span {
    display: block;
    background: #fff;
    height: 2px;
    margin-top: 6px;
    width: 100%;
  transition: all 0.3s ease;
  transform-origin: center center;
}
.nav_span span:first-child {
    margin-top: 0;
}
.nav_span.is-active {
  transform: rotate(225deg);
}

.nav_span.is-active span:first-child {
  transform: rotate(90deg) translateX(7px);
}

.nav_span.is-active span:last-child {
  width: 100%;
  transform: rotate(90deg) translateX(-7px);
}
.is-sticky {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 400;
    background: #ffffff;
    -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    -webkit-animation: crSlideInDown 0.5s ease-out 0s 1 both;
    animation: crSlideInDown 0.5s ease-out 0s 1 both;
}
@keyframes crSlideInDown {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>
