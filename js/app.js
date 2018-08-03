var pointA = 1;
var pointB = 1;
var totalVotes = pointA + pointB;

function addleft(){
    pointA += 1;
    totalVotes += 1;
    updateVotes();
    console.log(pointA + ' '+ pointB);
}
function addright(){
    pointB += 1;
    totalVotes += 1;
    updateVotes();
    console.log(pointA + ' '+ pointB);
}

function updateVotes(){
    document.getElementById("voting-box").style.gridTemplateColumns= getSize();
}

function getSize(){
    var percentA = (pointA / totalVotes) * 100;
    var percentB = (pointB / totalVotes) * 100;
    var size = percentA + "% " + percentB + "%";
    console.log(size);
    return size;
}

function reset() {
    document.getElementById("voting-box").style.gridTemplateColumns= "50% 50%";
}