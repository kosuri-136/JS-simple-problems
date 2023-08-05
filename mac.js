let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let seq = parseInt(readLine());
let life;
let tlife=0;
for(let i=1;i<=seq;i++)
{
    {
        life = parseInt(readLine());
        if(life>0)
        {
            tlife=(tlife+life);
        }
        
    }
}
console.log(tlife);