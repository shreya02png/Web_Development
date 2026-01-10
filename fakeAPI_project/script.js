const button= document.getElementById("fetchBtn");
const output= document.getElementById("output");

function fakeAPI(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                name:"saloni sharma",
                email:"saloni@gmail.com"
            });

        },2000);
    });
}

button.addEventListener("click",async()=>{
    output.innerText="Loading user data...";

    try{
        const data=await fakeAPI();

        output.innerHTML=`
        <p>Name:${data.name}</p>
        <p>Email:${data.email}</p>
        `;
    }catch(error){
        output.innerText="Something went wrong!";
    }
})