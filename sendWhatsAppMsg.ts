const katarina:any = require('open')

function titleCase(name: string) {
    var sentence = name.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 return sentence.join(" ");
 }


function sendWhatsAppMsg(contact: any[]){
    contact.map(element => {
        

    setTimeout(async () => {
        const name:string = titleCase(element[0])
        const msg: string = `Hi ${name}, I'm Ziad from AIESEC`
        let number: string
        if(element[1].length == 9){
            number = `+212${element[1]}`
        }else{
            number = "+" + element[1]
        }

        await katarina(`https://api.whatsapp.com/send?phone=${number}&text=${msg}`)


        }, 8000)


    })
}

sendWhatsAppMsg([[
    "Ziad Abouelfarah", "636959499"
]])