<template>
  <div>
        
       <div class="container">
      
      <div class="button-group text-center">  
            <button v-for="(val, key) in option.getFilterData" class="button" :class="[key===filterOption? 'is-checked' : '']"  @click="$refs.isotope.filter(key)">{{key}}
            </button>
        </div>
<isotope ref="isotope" id="root_isotope1" :list="list" v-images-loaded:on.progress="layout" :item-selector="'element-item'" :options='option' @filter="filterOption=arguments[0]" >
 			<div class="col-lg-4 col-md-6 col-12" v-for="element, index in list" :class='[element.category]' :key="index">
 				<div class="pic-wrapper" @mouseenter="enter(index)" @mouseleave="leave()">
 					<div class="pic-image">
	                <img v-lazy="element.name" :class="currentIndex==index?'animat':''" >
	            	</div>
	            	<div class="pic-out" :class="currentIndex==index?'animat-t':''">
	            		<a :href="element.name" class="portfolio-zoom-button"></a>
	            		<h6>只是图片</h6>
	            	</div> 					
 				</div>
 				
 			</div>
            
          
        </isotope>
  
       </div>
        

        
    </div>  
</template>

<script>
import slide from 'base/slide'
import isotope from 'vueisotope'
import imagesLoaded from 'vue-images-loaded'
export default {
	 directives: {
          imagesLoaded
      },
	data(){
		return{
		currentIndex:-1,
		list:[{ 
				name: require("img/pic1.png"), 
				category: "app",
			},
			{ 
				name: require("img/pic2.png"), 
				category: "app",
			}, 
			{ 
				name: require("img/pic3.png"), 
				category: "wx"
			}, 
			{ 
				name: require("img/pic4.png"), 
				category: "wx"
			},
			{ 
				name: require("img/pic5.png"), 
				category: "wx"
			},
			{ 
				name: require("img/pic6.png"), 
				category: "app",
			},
			{ 
				name: require("img/pic7.png"), 
				category: "web"
			},
			{ 
				name: require("img/pic8.png"), 
				category: "web"
			},
			{ 
				name: require("img/pic9.png"), 				
				category: "web"
			}],
		selected: null,
		filterOption: "全部",
		option:{
			filter: '全部',
			getFilterData: {
			    "全部": function(){
			    	return true;
			    },
			    "APP案例": function(el){
			    	return el.category==="app";
			    },
			    "小程序案例": function(el){
			    	return el.category==="wx";
			    },				
			    "web案例": function(el){
					return el.category==="web";
				}
			},
			cellsByRow: {
			    columnWidth: 220,
			    rowHeight: 220
			},
			masonryHorizontal: {
			    rowHeight: 110
			},
			cellsByColumn: {
				columnWidth: 220,
			    rowHeight: 220
			},
			packery: {
  				gutter: 10
			}
		}
		}
		
	},
	methods:{
		layout () {
            this.$refs.isotope.layout('masonry');
        },
        enter(index) {
        	this.currentIndex = index
        },
        leave() {
        	this.currentIndex = -1
        }
	},
  components:{
    slide,
    isotope
  }
}
</script>

<style scoped>
	.pic-wrapper{
		margin-top: 10%;
		position: relative;
		overflow: hidden;
	}
	.pic-wrapper img{
		width: 100%;
	}
	.pic-out {
		position: absolute;
		left: 0;
		top: 100%;
		width: 100%;
		height: 100%;
		padding: 30px;
		background: #f1f1f1;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		transition: all 0.4s ease-out 0s;
	}

	.animat {
		transition: all 0.5s ease-out;
		transform: scale(1.3);
	}
	.animat-t{
		transition: all 0.5s ease-out;
		top:0;
	}
	.pic-out a.portfolio-zoom-button {
    height: 80px;
    width: 80px;
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -40px;
    margin-top: -40px;
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    -webkit-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
}
	.pic-out a.portfolio-zoom-button:hover{
		-webkit-transform: scale(1);
	    -ms-transform: scale(1);
	    transform: scale(1);
	}
	.pic-out a.portfolio-zoom-button::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    width: 1px;
    height: 100%;
    background: #555555;
}
.pic-out a.portfolio-zoom-button::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    height: 1px;
    width: 100%;
    background: #555555;
}
.button-group button:first-child {
    margin-left: 0;
}

.button-group button {
    display: inline-block;
    font-size: 16px;
    letter-spacing: 1px;
    color: #333333;
    font-weight: 500;
    line-height: 1;
    border: 0;
    outline: 0;
    padding: 10px 10px;
    margin: 0 20px;
    margin-bottom: 10px;
    position: relative;
    cursor: pointer;
    background: none;
}
.container{
	padding: 3% 0 5%;
}
.button-group button::before {
    content: "";
    position: absolute;
    left: 0;
    top: 100%;
    height: 1px;
    width: 100%;
    background: #333333;
    transform: scaleX(0);
    transform-origin: center right;
    transition: transform 0.4s ease-in-out;
}
.button-group button:hover::before, .button-group button.is-checked::before {
    transform: scale(1);
    transform-origin: center left;
}
.pic-out h6 {
    margin-bottom: 0;
    letter-spacing: 2px;
    font-weight: 400;
    font-family: "Dosis", sans-serif;
    line-height: 1.3;
    color: #333333;
}
</style>
