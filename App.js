const setofwords=["Don’t count your chickens before they hatch.",
"What you do is more important than what you say.",
"When the going gets tough, the tough get going.",
"Oppurtunity did not knock until I built a door.",];
const msg=document.getElementById('msg');
const btn=document.getElementById('btn');
const typewords=document.getElementById('mywords')
let startTime, endTime;
const playgame=()=>{
    let randomnumber=Math.floor(Math.random()*setofwords.length);
    msg.innerText=setofwords[randomnumber];
    let date=new Date();
    startTime=date.getTime();
    btn.innerText="Done";
}
const wordCounter=(str)=>{
    let wordcount=str.split(" ").length;
    return wordcount;
}
const comparewords = (str1,str2)=>{
    let words1=str1.split(" ");
    let words2=str2.split(" ");
    let count=0;
    words1.forEach(function(item,index){
        if(item==words2[index])
        {
        count++;
        }
    })
        let errorcount=(words1.length-count);
        return(count+" correct out of "+ words1.length+" words and the total number of errors are "+ errorcount+".");
}
const endplay=()=>{
    let date=new Date();
    endTime=date.getTime();
    let totalTime=((endTime-startTime)/1000);
    let totalstring=typewords.value;
    let words=wordCounter(totalstring);
    let speed=Math.round((words/totalTime)*60);
    let finalmessage="You typed total "+ speed +" words per minute. ";
    finalmessage+=comparewords(msg.innerText,totalstring);
    msg.innerText=finalmessage;
}
btn.addEventListener('click', function()
{
    if(this.innerText=='Start')
    {
    typewords.disabled=false;
    playgame();
    }
    else if(this.innerText=="Done")
    {
        typewords.disabled=true;
        btn.innerText='Start';
      endplay();
    }
})