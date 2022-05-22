class Heap{
  constructor(){
    this.length=0
  }
  add(n){
    if(this.length){
      if(this.min>n){
        [n,this.min]=[this.min,n]
      }
      if(this.r.length>this.l.length){
        this.l.add(n)
      }else{
        this.r.add(n)
      }
      this.length++
    }else{
      this.length=1
      this.min=n
      this.r=new Heap()
      this.l=new Heap()
    }
  }
  popmin(){
    if(this.length){
      let m=this.min
      if(!this.l.length || (this.r.length && this.r.min<this.l.min)){
        this.min=this.r.popmin()
      }else{
        this.min=this.l.popmin()
      }
      this.length--
      if(!this.length){
        delete this.min
        delete this.l
        delete this.r
      }
      return m
    }else{
      return
    }
  }
}
