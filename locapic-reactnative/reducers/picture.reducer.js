export default function(pictures = [], action){
if(action.type == 'setPicture'){

return [...action.pictures]

}else{
  return pictures;
}
}
