let data = { volume:70, muted: false}

//...data spread operator
//change volume data
data = {...data, volume:25};
console.log(data);

//change muted data
data = {...data, muted:true};
console.log(data);

