//AVL treeを実装

class BStree{
  constructor(){
    this.h=0
    this.length=0
  }
  add(n){
    if(this.h){
      let f
      if(n>this.r){
        f=this.l.add(n)
      }else if(n<this.r){
        f=this.s.add(n)
      }else{
       return false
      }
      this.set()
      return f
    }else{
      this.r=n
      this.h=1
      this.length=1
      this.s=new BStree()
      this.l=new BStree()
      return true
    }
  }
  getnth(n){
    if(this.h){
      let f=this.s.length
      if(n==f){
        return this.r
      }else{
        return n>f?this.l.getnth(n-f-1):this.s.getnth(n)
      }
    }
  }
  indexOf(n){
    if(this.h){
      if(n==this.r){
        return this.s.length
      }else if(n<this.r){
        return this.s.indexOf(n)
      }else if(n>this.r){
        return this.s.length+1+this.l.indexOf(n)
      }else{
        return -1
      }
    }else{
      return -1
    }
  }
  delete(n){
    if(this.h){
      if(this.r==n){
        if(this.h==1){
          delete this.r
          delete this.l
          delete this.s
          this.h=0
          this.length=0
          return true
        }else if(this.l.h){
          let f=this.l.getnth(0)
          this.l.delete(f)
          this.r=f
          this.set()
          return true
        }else{
          this.r=this.s.r
          this.h=1
          this.length=1
          this.s=new BStree()
        }
      }else{
        (n>this.r?this.l:this.s).delete(n) 
        this.set()
      }
    }else return false
  }
  set(){
    if(this.h){
      let f=this.l.h-this.s.h  //平衡係数
      if(Math.abs(f)==2){
        let nl=new BStree(),
            ns=new BStree()
        if(f==2){
          ns.s=this.s
          ns.r=this.r
          if(this.l.s.h>this.l.l.h){
            ns.l=this.l.s.s
            nl.l=this.l.l
            nl.r=this.l.r
            nl.s=this.l.s.l
            this.r=this.l.s.r
          }else{
            ns.l=this.l.s
            nl=this.l.l
            this.r=this.l.r
          }
        }else{
          nl.l=this.l
          nl.r=this.r
          if(this.s.l.h>this.s.s.h){
            nl.s=this.s.l.l
            ns.s=this.s.s
            ns.r=this.s.r
            ns.l=this.s.l.s
            this.r=this.s.l.r
          }else{
            nl.s=this.s.l
            ns=this.s.s
            this.r=this.s.r
          }
        }
        ns.h=Math.max(ns.l.h,ns.s.h)+1
        ns.length=ns.l.length+ns.s.length+1
        nl.h=Math.max(nl.l.h,nl.s.h)+1
        nl.length=nl.l.length+nl.s.length+1
        this.s=ns
        this.l=nl
      }
    }
    this.h=Math.max(this.l.h,this.s.h)+1
    this.length=this.l.length+this.s.length+1
  }
}
