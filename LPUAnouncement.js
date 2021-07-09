
let samples = document.getElementById('samples');
samples.addEventListener('click',openSampleFun);

function openSampleFun(){
    let firstContainer = document.getElementById('firstContainer');
    firstContainer.classList.add('firstContainer');

    let sampleOptions = document.getElementById('sampleOptions');
    sampleOptions.classList.remove('invisible');
    sampleOptions.classList.add('ani');
    sampleOptions.classList.add('d-flex');

    let hidden = document.getElementById('hidden');
    hidden.classList.remove('invisible');

}


let hidden = document.getElementById('hidden');
hidden.addEventListener('click',kickOptionsFun);

function kickOptionsFun(){
    let firstContainer = document.getElementById('firstContainer');
    firstContainer.classList.replace('firstContainer','firstContainerReverse');
    
    let sampleOptions = document.getElementById('sampleOptions');
    sampleOptions.classList.replace('ani','aniReverse');
    setTimeout(function(){
        firstContainer.classList.remove('firstContainerReverse')
        sampleOptions.classList.add('invisible');
        sampleOptions.classList.remove('aniReverse');
         sampleOptions.classList.remove('d-flex');
    },1000);
    
    let hidden = document.getElementById('hidden');
    hidden.classList.add('invisible');

}


let tricks = document.getElementById('tricks');
let trickVar = 0;
tricks.addEventListener('click',function(){
    let trickPic = document.getElementById('trickPic');

    if(trickVar == 0){
    trickPic.classList.remove('invisible');
    tricks.style.boxShadow = '0 0 8px white';
    trickVar = 1;
    }
    else if(trickVar == 1){
        trickPic.classList.add('invisible');
        tricks.style.boxShadow = 'none';
        trickVar = 0;
    }
});


let clear = document.getElementById('clear');
clear.addEventListener('click',clearFun);

function clearFun(){
    let form = document.getElementById('form');
    form.reset();
}


let form = document.getElementById('form');
form.addEventListener('submit',createAnouncement);

function createAnouncement(x){

    let formHeading = document.getElementById('formHeading').value;
    let formDateTime = document.getElementById('formDateTime').value;
    let formContent = document.getElementById('formContent').value;
    let formBottom = document.getElementById('formBottom').value;

    let formAttachment1= document.getElementById('formAttachment1').value;
    let formAttachment2= document.getElementById('formAttachment2').value;
    let formAttachment3= document.getElementById('formAttachment3').value;

if(formHeading.length > 0 && formDateTime.length > 0 && formContent.length > 0 && formBottom.length > 0){
    let body = document.getElementById('body');
    body.classList.remove('bg-dark');
    body.classList.remove('px-2');

    let firstContainer = document.getElementById('firstContainer');
    firstContainer.classList.add('invisible');

    let thirdContainer = document.getElementById('thirdContainer');
    thirdContainer.classList.remove('invisible');

    let arr = [];
    let str = '';
    Array.from(formContent).forEach(function(element,index){
        arr.push(element);
        if(arr[index] == '\n'){
            arr[index] = '<br>';
        }
        str += arr[index];
    })

    let arrb = [];
    let strb = '';
    Array.from(formBottom).forEach(function(element,index){
        arrb.push(element);
        if(arrb[index] == '\n'){
            arrb[index] = '<br>';
        }
        strb += arrb[index];
    })


    let link1 = '',link2 = '',link3 = '';
    let linkvar = 0;
    if(formAttachment1.length>0){
        linkvar++;
        link1 = linkvar;
    }
    if(formAttachment2.length>0){
        linkvar++;
        link2 = linkvar;
    }
    if(formAttachment3.length>0){
        linkvar++;
        link3 = linkvar;
    }
    let linkHTML = '';
    if(linkvar > 0 ){
        linkHTML = `    <img class="float-start pli" src="icon2.jpg" alt="">
        <p class='pl'><b>Attachment:</b><p/>`;
    }

    let html = `
    <img class="float-start phi" src="icon.jpg" alt="">
            
                <p class="ph"><b>${formHeading}</b> (${formDateTime})</p>

                <br><br>

                <p class="p">${str}</p>

                <br>
                
                <p class="p"><b>Uploaded By:</b></p>
                <p class="p">${strb}</p>


<p>${linkHTML}
<p class="linkTxt">${link1}</p>
<p class="text-light linkLink"><a href="#" class="link">${formAttachment1}</a></p>
<p class="linkTxt">${link2}</p>
<p class="text-light linkLink"><a href="#" class="link">${formAttachment2}</a></p>
<p class="linkTxt">${link3}</p>
<p class="text-light linkLink"><a href="#" class="link">${formAttachment3}</a></p>
</p>

    `;

    let content = document.getElementById('content');
    content.innerHTML = html;
    
    
let topImg = document.getElementById('topImg');
let bottomImgContainer = document.getElementById('bottomImgContainer');
let topImgHeight = topImg.offsetHeight;
// bottomImgContainer.setAttribute('style',`position:absolute; top:${screen.height - topImgHeight}`);

let contentagain = document.getElementById('content');
contentagain.style.height = (screen.height - (topImgHeight+topImgHeight+(topImgHeight/2)+bottomImgContainer.offsetHeight)) + 'px';

}
else{
    let msg = document.getElementById('msg');
    msg.innerHTML = `<div class="alert alert-danger" role="alert">
    first fill all the given boxes with minimum 1 letter or use Samples to create fake LPU Anouncement!
  </div>`;
    setTimeout(function(){
        msg.innerHTML = '';
    },6000);
}
linkvar = 0;
linkHTML = '';
    x.preventDefault();
}


let back = document.getElementById('back');
back.addEventListener('click',function(){
    let body = document.getElementById('body');
    body.classList.add('bg-dark');
    body.classList.add('px-2');

    let firstContainer = document.getElementById('firstContainer');
    firstContainer.classList.remove('invisible');

    let thirdContainer = document.getElementById('thirdContainer');
    thirdContainer.classList.add('invisible');

});


function autofill(id){
    let formHeading = document.getElementById('formHeading');
    let formDateTime = document.getElementById('formDateTime');
    let formContent = document.getElementById('formContent');
    let formBottom = document.getElementById('formBottom');

    let formAttachment1= document.getElementById('formAttachment1');
    let formAttachment2= document.getElementById('formAttachment2');
    let formAttachment3= document.getElementById('formAttachment3');

    if(id == 1){
        formHeading.value = `LPU Global: Biggest Opportunity Ever to Study and earn transcript from our Partner University by doing a Semester Online on 100% tuition fee scholarship`;
        formDateTime.value = `07/05/2021 11:05:53 AM`;
        formContent.value = `Division of International Affairs brings a wonderful opportunity for LPU students of Computer Science, Information and Electrical Engineering, Management, Humanities Social Sciences and Designing to attend a fully tuition fee waived semester online with our Partner Asian University, Taiwan.

 

        Eligibility: ·        
        
        1. Minimum CGPA 6.5 with no backlogs and reappearances ·        
        
        2. Regular Attendance ·        
        
        3. Active Participant in extracurricular activities ·        
        
        4. Excellent communication skills  
        
         
        
        Interested students must fill the form before: 30th July 2021
        
        https://forms.gle/Cs56EBU7CfKd2RKG6
        
         
        
        Please Note: ·        
        
        1. Only 15 students will be selected on the basis on multi-level interviews ·   
        
        2. Seats would be filled on first in-first out basis and are fully at the discretion of selection committee at LPU & partner University ·        
        
        3. The classes will be taken online by the partner university.
        
         
        
        For further information please contact Division of International Affairs.`;
        formBottom.value = `Office of HOD
        Division of International Affairs`;
        formAttachment1.value = '';
        formAttachment2.value = '';
        formAttachment3.value = '';
    }
    else if(id == 2){
        formHeading.value = `Analyzed samples collection (CIF)`;
        formDateTime.value = `07/08/2021 03:42:17 PM`;
        formContent.value = `All Students/Research Scholars are informed to collect their analyzed samples from Central Instrumentation Facility Office 38-106 till 25th July21.  CIF will not be responsible for any damage or discard of analyzed samples after the given time period.`;
        formBottom.value = `Office of HOD
        Division of Research and Development`;
        formAttachment1.value = '';
        formAttachment2.value = '';
        formAttachment3.value = '';
    }
    else if(id == 3){
        formHeading.value = `The art of Journaling : Work through your problems, rather than avoiding them. Shared by psychologists from Counseling & happiness cell. (Ref. No. LPU/DSR/IC/210420/001)`;
        formDateTime.value = `07/08/2021 10:18:37 AM`;
        formContent.value = `Dear Students,

        “Open the window to your soul and with the stroke of a pen, paint your own emotional masterpiece.”
        
          “It has been said that writing is a window to the soul. Writing is a creative form of artistic expression that allows you to explore your innermost emotions all while painting a colorful masterpiece with words.”
        
        Did you know that journaling has been shown to help you de-stress, eat healthier, boost self-confidence, and help you solve your own problems?
        
        When you express your feelings through written expression, you are beginning to work through your problems, rather than avoiding them.
        
        Journaling regularly can bring a sense of peace and tranquility.
        
         Journaling is a way to track everyday life and figuring out what makes us tick and happy or upset.
        
        Psychologists from counseling & happiness cell - share tips to help students understand “how to express emotions through the art of journaling.”
        
        We care about your emotional and psychological well-being.
        
        Please email us – counseling.happiness@lpu.co.in

        PFA – Express emotions through the art of journaling`;
        formBottom.value = `Office of HOD
        Division of Student Relationship`;
        formAttachment1.value = 'mailer Expressing Emotions Through Journaling-converted.pdf';
        formAttachment2.value = '';
        formAttachment3.value = '';
    }
    else if(id == 4){
        formHeading.value = `Combating Corona: Online Happiness Program by Art of Living`;
        formDateTime.value = `04/16/2020 02:18:37 PM`;
        formContent.value = `If you’re struggling to stay happy, calm and focused and find it hard to break the cycle, its time to PAUSE, REORIENT AND RESTART. Deep down, you know it’s time to make a change.

 

        We are happy to share that  Art of Living, India is conducting an online version of it's Certified Happiness Program from 17-19th April 2020. Millions all over 156 countries have benefited from the Sudarshan Kriya technique that is taught in this program. Through a tried and tested combination of yoga, powerful breathing exercises, meditation and practical wisdom, the Art of Living Happiness Program assures in helping us to live life the way we’ve always wanted to:
        
         
        
        Calmly, confidently, and armed with the tools we need to deal with whatever life throws at you.
        
         
        
        Benefits of Attending the Program:
        
        1.      Techniques for Mind Management and Meditation
        
        2.      Learn Life Skills
        
        3.      Enhance the quality of your life
        
        4.      Reflex, Relax, Rejuvenate
        
         
        
        Training Schedule:
        
         
        
        Date	  April 17 to 19, 2020 (3 days)
        Time	 Batch 3: 05:30-08:30 pm (No duty leave will be provided)
        Faculty	
         Dr. Virat Chirania, Sr. AOL Faculty, TEDx Speaker, Life Coach
       
         Mr. Hemant Upadhyay, AOL Faculty, Singer, Cricket Commentator
       
        Link to Register for LPU Faculty	 http://tinyurl.com/RegOHP
         Program Fee	 Rs. 1000 (One Thousand Only)
        
       
       Note :
       
       1. This Program will certify all the attendees of Lovely Professional University 
       
       2. Interested students can register for the course for Batch 3 only. No duty leave will be provided for attending the program.
       
       3. Pregnant women, Or someone on Medication for Schizophrenia must not opt for this program.
       
        
       
       For detailed information you can talk to the concerned AOL Coordinator at 9920569569, 8977396044, 9810265259`;
        formBottom.value = `Office of HOD
        Human Resource Development Center`;
        formAttachment1.value = '';
        formAttachment2.value = '';
        formAttachment3.value = '';
    }
    else if(id == 5){
        formHeading.value = ``;
        formDateTime.value = ``;
        formContent.value = ``;
        formBottom.value = ``;
        formAttachment1.value = '';
        formAttachment2.value = '';
        formAttachment3.value = '';
    }

    kickOptionsFun();
}
