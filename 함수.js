function sayhello() {
    console.log("Hello");
    console.log("안녕");
    console.log("hi");
}
sayhello();

function aGroupOfGames() {
    for(let i = 1 ; i <= 10 ; i++){
        for(let j = 1 ; j <= i ; ++j ){
            document.write("* ");
        }
        document.write("<br>");
    }
}
aGroupOfGames();

document.write("<br><br><br>");

function aGroupOfGames2() {
    for(let i = 10 ; i >= 1 ; i--){
        for(let j = 1 ; j <= i ; j++){
            document.write("* ");
        }
        document.write("<br>");
    }
}

aGroupOfGames2();

document.write("<br><br><br>");

function aGroupOfGames3() {
    for(let i = 1 ; i <= 10 ;i++){
            for(let j = 1 ; j <= i ; j++){
                document.write("&nbsp;&nbsp;");
            }
            for(j = 10 ; j >= i; j--){
                document.write("* ");
            }
        document.write("<br>");
    }
}

aGroupOfGames3();

function aGroupOfGames4() {
    for(let i = 1 ; i <=10 ; i++){
        for(let j = 10 ; j >= 1 ; j--){
            document.write("&nbsp;&nbsp;");
        }
        for(j = 1 ; j >= i ; j++ ){
            document.write("* ");
        }
        document.write("<br>");
    }
}

aGroupOfGames4();