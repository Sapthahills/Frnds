
const button=document.querySelector("button")
button.addEventListener("click",frndzfn)

// let resultdiv= document.createElement("div")
//     resultdiv.id="result"
//     console.log("created")



function frndzfn(){

    const input= document.getElementById("input")
    const ffrndz=input.options[input.selectedIndex].value

    let Nickname=0,City=0,Ph=0

    switch(ffrndz){

    case "Abitha":
        Nickname="Abithab mama"
        City="Vellore"
        Ph=9445623236
        break;

        case "Arul Raj":
            Nickname="Arul"
            City="Salem"
            Ph=9025813776
            break;

            case "Aravind":
                Nickname="Lawer thambi"
        City="Trichy"
        Ph=9384926547
        break;

         case "Divya":
                    Nickname="Mummy"
        City="Thiruthani"
        Ph=7845648702
        break;

                    case "Dharshini":
                        Nickname="Thalaivii"
        City="Mayiladuthurai"
        Ph=6382659736
        break;

                        case "Gaayathiri":
                            Nickname="Gaaya"
        City="Chennai"
        Ph=9789832735
        break;
        
        case "Nithyasree":
            Nickname="Buddy"
City="Sholingur"
Ph=6379856932
break;

case "Sapthagiri":
    Nickname="7hills"
City="Villupuram"
Ph=9677608604
break;
}

    let text=`Name: ${ffrndz} <br> <br>
              ${Nickname}  <br> <br>
              City: ${City} <br> <br>
              Phone: ${Ph}`

    console.log(text)
document.getElementById("result").innerHTML = text


}
