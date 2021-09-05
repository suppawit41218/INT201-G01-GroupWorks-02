class player{
  constructor(name){
      this._name = name; //เก็บชื่อลงไป
      this._number = []; // ตั้งnumber เป็น array เตรียมเก็บ เลขที่สุ่มได้ทั้งหมด
      this._results = []; // ตั้งresults เป็น array เตรียมเก็บผลแพ้ชนะ
      this._count = 0; // ตั้งเริ่มต้นรอบ
  }
  get name(){ //เรียก name ออกมา
      return this._name;
  }
  get number(){ //เรียก numberทั้งหมด ออกมา
      return this._number;
  }
  get results(){ //เรียก resultsทั้งหมด ออกมา
      return this._results;
  }
  set number(pushnumber){ //เก็บค่า เลขที่สุ่มเข้าไปใน number
      this._number.push(pushnumber);
  }
  set results(pushresults){ //เก็บค่า ผลแพ้ชนะลงไปใน results
      this._results.push(pushresults);
  }
  compare(p2){ // จะนำแต้มของอีกฝ่ายมาเปรียบเทียบในเเต่ละรอบ
      if (this._number[this._count] > p2) { //หากเเต้มเรามากกว่า ในรอบนั้น จะทำการเก็บข้อความว่า "Win" ไปใน arrayของ results
          this._results.push("Win");
      }else if(this._number[this._count] == p2){//หากเเต้มเราเสมอ ในรอบนั้น จะทำการเก็บข้อความว่า "draw" ไปใน arrayของ results
          this._results.push("Draw");
      }else{ //หากเเต้มเราแพ้ ในรอบนั้น จะทำการเก็บข้อความว่า "lose" ไปใน arrayของ results
          this._results.push("Lose");
      }
      this._count++; // เพิ่มรอบเพื่อดูครั้งต่อไป
      return this._results; // รีเทิร์นค่า results(ผลเเพ้ชนะ) ออกมา
  }
  numwin(){
      let win = 0;
      for (let inde = 0; inde < this._results.length; inde++) {
         if (this._results[inde] == "Win") {
             win++;
         }
      }
      return win;
  }
}
class dice{
  constructor(round){
      this._round = round; //รับจำนวนรอบทั้งหมดที่เล่น
      this._counts = 0; //ตั้งรอบปัจจุบัน
  }
  get random(){ // จะทำการสุ่มเลข หากครบจำนวนรอบเเล้วจะแสดงเป็น 0
      if (this._round < this._counts) { // รอบของปัจจุบันนั้น มากกว่าจำนวนรอบที่ตั้้งไว้ จำรีเทิร์นเป็น 0
          return 0;
      }else{ //  รอบของปัจจุบันนั้น น้อยกว่าหรือเท่ากับ จำนวนรอบที่ตั้้งไว้ จะสุ่มตัวเลขและรีเทิร์นตัวเลขออกมา
          let value = Math.floor((Math.random() * 6)+1);
          return value;
      }
  }
}

let player1 = new player("Paul"); //สร้าง obj  ชื่อ Paul
let player2 = new player("Qqqq"); //สร้าง obj  ชื่อ Qqqq
let rounds = 4; // กำหนดจำนวนรอบทั้งหมดที่เล่น
let dice1 = new dice(rounds); //
let dice2 = new dice(rounds); //

for (let index = 0; index < rounds; index++) {
  console.log("----------round : " + (index + 1) + "----------"); 
  player1.number = dice1.random; //สุ่มเลขของ player1
  player2.number = dice1.random; //สุ่มเลขของ player2
  console.log(player1.name);
  console.log("ได้แต้ม : "+player1.number[index]);
  console.log(player2.name);
  console.log("ได้แต้ม : "+player2.number[index]);

  let a = player1.compare(player2.number[index]);
  console.log("player1 เปรียบเทียบ เเละเก็บค่า  " + a[index]);
  let b = player2.compare(player1.number[index]);
  console.log("player2 เปรียบเทียบ เเละเก็บค่า  " + b[index]);

}
console.log("\n");
if (player1.numwin() > player2.numwin()) {
  console.log(player1.name + " Win!!!" + "  ชนะทั้งหมด :" + player1.numwin());
}else if(player1.numwin() == player2.numwin()){
  console.log(" draw");
}else{
  console.log(player2.name + " Win!!!" + "  ชนะทั้งหมด :" + player2.numwin())
}

console.log("\nชื่อ : " + player1.name + "  แสดงแต้ม : " + player1.number + "  แสดงจำนวนแพ้ชนะ : " + player1.results );
console.log("\nชื่อ : " + player2.name + "  แสดงแต้ม : " + player2.number + "  แสดงจำนวนแพ้ชนะ : " + player2.results );