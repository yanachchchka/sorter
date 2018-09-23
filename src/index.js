class Sorter {
  constructor() {
    // make list
    this.myList = [];
    this.compareFunction = (left, right) => left - right;
  }

  add(element) {
    // add to my list
    this.myList.push(element);
  }

  at(index) {
    // return value at chosen index
    return this.myList[index];
  }

  get length() {
    // return list length
    return this.myList.length;
  }

  toArray() {
    // convert my list to Array
    return this.myList;
  }

  sort(indices) {
    // sort objects only at provided indexes
    var tmp = [];
    for (var i=0;i<indices.length;i++){
      tmp.push(this.myList[indices[i]]);
    }
    tmp.sort(this.compareFunction);
    indices.sort();
    for (var i=0;i<indices.length;i++){
      this.myList[indices[i]]=tmp[i];
    }
  }

  setComparator(compareFunction) {
    // set comporator implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;