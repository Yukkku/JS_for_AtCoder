class SegmentTree{constructor(n,t,i){for(this.t=[n],this.f=t||Math.min,this.e=t?i:Infinity;n.length>1;){let t=[];for(let i=0;i<n.length-1;i+=2)t.push(this.f(n[i],n[i+1]));this.t.push(t);n=t}}set(n,t){this.t.forEach((i,r)=>{r==0?i[n]=t:i.length>n&&(i[n]=this.f(this.t[r-1][n*2],this.t[r-1][n*2+1])),n=Math.floor(n/2)})}get(n,t){n=Math.max(n,0);t=Math.min(t,this.t[0].length);let i=this.e;while(n<t){let r=1;while(n/2**r%1==0&&n+2**r<=t)r++;r--;i=this.f(i,this.t[r][n/2**r]);n+=2**r}return i}}
