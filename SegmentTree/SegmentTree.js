class SegmentTree{
  constructor(l,f,e){
    this.t=[l]
    this.f=f||Math.min
    this.e=f?e:Infinity
    while(l.length>1){
      let n=[]
      for(let i=0;i<l.length-1;i+=2){
        n.push(this.f(l[i],l[i+1]))
      }
      if(l.length%2) n.push(l[l.length-1])
      this.t.push(n)
      l=n
    }
  }
  set(i,v){
    this.t.forEach((x,j)=>{
      if(j==0) x[i]=v
      else x[i]=this.f(this.t[j-1][i*2],this.t[j-1][i*2+1])
      i=Math.floor(i/2)
    })
  }
  get(s,e){
    s=Math.max(s,0)
    e=Math.min(e,this.t.length)
    let a=this.e
    while(s<e){
      let g=1
      while((s/2**g)%1==0&&s+2**g<=e) g++
      g--
      a=this.f(a,this.t[g][s/2**g])
      s+=2**g
    }
    return a
  }
}
