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
    
  }
  set(){
    if(this.h){
      let f=this.l.h-this.s.h  //平衡係数
      if(Math.abs(f)==2){
        let nl=new BStree(),
            ns=new BStree()
        if(f==2){
          ns.s=this.s
          if(this.l.s.h>this.l.l.h){
          }else{
            
          }
        }else{
          nl.l=this.l
        }
        ns.h=Math.max(ns.l.h,ns.s.h)+1
        ns.length=ns.l.length+ns.s.length+1
        nl.h=Math.max(nl.l.h,nl.s.h)+1
        nl.length=nl.l.length+nl.s.length+1
        this.s=ns
        this.l=nl
      }
      this.h=Math.max(this.l.h,this.s.h)+1
      this.length=this.l.length+this.s.length+1
    }
  }
}

let foo=new BStree()
for(let i=0;i<100;i++){
  foo.add(Math.random())
}