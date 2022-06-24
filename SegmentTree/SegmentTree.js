//Segment Tree
class SegTree{
  constructor(l,f,e){
    this.t=[l]
    this.f=f||Math.min
    this.e=f?e:Infinity
    this.l=l.length
    while(l.length>1){
      let n=[]
      for(let i=0;i<l.length-1;i+=2){
        n.push(this.f(l[i],l[i+1]))
      }
      this.t.push(n)
      l=n
    }
    this.h=this.t.length
  }
  update(i,v){
    this.t[0][i]=v
    for(let j=1;j<this.h;j++){
      i=Math.floor(i/2)
      if(i>=this.t[j].length) break
      let p=this.f(this.t[j-1][i*2],this.t[j-1][i*2+1])
      if(this.t[j][i]==p) break
      else this.t[j][i]=p
    }
  }
  get(s,e){
    s=Math.max(s,0)
    e=Math.min(e,this.l)
    let a=this.e
    let g=0
    while(s+2**g<e){
      while((s/2**g)%1==0&&s+2**g<=e) g++
      g--
      a=this.f(a,this.t[g][s/2**g])
      s+=2**g
    }
    while(s<e){
      while(s+2**g>e) g--
      a=this.f(a,this.t[g][s/2**g])
      s+=2**g
    }
    return a
  }
}
