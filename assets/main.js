const input=document.getElementById('name');
const submit= () =>
{
    if(input.value ==="")
    {
        alert("Please enter your name");
        
    }
    else
    {
        document.getElementById('start').innerHTML = 'Welcome to Heads or Tails Game, ' + input.value;
        document.getElementById('player1').innerHTML = 'Player 1: ' + input.value;
        document.getElementById('player2').innerHTML = 'Player 2: Computer';
        document.getElementById('intro').innerHTML ='Pick a choice: <br><br>';
        document.getElementById('Heads').style.visibility='visible';
        document.getElementById('Tails').style.visibility='visible';
        document.getElementById('getStarted').disabled = true;
        
      /*   //Creating Heads button
        const Heads= document.createElement('button');
        Heads.innerHTML='Heads <br><br>';
        //Creating ID attribute for head button
        const hID=document.createAttribute('id');
        hID.value="Heads";
        document.getElementsByTagName("button")[0].setAttribute('id',hID);
        document.getElementById('intro').appendChild(Heads);

         //Creating Tails button
        const Tails= document.createElement('button');
        Tails.innerHTML='<br><br>Tails';
        //Creating ID attribute for head button
        const tID=document.createAttribute('id');
        tID.value="Tails";
        document.getElementsByTagName("button")[1].setAttribute('id',tID);
        document.getElementById('Heads').appendChild(Tails); */
    }
}

const heads= ()=>
{
    document.getElementById('playerChoice').innerHTML=input.value+ ': Heads';//setting player's choice
    document.getElementById('computerChoice').innerHTML='Computer: Tails';//assigning computer choice
    document.getElementById('playerChoice').style.visibility='visible';//displaying player's choice
    document.getElementById('computerChoice').style.visibility='visible';//displaying computer choice
    document.getElementById('Heads').disabled=true;//disabling head button
    document.getElementById('Tails').disabled=true;//disabling tail button
    document.getElementById('flip').style.visibility='visible';//displaying flip button
}
const tails= ()=>
{
    document.getElementById('playerChoice').innerHTML=input.value+ ' : Tails';//player choice
    document.getElementById('computerChoice').innerHTML='Computer: Heads';//computer choice
    document.getElementById('playerChoice').style.visibility='visible';//displaying player's choice
    document.getElementById('computerChoice').style.visibility='visible';//displaying  computer choice
    document.getElementById('Heads').disabled=true;
    document.getElementById('Tails').disabled=true;//disabling tail button
    document.getElementById('flip').style.visibility='visible';//displaying flip button
}