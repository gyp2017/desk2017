import _ from 'underscore'

let newsjelly = ["뉴", "스", "젤", "리", "test", "테스트"]

let fn = (arr) => {
  for(let el of arr) {
    console.log(el)
  }
}

fn(newsjelly)