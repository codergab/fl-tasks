class HTMLElemNode {

  element = null

  constructor(element) {
    this.element = element
  }

  tagName() {
    return document.getElementsByTagName(this.element);
  }

  text() {
    return document.querySelector(this.element).innerText;
  }

  children() {
    return document.querySelector(this.element).children
  }

  attributeMap() {
    return document.querySelector(this.element).attributes
  }

  parent() {
    const elem = document.querySelector(this.element)
    if(!elem) return null

    return elem.parentNode
  }
}

const elem = new HTMLElemNode('p')
elem.parent()
elem.tagName()
elem.text()
elem.children()
elem.attributeMap()