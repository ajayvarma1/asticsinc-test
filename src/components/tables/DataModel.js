import { array } from "prop-types";

const sortOption = {};
class fakeData {
  constructor(data,size = 500) {
    this.size = size || 2000;
    this.TableData = data;
    this.datas = [];
    this.sortKey = null;
    this.sortDir = null;
  }
  dataModel(index) {
    return this.TableData[index];
  }
  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }
    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }
    return this.datas[index];
  }
  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }
    return this.datas.slice();
  }

  getSize() {
    return this.size;
  }
  getSortAsc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'ASC';
    return this.datas.sort(this.sort);
  }
  getSortDesc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'DESC';
    return this.datas.sort(this.sort);
  }
  sort(optionA, optionB) {
    const valueA = optionA[sortOption.sortKey].toUpperCase();
    const valueB = optionB[sortOption.sortKey].toUpperCase();
    return valueA.localeCompare(valueB)

    // let sortVal = 0;
    // if (valueA > valueB) {
    //   sortVal = 1;
    // }
    // if (valueA < valueB) {
    //   sortVal = -1;
    // }
    // if (sortVal !== 0 && sortOption.sortDir === 'DESC') {
    //   return sortVal * (-1);
    // }
    // return sortVal;
  }
  filters(allFilters){
    let keys = Object.keys(allFilters);
    let values = Object.values(allFilters);
    if(keys.length != undefined ){
      if(keys.length >= 1){
        let masterData = [];
        keys.map((column , key) => {
            if(values[key].length > 0){
              values[key].map(filterValue => {
                let data = [];
                if(key == 0){
                  data = this.datas.filter(x => {
                    return x[column] == filterValue 
                  })
                }else{
                  data = masterData.filter(x => {
                    return x[column] == filterValue 
                  })
                }
                masterData = masterData.concat(data);
              })
            }else if(key == 0){
             //
              masterData = this.datas;          
            }
          })
          return masterData;
      }else{
        return this.datas;
      }
    }
  }
}
export default fakeData;
