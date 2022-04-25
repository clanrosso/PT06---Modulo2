var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  if(matchFunc(startEl)) resultSet.push(startEl);  

  for(let i = 0; i < startEl.children.length; i++){
    let x = traverseDomAndCollectElements(matchFunc, startEl.children[i]); 
    resultSet = [...resultSet, ...x];
  }
  return resultSet;

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === "#") return "id";
  else if(selector[0] === ".") return "class";
  else  if (selector.split(".").length > 1) return "tag.class"
  else { return "tag"; }
}

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {       //   "#price"
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = (elemento) => {
     return "#" + elemento.id === selector;
    }
  } else if (selectorType === "class") {
    matchFunction = (elemento) => {
      let elementoArray = elemento.classList;
      for(let i = 0; i < elementoArray.length; i++){ 
      if("." + elementoArray[i] === selector) return true
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = (elemento) => {
      let [tagBuscado, classBuscada] = selector.split(".");  // [tag][class]
      let elementoArray = elemento.className.split(" ");
      return matchFunctionMaker(tagBuscado)(elemento) &&
             matchFunctionMaker("." + classBuscada)(elemento)
    }
    
  } else if (selectorType === "tag") {
    matchFunction = (elemento) => {
      return elemento.tagName.toLowerCase() === selector;
  }
}
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

