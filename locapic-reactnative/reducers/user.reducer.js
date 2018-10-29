export default function(user = {}, action){
if(action.type == 'setUser'){
  var color;
    var number = Math.round(Math.random() *100)

    if (number <= 24) {
      color = "#e67e22"
    }else if (number <= 49) {
      color = "#3498db"
    }else if (number <= 75) {
        color = "#16a085";
      }else{
        color = "#e74c3c";
      }
return {...action.user, color:color}
}else{
  return user;
}
}
