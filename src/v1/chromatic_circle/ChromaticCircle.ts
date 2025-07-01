export class ChromaticCircle {
  private readonly filter: string;

  constructor(filter: string) {
    this.filter = filter;
  }

  public mixColors(color: string): string {
    if (this.filter === color) {
      return color;
    }
    if (this.filter === 'blue') {
      if (color == this.filter) {
        return color;
      }
      if (color === 'yellow') {
        return 'green';
      }
      if (color === 'red') {
        return 'violet';
      }
    }
    if (this.filter === 'red') {
      if (color === 'yellow') {
        return 'orange';
      }
      if (color === 'blue') {
        return 'violet';
      }
    }
    if (this.filter === 'yellow') {
      if (color === 'red') {
        return 'orange';
      }
      if (color === 'blue') {
        return 'green';
      }
    }

    throw new Error(`invalid color: ${color}`);
  }
}
