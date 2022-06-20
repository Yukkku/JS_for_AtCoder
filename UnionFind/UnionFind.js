class UnionFind{
  constructor(){
    this.g={}
  }
  same(a,b){
    if(this.g[a]){
      let ar=[]
      while(this.g[a][0]!=a){
        ar.push(a)
        a=this.g[a][0]
      }
      ar.forEach(x=>this.g[x][0]=a)
    }
    if(this.g[b]){
      let br=[]
      while(this.g[b][0]!=b){
        br.push(b)
        b=this.g[b][0]
      }
      br.forEach(x=>this.g[x][0]=b)
    }
    return a===b
  }
  join(a,b){
    if(this.g[a]){
      let ar=[]
      while(this.g[a][0]!=a){
        ar.push(a)
        a=this.g[a][0]
      }
      ar.forEach(x=>this.g[x][0]=a)
    }else this.g[a]=[a,0]
    if(this.g[b]){
      let br=[]
      while(this.g[b][0]!=b){
        br.push(b)
        b=this.g[b][0]
      }
      br.forEach(x=>this.g[x][0]=b)
    }else this.g[b]=[b,0]
    if(this.g[a][1]>this.g[b][1]){
      this.g[b][0]=a
      this.g[a][1]=Math.max(this.g[a][1],this.g[b][1]+1)
    }else{
      this.g[a][0]=b
      this.g[b][1]=Math.max(this.g[b][1],this.g[a][1]+1)
    }
  }
}
