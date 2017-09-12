function getFirstSelector (selector, criteriaFn){
  for (let i=0; i<selector.length; i++){
    if (criteriaFn(selector[i])){
      return selector [i]
    }
  }
}
