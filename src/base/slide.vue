<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" ref="menuWrapper">
       <div class="item">
        <img src="../image/banner2.png">
      </div>
      <div class="item">
        <img src="../image/banner1.png">
      </div> 
      <!-- <slot>
        
      </slot> -->
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props:{
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      }
  },
  mounted() {
    this.$nextTick(() => {
      this._setWidth()
      this._initSlide()
      if (this.autoPlay) {
        this._play()
      }      
    })
    window.addEventListener('resize', () => {
        if (!this.slide || !this.slide.enabled) {
          return
        }
        clearTimeout(this.resizeTimer)
        this.resizeTimer = setTimeout(() => {
          if (this.slide.isInTransition) {
            this._onScrollEnd()
          } else {
            if (this.autoPlay) {
              this._play()
            }
          }
          this.refresh()
        }, 60)
    })
  },
  methods:{
    refresh() {
        if (this.slide) {
          this._setWidth(true)
          this.slide.refresh()
        }
      },
    _initSlide() {
      this.slide=new BScroll(this.$refs.wrapper,{
          probeType: 3,
          scrollX: true,
          startX: 0,
          click: true,         
        momentum: false, // 惯性
          snap: {
           loop: this.loop,
           threshold: 0.3,
           speed:400
          }
      })

      this.slide.on('touchend', () => {
        if (this.autoPlay) {
          this._play()
        }
      })
      this.slide.on('scrollEnd', this._onScrollEnd)
      this.slide.on('beforeScrollStart', () => {
        if (this.autoPlay) {
          clearTimeout(this.timer)
        }
      })
    },
    _setWidth(isResize) {
      this.children = this.$refs.menuWrapper.children
      let width = 0
      let slideWidth = this.$refs.wrapper.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        this.children[i].style.width=slideWidth + 'px'
        width += slideWidth
      }

      if (this.loop && !isResize) {
          width += 2 * slideWidth
        }
        this.$refs.menuWrapper.style.width = width + 'px'
    },
     _onScrollEnd() {
       
        if (this.autoPlay) {
          this._play()
        }
      },
    _play() {
       clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.slide.next()
      }, this.interval)
    }
  }
}
</script>

<style scoped>
  .wrapper {
    width: 100%;
    overflow:hidden;
    position: relative;
    padding-top: 40%;
  }
  .content {
    width: 5760px;
    position: absolute;
    top: 0;
    height: 100%;
  }
  .content .item{
    float: left;
    height: 100%;
    pointer-events:auto;
  }
  .content .item img{
    width: 100%;
    height: 100%;
  }
</style>
