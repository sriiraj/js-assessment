$(document).ready(function() {
    console.log('Script Loaded');
     
    if(location.search!==null && location.search!=='')
    {
        let searchstring=location.search;
        searchstring=searchstring.slice(1, );
        const paramarr=searchstring.split('&');
        console.log(paramarr);

        const scoreobj=paramarr.reduce((acc,item)=>{
            acc[`${item.split('=')[0]}`]=`${item.split('=')[1]}`;
            return acc;
        },{})

        let quizdata=localStorage.getItem('quiz-data');
        quizdata=JSON.parse(quizdata);
        const finalscore=quizdata.reduce((acc,item)=>{
            console.log(item);
            if(item.answer===parseInt(scoreobj[`q${item.id}`])){
                acc+=1;
            }
            return acc;
        },0)
        console.log(finalscore);
        $('#result').html(finalscore+'/'+quizdata.length);
        $('#modal-wrapper').css('display','block');
    
    }
    $('#modal-wrapper').click(()=>{
        $('#modal-wrapper').css('display','none');
    })
    createquizoption =(optiontext,quesId,pos) =>{
            const mainDiv=document.createElement('div');
            mainDiv.className='option-wrapper';
            const labelelem=document.createElement('label');
            const radiobutton=document.createElement('input');
            radiobutton.type='radio';
            radiobutton.required=true;
            radiobutton.name=`q${quesId}`;
            radiobutton.value=pos+1;
            const label=document.createElement('p');
            label.innerHTML=optiontext;
            labelelem.append(radiobutton);
            labelelem.append(label);
            mainDiv.append(labelelem);
            return mainDiv;
    }

    createquiz =(obj) =>{
        var mainsection=document.createElement('div');
        mainsection.className='quiz-item';
        var question=document.createElement('h3');
        question.innerHTML=`Q${obj.id}. ${obj.question}`;
        mainsection.append(question);
        obj.options.map((item,pos) =>{
            mainsection.append(createquizoption(item,obj.id,pos));
        })
        return mainsection;
    }
    const btnsection=$('#submit-section');
    $('.quiz').html(' ');
    $.get('http://5d76bf96515d1a0014085cf9.mockapi.io/quiz',(response)=>{
           localStorage.setItem('quiz-data',JSON.stringify(response));
            response.map((item) => {
               //console.log(createquiz(item));
               $('.quiz').append(createquiz(item));
               
           })     
           $('.quiz').append(btnsection);
    })
});