class Palette {
  constructor(color1, color2, color3, color4, color5) {
    this.color1 = color1 || '';
    this.color2 = color2 || '';
    this.color3 = color3 || '';
    this.color4 = color4 || '';
    this.color5 = color5 || '';
    this.id = Date.now();
  }
}
