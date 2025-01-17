export class DnDCharacter {
  public strength: number;
  public dexterity: number;
  public constitution: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;
  public hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }
  
  private static getRandomInt = (min: number, max: number): number => 
    Math.floor(Math.random() * (max - min + 1)) + min;
    
  public static generateAbilityScore(): number {
    const dices: number[] = Array.from({ length: 4 }, () => DnDCharacter.getRandomInt(1, 6));
    return dices.reduce((acc, i) => acc + i) - Math.min(...dices);
  }

  public static getModifierFor = (abilityValue: number): number => 
    Math.floor((abilityValue - 10) / 2);
}