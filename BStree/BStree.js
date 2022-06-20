//AVL treeを実装
class BStree{
  constructor(c){
    this.h=0
    this.length=0
    this.compare=c||((a,b)=>a-b)
  }
  add(n){
    if(this.h){
      let f
      if(this.compare(n,this.r)>0){
        f=this.l.add(n)
      }else if(this.compare(n,this.r)<0){
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
      this.s=new BStree(this.compare)
      this.l=new BStree(this.compare)
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
      if(this.compare(n,this.r)==0){
        return this.s.length
      }else if(this.compare(n,this.r)<0){
        return this.s.indexOf(n)
      }else if(this.compare(n,this.r)>0){
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
      if(this.compare(n,this.r)==0){
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
          this.s=new BStree(this.compare)
        }
      }else{
        (this.compare(n,this.r)>0?this.l:this.s).delete(n) 
        this.set()
      }
    }else return false
  }
  set(){
    if(this.h){
      let f=this.l.h-this.s.h  //平衡係数
      if(Math.abs(f)==2){
        let nl=new BStree(this.compare),
            ns=new BStree(this.compare)
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
