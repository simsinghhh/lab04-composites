interface IDomElement {
  print();
}

class TextNode implements IDomElement {
  private text: string;
  constructur(text:string) {
    this.text = text;
  }

  print() {
    console.log(this.text);
  }
}

class DomElement implements IDomElement {
  elementName: string;
  textContent: string;
  elements: IDomElementp[];
}



