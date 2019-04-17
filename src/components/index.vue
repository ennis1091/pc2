<template>
  <div>
  	<div class="slide_heart" ref="sheart">
    	<slide></slide>
    	<div id="box" class="d-none d-xl-block" :class="classmeta?'fix_bottom':''">
			<div class="container">
			   <div class="box-list">
						 <div class="box-list-left">
								<img src="http://qn-web.rongyingplus.com/free_get.png" class="free_get">
								<span>需求整理服务</span>
						 </div>
						 <ul class="box-list-right">
								<li>APP开发</li>
								<li>微信公众号</li>
								<li>小程序开发</li>
								<li>系统开发</li>
								<li>软硬件解决方案</li>
						 </ul>
				 </div>
				 <div class="box-input">
					 <!-- <input name="" placeholder="请选择您需要的服务"> -->
					 <select>
							<option value="">请选择您需要的服务</option>
							<option value="APP开发">APP开发</option>
							<option value="微信公众号">微信公众号</option>
							<option value="小程序开发">小程序开发</option>
							<option value="系统开发">系统开发</option>
							<option value="软硬件解决方案">软硬件解决方案</option>
						</select>
				 </div>
				 <div class="box-input">
					<input name="" placeholder="请输入您的手机号">
				 </div>
				 <div class="box-button">
					 <button>提交</button>
				 </div>
			</div>
		</div>
    </div>
    <list></list>
    <div class="cr-section services-area section-padding-bottom-lg bg-white">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-7">
					<div class="section-title text-center">
						<h2>我们的专业您看的见</h2>
						<p>我们始终相信案例是公司最好的销售，量身定制的产品为客户创造最大价值</p>
					</div>
				</div>
			</div>
			<div class="row">

				<!-- Single Service -->
				<div class="col-lg-4 col-md-6 col-12" v-for="item in word">
					<div class="service text-center" @mouseenter="enterword" @mouseleave="leaveword">
						<h5>{{item.h}}</h5>
						<p>{{item.p}}</p>
					</div>
				</div>
				<!--// Single Service -->

			</div>
		</div>
	</div>
	<footer class="footer-area bg-white">
		<div class="container">
			<ul class="footer-inner">
				<li>浙江省xx市xx街道 <br> 大学科技园 B幢xx室</li>
				<li><a href="tel://0571-8888888">0571-8888888</a></li>
				<li><a href="#">mememexixi@126.com</a></li>
			</ul>
		</div>
	</footer>
  </div>
</template>

<script>
import slide from 'base/slide'
import list from 'base/list'
export default {
  data() {
  	return{
  		word:[
			{
  				h:"APP开发",
  				p:"专注于app的定制开发，提供一站式app咨询策划、开发服务。"
  			},
  			{
  				h:"微信公众号",
  				p:"针对企业需求提供专业微信公众平台开发服务，让微营销更简单。"
  			},
  			{
  				h:"小程序开发",
  				p:"针对企业需求提供专业微信公众平台开发服务，让微营销更简单。"
  			},
  			{
  				h:"系统开发",
  				p:"针对高端开发需求客户，提供高端型企业官网、企业ERP，OA，CRM系统,以及第三方接口对接。"
  			},
  			{
  				h:"软硬件解决方案",
  				p:"拥有优秀的硬件和软件开发团队，为客户提供一站式智能软硬件服务与解决方案。"
  			},
  			{
  				h:"人力外包",
  				p:"为提升企业核心竞争力，降低用人成本支出，提供不同类型的IT人才外包服务 实现资源共享、协同开发、人才整合，企业用人不养人。"
  			}
  		],
  		classmeta:false,
  		text:null,
  		textp:""
  	}  	
  },
  mounted(){
  		setTimeout(() => {
  			window.addEventListener('scroll', this.handleScroll)
  		},20)
		
	},
  methods:{
  	handleScroll () {
       let y =window.scrollY     
        	if (y >= this.$refs.sheart.clientHeight) {
        		this.classmeta=true
        	}
        	else{
        		this.classmeta=false
        	}    
     },
     enterword(e) {
     	let index = 0
     	this.text=e.currentTarget.lastElementChild
     	this.textp=this.text.innerHTML     
		clearTimeout(this.timer)
     	 this.timer=setInterval(() => {

     		this.text.innerText = this.textp.substring(0,index++)
	     	if (index>this.textp.length) {
	     		clearTimeout(this.timer)
	     	}
     	}, 80);  
     },
     leaveword(e) {
     	clearTimeout(this.timer)
     	this.text.innerText=this.textp
     	
     
     }
  },
  components:{
    slide,
    list
  }
}
</script>

<style scoped>
.slide_heart{
	position: relative;
}
#box {
    position: absolute;
    bottom: 0px;
    background: rgba(0,0,0,0.5);
    height: 88px;
    width: 100%;
    display: none;
}
#box .container{
	height:100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.box-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.box-input {
    margin-left: 20px;
}
.box-list-left {
    display: flex;
    align-items: center;
}
.box-list-right {
    margin-top: 6px;
    list-style: none;
    display: flex;
    font-size: 14px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255,255,255,1);
    line-height: 20px;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
}
img {
    max-width: 100%;
}
.box-list-left span {
    font-size: 16px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(251,168,56,1);
    line-height: 22px;
    margin-left: 5px;
}
.box-list-right li {
    margin-right: 12px;
}
.box-input input, .box-input select {
    background: #fff;
    font-size: 16px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #999999;
    width: 334px;
    height: 48px;
}
* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.box-button button {
    width: 134px;
    height: 48px;
    background: rgba(251,168,56,1);
    font-size: 16px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255,255,255,1);
    line-height: 48px;
    text-align: center;
    margin-left: 20px;
}
.fix_bottom {
    position: fixed !important;
    bottom: 0px;
    z-index: 1000;
    left: 0;
    right: 0;
    width: 100%;
    -webkit-animation: crSlideInUp 1s ease-out 0s 1 both;
    animation: crSlideInUp 1s ease-out 0s 1 both;
}
@keyframes crSlideInUp {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
.section-padding-bottom-lg {
    padding-bottom: 110px;
}
.section-title {
    margin-bottom: 30px;
}
.section-title h2 {
    margin-top: -8px;
    margin-bottom: 10px;
    font-weight: 600;
    letter-spacing: 2px;
}
.section-title h2 {
    margin-top: -8px;
    margin-bottom: 10px;
    font-weight: 600;
    letter-spacing: 2px;
}
.service {
    height: 210px;
    padding-top: 40px;
    padding-left: 31px;
    padding-right: 31px;
    background: #ffffff;
    box-shadow: 0 7px 15px rgba(85, 85, 85, 0.2);
    margin-top: 30px;
}
.service h5 {
    letter-spacing: 2;
    font-size: 18px;
    font-weight: 600;
    display: inline-block;
    padding: 0 10px;
    position: relative;
}
.service p {
    font-size: 16px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 22px;
}
.service h5::before {
    content: "";
    position: absolute;
    background: #333333;
    left: 0;
    top: 50%;
    height: 1px;
    width: 100%;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    -webkit-transition: all 0.4s ease-out 0s;
    -o-transition: all 0.4s ease-out 0s;
    transition: all 0.4s ease-out 0s;
}
.footer-inner {
    border-top: 1px solid #f1f1f1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin: 0;
    padding: 22px 0;
}
ul {
    list-style-type: square;
}
.footer-inner li:nth-of-type(even) {
  list-style: none;
  -webkit-box-flex: 0;
  width: 65%;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 500;
  margin: 9px 0;
}

.footer-inner li:nth-of-type(odd) {
  list-style: none;
  -webkit-box-flex: 0;
  width: 35%;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 500;
  margin: 9px 0;
}

.footer-inner li:nth-child(even) {
  text-align: right;
}

.footer-inner li a {
  color: #333333;
}

.footer-inner li a:hover {
  color: #000000;
}
.text-center:hover {
	transition:0.5s;
	transform:scale(1.05);
}
.text-center .hp{
	display: none;
}
</style>
