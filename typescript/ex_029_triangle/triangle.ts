export class Triangle {
  readonly isEquilateral: boolean = false;
  readonly isIsosceles:   boolean = false;
  readonly isScalene:     boolean = false;
  
  constructor(...sides: number[]) {
    const [a, b, c] = sides.sort();
    if(a > 0 && a + b >= c){
      const uniqueSides = new Set(sides).size;
      this.isEquilateral = uniqueSides === 1;
      this.isIsosceles   = uniqueSides <=  2;
      this.isScalene     = uniqueSides === 3;
    }
  }
}