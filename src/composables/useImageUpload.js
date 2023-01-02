// import { watch , ref } from "vue"
// export function useImageUpload(){
//     const imagefile = ref("")
//     const imageurl = ref("")
//     function imageAdd(e){
//         // console.log(e)
//         if(e.target.files.length === 0){
//             imagefile.value=""
//             imageurl.value = ""
//             return;
//         }
//         // console.log("else")
    
//         imagefile.value = e.target.files[0];
//         // console.log(imagefile.value)
    
//     }
//     watch(imagefile, (imagefile)=>{
//         if(!(imagefile instanceof File)){
//             return
//         }
//         let filereader = new FileReader();
        
    
//         filereader.readAsDataURL(imagefile)
        
    
//         filereader.addEventListener("load", ()=>{
//             imageurl.value = filereader.result
//             // console.log(imageurl.value)
//         })
//     })

//     return{
//         imagefile,
//         imageurl,
//         imageAdd,
//     }
// }
import { ref, watch } from "vue";

export function useImageUpload() {
  let imageFile = ref("");
  let imageUrl = ref("");

  function handleImageSelected(event) {
    if (event.target.files.length === 0) {
      imageFile.value = "";
      imageUrl.value = "";
      return;
    }

    imageFile.value = event.target.files[0];
  }

  watch(imageFile, (imageFile) => {
    if (!(imageFile instanceof File)) {
      return;
    }

    let fileReader = new FileReader();

    fileReader.readAsDataURL(imageFile);

    fileReader.addEventListener("load", () => {
      imageUrl.value = fileReader.result;
    });
  });

  return {
    imageFile,
    imageUrl,
    handleImageSelected,
  };
}