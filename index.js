console.log("Hello index.js");
let g_index = -1;
console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Oliver Smith',
        age: 20,
        city: 'New York',
        language: 'Python',
        framework: 'Django',
        email: 'Smitholiver45@gmail.com',
        image: 'https://randomuser.me/api/portraits/men/65.jpg'
    },

    {
        name: 'Brad Gibson',
        age: 28,
        city: 'Los Angeles',
        language: 'JavaScript',
        framework: 'Angular',
        email: 'Brad.gibson@yahoo.com',
        image: 'https://randomuser.me/api/portraits/men/59.jpg'
    },

    {
        name: 'Olivia Cabello',
        age: 18,
        city: 'Austin',
        language: 'Python',
        framework: 'Django',
        email: 'Cabello.olivia@gmail.com',
        image: 'https://randomuser.me/api/portraits/women/76.jpg'
    },

    {
        name: 'Ava Megan',
        age: 23,
        city: 'Dallas',
        language: 'Python',
        framework: 'Flask',
        email: 'Ava.23@yahoo.com',
        image: 'https://randomuser.me/api/portraits/women/93.jpg'
    },

    {
        name: 'Oscar Rhys',
        age: 25,
        city: 'California',
        language: 'Go',
        framework: 'Revel',
        email: 'Oscar.rhys@gmail.com',
        image: 'https://randomuser.me/api/portraits/men/23.jpg'
    },
    {
        name: 'John Thomas',
        age: 26,
        city: 'Columbus',
        language: 'Python',
        framework: 'Flask',
        email: 'Thomas_john.2345@gmail.com',
        image: 'https://randomuser.me/api/portraits/men/79.jpg'
    },{
        name: 'Cressida Jones',
        age: 26,
        city: 'Port Land',
        language: 'C++',
        framework: ' .Net Framework',
        email: 'Cressida.jones@gmail.com',
        image: 'https://randomuser.me/api/portraits/women/30.jpg'
    },
    {
        name: 'Noah Sallow',
        age: 31,
        city: 'Austin',
        language: 'Go',
        framework: 'Martini',
        email: 'Noah_Sallow@gmail.com',
        image: 'https://randomuser.me/api/portraits/men/86.jpg'
    },
    {
        name: 'Beatrix Brown',
        age: 22,
        city: 'Las Vegas',
        language: 'Java',
        framework: 'Spring',
        email: 'BeatrixBrown.@gmail.com',
        image: 'https://randomuser.me/api/portraits/women/78.jpg'
    },{
        name: 'Eva Williams',
        age: 29,
        city: 'California',
        language: 'Python',
        framework: 'CherryPy',
        email: 'Eva_Williams@yahoo.com',
        image: 'https://randomuser.me/api/portraits/women/90.jpg'
    }
]

// Closure
// CV Iterator
function cvIterator(profiles) {
      
    return {
        next: function () {
            return g_index < profiles.length ?
                { value: profiles[g_index], done: false } :
                { done: true }
        }
       
    };
}

function cvIteratorBack(profiles) {
    // let nextIndex = index;
    
    return {
        prev: function () {
            return g_index >= 0 ?
                { value: profiles[g_index], done: false } :
                { done: true }
        }
    };
}

const candidates = cvIterator(data);
const candidatesBack = cvIteratorBack(data);
nextCV();
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

const prev = document.getElementById('prev');
prev.addEventListener('click',prevCV);

function prevCV() {
    g_index--;
    const currentCandidates = candidatesBack.prev().value;
   
    console.log("prev: "+g_index);
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    let prevButton = document.getElementById('prev');
    console.log(currentCandidates);
    if(currentCandidates!=undefined){
        image.innerHTML = `<img style="width:230px; height:230px; border:6px solid rgb(68, 109, 103); border-radius:50%; "src='${currentCandidates.image}'>`;
        profile.innerHTML = `<ul class="list-group text-center">
        <li class=" " style="font-weight:bold" >Name : ${currentCandidates.name}</li>
        <li class="list-group-item list-group-item-dark list-group-item-action"style="font-weight:bold">Age : ${currentCandidates.age}</li>
        <li class="list-group-item list-group-item-dark list-group-item-action"style="font-weight:bold">Location : ${currentCandidates.city}</li>
        <li class="list-group-item list-group-item-dark list-group-item-action"style="font-weight:bold">Proficient Language : ${currentCandidates.language}</li>
        <li class="list-group-item list-group-item-dark list-group-item-action"style="font-weight:bold">Framework : ${currentCandidates.framework}</li>
        <li class="list-group-item list-group-item-dark list-group-item-action"style="font-weight:bold">Email Id : ${currentCandidates.email}</li>
       
      </ul>`
     // prevButton.setAttribute('disabled',false);
    }else{
        
        //  let datatoggle = document.createAttribute('data-toggle');
        //  let datatarget = document.createAttribute('data-target');
        //  datatoggle.value = 'modal';
        //  datatarget.value= '#exampleModal';
        prevButton.setAttribute('disabled',false);
    
 
     //alert('End of candidate applications');
     // window.location.reload();
    }
 }
function nextCV() {
    let prevButton = document.getElementById('prev');
    prevButton.removeAttribute('disabled');
    //console.log(prevButton.disabled);
    g_index++;
   const currentCandidates = candidates.next().value;
   
   console.log("next: "+g_index);
   let image = document.getElementById('image');
   let profile = document.getElementById('profile');
  
   if(currentCandidates!=undefined){
       image.innerHTML = `<img style="width:230px; height:230px; border:6px solid rgb(68, 109, 103); border-radius:80%; "src='${currentCandidates.image}'>`;
       profile.innerHTML = `<ul class="list-group text-center">
       <li class="list-group-item list-group-item-primary list-group-item-action " style="font-weight:bold" >Name : ${currentCandidates.name}</li>
       <li class="list-group-item list-group-item-primary list-group-item-action"style="font-weight:bold">Age : ${currentCandidates.age}</li>
       <li class="list-group-item list-group-item-primary list-group-item-action"style="font-weight:bold">Location : ${currentCandidates.city}</li>
       <li class="list-group-item list-group-item-primary list-group-item-action"style="font-weight:bold">Proficient Language : ${currentCandidates.language}</li>
       <li class="list-group-item list-group-item-primary list-group-item-action"style="font-weight:bold">Framework : ${currentCandidates.framework}</li>
       <li class="list-group-item list-group-item-primary list-group-item-action"style="font-weight:bold">Email Id : ${currentCandidates.email}</li>
      
     </ul>`
   }else{
        let nextButton = document.getElementById('next');
        let datatoggle = document.createAttribute('data-toggle');
        let datatarget = document.createAttribute('data-target');
        datatoggle.value = 'modal';
        datatarget.value= '#exampleModal';
        nextButton.setAttributeNode(datatoggle);
        nextButton.setAttributeNode(datatarget);

    //alert('End of candidate applications');
    // window.location.reload();
   }
}

function reload(){
    window.location.reload();
}