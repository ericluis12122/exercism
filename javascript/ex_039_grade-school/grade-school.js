export class GradeSchool {
  
  constructor() {
    this.schoolRoster = [];
  }
  
  roster() {
    const output = {};
    this.schoolRoster.forEach((v, i) => {
      if(v.length > 0)
        output[i + 1] = v.filter(e => true);
    });
    return output;
  }

  add(name, grade) {
    if(this.schoolRoster.flat(1).includes(name))
      this.remove(name);
    
    let dif = grade - this.schoolRoster.length;
    if(grade > this.schoolRoster.length)
      for (let i = 0; i < dif; i++)
        this.schoolRoster.push([]);
    
    if(!this.schoolRoster[grade - 1] || this.schoolRoster[grade - 1].at(-1) < name) {
      this.schoolRoster[grade - 1].push(name);
      return;
    }
    
    let left = 0;
    let right = this.schoolRoster[grade - 1].length - 1;
    let mid = 0;

    while(left <= right) {
        mid = Math.floor((left + right) / 2);

        if(this.schoolRoster[grade - 1][mid] == name)
            return;
        
        if(this.schoolRoster[grade - 1][mid] < name)
            left = mid + 1;
        else
            right = mid - 1;
    }
    this.schoolRoster[grade - 1].splice(mid,0,name);
  }

  grade(n) {
    let dif = n - this.schoolRoster.length;
    if(n > this.schoolRoster.length)
      for (let i = 0; i < dif; i++)
        this.schoolRoster.push([]);
    return this.schoolRoster[n - 1].filter(e => true);
  }
  
  remove(name) {
    this.schoolRoster.forEach(arr => {
      let index = arr.indexOf(name);
      if(index != -1)
        arr.splice(index,1);
    });
  }
}
